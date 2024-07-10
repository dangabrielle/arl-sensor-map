import prisma from "../../lib/prisma";
import React from "react";
import SensorData from "./components/SensorData";

// render routes dynamically at request time
export const dynamic = "force-dynamic";

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

// async function getData() {
//   try {
//     const response = await fetch("/api");
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//   }
// }

const HomePage = async () => {
  const initialData = await getData();
  return (
    <>
      <SensorData initialData={initialData} />
    </>
  );
};

export default HomePage;
