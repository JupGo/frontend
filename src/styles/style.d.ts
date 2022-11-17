import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green_dark: string;
      green_main: string;
      green_light: string;
      yellow: string;
      pink: string;
      black_01: string;
      black_02: string;
      gray_01: string;
      gray_02: string;
      gray_bg: string;
    };
  }
}
