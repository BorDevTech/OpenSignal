"use server";

import ProjectFooter from "./(Components)/Footer";
import { Card, AbsoluteCenter, Container, Avatar } from "@chakra-ui/react";
import { auth } from "./auth";
import SignInButton from "./(Components)/SignInButton";
import SignOutButton from "./(Components)/SignOutButton";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <Container h={"80vh"} bg={"blue.100"} position={"relative"}>
        <AbsoluteCenter>
          <Card.Root>
            <Card.Header alignItems={"center"}>
              <Card.Title>Welcome back, {session.user.name}!</Card.Title>
            </Card.Header>
            <Card.Body>
              {session.user.avatar_url && (
                <>
                  <Avatar.Root>
                    <Avatar.Image
                      src={session.user.avatar_url}
                      alt={session.user.name || "User Avatar"}
                    />
                    <Avatar.Fallback>
                      {session.user?.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar.Root>
                  BIO:{session.user?.email}
                </>
              )}
              <SignOutButton />
            </Card.Body>
          </Card.Root>
        </AbsoluteCenter>
        <ProjectFooter />
      </Container>
    );
  }
  return (
    <Container h={"80vh"} bg={"blue.100"} maxW={"xl"} position={"relative"}>
      <AbsoluteCenter>
        <Card.Root size={"lg"}>
          <Card.Header alignItems={"center"}>
            <Card.Title>Your code is your credential</Card.Title>
            <Card.Description>
              Join 1,000+ developers proving that impact beats pedigree. Every
              commit counts. Every contributor matters. Every profile becomes
              proof.
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <SignInButton />
          </Card.Body>
        </Card.Root>
      </AbsoluteCenter>
      <ProjectFooter />
    </Container>
  );
}
