import { Work } from "@/types/work";

export type WorkResponse = {
  message: string;
  status: number;
  data: Work;
};
