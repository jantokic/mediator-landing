"use client";

import { RevealWrapper } from "./Features";

export default function Quote() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1100px]">
        <RevealWrapper>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 — Dark with visible purple gradient */}
            <div className="relative rounded-3xl p-10 sm:p-14 overflow-hidden min-h-[380px] flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1540] via-[#12102a] to-[#0a0a14] rounded-3xl" />
              <div className="absolute inset-0 rounded-3xl border border-accent/20" />
              <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-accent/[0.12] rounded-full blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-accent/[0.18]" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-accent/50 text-7xl leading-none font-serif mb-5">&ldquo;</div>
                  <p className="text-[clamp(20px,2.5vw,26px)] font-medium leading-[1.4] tracking-[-0.01em] text-fg/90">
                    We used to spend the first 20 minutes of every AI session
                    re-explaining our architecture. Now the whole team shares one
                    persistent context.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/25 flex items-center justify-center text-base font-bold text-accent-light">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fg/85">Sarah L.</p>
                    <p className="text-xs text-muted-2 mt-0.5">
                      Staff Engineer, Meridian Labs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — VIVID accent (like Linear's yellow card) */}
            <div className="relative rounded-3xl p-10 sm:p-14 overflow-hidden min-h-[380px] flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b7bf5] via-[#7c6ce6] to-[#6050d0] rounded-3xl" />
              <div className="absolute inset-0 rounded-3xl border border-white/[0.15]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.08] rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-white/[0.12]" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-white/30 text-7xl leading-none font-serif mb-5">&ldquo;</div>
                  <p className="text-[clamp(20px,2.5vw,26px)] font-medium leading-[1.4] tracking-[-0.01em] text-white">
                    One room, three models, five engineers — and everyone sees
                    the same conversation. This is what AI coding should
                    have been from the start.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/15 flex items-center justify-center text-base font-bold text-white/90">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">
                      Marcus R.
                    </p>
                    <p className="text-xs text-white/50 mt-0.5">
                      Engineering Lead, Stackwise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
