import { Works } from "@/components/utils/dummy-data/works";
import { Work } from "@/types/work";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import AddWork from "./add-work";

export default function ExperiencePage() {
  const data: Work[] = Works;

  return (
    <div className={"flex flex-col p-5 w-full py-5"}>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-2xl"}>Work Experiencs Page</h2>
        <AddWork />
      </div>

      <div className={"container mt-5"}>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
