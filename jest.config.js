module.exports = {
  testEnvironment: "jsdom",
  preset: "react-native",
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react",
      },
    },
  },
  transform: {
    "^.+\\.(ts|js|html)$":
      "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
  moduleFileExtensions: ["js", "ts", "tsx"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)",
  ],
  coverageReporters: ["json-summary", "text", "lcov"],
};
