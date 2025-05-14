/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function DeleteTechnology({
  row,
  onDeleteTechnology,
}: {
  row: any;
  onDeleteTechnology: (item: any) => void;
}) {
  const stack = row.original;

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
            view stack details
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            edit stack
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer text-red-600"
            onClick={() => onDeleteTechnology(stack.id)}
          >
            delete stack
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
