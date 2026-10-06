export const siteUrl = "https://universityyatra.com";

// Editorial guides adapted from the existing Study in India page; no invented publication dates.
export const posts = [
  {
    slug: "online-vs-on-campus-programs",
    title: "Online or on campus? Find your learning fit",
    category: "Study in India",
    description: "Compare learning formats, schedules, attendance and relocation when exploring online and on-campus programs.",
    image: "/images/study-india/online-degree-student.webp",
    alt: "Student exploring online degree programs",
    sections: [
      { id: "online-learning", title: "Learning online", text: "Online programs allow learners to attend lectures from home, with online examinations and flexible study schedules. They are suitable for working professionals and do not require relocation.", bullets: ["Attend lectures from home", "Flexible study schedules", "No relocation required", "Lower living and travel costs"] },
      { id: "campus-learning", title: "Learning on campus", text: "On-campus programs involve physical classroom learning, fixed schedules and mandatory campus attendance. Relocation is often required, with higher accommodation and living costs.", bullets: ["Physical classroom learning", "Fixed schedules", "Mandatory campus attendance", "Relocation is often required"] },
      { id: "check-format", title: "Check the format before applying", text: "Most online programs conduct online exams, though universities may follow specific formats. Campus attendance is not usually required for online programs, but optional visits or interactions may be offered. Exact details should be clarified before admission." },
    ],
  },
  {
    slug: "choosing-your-online-degree",
    title: "Explore your online degree options in India",
    category: "Online Degrees",
    description: "Explore undergraduate and postgraduate program options, with guidance on eligibility, university choice and learning formats.",
    image: "/images/study-india/program-fit-student.webp",
    alt: "Student considering degree program options",
    sections: [
      { id: "bachelors", title: "Bachelor’s programs", text: "Online undergraduate programs across various disciplines are suitable for students and early-career professionals.", bullets: ["BA — Bachelor of Arts", "BBA — Bachelor of Business Administration", "BCA — Bachelor of Computer Applications", "B.Com — Bachelor of Commerce"] },
      { id: "masters", title: "Master’s programs", text: "Postgraduate programs are designed for working professionals seeking to enhance their skills and advance their careers.", bullets: ["MA — Master of Arts", "MBA — Master of Business Administration", "MCA — Master of Computer Applications", "M.Sc — Master of Science"] },
      { id: "program-details", title: "Understand the program details", text: "Program availability, eligibility, duration and structure vary by university. University Yatra offers one-on-one counselling, helps students compare universities and programs, explains eligibility and learning formats, and guides students through admissions." },
    ],
  },
  {
    slug: "online-study-while-working",
    title: "Studying while working: your questions answered",
    category: "Student Guidance",
    description: "Understand flexible study schedules, online exams and university guidelines for learners balancing education with work.",
    image: "/images/study-india/guidance-student.webp",
    alt: "Student seeking guidance about flexible learning",
    sections: [
      { id: "working-full-time", title: "Can I study while working full-time?", text: "These online programs are tailored for working professionals with flexible schedules, enabling students to balance studies and full-time jobs." },
      { id: "living-abroad", title: "Can I study while living abroad?", text: "Students studying or working abroad can pursue these programs. Since classes and exams are online, they can continue their education from outside India, subject to university guidelines." },
      { id: "exams", title: "How are exams conducted?", text: "Most programs conduct online exams, with universities sometimes following specific formats. Exact details are shared with students before admission." },
      { id: "guidance", title: "Where can I get program guidance?", text: "University Yatra offers one-on-one counselling, helps students compare universities and programs, explains eligibility and learning formats, and guides them through admissions to enable informed decisions." },
    ],
  },
];

export const getPost = (slug) => posts.find((post) => post.slug === slug);
export const readingMinutes = (post) => Math.max(1, Math.ceil(post.sections.map((section) => `${section.title} ${section.text} ${(section.bullets || []).join(" ")}`).join(" ").split(/\s+/).length / 200));
export const articleUrl = (post) => `${siteUrl}/blog/${post.slug}`;
export const jsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");
