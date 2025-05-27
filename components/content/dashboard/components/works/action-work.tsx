/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Work } from "@/types/work";

export default function ActionWork({
  row,
  onDeleteWork,
  onEditWork,
}: {
  row: any;
  onEditWork: (item: Work) => void;
  onDeleteWork: (item: any) => void;
}) {
  const stack: Work = row.original;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            <strong>Actions</strong>
          </DropdownMenuLabel>
          <DropdownMenuItem className="cursor-pointer">
            view work details
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onEditWork(stack)}
          >
            edit stack
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer text-red-600"
            onClick={() => onDeleteWork(stack.id)}
          >
            delete work
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
