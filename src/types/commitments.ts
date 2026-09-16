export type CourseCommitment = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  outcomes: { label: string; value: string }[];
  assessment: string;
  support: string;
  note?: string;
};
