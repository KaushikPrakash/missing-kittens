"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sync object
var config = {
    verbose: true,
    transform: {
        "^.+\\.ts?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    modulePathIgnorePatterns: ['dist/'],
};
exports.default = config;
