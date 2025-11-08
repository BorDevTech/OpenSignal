import { signIn, signOut } from "next-auth/react";

export const loginWithGitHub = async () => {
  try {
    await signIn("github", { callbackUrl: "/home" });
  } catch (error) {
    console.error("Error during GitHub sign-in:", error);
  }
};

export const logout = async () => {
  try {
    await signOut({ callbackUrl: "/" });
  } catch (error) {
    console.error("Error during sign-out:", error);
  }
};
