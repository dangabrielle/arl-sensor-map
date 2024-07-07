import prisma from "../../../lib/prisma";
import Data from "./Data";
import sensorData from "../../../../sensor-data.json";

async function getData() {
  const data = await prisma.data.findMany({
    where: { nodeID: sensorData.nodeID },
  });
  return data;
}

export default async function Collections() {
  const data = await getData();
  return (
    <>
      {data.map((entry) => {
        return (
          <Data
            key={entry.nodeID}
            nodeID={entry.nodeID}
            latitude={entry.latitude}
            longitude={entry.longitude}
          />
        );
      })}
    </>
  );
}
