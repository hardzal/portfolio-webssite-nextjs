"use client";
import Image from "next/image";
import React from "react";

import AboutMe from "../content/about-me";
import TechStack from "../content/tech-stack";
import WorkExperience from "../content/work-experience";
import ProjectExperience from "../content/project-experience";

export default function HomeSection() {
  return (
    <>
      <main className={"flex md:flex-row flex-col gap-5 mb-30"}>
        <AboutMe />
      </main>

      <div id={"tech_stack"}>
        <div className={"mb-30"}>
          <TechStack />
        </div>
      </div>

      {/* /* <!-- Work Experience Section --> */}
      <div id={"experience"}>
        <div className={"work-section mb-30"}>
          <WorkExperience />
        </div>
      </div>

      {/* <!-- Project Section --> */}
      <div id={"projects"}>
        <div className="project-section mb-30">
          <ProjectExperience />
        </div>
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
