import Image from "next/image";
import React from "react";

export default function WorkExperience() {
  return (
    <>
      <h2 className={"font-semibold text-3xl my-5"}>Work Experience</h2>
      <div
        className={
          "flex flex-row item-start gap-8 border-b-2 py-5 items-center justify-center"
        }
      >
        <div className={"flex flex-col py-3"}>
          <Image
            src={"/skills/javascript.png"}
            alt={"javascript icon"}
            width={100}
            height={100}
            className={"object-contain"}
          />
        </div>
        <div className={"flex flex-grow my-5"}>
          <div className={"basis-4/5"}>
            <h3 className={"text-xl font-semibold"}>Fullstack developer</h3>
            <span className={"text-green-600"}>Javascript.info</span>
            <ul className={"list-skill list-disc mt-5"}>
              <li>Develop and maintain javascript code</li>
              <li>Develop and maintain javascript code</li>
              <li>Develop and maintain javascript code</li>
              <li>Develop and maintain javascript code</li>
            </ul>
            <div className={"flex flex-row gap-3 mt-3"}>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Reactjs
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Nodejs
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Expressjs
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Postgresql
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Tailwind
              </span>
            </div>
          </div>
          <div className={"basis-1/5"}>
            <p>Oct 2022 - Mar 2023</p>
          </div>
        </div>
      </div>
      <div className={"flex flex-row items-start gap-8 border-b-2 py-5"}>
        <div className={"flex flex-col py-3  items-center justify-center"}>
          <Image
            src={"/skills/golang.png"}
            alt={"javascript icon"}
            width={100}
            height={100}
            className={"object-contain"}
          />
        </div>
        <div className={"flex flex-grow my-5"}>
          <div className={"basis-4/5"}>
            <h3 className={"text-xl font-semibold"}>Fullstack developer</h3>
            <span className={"text-green-600"}>Javascript.info</span>
            <ul className={"list-skill list-disc mt-5"}>
              <li>Develop and maintain javascript code</li>
              <li>Develop and maintain javascript code</li>
              <li>Develop and maintain javascript code</li>
              <li>Develop and maintain javascript code</li>
            </ul>
            <div className={"flex flex-row gap-3 mt-3"}>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Reactjs
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Nodejs
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Expressjs
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Postgresql
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Tailwind
              </span>
            </div>
          </div>
          <div className={"basis-1/5"}>
            <p>Oct 2022 - Mar 2023</p>
          </div>
        </div>
      </div>
      <div className={"flex flex-row item-start gap-8 border-b-2 py-5"}>
        <div className={"flex flex-col py-3 items-center justify-center"}>
          <Image
            src={"/skills/laravel.png"}
            alt={"javascript icon"}
            width={100}
            height={100}
            className={"object-contain"}
          />
        </div>
        <div className={"flex flex-grow my-5"}>
          <div className={"basis-4/5"}>
            <h3 className={"text-xl font-semibold"}>Fullstack developer</h3>
            <span className={"text-green-600"}>Javascript.info</span>
            <ul className={"list-skill list-disc mt-5"}>
              <li>Develop and maintain javascript code</li>
              <li>Develop and maintain javascript code</li>
              <li>Develop and maintain javascript code</li>
              <li>Develop and maintain javascript code</li>
            </ul>
            <div className={"flex flex-row gap-3 mt-3"}>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Reactjs
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Nodejs
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Expressjs
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Postgresql
              </span>
              <span className={"bg-gray-100 p-2 text-xs rounded-2xl"}>
                Tailwind
              </span>
            </div>
          </div>
          <div className={"basis-1/5"}>
            <p>Oct 2022 - Mar 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}
