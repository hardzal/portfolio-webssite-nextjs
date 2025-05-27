/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useEffect } from "react";
import WorkForm from "./work-form";
import useEditWork from "../../hooks/works/useEditWork";
import { Work } from "@/types/work";
interface WorkProps {
  showDialog: any;
  setShowDialog: any;
  data: Work | null;
}

export default function EditWork({
  showDialog,
  setShowDialog,
  data,
}: WorkProps) {
  const editProps: { id: number } = {
    id: data?.id as number,
  };
  const {
    form,
    isPendingWork,
    onSubmitWork,
    handlePreview,
    previewURL,
    setPreviewURL,
  } = useEditWork(editProps);

  useEffect(() => {
    if (data) {
      setPreviewURL(data.image);
    }
  }, [data, form, setPreviewURL]);
  return (
    <div className="w-full h-full relative">
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className={"w-1/2"}>
          <DialogHeader>
            <DialogTitle>Edit A Work</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <WorkForm
            form={form}
            onSubmitWork={onSubmitWork}
            isPendingWork={isPendingWork}
            handlePreview={handlePreview}
            previewURL={previewURL}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
