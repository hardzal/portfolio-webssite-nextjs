import { z } from "zod";

export const technologySchema = z.object({
  name: z.string().max(100),
  image: z.instanceof(File),
});

export type technologySchemaDTO = z.infer<typeof technologySchema>;
