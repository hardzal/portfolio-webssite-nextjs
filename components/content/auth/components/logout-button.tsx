"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();

  function onLogout() {
    Cookies.remove("token");
    toast.success("messages", {
      description: "Success Logout",
      duration: 3000,
    });

    setTimeout(() => {
      router.push("/auth/login");
    }, 1000);
  }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger
          className={
            "pl-3 flex gap-3 cursor-pointer mt-3 align-middle justify-center"
          }
        >
          <LogOut size={16} />
          <span className="text-md">Logout</span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure to logout?</AlertDialogTitle>
            <AlertDialogDescription>
              Setelah logout, kamu bisa login kembali
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No</AlertDialogCancel>
            <AlertDialogAction onClick={onLogout} className="cursor-pointer">
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
