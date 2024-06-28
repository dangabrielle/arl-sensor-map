import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: NextRequest, response: NextApiResponse) {
  const res = await request.json();
  return NextResponse.json({ data: res });
}
