import UserFetch from "./userFetch";
import UserCheck from "./userCheck";
import { put } from "@vercel/blob";
import { auth } from "@/app/auth";

/**
 * Creates a new user in Vercel Blob storage.
 * @param GitHubUserID - The unique identifier (GitHubUserID) to create the user under.
 * @returns The created user's URL.
 */

export default async function UserCreate(GitHubUserID: number) {
  const session = await auth();
  if (!session?.user?.username || !session?.user?.email) {
    return new Response("Unauthorized", { status: 401 });
  }

  const userKey = `/profiles/${GitHubUserID}.json`;
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) throw new Error("Missing Blob token, failed to Create");
  if (!process.env.BLOB_STORE_URL)
    throw new Error("Missing Blob store URL, failed to Create");
  const existingUser = await UserCheck(GitHubUserID);

  if (!existingUser) {
    const newUser = await put(
      userKey,
      JSON.stringify(
        {
          profileCreated: new Date().toISOString(),
          GitHubUserID,
          username: session.user.username,
          email: session.user.email,
          avatar: session.user.image,
          location: session.user.location,
          count: 0,
          results: [],
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
    console.log(`✅ new ${GitHubUserID} User Successfully: ${newUser.url}`);
    return {
      created: true,
      timestamp: new Date().toISOString(),
      url: newUser.url,
      GitHubUserID,
      count: 0,
    };
  }
  console.log(`ℹ️ User already exists: ${userKey}`);
  const existingUserData = await UserFetch(GitHubUserID);
  return {
    created: false,
    timestamp: existingUserData.timestamp,
    url: `${process.env.BLOB_STORE_URL}/${userKey}`,
    GitHubUserID,
    count: existingUserData.count,
  };
}
