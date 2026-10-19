import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Calendar,
  CheckCircle2,
  DollarSign,
  GraduationCap,
  Globe2,
  Award,
  Briefcase,
  Home as HomeIcon,
  Utensils,
  Bus,
  ShieldCheck,
  Users,
  Compass,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import GlobalEducationCTA from "@/components/StudyInUsa/GlobalEducationCTA";
import { BOOK_GUIDES } from "@/components/StudyInUsa/bookGuidesData";

/* =====================================================================
   COMPREHENSIVE RICH DATA FOR EACH OF THE 5 GUIDES
===================================================================== */
const GUIDE_DETAILS_DATABASE = {
  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    title: "Living & Culture in the USA",
    shortTitle: "Living & Culture",
    badge: "Student Life & Campus Guide",
    tagline: "Navigating American Campus Life, Housing, Living Costs & Cultural Integration",
    heroImage: "/images/study-usa/living-and-culture-hero.jpg",
    accentColor: "#165548",
    pillColors: [
      { label: "DORMS & HOUSING", bg: "#D7F77D", text: "#063B72" },
      { label: "MONTHLY BUDGET", bg: "#FFD4E6", text: "#063B72" },
      { label: "SAFETY & TRANSIT", bg: "#B5E9F2", text: "#063B72" },
      { label: "CAMPUS CULTURE", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Studying in the United States is more than just lectures and degrees — it is a life-changing cultural immersion. From vibrant quad lawns and university dorms to diverse dining halls and student clubs, understanding how American college towns and cities operate helps you plan an unforgettable and stress-free academic journey.",
    metrics: [
      { label: "Monthly Living Expenses", value: "$1,000 – $2,200 / mo" },
      { label: "On-Campus Dorms", value: "$9,000 – $15,000 / yr" },
      { label: "Food & Groceries", value: "$300 – $600 / mo" },
      { label: "Campus Safety", value: "24/7 Police & Escorts" },
    ],
    chapters: [
      {
        icon: HomeIcon,
        title: "1. Student Housing: On-Campus Dorms vs. Off-Campus Rentals",
        desc: "Where you live shapes your daily student routine, budget, and social network.",
        points: [
          "On-Campus Residence Halls (Dorms): Many US universities mandate first-year undergraduates to live in dorms. They come fully furnished with utilities (Wi-Fi, water, heating) and include mandatory meal plans, fostering instant social connections.",
          "Off-Campus Apartments: Preferred by 85%+ of graduate (MS/MBA) students. Sharing a 2BHK or 3BHK apartment with fellow Indian students drops your monthly rent to $400–$800 per person in college towns.",
          "Leasing & Security Deposits: Typical 12-month leases require 1 month rent as deposit. Look for student-friendly complexes near university shuttle bus routes.",
        ],
      },
      {
        icon: Utensils,
        title: "2. Food, Dining Plans & Indian Grocery Stores",
        desc: "Managing nutrition and dietary preferences while living independently.",
        points: [
          "Campus Dining Plans: Access to all-you-can-eat campus cafeterias with vegetarian, halal, and vegan options. Convenient for busy undergraduate schedules.",
          "Self-Cooking & Indian Groceries: Most Indian students cook together in shared apartments. Indian grocery stores (like Patel Brothers) are present in virtually all major university towns with spices, lentils, rotis, and snacks.",
          "Average Monthly Food Budget: Cooking at home costs around $250–$350/month. Dining out or university meal plans average $500–$700/month.",
        ],
      },
      {
        icon: Bus,
        title: "3. Transportation & Commuting Options",
        desc: "Navigating your university campus and the surrounding city.",
        points: [
          "Free Campus Shuttles: US universities operate complimentary shuttle bus networks connecting dorms, academic buildings, libraries, and major off-campus student apartment complexes.",
          "Public Transit Discounts: In metropolitan areas like Boston, Chicago, New York, and San Francisco, student ID cards grant 50% discount passes on subways and city buses.",
          "Bicycles & Walking: Most American college campuses are pedestrian-first bicycle sanctuaries with dedicated bike lanes and bike-share racks.",
        ],
      },
      {
        icon: Users,
        title: "4. American Classroom & Social Culture",
        desc: "Thriving in a dynamic, highly collaborative educational environment.",
        points: [
          "Class Participation: US professors encourage open discussions, debating ideas, and asking questions. Active participation often counts for 10% to 20% of your course grade.",
          "Office Hours: Professors and Teaching Assistants (TAs) hold weekly 1-on-1 office hours for academic mentorship, doubts, and career advice.",
          "Indian Student Associations (ISA): Over 95% of US universities have active ISA chapters that organize Diwali celebrations, Holi festivals, cricket tournaments, and airport pickup drives for incoming freshers.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "5. Campus Health, Insurance & Safety",
        desc: "Comprehensive safety protocols and emergency healthcare support.",
        points: [
          "Campus Police & Blue Light Telephones: US campuses feature emergency call boxes spaced every 100 meters. Emergency response times average under 2 minutes.",
          "SafeRide & Late-Night Escorts: If you're studying late at the library, university security services provide free escorts or vans to your doorstep.",
          "Mandatory Student Health Insurance: Covers physician visits, prescriptions, emergency hospitalizations, and mental wellness counselling through on-campus student health centers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can international students live off-campus in their first semester?",
        a: "Graduate students (MS, MBA, PhD) can live off-campus from day one. Many undergraduate universities require first-year freshmen to live in dorms, though waivers are available under specific family or medical circumstances.",
      },
      {
        q: "How much pocket money do I need each month?",
        a: "In college towns (like West Lafayette, Urbana-Champaign, or College Station), $800 to $1,200 per month is comfortable for rent, groceries, and personal expenses. In major metros (New York, San Francisco, Boston), budget $1,500 to $2,200.",
      },
      {
        q: "Is it easy to find vegetarian and Indian food?",
        a: "Yes! Campus dining halls always label vegetarian, vegan, and gluten-free items. Additionally, Indian grocery stores and restaurants are located within proximity of almost all US college campuses.",
      },
    ],
  },

  "academic-pathways": {
    id: "01",
    vol: "VOL. I",
    title: "Academic Pathways in the USA",
    shortTitle: "Academic Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "4-Year Bachelor's, 1-2 Year STEM Master's, Doctoral Fellowships & US Intake Calendars",
    heroImage: "/images/hero/usa-3d-depth-hero.jpg",
    accentColor: "#0A1E3F",
    pillColors: [
      { label: "4-YEAR BACHELOR'S", bg: "#D7F77D", text: "#063B72" },
      { label: "STEM MASTER'S", bg: "#B5E9F2", text: "#063B72" },
      { label: "FUNDED PHDs", bg: "#FFD4E6", text: "#063B72" },
      { label: "FALL & SPRING INTAKES", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "The American higher education system is universally recognized for its academic rigor, interdisciplinary curriculum, and hands-on research. Whether pursuing a flexible 4-year undergraduate degree or a specialized 1-2 year STEM Master's (MS/MBA), US universities empower students to tailor their education toward high-impact global careers.",
    metrics: [
      { label: "Undergraduate", value: "4-Year Flexible Bachelor's" },
      { label: "Master's Degrees", value: "1–2 Year MS & MBA" },
      { label: "Credit Requirement", value: "120–130 Credits" },
      { label: "Intake Windows", value: "Fall (Aug) & Spring (Jan)" },
    ],
    chapters: [
      {
        icon: GraduationCap,
        title: "1. The 4-Year US Bachelor's Degree Structure",
        desc: "Unmatched academic flexibility with major, minor, and elective combinations.",
        points: [
          "Undecided Majors: You do not need to lock your major on day one. Students spend the first 2 years completing general education courses across sciences, humanities, and arts before formally declaring a major.",
          "Major + Minor System: You can major in Computer Science while minoring in Economics, Music, or Business, giving you a competitive edge in multidisciplinary industries.",
          "Continuous GPA Assessment: Grades are based on weekly homework, quizzes, presentations, midterms, and finals — not just one end-of-year exam.",
        ],
      },
      {
        icon: Briefcase,
        title: "2. Postgraduate Programs: MS & MBA",
        desc: "Specialized professional and research degrees designed for career acceleration.",
        points: [
          "STEM-Designated Degrees: Programs in Data Science, AI, Financial Engineering, and Biotechnology qualify for the lucrative 3-year OPT work extension in the US.",
          "Curricular Practical Training (CPT): Allows master's students to work in paid off-campus industry internships during summer semesters directly related to their major.",
          "Graduate Assistantships (GA/TA/RA): Master's students can secure paid teaching or research positions on campus that waive tuition and provide monthly stipends.",
        ],
      },
      {
        icon: Calendar,
        title: "3. Intake Cycles: Fall vs. Spring vs. Summer",
        desc: "Selecting the optimal semester for admission and scholarship success.",
        points: [
          "Fall Intake (August/September): The primary intake with 100% course options, maximum scholarship allocations, and campus hiring.",
          "Spring Intake (January): Ideal for students needing more time for GRE/IELTS prep or visa appointments.",
          "Summer Intake (May/June): Limited offerings, primarily for intensive pathway and research coursework.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a STEM-designated degree in the USA?",
        a: "A STEM degree covers Science, Technology, Engineering, or Math. Graduates from STEM programs are eligible for a 24-month OPT extension, allowing up to 36 months (3 years) of legal full-time work in the USA on an F-1 visa.",
      },
      {
        q: "Can I change my major after getting admitted?",
        a: "Yes! One of the biggest advantages of US universities is the flexibility to switch majors within your college during your first 2 years without restarting your degree.",
      },
    ],
  },

  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    title: "Cost of Studying in the USA",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Indicative Tuition Fees, Living Costs, Health Insurance & Financial Planning",
    heroImage: "/images/study-usa/modal-depth-bg.jpg",
    accentColor: "#4A101D",
    pillColors: [
      { label: "TUITION FEES", bg: "#D7F77D", text: "#063B72" },
      { label: "PUBLIC VS PRIVATE", bg: "#B5E9F2", text: "#063B72" },
      { label: "ON-CAMPUS JOBS", bg: "#FFD4E6", text: "#063B72" },
      { label: "EDUCATION LOANS", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "A clear financial roadmap is essential for studying in America. Tuition fees vary substantially between state-funded public institutions and prestigious private universities. Learn how to accurately project total costs, leverage scholarships, and plan education loans.",
    metrics: [
      { label: "Public University Tuition", value: "$18,000 – $35,000 / yr" },
      { label: "Private University Tuition", value: "$35,000 – $60,000 / yr" },
      { label: "Mandatory Fees", value: "$1,500 – $3,500 / yr" },
      { label: "On-Campus Earnings", value: "$12 – $20 / hr (20 hrs/wk)" },
    ],
    chapters: [
      {
        icon: DollarSign,
        title: "1. Public vs. Private Universities Tuition Comparison",
        desc: "Understanding the financial differences between institution types.",
        points: [
          "Public State Universities: Supported by state governments (e.g. UC Berkeley, Purdue, Arizona State, SUNY). Out-of-state tuition ranges from $18,000 to $38,000/year.",
          "Private Universities: Endowed institutions (e.g. Harvard, MIT, NYU, Stanford). Tuition ranges from $40,000 to $65,000/year, but they offer substantial need-based and merit grants.",
          "Community Colleges (2+2 Pathway): Cost $8,000–$12,000/year for the first 2 years, transferring directly into top universities for years 3 and 4.",
        ],
      },
      {
        icon: Briefcase,
        title: "2. On-Campus Employment & Offsetting Expenses",
        desc: "Legally working as an international F-1 student in the USA.",
        points: [
          "20 Hours / Week Limit: F-1 visa students can work legally up to 20 hours/week during active semesters and 40 hours/week during semester breaks.",
          "Common Roles: Campus library assistant, tech lab proctor, dining hall staff, student recreation monitor, and departmental tutoring.",
          "Pay Rates: $12 to $20/hour depending on state minimum wage, covering 70% to 100% of your monthly food and pocket expenses.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the total annual cost of attendance (COA)?",
        a: "Annual COA includes tuition ($20k–$45k), housing & food ($10k–$15k), health insurance & books ($3k–$5k), totaling between $35,000 and $65,000 per year before scholarships.",
      },
    ],
  },

  "scholarships-and-aid": {
    id: "04",
    vol: "VOL. IV",
    title: "Scholarships & Financial Aid in the USA",
    shortTitle: "Scholarships & Aid",
    badge: "Funding, Grants & Fellowships",
    tagline: "Merit Awards, Need-Based Aid, Graduate Assistantships & Application Strategy",
    heroImage: "/images/study-usa/study-in-usa-hero.jpg",
    accentColor: "#1A2645",
    pillColors: [
      { label: "MERIT SCHOLARSHIPS", bg: "#D7F77D", text: "#063B72" },
      { label: "NEED-BLIND AID", bg: "#B5E9F2", text: "#063B72" },
      { label: "TA / RA STIPENDS", bg: "#FFD4E6", text: "#063B72" },
      { label: "FULBRIGHT & GRANTS", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Higher education in the USA offers the world's most generous financial aid and scholarship ecosystems. From automatic merit scholarships upon admission to full tuition waivers through Graduate Teaching and Research Assistantships, funding opportunities are abundant for dedicated international students.",
    metrics: [
      { label: "Merit Awards", value: "$5,000 – Full Tuition" },
      { label: "Need-Blind Universities", value: "Harvard, MIT, Princeton, Yale" },
      { label: "Assistantships (TA/RA)", value: "100% Tuition + Monthly Stipend" },
      { label: "Priority Deadline", value: "Nov 1 – Dec 15" },
    ],
    chapters: [
      {
        icon: Award,
        title: "1. Institutional Merit-Based Scholarships",
        desc: "Awarded automatically or via separate scholarship applications based on profile strength.",
        points: [
          "Automatic Consideration: Many universities review your application for merit awards without requiring a separate form.",
          "GPA & Test Scores: Strong academic performance, competitive GRE/SAT scores, and exceptional extracurriculars maximize your scholarship tier.",
          "Renewable Awards: Most merit scholarships renew each academic year provided you maintain a minimum 3.0 or 3.5 cumulative GPA.",
        ],
      },
      {
        icon: GraduationCap,
        title: "2. Graduate Assistantships (TA / RA / GA)",
        desc: "The gold standard for funding postgraduate (Master's and PhD) study.",
        points: [
          "Teaching Assistantships (TA): Assist professors with grading, leading lab sections, and tutoring undergraduates in exchange for full/partial tuition waiver and monthly stipend.",
          "Research Assistantships (RA): Conduct faculty-guided laboratory research funded by federal grants (NSF, NIH, DoD).",
          "Graduate Assistantships (GA): Work in university administrative departments, student services, or academic advisement.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can Indian students get 100% scholarships in the USA?",
        a: "Yes! At the undergraduate level, top need-blind private universities (Harvard, MIT, Princeton, Yale, Amherst) meet 100% of demonstrated financial need. At the graduate level, PhD programs are almost universally fully funded with full tuition waivers and stipends.",
      },
    ],
  },

  "post-study-visa": {
    id: "05",
    vol: "VOL. V",
    title: "Post-Study Work Visa (OPT) in the USA",
    shortTitle: "Post-Study Visa",
    badge: "OPT, STEM Extension & Careers",
    tagline: "F-1 OPT Work Permit, 24-Month STEM Extension, H-1B Visa & Career Pathways",
    heroImage: "/images/hero/usa-monuments-depth.jpg",
    accentColor: "#1E2530",
    pillColors: [
      { label: "12-MONTH OPT", bg: "#D7F77D", text: "#063B72" },
      { label: "24-MONTH STEM EXTENSION", bg: "#B5E9F2", text: "#063B72" },
      { label: "EAD WORK PERMIT", bg: "#FFD4E6", text: "#063B72" },
      { label: "H-1B SPONSORSHIP", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "The American student visa (F-1) provides unmatched post-graduation career opportunities in the world's largest economy. Through Optional Practical Training (OPT) and the 24-month STEM extension, international graduates can work full-time in top US companies for up to 3 years without requiring immediate employer visa sponsorship.",
    metrics: [
      { label: "Initial OPT Duration", value: "12 Months Full-Time Work" },
      { label: "STEM OPT Extension", value: "+24 Months (36 Mos Total)" },
      { label: "Filing Window", value: "90 Days Before Graduation" },
      { label: "Transition Path", value: "H-1B Specialty Work Visa" },
    ],
    chapters: [
      {
        icon: Briefcase,
        title: "1. Understanding F-1 Optional Practical Training (OPT)",
        desc: "Legal full-time work authorization directly tied to your field of study.",
        points: [
          "No Employer Sponsorship Required: You apply for an Employment Authorization Document (EAD) directly through USCIS with your university's Designated School Official (DSO).",
          "All Degree Levels: Available after completing any bachelor's, master's, or doctoral degree in the United States.",
          "Salary Equity: International students on OPT receive the exact same competitive market salaries as US citizens in corporate tech, finance, and engineering roles.",
        ],
      },
      {
        icon: Globe2,
        title: "2. The 24-Month STEM OPT Extension (3 Years Total)",
        desc: "A massive competitive advantage for graduates in technology, engineering, and sciences.",
        points: [
          "Up to 36 Months: Qualifying STEM majors can extend their initial 12-month OPT by an additional 24 months, enabling 3 continuous years of high-earning US career experience.",
          "Multiple H-1B Lottery Chances: A 3-year OPT window gives your employer three consecutive years to sponsor you for the annual H-1B visa lottery.",
        ],
      },
    ],
    faqs: [
      {
        q: "What jobs qualify for OPT?",
        a: "Any full-time or part-time employment directly related to your major field of study. You can work for tech giants, startups, research institutes, or university laboratories.",
      },
    ],
  },

  "jobs-in-usa": {
    id: "06",
    vol: "VOL. VI",
    title: "Jobs & Careers in the USA",
    shortTitle: "Jobs in USA",
    badge: "Careers, Internships & ROI",
    tagline: "High-Paying Industry Roles, CPT Internships, On-Campus Employment & US Job Market Navigation",
    heroImage: "/images/hero/study-in-usa-hero-latest.jpg",
    accentColor: "#C2410C",
    pillColors: [
      { label: "CPT INTERNSHIPS", bg: "#D7F77D", text: "#063B72" },
      { label: "ON-CAMPUS JOBS", bg: "#B5E9F2", text: "#063B72" },
      { label: "HIGH-PAYING ROLES", bg: "#FFD4E6", text: "#063B72" },
      { label: "CAREER FAIRS", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "The United States is home to the world's most dynamic job market for international graduates. With booming tech hubs, global financial centers, and cutting-edge healthcare industries, US university students can gain invaluable corporate experience through CPT internships, career fairs, and high-ROI full-time placements.",
    metrics: [
      { label: "Average Starting Salary", value: "$75,000 – $125,000 / yr" },
      { label: "On-Campus Work Limit", value: "20 Hrs/Wk During Term" },
      { label: "CPT Internship Window", value: "Summer & Final Terms" },
      { label: "Placement Rate", value: "92%+ Within 6 Months" },
    ],
    chapters: [
      {
        icon: Briefcase,
        title: "1. On-Campus Student Employment",
        desc: "Offset living expenses from day one with university-based employment.",
        points: [
          "Eligible From First Semester: F-1 students can immediately apply for campus jobs including library desks, tech labs, dining facilities, and student centers.",
          "Legal Hourly Allowance: Up to 20 hours/week during classes, and up to 40 hours/week during university holidays and summer breaks.",
          "Social Security Number (SSN): Working on-campus qualifies you to obtain an official US SSN, establishing your US credit profile.",
        ],
      },
      {
        icon: Award,
        title: "2. Curricular Practical Training (CPT) Internships",
        desc: "Paid corporate internships during your academic program.",
        points: [
          "Off-Campus Industry Experience: Available after completing two full academic semesters. Work for leading US corporations, startups, or research institutes.",
          "Competitive Summer Salaries: Master's STEM students earn $30 to $65/hour during summer internships at Fortune 500 tech and finance firms.",
          "Direct Full-Time Conversion: Over 70% of high-performing summer interns receive pre-placement return job offers before graduating.",
        ],
      },
      {
        icon: Globe2,
        title: "3. Top Hiring Sectors & Career Fairs",
        desc: "Maximizing university recruitment networks and alumni connections.",
        points: [
          "Campus Career Fairs: US universities host massive semi-annual career expos attracting hundreds of multinational corporate recruiters.",
          "Handshake & LinkedIn: Direct access to university job boards, alumni mentors, and specialized on-campus interviews.",
          "High-Demand Fields: Software engineering, cloud architecture, AI/ML, financial analysis, supply chain management, and data science.",
        ],
      },
    ],
    faqs: [
      {
        q: "When can an international student start doing paid internships in the USA?",
        a: "Under F-1 regulations, students become eligible for CPT (Curricular Practical Training) internships after completing one full academic year (typically 9 months or 2 semesters) of full-time study in the United States.",
      },
      {
        q: "What is the average starting salary for Indian graduates in the US?",
        a: "Graduates from STEM master's programs in fields like Computer Science, Data Science, and Engineering typically command starting packages between $85,000 and $130,000 per year, depending on university ranking and geographic location.",
      },
    ],
  },
};

export default async function GuideDetailPage({ params }) {
  const resolvedParams = await params;
  const guideSlug = resolvedParams?.guide;
  const guideData = GUIDE_DETAILS_DATABASE[guideSlug];

  if (!guideData) {
    return notFound();
  }

  return (
    <>
      {/* 01. GLOBAL NAVBAR (Matching Home & Study Abroad) */}
      <Navbar active="Destinations" />

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* =====================================================================
            02. HERO SECTION (Tailored Photographic Background + Home Floating Pills)
        ====================================================================== */}
        <section className="relative isolate min-h-[660px] w-full overflow-hidden bg-[#EAF4FA] text-[#063B72] sm:min-h-[700px] lg:min-h-[740px]">
          {/* Background Photograph */}
          <div className="pointer-events-none absolute inset-0 -z-20">
            <Image
              src={guideData.heroImage}
              alt={guideData.title}
              fill
              priority
              unoptimized
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Light Ambient Overlay (Matching Home Screen Bright & Fresh Aesthetic) */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/95 via-white/85 to-white/40" />

          {/* Hero Content Wrapper */}
          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-4 pb-16 pt-32 text-center sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
            {/* Top Breadcrumbs & Back Link */}
            <div className="relative z-10 mb-5 flex flex-wrap items-center justify-center gap-2 text-[12px] font-semibold text-[#526B8C]">
              <Link href="/" className="hover:text-[#1765F5] transition">Home</Link>
              <span>/</span>
              <Link href="/study-in-usa" className="hover:text-[#1765F5] transition">Study in USA</Link>
              <span>/</span>
              <span className="text-[#0C337B] font-bold">{guideData.shortTitle}</span>
            </div>

            {/* Floating Characteristic Pills (Home Screen UI Element) */}
            <div className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {guideData.pillColors.map((pill, pIdx) => (
                <span
                  key={pIdx}
                  style={{ backgroundColor: pill.bg, color: pill.text }}
                  className="rounded-full px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider shadow-sm sm:text-[11px]"
                >
                  {pill.label}
                </span>
              ))}
            </div>

            {/* Small Volume Badge */}
            <div className="relative z-10 mb-3 inline-flex items-center gap-2 rounded-full border border-[#1765F5]/25 bg-white/80 px-4 py-1 backdrop-blur-md shadow-sm">
              <Bookmark size={13} className="text-[#1765F5]" />
              <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#1765F5]">
                {guideData.vol} • {guideData.badge}
              </span>
            </div>

            {/* Main Title (Home Screen Typography Hierarchy) */}
            <h1 className="relative z-10 mx-auto max-w-[1100px] text-balance text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0C337B] sm:text-[48px] md:text-[58px] lg:text-[64px]">
              {guideData.title}
            </h1>

            {/* Subtitle / Tagline */}
            <p className="relative z-10 mx-auto mt-4 max-w-[760px] text-[14px] font-medium leading-[1.7] text-[#425A70] sm:text-[16px]">
              {guideData.tagline}
            </p>

            {/* CTA Buttons (Matching Home & Destination Page) */}
            <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="#contact-advisory"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#1765F5] bg-[#1765F5] px-8 py-4 text-[14px] font-bold text-white shadow-[0_12px_32px_rgba(23,101,245,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] hover:shadow-[0_16px_40px_rgba(12,51,123,0.4)] sm:text-[15px]"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight size={17} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20studying%20in%20USA."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#25D366] bg-white px-8 py-4 text-[14px] font-bold text-[#0C337B] shadow-[0_10px_28px_rgba(37,211,102,0.2)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white sm:text-[15px]"
              >
                <svg className="h-5 w-5 fill-[#25D366] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
                </svg>
                <span>Chat On Whatsapp</span>
              </a>
            </div>

            {/* 4 Key Metrics Bar (Floating Card) */}
            <div className="relative z-10 mt-12 w-full max-w-[1100px] rounded-2xl border border-white/80 bg-white/85 p-4 shadow-[0_16px_40px_rgba(12,51,123,0.08)] backdrop-blur-md sm:p-5">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {guideData.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="rounded-xl border border-slate-100 bg-white/70 p-3 text-center sm:p-4">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B] sm:text-[11px]">
                      {metric.label}
                    </span>
                    <span className="mt-1 block text-[13px] font-extrabold text-[#1765F5] sm:text-[15px]">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            03. DETAILED EDITORIAL CHAPTERS (Clean, Deep, Structured Knowledge)
        ====================================================================== */}
        <section className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content Chapters (2 Columns) */}
            <div className="space-y-8 lg:col-span-2">
              {/* Introduction Overview Banner */}
              <div className="rounded-3xl border border-[#A2C1FB]/40 bg-gradient-to-br from-[#EBF3FE] to-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-[#1765F5]">
                  <Compass size={18} />
                  <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">
                    Executive Summary
                  </span>
                </div>
                <h3 className="mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">
                  Navigating {guideData.shortTitle}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#526B8C] sm:text-[15px]">
                  {guideData.overview}
                </p>
              </div>

              {/* Detailed Chapters */}
              {guideData.chapters.map((chap, cIdx) => {
                const IconC = chap.icon;
                return (
                  <div
                    key={cIdx}
                    className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-[#A2C1FB] hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5]">
                        <IconC size={22} strokeWidth={2.2} />
                      </div>
                      <div>
                        <h2 className="text-[19px] font-extrabold tracking-tight text-[#0C337B] sm:text-[22px]">
                          {chap.title}
                        </h2>
                        <p className="mt-1 text-[13px] text-[#64748B] sm:text-[14px]">
                          {chap.desc}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3.5 border-t border-slate-100 pt-5">
                      {chap.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#1765F5]" />
                          <span className="text-[14px] leading-relaxed text-[#425A70] sm:text-[15px]">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              {/* FAQs Accordion Block */}
              {guideData.faqs && guideData.faqs.length > 0 && (
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-[#1765F5]">
                    <HelpCircle size={18} />
                    <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">
                      Frequently Asked Questions
                    </span>
                  </div>
                  <h3 className="mt-2 text-[20px] font-extrabold text-[#0C337B]">
                    Common Queries About {guideData.shortTitle}
                  </h3>

                  <div className="mt-6 space-y-4">
                    {guideData.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5">
                        <h4 className="text-[15px] font-bold text-[#0C337B]">
                          {faq.q}
                        </h4>
                        <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C] sm:text-[14px]">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Sidebar (1 Column) */}
            <div className="space-y-6">
              {/* Free Counselling Advisory Card */}
              <div id="contact-advisory" className="rounded-3xl border border-[#1765F5]/30 bg-gradient-to-br from-[#E8F0FE] to-white p-6 sm:p-7 shadow-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">
                  1-on-1 Student Guidance
                </span>
                <h3 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">
                  Plan Your USA Journey With an Expert
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C]">
                  Get personalized university shortlisting, funding advice, visa assistance, and pre-departure accommodation tips from University Yatra counsellors.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href="https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20need%20guidance%20on%20studying%20in%20USA."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#1eb956]"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                  <Link
                    href="/study-in-usa#faq-section"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1765F5] bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#0C337B]"
                  >
                    <span>Book Free Consultation</span>
                  </Link>
                </div>
              </div>

              {/* The Other 4 Guides in Series (Book Switcher) */}
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">
                    Other USA Guides
                  </h4>
                  <span className="font-mono text-[10px] text-[#1765F5]">Series</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {BOOK_GUIDES.filter((b) => b.slug !== guideSlug).map((b) => (
                    <Link
                      key={b.id}
                      href={`/study-in-usa/${b.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]"
                    >
                      <div className="flex flex-col">
                        <span>{b.title}</span>
                        <span className="text-[11px] font-medium text-[#64748B]">
                          {b.badge}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">
                        {b.vol} →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04. GLOBAL CALL TO ACTION */}
        <GlobalEducationCTA />
      </main>

      {/* 05. GLOBAL FOOTER */}
      <UniversityFooter />
    </>
  );
}
