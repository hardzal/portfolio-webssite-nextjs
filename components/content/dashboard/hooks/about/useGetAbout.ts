import { axiosInstance } from "@/configs/axios";
import { About } from "@/types/about";
import { useQuery } from "@tanstack/react-query";

export default function useGetAbout() {
  const { isLoading: isLoadingAbout, data: dataAbout } = useQuery<About, Error>(
    {
      queryKey: ["dataAbout"],
      queryFn: async () => {
        const response = await axiosInstance.get(`/about/1`);

        return response.data.data;
      },
    }
  );

  return {
    isLoadingAbout,
    dataAbout,
  };
}
