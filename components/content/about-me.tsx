import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";

export default function AboutMe() {
  return (
    <>
      <section
        className={
          "flex flex-col basis-1/3 justify-center align-middle items-center"
        }
      >
        <Image
          src={`/photos/example.jpg`}
          alt={"My Profile Photo"}
          width={300}
          height={300}
          className={"rounded-lg mx-auto b"}
        />
      </section>
      <section
        className={
          "basis-2/3 flex flex-col items-center justify-center align-middle"
        }
      >
        <div className={"flex flex-col gap-5"}>
          <h1 className={"text-4xl font-semibold max-md:text-center"}>
            {"Hi, I'm Rizal"}
          </h1>
          <p className={"max-md:text-center text-lg"}>
            Fullstack Developer & AI Enthusiast
          </p>
          <p className={"max-md:text-center"}>
            I am a Fullstack Developer with a passion for creating web
            applications. I have experience in both frontend and backend
            development, and I enjoy working with modern technologies to build
            efficient and user-friendly applications.
          </p>

          <p
            className={
              "flex max-md:flex-row max-md:items-center max-md:justify-center"
            }
          >
            <MapPin className={"mr-3"} />
            <span>Depok, Sawangan, Indonesia</span>
          </p>

          <div
            className={"flex flex-row gap-5 max-md:justify-center items-center"}
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
          </div>
        </div>
      </section>
    </>
  );
}
