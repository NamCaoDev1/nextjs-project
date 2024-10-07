import { z } from "zod";

export enum LoginStatus {
  Success = "success",
  Failure = "failure",
}

export const loginSchema = z.object({
  email: z.string().email().min(1, "Please input your email"),
  password: z.string().min(6, "Password must be at least 5 character"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
