export type Styles = {
  backgroundBase: string;
  col: string;
  container: string;
  main: string;
  primaryColor: string;
  row: string;
  secondaryColor: string;
  textHigh: string;
  textInverted: string;
  textLow: string;
  textStrong: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
