/* eslint-disable @typescript-eslint/no-require-imports */
const { resolve } = require('path');
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/test/jest.config.js`);

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'end2end-tests',
    setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
    testMatch: ['<rootDir>/test/**/*.test.ts'],
  },
};
