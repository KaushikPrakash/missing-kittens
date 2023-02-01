import { Orientation, DirectionList, Coordinates } from "./../../types"

const turnRight = (dir: Orientation) => (dir + 1) % 4;
const turnLeft = (dir: Orientation) => (dir + 3) % 4;

export const findCoordinates = (flightPath: DirectionList): Coordinates => {

  const change = [[0, 1], // North
  [1, 0], // East
  [0, -1], // South
  [-1, 0] // West
  ];

  let x = 0;
  let y = 0;
  let orientation = Orientation.North;

  for (const move of flightPath.directions) {
    if (move === "forward") {
      x += change[orientation][0];
      y += change[orientation][1];
    } else if (move === "right") {
      orientation = turnRight(orientation);
    } else if (move === "left") {
      orientation = turnLeft(orientation);
    } else if (move === "backward") {
      x -= change[orientation][0];
      y -= change[orientation][1];
    }
  }
  return ({ x, y });
};