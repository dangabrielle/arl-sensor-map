import React from "react";
import Particles from "../components/Particles";
import GradualSpacing from "../components/GradualSpacingText";
const page = () => {
  return (
    <>
      <div className="flex flex-col z-50 items-center  h-full w-full">
        <div className="m-10">
          <GradualSpacing
            text="Project Summary"
            duration={0.6}
            delayMultiple={0.05}
            className="text-center text-4xl font-bold tracking-[-0.1em] text-slate-200 md:text-6xl md:leading-[5rem]"
          />
        </div>
        <div className="bg-slate-200">
          <h1>Hello</h1>
        </div>
      </div>
      <Particles className="h-full w-full absolute z-0" />
    </>
  );
};

export default page;
