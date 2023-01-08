const config = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.[jt]sx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    'node_modules',
    '.module.scss',
    '<rootDir>/server/server.js',
    '<rootDir>/server/db/migrations/*',
    '<rootDir>/server/db/seeds/*',
    '<rootDir>/server/db/connection.js',
    '<rootDir>/server/db/knexfile.js',
  ],
}

module.exports = config