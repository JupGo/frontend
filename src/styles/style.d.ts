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
    fonts: {
      Jupgo_Bold_32: SerializedStyles;
      Jupgo_Bold_20: SerializedStyles;
      Jupgo_SemiBold_32: SerializedStyles;
      Jupgo_Regular_32: SerializedStyles;
    };
  }
}
