import { z } from "zod";

export interface LoginUser {
  email: string;
  password: string;
}

export const LoginSchemaUser = z.object({
  email: z.string().email({ message: "Email not valid" }),
  password: z.string().min(6, { message: "Minimum 7 character" }),
});

export type LoginUserDTO = z.infer<typeof LoginSchemaUser>;
