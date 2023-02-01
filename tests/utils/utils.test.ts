import { DirectionList, Coordinates } from "./../../src/types";
import { findCoordinates } from "./../../src/controller/kittenRescue/utils";

describe("findCoordinates", () => {
  it("should return the correct coordinates for a flight path going forward", () => {
    const flightPath: DirectionList = {
      directions: ["forward", "forward", "forward"]
    };
    const expected: Coordinates = { x: 0, y: 3 };
    expect(findCoordinates(flightPath)).toEqual(expected);
  });

  it("should return the correct coordinates for a flight path going backward", () => {
    const flightPath: DirectionList = {
      directions: ["backward", "backward", "backward"]
    };
    const expected: Coordinates = { x: 0, y: -3 };
    expect(findCoordinates(flightPath)).toEqual(expected);
  });

  it("should return the correct coordinates for a flight path going forward and backward", () => {
    const flightPath: DirectionList = {
      directions: ["forward", "backward", "forward", "backward"]
    };
    const expected: Coordinates = { x: 0, y: 0 };
    expect(findCoordinates(flightPath)).toEqual(expected);
  });

  it("should return the correct coordinates for a flight path with turns", () => {
    const flightPath: DirectionList = {
      directions: ["forward", "right", "forward", "left", "forward"]
    };
    const expected: Coordinates = { x: 1, y: 2 };
    expect(findCoordinates(flightPath)).toEqual(expected);
  });
});
