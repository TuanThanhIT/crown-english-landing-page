import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { courses } from "@/data/courses";

export function generateStaticParams() {
  return courses.flatMap((course) => [course.slug, ...(course.aliases ?? [])].map((slug) => ({ slug })));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug || item.aliases?.includes(slug));
  if (!course) notFound();

  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <Header />
      <section className="bg-background pt-32 pb-20 lg:pt-40">
        <Container>
          <Link href="/khoa-hoc" className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-line bg-surface px-5 py-2.5 text-base font-semibold text-foreground transition-colors hover:border-primary hover:bg-tint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <ArrowLeft size={20} strokeWidth={1.8} aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none" />
            Tất cả khóa học
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-base font-bold tracking-wide text-accent">{course.tag}</p>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-normal sm:text-5xl lg:text-[64px]">{course.title}</h1>
              <p className="mt-6 text-lg leading-8 text-muted">{course.description}</p>
              <p className="mt-5 font-semibold text-accent">{course.summary}</p>
              <p className="mt-5 leading-7 text-muted"><span className="font-bold text-foreground">Phù hợp: </span>{course.suitableFor}</p>
              <Link href={{ pathname: "/lien-he", query: { course: course.slug } }} className="mt-7 inline-flex rounded-full brand-panel bg-primary px-7 py-3.5 font-bold text-foreground transition hover:-translate-y-1 hover:bg-primary-hover">Đăng ký tư vấn khóa này</Link>
            </div>
            <aside className="rounded-[28px] border border-line bg-surface p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">Thông tin lớp học</h2>
              <dl className="mt-6 grid gap-5">
                {course.formats.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm font-bold text-accent">{item.label}</dt>
                    <dd className="mt-2 leading-7 text-muted">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
          <section className="mt-16" aria-labelledby="course-roadmap">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">Từng bước tiến bộ</p>
            <h2 id="course-roadmap" className="text-3xl font-bold leading-tight sm:text-4xl">Lộ trình học chi tiết</h2>
            <ol className="mt-8 grid gap-6">
              {course.stages.map((stage, index) => (
                <li key={stage.title} className="rounded-[26px] border border-line bg-surface p-6 shadow-sm sm:p-8">
                  <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                      <span className="grid size-10 place-items-center rounded-full brand-panel bg-primary font-bold">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="mt-4 text-2xl font-bold leading-tight">{stage.title}</h3>
                      <p className="mt-3 font-bold text-accent">{stage.target}</p>
                      {stage.duration && <p className="mt-2 text-sm text-muted">{stage.duration}</p>}
                    </div>
                    <div>
                      <p className="leading-7 text-muted"><span className="font-semibold text-foreground">Dành cho: </span>{stage.suitableFor}</p>
                      <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-muted marker:text-accent">
                        {stage.content.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                      {stage.fees && (
                        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                          {stage.fees.map((fee) => (
                            <div key={fee.label} className="rounded-2xl bg-surface-alt p-4">
                              <dt className="text-sm text-muted">{fee.label}</dt>
                              <dd className="mt-1 font-bold text-accent">{fee.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          {course.notes.length > 0 && (
            <section className="mt-8 rounded-[26px] border border-line p-6 sm:p-8" aria-labelledby="course-notes">
              <h2 id="course-notes" className="text-xl font-bold">Thông tin học phí & chính sách</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-muted">
                {course.notes.map((note) => <li key={note}>{note}</li>)}
              </ul>
            </section>
          )}
        </Container>
      </section>
      <Footer />
    </main>
  );
}
