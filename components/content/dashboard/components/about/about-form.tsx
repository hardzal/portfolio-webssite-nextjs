/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SpinnerButton from "@/components/content/auth/components/spinner-button";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useRef } from "react";
import { FormProvider } from "react-hook-form";

interface AboutProps {
  form: any;
  isPendingAbout: boolean;
  previewURL: string | null;
  handlePreview: any;
  onSubmitAbout: any;
}

export default function AboutForm({
  form,
  isPendingAbout,
  previewURL,
  handlePreview,
  onSubmitAbout,
}: AboutProps) {
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmitAbout)}>
          <div className={"grid gap-5"}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">About Title</FormLabel>
                  <FormControl className="col-span-2">
                    <Input
                      placeholder="type about title"
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Job Title</FormLabel>
                  <FormControl className="col-span-2">
                    <Input
                      placeholder="type about job title"
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Location</FormLabel>
                  <FormControl className="col-span-2">
                    <Input
                      placeholder="type about location"
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="handphone"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">handphone</FormLabel>
                  <FormControl className="col-span-2">
                    <Input
                      placeholder="type phone numebr"
                      {...field}
                      className={""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Resume URL</FormLabel>
                  <FormControl className="col-span-2">
                    <Input
                      placeholder="type phone resume"
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
            {previewURL && (
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
            )}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Descrition</FormLabel>
                  <FormControl className="col-span-2">
                    <Textarea {...field} className={""} rows={20} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid">
              <Button
                type="submit"
                disabled={isPendingAbout}
                variant={"default"}
                className="cursor-pointer"
              >
                {isPendingAbout ? <SpinnerButton /> : "submit"}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
