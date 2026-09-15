import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { courses } from "@/data/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#202135]">
      <Header />
      <section className="pt-32 pb-20">
        <Container>
          <Link href="/khoa-hoc" className="text-sm font-black text-[#c8102e]">
            ← Tất cả khóa học
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-[#ffcc00]">
                {course.tag}
              </p>
              <h1 className="text-5xl font-black leading-tight sm:text-6xl">
                {course.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#5f6275]">
                {course.description}
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f0e6dd] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black">Thông tin lớp học</h2>
              <div className="mt-6 grid gap-4">
                {[
                  ["Phù hợp", course.suitableFor],
                  ["Hình thức", "Học nhóm nhỏ hoặc kèm cá nhân theo nhu cầu"],
                  ["Theo dõi", "Feedback định kỳ và điều chỉnh lộ trình"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#fff8f3] p-5">
                    <p className="text-sm font-black text-[#c8102e]">{label}</p>
                    <p className="mt-2 leading-7 text-[#5f6275]">{value}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/lien-he"
                className="mt-7 inline-flex rounded-full bg-[#ffcc00] px-7 py-4 font-black text-[#202135]"
              >
                Đăng ký tư vấn khóa này
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
