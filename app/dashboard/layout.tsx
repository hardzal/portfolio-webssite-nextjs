"use client";
import { AppSidebar } from "@/components/content/dashboard/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
const queryClient = new QueryClient();

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className={"hover: cursor-pointer"} />
        <main className={"ml-3 w-full"}>{children}</main>
      </SidebarProvider>
    </QueryClientProvider>
  );
}
