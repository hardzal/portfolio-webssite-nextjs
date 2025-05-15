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
import TechnologyForm from "@/components/content/dashboard/components/technologies/technology-form";
import useAddTechnology from "../../hooks/technologies/useAddTechology";

interface TechnologyProps {
  form: any;
  isSuccess: any;
  isPendingStack: boolean;
  onSubmitStack: any;
  handlePreview: any;
  previewURL: string | null;
}

export default function AddProject({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { isSuccess, ...technologyProps }: TechnologyProps = useAddTechnology();

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess, setOpen]);

  return (
    <div className="w-full h-full relative">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <ButtonCreate buttonName="Add new technology" />
        </DialogTrigger>
        <DialogContent className={"w-1/2"}>
          <DialogHeader>
            <DialogTitle>Add A New Technology</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <TechnologyForm {...technologyProps} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
