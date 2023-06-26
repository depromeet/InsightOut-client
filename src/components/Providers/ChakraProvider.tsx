'use client';

import { PropsWithChildren } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/styles/theme';

export default function ChakraUIProvider({ children }: PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
