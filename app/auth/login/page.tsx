import LoginForm from "@/components/content/AuthSection/login-form";
import React from "react";

export default function LoginPage() {
  return (
    <div
      className={
        "flex flex-col bg-[#ecf0f1] text-black p-20 rounded-lg shadow-2xl"
      }
    >
      <h3 className={"text-3xl pb-5 border-b-red-900 border-b-3"}>
        {"Login Form"}
      </h3>
      <LoginForm />
    </div>
  );
}
