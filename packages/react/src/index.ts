import { evaluateBooleanFlag } from "@sams-flags/core";
import type { BooleanFlag } from "@sams-flags/shared";

export function resolveBooleanFlagValue(
  flag: BooleanFlag | null | undefined,
  fallback = false,
): boolean {
  if (!flag) {
    return fallback;
  }

  return evaluateBooleanFlag(flag).value;
}
