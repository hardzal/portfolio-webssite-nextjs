import {
  workSchema,
  workSchemaDTO,
} from "@/components/utils/schemas/work.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { WorkResponse } from "../../types/work/work-response";
import { axiosInstance } from "@/configs/axios";
import { toast } from "sonner";

export default function useEditWork({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const form = useForm<workSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(workSchema),
    defaultValues: {},
  });

  const { isPending: isPendingWork, mutateAsync: mutateStack } = useMutation<
    WorkResponse,
    Error,
    workSchemaDTO
  >({
    mutationKey: ["editWork", id],
    mutationFn: async (data: workSchemaDTO) => {
      const formData = new FormData();
      formData.append("title", data.title);

      const response = await axiosInstance.put(`/works/${id}`, formData);

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dataWork"],
      });

      toast.success("", {
        description: "success edit works",
      });
    },

    onError: () => {
      toast.error("", {
        description: "failed edit work",
      });
    },
  });
  async function onSubmitWork(data: workSchemaDTO) {
    await mutateStack(data);
    form.reset();
    setPreviewURL("");
  }

  function handlePreview(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);

      setPreviewURL(url);

      form.setValue("image", file);
    }
    console.log("tidak ada gambar");
  }

  return {
    form,
    isPendingWork,
    onSubmitWork,
    handlePreview,
    previewURL,
    setPreviewURL,
  };
}
