import { NextResponse, NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  const data = await request.json();

  return NextResponse.json({ id: uuidv4(), ...data });
}
