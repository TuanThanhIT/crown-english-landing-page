import Image from "next/image";
import { FeedbackCarousel } from "@/components/home/FeedbackCarousel";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { courses } from "@/data/courses";
import {
  homeCommitmentConditions,
  homeCommitmentSection,
  homeCoursesSection,
  homeFaqs,
  homeFaqSection,
  homeFeatureSection,
  homeFeatures,
  homeFeedbackSection,
  homeFinalCta,
  homeFounder,
  homeHero,
  homeRoadmapGroups,
  homeRoadmapSection,
  homePrograms,
  homeStats,
  homeTeacherStrengths,
  homeTeamSection,
  homeTestimonials,
} from "@/data/home";

export default function Home() {
  return (
    <main className="home-page min-h-screen overflow-hidden bg-transparent text-foreground">
      <Header />

      <section className="dark-photo dark-photo-hero relative isolate min-h-screen overflow-hidden pt-28 lg:pt-32">

        <div className="hero-silk absolute inset-0 -z-10" />
        <Container className="grid min-h-[calc(100vh-128px)] gap-6 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:grid-rows-[1fr_1fr] lg:gap-x-12 lg:gap-y-0">
          <div className="animate-rise max-w-4xl lg:col-start-1 lg:row-start-1 lg:self-end">
            <div className="mb-6 inline-flex rounded-full border border-line bg-tint px-4 py-2 text-sm font-bold text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              {homeHero.eyebrow}
            </div>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-normal sm:text-5xl lg:text-[64px]">
              {homeHero.title}
            </h1>

          </div>

          <div className="animate-rise-delayed relative mx-auto w-full max-w-[620px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="rounded-[34px] border border-line bg-tint p-3 shadow-[0_35px_120px_rgba(0,0,0,0.38)] backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                <Image
                  src={homeHero.image.src}
                  alt={homeHero.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 600px, 90vw"
                  className="object-cover"
                />
                <div className="image-fade absolute inset-0" />
                <div className="photo-caption absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    {homeHero.imageEyebrow}
                  </p>
                  <p className="mt-3 text-xl font-bold leading-snug">
                    {homeHero.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl lg:col-start-1 lg:row-start-2 lg:self-start">
            <p className="lg:mt-6 max-w-2xl text-lg leading-8 text-muted">
              {homeHero.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={homeHero.primaryCta.href}
                className="rounded-full brand-panel bg-primary px-7 py-3.5 text-center font-bold text-foreground shadow-[0_20px_50px_rgba(255,204,0,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-surface"
              >
                {homeHero.primaryCta.label}
              </Link>
              <Link
                href={homeHero.secondaryCta.href}
                className="rounded-full border border-line bg-tint px-7 py-3.5 text-center font-bold text-foreground transition duration-300 hover:-translate-y-1 hover:bg-tint"
              >
                {homeHero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface-alt py-8">
        <Container className="mb-6">
          <ol className="grid gap-4 md:grid-cols-3" aria-label="Chương trình đào tạo">
            {homePrograms.map((program, index) => (
              <li key={program.title}>
                <Link href={program.href} className="flex h-full items-center gap-4 rounded-[22px] border border-line bg-surface p-5 transition hover:border-primary hover:shadow-sm focus-visible:outline-2 focus-visible:outline-primary">
                  <span className="brand-panel grid size-10 shrink-0 place-items-center rounded-full bg-primary text-lg font-bold">{index + 1}</span>
                  <div>
                    <h2 className="text-lg font-bold text-accent">{program.title}</h2>
                    {program.description && <p className="mt-1 text-sm font-semibold leading-6 text-muted">{program.description}</p>}
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((item) => (
            <div key={item.value} className="rounded-[22px] border border-line bg-tint p-5">
              <p className="text-3xl font-bold text-accent">{item.value}</p>
              <p className="mt-2 text-sm font-bold text-muted">{item.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="dark-photo bg-background py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading {...homeFeatureSection} />
          <div className="grid gap-3 md:grid-cols-2">
            {homeFeatures.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-[24px] border border-line bg-tint p-6 transition duration-300 hover:-translate-y-1 hover:bg-tint"
              >
                <p className="text-sm font-bold text-accent">{feature.number}</p>
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-muted">{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="khoa-hoc" className="bg-surface-alt py-24 text-foreground">
        <Container>
          <SectionHeadingLight {...homeCoursesSection} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/khoa-hoc/${course.slug}`}
                className="group flex min-h-[310px] flex-col rounded-[26px] border border-line bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(17,19,31,0.12)]"
              >
                <span className="w-fit rounded-full brand-panel bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground">
                  {course.tag}
                </span>
                <h3 className="mt-7 text-xl font-bold leading-snug">{course.title}</h3>
                <p className="mt-3 text-sm font-semibold text-accent">{course.summary}</p>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                  {course.description}
                </p>
                <span className="mt-6 font-bold text-accent transition group-hover:translate-x-1">
                  Xem chi tiết →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="lo-trinh" className="dark-photo dark-photo-roadmap bg-surface-alt py-24">
        <Container>
          <SectionHeading {...homeRoadmapSection} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {homeRoadmapGroups.map((group) => (
              <article key={group.title} className="rounded-[28px] border border-line bg-tint p-7">
                <h3 className="text-3xl font-bold">{group.title}</h3>
                <ol className="mt-6 grid gap-3">
                  {group.stages.map((stage, index) => (
                    <li key={stage.title} className="flex items-start gap-3 rounded-2xl bg-tint p-4">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full brand-panel bg-primary text-sm font-bold text-foreground">{index + 1}</span>
                      <div><p className="font-bold">{stage.title} <span className="text-accent">· {stage.target}</span></p>{stage.duration && <p className="mt-1 text-sm text-muted">{stage.duration}</p>}</div>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 leading-8 text-muted">{group.description}</p>
                <Link href={group.href} className="mt-5 inline-block font-bold text-accent hover:underline">Xem lộ trình chi tiết →</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="cam-ket" className="bg-surface-alt py-24 text-foreground">
        <Container className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionHeadingLight
            eyebrow={homeCommitmentSection.eyebrow}
            title={homeCommitmentSection.title}
            description={homeCommitmentSection.description}
          />
          <div className="rounded-[30px] border border-line bg-surface p-6">
            <h3 className="text-xl font-bold text-accent">
              {homeCommitmentSection.conditionTitle}
            </h3>
            <div className="mt-6 grid gap-3">
              {homeCommitmentConditions.map((condition) => (
                <div key={condition} className="rounded-2xl border border-line bg-surface px-5 py-4 font-bold text-muted">
                  {condition}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="dark-photo bg-background py-24 text-foreground">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-[30px] brand-panel bg-primary p-8 text-foreground shadow-[0_28px_80px_rgba(129,19,38,0.22)]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {homeFounder.eyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight">{homeFounder.name}</h2>
            <p className="mt-5 leading-8 text-muted">{homeFounder.description}</p>
          </div>
          <div>
            <SectionHeading {...homeTeamSection} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {homeTeacherStrengths.map((item) => (
                <div key={item} className="rounded-2xl border border-line bg-tint px-5 py-4 font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="hoc-vien" className="bg-surface-alt py-24 text-foreground">
        <Container>
          <SectionHeadingLight {...homeFeedbackSection} />
          <FeedbackCarousel items={homeTestimonials} />
        </Container>
      </section>

      <section className="dark-photo bg-background py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading {...homeFaqSection} />
          <div className="grid gap-4">
            {homeFaqs.map((faq) => (
              <article key={faq.question} className="rounded-[24px] border border-line bg-tint p-6">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="lien-he" className="bg-surface-alt py-24 text-foreground">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {homeFinalCta.eyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight">
              {homeFinalCta.title}
            </h2>
            <address className="mt-6 grid gap-3 text-base not-italic leading-7">
              <a href="tel:0898192633" className="w-fit font-bold hover:underline">Điện thoại: 0898 192 633</a>
              <a href="mailto:ieltsgiaotiepcrown@gmail.com" className="w-fit break-all hover:underline">Email: ieltsgiaotiepcrown@gmail.com</a>
              <p>Địa chỉ: 168/20 Nguyễn Gia Trí, P25, Bình Thạnh, TP. Hồ Chí Minh</p>
            </address>
          </div>
          <Link
            href={homeFinalCta.cta.href}
            className="rounded-full brand-panel bg-primary px-9 py-4 text-center font-extrabold text-foreground shadow-[0_20px_45px_rgba(17,19,31,0.24)] transition hover:-translate-y-1"
          >
            {homeFinalCta.cta.label}
          </Link>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
    </div>
  );
}

function SectionHeadingLight({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
    </div>
  );
}
