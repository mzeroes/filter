import { config } from "../config";

const { DARK_MODE } = config;

const TINT_COLOR = DARK_MODE ? "#4a5353" : "#6f8ca9";

const lightcolors = {
  tintColor: TINT_COLOR,
  tabIconSelected: TINT_COLOR,
  tabIconDefault: TINT_COLOR,
  background: "#F2F2F2",
  // make sure to change the app.js statusbar color for android
  statusbar: "#F2F2F2",
  primary: "#6f8ca9",
  secondary: "#242b2b",
  text: "#242b2b",
  headingtext: "#6f8ca9",
  infoText: "#6f8ca9",
  link: "#242b2b",
  highlightedText: "#242b2b",
  theme: "#EAEB5E",
  white: "#EFEFEF",
  black: "#060B10",
  dark: "#171C1F",
  grey: "#E2E2E2",
  lightgrey: "#F2F2F2",
  overlay: "#242b2b",
  red: "#ee5f5b",
  blue: "#19b5fe",
  green: "#00ff0d",
  yellow: "#F8B106",
  tabBar: "#fefefe",
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  noticeBackground: TINT_COLOR,
  noticeText: "#fff"
};

const darkcolors = {
  tintColor: TINT_COLOR,
  tabIconSelected: TINT_COLOR,
  tabIconDefault: TINT_COLOR,
  background: "#242b2b",
  // make sure to change the app.js statusbar color for android
  statusbar: "#242b2b",
  primary: "#6f8ca9",
  secondary: "#242b2b",
  text: "#242b2b",
  headingtext: "#6f8ca9",
  infoText: "#6f8ca9",
  link: "#242b2b",
  highlightedText: "#242b2b",
  theme: "#EAEB5E",
  white: "#EFEFEF",
  black: "#060B10",
  dark: "#171C1F",
  grey: "#E2E2E2",
  lightgrey: "#F2F2F2",
  overlay: "#242b2b",
  red: "#ee5f5b",
  blue: "#19b5fe",
  green: "#00ff0d",
  yellow: "#F8B106",
  tabBar: "#fefefe",
  errorBackground: "red",
  errorText: "#ff0fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  noticeBackground: TINT_COLOR,
  noticeText: "#f000fA"
};

export const colors = DARK_MODE ? darkcolors : lightcolors;
export default colors;
