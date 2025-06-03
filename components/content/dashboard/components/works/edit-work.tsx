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
    isSuccess,
    isPendingWork,
    onSubmitWork,
    handlePreview,
    previewURL,
    setPreviewURL,
  } = useEditWork(editProps);

  useEffect(() => {
    if (data) {
      const normalized = data.description.map((val) => ({ value: val }));

      form.reset({
        role: data.role,
        company: data.company,
        startDate: data.start_date,
        endDate: data.end_date,
        stacks: data.stacks,
        description: normalized,
        image: undefined,
      });
      console.log("data work", data);
      setPreviewURL(data.image);
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
        <DialogContent className={"w-1/2 max-h-screen overflow-y-auto"}>
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
