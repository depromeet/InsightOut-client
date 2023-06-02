import React from 'react';
import * as NextImage from 'next/image';
import type { Preview } from '@storybook/react';
import theme from '../src/styles/theme';
import '../src/app/globals.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme,
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
