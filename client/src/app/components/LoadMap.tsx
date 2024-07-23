"use client";
import React from "react";
import { useMemo } from "react";
import nextDynamic from "next/dynamic";

type Props = {
  sensorData: SensorDataType[];
  clickedSensor: Coordinates | null;
};

type Coordinates = [latitude: number, longitude: number];

type SensorDataType = {
  nodeID: string;
  latitude: number;
  longitude: number;
  time: string;
  temp: number;
  humidity: number;
  battery: number;
  health: string;
  employeeId?: string | null;
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
