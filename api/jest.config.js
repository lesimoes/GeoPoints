module.exports = {
  roots: ['__tests__/'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  collectCoverageFrom: ['./__tests__/*.js>'],
};
