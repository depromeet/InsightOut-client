import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const sm = defineStyle({
  w: '632px',
});
const md = defineStyle({
  w: '767px',
});
const resumeAnswer = defineStyle({
  w: '1085px',
  h: '735px',
});

const sizes = {
  sm: definePartsStyle({ dialog: sm }),
  md: definePartsStyle({ dialog: md }),
  resumeAnswer: definePartsStyle({ dialog: resumeAnswer }),
};

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'rgba(62, 64, 76, 0.7);',
  },
  dialog: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '24px',
    padding: '40px',
  },
  closeButton: {
    _hover: {
      bg: 'none',
    },
    top: '1.25rem',
    right: '1.25rem',
  },
  header: {
    padding: 0,
    margin: '0 0 20px 0',
  },
  body: {
    padding: 0,
    margin: '40px 0',
  },
  footer: {
    padding: 0,
    margin: '40px 0 0 0',
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
});
