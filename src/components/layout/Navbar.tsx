"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { courseMenuItems, navigationItems } from "@/data/navigation";

type NavbarProps = {
  variant?: "desktop" | "mobile";
};

export function Navbar({ variant = "desktop" }: NavbarProps) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (variant === "mobile") {
    return (
      <div className="absolute right-0 mt-4 w-72 rounded-[28px] border border-[#f0e1d8] bg-white p-4 shadow-[0_24px_70px_rgba(32,33,53,0.16)]">
        {navigationItems.map((item) => (
          <div key={item.href}>
            <Link
              href={item.href}
              className={`block rounded-2xl px-4 py-3.5 text-[15px] font-extrabold transition hover:bg-[#fff8f3] ${
                isActive(item.href)
                  ? "bg-[#fff8f3] text-[#c8102e]"
                  : "text-[#34364a]"
              }`}
            >
              {item.label}
            </Link>
            {item.label === "Khóa học" && (
              <div className="mb-2 ml-4 grid gap-1 border-l border-[#f0e1d8] pl-3">
                {courseMenuItems.map((course) => (
                  <Link
                    key={course.label}
                    href={course.href}
                    className="rounded-xl px-3 py-2.5 text-sm font-bold text-[#5f6275] transition hover:bg-[#fff8f3] hover:text-[#c8102e]"
                  >
                    {course.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link
          href="/lien-he"
          className="mt-3 block rounded-full bg-[#ffcc00] px-4 py-3.5 text-center text-[15px] font-black text-[#202135] shadow-[0_12px_28px_rgba(255,204,0,0.3)]"
        >
          Đăng ký tư vấn
        </Link>
      </div>
    );
  }

  return (
    <nav className="hidden h-[50px] items-center gap-1 rounded-full border border-[#f0e1d8] bg-[#fff8f3] p-1 text-[15px] font-extrabold text-[#34364a] shadow-inner lg:flex">
      {navigationItems.map((item) => (
        <div key={item.href} className="group relative flex h-full items-center">
          <Link
            href={item.href}
            className={`relative flex h-full items-center gap-1.5 rounded-full px-4 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#c8102e] hover:shadow-sm ${
              isActive(item.href) ? "bg-white text-[#202135] shadow-sm" : ""
            }`}
          >
            <span>{item.label}</span>
            {item.label === "Khóa học" && (
              <span className="text-[10px] text-[#ffb900] transition group-hover:rotate-180">
                ▼
              </span>
            )}
            <span
              className={`absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full bg-[#ffcc00] transition-all duration-200 ${
                isActive(item.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
          </Link>

          {item.label === "Khóa học" && (
            <div className="pointer-events-none absolute left-1/2 top-[calc(100%+14px)] w-[390px] -translate-x-1/2 translate-y-3 scale-[0.98] rounded-[26px] border border-[#f0e1d8] bg-white p-3 opacity-0 shadow-[0_28px_80px_rgba(32,33,53,0.18)] transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              <div className="mb-2 rounded-2xl bg-[#fff8f3] px-4 py-3">
                <p className="text-xs font-black uppercase text-[#ffb900]">
                  Lớp học nổi bật
                </p>
              </div>
              {courseMenuItems.map((course) => (
                <Link
                  key={course.label}
                  href={course.href}
                  className="group/course grid rounded-2xl px-4 py-3.5 transition hover:bg-[#fff8f3]"
                >
                  <span className="flex items-center justify-between font-black text-[#202135]">
                    {course.label}
                    <span className="text-[#ffcc00] transition group-hover/course:translate-x-1">
                      →
                    </span>
                  </span>
                  <span className="mt-1 text-sm leading-6 text-[#5f6275]">
                    {course.description}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
