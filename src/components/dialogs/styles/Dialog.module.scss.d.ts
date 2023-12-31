export type Styles = {
  backgroundBase: string;
  dialog: string;
  dialogContainer: string;
  dialogContent: string;
  dialogHeader: string;
  primaryColor: string;
  secondaryColor: string;
  textHigh: string;
  textInverted: string;
  textLow: string;
  textStrong: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
