"use client";

import Image from "next/image";
import ProjectHeader from "./components/Header";
import ProjectFooter from "./components/Footer";
import { Container, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <ProjectHeader projectTitle={"OpenSignal"} />
      <Container>
        <Stack>Login to use the platform</Stack>
      </Container>
      <ProjectFooter />
    </>
  );
}
