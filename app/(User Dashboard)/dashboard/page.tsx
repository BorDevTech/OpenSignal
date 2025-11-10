"use client";

import { auth } from "@/app/auth";
import ProjectHeader from "@/app/(Components)/Header";
import SignInButton from "@/app/(Components)/SignInButton";
import SignOutButton from "@/app/(Components)/SignOutButton";
import {
  Container,
  Card,
  AbsoluteCenter,
  Avatar,
  Button,
  DataList,
  HStack,
  Stack,
  Strong,
  Text,
} from "@chakra-ui/react";
import { LuX, LuCheck } from "react-icons/lu";
import ApproveFetch from "@/app/(Components)/ApproveFetch";

export default async function Home() {
  const session = await auth();
  const total_repos = session
    ? session.user?.public_repos + session.user?.total_private_repos
    : 0;

  const items = [
    {
      label: "Hireable",
      value: session?.user?.hireable
        ? "Available for hire"
        : "Not available for hire",
    },
    { label: "Location", value: session?.user?.location },
    { label: "Total Repos", value: total_repos.toString() },
    { label: "Phone", value: "1234567890" },
    { label: "Address", value: "1234 Main St, Anytown, USA" },
  ];

  return (
    <Stack>
      <ProjectHeader projectTitle="OpenSignal" />
      <Container maxW="container.md" py={8}>
        <Card.Root position="relative" p={8} mt={8}>
          {session ? (
            <>
              <Card.Root width="320px">
                <Card.Body>
                  <HStack mb="6" gap="3">
                    <Avatar.Root>
                      <Avatar.Image
                        src={session.user?.image || undefined}
                        alt={session.user?.username || "User Avatar"}
                      />
                      <Avatar.Fallback
                        name={session.user?.name || session.user?.username}
                      />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontWeight="semibold" textStyle="sm">
                        {session.user?.name}
                      </Text>
                      <Text color="fg.muted" textStyle="sm">
                        @{session.user?.username}
                      </Text>
                    </Stack>
                  </HStack>
                  <Card.Description asChild>
                    <DataList.Root
                      orientation="horizontal"
                      divideY="1px"
                      maxW="md"
                    >
                      {items.map((item) => (
                        <DataList.Item key={item.label} pt="4">
                          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
                          <DataList.ItemValue>{item.value}</DataList.ItemValue>
                        </DataList.Item>
                      ))}
                    </DataList.Root>
                  </Card.Description>
                </Card.Body>
                <Card.Footer>
                  <Button variant="subtle" colorPalette="red" flex="1">
                    <LuX />
                    Decline
                  </Button>
                  <ApproveFetch />
                </Card.Footer>
              </Card.Root>

              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </Card.Root>
      </Container>
    </Stack>
  );
}
