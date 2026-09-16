import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-line bg-background shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
      <Container
        wide
        className="flex h-[76px] items-center justify-between gap-2 sm:gap-5"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 sm:gap-3 transition duration-300 hover:-translate-y-0.5"
          aria-label="Crown English trang chủ"
        >
          <span className="rounded-xl bg-[#f4f4f2] px-2 py-1 shadow-[0_10px_28px_rgba(0,0,0,0.16)]">
            <Image
              src="/images/crown-logo.png"
              alt="Crown English"
              width={96}
              height={72}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </span>
          <span className="whitespace-nowrap text-sm font-medium tracking-wide text-[#454c48] sm:text-xl">
            Crown
            <span className="ml-1 font-serif italic font-normal text-[#ee7912]">
              English
            </span>
          </span>
        </Link>

        <Navbar />

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/lien-he"
            className="hidden rounded-full brand-panel bg-primary px-5 py-2.5 text-[14px] font-bold text-foreground shadow-[0_16px_38px_rgba(255,204,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-surface lg:inline-flex"
          >
            Đăng ký học thử
          </Link>

          <ThemeToggle />
          <details className="group relative lg:hidden">
            <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-2xl border border-line bg-tint text-xl font-semibold text-foreground shadow-lg marker:hidden">
              ≡
            </summary>
            <Navbar variant="mobile" />
          </details>
        </div>
      </Container>
    </header>
  );
}
