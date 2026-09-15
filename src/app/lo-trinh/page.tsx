import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const steps = [
  "Kiểm tra đầu vào",
  "Tư vấn mục tiêu",
  "Xây lộ trình cá nhân",
  "Học theo module",
  "Feedback hằng tuần",
  "Đánh giá đầu ra",
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#202135]">
      <Header />
      <section className="pt-32 pb-20">
        <Container>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-[#ffcc00]">
            Lộ trình
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            Lộ trình học rõ ràng từ đầu vào đến đầu ra
          </h1>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-[24px] border border-[#f0e6dd] bg-white p-7">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#ffcc00]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-5 text-2xl font-black">{step}</h2>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
