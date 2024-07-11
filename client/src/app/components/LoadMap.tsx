"use client";
import React from "react";
import { useMemo } from "react";
import nextDynamic from "next/dynamic";

const LoadMap = () => {
  const Map = useMemo(
    () =>
      nextDynamic(() => import("./Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
      <Map posix={[21.3087, -157.8087]} />
    </div>
  );
};

export default LoadMap;
