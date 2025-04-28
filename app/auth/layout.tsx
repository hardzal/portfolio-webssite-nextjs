import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen bg-[#7f8c8d]">
      <div
        className={
          "flex flex-row w-1/3 align-middle mx-auto min-h-screen justify-center items-center"
        }
      >
        {children}
      </div>
    </div>
  );
}
