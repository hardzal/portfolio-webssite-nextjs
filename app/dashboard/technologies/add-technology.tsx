import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ButtonCreate from "@/components/content/dashboard/ui/button-create";
import TechnologyForm from "@/components/content/dashboard/components/technologies/technology-form";

export default function AddProject() {
  return (
    <div className="w-full h-full relative">
      <Dialog>
        <DialogTrigger>
          <ButtonCreate buttonName="Add new technology" />
        </DialogTrigger>
        <DialogContent className={"w-1/2"}>
          <DialogHeader>
            <DialogTitle>Add A New Technology</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <TechnologyForm />
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
