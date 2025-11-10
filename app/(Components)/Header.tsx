"use client";

import {
  HStack,
  Heading,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";

export default function ProjectInfo() {
  const ProjectInfo = {
    title: "OpenSignal",
    navLinks: [
      { name: "login", href: "/" },
      { name: "Dashboard", href: "/dashboard" },
    ],
  };
  const current = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });
  const Title = "OpenSignal";
  const { colorMode } = useColorMode();

  return (
    <Container
      h={"10vh"}
      position={"fixed"}
      zIndex={1}
      _dark={{ bg: "black" }}
      _light={{ bg: "white" }}
    >
      <HStack alignItems={"center"} justifyContent={"space-between"} h={"100%"}>
        <Heading size={"5xl"}>{Title}</Heading>

        <ColorModeButton
          size="sm"
          variant="subtle"
          title={`switch to ${colorMode === "light" ? "dark" : "light"} mode`}
        />
      </HStack>
    </Container>
  );
}
