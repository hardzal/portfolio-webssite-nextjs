import {
  projectSchema,
  projectSchemaDTO,
} from "@/components/utils/schemas/project.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ProjectResponse } from "../../types/project/project-response";
import { axiosInstance } from "@/configs/axios";

export default function useEditProject({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const form = useForm<projectSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(projectSchema),
    defaultValues: {},
  });

  const { isPending: isPendingProject, mutateAsync: mutateStack } = useMutation<
    ProjectResponse,
    Error,
    projectSchemaDTO
  >({
    mutationKey: ["editStack", id],
    mutationFn: async (data: projectSchemaDTO) => {
      const formData = new FormData();
      formData.append("title", data.title);

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
  async function onSubmitProject(data: projectSchemaDTO) {
    console.log("Data get", data);
    await mutateStack(data);
    form.reset();
    setPreviewURL("");
  }

  function handlePreview(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);

      setPreviewURL(url);

      form.setValue("images", file);
    }
    console.log("tidak ada gambar");
  }

  return {
    form,
    isPendingProject,
    onSubmitProject,
    handlePreview,
    previewURL,
    setPreviewURL,
  };
}
