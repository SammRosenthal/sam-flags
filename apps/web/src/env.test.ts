import { describe, expect, it } from "vitest";

import { getWebEnv } from "./env";

describe("web environment contract", () => {
  it("uses local defaults when VITE env vars are unset", () => {
    const env = getWebEnv({});

    expect(env.VITE_API_BASE_URL).toBe("http://localhost:4000");
    expect(env.VITE_APP_BASE_URL).toBe("http://localhost:3000");
  });

  it("rejects malformed URL values", () => {
    expect(() =>
      getWebEnv({
        VITE_API_BASE_URL: "not-a-url",
      }),
    ).toThrowError();
  });
});
