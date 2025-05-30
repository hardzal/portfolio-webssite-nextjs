import AboutForm from "@/components/content/dashboard/components/about/about-form";
import React from "react";

export default function AboutPage() {
  const {} = useEditForm();

  return (
    <div className={"flex flex-col"}>
      <div className={"flex p-5"}>
        <h1 className={"text-2xl"}>About Page</h1>
      </div>

      <div className={"container"}>
        <AboutForm />
      </div>
    </div>
  );
}
