import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ username: string }> }
) {
  const { username } = await context.params;

  if (!username || typeof username !== "string") {
    console.log("❌ Invalid username param:", username);
    return NextResponse.json(
      { error: "Missing or invalid username" },
      { status: 400 }
    );
  }

  console.log("✅ Username received:", username);
  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = await reposRes.json();

    if (!Array.isArray(repos)) {
      console.log("❌ Unexpected repos response:", repos);
      return NextResponse.json(
        { error: "User not found or no public repos" },
        { status: 404 }
      );
    }

    const languageCounts: Record<string, number> = {};

    for (const repo of repos) {
      const langRes = await fetch(repo.languages_url);
      const langs = await langRes.json();

      for (const [lang, bytes] of Object.entries(langs)) {
        languageCounts[lang] = (languageCounts[lang] || 0) + (bytes as number);
      }
    }

    const sorted = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([language, bytes]) => ({ language, bytes }));

    return NextResponse.json({ username, languages: sorted });
  } catch (error) {
    console.error("🔥 GitHub fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
