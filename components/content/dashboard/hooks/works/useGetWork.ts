import { axiosInstance } from "@/configs/axios";
import { Work } from "@/types/work";
import { useQuery } from "@tanstack/react-query";

export default function useGetWork() {
  const { isLoading: isLoadingWorks, data: dataWorks } = useQuery<Work[]>({
    queryKey: ["dataWorks"],
    queryFn: async () => {
      const response = await axiosInstance.get("/works");

      return response.data.data;
    },
  });

  return {
    isLoadingWorks,
    dataWorks,
  };
}
