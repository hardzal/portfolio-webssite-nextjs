"use client";
import React from "react";
import AddTechnology from "./add-technology";
import { DataTable } from "./data-table";
import { Technology } from "@/types/technology";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/configs/axios";
import SpinnerButton from "@/components/content/auth/components/Spinner";

export default function TechnologiesPage() {
  const { isLoading: isLoadingTechnologies, data: dataTechnology } = useQuery<
    Technology[]
  >({
    queryKey: ["dataTechnology"],
    queryFn: async () => {
      const response = await axiosInstance.get("/stacks");
      console.log(response.data.data);
      return response.data.data;
    },
  });

  if (isLoadingTechnologies) {
    return <SpinnerButton />;
  }

  return (
    <div className={"flex flex-col p-5 w-full py-5"}>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-2xl"}>Technology Page</h2>
        <AddTechnology />
      </div>

      <div className={"container mt-5"}>
        {dataTechnology && dataTechnology.length > 0 ? (
          <DataTable columns={columns} data={dataTechnology} />
        ) : (
          <p className="text-gray-500">Data technology not found.</p>
        )}
      </div>
    </div>
  );
}
