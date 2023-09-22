import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "./theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
