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
import ButtonCreate from "@/components/content/dashboard/button-create";
import { Button } from "@/components/ui/button";
import WorkForm from "@/components/content/dashboard/work-form";

export default function AddWork() {
  return (
    <div className="w-full h-full relative">
      <Dialog>
        <DialogTrigger>
          <ButtonCreate buttonName="Create new project" />
        </DialogTrigger>
        <DialogContent className={"w-1/2"}>
          <DialogHeader>
            <DialogTitle>Create A New Experience</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <WorkForm />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
