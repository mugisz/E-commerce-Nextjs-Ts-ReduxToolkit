"use client";

import type { PropsWithChildren } from "react";
import Header from "./header/Header";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
