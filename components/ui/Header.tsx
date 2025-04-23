"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className={"flex flex-row py-5"}>
        <div className={"basis-2/3"}>
          <h1>MRi Zal</h1>
        </div>
        <nav className={"basis-1/3 flex flex-row justify-between align-middle"}>
          <Link href={"/"}>home</Link>
          <Link href={"/about"}>about</Link>
          <Link href={"/projects"}>projects</Link>
          <Link href={"/blog"}>blog</Link>
          <Link href={"/auth/login"}>Sign</Link>
        </nav>
      </div>
    </div>
  );
}
