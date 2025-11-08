import { auth } from "@/app/auth";
import ProjectFooter from "@/app/components/Footer";
import ProjectHeader from "@/app/components/Header";
import SignInButton from "@/app/components/SignInButton";
import SignOutButton from "@/app/components/SignOutButton";
import { Container, Card, AbsoluteCenter, Avatar } from "@chakra-ui/react";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <ProjectHeader projectTitle="OpenSignal" />
      <Container maxW="container.md" py={8}>
        <Card.Root position="relative" p={8} mt={8}>
          <AbsoluteCenter top="10%">
            {session ? (
              <>
                <Avatar.Root>
                  <Avatar.Image
                    alt={session.user?.name || "User"}
                    src={session.user?.image || undefined}
                  />
                  <Avatar.Fallback>
                    {session.user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar.Root>
                <SignOutButton />
              </>
            ) : (
              <SignInButton />
            )}
          </AbsoluteCenter>
        </Card.Root>
        <ProjectFooter />
      </Container>
    </>
  );
}
