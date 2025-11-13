import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function BlobCreate(blobKey: string) {
  const url = process.env.BLOB_STORE_URL;
  const path = `/users/`;
  const filename = `${path + blobKey}.json`;
  console.log(`BlobCreate called for blobKey: ${filename}`);

  const token = process.env.BLOB_READ_WRITE_TOKEN;

  // ⚠️ The below code is for App Router Route Handlers only

  if (blobKey !== "") {
    const blob = await put(
      filename,
      JSON.stringify(
        {
          users: {
            totalUsers: 0,
            RegisteredUsers: 0,
          },
        },
        null,
        2
      ),
      {
        access: "public",
        contentType: "application/json",
        token,
      }
    );
    console.log(
      `✅ New blob for OpenSignal labeled as ${blobKey}, Successfully created at ${blob.url}`
    );
    return NextResponse.json({
      created: true,
      timestamp: new Date().toISOString(),
      url: blob.url,
      count: 0,
    });
  }

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // });
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
