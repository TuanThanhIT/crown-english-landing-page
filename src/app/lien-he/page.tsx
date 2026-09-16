import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactForm } from "@/components/contact/ContactForm";
import { courseMenuItems } from "@/data/navigation";
import { courses } from "@/data/courses";

export const metadata = { title: "Liên hệ | Crown English" };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string | string[] }>;
}) {
  const { course: slug } = await searchParams;
  const selectedCourse = typeof slug === "string"
    ? courses.find((course) => course.slug === slug || course.aliases?.includes(slug))?.title ?? ""
    : "";
  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <Header />
      <section className="dark-photo dark-photo-contact pt-32 pb-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-accent">Liên hệ</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">Bắt đầu hành trình tiếng Anh cùng Crown English</h1>
            <p className="mt-6 text-lg leading-8 text-muted">Để lại thông tin để được tư vấn khóa học phù hợp với trình độ, mục tiêu và lịch học của bạn.</p>
            <div className="mt-10 grid gap-6 text-muted">
              <div><p className="mb-2 text-sm font-bold text-accent">Email</p><a className="break-all hover:underline" href="mailto:ieltsgiaotiepcrown@gmail.com">ieltsgiaotiepcrown@gmail.com</a></div>
              <div><p className="mb-2 text-sm font-bold text-accent">Địa chỉ</p><p>168/20 Nguyễn Gia Trí, P25, Bình Thạnh, TP. Hồ Chí Minh</p></div>
              <div><p className="mb-2 text-sm font-bold text-accent">Điện thoại</p><a className="hover:underline" href="tel:0898192633">0898 192 633</a></div>
            </div>
          </div>
          <ContactForm key={selectedCourse} initialCourse={selectedCourse} courses={courseMenuItems.map((course) => course.label)} />
        </Container>
      </section>
      <Footer />
    </main>
  );
}
