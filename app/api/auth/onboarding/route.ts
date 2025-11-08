// import { auth } from "@/auth"; // your centralized auth helper
// import { NextResponse } from "next/server";
// import { put } from "@vercel/blob";

// export async function POST(req: Request): Promise<NextResponse> {
//   const session = await auth();
//   if (!session?.user?.username || !session?.user?.githubId) {
//     return new Response("Unauthorized", { status: 401 });
//   }

//   const githubUsername = session.user.username;
//   const githubId = session.user.githubId;

//   // Fetch repos, analyze languages, build profile
//   // Store in blob or commit to GitHub

//   return new Response("Onboarding complete", { status: 200 });

//   const { searchParams } = new URL(request.url);
//   const filename = searchParams.get("filename");

//   // ⚠️ The below code is for App Router Route Handlers only
//   const blob = await put(filename, request.body, {
//     access: "public",
//   });

//   // Here's the code for Pages API Routes:
//   // const blob = await put(filename, request, {
//   //   access: 'public',
//   // });

//   // The next lines are required for Pages API Routes only
//   // export const config = {
//   //   api: {
//   //     bodyParser: false,
//   //   },
//   // };

//   const blobKey = `${region}Vets.json`;
//   const token = process.env.BLOB_READ_WRITE_TOKEN;
//   if (!token) throw new Error("Missing Blob token, failed to Create");
//   if (!process.env.BLOB_STORE_URL)
//     throw new Error("Missing Blob store URL, failed to Create");
//   const existingBlob = await BlobCheck(region);

//   if (!existingBlob) {
//     const newBlob = await put(
//       blobKey,
//       JSON.stringify(
//         {
//           timestamp: new Date().toISOString(),
//           region,
//           count: 0,
//           results: [],
//         },
//         null,
//         2
//       ),
//       {
//         access: "public",
//         contentType: "application/json",
//         token,
//       }
//     );
//     console.log(`✅ new ${region} Blob Successfully: ${newBlob.url}`);
//     return {
//       created: true,
//       timestamp: new Date().toISOString(),
//       url: newBlob.url,
//       region,
//       languages: 0,
//     };
//   }
//   console.log(`ℹ️ Blob already exists: ${blobKey}`);
//   const existingBlobData = await BlobFetch(region);
//   return {
//     created: false,
//     timestamp: existingBlobData.timestamp,
//     url: `${process.env.BLOB_STORE_URL}/${blobKey}`,
//     region,
//     count: existingBlobData.count,
//   };
// }
