const styles = {
  global: {
    '*': {
      boxSizing: 'border-box',
    },
    'html, body': {
      margin: 0,
      padding: 0,
      height: '100%',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    'textarea: focus, input: focus, button: focus': {
      outline: 'none !important',
    },
    'textarea: focus-visible, input: focus-visible, button: focus-visible': {
      outline: 'none !important',
    },
    ul: {
      listStyle: 'none',
    },
  },
};

export default styles;
