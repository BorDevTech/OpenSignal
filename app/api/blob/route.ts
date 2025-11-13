// app/api/blob/route.ts
import { BlobCreate } from "@/app/data/controls/BLOBS/BlobCreate";

export async function POST(request: Request) {
  const { blobKey } = await request.json();
  const result = await BlobCreate(blobKey);

  return result; // BlobCreate already returns NextResponse.json(...)
}
