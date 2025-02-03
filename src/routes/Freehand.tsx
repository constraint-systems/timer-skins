import { useEffect, useState } from "react";
import { DataType } from "../types";
import {
  getSvgPathFromPoints,
  secondsToReadableDuration,
  secondsToReadableTime,
} from "../shared/utils";
import { CurveInterpolator } from "curve-interpolator";
import { useAtom } from "jotai";
import { pointsAtom } from "../state/freehandAtoms";

function Freehand({ data }: { data: DataType }) {
  const [points, setPoints] = useAtom(pointsAtom);
  const [progressPoint, setProgressPoint] = useState<[number, number]>([0, 0]);

  function handlePointerDown(e: React.PointerEvent) {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setPoints([[e.pageX, e.pageY]]);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (e.buttons !== 1) return;
    setPoints([...points, [e.pageX, e.pageY]]);
  }

  const progress = (data.currentSeconds - data.startTime) / data.duration;

  useEffect(() => {
    if (points.length > 1) {
      const interp = new CurveInterpolator(points, {
        tension: 0.2,
        alpha: 0.5,
      });
      const point = interp.getPointAt(progress);
      setProgressPoint(point as [number, number]);
    }
  }, [points, progress]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute px-4 text-neutral-200 top-2 left-0 w-full text-center pt-2 justify-between flex">
        <div>{secondsToReadableTime(data.startTime)}</div>
        <div>{secondsToReadableTime(data.currentSeconds)}</div>
        <div>{secondsToReadableTime(data.startTime + data.duration)}</div>
      </div>
      <div className="absolute flex px-4 justify-between bottom-4 left-0 w-full text-center pt-2">
        <div>{Math.round(progress * 100)}%</div>
        <div>{data.label}</div>
      </div>
      <svg
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        style={{ touchAction: "none" }}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      >
        {points.length > 1 ? (
          <>
            <path
              d={getSvgPathFromPoints(points, "linear")}
              fill="none"
              stroke="#444"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx={progressPoint[0]}
              cy={progressPoint[1]}
              r="14"
              fill="white"
            />
          </>
        ) : null}
      </svg>
    </div>
  );
}

export default Freehand;
