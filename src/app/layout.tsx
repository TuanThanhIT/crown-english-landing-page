import type { Metadata } from "next";
import "./globals.css";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://crown-english-landing-page.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Crown English | Trung tâm tiếng Anh",
    template: "%s | Crown English",
  },

  description:
    "Học IELTS, TOEIC và tiếng Anh giao tiếp theo lộ trình phù hợp với trình độ tại Crown English.",

  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Crown English",

    title: "Crown English | Trung tâm tiếng Anh",

    description:
      "Học IELTS, TOEIC và tiếng Anh giao tiếp theo lộ trình phù hợp với trình độ tại Crown English.",

    url: baseUrl,
  },

  twitter: {
    card: "summary_large_image",
    title: "Crown English | Trung tâm tiếng Anh",
    description:
      "Học IELTS, TOEIC và tiếng Anh giao tiếp theo lộ trình phù hợp với trình độ tại Crown English.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t;try{t=localStorage.getItem("crown-theme")}catch(e){}document.documentElement.dataset.theme=t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"})()`,
          }}
        />
      </head>
      <body>
        <div className="site-background" aria-hidden="true" />
        <div className="site-content">
          {" "}
          <OrganizationJsonLd />
          {children}
        </div>
      </body>
    </html>
  );
}
