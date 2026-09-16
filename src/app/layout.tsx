import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crown English | Trung tâm tiếng Anh",
  description:
    "Học IELTS và tiếng Anh giao tiếp theo lộ trình phù hợp với trình độ của bạn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `(function(){var t;try{t=localStorage.getItem("crown-theme")}catch(e){}document.documentElement.dataset.theme=t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"})()` }} /></head>
      <body><div className="site-background" aria-hidden="true" /><div className="site-content">{children}</div></body>
    </html>
  );
}
