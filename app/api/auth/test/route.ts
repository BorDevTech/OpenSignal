import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import UserCreate from "@/app/data/controls/userCreate";
import { auth } from "@/app/auth";

export async function POST(request: Request): Promise<NextResponse> {
  const session = await auth();
  const githubId = session?.user?.githubId;
  if (typeof githubId !== "number") {
    return new NextResponse("Missing GitHub ID", { status: 400 });
  }
  await UserCreate(githubId);

  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename") ?? `upload-${Date.now()}.bin`;

  // ⚠️ The below code is for App Router Route Handlers only
  const blob = await put(filename, request.body, {
    access: "public",
  });

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // });

  return NextResponse.json(blob);
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
