import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const commitments = [
  "Lộ trình rõ ràng theo từng giai đoạn",
  "Giảng viên theo sát tiến độ cá nhân",
  "Feedback bài nói, bài viết chi tiết",
  "Tài liệu tinh gọn, thực chiến",
  "Lớp học giới hạn để đảm bảo chất lượng",
  "Tư vấn điều chỉnh khi học viên chững lại",
];

export default function CommitmentPage() {
  return (
    <main className="min-h-screen bg-white text-[#202135]">
      <Header />
      <section className="pt-32 pb-20">
        <Container>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-[#ffcc00]">
            Cam kết
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            Crown English cam kết đồng hành đến khi bạn tiến bộ
          </h1>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item) => (
              <div key={item} className="rounded-[24px] border border-[#f0e6dd] bg-[#fff8f3] p-7">
                <span className="mb-5 block h-2 w-12 rounded-full bg-[#ffcc00]" />
                <p className="text-xl font-black leading-8">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
