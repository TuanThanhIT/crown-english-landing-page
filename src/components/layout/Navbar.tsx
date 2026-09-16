"use client";

import Link from "next/link";
import {
  House,
  GraduationCap,
  ShieldCheck,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";

const navigationIcons: Record<string, LucideIcon> = {
  "/": House,
  "/khoa-hoc": GraduationCap,
  "/cam-ket": ShieldCheck,
  "/lien-he": MessageCircle,
};

type NavbarProps = { variant?: "desktop" | "mobile" };

export function Navbar({ variant = "desktop" }: NavbarProps) {
  const pathname = usePathname();
  const mobile = variant === "mobile";

  return (
    <nav
      aria-label={mobile ? "Điều hướng di động" : "Điều hướng chính"}
      className={
        mobile
          ? "absolute right-0 mt-1 max-h-[calc(100dvh-100px)] w-[min(17rem,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-[28px] border border-line bg-surface p-3 text-foreground shadow-[0_28px_90px_rgba(0,0,0,0.38)]"
          : "hidden h-12 items-center gap-1 text-[16px] font-semibold text-muted lg:flex xl:gap-2"
      }
    >
      {navigationItems.map((item) => {
        const Icon = navigationIcons[item.href] ?? House;
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={
              mobile
                ? `flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition hover:bg-tint hover:text-accent ${active ? "bg-tint text-accent" : "text-muted"}`
                : `group relative flex h-full items-center gap-2 whitespace-nowrap rounded-lg px-2.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary after:absolute after:inset-x-2.5 after:bottom-2 after:h-0.5 after:origin-center after:rounded-full after:bg-primary after:transition-transform after:duration-200 ${active ? "text-foreground after:scale-x-100" : "after:scale-x-0 hover:text-foreground hover:after:scale-x-50"}`
            }
          >
            <Icon
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
              className="shrink-0 text-current"
            />
            {item.label}
          </Link>
        );
      })}
      {mobile && (
        <Link
          href="/lien-he"
          className="mt-3 block rounded-full brand-panel bg-primary px-4 py-3.5 text-center text-[15px] font-bold text-foreground"
        >
          Đăng ký học thử
        </Link>
      )}
    </nav>
  );
}
