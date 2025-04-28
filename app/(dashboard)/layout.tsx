import { AppSidebar } from "@/components/content/DashboardSection/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger className={"hover: cursor-pointer"} />
      <main className={"ml-3 w-full"}>{children}</main>
    </SidebarProvider>
  );
}
