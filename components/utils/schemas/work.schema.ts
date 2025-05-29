import { z } from "zod";

export const workSchema = z.object({
  role: z.string().min(10).max(100),
  company: z.string().min(10).max(100),
  description: z
    .array(z.object({ value: z.string().min(10).max(300) }))
    .optional(),
  stacks: z.string().array().optional(),
  startDate: z.date().or(z.string()).optional(),
  endDate: z.date().or(z.string()).optional(),
  image: z.instanceof(File).optional(),
});

export type workSchemaDTO = z.infer<typeof workSchema>;
