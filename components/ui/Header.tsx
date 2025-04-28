"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#tech_stack", label: "Tech Stack" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <div className="hidden md:block bg-gray-200 dark:bg-gray-800 h-0.5 w-full"></div>
      <div
        className={
          "fixed top-0 left-0 right-0 w-2/3 mx-auto md:w-4/5 max-sm:w-full z-20 bg-white dark:bg-gray-950 transition-colors duration-300 md:text-sm"
        }
      >
        <div className={"flex md:flex-row justify-between items-center py-5"}>
          <div
            className={
              "grow flex flex-row items-center align-middle justify-center"
            }
          >
            <h1 className={"text-center font-bold"}>MRi Zal</h1>
          </div>
          <nav
            className={
              "grow md:flex flex-row justify-between items-center align-middle gap-5 hidden"
            }
          >
            <Link href={"#tech_stack"}>Tech Stack</Link>
            <Link href={"#experience"}>Experience</Link>
            <Link href={"#projects"}>Projects</Link>
            <Link href={"/blog"}>blog</Link>
            <Link
              href={"https://wa.me/+6287781383892"}
              className={"max-lg:hidden"}
            >
              <Button
                className={
                  "bg-green-500 hover:bg-green-400 hover:text-black cursor-pointer text-white py-3 text-lg font-medium flex flex-row gap-2"
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
            <Link href={""} className={"max-lg:hidden"}>
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
          <section className="flex grow-0 md:hidden dark:visited:text-gray-400">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[40%] sm:w-[350px]">
                <div className="flex flex-col gap-4 py-4 px-4">
                  {navItems.map((item) => (
                    <SheetTitle key={item.href}>
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </SheetTitle>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </section>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      {/* <div
        className={"hidden md:flex flex-row justify-end items-center w-1/3"}
        ref={menuBar}
      > */}
      {/* <div className="absolute top-0 right-0 px-8 py-8">
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div> */}

      {/* <ul className="flex flex-col items-center h-screen">
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/about">About</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
      {/* </div> */}
    </>
  );
}
