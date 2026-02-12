import { afterAll, describe, expect, it } from "vitest";

import { buildServer } from "./server.js";

describe("api health route", () => {
  const app = buildServer();

  afterAll(async () => {
    await app.close();
  });

  it("returns service health", async () => {
    const response = await app.inject({ method: "GET", url: "/health" });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      service: "api",
      status: "ok",
    });
  });
});
