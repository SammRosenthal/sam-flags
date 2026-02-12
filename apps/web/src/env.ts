import { z } from "zod";

const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url().default("http://localhost:4000"),
  VITE_APP_BASE_URL: z.string().url().default("http://localhost:3000"),
});

export type WebEnv = z.infer<typeof envSchema>;

export function getWebEnv(source: Record<string, unknown> = import.meta.env): WebEnv {
  return envSchema.parse(source);
}
