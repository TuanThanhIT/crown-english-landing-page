import { courses } from "./courses";

export const navigationItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Khóa học", href: "/khoa-hoc" },
  { label: "Cam kết", href: "/cam-ket" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const courseMenuItems = courses.map((course) => ({
  label: course.title,
  href: `/khoa-hoc/${course.slug}`,
  description: course.description,
}));
