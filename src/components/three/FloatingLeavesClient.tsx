"use client";

import dynamic from "next/dynamic";

const FloatingLeaves = dynamic(
  () => import("./objects/FloatingLeaves"),
  { ssr: false }
);

export default function FloatingLeavesClient() {
  return <FloatingLeaves />;
}
