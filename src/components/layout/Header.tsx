import Link from "next/link";
import { Container } from "./Container";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eadbd1] bg-[#fffdf9]/95 shadow-[0_14px_38px_rgba(32,33,53,0.07)] backdrop-blur-xl">
      <Container className="flex h-[78px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-full bg-[#c8102e] text-lg font-black text-white shadow-[0_14px_28px_rgba(200,16,46,0.22)] ring-4 ring-white transition group-hover:-rotate-6 group-hover:scale-105">
            C
          </span>
          <span className="leading-tight">
            <span className="block text-xl font-black text-[#c8102e]">
              CROWN
            </span>
            <span className="block text-[12px] font-bold uppercase text-[#202135]/70">
              English
            </span>
          </span>
        </Link>

        <Navbar />

        <Link
          href="/lien-he"
          className="hidden rounded-full bg-[#ffcc00] px-7 py-3.5 text-[15px] font-black text-[#202135] shadow-[0_16px_34px_rgba(255,204,0,0.32)] transition hover:-translate-y-1 hover:bg-[#ffd633] lg:inline-flex"
        >
          Đăng ký tư vấn
        </Link>

        <details className="group relative lg:hidden">
          <summary className="grid size-12 cursor-pointer list-none place-items-center rounded-full bg-white text-2xl font-bold shadow-md ring-1 ring-[#f0e1d8] marker:hidden">
            ≡
          </summary>
          <Navbar variant="mobile" />
        </details>
      </Container>
    </header>
  );
}
