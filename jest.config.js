module.exports = {
  roots: ['src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.spec.(ts|tsx)'],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/elements/**/*.{ts,tsx}',
    'src/hooks/**/*.{ts,tsx}',
    'src/utils/**/*.{ts,tsx}',
    '!src/*/src/components/elements/Select/Select.tsx',
    '!src/*/src/components/elements/Select/Select.types.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'jestGlobalMocks.ts',
    '.module.ts',
    '<rootDir>/src/components/elements/index.ts',
    '<rootDir>/src/components/elements/Layout/index.ts',
    '<rootDir>/src/app/main.ts',
    'Select.tsx',
    'Select.types.tsx',
    'Select.styles.tsx',
    'SelectFHC.tsx',
    '.mock.ts',
    '<rootDir>/index.ts',
    '.styles.ts',
    '.styles.tsx',
    '.types.tsx',
    'Icon.tsx',
  ],
};
