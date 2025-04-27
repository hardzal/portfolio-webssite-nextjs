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

export default function ProjectExperience() {
  return (
    <>
      <h2 className={"font-semibold text-3xl mb-10"}>My Projects</h2>
      <div className="grid grid-cols-2 gap-10">
        <Card>
          <CardContent className="flex flex-col items-center justify-center border-gray-200 border-b-2">
            <Image
              src={"/photos/project-management.jpg"}
              alt={"Thumbnail project"}
              width={300}
              height={300}
            />
          </CardContent>
          <CardHeader>
            <CardTitle className={"mb-3"}>Project title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              quidem neque quam! Repellat nisi quas sint ipsa. Laborum deserunt
              magnam non architecto, id quidem ducimus veniam blanditiis, a
              excepturi facere!
            </CardDescription>
            <div className={"flex flex-row gap-3 mt-3"}>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Reactjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Nodejs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Expressjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Postgresql
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Tailwind
              </span>
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
        <Card>
          <CardContent className="flex flex-col items-center justify-center border-gray-200 border-b-2">
            <Image
              src={"/photos/project-management.jpg"}
              alt={"Thumbnail project"}
              width={300}
              height={300}
            />
          </CardContent>
          <CardHeader>
            <CardTitle className={"mb-3"}>Project title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              quidem neque quam! Repellat nisi quas sint ipsa. Laborum deserunt
              magnam non architecto, id quidem ducimus veniam blanditiis, a
              excepturi facere!
            </CardDescription>
            <div className={"flex flex-row gap-3 mt-3"}>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Reactjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Nodejs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Expressjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Postgresql
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Tailwind
              </span>
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
        <Card>
          <CardContent className="flex flex-col items-center justify-center border-gray-200 border-b-2">
            <Image
              src={"/photos/project-management.jpg"}
              alt={"Thumbnail project"}
              width={300}
              height={300}
            />
          </CardContent>
          <CardHeader>
            <CardTitle className={"mb-3"}>Project title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              quidem neque quam! Repellat nisi quas sint ipsa. Laborum deserunt
              magnam non architecto, id quidem ducimus veniam blanditiis, a
              excepturi facere!
            </CardDescription>
            <div className={"flex flex-row gap-3 mt-3"}>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Reactjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Nodejs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Expressjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Postgresql
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Tailwind
              </span>
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
        <Card>
          <CardContent className="flex flex-col items-center justify-center border-gray-200 border-b-2">
            <Image
              src={"/photos/project-management.jpg"}
              alt={"Thumbnail project"}
              width={300}
              height={300}
            />
          </CardContent>
          <CardHeader>
            <CardTitle className={"mb-3"}>Project title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              quidem neque quam! Repellat nisi quas sint ipsa. Laborum deserunt
              magnam non architecto, id quidem ducimus veniam blanditiis, a
              excepturi facere!
            </CardDescription>
            <div className={"flex flex-row gap-3 mt-3"}>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Reactjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Nodejs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Expressjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Postgresql
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Tailwind
              </span>
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
        <Card>
          <CardContent className="flex flex-col items-center justify-center border-gray-200 border-b-2">
            <Image
              src={"/photos/project-management.jpg"}
              alt={"Thumbnail project"}
              width={300}
              height={300}
            />
          </CardContent>
          <CardHeader>
            <CardTitle className={"mb-3"}>Project title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              quidem neque quam! Repellat nisi quas sint ipsa. Laborum deserunt
              magnam non architecto, id quidem ducimus veniam blanditiis, a
              excepturi facere!
            </CardDescription>
            <div className={"flex flex-row gap-3 mt-3"}>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Reactjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Nodejs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Expressjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Postgresql
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Tailwind
              </span>
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
        <Card>
          <CardContent className="flex flex-col items-center justify-center border-gray-200 border-b-2">
            <Image
              src={"/photos/project-management.jpg"}
              alt={"Thumbnail project"}
              width={300}
              height={300}
            />
          </CardContent>
          <CardHeader>
            <CardTitle className={"mb-3"}>Project title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              quidem neque quam! Repellat nisi quas sint ipsa. Laborum deserunt
              magnam non architecto, id quidem ducimus veniam blanditiis, a
              excepturi facere!
            </CardDescription>
            <div className={"flex flex-row gap-3 mt-3"}>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Reactjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Nodejs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Expressjs
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Postgresql
              </span>
              <span
                className={
                  "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                }
              >
                Tailwind
              </span>
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
      </div>
    </>
  );
}
