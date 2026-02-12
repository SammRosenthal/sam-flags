import { describe, expect, it } from "vitest";

import { resolveBooleanFlagValue } from "./index";

describe("resolveBooleanFlagValue", () => {
  it("returns flag value when present", () => {
    expect(resolveBooleanFlagValue({ key: "checkout-v2", enabled: true })).toBe(true);
  });

  it("uses fallback when missing", () => {
    expect(resolveBooleanFlagValue(undefined, true)).toBe(true);
  });
});
