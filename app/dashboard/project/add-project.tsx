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
import ProjectForm from "@/components/content/dashboard/project-form";

export default function AddProject() {
  return (
    <div className="w-full h-full relative">
      <Dialog>
        <DialogTrigger>
          <ButtonCreate buttonName="Create new project" />
        </DialogTrigger>
        <DialogContent className={"w-1/2"}>
          <DialogHeader>
            <DialogTitle>Create A New Project</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ProjectForm />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
