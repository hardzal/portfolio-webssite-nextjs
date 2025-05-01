"use client";
import React from "react";

export default function ButtonCreate({ buttonName }: { buttonName: string }) {
  return (
    <div
      className={"bg-blue-950 text-white p-5 w-fit cursor-pointer rounded-lg"}
    >
      {buttonName}
    </div>
  );
}
