import Image from "next/image";
import React from "react";
import { Works } from "../../utils/dummy-data/works";

export default function WorkExperience() {
  return (
    <>
      <h2 className={"font-semibold text-3xl my-5"}>Work Experience</h2>
      {Works.map((work, index) => (
        <div
          key={work.company + index}
          className={
            "flex flex-row max-md:flex-col items-start md:gap-8 border-b-2 py-5"
          }
        >
          <div className={"flex flex-col py-3 items-center justify-center"}>
            <Image
              src={work.image}
              alt={"javascript icon"}
              width={100}
              height={100}
              className={"object-contain"}
            />
          </div>

          <div className={"flex flex-col grow my-5"}>
            <div
              className={
                "flex flex-row justify-between items-center align-middle max-md:justify-between max-md:gap-20"
              }
            >
              <div className={""}>
                <h3 className={"text-xl font-semibold"}>{work.position}</h3>
                <span className={"text-green-600"}>{work.company}</span>
              </div>
              <div className={""}>
                <p>{work.period}</p>
              </div>
            </div>

            <div className={""}>
              <ul className={"list-skill list-disc mt-5"}>
                {work.description.map((desc, newIndex) => (
                  <li key={desc + newIndex}>{desc}</li>
                ))}
              </ul>

              <div className={"flex flex-row gap-3 mt-3"}>
                {work.technologies.map((tech, newIndex) => (
                  <span
                    key={tech + newIndex}
                    className={
                      "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
