import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zonely Early Access",
  description: "Harnessing Context-Aware Computing to Restore Digital Wellbeing and Focus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}