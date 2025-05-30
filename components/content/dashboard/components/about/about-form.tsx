/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { FormProvider } from "react-hook-form";

interface AboutProps {
  form: any;
}

export default function AboutForm({ form }: AboutProps) {
  return (
    <>
      <FormProvider {...form}>
        <form>
          <div className={"grid grid-cols-6 gap-5"}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Stack Name</FormLabel>
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
          </div>
        </form>
      </FormProvider>
    </>
  );
}
