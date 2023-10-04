import Layout from "@/components/layout/Layout";
import "./globals.scss";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "700", "400"],
  style: "normal",
  display: "swap",
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Home Page",
  description: "Made student 41PZ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <Layout />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
