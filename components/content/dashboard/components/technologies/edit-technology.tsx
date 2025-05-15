/* eslint-disable @typescript-eslint/no-explicit-any */
import { Technology } from "@/types/technology";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useEffect } from "react";
import TechnologyForm from "./technology-form";
import useEditTechnology from "../../hooks/technologies/useEditTechnology";
interface TechnologyProps {
  showDialog: any;
  setShowDialog: any;
  data: Technology | null;
}

export default function EditTechnology({
  showDialog,
  setShowDialog,
  data,
}: TechnologyProps) {
  const editProps: {
    id: number;
    defaultValues: { name: string };
    image: string;
  } = {
    id: data?.id as number,
    defaultValues: {
      name: data?.name as string,
    },
    image: data?.image as string | "",
  };

  const {
    form,
    isPendingStack,
    onSubmitStack,
    handlePreview,
    previewURL,
    setPreviewURL,
  } = useEditTechnology(editProps);

  useEffect(() => {
    if (data) {
      form.reset({ name: data.name });
      setPreviewURL(data.image);
    }
  }, [data, form, setPreviewURL]);

  return (
    <div className="w-full h-full relative">
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className={"w-1/2"}>
          <DialogHeader>
            <DialogTitle>Edit Technology</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <TechnologyForm
            form={form}
            onSubmitStack={onSubmitStack}
            isPendingStack={isPendingStack}
            handlePreview={handlePreview}
            previewURL={previewURL}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
