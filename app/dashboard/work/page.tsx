"use client";
// import { Works } from "@/components/utils/dummy-data/works";
import { Work } from "@/types/work";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import AddWork from "./add-work";
import { axiosInstance } from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import SpinnerButton from "@/components/content/auth/components/Spinner";

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
  // const data: Work[] = Works;

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
