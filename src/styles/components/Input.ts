const commonInputStyles = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '4px',
  fontSize: 'sm',
};

export const InputStyles = {
  baseStyle: {
    field: {
      _placeholder: {
        color: 'grey.01',
      },
    },
  },
  variants: {
    outline: {
      field: {
        ...commonInputStyles,
        borderColor: 'grey.02',
        _hover: {
          borderColor: 'grey.01',
        },
        _focus: {
          ...commonInputStyles,
          borderColor: 'grey.01',
          boxShadow: 'none',
        },
      },
    },
    filled: {
      field: {
        borderRadius: '4px',
        borderWidth: 0,
        backgroundColor: 'white.02',
        _placeholder: {
          color: 'grey.01',
        },
        _hover: {
          backgroundColor: 'grey.03',
        },
        _focus: {
          background: 'grey.03',
        },
      },
    },
  },
};

export const TextareaStyles = {
  baseStyle: {
    _placeholder: {
      color: 'grey.02',
    },
  },
  variants: {
    outline: {
      ...commonInputStyles,
      borderColor: 'grey.02',
      _hover: {
        borderColor: 'grey.01',
      },
      _focus: {
        ...commonInputStyles,
        borderColor: 'grey.01',
        boxShadow: 'none',
      },
    },
    filled: {
      borderRadius: '4px',
      borderWidth: 0,
      backgroundColor: 'white.02',
      _placeholder: {
        color: 'grey.01',
      },
      _hover: {
        background: 'grey.03',
      },
      _focus: {
        background: 'grey.03',
      },
    },
  },
};
