import { describe, expect, it } from "vitest";

import { createAppRouter } from "./router";

describe("router scaffold", () => {
  it("creates router instance", () => {
    const router = createAppRouter();
    expect(router).toBeDefined();
  });
});
