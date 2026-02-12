import { describe, expect, it } from "vitest";

import { semanticTokens } from "./index";

describe("ui token contract", () => {
  it("exposes semantic tokens", () => {
    expect(semanticTokens.color.canvas).toBe("#f6f8fc");
    expect(semanticTokens.font.sans).toContain("Space Grotesk");
  });
});
