import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";

export default function AboutMe() {
  return (
    <>
      <main className={"flex flex-row gap-5"}>
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
            <h1 className={"text-4xl font-semibold"}>Hi, 私 Rizal</h1>
            <p className={""}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto officiis ipsam autem eaque, nostrum natus dolorem assumenda
              facere ad nisi numquam illum aperiam alias sunt ipsa!
              Reprehenderit, perspiciatis consequatur? Cupiditate minus dolorem,
              necessitatibus sapiente incidunt perferendis. Impedit accusamus,
              ea saepe, quaerat adipisci iusto repellendus consectetur suscipit
              aperiam provident repellat vel dicta explicabo, eveniet animi
              voluptatum. Sunt deserunt debitis ipsum.
            </p>

            <p className={"flex"}>
              <MapPin className={"mr-3"} />
              <span>Depok, Sawangan, Indonesia</span>
            </p>

            <div className={"flex flex-row gap-5"}>
              <Button
                className={
                  "bg-green-500 cursor-pointer text-white py-5 px-8 text-lg font-medium flex flex-row gap-2"
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
                  "bg-black cursor-pointer text-white py-5 px-8 text-lg font-medium flex flex-row gap-2"
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
      </main>
    </>
  );
}
