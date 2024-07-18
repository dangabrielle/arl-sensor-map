import prisma from "../../lib/prisma";
import SensorData from "./components/SensorData";
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

const HomePage = async () => {
  const initialData = await getData();

  return (
    <>
      <SensorData initialData={initialData} clickedSensor={null} />
    </>
  );
};

export default HomePage;
