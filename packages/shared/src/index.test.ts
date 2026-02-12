import { describe, expect, it } from "vitest";

import { actorSchema } from "./index";

describe("shared schema smoke", () => {
  it("validates actor payload", () => {
    const parsed = actorSchema.parse({ tenantId: "tenant_123", userId: "user_123" });
    expect(parsed.tenantId).toBe("tenant_123");
  });
});
