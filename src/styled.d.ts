import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      tiny: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
    colors: {
      indigo: {
        50: string;
        100: string;
        200: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      gray: {
        0: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      blue: {
        100: string;
        700: string;
      };
      green: {
        100: string;
        700: string;
        800: string;
      };
      yellow: {
        100: string;
        700: string;
      };
      silver: {
        100: string;
        700: string;
      };
      red: {
        100: string;
        700: string;
        800: string;
      };
      backdrop: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    borderRadius: {
      tiny: string;
      sm: string;
      md: string;
      lg: string;
    };
    image: {
      grayScale: number;
      opacity: string;
    };
  }
}
