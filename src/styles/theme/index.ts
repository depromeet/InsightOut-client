import type { Theme as ChakraTheme, ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { modalTheme } from './components/modalTheme';
// Foundations
import { foundations } from './foundations';
// Global styles (overrides)
import styles from './styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles,
  config,
  ...foundations,
  components: { Modal: modalTheme },
}) as Theme;

type Theme = ChakraTheme & typeof foundations;

export type { Theme };
export default theme;
