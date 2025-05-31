"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import { MapPin } from "lucide-react";
import useGetAbout from "../dashboard/hooks/about/useGetAbout";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function AboutMe() {
  const { isLoadingAbout, dataAbout } = useGetAbout({ id: 1 });

  return (
    <>
      <section
        className={
          "flex flex-col basis-1/3 justify-center align-middle items-center"
        }
      >
        {isLoadingAbout ? (
          <Skeleton className="min-h-36 w-[200px]" />
        ) : (
          <Image
            src={`${dataAbout?.image}`}
            alt={"My Profile Photo"}
            style={{
              maxWidth: "300px",
              height: "auto",
            }}
            width={300}
            height={300}
            className={"rounded-lg mx-auto b"}
          />
        )}
      </section>
      <section
        className={
          "basis-2/3 flex flex-col items-center justify-center align-middle"
        }
      >
        <div
          className={
            "flex flex-col gap-5 max-sm:items-center max-sm:justify-center"
          }
        >
          {isLoadingAbout ? (
            <Skeleton className={"h-4 w-[100px]"} />
          ) : (
            <h1 className={"text-4xl font-semibold max-md:text-center"}>
              {`${dataAbout?.title}`}
            </h1>
          )}

          {isLoadingAbout ? (
            <Skeleton className={"h-6 w-[150px]"} />
          ) : (
            <p className={"max-md:text-center text-lg"}>
              {`${dataAbout?.profession}`}
            </p>
          )}

          {isLoadingAbout ? (
            <Skeleton className={"h-12 w-[200px]"} />
          ) : (
            <p className={"max-md:text-center"}>
              {`${dataAbout?.description}`}
            </p>
          )}

          <p
            className={
              "flex max-md:flex-row max-md:items-center max-md:justify-center"
            }
          >
            <MapPin className={"mr-3"} />
            {isLoadingAbout ? (
              <Skeleton className={"h-4 w-[100px]"} />
            ) : (
              <span>{dataAbout?.location}</span>
            )}
          </p>

          <div
            className={"flex flex-row gap-5 max-md:justify-center items-center"}
          >
            <Link
              href={`https://wa.me/${dataAbout?.handphone}`}
              target="_blank"
            >
              <Button
                className={
                  "bg-green-500 hover:bg-green-400 cursor-pointer text-white py-5 px-8 text-lg font-medium flex flex-row gap-2 hover:text-black"
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
            <Link href={`${dataAbout?.resume}`}>
              <Button
                className={
                  "bg-black cursor-pointer hover:bg-gray-700 text-white py-5 px-8 text-lg font-medium flex flex-row gap-2 "
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
          </div>
        </div>
      </section>
    </>
  );
}
