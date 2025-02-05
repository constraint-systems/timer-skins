export function dateToSeconds(date: Date) {
  return Math.floor(date.getTime() / 1000);
}

// async load image
export async function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = () => resolve(image);
    image.onerror = reject;
  });
}

export function getRandomHexColor(): string {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
}

export function dateToReadableTime(date: Date): string {
  let hours = date.getHours(); // Get the hour in 24-hour format
  const minutes = date.getMinutes(); // Get the minutes
  const amPm = hours >= 12 ? "pm" : "am"; // Determine am/pm

  // Convert to 12-hour format
  hours = hours % 12 || 12; // Adjust for 12-hour clock, handling midnight (0)

  // Format hours and minutes with leading zeroes if needed
  const formattedHours = hours.toString();
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${amPm}`;
}

export function secondsToReadableTime(seconds: number): string {
  const timezoneOffset = new Date().getTimezoneOffset();
  const date = new Date((seconds + timezoneOffset * 60) * 1000); // Convert seconds to milliseconds

  return dateToReadableTime(date);
}

export function secondsToReadableDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let durationString = "";
  if (hours > 0) {
    durationString += `${hours}h `;
  }
  if (minutes > 0 || hours > 0) {
    durationString += `${minutes}m `;
  }
  if (remainingSeconds > 0 || durationString === "") {
    durationString += `${remainingSeconds}s`;
  }

  return durationString.trim();
}

export function secondsToColonDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let durationString = "";
  if (hours > 0) {
    durationString += `${hours}:`;
  }
  durationString += `${minutes.toString().padStart(2, "0")}:`;
  durationString += remainingSeconds.toString().padStart(2, "0");

  return durationString;
}

export function secondsToReadableDurationLong(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let durationString = "";
  if (hours > 0) {
    durationString += `${hours} hours `;
  }
  if (minutes > 0) {
    durationString += `${minutes} minutes `;
  }
  if (remainingSeconds > 0 || durationString === "") {
    durationString += `${remainingSeconds}s`;
  }

  return durationString.trim();
}

// Turn the points returned from perfect-freehand into SVG path data.
export function getSvgPathFromStroke(stroke: [number, number][]): string {
  if (!stroke.length) return "";

  const d = stroke.reduce<string[]>(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(
        x0.toString(),
        y0.toString(),
        ((x0 + x1) / 2).toString(),
        ((y0 + y1) / 2).toString(),
      );
      return acc;
    },
    ["M", ...stroke[0].map(String), "Q"],
  );

  return d.join(" ");
}

export type SvgPathType = "linear" | "quadratic" | "cubic";

/**
 * Convert a set of points into SVG path data.
 * @param points - Array of [x, y] coordinate tuples.
 * @param type - Type of path to generate ("linear", "quadratic", or "cubic").
 * @returns SVG path string.
 */
export function getSvgPathFromPoints(
  points: [number, number][],
  type: SvgPathType = "linear",
): string {
  if (points.length === 0) return "";

  const d: string[] = ["M", points[0][0].toString(), points[0][1].toString()];

  if (type === "linear") {
    for (let i = 1; i < points.length; i++) {
      d.push("L", points[i][0].toString(), points[i][1].toString());
    }
  } else if (type === "quadratic" && points.length > 1) {
    d.push("Q");
    for (let i = 0; i < points.length - 1; i++) {
      const [x0, y0] = points[i];
      const [x1, y1] = points[i + 1];
      d.push(
        ((x0 + x1) / 2).toString(),
        ((y0 + y1) / 2).toString(),
        x1.toString(),
        y1.toString(),
      );
    }
  } else if (type === "cubic" && points.length > 2) {
    d.push("C");
    for (let i = 1; i < points.length - 1; i++) {
      const [x0, y0] = points[i - 1];
      const [x1, y1] = points[i];
      const [x2, y2] = points[i + 1];
      d.push(
        ((x0 + x1) / 2).toString(),
        ((y0 + y1) / 2).toString(),
        ((x1 + x2) / 2).toString(),
        ((y1 + y2) / 2).toString(),
        x2.toString(),
        y2.toString(),
      );
    }
  }

  // d.push("Z");
  return d.join(" ");
}
