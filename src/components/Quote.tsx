"use client";

import { RevealWrapper } from "./Features";

export default function Quote() {
  return (
    <RevealWrapper>
      <div className="px-6 py-24 text-center">
        <div className="mx-auto max-w-[640px]">
          <div className="mb-4 font-mono text-5xl leading-none text-muted-3">&ldquo;</div>
          <p className="mb-5 text-[clamp(20px,3vw,28px)] font-light leading-snug">
            We kept asking AI the same question separately, then{" "}
            <span className="text-accent">arguing over whose answer was better</span>. Mediator
            cuts out the middleman.
          </p>
          <p className="text-sm italic text-muted-2">— The moment that sparked Mediator</p>
        </div>
      </div>
    </RevealWrapper>
  );
}
