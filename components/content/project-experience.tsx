import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Projects } from "../utils/dummy-data/projects";

export default function ProjectExperience() {
  return (
    <>
      <h2 className={"font-semibold text-3xl mb-10"}>My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:overflow-hidden ">
        {Projects.map((project, index) => (
          <Card key={project.id + index}>
            <CardContent className="flex flex-col items-center justify-center border-gray-200 border-b-2">
              <Image
                src={project.images}
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
                {project.technologies.map((tech, newIndex) => (
                  <span
                    key={tech + newIndex}
                    className={
                      "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardFooter className={"flex flex-row gap-5"}>
              <p className={"text-gray-500 flex flex-row gap-2"}>
                <Image
                  src={"/icons/github.svg"}
                  alt={"github icon"}
                  width={24}
                  height={24}
                />
                {"Privated repository"}
              </p>
              <Link
                href={`https://github.com/hardzal`}
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
        ))}
      </div>
    </>
  );
}
