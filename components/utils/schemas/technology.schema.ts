import { z } from "zod";

export const technologySchema = z.object({
  name: z.string().min(1).max(100),
  image: z.instanceof(File).optional(),
});

export type technologySchemaDTO = z.infer<typeof technologySchema>;
