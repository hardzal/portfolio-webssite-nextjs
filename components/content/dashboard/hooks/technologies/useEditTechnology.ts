import {
  technologySchema,
  technologySchemaDTO,
} from "@/components/utils/schemas/technology.schema";
import { axiosInstance } from "@/configs/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { TechnologyResponse } from "../../types/technology/technology-response";

export default function useEditTechnology({
  id,
  defaultValues,
}: {
  id: number;
  defaultValues?: { name: string };
}) {
  const queryClient = useQueryClient();
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const form = useForm<technologySchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(technologySchema),
    defaultValues: {
      name: defaultValues?.name || "",
    },
  });

  const {
    isPending: isPendingStack,
    mutateAsync: mutateStack,
    isSuccess,
  } = useMutation<TechnologyResponse, Error, technologySchemaDTO>({
    mutationKey: ["editStack", id],
    mutationFn: async (data: technologySchemaDTO) => {
      const formData = new FormData();
      formData.append("name", data.name);

      if (data?.image != null) {
        formData.append("image", data.image);
      }

      const response = await axiosInstance.put(`/stacks/${id}`, formData);

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dataTechnology"],
      });

      toast.success("", {
        description: "success edit technology",
      });
    },

    onError: () => {
      toast.error("", {
        description: "failed edit technology",
      });
    },
  });
  async function onSubmitStack(data: technologySchemaDTO) {
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
    isPendingStack,
    isSuccess,
    onSubmitStack,
    handlePreview,
    previewURL,
    setPreviewURL,
  };
}
