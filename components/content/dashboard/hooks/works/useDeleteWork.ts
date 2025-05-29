import { axiosInstance } from "@/configs/axios";
import { Work } from "@/types/work";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteWork() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteWork, isPending: isPendingWork } = useMutation({
    mutationKey: ["deleteWork"],
    mutationFn: async (data: Work) => {
      await axiosInstance.delete(`/works/${data.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dataWorks"],
      });
      toast.success("", {
        description: "success delete work",
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
