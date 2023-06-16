'use client';

import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export default function ChakraUIProvider({ children }: PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
