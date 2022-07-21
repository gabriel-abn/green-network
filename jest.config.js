/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// const { pathsToModuleNameMapper } = require("ts-jest");
// const { compilerOptions } = require("./tsconfig");

module.exports = {
  roots: ["<rootDir>/tests"],
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  collectCoverage: true,
  coverageProvider: "v8",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  //   prefix: "<rootDir>/src",
  // }),
  moduleNameMapper: {
    "^@application/(.*)": "<rootDir>/src/application/$1",
    "^@domain/(.*)": "<rootDir>/src/domain/index",
    "^@infra/(.*)": "<rootDir>/src/infra/$1",
    "^@adapters/(.*)": "<rootDir>/src/adapters/$1",
    "^@helpers/(.*)": "<rootDir>/src/helpers/$1",
    "^@tests/(.*)": "<rootDir>/tests/$1",
  },
};
