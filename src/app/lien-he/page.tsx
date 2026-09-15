import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#202135] text-white">
      <Header />
      <section className="pt-32 pb-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-[#ffcc00]">
              Liên hệ
            </p>
            <h1 className="text-5xl font-black leading-tight sm:text-6xl">
              Sẵn sàng bắt đầu lộ trình tiếng Anh của bạn?
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Để lại thông tin, Crown English sẽ tư vấn khóa học phù hợp với
              trình độ, mục tiêu và lịch học của bạn.
            </p>
            <div className="mt-10 grid gap-4 text-white/82">
              <p>
                <strong className="text-white">Hotline:</strong> 0900 000 000
              </p>
              <p>
                <strong className="text-white">Zalo:</strong> Crown English
              </p>
              <p>
                <strong className="text-white">Địa chỉ:</strong> Cập nhật địa chỉ
                trung tâm
              </p>
            </div>
          </div>

          <form className="rounded-[28px] bg-white p-6 text-[#202135] shadow-2xl sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Họ và tên" placeholder="Nguyễn Văn A" />
              <Field label="Số điện thoại" placeholder="0900 000 000" />
              <Field label="Mục tiêu học" placeholder="IELTS 6.5 / Giao tiếp" />
              <Field label="Khóa quan tâm" placeholder="IELTS Foundation" />
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-black">Ghi chú</span>
              <textarea
                rows={4}
                placeholder="Bạn muốn bắt đầu khi nào?"
                className="w-full resize-none rounded-2xl border border-[#f0e6dd] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#ffcc00]"
              />
            </label>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-[#ffcc00] px-8 py-4 font-black text-[#202135] transition hover:-translate-y-1"
            >
              Gửi thông tin tư vấn
            </button>
          </form>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black">{label}</span>
      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#f0e6dd] bg-[#fffaf6] px-4 py-3 outline-none transition focus:border-[#ffcc00]"
      />
    </label>
  );
}
