'use client';

import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const breakpoints = {
  base: '0px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
  max: '1600px',
};

const chakraThemes = extendTheme({
  config,
  breakpoints,
  styles: {
    global: {
      body: {
        minHeight: '100dvh',
        fontFamily: `Helvetica Neue`,
        color: '#1d1f31',
        lineHeight: 'base',
      },
    },
  },
  textStyles: {
    primary: {
      fontFamily: 'BandeinsSans',
    },
    secondary: {
      fontFamily: 'Urbanist',
    },
    third: {
      fontFamily: 'Space Mono',
    },
  },
});

export default chakraThemes;
