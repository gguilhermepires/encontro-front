import { extendTheme } from '@chakra-ui/react';

import {
  TextStyles as Text,
  HeadingStyles as Heading,
} from './components/Text';
import { ButtonStyles as Button } from './components/Button';
import {
  InputStyles as Input,
  TextareaStyles as Textarea,
} from './components/Input';
import { CheckboxStyles as Checkbox } from './components/Checkbox';

export const theme = extendTheme({
  breakpoints: {
    '3xs': '40rem',
    '2xs': '45em',
    xs: '50em',
    sm: '55rem',
    md: '60rem',
    lg: '65rem',
    xl: '70rem',
    '2xl': '75em',
    '3xl': '80rem',
    '4xl': '85rem',
    '5xl': '90rem',
    '6xl': '95em',
    '7xl': '100rem',
  },
  fontSizes: {
    // 8% increase
    '2xs': '0.7rem',
    xs: '0.81rem',
    sm: '0.945rem',
    md: '1.08rem',
    lg: '1.215rem',
    xl: '1.35rem',
    '2xl': '1.62rem',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
    label: 'Roboto, sans-serif',
  },
  shadows: {
    outline: 'none',
  },
  colors: {
    red: {
      '01': '#DC0000',
      '02': '#FFE0E0',
      // old: TODO: remove
      '600': '#C8425C',
      '500': '#A51B35',
      '50': '#FFF3F6',
    },
    pink: {
      '01': '#C8425C',
      '02': '#FFF3F6',
    },
    purple: {
      '01': '#925AED',
      '02': '#F3EDFD',
    },
    orange: {
      '01': '#D75500',
      '02': '#FF9F1C',
      '03': '#FFEBDE',
      // old: TODO: remove
      '600': '#D75500',
      '500': '#FF9F1C',
      '100': '#FFEBDE',
    },
    yellow: {
      '01': '#FFF177',
    },
    blue: {
      '01': '#001D3D',
      '02': '#136B8B',
      // old: TODO: remove
      '600': '#004766',
      '500': '#005B82',
      '400': '#84A0B1',
      '300': '#DBE4ED',
    },
    green: {
      '01': '#3FA8AA',
      '02': '#46ABAB',
      '02.1': '#3d9999', // 0.2 hover
      '03': '#E2F3F3',
      '04': '#3B883E',
      '05': '#E5FFF0',
      // old: TODO: remove
      '600': '#3B883E',
      '500': '#00A0AD',
      '100': '#E5FCFB',
      '50': '#E5FFF0',
    },
    grey: {
      '01': '#848F9A',
      '02': '#C5C8CD',
      '03': '#E9EDF2',
      // old: TODO: remove
      '700': '#68696B',
      '600': '#8F9094',
      '500': '#C6C8CC',
      '400': '#DCDFE4',
      '300': '#F4F6F8',
      '200': '#E9EDF2',
    },
    white: {
      '01': '#FFFFFF',
      '02': '#F7F8FA',
    },
  },
  styles: {
    global: {
      'body, input, textarea': {
        overflow: 'overlay',
      },
      '::-webkit-scrollbar': {
        width: '1rem',
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backgroundClip: 'content-box',
        border: '0.3rem solid transparent',
      },
      '::-webkit-scrollbar-track': {
        color: 'rgba(0, 0, 0, 0)',
      },
      '.collapse-overflow': {
        overflow: 'initial !important',
      },
      '.simplebar-track.simplebar-vertical .simplebar-scrollbar:before': {
        backgroundColor: 'slateGrey',
      },
      '.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before': {
        backgroundColor: 'slateGrey',
        height: '5px',
        marginTop: '2px',
      },
    },
  },
  components: {
    Text,
    Heading,
    // Button,
    Input,
    Textarea,
    Checkbox,
    FormLabel: { baseStyle: { fontWeight: 'normal' } },
  },
});
