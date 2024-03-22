module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['jest-environment-jsdom'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  roots: ['<rootDir>/'],
};