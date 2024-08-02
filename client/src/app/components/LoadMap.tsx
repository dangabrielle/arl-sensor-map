"use client";
import React from "react";
import { useMemo } from "react";
import nextDynamic from "next/dynamic";
import { SensorDataType, Coordinates } from "../../../types";

type Props = {
  sensorData: SensorDataType[];
  clickedSensor: Coordinates | null;
};

const LoadMap = ({ sensorData, clickedSensor }: Props) => {
  const Map = useMemo(
    () =>
      nextDynamic(() => import("./Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div>
      <Map sensorData={sensorData} clickedSensor={clickedSensor} />
    </div>
  );
};

export default LoadMap;
