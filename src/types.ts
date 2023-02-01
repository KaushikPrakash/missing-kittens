type Directions = "forward" | "left" | "right" | "backward";

export interface DirectionList {
  directions: Directions[];
}

export enum Orientation {
  North = 0,
  East = 1,
  South = 2,
  West = 3
}

export type Coordinates = {
  x: number,
  y: number
};
