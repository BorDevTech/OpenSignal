"use client";

import {
  HStack,
  Heading,
  Container,
  useBreakpointValue,
  Link as ChakraLink,
  Dialog,
  Button,
  Portal,
  Center,
  VStack,
  Text,
  Separator,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import NextLink from "next/link";

import { usePathname } from "next/navigation";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ProjectInfo() {
  const ProjectInfo = {
    title: "OpenSignal",
    navLinks: [
      { name: "About", path: "/" },
      { name: "Dashboard", path: "/dashboard" },
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
  const { toggleColorMode, colorMode } = useColorMode();

  const { title, navLinks } = ProjectInfo;

  const pathname = usePathname();

  return (
    <HStack
      h={"10vh"}
      w={"100vw"}
      position={"fixed"}
      zIndex={1}
      _dark={{ bg: "black" }}
      _light={{ bg: "white" }}
      justifyContent={"space-between"}
      id={"nav"}
      px={current === "base" || current === "sm" ? "2vh" : "2.5vh"}
    >
      <HStack alignItems={"center"} h={"100%"}>
        <Heading size={current === "base" || current === "sm" ? "2xl" : "5xl"}>{title}</Heading>
      </HStack>
      <HStack>
        {current !== "base" && current !== "sm" ? (
          <HStack>
            {navLinks.map((link, index) => (
              <ChakraLink key={index} href={link.path}>
                {link.name}
              </ChakraLink>
            ))}
            <ColorModeButton
              size="sm"
              variant="subtle"
              title={`switch to ${
                colorMode === "light" ? "dark" : "light"
              } mode`}
            />
          </HStack>
        ) : null}
        {current === "base" || current === "sm" ? (
          <Dialog.Root size="full" motionPreset="scale">
            <Dialog.Trigger asChild>
              <Button
                variant="solid"
                size="xs"
                borderRadius={"base"}
                mx={"2vh"}
              >
                Menu
              </Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content
                  color={colorMode === "light" ? "black" : "white"}
                >
                  <Dialog.Header asChild>
                    <Center>
                      <Dialog.Title>Menu</Dialog.Title>
                    </Center>
                  </Dialog.Header>
                  <Dialog.Body>
                    <VStack>
                      {navLinks.map((link, index) => (
                        <ChakraLink
                          key={index}
                          href={link.path}
                          asChild
                          aria-current={
                            link.path === pathname ? "page" : undefined
                          }
                          focusRing={"none"}
                        >
                          <NextLink href={link.path}>
                            <Text>{link.name}</Text>
                          </NextLink>
                        </ChakraLink>
                      ))}

                      <Separator />
                      <Text fontSize={"sm"}>
                        {colorMode.charAt(0).toUpperCase() + colorMode.slice(1)}{" "}
                        Mode:
                        <IconButton
                          onClick={toggleColorMode}
                          variant="outline"
                          size="sm"
                        >
                          {colorMode === "light" ? <LuSun /> : <LuMoon />}
                        </IconButton>
                      </Text>
                    </VStack>
                  </Dialog.Body>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" variant="solid" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        ) : null}
      </HStack>
    </HStack>
  );
}
