"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Technology } from "@/types/technology";
import { axiosInstance } from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import SpinnerButton from "@/components/content/auth/components/spinner-button";
import { useFieldArray } from "react-hook-form";

interface WorkProps {
  form: any;
  isPendingWork: boolean;
  onSubmitWork: any;
  handlePreview: any;
  previewURL: string | null;
}

export default function WorkForm({
  form,
  isPendingWork,
  previewURL,
  handlePreview,
  onSubmitWork,
}: WorkProps) {
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const { isLoading: isLoadingTechnologies, data: dataTechnology } = useQuery<
    Technology[],
    Error
  >({
    queryKey: ["technologyData"],
    queryFn: async () => {
      const response = await axiosInstance.get("/stacks");

      return response.data.data;
    },
  });

  const technologyList: { value: string; label: string }[] = [];

  if (!isLoadingTechnologies) {
    dataTechnology?.map((item: Technology) => {
      technologyList.push({
        value: item.id.toString(),
        label: item.name,
      });
    });
  }

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "description",
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitWork)}>
          <div className="grid gap-5 py-4">
            <FormField
              control={form.control}
              name="role"
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
                  <FormMessage />
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <>
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">Start date</FormLabel>
                    <FormControl className="col-span-3">
                      <Popover modal={true}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(new Date(field.value), "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                  <FormItem className="grid grid-cols-4">
                    <FormMessage className="col-span-4 text-center" />
                  </FormItem>
                </>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <>
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">End date</FormLabel>
                    <FormControl className="col-span-2">
                      <Popover modal={true}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(new Date(field.value), "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                  <FormItem className="grid grid-cols-4">
                    <FormMessage className="col-span-4 text-center" />
                  </FormItem>
                </>
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
                  <FormMessage />
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
              name="stacks"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Tech stack</FormLabel>
                  <FormControl className="col-span-3">
                    <MultiSelect
                      options={technologyList}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      placeholder="Select technology"
                      variant="inverted"
                      animation={2}
                      maxCount={3}
                      modalPopover={true}
                      name="stacks"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {fields.map((field, index) => (
              <FormField
                key={field.id}
                control={form.control}
                name={`description.${index}.value`}
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <div className="flex flex-col">
                      <FormLabel className="text-right">Description</FormLabel>
                      <Button
                        variant="destructive"
                        type="button"
                        size="sm"
                        onClick={() => remove(index)}
                        className="w-2/3 mt-2 bg-red-800 cursor-pointer"
                      >
                        remove
                      </Button>
                    </div>
                    <FormControl className="col-span-3">
                      <Textarea
                        placeholder="type your work description"
                        rows={30}
                        {...field}
                        className={""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="secondary"
              onClick={() => append({ value: "" })}
            >
              Add Description
            </Button>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isPendingWork}
              variant={"default"}
              className="cursor-pointer flex w-1/3"
            >
              {isPendingWork ? <SpinnerButton /> : "submit"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
