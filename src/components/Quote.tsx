"use client";

import { RevealWrapper } from "./Features";

export default function Quote() {
  return (
    <RevealWrapper>
      <div className="px-6 py-28 text-center">
        <div className="mx-auto max-w-[700px] glass-card p-10 sm:p-14">
          <div className="mb-5 text-5xl leading-none text-accent/30">&ldquo;</div>
          <p className="mb-6 text-[clamp(20px,3vw,28px)] font-normal leading-snug tracking-tight">
            We kept asking AI the same questions in separate chats, then{" "}
            <span className="accent-serif">debating whose answer was better</span>. CodeCouncil
            puts the agents in the same room.
          </p>
          <p className="text-sm text-muted-2">&mdash; The moment that sparked CodeCouncil</p>
        </div>
      </div>
    </RevealWrapper>
  );
}
