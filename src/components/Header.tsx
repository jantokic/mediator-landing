"use client";

import Link from "next/link";

const DOWNLOAD_URL = "https://github.com/jantokic/hivemind/releases/download/v0.1.4/mediator-0.1.4-arm64.dmg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/70 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6">
        <Link
          href="#"
          className="text-lg font-semibold tracking-tight text-fg transition-opacity hover:opacity-80"
        >
          Hivemind
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.04] border border-white/[0.06] px-1.5 py-1.5 backdrop-blur-xl">
          <Link
            href="#features"
            className="px-4 py-1.5 text-sm text-muted rounded-full transition-colors hover:text-fg hover:bg-white/[0.06]"
          >
            Features
          </Link>
          <Link
            href="#how"
            className="px-4 py-1.5 text-sm text-muted rounded-full transition-colors hover:text-fg hover:bg-white/[0.06]"
          >
            How it works
          </Link>
          <Link
            href="#models"
            className="px-4 py-1.5 text-sm text-muted rounded-full transition-colors hover:text-fg hover:bg-white/[0.06]"
          >
            Models
          </Link>
        </nav>

        <Link
          href={DOWNLOAD_URL}
          className="btn-pill btn-primary text-[13px] py-2 px-5"
        >
          Download for macOS
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
