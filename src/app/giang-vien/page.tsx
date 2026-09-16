import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const teachers = [
  {
    name: "Ms. Crown",
    role: "Founder & Head Teacher",
    description:
      "Định hướng chương trình IELTS và giao tiếp theo phương pháp dễ hiểu, sát năng lực học viên Việt Nam.",
  },
  {
    name: "Academic Team",
    role: "IELTS Mentors",
    description:
      "Đồng hành chữa bài, theo dõi homework plan và hỗ trợ học viên trong suốt khóa học.",
  },
];

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <Header />
      <section className="bg-background pt-32 pb-20">
        <Container>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-accent">
            Giảng viên
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            Đội ngũ đồng hành sát sao với từng học viên
          </h1>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {teachers.map((teacher) => (
              <article
                key={teacher.name}
                className="grid gap-6 rounded-[28px] border border-line bg-surface-alt p-7 sm:grid-cols-[140px_1fr] sm:items-center"
              >
                <div className="grid aspect-square place-items-center rounded-[32px] bg-background text-5xl font-black text-accent">
                  {teacher.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-accent">
                    {teacher.role}
                  </p>
                  <h2 className="mt-3 text-3xl font-black">{teacher.name}</h2>
                  <p className="mt-4 leading-7 text-muted">{teacher.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
