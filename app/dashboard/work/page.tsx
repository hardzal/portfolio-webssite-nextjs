"use client";
// import { Works } from "@/components/utils/dummy-data/works";
import React from "react";
import { DataTable } from "./data-table";
import { axiosInstance } from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import SpinnerButton from "@/components/content/auth/components/Spinner";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Work } from "@/types/work";
import AddWork from "@/components/content/dashboard/components/works/add-work";
export default function ExperiencePage() {
  const { isLoading: isLoadingWorks, data: dataWorks } = useQuery<Work[]>({
    queryKey: ["dataWork"],
    queryFn: async () => {
      const response = await axiosInstance.get("/works");

      return response.data.data;
    },
  });

  if (isLoadingWorks) {
    return <SpinnerButton />;
  }
  const columns: ColumnDef<Work>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Id
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "role",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Position
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "company",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Company
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const work = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <strong>Actions</strong>
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(work.company || "")
                }
              >
                Copy link github
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                view project details
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                edit project
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                delete project
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  return (
    <div className={"flex flex-col p-5 w-full py-5"}>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-2xl"}>Work Experiencs Page</h2>
        <AddWork />
      </div>

      <div className={"container mt-5"}>
        {dataWorks && dataWorks.length > 0 ? (
          <DataTable columns={columns} data={dataWorks} />
        ) : (
          <p className="text-gray-500">Data works not found.</p>
        )}
      </div>
    </div>
  );
}
