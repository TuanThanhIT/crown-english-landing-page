import { courses } from "./courses";

export const homeHero = {
  eyebrow: "IELTS • Giao tiếp • TOEIC • Kèm 1:1",
  title: "Học tiếng Anh theo lộ trình có người theo sát.",
  description:
    "Crown English giúp học viên bắt đầu từ test đầu vào, học theo mục tiêu rõ ràng và nhận feedback liên tục để tiến bộ trong IELTS, giao tiếp thực tế và TOEIC.",
  primaryCta: {
    label: "Đăng ký học thử",
    href: "/lien-he",
  },
  secondaryCta: {
    label: "Khám phá khóa học",
    href: "/khoa-hoc",
  },
  image: {
    src: "/images/crown-hero-classroom.png",
    alt: "Lớp học Crown English",
  },
  imageEyebrow: "English as a Lifestyle",
  imageCaption: "Học để dùng được tiếng Anh trong lớp, công việc và đời sống.",
};

export const homePrograms = [
  {
    title: "IELTS",
    description: "Online / Offline / Hybrid",
    href: "/khoa-hoc/ielts",
  },
  {
    title: "IELTS Mentor 1–1",
    description: "",
    href: "/khoa-hoc/kem-1-1-ca-nhan-hoa",
  },
  {
    title: "Giao tiếp",
    description: "Daily topics / Business English",
    href: "/khoa-hoc/giao-tiep-phan-xa",
  },
];
export const homeStats = [
  { value: "5+", label: "năm kinh nghiệm" },
  { value: "500+", label: "học viên đạt aim" },
  { value: "5K", label: "học viên thích và phản hồi tích cực" },
  { value: "100K/buổi", label: "học phí chỉ từ" },
];

export const homeFeatureSection = {
  eyebrow: "Cách Crown vận hành",
  title: "Một hệ học gọn, rõ, đo được",
  description:
    "Mỗi học viên bắt đầu từ đánh giá đầu vào, học theo lộ trình rõ ràng và được theo dõi tiến độ xuyên suốt để biết mình đang cải thiện ở đâu.",
};

export const homeFeatures = [
  {
    number: "01",
    title: "Test đầu vào",
    description:
      "Xác định năng lực hiện tại, mục tiêu và điểm cần ưu tiên trước khi vào lớp.",
  },
  {
    number: "02",
    title: "Lộ trình cá nhân",
    description:
      "Thiết kế hướng học theo IELTS, giao tiếp, TOEIC hoặc lớp kèm 1:1.",
  },
  {
    number: "03",
    title: "Luyện tập thực chiến",
    description:
      "Học theo module, luyện tình huống thật, chữa lỗi Speaking - Writing sát sao.",
  },
  {
    number: "04",
    title: "Theo dõi tiến độ",
    description:
      "Homework plan, nhắc bài và phản hồi từ giáo viên/admin trong suốt khóa học.",
  },
  {
    number: "05",
    title: "Cam kết rõ điều kiện",
    description:
      "Đầu ra được trình bày minh bạch để học viên hiểu đúng trách nhiệm hai bên.",
  },
  {
    number: "06",
    title: "Hỗ trợ sau khóa",
    description:
      "Học viên đủ điều kiện được tiếp tục hỗ trợ theo chính sách của trung tâm.",
  },
];

export const homeCoursesSection = {
  eyebrow: "Khóa học",
  title: "Các chương trình chính tại Crown",
  description:
    "Khám phá IELTS, giao tiếp phản xạ, TOEIC và IELTS kèm 1:1. Mỗi chương trình có cấp độ, hình thức học và mục tiêu phù hợp với năng lực hiện tại của bạn.",
};

export const homeRoadmapSection = {
  eyebrow: "Lộ trình",
  title: "Chọn lộ trình phù hợp với trình độ và mục tiêu",
  description:
    "Từ nền tảng đến nâng cao, mỗi chương trình có các chặng học riêng. Crown tư vấn cấp độ bắt đầu phù hợp sau khi đánh giá năng lực của bạn.",
};

export const homeRoadmapGroups = courses.map((course) => ({
  title: course.title,
  href: `/khoa-hoc/${course.slug}`,
  description: course.description,
  stages: course.stages.map(({ title, target, duration }) => ({
    title,
    target,
    duration,
  })),
}));

export const homeCommitmentSection = {
  eyebrow: "Cam kết đầu ra",
  title: "Cam kết minh bạch, không nói mơ hồ",
  description:
    "Crown công khai rõ các điều kiện áp dụng để học viên và phụ huynh hiểu đúng phạm vi cam kết và trách nhiệm của hai bên trong suốt quá trình học.",
  conditionTitle: "Điều kiện áp dụng",
};

export const homeCommitmentConditions = [
  "Hoàn thành trên 95% bài tập được giao",
  "Không nghỉ quá 2 buổi mỗi tháng",
  "Rep tin nhắn hỗ trợ từ team Admin",
  "Không bảo lưu quá 30-40 ngày mỗi khóa",
];

export const homeFounder = {
  eyebrow: "Founder & Head Teacher",
  name: "Ms. Nhật Khanh",
  description:
    "Giáo viên IELTS & giao tiếp, tốt nghiệp RMIT University, hơn 5 năm giảng dạy và vận hành trung tâm.",
};

export const homeTeamSection = {
  eyebrow: "Đội ngũ",
  title: "Năng lượng lớp học đến từ người dạy theo sát",
  description:
    "Giáo viên tại Crown chú trọng sửa bài kỹ, giải thích dễ hiểu, theo sát tiến độ và tạo môi trường để học viên tự tin sử dụng tiếng Anh.",
};

export const homeTeacherStrengths = [
  "Chữa bài kỹ",
  "Feedback sau buổi học",
  "Lớp học dễ tương tác",
  "Homework plan rõ ràng",
];

export const homeFeedbackSection = {
  eyebrow: "Feedback",
  title: "Những điều học viên thường nhắc lại",
  description:
    "Chia sẻ từ học viên về tài liệu, bài giảng và sự hỗ trợ trong quá trình học.",
};

// Nội dung nguyên văn từ ảnh người dùng cung cấp; ảnh đại diện từ https://nhatkhanhielts.com/.
export const homeTestimonials = [
  {
    name: "Thảo Như",
    role: "Sinh viên",
    image: "/images/reviews/avatar-1.png",
    quote:
      "Dạ em cảm ơn chị, tài liệu đầy đủ dễ nhìn dễ đọc, bài giảng dễ hiểu và thực tế!",
  },
  {
    name: "Thanh Huyền",
    role: "Sinh viên",
    image: "/images/reviews/avatar-2.png",
    quote:
      "Chị giảng rất nhiệt tình, sửa bài tích cực, giúp em hiểu bài nhanh hơn!",
  },
  {
    name: "Nguyệt My",
    role: "Học sinh cấp 3",
    image: "/images/reviews/avatar-3.png",
    quote:
      "Em cảm ơn chị rất nhiều, khóa học giúp em cải thiện đáng kể kỹ năng!",
  },
];

export const homeFaqSection = {
  eyebrow: "FAQ",
  title: "Câu hỏi trước khi đăng ký",
  description:
    "Giải đáp những thắc mắc phổ biến về trình độ đầu vào, lộ trình học, cam kết đầu ra và hình thức học tại Crown English.",
};

export const homeFaqs = [
  {
    question: "Crown phù hợp với ai?",
    answer:
      "Học sinh, sinh viên và người đi làm cần IELTS, TOEIC, giao tiếp phản xạ hoặc lộ trình kèm riêng.",
  },
  {
    question: "Có cần biết trình độ trước khi đăng ký không?",
    answer:
      "Không cần. Crown bắt đầu bằng test đầu vào để tư vấn khóa và level phù hợp.",
  },
  {
    question: "Cam kết đầu ra áp dụng thế nào?",
    answer:
      "Cam kết đi kèm điều kiện học tập, bài tập, chuyên cần và thời gian bảo lưu theo chính sách trung tâm.",
  },
];

export const homeFinalCta = {
  eyebrow: "Sẵn sàng bắt đầu?",
  title: "Để Crown tư vấn lộ trình phù hợp với trình độ của bạn.",
  cta: {
    label: "Đăng ký tư vấn",
    href: "/lien-he",
  },
};
