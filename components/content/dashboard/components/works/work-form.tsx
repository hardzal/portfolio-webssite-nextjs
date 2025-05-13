"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";
import { Textarea } from "@/components/ui/textarea";
import {
  workSchema,
  workSchemaDTO,
} from "@/components/utils/schemas/work.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function WorkForm() {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const form = useForm<workSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(workSchema),
    defaultValues: {
      title: "",
      company: "",
      description: [],
      technologies: [],
      period: "",
    },
  });

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

  async function onSubmit(data: workSchemaDTO) {
    console.log("data submitted: ", data);
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
              name="title"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Job Title</FormLabel>
                  <FormControl className="col-span-3">
                    <Input
                      type="text"
                      placeholder="type your job title"
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-left">Company</FormLabel>
                  <FormControl className="col-span-3">
                    <Input
                      type={"text"}
                      placeholder="type your company title"
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="period"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Period</FormLabel>
                  <FormControl className="col-span-3">
                    <Input
                      placeholder="type your job period"
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-left">Still on the job?</FormLabel>
                  <FormControl className="col-span-3">
                    <Checkbox
                      id="status"
                      onCheckedChange={field.onChange}
                      checked={field.value}
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
                  <FormLabel className="text-right">Images</FormLabel>
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
              name="description"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Description</FormLabel>
                  <FormControl className="col-span-3">
                    <Textarea
                      placeholder="type your work description"
                      rows={20}
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </>
  );
}
