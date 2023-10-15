import Layout from "@/components/layout/Layout";
import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "700", "400", "900"],
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
      <body className={roboto.className}>
        <Layout>
          <main className="container">{children}</main>
        </Layout>
      </body>
    </html>
  );
}
