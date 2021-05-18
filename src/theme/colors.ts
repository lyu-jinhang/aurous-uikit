import { Colors } from "./types";

export const baseColors = {
  failure: "#e02f58",
  primary: "#F99D1C",
  primaryBright: "#dd831c",
  primaryDark: "#c25e00",
  secondary: "#d6931a", //
  success: "#dace31",
  warning: "#e68327",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  secondary: "#F99D1C", //
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#345D9E", //
  textDisabled: "#BDC2C4",
  textSubtle: "#F99D1C",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  nav: "#F99D1C", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffe500", //  
  background: "#1F2B46", //
  backgroundDisabled: "#424037", //
  contrast: "#FFFFFF",
  invertedContrast: "#262513",
  input: "#483F5A",
  inputSecondary: "#8d8857",
  primaryDark: "#8f8104",
  tertiary: "#28444A", //
  text: "#fcfae2", //
  textDisabled: "#717161", //
  textSubtle: "#F99D1C", //
  borderColor: "#61634b",
  card: "#121827", //
  nav: "#121827", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)", //
  },
};
