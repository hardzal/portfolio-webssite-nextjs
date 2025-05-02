import { z } from "zod";

export const aboutSchema = z.object({
  title: z.string().min(5).max(50),
  job_title: z.string().min(10).max(50),
  description: z.string().optional(),
  location: z.string().optional(),
  status: z.boolean().default(true),
  image: z.instanceof(File).optional(),
  links: z.string().array().optional(),
});
