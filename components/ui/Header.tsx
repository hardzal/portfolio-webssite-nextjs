"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./button";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div
      className={
        "fixed top-0 left-0 right-0 w-2/3 mx-auto z-30 bg-white dark:bg-gray-950 transition-colors duration-300"
      }
    >
      <div className={"flex flex-row py-5"}>
        <div className={"basis-1/3"}>
          <h1>MRi Zal</h1>
        </div>
        <nav
          className={
            "basis-2/3 flex flex-row justify-between items-center align-middle"
          }
        >
          <Link href={"#tech_stack"}>Tech Stack</Link>
          <Link href={"#experience"}>Experience</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"/blog"}>blog</Link>
          <Link href={"wa.me/+6287781383892"}>
            <Button
              className={
                "bg-green-500 cursor-pointer text-white py-3 text-lg font-medium flex flex-row gap-2"
              }
            >
              <Image
                src={"/icons/whatsapp.svg"}
                alt={"email icon"}
                width={16}
                height={16}
              />
              <span>{"Let's talk"}</span>
            </Button>
          </Link>
          <Link href={""}>
            <Button
              className={
                "bg-black cursor-pointer text-white text-lg font-medium flex flex-row gap-2"
              }
            >
              <Image
                src={"/icons/document.svg"}
                alt={"email icon"}
                width={16}
                height={16}
              />
              <span>{"Download CV"}</span>
            </Button>
          </Link>
          <ModeToggle />
          {/* <Link href={"/auth/login"}>Sign</Link> */}
        </nav>
      </div>
    </div>
  );
}
