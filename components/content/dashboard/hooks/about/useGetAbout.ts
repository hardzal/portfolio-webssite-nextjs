import { axiosInstance } from "@/configs/axios";
import { About } from "@/types/about";
import { useQuery } from "@tanstack/react-query";

export default function useGetAbout({ id }: { id: number }) {
  const { isLoading: isLoadingAbout, data: dataAbout } = useQuery<About, Error>(
    {
      queryKey: ["dataAbout"],
      queryFn: async () => {
        const response = await axiosInstance.get(`/about/${id}`);

        return response.data.data;
      },
    }
  );

  return {
    isLoadingAbout,
    dataAbout,
  };
}
