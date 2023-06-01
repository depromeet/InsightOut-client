import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: 'rgba(62, 64, 76, 0.7);', //change the background
  },
  dialog: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '24px',
    padding: '40px',
  },
  header: {
    marginBottom: '40px',
  },
  footer: {
    marginTop: '40px',
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
