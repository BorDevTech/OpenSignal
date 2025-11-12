"use client";

import { Button } from "@chakra-ui/react";
import { loginWithGitHub } from "@/app/lib/actions/auth";
import { Themer } from "./Themer";

export default function SignInButton() {
  return (
    <Button onClick={loginWithGitHub} bg={Themer("blue")}>
      Sign In
    </Button>
  );
}
