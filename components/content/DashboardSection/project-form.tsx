"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  projectSchema,
  projectSchemaDTO,
} from "@/components/utils/schemas/project.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { MultiSelect } from "./multi-select";

export default function ProjectForm() {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const form = useForm<projectSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      technologies: [],
      demo: "",
      github: "",
    },
  });

  // const {
  //   ref: registerImageRef,
  //   onChange: registerImagesOnChange,
  //   ...restRegisterImages
  // } = form.register("images");

  // function onClickFile() {
  //   inputFileRef?.current?.click();
  // }

  const frameworksList = [
    { value: "react", label: "React", icon: Turtle },
    { value: "angular", label: "Angular", icon: Cat },
    { value: "vue", label: "Vue", icon: Dog },
    { value: "svelte", label: "Svelte", icon: Rabbit },
    { value: "ember", label: "Ember", icon: Fish },
  ];

  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([
    "react",
    "angular",
  ]);

  async function onSubmit(data: projectSchemaDTO) {
    console.log("data submitted", data);
  }

  function handlePreview(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);

      setPreviewURL(url);

      form.setValue("images", file);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Project Title</FormLabel>
                  <FormControl className="col-span-3">
                    <Input
                      placeholder="type your project title"
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Description</FormLabel>
                  <FormControl className="col-span-3">
                    <Textarea
                      placeholder="type your project description"
                      rows={20}
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Images</FormLabel>
                  <FormControl className="col-span-3">
                    <Input
                      placeholder="type your project title"
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
          </div>
          {previewURL ? (
            <div className={"grid grid-cols-2 justify-self-center item-center"}>
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

          <FormField
            control={form.control}
            name="technologies"
            render={(
              { field } // eslint-disable-line @typescript-eslint/no-unused-vars
            ) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right">Tech stack</FormLabel>
                <FormControl className="col-span-3">
                  <MultiSelect
                    options={frameworksList}
                    onValueChange={setSelectedFrameworks}
                    defaultValue={selectedFrameworks}
                    placeholder="Select frameworks"
                    variant="inverted"
                    animation={2}
                    maxCount={3}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="demo"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4 py-4">
                <FormLabel className="text-right">Demo Link</FormLabel>
                <FormControl className="col-span-3">
                  <Input
                    placeholder="type your link"
                    {...field}
                    className={""}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right">Github Link</FormLabel>
                <FormControl className="col-span-3">
                  <Input
                    placeholder="type your link"
                    {...field}
                    className={""}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}
