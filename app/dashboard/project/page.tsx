/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Project } from "@/types/project";
import { DataTable } from "./data-table";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { axiosInstance } from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import SpinnerButton from "@/components/content/auth/components/Spinner";
import AddProject from "@/components/content/dashboard/components/projects/add-project";
import { Button } from "@/components/ui/button";
import ActionProject from "@/components/content/dashboard/components/projects/action-project";
import useDeleteProject from "@/components/content/dashboard/hooks/projects/useDeleteProject";
import DeleteProject from "@/components/content/dashboard/components/projects/delete-project";
import EditProject from "@/components/content/dashboard/components/projects/edit-project";

interface ActionProps {
  data: Project | null;
  isPendingProject: boolean;
  showDeleteDialog: any;
  setShowDeleteDialog: any;
  deleteProject: any;
}

export default function ProjectPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogAdd, setOpenDialogAdd] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);

  const { deleteProject, isPendingProject } = useDeleteProject();

  const { isLoading: isLoadingProjects, data: dataProject } = useQuery<
    Project[]
  >({
    queryKey: ["dataProject"],
    queryFn: async () => {
      const response = await axiosInstance.get("/projects");

      return response.data.data;
    },
  });

  const columns: ColumnDef<Project>[] = [
    {
      accessorKey: "id",
      size: 10,
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
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <ActionProject
          row={row}
          onDeleteProject={(item) => {
            setSelectedItem(item);
            console.log("data item", item);
            setOpenDialog(true);
          }}
          onEditProject={(item) => {
            setSelectedItem(item);
            setOpenDialogEdit(true);
          }}
        />
      ),
    },
  ];

  const actionProps: ActionProps = {
    showDeleteDialog: openDialog,
    setShowDeleteDialog: setOpenDialog,
    data: selectedItem,
    deleteProject: deleteProject,
    isPendingProject: isPendingProject,
  };

  if (isLoadingProjects) {
    return <SpinnerButton />;
  }

  return (
    <div className={"flex flex-col p-5 w-full py-5"}>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-2xl"}>Projects Page</h2>
        <AddProject
          openDialog={openDialogAdd}
          setOpenDialog={setOpenDialogAdd}
        />
      </div>

      <div className={"container mt-5"}>
        {dataProject && dataProject.length > 0 ? (
          <DataTable columns={columns} data={dataProject} />
        ) : (
          <p className="text-gray-500">Data project not found.</p>
        )}
      </div>

      <DeleteProject {...actionProps} />
      <EditProject
        showDialog={openDialogEdit}
        setShowDialog={setOpenDialogEdit}
        data={selectedItem}
      />
    </div>
  );
}
