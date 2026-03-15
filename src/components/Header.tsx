"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-[12px]">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-6">
        <Link
          href="#"
          className="font-mono text-lg font-medium tracking-tight text-fg transition-opacity hover:opacity-80"
        >
          Mediator
        </Link>

        <div className="flex items-center">
          <ul className="flex items-center list-none">
            <li className="hidden md:block">
              <Link
                href="#features"
                className="px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                Features
              </Link>
            </li>
            <li className="hidden md:block w-px h-4 bg-border mx-1" />
            <li className="hidden md:block">
              <Link
                href="#how"
                className="px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                How it works
              </Link>
            </li>
            <li className="hidden md:block w-px h-4 bg-border mx-1" />
            <li className="hidden md:block">
              <Link
                href="#models"
                className="px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                Models
              </Link>
            </li>
          </ul>
          <div className="ml-4">
            <Link
              href="https://github.com/jantokic/hivemind"
              className="inline-flex items-center gap-2 bg-fg text-bg px-4 py-1.5 text-sm transition-colors hover:bg-fg/85"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
