import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [
    {
      from: '../src/app/fonts',
      to: 'src/app/fonts',
    },
  ],
  webpackFinal: async (config) => {
    if (!config.resolve) return config;

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/': path.resolve(__dirname, '../src'),
    };

    if (!config.module?.rules) return config;

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
export default config;
