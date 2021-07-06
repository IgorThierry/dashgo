import { extendTheme } from '@chakra-ui/react';
import { mode, darken, whiten } from '@chakra-ui/theme-tools';

const ButtonStyle = {
  variants: {
    primary: props => ({
      bg: mode('btnPrincipalBgColor', 'btnPrincipalBgColorDark')(props),
      color: mode('btnPrincipalColor', 'btnPrincipalColorDark')(props),
      _hover: {
        bg: mode(
          darken('btnPrincipalBgColor', 20),
          whiten('btnPrincipalBgColorDark', 20),
        )(props),
      },
    }),
  },
};

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181b23',
      '800': '#1f2029',
      '700': '#353646',
      '600': '#4b4d63',
      '500': '#616480',
      '400': '#797d9a',
      '300': '#9699b0',
      '200': '#b3b5c6',
      '100': '#d1d2dc',
      '50': '#eeeef2',
    },
    btnPrincipalBgColor: '#fff',
    btnPrincipalColor: '#000',

    btnPrincipalBgColorDark: '#000',
    btnPrincipalColorDark: '#fff',
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
  components: {
    Button: ButtonStyle,
  },
});
