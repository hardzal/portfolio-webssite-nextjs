import React from "react";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "@/styles/home.css";
import Image from "next/image";

export default function TechStack() {
  return (
    <>
      <h2 className={"text-3xl mt-5 mb-10 font-semibold"}>
        Tech Stack - Tools I use everyday
      </h2>
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        spaceBetween={5}
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
              className={"object-contain"}
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
            />
            <span>Python</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
