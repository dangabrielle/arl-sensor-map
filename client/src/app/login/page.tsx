import React from "react";
import Globe from "../components/Globe";
import Particles from "../components/Particles";
import Image from "next/image";
const page = () => {
  return (
    <>
      <Particles className="absolute z-0 w-full h-full" />
      <div className="flex flex-col items-center justify-center relative h-full w-full">
        <Globe className="z-50 relative -mb-10 -mt-20" />
        <div className="relative justify-center text-center ">
          <div className="flex items-center ">
            <Image
              src="https://www.soest.hawaii.edu/cimar/wp-content/uploads/2019/07/university-of-hawaii-manoa-300x300.png"
              alt="UH Logo"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-full max-w-24 min-w-10   shadow-gray-700 shadow-md"
            />
            <h1 className="relative text-white z-50 bg-green-800 p-2 pr-3 pl-3 bg-opacity-70 shadow-gray-700 shadow-md  ml-2 text-center rounded-md">
              <b>APPLIED RESEARCH LABORATORY</b> <br /> University of
              Hawai&apos;i
            </h1>
          </div>
          <h1 className="relative text-stone-800 p-2 bg-opacity-70 mt-2 text-center">
            <em>COMMON OPERATING PICTURE PROTOTYPE</em>
          </h1>
          <div className="relative hover:scale-105 active:scale-110 text-white z-50 bg-gray-400  shadow-gray-700 shadow-md hover:bg-slate-500 bg-opacity-70 rounded-md p-2">
            <a href="/api/auth/login">Login or Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
