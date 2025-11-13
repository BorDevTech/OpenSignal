"use client";

import { Button } from "@chakra-ui/react";

export default function RegisterButton() {
  const handleClick = async (path: string) => {
    const res = await fetch("/api/blob", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blobKey: `${path}` }),
    });
    const data = await res.json();
    console.log("Blob created:", data);
  };

  return (
    <Button onClick={() => handleClick("totalUsers")}>Create Register</Button>
  );
}
