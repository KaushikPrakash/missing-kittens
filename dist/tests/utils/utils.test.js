"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./../../src/controller/kittenRescue/utils");
describe("findCoordinates", function () {
    it("should return the correct coordinates for a flight path going forward", function () {
        var flightPath = {
            directions: ["forward", "forward", "forward"]
        };
        var expected = { x: 0, y: 3 };
        expect((0, utils_1.findCoordinates)(flightPath)).toEqual(expected);
    });
    it("should return the correct coordinates for a flight path going backward", function () {
        var flightPath = {
            directions: ["backward", "backward", "backward"]
        };
        var expected = { x: 0, y: -3 };
        expect((0, utils_1.findCoordinates)(flightPath)).toEqual(expected);
    });
    it("should return the correct coordinates for a flight path going forward and backward", function () {
        var flightPath = {
            directions: ["forward", "backward", "forward", "backward"]
        };
        var expected = { x: 0, y: 0 };
        expect((0, utils_1.findCoordinates)(flightPath)).toEqual(expected);
    });
    it("should return the correct coordinates for a flight path with turns", function () {
        var flightPath = {
            directions: ["forward", "right", "forward", "left", "forward"]
        };
        var expected = { x: 1, y: 2 };
        expect((0, utils_1.findCoordinates)(flightPath)).toEqual(expected);
    });
});
