import type { BooleanFlag } from "@sams-flags/shared";

export type EvaluationReason = "flag-enabled" | "flag-disabled" | "flag-missing";

export interface EvaluationResult {
  key: string;
  reason: EvaluationReason;
  value: boolean;
}

export function evaluateBooleanFlag(flag: BooleanFlag | null | undefined): EvaluationResult {
  if (!flag) {
    return {
      key: "unknown",
      reason: "flag-missing",
      value: false,
    };
  }

  return {
    key: flag.key,
    reason: flag.enabled ? "flag-enabled" : "flag-disabled",
    value: flag.enabled,
  };
}
