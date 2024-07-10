import prisma from "../../lib/prisma";
import React from "react";
import SensorData from "./components/SensorData";

const HomePage = async () => {
  const initialSensorData = await prisma.data.findMany();
  // Converts Prisma Decimal type to Typescript number
  const formattedSensorData = initialSensorData.map((data) => ({
    ...data,
    latitude: Number(data.latitude),
    longitude: Number(data.longitude),
    temp: Number(data.temp),
  }));
  return (
    <>
      <SensorData initialSensorData={formattedSensorData} />
    </>
  );
};

export default HomePage;
