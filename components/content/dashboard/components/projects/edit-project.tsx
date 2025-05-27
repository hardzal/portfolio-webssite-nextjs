/* eslint-disable @typescript-eslint/no-explicit-any */
import { Project } from "@/types/project";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useEffect } from "react";
import useEditProject from "../../hooks/projects/useEditProject";
import ProjectForm from "./project-form";
interface ProjectProps {
  showDialog: any;
  setShowDialog: any;
  data: Project | null;
}

export default function EditProject({
  showDialog,
  setShowDialog,
  data,
}: ProjectProps) {
  const editProps: { id: number } = {
    id: data?.id as number,
  };
  const {
    form,
    isSuccess,
    isPendingProject,
    onSubmitProject,
    handlePreview,
    previewURL,
    setPreviewURL,
  } = useEditProject(editProps);

  useEffect(() => {
    if (data) {
      form.reset({ ...data });
      setPreviewURL(data.image_url);
    }
  }, [data, form, setPreviewURL]);

  useEffect(() => {
    if (isSuccess) {
      setShowDialog(false);
    }
  }, [isSuccess, setShowDialog]);

  return (
    <div className="w-full h-full relative">
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className={"w-1/2"}>
          <DialogHeader>
            <DialogTitle>Edit A Project</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ProjectForm
            form={form}
            onSubmitProject={onSubmitProject}
            isPendingProject={isPendingProject}
            handlePreview={handlePreview}
            previewURL={previewURL}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
