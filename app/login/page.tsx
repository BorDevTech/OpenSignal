"use client";
import {
  Fieldset,
  Stack,
  Field,
  Input,
  NativeSelect,
  For,
  Button,
  Card,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { loginWithGitHub } from "@/app/lib/actions/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      
    </>
  );
}
