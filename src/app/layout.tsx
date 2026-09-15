import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crown English",
  description:
    "Học IELTS và tiếng Anh giao tiếp theo lộ trình phù hợp với trình độ của bạn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
