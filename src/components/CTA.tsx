"use client";

import Link from "next/link";
import { RevealWrapper } from "./Features";

export default function CTA() {
  return (
    <RevealWrapper>
      <div className="px-6 py-32 text-center">
        <h2 className="mb-8 font-mono text-[clamp(28px,4vw,40px)] font-normal">
          Get Mediator Today
        </h2>
        <Link
          href="https://github.com/jantokic/hivemind"
          className="inline-flex items-center gap-2 bg-fg text-bg px-5 py-2.5 text-sm transition-colors hover:bg-fg/85"
        >
          Download for macOS
        </Link>
      </div>
    </RevealWrapper>
  );
}
