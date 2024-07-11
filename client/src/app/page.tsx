// "use client";
import prisma from "../../lib/prisma";
// import { useMemo } from "react";
import SensorData from "./components/SensorData";
// import nextDynamic from "next/dynamic";
import Map from "./components/Map";
import LoadMap from "./components/LoadMap";
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
// function mapper() {
//   const map = useMemo(
//     () =>
//       nextDynamic(() => import("./components/Map"), {
//         loading: () => <p>A map is loading</p>,
//         ssr: false,
//       }),
//     []
//   );
//   return map;
// }
const HomePage = async () => {
  const initialData = await getData();
  // mapper();
  return (
    <>
      <SensorData initialData={initialData} />
      <LoadMap />
    </>
  );
};

export default HomePage;
