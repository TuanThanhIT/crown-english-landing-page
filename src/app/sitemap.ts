import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { Course } from "@/types/courses";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://crown-english-landing-page.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/khoa-hoc`,
    },
    {
      url: `${baseUrl}/cam-ket`,
    },
    {
      url: `${baseUrl}/lien-he`,
    },
  ];

  const coursePages: MetadataRoute.Sitemap = courses.map((course: Course) => ({
    url: `${baseUrl}/khoa-hoc/${course.slug}`,
  }));

  return [...staticPages, ...coursePages];
}
