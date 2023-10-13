const commonStylesOutline = {
  fontSize: 'xs',
  fontWeight: 'medium',
  color: 'green.01',
  backgroundColor: 'white.01',
  borderColor: 'grey.03',
  borderWidth: '1px',
  _hover: {
    backgroundColor: 'white.02',
  },
  _active: {
    backgroundColor: 'white.02',
    borderWidth: '1px',
    borderColor: 'green.01',
  },
};

export const ButtonStyles = {
  baseStyle: {
    WebkitTapHighlightColor: 'transparent',
    borderRadius: '4px',
    _focus: { boxShadow: 'none' },
    _active: { transform: 'scale(0.99)' },
  },
  variants: {
    solid: {
      color: 'white.01',
      fontSize: 'xs',
      fontWeight: 'medium',
      backgroundColor: 'green.02',
      _hover: {
        backgroundColor: 'green.02.1', // suggest color
        _disabled: {
          backgroundColor: 'green.02',
        },
      },
      _active: {
        backgroundColor: 'green.02.1',
      },
    },
    ghost: {
      fontSize: 'xs',
      fontWeight: 'medium',
      _hover: {
        backgroundColor: 'white.02',
      },
      _active: {
        backgroundColor: 'grey.03',
      },
    },
    form: {
      color: 'grey.01',
      fontSize: 'sm',
      fontWeight: 'medium',
      backgroundColor: 'grey.03',
      borderWidth: '1px',
      borderColor: 'grey.02',
      _hover: {
        backgroundColor: 'green.03',
        color: 'green.01',
        borderColor: 'green.01',
      },
      _active: {
        backgroundColor: 'green.03',
        color: 'green.01',
        borderColor: 'green.01',
      },
      _disabled: {
        backgroundColor: 'grey.03 !important',
        borderColor: 'grey.02 !important',
        color: 'grey.01 !important',
        opacity: 0.3,
      },
    },
    outline: { ...commonStylesOutline },
    icon: { ...commonStylesOutline },
  },
};
