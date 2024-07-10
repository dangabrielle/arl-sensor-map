import prisma from "../../lib/prisma";
import React from "react";
import SensorData from "./components/SensorData";

async function getData() {
  const initialSensorData = await prisma.data.findMany();
  // Converts Prisma Decimal type to Typescript number
  const formattedSensorData = initialSensorData.map((data) => ({
    ...data,
    latitude: Number(data.latitude),
    longitude: Number(data.longitude),
    temp: Number(data.temp),
  }));
  return formattedSensorData;
}

const HomePage = async () => {
  const initialData = await getData();
  return (
    <>
      <SensorData initialData={initialData} />
    </>
  );
};

export default HomePage;
