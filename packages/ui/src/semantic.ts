import { primitiveTokens } from "./tokens";

export const semanticTokens = {
  color: {
    canvas: primitiveTokens.color.slate50,
    surface: primitiveTokens.color.white,
    border: primitiveTokens.color.slate200,
    textPrimary: primitiveTokens.color.slate950,
    textMuted: primitiveTokens.color.slate700,
    accent: primitiveTokens.color.blue600,
    accentContrast: primitiveTokens.color.blue100,
  },
  radius: {
    card: primitiveTokens.radius.card,
  },
  shadow: {
    card: primitiveTokens.shadow.card,
  },
  font: {
    sans: primitiveTokens.font.sans,
    mono: primitiveTokens.font.mono,
  },
} as const;

export type SemanticTokens = typeof semanticTokens;
