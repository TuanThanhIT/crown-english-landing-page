import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { courses } from "@/data/courses";

const roadmap = [
  "Kiểm tra đầu vào",
  "Tư vấn mục tiêu",
  "Xây lộ trình cá nhân",
  "Học theo module",
  "Feedback hằng tuần",
  "Đánh giá đầu ra",
];

const commitments = [
  "Lộ trình rõ ràng theo từng giai đoạn",
  "Giảng viên theo sát tiến độ cá nhân",
  "Feedback bài nói, bài viết chi tiết",
  "Tài liệu tinh gọn, thực chiến",
  "Lớp học giới hạn để đảm bảo chất lượng",
  "Tư vấn điều chỉnh khi học viên chững lại",
];

const reviews = [
  {
    name: "Minh Anh",
    role: "Học viên IELTS",
    quote:
      "Em hiểu rõ lỗi của mình sau từng buổi chữa bài và tự tin hơn khi vào phòng thi thử.",
  },
  {
    name: "Quang Huy",
    role: "Người đi làm",
    quote:
      "Khóa giao tiếp giúp em nói tự nhiên hơn, không còn bị khựng quá lâu khi trao đổi công việc.",
  },
  {
    name: "Gia Linh",
    role: "Học sinh cấp 3",
    quote:
      "Lớp học vui, bài tập vừa sức, cô sửa rất kỹ nên em thấy mình tiến bộ từng tuần.",
  },
];

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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8f3] text-[#202135]">
      <Header />

      <section
        id="trang-chu"
        className="relative isolate overflow-hidden bg-[#7f1021] pb-16 pt-28 text-white lg:pb-20 lg:pt-32"
      >
        <div className="absolute -left-24 top-20 -z-10 size-80 rounded-full bg-[#ffcc00]/18 blur-3xl" />
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-[#99172c]/45" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-white [clip-path:ellipse(75%_55%_at_50%_100%)]" />
        <Container className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.45em] text-[#ffcc00]">
              Crown English Center
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-[64px]">
              Học tiếng Anh đúng lộ trình, tự tin đạt mục tiêu
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Crown English đồng hành cùng học sinh, sinh viên và người đi làm
              qua các khóa IELTS, giao tiếp phản xạ và kèm cá nhân hóa, với lộ
              trình rõ ràng từ đầu vào đến đầu ra.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/lien-he"
                className="rounded-full bg-[#ffcc00] px-8 py-4 text-center font-black text-[#202135] shadow-[0_20px_42px_rgba(255,204,0,0.28)] transition hover:-translate-y-1"
              >
                Đăng ký tư vấn
              </Link>
              <Link
                href="/khoa-hoc"
                className="rounded-full bg-white px-8 py-4 text-center font-black text-[#c8102e] shadow-[0_20px_42px_rgba(255,255,255,0.18)] transition hover:-translate-y-1 hover:bg-[#fff8f3]"
              >
                Xem khóa học
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {["IELTS", "Giao tiếp", "Kèm 1:1"].map((item, index) => (
                <Link
                  key={item}
                  href="/khoa-hoc"
                  className={`rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-black shadow-[0_10px_24px_rgba(32,33,53,0.14)] transition hover:-translate-y-1 ${
                    index === 0
                      ? "text-[#c8102e] hover:bg-[#ffcc00] hover:text-[#202135]"
                      : "text-[#202135] hover:bg-[#ffcc00]"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4 text-sm font-bold text-white">
              <a href="https://facebook.com" className="hover:text-[#ffcc00]">
                Facebook
              </a>
              <span className="text-white/35">/</span>
              <a href="https://zalo.me" className="hover:text-[#ffcc00]">
                Zalo
              </a>
              <span className="text-white/35">/</span>
              <a href="tel:0900000000" className="hover:text-[#ffcc00]">
                0900 000 000
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -right-3 top-8 h-[82%] w-[82%] rounded-[48%_52%_48%_52%/45%_44%_56%_55%] bg-white/18" />
            <div className="absolute left-8 top-2 h-[86%] w-[86%] rounded-[46%_54%_42%_58%/49%_50%_50%_51%] bg-[#ffcc00]" />
            <div className="relative mx-auto aspect-[4/5] w-[78%] overflow-hidden rounded-[46%_54%_44%_56%/44%_45%_55%_56%] shadow-2xl">
              <Image
                src="/crown-hero-classroom.png"
                alt="Giảng viên và học viên Crown English trong lớp học"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 82vw"
                className="object-cover"
              />
            </div>

            <div className="absolute left-0 top-[25%] rounded-2xl bg-white px-4 py-3 shadow-xl">
              <p className="text-xs font-bold text-[#5f6275]">Kinh nghiệm</p>
              <p className="text-3xl font-black text-[#ffcc00]">5+ năm</p>
            </div>
            <div className="absolute bottom-[16%] left-6 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <p className="text-xs font-bold text-[#5f6275]">Học viên</p>
              <p className="text-3xl font-black text-[#ffcc00]">500+</p>
            </div>
            <div className="absolute bottom-[23%] right-0 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <p className="text-xs font-bold text-[#5f6275]">Hài lòng</p>
              <p className="text-3xl font-black text-[#ffcc00]">90%</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="khoa-hoc" className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Khóa học"
            title="Chọn đúng khóa học cho mục tiêu của bạn"
            description="Các chương trình được thiết kế theo trình độ đầu vào, mục tiêu đầu ra và nhịp học thực tế của từng học viên."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {courses.map((course, index) => (
              <article
                key={course.title}
                className="group rounded-[24px] border border-[#f0e6dd] bg-[#fffaf6] p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-[#ffcc00] text-xl font-black text-[#202135]">
                    {index + 1}
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#c8102e]">
                    {course.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#202135]">{course.title}</h3>
                <p className="mt-4 leading-7 text-[#5f6275]">{course.description}</p>
                <Link
                  href={`/khoa-hoc/${course.slug}`}
                  className="mt-7 inline-flex font-black text-[#202135] transition group-hover:text-[#c8102e]"
                >
                  Xem chi tiết
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="lo-trinh" className="bg-[#fff8f3] py-24">
        <Container>
          <SectionHeading
            eyebrow="Lộ trình"
            title="Từ kiểm tra đầu vào đến theo dõi đầu ra"
            description="Mỗi học viên có một điểm xuất phát khác nhau, vì vậy Crown ưu tiên một lộ trình học dễ hiểu, đo được và có người đồng hành."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roadmap.map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-[#f1e4dc] bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#ffcc00]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-2xl font-black text-[#202135]">{step}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="cam-ket" className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-[#ffcc00]">
              Cam kết
            </p>
            <h2 className="text-4xl font-black leading-tight text-[#202135] sm:text-5xl">
              Không chỉ học để thi, mà học để dùng được tiếng Anh thật sự
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f6275]">
              Crown tập trung vào sự tiến bộ có thể nhìn thấy: học viên biết
              mình đang yếu ở đâu, cần làm gì tiếp theo và được hỗ trợ xuyên
              suốt lộ trình.
            </p>
            <Link
              href="/lien-he"
              className="mt-8 inline-flex rounded-full bg-[#202135] px-8 py-4 font-black text-white transition hover:-translate-y-1"
            >
              Nhận tư vấn lộ trình
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-[#f0e6dd] bg-[#fffaf6] p-6"
              >
                <span className="mb-5 block h-2 w-12 rounded-full bg-[#ffcc00]" />
                <p className="text-lg font-black leading-7 text-[#202135]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="hoc-vien" className="bg-[#fff8f3] py-24">
        <Container>
          <SectionHeading
            eyebrow="Học viên"
            title="Feedback thật từ hành trình học thật"
            description="Các review dưới đây là khung nội dung mẫu để bạn thay bằng ảnh chụp feedback, thành tích và câu chuyện học viên thực tế."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[24px] border border-[#f0e6dd] bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-full bg-[#ffcc00] text-xl font-black text-[#202135]">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-black text-[#202135]">{review.name}</h3>
                    <p className="text-sm font-bold text-[#c8102e]">{review.role}</p>
                  </div>
                </div>
                <p className="text-lg leading-8 text-[#5f6275]">“{review.quote}”</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="giang-vien" className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Giảng viên"
            title="Đội ngũ đồng hành sát sao với từng học viên"
            description="Layout này có thể dùng cho một founder chính hoặc mở rộng thành nhiều giảng viên khi trung tâm có thêm hồ sơ chi tiết."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {teachers.map((teacher) => (
              <article
                key={teacher.name}
                className="grid gap-6 rounded-[28px] border border-[#f0e6dd] bg-[#fffaf6] p-7 sm:grid-cols-[140px_1fr] sm:items-center"
              >
                <div className="grid aspect-square place-items-center rounded-[32px] bg-[#202135] text-5xl font-black text-[#ffcc00]">
                  {teacher.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#c8102e]">
                    {teacher.role}
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-[#202135]">
                    {teacher.name}
                  </h3>
                  <p className="mt-4 leading-7 text-[#5f6275]">
                    {teacher.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="lien-he" className="bg-[#202135] py-24 text-white">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.42em] text-[#ffcc00]">
              Liên hệ
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Sẵn sàng bắt đầu lộ trình tiếng Anh của bạn?
            </h2>
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-black uppercase tracking-[0.42em] text-[#ffcc00]">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black leading-tight text-[#202135] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[#5f6275]">{description}</p>
    </div>
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
