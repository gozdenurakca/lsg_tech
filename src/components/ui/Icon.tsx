"use client";

import { ICONS, type IconType } from "@/lib/icons";
import type { LucideProps } from "lucide-react";

type Props = {
  name: IconType;
} & LucideProps;

export default function Icon({ name, ...props }: Props) {
  const Component = ICONS[name];

  if (!Component) return null;

  return <Component {...props} />;
}
