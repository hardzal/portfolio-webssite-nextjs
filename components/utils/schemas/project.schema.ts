import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(10).max(150),
  description: z.string().min(20).max(300),
  stacks: z.string().array(),
  image: z.instanceof(File).optional(),
  demo: z.string().optional(),
  repo: z.string().optional(),
});

export type projectSchemaDTO = z.infer<typeof projectSchema>;
