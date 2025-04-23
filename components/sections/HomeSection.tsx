"use client";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

import { A11y, Autoplay } from "swiper/modules";

export default function HomeSection() {
  return (
    <>
      <main className={"flex flex-row gap-5"}>
        <section className={"basis-1/3 justify-center align-middle"}>
          <Image
            src={`/photos/example.png`}
            alt={"My Profile Photo"}
            width={500}
            height={500}
            className={"rounded-lg"}
          />
        </section>
        <section className={"basis-2/3"}>
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
          </div>
        </section>
      </main>
      <div>
        <h2 className={"text-3xl my-5 font-semibold"}>
          Tech Stack - Tools I use everyday
        </h2>
        <Swiper
          // install Swiper modules
          modules={[A11y, Autoplay]}
          spaceBetween={5}
          slidesPerView={5}
          autoplay={{ delay: 3000 }}
          speed={800}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          effect="fade"
        >
          <SwiperSlide>
            <div className="skill-icon mb-3">
              <Image
                src={"/skills/javascript.png"}
                alt={"javascript"}
                width={64}
                height={64}
              />
            </div>
            <span>Javascript</span>
          </SwiperSlide>
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
      </div>
    </>
  );
}
