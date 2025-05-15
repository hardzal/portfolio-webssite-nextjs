"use client";
import { Project } from "@/types/project";
import { DataTable } from "./data-table";

import React from "react";
import { columns } from "./columns";
import AddProject from "./add-project";
import { axiosInstance } from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import SpinnerButton from "@/components/content/auth/components/Spinner";

export default function ProjectPage() {
  const { isLoading: isLoadingProjects, data: dataProject } = useQuery<
    Project[]
  >({
    queryKey: ["dataProject"],
    queryFn: async () => {
      const response = await axiosInstance.get("/projects");
      console.log(response.data.data);
      return response.data.data;
    },
  });

  if (isLoadingProjects) {
    return <SpinnerButton />;
  }

  return (
    <div className={"flex flex-col p-5 w-full py-5"}>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-2xl"}>Projects Page</h2>
        <AddProject />
      </div>

      <div className={"container mt-5"}>
        {dataProject && dataProject.length > 0 ? (
          <DataTable columns={columns} data={dataProject} />
        ) : (
          <p className="text-gray-500">Data project not found.</p>
        )}
      </div>
    </div>
  );
}
