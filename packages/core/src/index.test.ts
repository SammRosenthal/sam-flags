import { describe, expect, it } from "vitest";

import { evaluateBooleanFlag } from "./index";

describe("evaluateBooleanFlag", () => {
  it("returns enabled when flag is enabled", () => {
    const result = evaluateBooleanFlag({ key: "new-ui", enabled: true });
    expect(result.value).toBe(true);
    expect(result.reason).toBe("flag-enabled");
  });

  it("falls back when flag is missing", () => {
    const result = evaluateBooleanFlag(undefined);
    expect(result.value).toBe(false);
    expect(result.reason).toBe("flag-missing");
  });
});
