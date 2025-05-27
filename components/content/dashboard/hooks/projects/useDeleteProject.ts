import { axiosInstance } from "@/configs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteProject() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteProject, isPending: isPendingProject } =
    useMutation({
      mutationKey: ["deleteProject"],
      mutationFn: async (id: number) => {
        await axiosInstance.delete(`/stacks/${id}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["dataProject"],
        });
        toast.success("", {
          description: "sucess delete project",
        });
      },
      onError: () => {
        toast.error("", {
          description: "failed delete project",
        });
      },
    });

  return { deleteProject, isPendingProject };
}
