import Image from "next/image";
import React from "react";
import useGetWork from "../dashboard/hooks/works/useGetWork";
import { Skeleton } from "@/components/ui/skeleton";
import useGetStack from "../dashboard/hooks/technologies/useGetStack";
import { format } from "date-fns";

export default function WorkExperience() {
  const { isLoadingWorks, dataWorks } = useGetWork();
  const { dataTechnology } = useGetStack();
  return (
    <>
      <h2 className={"font-semibold text-3xl my-5"}>Work Experience</h2>
      {dataWorks?.map((work, index) => (
        <div
          className={"dark:bg-gray-900 border-b-1 mb-10 rounded-lg px-10"}
          key={work.company + index}
        >
          {isLoadingWorks ? (
            <Skeleton
              className={
                "flex flex-row max-md:flex-col items-start md:gap-8 py-5"
              }
            />
          ) : (
            <div
              className={
                "flex flex-row max-md:flex-col items-start md:gap-8 py-5"
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
                    <h3 className={"text-xl font-semibold"}>{work.role}</h3>
                    <span className={"text-green-600"}>{work.company}</span>
                  </div>
                  <div className={""}>
                    <p>
                      {format(new Date(work?.start_date), "MMM Y")} {" - "}
                      {format(new Date(work?.end_date), "MMM Y")}
                    </p>
                  </div>
                </div>

                <div className={""}>
                  <ul className={"list-skill list-disc mt-5"}>
                    {work.description.map((desc, newIndex) => (
                      <li key={desc + newIndex}>{desc}</li>
                    ))}
                  </ul>

                  <div className={"flex flex-row gap-3 mt-3"}>
                    {work.stacks?.map((tech, newIndex) => (
                      <span
                        key={tech + newIndex}
                        className={
                          "bg-gray-100 dark:bg-gray-800 p-2 text-xs rounded-2xl"
                        }
                      >
                        {
                          dataTechnology?.find(
                            (item) => item.id.toString() == tech
                          )?.name
                        }
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
