import { axiosInstance } from "@/configs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteWork() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteWork, isPending: isPendingWork } = useMutation({
    mutationKey: ["deleteWork"],
    mutationFn: async (id: number) => {
      await axiosInstance.delete(`/works/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dataWork"],
      });
      toast.success("", {
        description: "sucess delete work",
      });
    },
    onError: () => {
      toast.error("", {
        description: "failed delete work",
      });
    },
  });

  return { deleteWork, isPendingWork };
}
