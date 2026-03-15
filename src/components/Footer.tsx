import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <Link href="#" className="font-mono text-base font-medium text-muted">
            Mediator
          </Link>
          <ul className="flex list-none gap-6">
            <li>
              <Link
                href="https://github.com/jantokic/hivemind"
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/jantokic/hivemind/issues"
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                Issues
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-8 border-t border-white/[0.04] pt-6 text-sm text-muted-2">
          &copy; 2026 Mediator. Open source under MIT.
        </div>
      </div>
    </footer>
  );
}
