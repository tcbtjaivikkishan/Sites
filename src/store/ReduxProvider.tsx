"use client";

import { Provider } from "react-redux";
import { makeStore } from "./index";
import { useRef } from "react";
import type { AppStore } from "./index";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
