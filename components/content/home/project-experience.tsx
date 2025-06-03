import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import Image from "next/image";
import Link from "next/link";
import useGetProject from "../dashboard/hooks/projects/useGetProject";
import { Skeleton } from "@/components/ui/skeleton";
import useGetStack from "../dashboard/hooks/technologies/useGetStack";

export default function ProjectExperience() {
  const { isLoadingProjects, dataProject } = useGetProject();
  const { dataTechnology } = useGetStack();

  return (
    <>
      <h2 className={"font-semibold text-3xl mb-10"}>My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-md:w-full">
        {dataProject?.map((project, index) =>
          isLoadingProjects ? (
            <Skeleton
              className="overflow-hidden text-wrap sm:break-normal break-words dark:bg-gray-900"
              key={project.id + index}
            />
          ) : (
            <Card
              key={project.id + index}
              className={
                "overflow-hidden text-wrap sm:break-normal break-words dark:bg-gray-900"
              }
            >
              <CardContent className="flex flex-col items-center justify-center border-gray-200 border-b-2">
                <Image
                  src={project.image_url}
                  alt={"Thumbnail project"}
                  width={300}
                  height={300}
                />
              </CardContent>
              <CardHeader className={"p-3"}>
                <CardTitle className={"mb-3"}>{project.title}</CardTitle>
                <CardDescription className={"text-sm text-wrap"}>
                  {project.description}
                </CardDescription>
                <div className={"flex flex-row gap-3 mt-3"}>
                  {project.stacks?.map((tech, newIndex) => (
                    <span
                      key={tech + newIndex}
                      className={
                        "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                      }
                    >
                      {
                        dataTechnology?.find(
                          (item) => item.id.toString() == tech
                        )?.name
                      }
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardFooter className={"flex flex-row gap-5"}>
                <p className={"text-gray-500 flex flex-row gap-2"}>
                  <Link href={project?.repo || "#"}>
                    <Image
                      src={"/icons/github.svg"}
                      alt={"github icon"}
                      width={24}
                      height={24}
                    />
                    <span>{"Privated repository"}</span>
                  </Link>
                </p>
                <Link
                  href={project?.demo || "#"}
                  className={"flex flex-row gap-2"}
                >
                  <Image
                    src={"/icons/new-window.svg"}
                    alt={"link icon"}
                    width={16}
                    height={16}
                  />
                  <span>Demo</span>
                </Link>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </>
  );
}
