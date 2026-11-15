import type { Metadata } from "next";
import { ClearStaleCache } from "@/components/clear-stale-cache";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Yulia Rizki Anjani | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Supabase, and Headless CMS. Experienced in website migrations, customer portals, CRM integration, and automation."
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
