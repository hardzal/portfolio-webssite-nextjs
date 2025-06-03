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

  const {
    isPending: isPendingWork,
    mutateAsync: mutateStack,
    isSuccess,
  } = useMutation<WorkResponse, Error, workSchemaDTO>({
    mutationKey: ["editWork", id],
    mutationFn: async (data: workSchemaDTO) => {
      const formData = new FormData();
      formData.append("role", data.role);
      formData.append("company", data.company);

      if (data.startDate) {
        formData.append("startDate", String(data.startDate.toLocaleString()));
      }

      if (data.endDate) {
        formData.append("endDate", String(data.endDate.toLocaleString()));
      }

      if (data.image) {
        formData.append("image", data.image);
      }

      data.stacks?.forEach((item) => {
        formData.append(`stacks`, item);
      });

      data.description?.forEach((item) => {
        formData.append("description", item.value);
      });
      const response = await axiosInstance.put(`/works/${id}`, formData);

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dataWorks"],
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
  }

  return {
    form,
    isPendingWork,
    isSuccess,
    onSubmitWork,
    handlePreview,
    previewURL,
    setPreviewURL,
  };
}
