export type CourseStage = {
  title: string;
  target: string;
  duration?: string;
  suitableFor: string;
  content: string[];
  fees?: { label: string; value: string }[];
};

export type Course = {
  slug: string;
  aliases?: string[];
  title: string;
  tag: string;
  description: string;
  suitableFor: string;
  summary: string;
  formats: { label: string; value: string }[];
  stages: CourseStage[];
  notes: string[];
};
