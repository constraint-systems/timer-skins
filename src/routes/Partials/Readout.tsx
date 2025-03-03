import { useEffect, useRef, useState } from "react";
import { secondsToColonDuration } from "../shared/utils";
import { DataType } from "../types";
import { CameraType, panCamera, zoomCamera } from "../shared/camera";

function Dev({ data }: { data: DataType }) {
  const [index, setIndex] = useState(0);
  const time = secondsToColonDuration(
    data.startTime + data.duration - data.currentSeconds,
  );
  const timeString = time.split(" ")[0].padStart(5, "0");
  const [zoomContainer, setZoomContainer] = useState<HTMLDivElement | null>(
    null,
  );
  const [camera, setCamera] = useState<CameraType>({ x: 0, y: 0, z: 1 });
  const timeStringArray = timeString.split("").filter((sym) => sym !== ":");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const rows = 10;
  const cols = 6;

  const tempWidth = 56;

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")!;
      ctx.font = "12.5px DepartureMono";
      ctx.textBaseline = "top";
      const measure = ctx.measureText("h");
      // const fontHeight =
      //   measure.fontBoundingBoxAscent + measure.fontBoundingBoxDescent;
      // const measureWidth = ctx.measureText(time.toString());
      // console.log(measureWidth);
      // const fontWidth = measure.width;
      ctx.fillStyle = "white";
      const y = (index % rows) * 16 + 3;
      const x = Math.floor(index / rows) * tempWidth;
      ctx.fillText(time.toString(), x, y);
      setIndex(index + 1);
    }
  }, [canvasRef, data.currentSeconds]);

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
        onClick={() => {
          console.log("ey");
        }}
      >
        <canvas ref={canvasRef} width={tempWidth * 10} height={160} />
      </div>
    </div>
  );
}

export default Dev;
