"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import SpinnerButton from "./components/spinner-button";
import useLogin from "./hooks/useLogin";

export default function LoginForm() {
  const { onSubmit, form, isPending } = useLogin();

  return (
    <div className={"pt-5"}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="type your Email"
                    {...field}
                    className={"border-2 border-gray-300"}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="type your password"
                    className={"border-2 border-gray-300"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className={"cursor-pointer"}
            disabled={isPending}
          >
            {isPending ? <SpinnerButton /> : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
