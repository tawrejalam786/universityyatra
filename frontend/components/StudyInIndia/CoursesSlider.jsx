
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

/* =========================================
   CATEGORY FILTERS
========================================= */

const tabs = [
  { id: "all", label: "All Programs" },
  { id: "diploma", label: "Diploma" },
  { id: "masters", label: "Master's" },
  { id: "bachelors", label: "Bachelor's" },
];

/* =========================================
   STUDY IN INDIA DEGREE PROGRAMS
========================================= */

const courseCards = [
  {
    "id": 1,
    "course": "Diploma in AI & ML",
    "cardTitle": "Diploma in AI & ML",
    "category": "diploma",
    "stem": true,
    "image": "/images/courses/canada/computer-artificial-science-ms.webp",
    "color": "#23375A",
    "universityName": "Kurukshetra University (KUK)",
    "location": "Kurukshetra, Haryana",
    "accreditations": "UGC Approved, NAAC A++",
    "mode": "Online",
    "duration": "1 Year",
    "semesterFee": "Not provided",
    "totalFee": "₹32,848",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 2,
    "course": "Diploma in Bhagavad Gita",
    "cardTitle": "Diploma in Bhagavad Gita",
    "category": "diploma",
    "stem": false,
    "image": "/images/courses/canada/human-right-social-justice-ms.webp",
    "color": "#42666D",
    "universityName": "Kurukshetra University (KUK)",
    "location": "Kurukshetra, Haryana",
    "accreditations": "UGC Approved, NAAC A++",
    "mode": "Online",
    "duration": "1 Year",
    "semesterFee": "Sem 1: ₹11,199 / Sem 2: ₹10,700",
    "totalFee": "₹21,899",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 3,
    "course": "Diploma in Cyber Security",
    "cardTitle": "Diploma in Cyber Security",
    "category": "diploma",
    "stem": true,
    "image": "/images/courses/canada/cybersecurity-ms.webp",
    "color": "#619580",
    "universityName": "Kurukshetra University (KUK)",
    "location": "Kurukshetra, Haryana",
    "accreditations": "UGC Approved, NAAC A++",
    "mode": "Online",
    "duration": "1 Year",
    "semesterFee": "Not provided",
    "totalFee": "₹32,848",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 4,
    "course": "Diploma in Data Analytics",
    "cardTitle": "Diploma in Data Analytics",
    "category": "diploma",
    "stem": true,
    "image": "/images/courses/canada/data-analytics-ms.webp",
    "color": "#806093",
    "universityName": "Kurukshetra University (KUK)",
    "location": "Kurukshetra, Haryana",
    "accreditations": "UGC Approved, NAAC A++",
    "mode": "Online",
    "duration": "1 Year",
    "semesterFee": "Not provided",
    "totalFee": "₹32,848",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 5,
    "course": "Diploma in Business Administration",
    "cardTitle": "Diploma in Business Administration",
    "category": "diploma",
    "stem": false,
    "image": "/images/courses/canada/business-administration-bs.webp",
    "color": "#318FA6",
    "universityName": "Lovely Professional University (LPU)",
    "location": "Phagwara, Punjab",
    "accreditations": "UGC Approved, UGC-DEB Entitled, NAAC A++",
    "mode": "Online",
    "duration": "1 Year",
    "semesterFee": "₹25,000",
    "totalFee": "₹50,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 6,
    "course": "Diploma in Computer Application",
    "cardTitle": "Diploma in Computer Application",
    "category": "diploma",
    "stem": true,
    "image": "/images/courses/canada/computer-science-bs.webp",
    "color": "#505AB9",
    "universityName": "Lovely Professional University (LPU)",
    "location": "Phagwara, Punjab",
    "accreditations": "UGC Approved, UGC-DEB Entitled, NAAC A++",
    "mode": "Online",
    "duration": "1 Year",
    "semesterFee": "₹25,000",
    "totalFee": "₹50,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 7,
    "course": "BA (English / Sociology / Pol. Sci.)",
    "cardTitle": "BA (English / Sociology / Pol. Sci.)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bachelor-social-juticebs.webp",
    "color": "#6F895E",
    "universityName": "Deen Dayal Upadhyaya Gorakhpur University (DDU)",
    "location": "Gorakhpur, UP",
    "accreditations": "UGC Approved, NAAC A++",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "₹7,000",
    "totalFee": "₹42,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 8,
    "course": "B.Com (General)",
    "cardTitle": "B.Com (General)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/finance-bs.webp",
    "color": "#8E5471",
    "universityName": "Kurukshetra University (KUK)",
    "location": "Kurukshetra, Haryana",
    "accreditations": "UGC Approved, NAAC A++",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "Sem 1: ₹12,661 / Sem 2–6: ₹12,000",
    "totalFee": "₹72,661",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 9,
    "course": "B.Com (Honours)",
    "cardTitle": "B.Com (Honours)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/master-accounting-ms.webp",
    "color": "#3F8384",
    "universityName": "GLA University",
    "location": "Mathura, UP",
    "accreditations": "UGC Approved, NAAC A+",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "₹10,000",
    "totalFee": "₹60,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 10,
    "course": "BBA (General)",
    "cardTitle": "BBA (General)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bach-business-administration-bs.webp",
    "color": "#5E4E97",
    "universityName": "Swami Vivekananda Subharti University (SMU)",
    "location": "Meerut, UP",
    "accreditations": "UGC Approved, NAAC A",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "₹15,000",
    "totalFee": "₹90,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 11,
    "course": "BCA (General)",
    "cardTitle": "BCA (General)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-mathematics-bs.webp",
    "color": "#7D7DAA",
    "universityName": "Uttaranchal University (UU)",
    "location": "Dehradun, Uttarakhand",
    "accreditations": "UGC Approved, NAAC A+",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "₹17,000",
    "totalFee": "₹1,20,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 12,
    "course": "B.Com",
    "cardTitle": "B.Com",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/finance-business-administration-bs.webp",
    "color": "#2E48BD",
    "universityName": "Manipal University Jaipur (MUJ)",
    "location": "Jaipur, Rajasthan",
    "accreditations": "UGC Approved, NAAC A+, NIRF #64",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "₹16,500",
    "totalFee": "₹99,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 13,
    "course": "BBA (General)",
    "cardTitle": "BBA (General)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/international-business-administration-bs.webp",
    "color": "#4D7762",
    "universityName": "Lovely Professional University (LPU)",
    "location": "Phagwara, Punjab",
    "accreditations": "UGC Approved, NAAC A++, NIRF #27",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "₹25,000",
    "totalFee": "₹1,50,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 14,
    "course": "BCA (Microsoft)",
    "cardTitle": "BCA (Microsoft)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-ms.webp",
    "color": "#6C4275",
    "universityName": "Chandigarh University (CU)",
    "location": "Mohali, Punjab",
    "accreditations": "UGC Approved, NAAC A+",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "₹23,600",
    "totalFee": "₹1,41,600",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 15,
    "course": "BCA (AI & Data Science)",
    "cardTitle": "BCA (AI & Data Science)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/data-science-ai-phd.webp",
    "color": "#8B7188",
    "universityName": "Amrita Vishwa Vidyapeetham",
    "location": "Coimbatore, Tamil Nadu",
    "accreditations": "UGC Approved, NAAC A++, NIRF #7",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "₹27,500",
    "totalFee": "₹1,65,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 16,
    "course": "BBA (KPMG - BAP)",
    "cardTitle": "BBA (KPMG - BAP)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/co-op-management-ms.webp",
    "color": "#3C3C9B",
    "universityName": "Amity University",
    "location": "Noida, Uttar Pradesh",
    "accreditations": "UGC Approved, NAAC A+, NIRF #32",
    "mode": "Online",
    "duration": "3 Years",
    "semesterFee": "₹38,400",
    "totalFee": "₹2,02,400",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 17,
    "course": "MA (Economics)",
    "cardTitle": "MA (Economics)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/economics-masters.webp",
    "color": "#5B6BAE",
    "universityName": "Deen Dayal Upadhyaya Gorakhpur University (DDU)",
    "location": "Gorakhpur, UP",
    "accreditations": "UGC Approved, NAAC A++",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "₹7,500",
    "totalFee": "₹30,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 18,
    "course": "MBA (General)",
    "cardTitle": "MBA (General)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/global-management-ms.webp",
    "color": "#7A9AC1",
    "universityName": "Andhra University",
    "location": "Visakhapatnam, AP",
    "accreditations": "UGC Approved, NAAC A++, NIRF #25",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "₹14,300",
    "totalFee": "₹62,200",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 19,
    "course": "MCA",
    "cardTitle": "MCA",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-science-ms.webp",
    "color": "#2B6566",
    "universityName": "Kurukshetra University (KUK)",
    "location": "Kurukshetra, Haryana",
    "accreditations": "UGC Approved, NAAC A++",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "Sem 1: ₹19,947 / Sem 2–4: ₹18,900",
    "totalFee": "₹76,647",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 20,
    "course": "MBA (Business Analytics)",
    "cardTitle": "MBA (Business Analytics)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-analytics-ms.webp",
    "color": "#4A9479",
    "universityName": "Uttaranchal University (UU)",
    "location": "Dehradun, Uttarakhand",
    "accreditations": "UGC Approved, NAAC A+",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "₹24,500",
    "totalFee": "₹94,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 21,
    "course": "M.Com",
    "cardTitle": "M.Com",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/master-accounting-phd.webp",
    "color": "#695F8C",
    "universityName": "Manipal University Jaipur (MUJ)",
    "location": "Jaipur, Rajasthan",
    "accreditations": "UGC Approved, NAAC A+, NIRF #64",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "₹27,000",
    "totalFee": "₹1,08,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 22,
    "course": "MCA (Data Science)",
    "cardTitle": "MCA (Data Science)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/data-science-ms.webp",
    "color": "#888E9F",
    "universityName": "Sharda University",
    "location": "Greater Noida, UP",
    "accreditations": "UGC Approved, NAAC A+",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "₹25,000",
    "totalFee": "₹1,00,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 23,
    "course": "MBA (General)",
    "cardTitle": "MBA (General)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-administration-phd.webp",
    "color": "#3959B2",
    "universityName": "Lovely Professional University (LPU)",
    "location": "Phagwara, Punjab",
    "accreditations": "UGC Approved, NAAC A++, NIRF #27",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "₹50,000",
    "totalFee": "₹2,00,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 24,
    "course": "MBA (Business Analytics)",
    "cardTitle": "MBA (Business Analytics)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/dba-business-analytics-phd.webp",
    "color": "#5888C5",
    "universityName": "Chandigarh University (CU)",
    "location": "Mohali, Punjab",
    "accreditations": "UGC Approved, NAAC A+",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "₹45,000",
    "totalFee": "₹1,80,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 25,
    "course": "MCA (AI / Cyber Security)",
    "cardTitle": "MCA (AI / Cyber Security)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/cyber-studies-phd.webp",
    "color": "#77536A",
    "universityName": "Amrita Vishwa Vidyapeetham",
    "location": "Coimbatore, Tamil Nadu",
    "accreditations": "UGC Approved, NAAC A++, NIRF #7",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "Sem 1: ₹45,000 / Sem 2–4: ₹50,000",
    "totalFee": "₹1,95,000",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  },
  {
    "id": 26,
    "course": "MBA (International Finance - ACCA)",
    "cardTitle": "MBA (International Finance - ACCA)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/finance-ms.webp",
    "color": "#28827D",
    "universityName": "Amity University",
    "location": "Noida, Uttar Pradesh",
    "accreditations": "UGC Approved, NAAC A+, NIRF #32",
    "mode": "Online",
    "duration": "2 Years",
    "semesterFee": "₹82,300",
    "totalFee": "₹3,02,680",
    "tuitionCostYearly": "",
    "intake": "",
    "paymentOptions": "EMI Options Available"
  }
];

/* =========================================
   COMPACT CATEGORY PILL
========================================= */

function CategoryPill({ tab, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`inline-flex h-[34px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-3 text-[10px] font-semibold transition-all duration-300 sm:h-[40px] sm:px-5 sm:text-[12px] ${
        selected
          ? "border-[#1765F5] bg-[#1765F5] text-white shadow-[0_4px_12px_rgba(23,101,245,0.15)]"
          : "border-[#DCE6F3] bg-white text-[#0C337B] hover:border-[#1765F5] hover:text-[#1765F5]"
      }`}
    >
      {tab.label}
    </button>
  );
}

/* =========================================
   MAIN COURSES SLIDER
========================================= */

export default function CoursesSlider() {
  const swiperRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [activeTab, setActiveTab] = useState("all");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  /* FILTER COURSES */
  const filteredCourses = courseCards.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  /* CATEGORY CHANGE */
  const changeTab = (tabId) => {
    if (activeTab === tabId) return;

    setActiveTab(tabId);
    setIsBeginning(true);
    setIsEnd(false);
    swiperRef.current = null;
  };

  /* PREVIOUS SLIDE */
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  /* NEXT SLIDE */
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  /* UPDATE NAVIGATION STATE */
  const updateNavigation = (swiper) => {
    if (!swiper || swiper.destroyed) return;

    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  /* CATEGORY TITLE */
  const categoryTitle =
    activeTab === "masters"
      ? "Master's Degree Programs in India"
      : activeTab === "bachelors"
        ? "Bachelor's Degree Programs in India"
        : activeTab === "diploma" ? "Online Diploma Programs in India" : "All Online Programs in India";

  return (
    <section className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9">

      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-[280px] w-[280px] rounded-full bg-[#1765F5]/[0.06] blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#0C337B]/[0.05] blur-[100px]"
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-3.5 sm:px-5 lg:px-6">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-5"
        >
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[32px] md:text-[36px]">
            Explore Online Courses{" "}
            <span className="text-[#1765F5]">in India</span>
          </h2>

          {/* ACCENT DECORATION */}
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]/65" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#18B8B5]/35" />
            <span className="h-[4px] w-12 rounded-full bg-[#18B8B5]" />
          </div>
        </motion.div>

        {/* =====================================
            CATEGORY FILTERS + SLIDER ARROWS

            MOBILE:
            3 TABS IN ONE ROW
            ARROWS BELOW ON RIGHT

            DESKTOP:
            TABS LEFT
            ARROWS RIGHT
        ===================================== */}

        <div className="mb-4 flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">

          {/* CATEGORY BUTTONS */}
          <div className="flex w-full min-w-0 flex-wrap items-center justify-start gap-1.5 sm:w-auto sm:flex-1 sm:gap-2.5">

            {tabs.map((tab) => (
              <CategoryPill
                key={tab.id}
                tab={tab}
                selected={activeTab === tab.id}
                onClick={() => changeTab(tab.id)}
              />
            ))}

          </div>

          {/* SLIDER NAVIGATION */}
          <div className="flex w-full shrink-0 items-center justify-end gap-2 sm:w-auto">

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={isBeginning}
              aria-label="Previous course"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_4px_12px_rgba(12,51,123,0.06)] transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 sm:h-10 sm:w-10"
            >
              <ChevronLeft size={17} strokeWidth={2.1} />
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={handleNext}
              disabled={isEnd}
              aria-label="Next course"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_4px_12px_rgba(12,51,123,0.06)] transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 sm:h-10 sm:w-10"
            >
              <ChevronRight size={17} strokeWidth={2.1} />
            </button>

          </div>
        </div>

        {/* =====================================
            SELECTED CATEGORY TITLE
        ===================================== */}

        <div className="mb-2">
          <h3 className="text-[16px] font-bold text-[#063B72] sm:text-[19px]">
            {categoryTitle}
          </h3>
        </div>

        {/* =====================================
            COURSES SWIPER

            DESKTOP: 3.5 CARDS
            TABLET: 2.1 / 2.5 CARDS
            MOBILE: 1.15 CARDS
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative w-full min-w-0"
        >
          <Swiper
            key={activeTab}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigation(swiper);
            }}
            onSlideChange={updateNavigation}
            onReachBeginning={updateNavigation}
            onReachEnd={updateNavigation}
            slidesPerView={1.15}
            spaceBetween={12}
            speed={550}
            grabCursor={true}
            watchOverflow={true}
            breakpoints={{
              480: {
                slidesPerView: 1.4,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 18,
              },
            }}
            className="!overflow-hidden !bg-transparent !pb-4 !pt-4"
          >
            {filteredCourses.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!h-auto"
              >
                <CourseCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">Online India program fees are shown as supplied in the document. Semester and total fees may differ; confirm the applicable fee schedule and EMI terms with the university. Intake and yearly tuition were not provided.</p>
      </div>
    </section>
  );
}

/* =========================================
   INDIVIDUAL COURSE CARD

   SAME LAYOUT AS STUDY IN USA
========================================= */

function CourseCard({ item }) {
  const accreditation = item.accreditations?.match(/NAAC(?:\s+[A-Z]\+{0,2})?/)?.[0];
  const hasSemesterFee = Boolean(item.semesterFee?.trim()) &&
    !["-", "Not provided"].includes(item.semesterFee.trim());
  const details = [
    ["University", item.universityName],
    ["Duration", item.duration],
    [hasSemesterFee ? "Per Semester Fee" : "Total Fee", hasSemesterFee ? item.semesterFee : item.totalFee],
    ["Location", item.location],
  ];

  return (
    <article
      className="group relative flex h-full min-h-[355px] flex-col overflow-hidden rounded-[20px] border border-[#DCE5EC] bg-white shadow-[0_8px_24px_rgba(6,59,114,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--card-color)] hover:shadow-[0_15px_32px_rgba(6,59,114,0.13)]"
      style={{
        "--card-color": item.color,
      }}
    >

      {/* COLORED TOP BORDER */}
      <div className="absolute inset-x-0 top-0 z-20 h-[5px] bg-[var(--card-color)]" />

      {/* COURSE IMAGE */}
      <div className="relative mx-3.5 mt-3.5 h-[140px] shrink-0 overflow-hidden rounded-[14px] sm:h-[150px]">

        <Image
          src={item.image}
          alt={`${item.cardTitle} degree`}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 28vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.055]"
        />

        {/* IMAGE OVERLAY */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031A30]/15 via-transparent to-transparent"
        />

        {accreditation && (
          <span className="absolute right-2.5 top-2.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-extrabold text-[#0C337B] shadow-sm">
            {accreditation}
          </span>
        )}

      </div>

      {/* CARD BODY */}
      <div className="relative flex flex-1 flex-col px-4 pb-4 pt-3">

        {/* COURSE HEADING */}
        <h3 className="line-clamp-2 text-[18px] font-bold leading-[1.25] tracking-[-0.025em] text-[#0C337B] sm:text-[19px]">
          {item.cardTitle}
        </h3>

        {/* DYNAMIC ACCENT LINE */}
        <div className="mt-2 h-[3px] w-10 rounded-full bg-[var(--card-color)]" />

        <p className="mt-1.5 text-xs font-semibold text-[#40556A]">Mode: {item.mode}</p>
        <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-3 text-xs">
          {details.map(([label, value], index) => (
            <div key={label} className={`min-w-0 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
              <dt className="text-[#61758A]">{label}</dt>
              <dd className="mt-1 break-words font-semibold leading-relaxed text-[#0C337B]">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-[#40556A]">{item.paymentOptions}</p>

        {/* EXPLORE COURSE BUTTON */}
        <Link
          href="/contact"
          aria-label={`Enquire about ${item.cardTitle}`}
          className="relative z-10 mt-3 flex min-h-[40px] w-full items-center justify-between gap-3 rounded-[10px] border border-[#E8EDF4] bg-[#F4F7FA] px-3.5 py-2.5 text-left text-[12px] font-bold text-[#0C337B] transition-all duration-300 hover:border-[var(--card-color)] hover:bg-[var(--card-color)] hover:text-white group-hover:border-[var(--card-color)] group-hover:bg-[var(--card-color)] group-hover:text-white"
        >
          <span>Explore Course</span>

          <ArrowRight
            size={17}
            strokeWidth={2}
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>
    </article>
  );
}
