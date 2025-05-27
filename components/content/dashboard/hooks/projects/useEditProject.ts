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

  const {
    isPending: isPendingProject,
    mutateAsync: mutateStack,
    isSuccess,
  } = useMutation<ProjectResponse, Error, projectSchemaDTO>({
    mutationKey: ["editProject", id],
    mutationFn: async (data: projectSchemaDTO) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);

      if (data.image != undefined) {
        formData.append("image", data.image);
      }

      data.stacks.forEach((item) => {
        formData.append(`stacks`, item);
      });

      if (data.demo !== undefined) formData.append("repo", data.demo);
      if (data.repo !== undefined) formData.append("demo", data.repo);

      const response = await axiosInstance.put(`/projects/${id}`, formData);

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dataProject"],
      });

      toast.success("", {
        description: "success edit project",
      });
    },

    onError: () => {
      toast.error("", {
        description: "failed edit project",
      });
    },
  });
  async function onSubmitProject(data: projectSchemaDTO) {
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
    isSuccess,
    isPendingProject,
    onSubmitProject,
    handlePreview,
    previewURL,
    setPreviewURL,
  };
}
