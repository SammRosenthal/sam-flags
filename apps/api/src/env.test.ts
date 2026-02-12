import { describe, expect, it } from "vitest";

import { getEnv } from "./env.js";

const baseEnv = {
  API_HOST: "0.0.0.0",
  API_PORT: "4000",
  API_ORIGIN: "http://localhost:4000",
  WEB_ORIGIN: "http://localhost:3000",
};

describe("api environment contract", () => {
  it("requires Google OAuth credentials in development", () => {
    expect(() =>
      getEnv({
        ...baseEnv,
        NODE_ENV: "development",
      }),
    ).toThrowError();
  });

  it("derives Google callback URI from API_ORIGIN", () => {
    const env = getEnv({
      ...baseEnv,
      NODE_ENV: "development",
      GOOGLE_CLIENT_ID: "google-client-id",
      GOOGLE_CLIENT_SECRET: "google-client-secret",
      SESSION_SECRET: "12345678901234567890123456789012",
    });

    expect(env.GOOGLE_REDIRECT_URI).toBe("http://localhost:4000/auth/google/callback");
    expect(env.SESSION_COOKIE_SECURE).toBe(false);
  });

  it("allows missing OAuth secrets in test mode", () => {
    const env = getEnv({
      ...baseEnv,
      NODE_ENV: "test",
    });

    expect(env.GOOGLE_CLIENT_ID).toBe("test-google-client-id");
    expect(env.SESSION_SECRET.length).toBeGreaterThanOrEqual(32);
  });

  it("enforces secure session cookie in production", () => {
    expect(() =>
      getEnv({
        ...baseEnv,
        NODE_ENV: "production",
        GOOGLE_CLIENT_ID: "google-client-id",
        GOOGLE_CLIENT_SECRET: "google-client-secret",
        SESSION_SECRET: "12345678901234567890123456789012",
        SESSION_COOKIE_SECURE: "false",
      }),
    ).toThrowError();
  });
});
