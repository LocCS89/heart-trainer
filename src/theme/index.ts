import { extendTheme } from "native-base";

const colorTheme = {
  primary: {
    50: "#F2FCFF",
    100: "#CAF3FF",
    200: "#A2E7FF",
    300: "#7FDAFD",
    400: "#62CBF4",
    500: "#49BAE6",
    600: "#34A7D4",
    700: "#148DBC",
    800: "#006D92",
    900: "#00495C",
  },
};
const appTheme = extendTheme({
  colors: colorTheme,
  fontConfig: {
    Lexend: {
      100: {
        normal: "Lexend_100Thin",
      },
      200: {
        normal: "Lexend_200ExtraLight",
      },
      300: {
        normal: "Lexend_300Light",
      },
      400: {
        normal: "Lexend_400Regular",
      },
      500: {
        normal: "Lexend_400Regular",
      },
      600: {
        normal: "Lexend_600SemiBold",
      },
      700: {
        normal: "Lexend_700Bold",
      },
      800: {
        normal: "Lexend_800ExtraBold",
      },
      900: {
        normal: "Lexend_900Black",
      },
    },
  },
  fonts: {
    heading: "Lexend",
    body: "Lexend",
    mono: "Lexend",
  },
  components: {},
});
export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
