/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import AddTechnology from "../../../components/content/dashboard/components/technologies/add-technology";
import { DataTable } from "./data-table";
import { Technology } from "@/types/technology";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/configs/axios";
import SpinnerButton from "@/components/content/auth/components/Spinner";
import AlertDelete from "@/components/content/dashboard/components/technologies/alert-delete";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import DeleteTechnology from "@/components/content/dashboard/components/technologies/delete-technology";
import useDeleteTechnology from "@/components/content/dashboard/hooks/technologies/useDeleteTechnology";

interface AlertProps {
  showDeleteDialog: any;
  setShowDeleteDialog: any;
  deleteTechnology: any;
  data: Technology | null;
  isPendingTechnology: boolean;
}

export default function TechnologiesPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Technology | null>(null);

  const { deleteTechnology, isPendingTechnology } = useDeleteTechnology();

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

  const columns: ColumnDef<Technology>[] = [
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
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      id: "actions",
      header: "actions",
      cell: ({ row }) => (
        <DeleteTechnology
          row={row}
          onDeleteTechnology={(item) => {
            setSelectedItem(item);
            setOpenDialog(true);
            console.log("test", item);
          }}
        />
      ),
    },
  ];

  const alertprops: AlertProps = {
    showDeleteDialog: openDialog,
    setShowDeleteDialog: setOpenDialog,
    data: selectedItem,
    deleteTechnology: deleteTechnology,
    isPendingTechnology: isPendingTechnology,
  };

  console.log("setelah diklik", alertprops);

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

      <AlertDelete {...alertprops} />
    </div>
  );
}
