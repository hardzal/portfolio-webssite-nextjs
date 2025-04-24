"use client";
import Image from "next/image";
import React from "react";

import AboutMe from "../content/AboutMe";
import TechStack from "../content/TechStack";
import WorkExperience from "../content/WorkExperience";
import ProjectExperience from "../content/ProjectExperience";

export default function HomeSection() {
  return (
    <>
      <main className={"flex flex-row gap-5"}>
        <AboutMe />
      </main>
      <div className={"my-10"}>
        <TechStack />
      </div>

      {/* /* <!-- Work Experience Section --> */}
      <div className={"work-section mt-5"}>
        <WorkExperience />
      </div>

      {/* <!-- Project Section --> */}
      <div className="project-section my-5">
        <ProjectExperience />
      </div>

      <div
        className={
          "my-15 flex flex-col items-center justify-center align-middle"
        }
      >
        <h2 className={"text-3xl my-5 font-semibold"}>
          {"Let's build something together"}
        </h2>
        <p className={"text-sm"}>
          {
            "Feel free to reach out if you're looking for a developer, have a question, or just want to connect."
          }
        </p>

        <div className={"flex flex-row gap-5 mt-7"}>
          <p className={"text-gray-500 flex flex-row gap-2"}>
            <Image
              src={"/icons/mail.svg"}
              alt={"email icon"}
              width={16}
              height={16}
            />
            <span>{"hadrizal7@gmail.com"}</span>
          </p>
          <p>|</p>
          <p className={"flex flex-row gap-2"}>
            <Image
              src={"/icons/whatsapp.svg"}
              alt={"email icon"}
              width={16}
              height={16}
            />
            <span>{"+6287781383892"}</span>
          </p>
        </div>
      </div>
    </>
  );
}
