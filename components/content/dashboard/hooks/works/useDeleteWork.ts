import { axiosInstance } from "@/configs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteWork() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteWork, isPending: isPendingWork } = useMutation({
    mutationKey: ["deleteProject"],
    mutationFn: async (id: number) => {
      await axiosInstance.delete(`/works/${id}`);
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

  return { deleteWork, isPendingWork };
}
