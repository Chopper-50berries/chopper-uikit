import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E", // pink unseen
  primary: "#00FF00", // bright green
  primaryBright: "#d2ed4b", // lime green // testing
  primaryDark: "#da2c43", // red
  secondary: "#4bede2", // bright turquiuose // pressed button colour (?)
  success: "#31D0AA", // toggle button on green
  warning: "#FFB237", // orange unseen
};

export const brandColors = {
  binance: "#F0B90B", // unseen gold
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#e4a199", // pink 
  backgroundDisabled: "#E9EAEB", // light grey // bg of disabled Harvest button
  contrast: "#191326", // unused from pancake Lottery // dark purple
  invertedContrast: "#FFFFFF", // unused from pancake Lottery // white
  input: "#eeeaf4", // faint purple // bg of widgets i.e. Staked Only & Active / Inactive in Farms
  tertiary: "#b55312", // brown // testing
  text: "#2da8d2", // chopper blue
  textDisabled: "#BDC2C4", // medium grey // grey-ed out text
  textSubtle: "#e84bed", // bright purple // testing
  borderColor: "#E9EAEB", // light grey // divider line in cards
  card: "#FFFFFF", // white
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
