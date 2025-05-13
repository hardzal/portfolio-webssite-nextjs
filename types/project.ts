export type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  stacks?: string[];
  repo?: string;
  demo?: string;
};
