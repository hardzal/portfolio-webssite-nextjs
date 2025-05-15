/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import SpinnerButton from "@/components/content/auth/components/Spinner";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  form: any;
  isPendingProject: boolean;
  onSubmitProject: any;
  handlePreview: any;
  previewURL: string | null;
}

export default function ProjectForm({
  form,
  isPendingProject,
  handlePreview,
  onSubmitProject,
  previewURL,
}: ProjectProps) {
  const inputFileRef = useRef<HTMLInputElement | null>(null);

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

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitProject)}>
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
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isPendingProject}
              variant={"default"}
              className="cursor-pointer flex w-1/3"
            >
              {isPendingProject ? <SpinnerButton /> : "submit"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
