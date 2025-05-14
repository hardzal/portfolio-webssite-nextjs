"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  technologySchema,
  technologySchemaDTO,
} from "@/components/utils/schemas/technology.schema";
import { axiosInstance } from "@/configs/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { TechnologyResponse } from "../../types/technology/technology-response";
import { Button } from "@/components/ui/button";
import SpinnerButton from "@/components/content/auth/components/Spinner";

export default function TechnologyForm() {
  const queryClient = useQueryClient();

  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const form = useForm<technologySchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(technologySchema),
    defaultValues: {
      name: "",
    },
  });

  const { isPending: isPendingStack, mutateAsync: mutateStack } = useMutation<
    TechnologyResponse,
    Error,
    technologySchemaDTO
  >({
    mutationKey: ["addStack"],
    mutationFn: async (data: technologySchemaDTO) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image);
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

  async function onSubmit(data: technologySchemaDTO) {
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

      form.setValue("image", file);
    }
    console.log("tidak ada gambar");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Project Title</FormLabel>
                  <FormControl className="col-span-3">
                    <Input
                      placeholder="type technology name"
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Image</FormLabel>
                  <FormControl className="col-span-3">
                    <Input
                      type={"file"}
                      className={""}
                      onChange={handlePreview}
                      ref={(e) => {
                        inputFileRef.current = e;
                        field.ref(e);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {previewURL ? (
              <div
                className={"grid grid-cols-2 justify-self-center item-center"}
              >
                <Image
                  className="col-span-2 mb-4"
                  objectFit={"contain"}
                  width={300}
                  height={300}
                  src={previewURL ?? ""}
                  alt={"preview-image"}
                />
              </div>
            ) : null}
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isPendingStack}
              variant={"default"}
              className="cursor-pointer flex w-1/3"
            >
              {isPendingStack ? <SpinnerButton /> : "submit"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
