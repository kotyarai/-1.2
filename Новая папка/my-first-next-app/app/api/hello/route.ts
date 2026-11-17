import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from Next.js!",
    project: "my-first-next-app",
    author: "Student",
    status: "success",
  });
}
