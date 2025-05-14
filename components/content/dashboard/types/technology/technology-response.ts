export type TechnologyResponse = {
  message: string;
  status: number;
  data: {
    id: number;
    name: string;
    image: string;
    createad_at: string;
    updated_at: string | null;
  };
};
