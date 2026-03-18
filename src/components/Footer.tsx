"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoMark } from "./Logo";

const DOWNLOAD_URL =
  "https://github.com/jantokic/codecouncil/releases/download/v0.3.0/codecouncil-0.3.0-arm64.dmg";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Download", href: DOWNLOAD_URL },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "https://github.com/jantokic/codecouncil/releases" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Sessions", href: "#features" },
      { label: "Discussions", href: "#features" },
      { label: "MCP Integration", href: "#features" },
      { label: "Models", href: "#models" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com/jantokic/codecouncil" },
      { label: "Documentation", href: "https://github.com/jantokic/codecouncil#readme" },
      { label: "Issues", href: "https://github.com/jantokic/codecouncil/issues" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "X / Twitter", href: "https://x.com/codecouncildev" },
      { label: "GitHub", href: "https://github.com/jantokic/codecouncil" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t border-white/[0.04] px-6 pt-16 pb-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="#" className="inline-flex items-center gap-2.5">
              <LogoMark size={24} />
              <span className="text-base font-semibold text-fg/90 tracking-tight">
                CodeCouncil
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-2 max-w-[240px] leading-relaxed">
              Multiplayer AI coding sessions for dev teams. Persistent context, shared decisions, one conversation.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
                Stay updated
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Subscribed
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubscribed(true);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex-1 max-w-[200px] rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2 text-sm text-fg placeholder:text-muted-2 outline-none focus:border-accent/30 transition-colors"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-white/[0.06] border border-white/[0.08] px-3 py-2 text-sm text-fg/80 hover:bg-white/[0.1] hover:text-fg transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium text-muted uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-2 transition-colors duration-200 hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-2">
            &copy; 2026 CodeCouncil. Open source under MIT license.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/codecouncildev"
              className="text-muted-2 transition-colors hover:text-fg"
              aria-label="Follow on X"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/jantokic/codecouncil"
              className="text-muted-2 transition-colors hover:text-fg"
              aria-label="View on GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
