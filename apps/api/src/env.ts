import { z } from "zod";

const nonEmptyString = z.string().trim().min(1);

const envSchema = z
  .object({
    API_HOST: z.string().default("0.0.0.0"),
    API_PORT: z.coerce.number().int().positive().default(4000),
    API_ORIGIN: z.string().url().default("http://localhost:4000"),
    WEB_ORIGIN: z.string().url().default("http://localhost:3000"),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    GOOGLE_CLIENT_ID: nonEmptyString.optional(),
    GOOGLE_CLIENT_SECRET: nonEmptyString.optional(),
    GOOGLE_REDIRECT_URI: z.string().url().optional(),
    SESSION_SECRET: z.string().min(32).optional(),
    SESSION_COOKIE_NAME: nonEmptyString.default("sams_flags_session"),
    SESSION_COOKIE_SECURE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => (value === undefined ? undefined : value === "true")),
  })
  .transform((env, ctx) => {
    if (env.NODE_ENV !== "test") {
      if (!env.GOOGLE_CLIENT_ID) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "GOOGLE_CLIENT_ID is required outside test mode",
          path: ["GOOGLE_CLIENT_ID"],
        });
      }

      if (!env.GOOGLE_CLIENT_SECRET) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "GOOGLE_CLIENT_SECRET is required outside test mode",
          path: ["GOOGLE_CLIENT_SECRET"],
        });
      }

      if (!env.SESSION_SECRET) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "SESSION_SECRET is required outside test mode",
          path: ["SESSION_SECRET"],
        });
      }
    }

    const sessionCookieSecure =
      env.SESSION_COOKIE_SECURE === undefined
        ? env.NODE_ENV === "production"
        : env.SESSION_COOKIE_SECURE;

    if (env.NODE_ENV === "production" && !sessionCookieSecure) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "SESSION_COOKIE_SECURE must be true in production",
        path: ["SESSION_COOKIE_SECURE"],
      });
    }

    return {
      ...env,
      GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID ?? "test-google-client-id",
      GOOGLE_CLIENT_SECRET: env.GOOGLE_CLIENT_SECRET ?? "test-google-client-secret",
      GOOGLE_REDIRECT_URI: env.GOOGLE_REDIRECT_URI ?? `${env.API_ORIGIN}/auth/google/callback`,
      SESSION_SECRET: env.SESSION_SECRET ?? "test-session-secret-test-session-secret",
      SESSION_COOKIE_SECURE: sessionCookieSecure,
    };
  });

export type ApiEnv = z.infer<typeof envSchema>;

export function getEnv(source: NodeJS.ProcessEnv = process.env): ApiEnv {
  return envSchema.parse(source);
}
