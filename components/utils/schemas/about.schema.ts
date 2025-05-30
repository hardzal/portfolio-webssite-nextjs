import { z } from "zod";

export const aboutSchema = z.object({
  title: z.string().min(5).max(50),
  profession: z.string().min(10).max(50),
  description: z.string().optional(),
  location: z.string().optional(),
  status: z.boolean(),
  image: z.instanceof(File).optional(),
  email: z.string(),
  resume: z.string(),
  handphone: z.string(),
});

export type aboutSchemaDTO = z.infer<typeof aboutSchema>;
