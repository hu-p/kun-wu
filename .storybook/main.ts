import type { StorybookConfig } from "@storybook/react-vite";
const { mergeConfig } = require('vite');
const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    check: true,
  },
  docs: {
    autodocs: "tag",
  },


  //在stories下可以访问到src/main.ts下的组件,tsconfig.json也需要配置
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          'kun-wu': path.resolve(__dirname, '../src/main.ts'),
          '@': path.resolve(__dirname, '../src'),
          '@public': path.resolve(__dirname, '../../public'),
        },
      },
    });
  },
};
export default config;
