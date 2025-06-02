"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { DataTable } from "./data-table";
import { axiosInstance } from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import SpinnerButton from "@/components/content/auth/components/spinner-button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Work } from "@/types/work";
import AddWork from "@/components/content/dashboard/components/works/add-work";
import useDeleteWork from "@/components/content/dashboard/hooks/works/useDeleteWork";
import ActionWork from "@/components/content/dashboard/components/works/action-work";
import DeleteWork from "@/components/content/dashboard/components/works/delete-work";
import EditWork from "@/components/content/dashboard/components/works/edit-work";

interface ActionProps {
  data: Work | null;
  isPendingWork: boolean;
  showDeleteDialog: any;
  setShowDeleteDialog: any;
  deleteWork: any;
}

export default function ExperiencePage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogAdd, setOpenDialogAdd] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Work | null>(null);

  const { deleteWork, isPendingWork } = useDeleteWork();

  const { isLoading: isLoadingWorks, data: dataWorks } = useQuery<Work[]>({
    queryKey: ["dataWorks"],
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
      size: 15,
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
      cell: ({ row }) => (
        <ActionWork
          row={row}
          onEditWork={(item) => {
            setSelectedItem(item);
            setOpenDialogEdit(true);
          }}
          onDeleteWork={(item) => {
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
    deleteWork: deleteWork,
    isPendingWork: isPendingWork,
  };

  if (isLoadingWorks) {
    return <SpinnerButton />;
  }

  return (
    <div className={"flex flex-col p-5 w-full py-5"}>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-2xl"}>Work Experiencs Page</h2>
        <AddWork open={openDialogAdd} setOpen={setOpenDialogAdd} />
      </div>

      <div className={"container mt-5"}>
        {dataWorks && dataWorks.length > 0 ? (
          <DataTable columns={columns} data={dataWorks} />
        ) : (
          <p className="text-gray-500">Data works not found.</p>
        )}
      </div>

      <DeleteWork {...actionProps} />
      <EditWork
        showDialog={openDialogEdit}
        setShowDialog={setOpenDialogEdit}
        data={selectedItem}
      />
    </div>
  );
}
