import type { CourseCommitment } from "@/types/commitments";

export const commitmentPage = {
  eyebrow: "Cam kết tại Crown",
  title: "Mục tiêu rõ ràng, đồng hành đến đầu ra",
  description:
    "Mỗi khóa học có chuẩn đầu ra và cách đánh giá phù hợp. Crown theo sát tiến độ, phản hồi bài tập và hỗ trợ học viên trên từng chặng đường học tập.",
  coursesTitle: "Cam kết theo từng khóa học",
  coursesDescription:
    "Chọn chương trình để tìm hiểu mốc đầu ra, cách đánh giá và chính sách hỗ trợ khi chưa đạt mục tiêu.",
  assessmentLabel: "Cách đánh giá",
  supportLabel: "Hỗ trợ khi chưa đạt",
  courseLinkLabel: "Xem chi tiết khóa học →",
  conditionsEyebrow: "Cùng nhau thực hiện",
  conditionsTitle: "Điều kiện áp dụng cam kết",
  conditionsDescription:
    "Học viên cần duy trì đầy đủ các điều kiện dưới đây trong suốt khóa học để được áp dụng chính sách cam kết đầu ra.",
  qualityTitle: "Chất lượng giảng dạy & tiến độ học tập",
  ctaTitle: "Hiểu rõ đầu ra trước khi bắt đầu",
  ctaDescription:
    "Trao đổi với Crown về trình độ hiện tại, mục tiêu và lịch học để chọn khóa học cùng mức cam kết phù hợp.",
  cta: { label: "Tư vấn mục tiêu đầu ra", href: "/lien-he" },
};

// IELTS và giao tiếp: theo hai ảnh cam kết đầu ra do người dùng cung cấp.
// IELTS 1:1: kế thừa các mốc và chính sách trong brochure 1:1 đã cung cấp.
// TOEIC: nội dung biên soạn bổ sung theo yêu cầu; mục tiêu cụ thể được thống nhất
// khi đăng ký, không xem dải điểm của lộ trình là mức điểm bảo đảm cho mọi học viên.
export const courseCommitments: CourseCommitment[] = [
  {
    slug: "ielts",
    title: "IELTS",
    tag: "Đầu ra theo từng cấp độ",
    description:
      "Xây nền vững chắc và phát triển bốn kỹ năng với các mốc điểm cam kết tương ứng từng lớp học.",
    outcomes: [
      { label: "Foundation", value: "3.5+" },
      { label: "Newbie", value: "5.0+" },
      { label: "Advance", value: "6.0+" },
    ],
    assessment:
      "Căn cứ kết quả thi IELTS chính thức từ IDP hoặc British Council để đối chiếu với mức đầu ra đã cam kết.",
    support:
      "Học viên đáp ứng điều kiện nhưng chưa đạt đầu ra được đào tạo tiếp 24 buổi cùng lớp nhóm cường độ cao để chuẩn bị thi lại.",
    note:
      "Thời gian từ khi có kết quả thi đến khi học tiếp không quá 30 ngày. Với Intensive, mục tiêu và chính sách áp dụng được trao đổi riêng khi đăng ký.",
  },
  {
    slug: "giao-tiep-phan-xa",
    title: "Giao tiếp phản xạ",
    tag: "Năng lực sử dụng thực tế",
    description:
      "Cam kết khả năng nói, phản xạ và sử dụng từ vựng, cấu trúc phù hợp với cấp độ trong các tình huống giao tiếp thực tế.",
    outcomes: [
      { label: "Sơ cấp", value: "A2" },
      { label: "Trung cấp", value: "B1" },
      { label: "Cao cấp", value: "B2" },
    ],
    assessment:
      "Đánh giá theo khung CEFR, gắn trực tiếp với khả năng giao tiếp: nói được, phản xạ được và dùng đúng từ vựng, cấu trúc ở cấp độ đã học.",
    support:
      "Nếu học viên đáp ứng điều kiện nhưng chưa đạt, Crown tiếp tục hỗ trợ cho đến khi đạt chuẩn đầu ra của khóa học.",
    note:
      "Cam kết dựa trên năng lực giao tiếp thực tế, không phải cam kết cấp chứng chỉ. Các mốc A2, B1, B2 là chuẩn cam kết của chương trình.",
  },
  {
    slug: "toeic",
    title: "TOEIC",
    tag: "Mục tiêu theo năng lực đầu vào",
    description:
      "Xác định mục tiêu phù hợp sau kiểm tra đầu vào, củng cố nền tảng và cải thiện kỹ năng làm bài theo từng chặng.",
    outcomes: [
      { label: "Nền tảng 1 & 2", value: "Vững kiến thức cơ bản" },
      { label: "Lộ trình luyện thi", value: "400 – 650+" },
      { label: "Lộ trình nâng cao", value: "600 – 800+" },
    ],
    assessment:
      "Theo dõi qua bài tập, bài kiểm tra định kỳ và bài đánh giá cuối khóa. Mức điểm cam kết và cách xác nhận kết quả được thống nhất theo trình độ đầu vào khi đăng ký.",
    support:
      "Khi học viên đáp ứng điều kiện nhưng chưa đạt mục tiêu đã thống nhất, Crown rà soát điểm yếu, điều chỉnh nội dung ôn tập và hỗ trợ luyện tập bổ sung theo kế hoạch của khóa học.",
    note:
      "400–650+ và 600–800+ là dải điểm của lộ trình. Mức cam kết cá nhân, thời lượng và hình thức hỗ trợ được xác định khi đăng ký.",
  },
  {
    slug: "kem-1-1-ca-nhan-hoa",
    title: "IELTS kèm 1:1",
    tag: "Theo sát mục tiêu cá nhân",
    description:
      "Kết hợp chuẩn đầu ra IELTS với kế hoạch học cá nhân, tập trung vào kỹ năng cần cải thiện và tiến độ của từng học viên.",
    outcomes: [
      { label: "Foundation", value: "3.5+" },
      { label: "Newbie", value: "5.0+" },
      { label: "Advance", value: "6.0+" },
    ],
    assessment:
      "Theo dõi bài tập và mức tiến bộ từng kỹ năng trong quá trình học; đối chiếu đầu ra với kết quả thi IELTS chính thức từ IDP hoặc British Council.",
    support:
      "Học viên đáp ứng điều kiện nhưng có kết quả thi chưa đạt cam kết được học tiếp 24 buổi cùng lớp nhóm cường độ cao để chuẩn bị thi lại.",
    note:
      "Bắt đầu học tiếp trong vòng 30 ngày từ khi có kết quả. Chính sách hỗ trợ là lớp nhóm; mục tiêu Intensive được thống nhất riêng theo kế hoạch cá nhân.",
  },
];

export const commitmentConditions = [
  {
    title: "Hoàn thành bài tập",
    description: "Hoàn thành trên 95% bài tập được giao trong khóa học.",
  },
  {
    title: "Duy trì chuyên cần",
    description: "Không nghỉ quá 2 buổi mỗi tháng để đảm bảo tiến độ học tập.",
  },
  {
    title: "Phản hồi hỗ trợ",
    description: "Phản hồi tin nhắn hỗ trợ từ đội ngũ Admin trong quá trình học.",
  },
  {
    title: "Đảm bảo thời gian học",
    description: "Không bảo lưu quá 30–40 ngày mỗi khóa theo điều kiện chương trình.",
  },
];

export const commitmentValues = [
  {
    title: "Cam kết về chất lượng",
    description:
      "Thực hiện đúng nội dung giảng dạy, chính sách và sự tận tâm của đội ngũ giáo viên như đã giới thiệu với học viên.",
  },
  {
    title: "Cam kết về tiến độ",
    description:
      "Theo dõi quá trình học liên tục thông qua hệ thống bài tập, phản hồi và hỗ trợ kịp thời để học viên tiến đến đầu ra mong muốn.",
  },
];
