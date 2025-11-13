import { put } from "@vercel/blob";

export default async function UserRegister() {
  const filename = `/users/totalUsers.json`; // ✅ keep the exact file name
  const token = process.env.BLOB_READ_WRITE_TOKEN!;

  try {
    // 1. Fetch existing blob contents
    const url = `${process.env.BLOB_STORE_URL}${filename}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch user count: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("✅ Current registered users:", data.users.RegisteredUsers);

    // 2. Increment the count
    const updated = {
      users: {
        totalUsers: data.users.totalUsers,
        RegisteredUsers: data.users.RegisteredUsers + 1,
      },
    };

    // 3. Write back to the same file (no renaming)
    const blob = await put(filename, JSON.stringify(updated, null, 2), {
      access: "public",
      contentType: "application/json",
      token,
    });

    console.log(
      `✅ Updated registered user count to ${updated.users.RegisteredUsers}, blob at ${blob.url}`
    );

    return updated;
  } catch (error) {
    console.error("❌ Failed to update registered user count:", error);
    throw error;
  }
}
