import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E", // unseen pink
  primary: "#be1d29", // red set
  primaryBright: "#df5861", // light red set
  primaryDark: "#be1d29", // red set
  secondary: "#10559a", // dark blue set
  success: "#31D0AA", // green same
  warning: "#FFB237", // unseen orange
};

export const brandColors = {
  binance: "#F0B90B", // unseen gold
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fedd7a", // darker orange set
  backgroundDisabled: "#E9EAEB", // light grey same
  contrast: "#191326", // unused from pancake Lottery // dark purple
  invertedContrast: "#ffffff", // unused from pancake Lottery // white
  input: "#eeeaf4", // faint purple same
  tertiary: "#fffbeb", // lighter orange set
  text: "#1d80c3", // medium blue set
  textDisabled: "#BDC2C4", // medium grey same
  textSubtle: "#4c92cc", // light blue set
  borderColor: "#E9EAEB", // light grey same
  card: "#fffbeb", // lighter orange set
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)", // unused background banner from pancake Farms // light blue & light purple not seen
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#136B49",
  background: "#da2c43",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#136B49",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)", // navy blue & dark purple
  },
};
