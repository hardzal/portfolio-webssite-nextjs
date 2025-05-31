import React from "react";
import "@/styles/home.css";

import Image from "next/image";
import { Marquee } from "@devnomic/marquee";
import "@/styles/marquee.css";
import useGetStack from "../dashboard/hooks/technologies/useGetStack";
import { Skeleton } from "@/components/ui/skeleton";

export default function TechStack() {
  const { dataTechnology, isLoadingTechnologies } = useGetStack();

  return (
    <>
      <h2 className={"text-3xl mt-5 mb-15 font-semibold"}>
        Tech Stack - Tools I use everyday
      </h2>
      <Marquee
        fade={true}
        reverse={true}
        pauseOnHover={true}
        className="motion-reduce:overflow-auto gap-[5rem] [--duration:15s] overflow-x-hidden"
        innerClassName="motion-reduce:animate-none motion-reduce:first:hidden gap-[5rem] [--gap:5rem]"
      >
        {isLoadingTechnologies ? (
          <Skeleton className={"h-16 w-[64px]"} />
        ) : (
          dataTechnology?.map((item) => (
            <>
              <div
                className={
                  "flex flex-col items-center justify-center align-middle"
                }
                key={item.image + item.id}
              >
                <Image
                  src={`${item.image}`}
                  alt={"javascript"}
                  width={64}
                  height={64}
                  className={
                    "object-contain bg-gray-200 dark:bg-gray-600 rounded-lg p-3"
                  }
                />
                <span>{item.name}</span>
              </div>
            </>
          ))
        )}
      </Marquee>
      {/* <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        spaceBetween={1}
        slidesPerView={5}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          waitForTransition: true,
          reverseDirection: true,
        }}
        speed={5000}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onAutoplay={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        effect="fade"
      >
        <SwiperSlide
          className={"flex flex-col items-center justify-center align-middle"}
        >
          <div className="skill-icon mb-3 ">
            <Image
              src={"/skills/javascript.png"}
              alt={"javascript"}
              width={64}
              height={64}
              className={"object-contain dark:bg-gray-600 rounded-lg p-3"}
            />
          </div>
          <span>Javascript</span>
        </SwiperSlide>
        <SwiperSlide className={"flex flex-col items-center justify-center"}>
          <div className="skill-icon mb-3">
            <Image
              src={"/skills/typescript.png"}
              alt={"Typescript"}
              width={64}
              height={64}
              className={"object-contain dark:bg-gray-600 rounded-lg p-3"}
            />
          </div>
          <span>Typescript</span>
        </SwiperSlide>
        <SwiperSlide className={"flex flex-col items-center justify-center"}>
          <div className="skill-icon mb-3">
            <Image
              src={"/skills/express.png"}
              alt={"express"}
              width={64}
              height={64}
              className={"object-contain dark:bg-gray-600 rounded-lg p-3"}
            />
          </div>
          <span>Express</span>
        </SwiperSlide>
        <SwiperSlide className={"flex flex-col items-center justify-center"}>
          <div className="skill-icon mb-3">
            <Image
              src={"/skills/golang.png"}
              alt={"golang"}
              width={64}
              height={64}
              className={"object-contain dark:bg-gray-600 rounded-lg p-3"}
            />
          </div>
          <span>Golang</span>
        </SwiperSlide>
        <SwiperSlide className={"flex flex-col items-center justify-center"}>
          <div className="skill-icon mb-3">
            <Image
              src={"/skills/postgresql.png"}
              alt={"postgresql"}
              width={64}
              height={64}
              className={"object-contain dark:bg-gray-600 rounded-lg p-3"}
            />
          </div>
          <span>Postgresql</span>
        </SwiperSlide>
        <SwiperSlide className={"flex flex-col items-center justify-center"}>
          <div className="skill-icon mb-3">
            <Image
              src={"/skills/laravel.png"}
              alt={"laravel"}
              width={64}
              height={64}
              className={"object-contain dark:bg-gray-600 rounded-lg p-3"}
            />
          </div>
          <span>Laravel</span>
        </SwiperSlide>
        <SwiperSlide className={"flex flex-col items-center justify-center"}>
          <div className="skill-icon mb-3">
            <Image
              src={"/skills/python.png"}
              alt={"python"}
              width={64}
              height={64}
              className={"object-contain dark:bg-gray-600 rounded-lg p-3"}
            />
            <span>Python</span>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}
