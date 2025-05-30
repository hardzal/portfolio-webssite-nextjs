/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import AddTechnology from "../../../components/content/dashboard/components/technologies/add-technology";
import { DataTable } from "./data-table";
import { Technology } from "@/types/technology";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/configs/axios";
import SpinnerButton from "@/components/content/auth/components/Spinner";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import ActionTechnology from "@/components/content/dashboard/components/technologies/action-technology";
import useDeleteTechnology from "@/components/content/dashboard/hooks/technologies/useDeleteTechnology";
import DeleteTechnology from "@/components/content/dashboard/components/technologies/delete-technology";
import EditTechnology from "@/components/content/dashboard/components/technologies/edit-technology";

interface ActionProps {
  data: Technology | null;
  isPendingTechnology: boolean;
  showDeleteDialog: any;
  setShowDeleteDialog: any;
  deleteTechnology: any;
}

export default function TechnologiesPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogAdd, setOpenDialogAdd] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Technology | null>(null);

  const { deleteTechnology, isPendingTechnology } = useDeleteTechnology();

  const { isLoading: isLoadingTechnologies, data: dataTechnology } = useQuery<
    Technology[],
    Error
  >({
    queryKey: ["dataTechnology"],
    queryFn: async () => {
      const response = await axiosInstance.get("/stacks");

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
        <ActionTechnology
          row={row}
          onEditTechnology={(item) => {
            setSelectedItem(item);
            setOpenDialogEdit(true);
          }}
          onDeleteTechnology={(item) => {
            setSelectedItem(item);
            setOpenDialog(true);
          }}
        />
      ),
    },
  ];

  const actionProps: ActionProps = {
    showDeleteDialog: openDialog,
    setShowDeleteDialog: setOpenDialog,
    data: selectedItem,
    deleteTechnology: deleteTechnology,
    isPendingTechnology: isPendingTechnology,
  };

  if (isLoadingTechnologies) {
    return <SpinnerButton />;
  }

  return (
    <div className={"flex flex-col w-full py-5"}>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-2xl"}>Technology Page</h2>
        <AddTechnology open={openDialogAdd} setOpen={setOpenDialogAdd} />
      </div>

      <div className={"container mt-5"}>
        {dataTechnology && dataTechnology.length > 0 ? (
          <DataTable columns={columns} data={dataTechnology} />
        ) : (
          <p className="text-gray-500">Data technology not found.</p>
        )}
      </div>

      <DeleteTechnology {...actionProps} />
      <EditTechnology
        showDialog={openDialogEdit}
        setShowDialog={setOpenDialogEdit}
        data={selectedItem}
      />
    </div>
  );
}
