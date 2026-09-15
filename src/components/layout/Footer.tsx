import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import { Container } from "./Container";

const courseLinks = ["IELTS Foundation", "IELTS Intensive", "Giao tiếp", "1:1"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#17182a] text-white">
      <div className="h-1.5 bg-[#ffcc00]" />
      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr_0.9fr] lg:items-start">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-[#ffcc00] text-lg font-black text-[#17182a]">
                C
              </span>
              <span>
                <span className="block text-xl font-black text-white">
                  CROWN
                </span>
                <span className="block text-xs font-bold uppercase text-white/55">
                  English
                </span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
              Trung tâm tiếng Anh đồng hành cùng học viên bằng lộ trình rõ ràng,
              feedback sát sao và môi trường học tích cực.
            </p>
          </div>

          <FooterColumn
            title="Menu"
            items={navigationItems.map((item) => ({
              label: item.label,
              href: item.href,
            }))}
          />
          <FooterColumn
            title="Khóa học"
            items={courseLinks.map((label) => ({
              label,
              href: "/khoa-hoc",
            }))}
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © Crown English. All rights reserved.</p>
          <Link
            href="/lien-he"
            className="w-fit rounded-full border border-white/10 px-5 py-2.5 font-black text-white/80 transition hover:-translate-y-0.5 hover:border-[#ffcc00] hover:text-[#ffcc00]"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-base font-black text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-white/62">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="transition hover:-translate-y-0.5 hover:text-[#ffcc00]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
