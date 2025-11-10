"use server";

import ProjectHeader from "./(Components)/Header";
import ProjectFooter from "./(Components)/Footer";
import { Card, AbsoluteCenter, Container, Avatar } from "@chakra-ui/react";
import { auth } from "./auth";
import SignInButton from "./(Components)/SignInButton";
import SignOutButton from "./(Components)/SignOutButton";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <>
        <Container h={"80vh"} bg={"blue.100"}>
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
        </Container>
        <ProjectFooter />
      </>
    );
  }
  return (
    <>
      <Container h={"80vh"} bg={"blue.100"}>
        <AbsoluteCenter>
          <Card.Root>
            <Card.Header alignItems={"center"}>
              <Card.Title>You Are Not Signed In</Card.Title>
              <Card.Description>
                This application requires you to be signed in to access its
                features.
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <SignInButton />
            </Card.Body>
          </Card.Root>
        </AbsoluteCenter>
      </Container>
      <ProjectFooter />
    </>
  );
}
