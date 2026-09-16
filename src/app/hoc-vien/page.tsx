import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const reviews = [
  "Em hiểu rõ lỗi của mình sau từng buổi chữa bài và tự tin hơn khi vào phòng thi thử.",
  "Khóa giao tiếp giúp em nói tự nhiên hơn trong công việc.",
  "Lớp học vui, bài tập vừa sức, cô sửa rất kỹ nên em thấy mình tiến bộ từng tuần.",
];

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <Header />
      <section className="bg-background pt-32 pb-20">
        <Container>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-accent">
            Học viên
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            Câu chuyện và feedback từ học viên Crown
          </h1>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <article key={review} className="rounded-[24px] border border-line bg-surface p-8">
                <div className="mb-6 grid size-14 place-items-center rounded-full brand-panel bg-primary text-xl font-black">
                  {index + 1}
                </div>
                <p className="text-lg leading-8 text-muted">“{review}”</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
