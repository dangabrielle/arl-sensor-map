import prisma from "../../lib/prisma";
import Data from "../app/components/Data";

async function getData() {
  const data = await prisma.data.findMany({
    where: { nodeID: "node 1" },
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
