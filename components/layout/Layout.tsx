"use client";

import type { PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
