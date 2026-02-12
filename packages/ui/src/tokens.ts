export const primitiveTokens = {
  color: {
    slate950: "#0b1220",
    slate900: "#111c34",
    slate700: "#3d4f72",
    slate200: "#dde4f0",
    slate50: "#f6f8fc",
    blue600: "#1f61d0",
    blue100: "#d7e6ff",
    white: "#ffffff",
  },
  radius: {
    card: "0.75rem",
  },
  shadow: {
    card: "0 16px 40px -24px rgba(17, 28, 52, 0.45)",
  },
  font: {
    sans: '"Space Grotesk", "Avenir Next", "Segoe UI", sans-serif',
    mono: '"IBM Plex Mono", "SFMono-Regular", Menlo, monospace',
  },
} as const;

export type PrimitiveTokens = typeof primitiveTokens;
