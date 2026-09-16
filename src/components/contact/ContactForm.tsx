"use client";

import { useRef, useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-2xl border border-line bg-surface px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

export function ContactForm({ courses, initialCourse = "" }: { courses: string[]; initialCourse?: string }) {
  const sending = useRef(false);
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null,
  );

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    sending.current = true;
    setPending(true);
    setResult(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data.error || "Chưa gửi được thông tin. Vui lòng thử lại sau.",
        );
      setResult({
        ok: true,
        message:
          "Gửi thông tin thành công! Crown English sẽ liên hệ để tư vấn cho bạn.",
      });
      form.reset();
    } catch (error) {
      setResult({
        ok: false,
        message:
          error instanceof Error && error.message !== "Failed to fetch"
            ? error.message
            : "Không thể kết nối. Vui lòng thử lại hoặc gọi 0898 192 633.",
      });
    } finally {
      sending.current = false;
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="contact-form rounded-[28px] bg-surface p-6 text-foreground shadow-2xl sm:p-8"
      aria-busy={pending}
    >
      <h2 className="text-2xl font-black">Nhận tư vấn khóa học</h2>
      <p className="mt-2 mb-6 text-sm text-muted">
        Các trường có dấu * là bắt buộc.
      </p>
      <fieldset disabled={pending} className="grid gap-5 disabled:opacity-70">
        <div className="grid gap-5 sm:grid-cols-2">
          <label>
            <span className="mb-2 block text-sm font-bold">Họ và tên *</span>
            <input
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              placeholder="Nguyễn Văn A"
              className={inputClass}
            />
          </label>
          <label>
            <span className="mb-2 block text-sm font-bold">
              Số điện thoại *
            </span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              minLength={8}
              maxLength={25}
              placeholder="0898 192 633"
              className={inputClass}
            />
          </label>
        </div>
        <label>
          <span className="mb-2 block text-sm font-bold">Email *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="ban@example.com"
            className={inputClass}
          />
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold">
            Khóa học quan tâm
          </span>
          <select name="course" defaultValue={initialCourse} className={inputClass}>
            <option value="">Tôi cần tư vấn thêm</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold">
            Nội dung cần tư vấn *
          </span>
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={5}
            placeholder="Chia sẻ trình độ hiện tại, mục tiêu và thời gian bạn có thể học…"
            className={`${inputClass} resize-y`}
          />
        </label>
        <div hidden aria-hidden="true">
          <label>
            Website
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              maxLength={200}
            />
          </label>
        </div>
        <p className="text-xs leading-5 text-muted">
          Khi gửi, bạn đồng ý để Crown English liên hệ qua thông tin đã cung cấp
          nhằm tư vấn khóa học.
        </p>
        <button
          type="submit"
          className="w-full rounded-full brand-panel bg-primary px-8 py-4 font-black text-foreground transition hover:bg-primary-hover disabled:cursor-wait cursor-pointer"
        >
          {pending ? "Đang gửi…" : "Gửi thông tin tư vấn →"}
        </button>
      </fieldset>
      <div aria-live="polite" role="status">
        {result && (
          <p
            className={`mt-4 rounded-xl p-4 text-sm ${result.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            {result.message}
          </p>
        )}
      </div>
    </form>
  );
}
