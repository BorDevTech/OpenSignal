import { list } from "@vercel/blob";

/**
 * Checks if a blob exists in Vercel Blob storage.
 * @param GitHubUserID - The unique identifier (GitHubUserID) for the blob to check.
 * @returns True if the blob exists, false otherwise.
 */

export default async function UserCheck(key: number) {
  const GitHubUserID = `/profiles/${key}.json`;
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  // if (!token) throw new Error("Missing Blob token, failed to Check");

  try {
    const historicUsers = await list({ token: token });
    // console.log("🔍 Historic Users:", historicUsers);
    return historicUsers.blobs.some((blob) => blob.pathname === GitHubUserID);
  } catch (error) {
    console.warn(`⚠️ Failed to list blobs for ${GitHubUserID}:`, error);
    return false;
  }
}
