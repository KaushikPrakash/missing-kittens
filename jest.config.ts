import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  modulePathIgnorePatterns: ['dist/'],
};
export default config;