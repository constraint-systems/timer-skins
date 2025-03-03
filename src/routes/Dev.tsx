import { useEffect, useRef, useState } from "react";
import { secondsToColonDuration } from "../shared/utils";
import { DataType } from "../types";
import { CameraType, panCamera, zoomCamera } from "../shared/camera";
import * as d3 from "d3";

const digitValues = [
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  7,
  7,
  7,
  8,
  8,
  8,
  9,
  9,
  9,
  ":",
  ":",
  "am",
  "pm",
].map((d) => d.toString());

type NodeType = {
  text: string;
  id: number;
  x?: number;
  y?: number;
};

const simulationRef = {
  simulation: null as any,
  nodes: digitValues.map((v, i) => ({ text: v, id: i })),
  links: [] as any[],
};

function Dev({ data }: { data: DataType }) {
  const [index, setIndex] = useState(0);
  const time = secondsToColonDuration(
    data.startTime + data.duration - data.currentSeconds,
  );
  const [zoomContainer, setZoomContainer] = useState<HTMLDivElement | null>(
    null,
  );
  const [camera, setCamera] = useState<CameraType>({ x: 0, y: 0, z: 1 });
  const [links, setLinks] = useState([]);

  useEffect(() => {
    function ticked() {
      const $digits = document.querySelectorAll(".digits");
      for (let i = 0; i < $digits.length; i++) {
        const node = simulationRef.nodes[i] as NodeType;
        const $digit = $digits[i] as HTMLDivElement;
        $digit.style.transform = `translate(${node.x}px, ${node.y}px)`;
      }

      const $lines = document.querySelectorAll(".link");
      for (let i = 0; i < simulationRef.links.length; i++) {
        const link = simulationRef.links[i];
        const $line = $lines[i] as SVGLineElement;
        $line.setAttribute("x1", link.source.x.toString());
        $line.setAttribute("y1", link.source.y.toString());
        $line.setAttribute("x2", link.target.x.toString());
        $line.setAttribute("y2", link.target.y.toString());
      }
    }

    simulationRef.simulation = d3
      .forceSimulation()
      .nodes(simulationRef.nodes as NodeType[])
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(0, 0))
      .on("tick", ticked);

    let links = digitValues.slice(0, -1).map((_, i) => ({
      source: i,
      target: i + 1,
    }));

    simulationRef.links = links.filter((_) => Math.random() > 0.5);

    setLinks(links);

    simulationRef.simulation.force(
      "link",
      d3
        .forceLink(links)
        .id((d) => (d as NodeType).id)
        .distance(100),
    );
  }, []);

  // function updateLinks() {
  //   const links = simulationRef.links.filter((_) => Math.random() > 0.5);
  //   simulationRef.simulation.force(
  //     "link",
  //     d3
  //       .forceLink(links)
  //       .id((d) => (d as NodeType).id)
  //       .distance(100),
  //   );
  //   if (simulationRef.simulation.alpha() < 0.8) {
  //     simulationRef.simulation.alpha(0.8);
  //   }
  //   setLinks(links);
  // }
  //
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     updateLinks();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden touch-none">
      <div
        className="absolute left-1/2 top-1/2 transform"
        style={{
          transformOrigin: "0 0",
          transform: `scale(${camera.z}) translate(-50%, -50%) translate(${camera.x}px, ${camera.y}px)`,
        }}
        ref={(div) => {
          if (div) {
            setZoomContainer(div);
          }
        }}
      >
        <svg className="overflow-visible relative w-px h-px">
          {links.map((_, i) => {
            return (
              <line key={i} className="link" strokeWidth="4" stroke="#222" />
            );
          })}
        </svg>
        {digitValues.map((d, i) => {
          return (
            <div
              key={i}
              className={`digits absolute -ml-8 -mt-8 bg-neutral-800 w-16 h-16 flex justify-center items-center rounded-full left-0 top-0 text-white text-xl ${
                i === index ? "text-red-500" : ""
              }`}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dev;
