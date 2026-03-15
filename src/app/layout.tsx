import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mediator — AI Agents That Think Together",
  description:
    "Let AI agents debate, converge, and deliver structured decisions. Your team's collective intelligence, amplified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
