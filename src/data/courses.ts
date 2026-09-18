import type { Course } from "@/types/courses";

// Nguồn: ba brochure Crown do người dùng cung cấp và ảnh lộ trình TOEIC.
// IELTS nhóm và IELTS 1:1 có số buổi, mức điểm và học phí riêng.
export const courses: Course[] = [
  {
    slug: "ielts",
    title: "IELTS",
    tag: "0 – 7.5+",
    description:
      "Từ xây nền ngữ pháp đến luyện đề chuyên sâu, phát triển đủ bốn kỹ năng qua Foundation, Newbie, Advance và Intensive.",
    suitableFor:
      "Người mới bắt đầu, chưa từng học IELTS hoặc muốn nâng band theo trình độ hiện tại.",
    summary: "4 cấp độ · 24–32 buổi/cấp độ",
    formats: [
      {
        label: "Standard",
        value:
          "12–13 học viên/lớp, 1,5 giờ/buổi. Học viên chủ động luyện tập và theo sát hướng dẫn của giáo viên.",
      },
      {
        label: "Premium",
        value:
          "2 giờ/buổi, tăng thời gian tương tác và thực hành Speaking, lấy học viên làm trung tâm.",
      },
      {
        label: "Chương trình",
        value:
          "Standard và Premium cùng lộ trình, giáo án và quyền lợi đảm bảo đầu ra tương đương.",
      },
    ],
    stages: [
      {
        title: "Foundation",
        target: "0 – 3.5+",
        duration: "24 buổi · 3 tháng",
        suitableFor: "Chưa vững ngữ pháp cơ bản hoặc cần xây lại nền tảng.",
        content: [
          "Dành 60–70% nội dung cho ngữ pháp, từ cơ bản đến nâng cao và các thì dùng trong IELTS, TOEIC.",
          "Tích hợp từ vựng A1–A2, Listening nền tảng và đọc hiểu bài văn ngắn.",
          "Luyện phát âm, Speaking và vận dụng ngữ pháp để phát triển câu đơn, câu phức.",
        ],
        fees: [
          {
            label: "Standard",
            value: "2.400.000đ/khóa",
          },
          {
            label: "Premium",
            value: "5.900.000đ/khóa",
          },
        ],
      },
      {
        title: "Newbie",
        target: "3.5 – 5.0+",
        duration: "24 buổi · 3 tháng",
        suitableFor: "Có nền ngữ pháp nhưng chưa từng học hoặc thi IELTS.",
        content: [
          "Làm quen cấu trúc đề và thực hành đủ Nghe, Nói, Đọc, Viết với hướng dẫn bằng tiếng Việt.",
          "Học phương pháp làm bài theo từng dạng nhỏ và mở rộng từ vựng học thuật.",
          "Tập viết từ từng câu đến đoạn văn và bài luận hoàn chỉnh.",
        ],
        fees: [
          {
            label: "Standard",
            value: "2.400.000đ/khóa",
          },
          {
            label: "Premium",
            value: "5.900.000đ/khóa",
          },
        ],
      },
      {
        title: "Advance",
        target: "5.0 – 6.5+",
        duration: "32 buổi · 4 tháng",
        suitableFor:
          "Đã học hoặc thi IELTS, nắm cấu trúc bốn kỹ năng và viết được Writing Task 1 hoàn chỉnh.",
        content: [
          "Luyện đề thực chiến theo ngân hàng đề Bank Test để làm quen độ khó phòng thi.",
          "Phát triển ý tưởng, luyện Writing theo chủ đề và nâng kỹ năng Writing Task 2.",
          "Luyện Speaking theo chủ đề, mở rộng từ vựng, tăng phản xạ và độ trôi chảy.",
        ],
        fees: [
          {
            label: "Standard",
            value: "3.200.000đ/khóa",
          },
          {
            label: "Premium",
            value: "7.900.000đ/khóa",
          },
        ],
      },
      {
        title: "Intensive",
        target: "6.0 – 7.5+",
        duration: "32 buổi",
        suitableFor:
          "Nắm vững cấu trúc IELTS bốn kỹ năng và hướng đến band 7.0+.",
        content: [
          "Luyện thi chuyên sâu, mô phỏng thi thực và kiểm tra trình độ định kỳ.",
          "Thực hành với bộ đề Actual Tests và được hỗ trợ chấm bài ngoài giờ học.",
          "Có chính sách thưởng hoàn học phí khi đạt mục tiêu theo điều kiện chương trình.",
        ],
        fees: [
          {
            label: "Standard",
            value: "3.200.000đ/khóa",
          },
          {
            label: "Premium",
            value: "8.900.000đ/khóa",
          },
        ],
      },
    ],
    notes: [
      "Học phí theo brochure; liên hệ Crown để xác nhận lớp và chính sách áp dụng khi đăng ký.",
      "Chính sách thưởng Intensive trong brochure: đạt 7.0 hoàn 20% học phí; 7.5 hoàn 50%; 8.0 hoàn 100%; 8.5 hoàn 100% học phí và lệ phí thi. Áp dụng theo điều kiện chương trình; cần xác nhận gói học đủ điều kiện với trung tâm.",
    ],
  },
  {
    slug: "giao-tiep-phan-xa",
    title: "Giao tiếp phản xạ",
    tag: "A1 – C1",
    description:
      "Luyện phát âm, ngữ điệu và phản xạ qua tình huống đời sống, từ giao tiếp cơ bản đến thảo luận và tranh luận chuyên sâu.",
    suitableFor:
      "Người mất gốc, muốn tự tin giao tiếp hằng ngày hoặc nâng cao phản xạ và vốn từ.",
    summary: "3 cấp độ · 24 buổi/khóa",
    formats: [
      {
        label: "Standard",
        value:
          "5–7 học viên/lớp, 24 buổi trong 3 tháng; 2 buổi/tuần, 1,5 giờ/buổi. Học phí 3.000.000đ/khóa.",
      },
      {
        label: "Kèm 1:1",
        value:
          "24 buổi/khóa, thời gian chuẩn 3 tháng; 1 giờ/buổi, số buổi mỗi tuần tùy chọn. Liên hệ tư vấn học phí.",
      },
      {
        label: "Phương pháp",
        value:
          "Dùng tối đa tiếng Anh trong lớp, kết hợp hỗ trợ song ngữ; tập trung Listening và Speaking qua tình huống, tương tác và thảo luận.",
      },
      {
        label: "Hình thức",
        value:
          "Có lựa chọn học online hoặc offline; trao đổi với trung tâm để chọn lịch phù hợp.",
      },
    ],
    stages: [
      {
        title: "Elementary",
        target: "A1 – A2",
        suitableFor: "Mất gốc hoặc chưa nắm tiếng Anh cơ bản.",
        content: [
          "Học lại phát âm IPA và từ vựng cơ bản.",
          "Ghép từ thành câu, phát triển từ câu đơn đến câu phức.",
          "Xây nền giao tiếp để diễn đạt những nội dung quen thuộc.",
        ],
      },
      {
        title: "Pre-advance",
        target: "A2 – B1+",
        suitableFor: "Đã có nền tiếng Anh và muốn cải thiện giao tiếp.",
        content: [
          "Thực hành chủ đề cuộc sống hằng ngày kết hợp các tình huống giả định.",
          "Tăng tương tác, nâng phản xạ và sử dụng từ vựng phong phú hơn.",
          "Lấy tiếng Anh làm ngôn ngữ chủ đạo trong lớp với hỗ trợ song ngữ.",
        ],
      },
      {
        title: "Advance",
        target: "B1 – C1",
        suitableFor: "Giao tiếp tốt, muốn phản xạ nhanh và nâng cao vốn từ.",
        content: [
          "Rèn phản xạ nhanh nhạy và cách diễn đạt linh hoạt.",
          "Luyện IPA xuyên suốt, chỉnh phát âm và ngữ điệu.",
          "Thảo luận, tranh luận các vấn đề con người và xã hội để mở rộng kiến thức, từ vựng nâng cao.",
        ],
      },
    ],
    notes: [
      "Các mức A1–C1 thể hiện lộ trình trong brochure. Trung tâm tư vấn cấp độ phù hợp với năng lực hiện tại.",
      "Học phí Standard theo brochure: 3.000.000đ cho khóa 24 buổi/3 tháng.",
    ],
  },
  {
    slug: "toeic",
    title: "TOEIC",
    tag: "Nền tảng – 800+",
    description:
      "Củng cố nền tảng bốn kỹ năng, làm quen từng phần đề TOEIC và luyện đề để cải thiện điểm yếu, tối đa hóa điểm số.",
    suitableFor:
      "Người mới bắt đầu, mất gốc hoặc cần điểm TOEIC phục vụ học tập và công việc.",
    summary: "4 chặng · 24–36 buổi/chặng",
    formats: [
      {
        label: "Lộ trình",
        value:
          "Bắt đầu từ nền tảng hoặc chặng luyện TOEIC phù hợp với trình độ hiện tại.",
      },
      {
        label: "Học phí và lịch học",
        value:
          "Liên hệ Crown để được tư vấn học phí, hình thức lớp và lịch khai giảng.",
      },
    ],
    stages: [
      {
        title: "Nền tảng 1",
        target: "Xây nền",
        duration: "24 buổi",
        suitableFor: "Người mới bắt đầu hoặc mất gốc.",
        content: ["Học nền tảng bốn kỹ năng Nghe, Nói, Đọc, Viết."],
      },
      {
        title: "Nền tảng 2",
        target: "Củng cố nền tảng",
        duration: "24 buổi",
        suitableFor: "Người cần cải thiện nền tảng tiếng Anh.",
        content: ["Học bốn kỹ năng qua giao tiếp và luyện phản xạ."],
      },
      {
        title: "TOEIC 400 – 650+",
        target: "400 – 650+",
        duration: "24 buổi",
        suitableFor: "Người chưa từng tiếp xúc với TOEIC.",
        content: [
          "Luyện tập từng phần để hiểu dạng bài.",
          "Phát triển kỹ năng làm bài TOEIC.",
        ],
      },
      {
        title: "TOEIC 600 – 800+",
        target: "600 – 800+",
        duration: "36 buổi",
        suitableFor: "Học viên chuyển sang giai đoạn luyện đề và nâng điểm.",
        content: [
          "Luyện đề thi dự báo và sửa các lỗi sai thường gặp.",
          "Cải thiện điểm yếu để tối đa hóa điểm số.",
        ],
      },
    ],
    notes: [],
  },
  {
    slug: "kem-1-1-ca-nhan-hoa",
    title: "IELTS kèm 1:1",
    tag: "Lộ trình cá nhân",
    description:
      "Học IELTS theo hình thức kèm riêng, từ Foundation đến Intensive, với tiến độ linh hoạt và nội dung phù hợp từng giai đoạn.",
    suitableFor:
      "Học viên muốn được kèm sát, chủ động lịch học và tập trung vào mục tiêu IELTS cá nhân.",
    summary: "4 cấp độ · 20-28 buổi/cấp độ",
    formats: [
      {
        label: "Hình thức",
        value:
          "Kèm 1:1, có thể kết hợp học lớp nhóm trước rồi chuyển sang kèm riêng để tối ưu chi phí.",
      },
      {
        label: "Tiến độ",
        value:
          "Lịch chuẩn 2 buổi/tuần; có thể học 3–4 buổi/tuần để đẩy nhanh tiến độ.",
      },
      {
        label: "Khung giờ",
        value: "Học phí phân theo lịch trước 18:00 và sau 18:00.",
      },
    ],
    stages: [
      {
        title: "Foundation",
        target: "0 – 3.0",
        duration: "20 buổi",
        suitableFor: "Cần xây nền ngữ pháp và tiếng Anh cơ bản.",
        content: [
          "Tập trung 60–70% thời lượng cho ngữ pháp và các thì dùng trong IELTS, TOEIC.",
          "Tích hợp từ vựng A1–A2 qua bài tập ngữ pháp và luyện nghe Basic IELTS.",
          "Luyện ghép câu đơn, câu phức và vận dụng ngữ pháp, từ vựng vào Speaking.",
        ],
        fees: [
          {
            label: "Trước 18:00",
            value: "12.000.000đ/khóa",
          },
          {
            label: "Sau 18:00",
            value: "13.000.000đ/khóa",
          },
        ],
      },
      {
        title: "Newbie",
        target: "3.0 – 5.0",
        duration: "22 buổi",
        suitableFor: "Có nền ngữ pháp, bắt đầu luyện IELTS.",
        content: [
          "Thực hành từng dạng bài Listening, Reading, Writing và Speaking; học cách làm bài theo tiêu chí chấm điểm.",
          "Mở rộng từ vựng học thuật và từ đồng nghĩa cho Speaking, Writing.",
          "Viết từ câu đến đoạn và Writing Task 1 hoàn chỉnh; luyện nói theo chủ đề.",
        ],
        fees: [
          {
            label: "Trước 18:00",
            value: "13.000.000đ/khóa",
          },
          {
            label: "Sau 18:00",
            value: "14.300.000đ/khóa",
          },
        ],
      },
      {
        title: "Advance",
        target: "5.0 – 6.5",
        duration: "24 buổi",
        suitableFor: "Đã học IELTS và muốn luyện đề chuyên sâu.",
        content: [
          "Luyện tài liệu Cambridge và Bank Test để cọ xát độ khó phòng thi.",
          "Xây dựng ý, triển khai luận điểm và luyện 12 dạng Writing Task 2.",
          "Luyện Speaking theo đề dự báo, tăng phản xạ, độ trôi chảy và mạch lạc; luyện nghe, đọc để tăng tốc độ làm bài.",
        ],
        fees: [
          {
            label: "Trước 18:00",
            value: "14.400.000đ/khóa",
          },
          {
            label: "Sau 18:00",
            value: "15.600.000đ/khóa",
          },
        ],
      },
      {
        title: "Intensive",
        target: "6.5 – 7.5",
        duration: "28 buổi",
        suitableFor:
          "Hướng đến band cao, cần hoàn thiện kỹ năng và chiến lược làm bài.",
        content: [
          "Luyện Writing Task 1 và Task 2: tư duy phản biện, phân tích số liệu, lập luận và diễn đạt học thuật.",
          "Mock test Speaking, tập trung độ trôi chảy, mạch lạc, từ vựng, phát âm và xử lý câu hỏi khó.",
          "Luyện full test Cambridge, Actual Tests; quản lý thời gian, xử lý các dạng khó và sửa lỗi ngữ pháp thường gặp.",
        ],
        fees: [
          {
            label: "Trước 18:00",
            value: "16.500.000đ/khóa",
          },
          {
            label: "Sau 18:00",
            value: "18.200.000đ/khóa",
          },
        ],
      },
    ],
    notes: [
      "Mức điểm và học phí từng cấp độ ở trên theo bảng học phí riêng của brochure 1:1.",
      "Brochure ghi cam kết đầu ra Foundation 3.5+, Newbie 5.0+, Advance 6.0+; đây là các mốc cam kết riêng với dải điểm trong bảng học phí.",
      "Điều kiện cam kết: hoàn thành trên 95% bài tập, không nghỉ quá 2 buổi/tháng, phản hồi tin nhắn hỗ trợ và không bảo lưu quá 30–40 ngày/khóa.",
      "Nếu có kết quả thi chính thức từ IDP/BC chưa đạt cam kết, học viên đủ điều kiện được học tiếp 24 buổi lớp nhóm cường độ cao; thời gian từ khi có kết quả đến học tiếp không quá 30 ngày.",
      "Chính sách thưởng Intensive trong brochure: 7.0 hoàn 20% học phí; 7.5 hoàn 50%; 8.0 hoàn 100%; 8.5 hoàn 100% học phí và lệ phí thi. Liên hệ Crown xác nhận điều kiện áp dụng khi đăng ký.",
    ],
  },
];
