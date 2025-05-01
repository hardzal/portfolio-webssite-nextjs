import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(10).max(150),
  description: z.string().min(20).max(300),
  technologies: z.string().array(),
  images: z.instanceof(File).optional(),
  demo: z.string().optional(),
  github: z.string().optional(),
});

export type projectSchemaDTO = z.infer<typeof projectSchema>;
