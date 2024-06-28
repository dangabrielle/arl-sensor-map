import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const { nodeID, latitude, longitude, time, temp, humidity, battery, health } =
    res;
  console.log({ res });

  const result = await prisma.data.create({
    data: {
      nodeID,
      latitude,
      longitude,
      time,
      temp,
      humidity,
      battery,
      health,
    },
  });
  return NextResponse.json({ result });
}
