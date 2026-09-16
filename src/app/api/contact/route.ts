import nodemailer from "nodemailer";
import { courseMenuItems } from "@/data/navigation";

export const runtime = "nodejs";

// Best-effort per-instance limit; shared deployments should use a shared limiter.
const attempts = new Map<string, { count: number; expires: number }>();

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Yêu cầu không hợp lệ." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Định dạng không hợp lệ." }, { status: 415 });
  }
  let data: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Missing body");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 20000) {
        await reader.cancel();
        return Response.json({ error: "Nội dung quá dài." }, { status: 413 });
      }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid body");
  } catch {
    return Response.json({ error: "Dữ liệu không hợp lệ." }, { status: 400 });
  }
  if (data.website) return Response.json({ ok: true });
  const field = (key: string) => typeof data[key] === "string" ? data[key].trim() : "";
  const name = field("name"), email = field("email"), phone = field("phone"), course = field("course"), message = field("message");
  if (name.length < 2 || name.length > 100 || /[\r\n]/.test(name) ||
      email.length > 254 || !/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/.test(email) ||
      !/^[+0-9(). -]{8,25}$/.test(phone) || phone.replace(/\D/g, "").length < 8 ||
      (course !== "" && !courseMenuItems.some((item) => item.label === course)) ||
      message.length < 10 || message.length > 3000) {
    return Response.json({ error: "Vui lòng kiểm tra họ tên, email, số điện thoại và nội dung (10–3.000 ký tự)." }, { status: 400 });
  }
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const key = email.toLowerCase();
  const limit = attempts.get(key) ?? { count: 0, expires: now + 15 * 60_000 };
  if (limit.count >= 3 || attempts.size >= 10000) {
    return Response.json({ error: "Bạn đã gửi nhiều lần. Vui lòng thử lại sau 15 phút hoặc gọi 0898 192 633." }, { status: 429, headers: { "Retry-After": "900" } });
  }
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.replace(/\s/g, "");
  if (!user || !pass) return Response.json({ error: "Chức năng gửi đang tạm gián đoạn. Vui lòng gọi 0898 192 633." }, { status: 503 });
  limit.count++;
  attempts.set(key, limit);
  const transporter = nodemailer.createTransport({
    service: "gmail", auth: { user, pass },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000,
  });
  try {
    await transporter.sendMail({
      from: { name: "Crown English Website", address: user },
      to: user,
      replyTo: { name, address: email },
      subject: `[Crown English] Yêu cầu tư vấn từ ${name}`,
      text: ["YÊU CẦU TƯ VẤN KHÓA HỌC", `Họ tên: ${name}`, `Email: ${email}`, `Điện thoại: ${phone}`, `Khóa học: ${course || "Cần tư vấn thêm"}`, "", "Nội dung:", message, "", "Bấm Trả lời để gửi phản hồi đến email khách hàng."].join("\n"),
      disableFileAccess: true, disableUrlAccess: true,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Chưa gửi được email. Vui lòng thử lại sau hoặc gọi 0898 192 633." }, { status: 502 });
  } finally {
    transporter.close();
  }
}
