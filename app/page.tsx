"use server";

import ProjectFooter from "./(Components)/Footer";
import { Card, AbsoluteCenter, Container, Avatar } from "@chakra-ui/react";
import { auth } from "./auth";
import SignInButton from "./(Components)/SignInButton";
import SignOutButton from "./(Components)/SignOutButton";
import RegisterButton from "./(Components)/RegisterButton";
// Example user count

//https:github.com/settings/applications/3229937/oauth_authorizations
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
              <SignOutButton />
            </Card.Body>
          </Card.Root>
        </AbsoluteCenter>
        <ProjectFooter />
      </Container>
    );
  }
  return (
    <Container h={"80vh"} bg={"blue.100"} maxW={"5xl"} position={"relative"}>
      <AbsoluteCenter>
        <Card.Root size={"lg"}>
          <Card.Header alignItems={"center"}>
            <Card.Title textStyle={"5xl"} textAlign={"center"}>
              Your code is your credential
            </Card.Title>
            <Card.Description textStyle={"xl"} textAlign={"center"}>
              Join {`RegisteredOpenSignalUsers`}+ developers on OpenSignal prove
              that impact beats pedigree. Every commit counts. Every contributor
              matters. Every profile becomes proof.
            </Card.Description>
          </Card.Header>
          <Card.Body>
            {/* <RegisterButton /> */}
            <SignInButton />
          </Card.Body>
        </Card.Root>
      </AbsoluteCenter>
      <ProjectFooter />
    </Container>
  );
}
