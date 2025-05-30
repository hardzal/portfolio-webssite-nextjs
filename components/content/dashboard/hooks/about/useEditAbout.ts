import {
  aboutSchema,
  aboutSchemaDTO,
} from "@/components/utils/schemas/about.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AboutResponse } from "../../types/about/about-response";
import { axiosInstance } from "@/configs/axios";
import { toast } from "sonner";

export default function useEditAbout({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const form = useForm<aboutSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      title: "",
      job_title: "",
      description: "",
      location: "",
      handphone: "",
      email: "",
      resume: "",
      status: true,
    },
  });

  const {
    isPending: isPendingAbout,
    mutateAsync: mutateAbout,
    isSuccess,
  } = useMutation<AboutResponse, Error, aboutSchemaDTO>({
    mutationKey: ["editAbout", id],
    mutationFn: async (data: aboutSchemaDTO) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("profession", data.job_title);

      if (data.description) {
        formData.append("description", data.description);
      }

      if (data.location) {
        formData.append("location", data.location);
      }

      formData.append("is_available", String(data.status));
      formData.append("handphone", data.handphone);
      formData.append("email", data.email);
      formData.append("resume", data.resume);

      if (data.image) {
        formData.append("image", data.image);
      }

      const response = await axiosInstance.put(`/about/${id}`, formData);

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dataAbout"],
      });

      toast.success("", {
        description: "success update about",
      });
    },

    onError: () => {
      toast.error("", {
        description: "failed update technology",
      });
    },
  });

  async function onSubmitAbout(data: aboutSchemaDTO) {
    await mutateAbout(data);
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
    isPendingAbout,
    isSuccess,
    onSubmitAbout,
    handlePreview,
    previewURL,
    setPreviewURL,
  };
}
