import { z } from "zod";

export const workSchema = z.object({
  title: z.string().min(10).max(100),
  company: z.string().min(10).max(100),
  description: z.string().min(20).max(300).array().optional(),
  technologies: z.string().array().optional(),
  period: z.string().optional(),
  status: z.boolean().optional(),
  image: z.instanceof(File).optional(),
});

export type workSchemaDTO = z.infer<typeof workSchema>;
