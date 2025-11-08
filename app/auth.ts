import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { signIn, signOut, handlers, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        console.log("🔍 GitHub profile:", profile); // Add this
        token.name = profile.name;
        token.email = profile.email;
        token.image = profile.avatar_url;
        token.location = profile.location; // ✅ GitHub location field
        token.hireable = profile.hireable; // ✅ GitHub hireable field
        token.repos_url = profile.repos_url; // ✅ GitHub repos_url field
        token.public_repos = profile.public_repos; // ✅ GitHub public_repos field
        token.total_private_repos = profile.total_private_repos; // ✅ GitHub total_private_repos field
        token.username = profile.login; // GitHub username
      }
      return token;
    },

    async session({ session, token }) {
      session.user.name = token.name as string;
      session.user.email = token.email as string;
      session.user.image = token.image as string;
      session.user.location = token.location as string; // ✅ Available in frontend
      session.user.hireable = token.hireable as boolean; // ✅ Available in frontend
      session.user.repos_url = token.repos_url as string; // ✅ Available in frontend
      session.user.public_repos = token.public_repos as number; // ✅ Available in frontend
      session.user.total_private_repos = token.total_private_repos as number; // ✅ Available in frontend
      session.user.username = token.username as string; // GitHub username
      return session;
    },
  },
});
