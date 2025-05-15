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
import { Project } from "@/types/project";

export default function ActionProject({
  row,
  onEditProject,
  onDeleteProject,
}: {
  row: any;
  onEditProject: (item: Project) => void;
  onDeleteProject: (item: Project) => void;
}) {
  {
    const project: Project = row.original;

    return (
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
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(project.repo || "")}
          >
            Copy link github
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            view project details
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onEditProject(project)}
          >
            edit project
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-red-600"
            onClick={() => onDeleteProject(project)}
          >
            delete project
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
