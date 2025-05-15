import { Project } from "@/types/project";

export type ProjectResponse = {
  message: string;
  status: number;
  data: Project;
};
