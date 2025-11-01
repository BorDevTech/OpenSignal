"use client";

import { HStack, Heading, Container } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";

export default function ProjectHeader({
  projectTitle,
}: {
  projectTitle: string;
}) {
  const { colorMode } = useColorMode();
  return (
    <Container>
      <HStack>
        <Heading size={"5xl"}>{projectTitle}</Heading>
        <ColorModeButton
          size="sm"
          variant="subtle"
          title={`switch to ${colorMode === "light" ? "dark" : "light"} mode`}
        />
      </HStack>
    </Container>
  );
}
