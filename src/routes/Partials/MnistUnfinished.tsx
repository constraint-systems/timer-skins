import { useRef } from "react";
import {
  dateToReadableTime,
  secondsToColonDuration,
  secondsToReadableTime,
} from "../../shared/utils";
import { DataType } from "../../types";

const lookup = {
  0: [0, 5923],
  1: [5923, 12665],
  2: [12665, 18623],
  3: [18623, 24754],
  4: [24754, 30596],
  5: [30596, 36017],
  6: [36017, 41935],
  7: [41935, 48200],
  8: [48200, 54051],
  9: [54051, 60000],
};
const imageSideSize = 28;
const spriteSideSize = 2048;

const imagesPerSpriteSide = Math.floor(spriteSideSize / imageSideSize);
const imagesPerSheet = imagesPerSpriteSide * imagesPerSpriteSide;

function Dev({ data }: { data: DataType }) {
  const time = secondsToColonDuration(
    data.startTime + data.duration - data.currentSeconds,
  );
  const timeString = time.split(" ")[0].padStart(5, "0");
  const timeStringArray = timeString.split("").filter((sym) => sym !== ":");

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div
            className="flex items-end absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 28 * 2 * 4,
            }}
          >
            {timeStringArray.map((number, i) => {
              const [start, end] = lookup[parseInt(number)];
              const picker =
                Math.floor(Math.random() * (end - start)) + start;
              const sheet = Math.floor(picker / imagesPerSheet);
              const y = Math.floor(
                (picker % imagesPerSheet) / imagesPerSpriteSide,
              );
              const x = (picker % imagesPerSheet) % imagesPerSpriteSide;
              const multipler = 2;
              return (
                <div
                  style={{
                    width: 28 * multipler,
                    height: 28 * multipler,
                    backgroundImage: `url(mnist_tile_solid_${sheet}.png)`,
                    imageRendering: "pixelated",
                    backgroundSize: `${spriteSideSize * multipler}px ${spriteSideSize * multipler}px`,
                    backgroundPosition: `-${imageSideSize * multipler * x}px -${imageSideSize * multipler * y}px`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dev;
