// types/next-auth.d.ts
import NextAuth from "next-auth";
import { OpenSignalProfile } from "./openSignalProfiles";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      image: string | null;
      location?: string;
      avatar_url?: string;
      githubId?: number;
      username?: string;
      hireable?: boolean;
      repos_url?: string;
      public_repos: number;
      total_private_repos: number;
      username?: string;
    };
  }

  interface JWT {
    name?: string;
    email?: string;
    image?: string | null;
    location?: string;
    avatar_url?: string;
    githubId?: number;
    username?: string;
    hireable?: boolean;
    repos_url?: string;
    public_repos: number;
    total_private_repos: number;
    username?: string;
  }
}
