import { semanticTokens } from "../semantic";

export const lightTheme = {
  ...semanticTokens,
} as const;

export type LightTheme = typeof lightTheme;
