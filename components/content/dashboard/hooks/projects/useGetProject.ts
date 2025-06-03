import { axiosInstance } from "@/configs/axios";
import { Project } from "@/types/project";
import { useQuery } from "@tanstack/react-query";

export default function useGetProject() {
  const { isLoading: isLoadingProjects, data: dataProject } = useQuery<
    Project[]
  >({
    queryKey: ["dataProject"],
    queryFn: async () => {
      const response = await axiosInstance.get("/projects");

      return response.data.data;
    },
  });

  return {
    isLoadingProjects,
    dataProject,
  };
}
