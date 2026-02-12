import { z } from "zod";

export const tenantIdSchema = z.string().min(1, "tenant id is required");
export const userIdSchema = z.string().min(1, "user id is required");

export const actorSchema = z.object({
  tenantId: tenantIdSchema,
  userId: userIdSchema,
});

export const booleanFlagSchema = z.object({
  key: z.string().min(1),
  enabled: z.boolean(),
});

export type TenantId = z.infer<typeof tenantIdSchema>;
export type UserId = z.infer<typeof userIdSchema>;
export type Actor = z.infer<typeof actorSchema>;
export type BooleanFlag = z.infer<typeof booleanFlagSchema>;
