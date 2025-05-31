import { axiosInstance } from "@/configs/axios";
import { Technology } from "@/types/technology";
import { useQuery } from "@tanstack/react-query";

export default function useGetStack() {
  const { isLoading: isLoadingTechnologies, data: dataTechnology } = useQuery<
    Technology[],
    Error
  >({
    queryKey: ["dataTechnology"],
    queryFn: async () => {
      const response = await axiosInstance.get("/stacks");

      return response.data.data;
    },
  });

  return {
    isLoadingTechnologies,
    dataTechnology,
  };
}
