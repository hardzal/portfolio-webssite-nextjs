/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ButtonCreate from "@/components/content/dashboard/ui/button-create";
import ProjectForm from "@/components/content/dashboard/components/projects/project-form";
import useAddProject from "../../hooks/projects/useAddProject";

interface ProjectProps {
  form: any;
  isSuccess: any;
  isPendingProject: boolean;
  onSubmitProject: any;
  handlePreview: any;
  previewURL: string | null;
}

export default function AddProject({
  openDialog,
  setOpenDialog,
}: {
  openDialog: boolean;
  setOpenDialog: (open: boolean) => void;
}) {
  const { isSuccess, ...projectProps }: ProjectProps = useAddProject();

  useEffect(() => {
    if (isSuccess) {
      setOpenDialog(false);
    }
  }, [isSuccess, setOpenDialog]);

  return (
    <div className="w-full h-full relative">
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger>
          <ButtonCreate buttonName="Create new project" />
        </DialogTrigger>
        <DialogContent className={"w-1/2"}>
          <DialogHeader>
            <DialogTitle>Create A New Project</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ProjectForm {...projectProps} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
