import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  commitmentConditions,
  commitmentPage,
  commitmentValues,
  courseCommitments,
} from "@/data/commitments";

export default function CommitmentPage() {
  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <Header />
      <section className="bg-background pt-32 pb-20 lg:pt-40">
      <div className="pb-16">
        <Container>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            {commitmentPage.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-normal sm:text-5xl lg:text-[64px]">
            {commitmentPage.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {commitmentPage.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {courseCommitments.map((course) => (
              <Link key={course.slug} href={`#${course.slug}`} className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-bold transition hover:border-primary hover:text-accent">
                {course.title}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <section className="pb-16" aria-labelledby="course-commitments">
        <Container>
          <h2 id="course-commitments" className="text-3xl font-bold leading-tight sm:text-4xl">{commitmentPage.coursesTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{commitmentPage.coursesDescription}</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {courseCommitments.map((course) => (
              <article key={course.slug} id={course.slug} className="flex scroll-mt-28 flex-col rounded-[26px] border border-line bg-surface p-6 shadow-sm sm:p-8">
                <span className="w-fit rounded-full brand-panel bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground">{course.tag}</span>
                <h3 className="mt-6 text-3xl font-bold leading-tight">{course.title}</h3>
                <p className="mt-4 leading-7 text-muted">{course.description}</p>
                <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                  {course.outcomes.map((outcome) => (
                    <div key={outcome.label} className="rounded-2xl bg-surface-alt p-4">
                      <dt className="text-sm leading-6 text-muted">{outcome.label}</dt>
                      <dd className="mt-2 text-xl font-bold leading-snug text-accent">{outcome.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6">
                  <h4 className="font-bold">{commitmentPage.assessmentLabel}</h4>
                  <p className="mt-2 leading-7 text-muted">{course.assessment}</p>
                </div>
                <div className="mt-5 rounded-2xl border border-primary/40 bg-primary/10 p-5">
                  <h4 className="font-bold">{commitmentPage.supportLabel}</h4>
                  <p className="mt-2 leading-7 text-muted">{course.support}</p>
                </div>
                {course.note && <p className="mt-4 text-sm leading-7 text-muted">{course.note}</p>}
                <div className="mt-auto pt-6">
                  <Link href={`/khoa-hoc/${course.slug}`} className="inline-flex font-bold text-accent transition hover:translate-x-1">{commitmentPage.courseLinkLabel}</Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16" aria-labelledby="commitment-conditions">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">{commitmentPage.conditionsEyebrow}</p>
            <h2 id="commitment-conditions" className="text-3xl font-bold leading-tight sm:text-4xl">{commitmentPage.conditionsTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{commitmentPage.conditionsDescription}</p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {commitmentConditions.map((condition, index) => (
              <li key={condition.title} className="rounded-[24px] border border-line bg-surface p-6">
                <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-bold">{condition.title}</h3>
                <p className="mt-3 leading-7 text-muted">{condition.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="commitment-quality">
        <Container>
          <h2 id="commitment-quality" className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">{commitmentPage.qualityTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {commitmentValues.map((value) => (
              <article key={value.title} className="rounded-[26px] border border-line bg-surface p-6 sm:p-8">
                <span className="block h-1 w-12 rounded-full brand-panel bg-primary" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-bold">{value.title}</h3>
                <p className="mt-4 leading-7 text-muted">{value.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-6 rounded-[28px] brand-panel bg-primary p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{commitmentPage.ctaTitle}</h2>
              <p className="mt-3 leading-7">{commitmentPage.ctaDescription}</p>
            </div>
            <Link href={commitmentPage.cta.href} className="inline-flex w-fit shrink-0 rounded-full brand-panel bg-primary px-7 py-3.5 text-center font-bold text-foreground transition hover:-translate-y-1">{commitmentPage.cta.label}</Link>
          </div>
        </Container>
      </section>
      </section>
      <Footer />
    </main>
  );
}
