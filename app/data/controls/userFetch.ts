import UserCheck from "./userCheck";

export default async function UserFetch(GitHubUserID: number) {
  const userKey = `/profiles/${GitHubUserID}.json`;
  try {
    // 🔍 Check for existing blob
    await UserCheck(GitHubUserID);
    // 🔍 Pull existing blob
    const url = `${process.env.BLOB_STORE_URL}/profiles/${userKey}`;
    // const url = `https://tbvjhsvoecgza1uc.public.blob.vercel-storage.com/${blobKey}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`✅ Fetched existing user: ${userKey}`);
    return data;
  } catch (error) {
    console.log(`❌ User fetch failed: ${error}`);
    throw error;
  }
}
