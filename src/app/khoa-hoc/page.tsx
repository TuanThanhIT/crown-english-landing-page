import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Các khóa học",

  description:
    "Khám phá các khóa học IELTS, TOEIC, tiếng Anh giao tiếp và chương trình học cá nhân hóa tại Crown English.",
};

const CoursesPage = () => {
  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <Header />
      <section className="bg-background pt-32 pb-20 lg:pt-40">
        <Container>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            Khóa học tại Crown
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-normal sm:text-5xl lg:text-[64px]">
            Chọn khóa học phù hợp với mục tiêu của bạn
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Khám phá lộ trình IELTS, giao tiếp, TOEIC và IELTS kèm 1:1. Bắt đầu
            từ trình độ hiện tại, từng bước tiến đến mục tiêu của bạn.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.slug}
                className="flex flex-col rounded-[26px] border border-line bg-surface p-6 shadow-sm sm:p-8"
              >
                <span className="w-fit rounded-full brand-panel bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground">
                  {course.tag}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight">
                  {course.title}
                </h2>
                <p className="mt-3 text-sm font-semibold text-accent">
                  {course.summary}
                </p>
                <p className="mt-4 leading-7 text-muted">
                  {course.description}
                </p>
                <p className="mt-5 rounded-2xl bg-surface-alt p-4 text-sm leading-7 text-muted">
                  <span className="font-bold text-foreground">Phù hợp: </span>
                  {course.suitableFor}
                </p>
                <ol
                  aria-label={`Các cấp độ ${course.title}`}
                  className="mt-6 grid flex-1 content-start gap-3"
                >
                  {course.stages.map((stage, index) => (
                    <li
                      key={stage.title}
                      className="flex items-start gap-3 text-sm leading-6"
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface-alt font-bold text-accent">
                        {index + 1}
                      </span>
                      <div>
                        <span className="font-semibold">{stage.title}</span>
                        <span className="text-muted">
                          {" "}
                          · {stage.target}
                          {stage.duration ? ` · ${stage.duration}` : ""}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
                <Link
                  href={`/khoa-hoc/${course.slug}`}
                  className="mt-8 inline-flex w-fit rounded-full brand-panel bg-primary px-6 py-3 font-bold text-foreground transition hover:-translate-y-1 hover:bg-primary-hover"
                >
                  Xem lộ trình & học phí →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
};
export default CoursesPage;
