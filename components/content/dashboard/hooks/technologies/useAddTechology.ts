import {
  technologySchema,
  technologySchemaDTO,
} from "@/components/utils/schemas/technology.schema";
import { axiosInstance } from "@/configs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { TechnologyResponse } from "../../types/technology/technology-response";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useAddTechnology() {
  const queryClient = useQueryClient();
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const form = useForm<technologySchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(technologySchema),
    defaultValues: {
      name: "",
    },
  });

  const {
    isPending: isPendingStack,
    mutateAsync: mutateStack,
    isSuccess,
  } = useMutation<TechnologyResponse, Error, technologySchemaDTO>({
    mutationKey: ["addStack"],
    mutationFn: async (data: technologySchemaDTO) => {
      const formData = new FormData();
      formData.append("name", data.name);
      if (data.image) {
        formData.append("image", data.image as Blob);
      }
      const response = await axiosInstance.post("/stacks", formData);

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dataTechnology"],
      });

      toast.success("", {
        description: "success add technology",
      });
    },

    onError: () => {
      toast.error("", {
        description: "failed add technology",
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
    isSuccess,
    isPendingStack,
    onSubmitStack,
    handlePreview,
    previewURL,
    setPreviewURL,
  };
}
