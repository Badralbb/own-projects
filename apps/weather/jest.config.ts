/* eslint-disable*/
export default {
  displayName: 'weather',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/weather',
  collectCoverageFrom: [
    'src/**/*.{tsx,ts,js,jsx}',
    '!src/components/providers/*.{tsx,ts,js,jsx}',
    '!src/app/**/*.tsx',
  ],
};
