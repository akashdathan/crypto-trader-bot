module.exports = {
  setupFiles: [
    '<rootDir>/src/util/dotenv-config.ts',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: [
    'ts',
    'js',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/*.test.(ts|js)',
  ],
  testEnvironment: 'node',
};
