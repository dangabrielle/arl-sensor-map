import React from "react";
import prisma from "../../lib/prisma";
import Data from "./components/Data";
import Link from "next/link";

async function getData() {
  const data = await prisma.data.findMany({
    where: { nodeID: "node 1" },
  });
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <h1>Feed</h1>
      <Link href={"/add-location"}>Add Location</Link>
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
