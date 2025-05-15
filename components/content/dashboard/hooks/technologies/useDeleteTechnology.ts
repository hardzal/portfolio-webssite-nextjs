import { axiosInstance } from "@/configs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteTechnology() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteTechnology, isPending: isPendingTechnology } =
    useMutation({
      mutationKey: ["deleteStack"],
      mutationFn: async (id: number) => {
        await axiosInstance.delete(`/stacks/${id}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["dataTechnology"],
        });
        toast.success("", {
          description: "sucess delete technology",
        });
      },
      onError: () => {
        toast.error("", {
          description: "failed delete technology",
        });
      },
    });

  return { deleteTechnology, isPendingTechnology };
}
