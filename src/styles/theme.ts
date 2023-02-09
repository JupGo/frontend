import { css, DefaultTheme } from 'styled-components';

const colors = {
  green_dark: '#6CB88E',
  green_main: '#B6E599',
  green_light: '#E1FFAA',
  yellow: '#FFFFC7',
  pink: '#EF8D8A',
  black_01: '#1B2018',
  black_02: '#595E57',
  gray_01: '#838882',
  gray_02: '#E9E8EB',
  gray_bg: '#F8F8F8',
};
const fonts = {
  Jupgo_Bold_32: css`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4.4rem;
  `,
  Jupgo_Bold_20: css`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.7rem;
  `,
  Jupgo_SemiBold_32: css`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.4rem;
  `,
  Jupgo_Regular_32: css`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 3.2rem;
    line-height: 4.4rem;
  `,
};

const theme: DefaultTheme = { colors, fonts };

export default theme;
