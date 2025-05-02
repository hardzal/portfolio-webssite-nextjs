import React from "react";
import AddTechnology from "./add-technology";
import { DataTable } from "./data-table";
import { Technology } from "@/types/technology";
import { Technologies } from "@/components/utils/dummy-data/technologies";
import { columns } from "./columns";

export default function TechnologiesPage() {
  const data: Technology[] = Technologies;

  return (
    <div className={"flex flex-col p-5 w-full py-5"}>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-2xl"}>Projects Page</h2>
        <AddTechnology />
      </div>

      <div className={"container mt-5"}>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
