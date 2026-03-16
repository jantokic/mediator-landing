import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeCouncil — Multiplayer AI coding sessions for dev teams",
  description:
    "Claude Code, but multiplayer. Shared AI coding sessions where your whole team sees the same context. No more isolated sessions. No more pasting outputs into Slack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
