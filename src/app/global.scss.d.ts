export type Styles = {
  backgroundBase: string;
  primaryColor: string;
  secondaryColor: string;
  textHigh: string;
  textInverted: string;
  textLow: string;
  textStrong: string;
  "visually-hidden": string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
