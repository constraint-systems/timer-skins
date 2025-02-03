import { atomWithStorage } from "jotai/utils";

export const pointsAtom = atomWithStorage<[number, number][]>(
  "freehand-points",
  [],
);
