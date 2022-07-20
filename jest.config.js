/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    "@application/(.*)": "<rootDir>/src/application/$1",
    "@entities/(.*)": "<rootDir>/src/entities/$1",
    "@infra/(.*)": "<rootDir>/src/infra/$1",
    "@adapters/(.*)": "<rootDir>/src/adapters/$1",
    "@helpers/(.*)": "<rootDir>/src/helpers/$1",
    "@tests/(.*)": "<rootDir>/tests/$1",
  },
};
