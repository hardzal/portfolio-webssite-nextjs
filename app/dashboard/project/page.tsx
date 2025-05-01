import { Projects } from "@/components/utils/dummy-data/projects";
import { Project } from "@/types/project";
import { DataTable } from "./data-table";

import React from "react";
import { columns } from "./columns";
import AddProject from "./add-project";

export default function ProjectPage() {
  const data: Project[] = Projects;

  return (
    <div className={"flex flex-col p-5 w-full py-5"}>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-2xl"}>Projects Page</h2>
        <AddProject />
      </div>

      <div className={"container mt-5"}>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
