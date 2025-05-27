import { axiosInstance } from "@/configs/axios";
import { Technology } from "@/types/technology";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteTechnology() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteTechnology, isPending: isPendingTechnology } =
    useMutation({
      mutationKey: ["deleteStack"],
      mutationFn: async (data: Technology) => {
        console.log("data deleted stack", data.id);

        await axiosInstance.delete(`/stacks/${data.id}`);
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
