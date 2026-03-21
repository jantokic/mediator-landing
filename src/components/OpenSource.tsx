"use client";

import Link from "next/link";
import { RevealWrapper } from "./Features";

export default function OpenSource() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[800px]">
        <RevealWrapper>
          <div className="text-center">
            <span className="badge mx-auto">Open Source</span>
            <h2 className="mt-6 text-[clamp(30px,5vw,48px)] font-bold leading-[1.05] tracking-[-0.03em]">
              Open source.{" "}
              <span className="accent-serif">Fully yours.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-muted max-w-[560px] mx-auto">
              CodeCouncil is Apache 2.0 open source — the same license as
              Superset, Kubernetes, and TensorFlow. Run it on your machine, read
              every line of code, contribute improvements.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-muted max-w-[560px] mx-auto">
              No telemetry. No data collection. Your code stays on your
              machine. Shared sessions route through our relay — nothing is
              stored.
            </p>
            <div className="mt-10">
              <Link
                href="https://github.com/jantokic/codecouncil"
                className="btn-pill btn-secondary text-[15px] px-7 py-3 inline-flex"
              >
                View on GitHub
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
