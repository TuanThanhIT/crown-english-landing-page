import Image from "next/image";
import Link from "next/link";
import { courseMenuItems, navigationItems } from "@/data/navigation";
import { Container } from "./Container";

const resourceLinks = [
  { label: "Học viên", href: "/hoc-vien" },
  { label: "Giảng viên", href: "/giang-vien" },
  { label: "Cam kết đầu ra", href: "/cam-ket" },
];

export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden bg-background text-foreground">
      <Container wide className="py-10 sm:py-12">
        <div className="grid grid-cols-3 gap-x-3 gap-y-8 pb-8 sm:gap-x-6 lg:gap-10 lg:grid-cols-[1.2fr_0.75fr_0.75fr_0.9fr]">
          <div className="col-span-3 min-w-0 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Crown English trang chủ"
            >
              <span className="rounded-xl bg-[#f4f4f2] px-2.5 py-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.16)]">
                <Image
                  src="/images/crown-logo.png"
                  alt="Crown English"
                  width={112}
                  height={84}
                  className="h-12 w-auto"
                />
              </span>
              <span className="whitespace-nowrap text-sm font-medium tracking-wide text-[#454c48] sm:text-xl">
                Crown
                <span className="ml-1 font-serif italic font-normal text-[#ee7912]">
                  English
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              Trung tâm tiếng Anh tập trung vào IELTS, giao tiếp phản xạ, TOEIC
              và kèm 1:1 với lộ trình cá nhân hóa, feedback sát sao và môi
              trường học tích cực.
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
            items={courseMenuItems.map((item) => ({
              label: item.label,
              href: item.href,
            }))}
          />
          <FooterColumn title="Tin cậy" items={resourceLinks} />
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © Crown English. All rights reserved.</p>
          <p>IELTS • Giao tiếp • TOEIC • Kèm 1:1</p>
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
    <div className="min-w-0">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.16em] text-foreground">
        {title}
      </h3>
      <div className="mt-2 grid gap-1 text-xs leading-5 font-semibold text-muted sm:mt-3 sm:gap-2 sm:text-sm">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex min-h-8 w-fit max-w-full items-center py-0.5 transition hover:-translate-y-0.5 hover:text-accent sm:min-h-0 sm:py-0"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
