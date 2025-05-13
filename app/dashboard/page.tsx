"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function DashboardPage() {
  return (
    <div className={"flex flex-col p-5 w-full"}>
      <div className={""}>
        <h2 className={"text-2xl"}>Dashboard Page</h2>
      </div>
      <div className={"flex justify-center items-center gap-10 mt-5 w-full"}>
        <Card className={"w-1/2"}>
          <CardHeader>
            <CardTitle className={"text-2xl"}>Projects</CardTitle>
            <CardDescription>5 Projects total.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
              <li>Project 4</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href={"/projects"} className={"text-blue-500"}>
              view all projects
            </Link>
          </CardFooter>
        </Card>

        <Card className={"w-1/2"}>
          <CardHeader>
            <CardTitle className={"text-2xl"}>Work Experiences</CardTitle>
            <CardDescription>5 Projects total.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Works 1</li>
              <li>Work 2</li>
              <li>Work 3</li>
              <li>Work 4</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href={"/projects"} className={"text-blue-500"}>
              view all works
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className={"flex mt-10"}>
        <Card className={"w-full"}>
          <CardHeader>
            <CardTitle className={"text-2xl"}>Blog Posts</CardTitle>
            <CardDescription>5 Projects total.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Works 1</li>
              <li>Work 2</li>
              <li>Work 3</li>
              <li>Work 4</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href={"/projects"} className={"text-blue-500"}>
              view all works
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
