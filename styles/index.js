import { Platform, StyleSheet } from "react-native";
import { colors } from "./colors";
import { constants } from "../constants";

export const baseStyles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.background,
    paddingTop: constants.statusbarMargin,
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    marginTop: 6,
    color: colors.dark
  },
  textInput: {
    color: colors.tintColor,
    height: 36,
    width: "100%",
    borderColor: colors.tintColor,
    borderWidth: 1,
    marginTop: 10,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 10,
  },
  touchableButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 10,
    marginLeft: 40,
    width: "70%",
    marginTop: 20
  },
  contentContainer: {
    paddingTop: 30
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  baseContainer: {
    alignItems: "flex-start",
    marginHorizontal: 30,
  },
  highlightText: {
    color: colors.highlightedText
  },
  headingText: {
    fontSize: 17,
    color: colors.headingtext,
    lineHeight: 24,
    textAlign: "left"
  },
  infoContainer: {
    position: "absolute",
    backgroundColor: colors.background,
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: colors.dark,
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 1
      },
      android: {
        elevation: 10
      }
    }),
    alignItems: "center",
    paddingVertical: 10
  },
  tabBarInfoText: {
    fontSize: 17,
    color: colors.infoText,
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  linkLoginSignup: {
    color: colors.white,
    alignItems: "center",
    backgroundColor: colors.grey,
    padding: 12,
    width: "100%",
  },
  linkText: {
    fontSize: 14,
    color: colors.link
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  },
  optionIconContainer: {
    marginRight: 9
  },
  option: {
    backgroundColor: colors.grey,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.black
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  }
});

export default baseStyles;
