"use client";
import { Button } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

import { LuX, LuCheck } from "react-icons/lu";
export default function ApproveFetch() {
  const { data: session } = useSession();

  async function handleApprove() {
    if (!session?.user?.username) return;

    try {
      const res = await fetch(
        `/api/auth/opensignal/users/${session.user.username}/languages`
      );
      const data = await res.json();

      console.log("🔍 GitHub languages:", data.languages);
      // You can now use this data however you want — show a modal, update state, etc.
    } catch (err) {
      console.error("Failed to fetch languages:", err);
    }
  }
  return (
    <Button
      variant="subtle"
      colorPalette="blue"
      flex="1"
      onClick={handleApprove}
    >
      <LuCheck />
      Approve
    </Button>
  );
}
