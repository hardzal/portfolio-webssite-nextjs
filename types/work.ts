export type Work = {
  id: number;
  role: string;
  company: string;
  description: string[];
  stacks?: string[];
  start_date: Date;
  end_date: Date;
  image: string;
};
