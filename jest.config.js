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
    "@tests/(.*)": "<rootDir>/tests/$1",
  },
};
