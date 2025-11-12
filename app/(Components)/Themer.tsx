"use client";
import { useColorModeValue } from "@/components/ui/color-mode";

export function Themer(color: string) {
  color = useColorModeValue(`${color}.300`, `${color}.400`);
  return color;
}
