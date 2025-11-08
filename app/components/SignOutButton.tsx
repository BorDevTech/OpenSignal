"use client";

import { Button } from "@chakra-ui/react";
import {   logout } from "@/app/lib/actions/auth";
export default function SignOutButton() {
  return <Button onClick={logout}>Sign Out</Button>;
}
