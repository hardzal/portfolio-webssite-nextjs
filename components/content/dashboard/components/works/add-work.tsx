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
import WorkForm from "@/components/content/dashboard/components/works/work-form";
import useAddWork from "../../hooks/works/useAddWork";

interface WorkProps {
  form: any;
  isSuccess: any;
  isPendingWork: boolean;
  onSubmitWork: any;
  handlePreview: any;
  previewURL: string | null;
}

export default function AddWork({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { isSuccess, ...workProps }: WorkProps = useAddWork();

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess, setOpen]);

  return (
    <div className="w-full h-full relative">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <ButtonCreate buttonName="Create new work" />
        </DialogTrigger>
        <DialogContent className={"w-1/2 max-h-screen overflow-y-auto"}>
          <DialogHeader>
            <DialogTitle>Create A New Experience</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <WorkForm {...workProps} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
