import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#202135]">
      <Header />
      <section className="pt-32 pb-20">
        <Container>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-[#ffcc00]">
            Khóa học
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            Các lớp học tại Crown English
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6275]">
            Chọn khóa học theo năng lực hiện tại, mục tiêu đầu ra và lịch học
            phù hợp với bạn.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.slug}
                className="rounded-[26px] border border-[#f0e6dd] bg-white p-8 shadow-sm"
              >
                <span className="rounded-full bg-[#fff8f3] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#c8102e]">
                  {course.tag}
                </span>
                <h2 className="mt-6 text-3xl font-black">{course.title}</h2>
                <p className="mt-4 leading-7 text-[#5f6275]">{course.description}</p>
                <p className="mt-5 rounded-2xl bg-[#fff8f3] p-4 text-sm font-bold leading-6 text-[#34364a]">
                  Phù hợp: {course.suitableFor}
                </p>
                <Link
                  href={`/khoa-hoc/${course.slug}`}
                  className="mt-6 inline-flex rounded-full bg-[#ffcc00] px-6 py-3 font-black text-[#202135]"
                >
                  Xem chi tiết
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
