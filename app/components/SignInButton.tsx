"use client";

import { Button } from "@chakra-ui/react";
import { loginWithGitHub } from "@/app/lib/actions/auth";
export default function SignInButton() {
  return <Button onClick={loginWithGitHub}>Sign In</Button>;
}
