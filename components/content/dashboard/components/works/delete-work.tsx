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
import { Work } from "@/types/work";
import React from "react";
interface WorkProps {
  showDeleteDialog: any;
  setShowDeleteDialog: any;
  deleteWork: any;
  data: Work | null;
  isPendingWork: boolean;
}

export default function DeleteWork({
  showDeleteDialog,
  setShowDeleteDialog,
  deleteWork,
  data,
  isPendingWork,
}: WorkProps) {
  async function onWokDelete(data: Work | null) {
    await deleteWork(data);
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
          <AlertDialogAction onClick={() => onWokDelete(data)}>
            {isPendingWork ? <SpinnerButton /> : "Confirm"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
