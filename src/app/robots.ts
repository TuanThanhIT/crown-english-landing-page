import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://crown-english-landing-page.vercel.app";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
};

export default robots;
