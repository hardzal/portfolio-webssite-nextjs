/* eslint-disable @typescript-eslint/no-explicit-any */
import SpinnerButton from "@/components/content/auth/components/spinner-button";
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
import { Technology } from "@/types/technology";
import React from "react";
interface TechnologyProps {
  showDeleteDialog: any;
  setShowDeleteDialog: any;
  deleteTechnology: any;
  data: Technology | null;
  isPendingTechnology: boolean;
}

export default function DeleteTechnology({
  showDeleteDialog,
  setShowDeleteDialog,
  deleteTechnology,
  data,
  isPendingTechnology,
}: TechnologyProps) {
  async function onTechnologyDelete(data: Technology | null) {
    await deleteTechnology(data);
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
          <AlertDialogAction onClick={() => onTechnologyDelete(data)}>
            {isPendingTechnology ? <SpinnerButton /> : "Confirm"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
