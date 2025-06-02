/* eslint-disable @typescript-eslint/no-explicit-any */
import { Project } from "@/types/project";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import React from "react";
import SpinnerButton from "@/components/content/auth/components/spinner-button";

interface TechnologyProps {
  showDeleteDialog: any;
  setShowDeleteDialog: any;
  deleteProject: any;
  data: Project | null;
  isPendingProject: boolean;
}

export default function DeleteProject({
  showDeleteDialog,
  setShowDeleteDialog,
  deleteProject,
  data,
  isPendingProject,
}: TechnologyProps) {
  async function onProjectDelete(data: Project | null) {
    await deleteProject(data);
  }
  return (
    <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onProjectDelete(data)}>
            {isPendingProject ? <SpinnerButton /> : "Confirm"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
