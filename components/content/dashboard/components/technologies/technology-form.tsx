"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import SpinnerButton from "@/components/content/auth/components/Spinner";
import useAddTechnology from "../../hooks/technologies/useAddTechology";

export default function TechnologyForm() {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const { form, isPendingStack, onSubmitStack, handlePreview, previewURL } =
    useAddTechnology();

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitStack)}>
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
