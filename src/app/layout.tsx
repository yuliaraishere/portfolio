import type { Metadata } from "next";
import { ClearStaleCache } from "@/components/clear-stale-cache";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Portfolio | Yulia Rizki Anjani (Kiki) | Web app developer",
  description:
    "Crafting compelling narratives through design, merging creativity with functionality seamlessly."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClearStaleCache />
        {children}
      </body>
    </html>
  );
}
