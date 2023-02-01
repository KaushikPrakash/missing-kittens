"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCoordinates = void 0;
var types_1 = require("./../../types");
var turnRight = function (dir) { return (dir + 1) % 4; };
var turnLeft = function (dir) { return (dir + 3) % 4; };
var findCoordinates = function (flightPath) {
    var change = [[0, 1],
        [1, 0],
        [0, -1],
        [-1, 0] // West
    ];
    var x = 0;
    var y = 0;
    var orientation = types_1.Orientation.North;
    for (var _i = 0, _a = flightPath.directions; _i < _a.length; _i++) {
        var move = _a[_i];
        if (move === "forward") {
            x += change[orientation][0];
            y += change[orientation][1];
        }
        else if (move === "right") {
            orientation = turnRight(orientation);
        }
        else if (move === "left") {
            orientation = turnLeft(orientation);
        }
        else if (move === "backward") {
            x -= change[orientation][0];
            y -= change[orientation][1];
        }
    }
    return ({ x: x, y: y });
};
exports.findCoordinates = findCoordinates;
