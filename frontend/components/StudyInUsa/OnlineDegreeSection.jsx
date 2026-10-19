"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  FileText,
  ExternalLink,
  Sparkles,
  Award,
  Globe2,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import GlassFolder from "@/components/ui/glass-folder-cards";

/* =====================================================================
   COMPREHENSIVE CONTENT DATA FOR THE 5 FOLDERS & DIALOG DETAILS
===================================================================== */

const FOLDER_CATEGORIES = [
  {
    id: "01",
    label: "Academic Pathways",
    meta: "4 Degrees & Intakes",
    tone: "light",
    art: "aurora",
    seed: 7,
    summary: "Flexible undergraduate pathways and specialized postgraduate degrees across top U.S. institutions.",
    files: [
      {
        name: "Undergraduate Programs",
        meta: "4-Year Bachelor's",
        art: "aurora",
        key: "undergrad",
      },
      {
        name: "Postgraduate Degrees",
        meta: "1-2 Year MS & MBA",
        art: "ember",
        key: "postgrad",
      },
      {
        name: "Doctoral Programs",
        meta: "PhD Research",
        art: "glacier",
        key: "phd",
      },
      {
        name: "US Intakes Calendar",
        meta: "Fall, Spring & Summer",
        art: "verdant",
        key: "intakes",
      },
    ],
  },
  {
    id: "02",
    label: "Cost of Studying",
    meta: "4 Tuition & Fee Guides",
    tone: "light",
    art: "ember",
    seed: 14,
    summary: "Indicative annual tuition fee ranges, program costs, and budgeting guidelines for international students.",
    files: [
      {
        name: "Bachelor's Tuition",
        meta: "$19k–$40k / Year",
        art: "ember",
        key: "ug_tuition",
      },
      {
        name: "Master's Tuition",
        meta: "$16k–$31k / Year",
        art: "aurora",
        key: "pg_tuition",
      },
      {
        name: "Mandatory Univ Fees",
        meta: "Health & Labs",
        art: "dusk",
        key: "other_fees",
      },
      {
        name: "Total Budget Strategy",
        meta: "Overall Planning",
        art: "glacier",
        key: "budget_strategy",
      },
    ],
  },
  {
    id: "03",
    label: "Living & Culture",
    meta: "4 Living & Life Guides",
    tone: "light",
    art: "dusk",
    seed: 22,
    summary: "Monthly living expenses, accommodation types, transport, food, and navigating American campus life.",
    files: [
      {
        name: "Monthly Student Budget",
        meta: "$1,000–$2,500 / mo",
        art: "dusk",
        key: "monthly_budget",
      },
      {
        name: "Housing & Utilities",
        meta: "Dorms & Rentals",
        art: "verdant",
        key: "housing",
      },
      {
        name: "Food, Groceries & Travel",
        meta: "Cooking & Transit",
        art: "ember",
        key: "lifestyle",
      },
      {
        name: "American Campus Life",
        meta: "Culture & Diversity",
        art: "aurora",
        key: "culture",
      },
    ],
  },
  {
    id: "04",
    label: "Scholarships & Aid",
    meta: "4 Funding Opportunities",
    tone: "light",
    art: "verdant",
    seed: 31,
    summary: "Merit scholarships, need-based financial aid, prestigious fellowships, and step-by-step application guidance.",
    files: [
      {
        name: "Merit-Based Awards",
        meta: "Academic Excellence",
        art: "verdant",
        key: "merit_aid",
      },
      {
        name: "Need-Based Financial Aid",
        meta: "Harvard, Yale & Top Unis",
        art: "glacier",
        key: "need_aid",
      },
      {
        name: "External Fellowships",
        meta: "Fulbright & Inlaks",
        art: "aurora",
        key: "fellowships",
      },
      {
        name: "7-Step Application Guide",
        meta: "Checklist & Deadlines",
        art: "dusk",
        key: "scholarship_steps",
      },
    ],
  },
  {
    id: "05",
    label: "Post-Study Visa",
    meta: "4 OPT & Career Pathways",
    tone: "light",
    art: "glacier",
    seed: 45,
    summary: "F-1 Optional Practical Training (OPT), 24-month STEM extension, and transitioning to employer sponsorship.",
    files: [
      {
        name: "12-Month OPT",
        meta: "Post-Grad Work Permit",
        art: "glacier",
        key: "opt_standard",
      },
      {
        name: "24-Month STEM Extension",
        meta: "Up to 36 Mos Total",
        art: "ember",
        key: "opt_stem",
      },
      {
        name: "F-1 Eligibility & SEVIS",
        meta: "DSO Recommendation",
        art: "dusk",
        key: "opt_eligibility",
      },
      {
        name: "H-1B & Future Careers",
        meta: "Employer Sponsorship",
        art: "aurora",
        key: "h1b_careers",
      },
    ],
  },
];

/* Detailed modal content for each file */
const FILE_DETAILS = {
  // Academic Pathways
  undergrad: {
    category: "01 / Academic Pathways",
    title: "Undergraduate Programs (Bachelor's Degrees)",
    badge: "Duration: 4 Years",
    tagline: "Explore flexible major options, diverse electives, and foundational research.",
    highlights: [
      { label: "Standard Duration", value: "Typically 4 Years" },
      { label: "Credit System", value: "120–130 Credits" },
      { label: "Curriculum", value: "Major + Minor + General Electives" },
      { label: "Assessment", value: "Midterms, quizzes, coursework & finals" },
    ],
    sections: [
      {
        heading: "How does the US undergraduate system work?",
        content:
          "Bachelor's degrees in the United States typically take four years. Unlike systems where students are locked into a single discipline on day one, many US universities allow undergraduates to explore diverse subjects outside their primary field before officially declaring a major by their sophomore or junior year.",
      },
      {
        heading: "Academic Experience & Classroom Culture",
        content:
          "Learning often extends beyond lectures and examinations. Students actively participate in seminars, complete faculty-guided research projects, give presentations, and work on collaborative team assignments. Coursework, class participation, and regular quizzes contribute directly to your continuous GPA.",
      },
      {
        heading: "Choosing the Right Institution",
        content:
          "When comparing universities, look beyond rankings. Course structure, faculty expertise, research labs, undergraduate assistantship opportunities, and alumni networks all play a critical role in shaping your career outcomes.",
      },
    ],
  },
  postgrad: {
    category: "01 / Academic Pathways",
    title: "Postgraduate Programs (Master's Degrees: MS & MBA)",
    badge: "Duration: 1–2 Years",
    tagline: "Deep specialization across STEM, Business, Healthcare, and Humanities.",
    highlights: [
      { label: "Standard Duration", value: "Commonly 1–2 Years" },
      { label: "Degrees Available", value: "MS, MBA, MEng, MA, MPH, LLM" },
      { label: "Focus", value: "Advanced specialization & research" },
      { label: "Work Opportunities", value: "CPT internships & On-campus GA/TA" },
    ],
    sections: [
      {
        heading: "Degree Options & Academic Rigor",
        content:
          "Master's degrees commonly take one to two years, depending on the field of study and institution. Options range from Master of Science (MS) programs in technical and engineering fields to specialized MBA programs in business, and focused degrees across healthcare, data analytics, economics, and public policy.",
      },
      {
        heading: "Curriculum & Capstone Projects",
        content:
          "Postgraduate programs allow for deep dive specialization. Many programs offer thesis and non-thesis tracks, industry capstone consulting projects, and opportunities to conduct sponsored research in collaboration with global tech and financial corporations.",
      },
      {
        heading: "Application Considerations for Indian Students",
        content:
          "Evaluate prerequisites, credit transfer policies, STEM designation status, and available graduate assistantships before applying to maximize your return on investment.",
      },
    ],
  },
  phd: {
    category: "01 / Academic Pathways",
    title: "Doctoral Programs (PhD & Advanced Research)",
    badge: "Duration: 4–6 Years",
    tagline: "Pioneering academic research with full departmental assistantships.",
    highlights: [
      { label: "Standard Duration", value: "4 to 6 Years" },
      { label: "Funding", value: "Commonly fully-funded via RA / TA" },
      { label: "Outcome", value: "Original dissertation & defense" },
      { label: "Career Path", value: "Academia, R&D Labs, Global Industry" },
    ],
    sections: [
      {
        heading: "Research Focus & Structure",
        content:
          "PhD programs focus on cutting-edge research and independent academic discovery. Students spend the first 1–2 years taking advanced seminar coursework and passing comprehensive qualifying examinations, followed by extensive dissertation research under the mentorship of faculty advisors.",
      },
      {
        heading: "Departmental Funding & Stipends",
        content:
          "Most reputable doctoral programs at major U.S. research universities offer full tuition waivers alongside a monthly living stipend in exchange for Teaching Assistantships (TA) or Graduate Research Assistantships (GRA).",
      },
    ],
  },
  intakes: {
    category: "01 / Academic Pathways",
    title: "When Can You Start? (US Intakes Calendar)",
    badge: "Fall, Spring & Summer",
    tagline: "Understanding application timelines and deadlines for US admissions.",
    highlights: [
      { label: "Fall Intake", value: "August – September (Primary)" },
      { label: "Spring Intake", value: "January (Secondary)" },
      { label: "Summer Intake", value: "May – June (Select programs)" },
      { label: "Planning Window", value: "Start 9–12 months in advance" },
    ],
    sections: [
      {
        heading: "Fall Intake (August–September)",
        content:
          "The largest and most comprehensive intake of the academic year. It offers the widest range of degree programs, maximum university scholarships, and the highest availability of on-campus jobs and assistantships.",
      },
      {
        heading: "Spring Intake (January)",
        content:
          "An ideal alternative for students who need extra time to prepare their test scores, finalize documentation, or complete their undergraduate degree requirements. Many top STEM and Business programs accept strong candidates in Spring.",
      },
      {
        heading: "Summer Intake (May–June)",
        content:
          "Available for selected specialized certificates, accelerated business cohorts, and intensive language programs. Availability varies significantly by university.",
      },
    ],
  },

  // Cost of Studying
  ug_tuition: {
    category: "02 / Cost of Studying",
    title: "Bachelor's Degree Tuition Fees",
    badge: "Approx. $19,000–$40,000 / Year",
    tagline: "Annual indicative tuition fee benchmarks across public and private universities.",
    highlights: [
      { label: "Indicative Range", value: "$19,000 – $40,000/yr (₹18–38 Lakh)" },
      { label: "Public Out-of-State", value: "Avg. $31,880/yr (College Board 2025)" },
      { label: "Private Non-Profit", value: "Avg. $45,000/yr (College Board 2025)" },
      { label: "Exchange Basis", value: "Illustrative rate: ₹95 / USD" },
    ],
    sections: [
      {
        heading: "Understanding Undergraduate Tuition",
        content:
          "For bachelor's programs, the College Board's Trends in College Pricing 2025 reports average annual out-of-state tuition and fees of US$31,880 (approx. ₹30.3 lakh) at public 4-year institutions and US$45,000 (approx. ₹42.75 lakh) at private non-profit universities.",
      },
      {
        heading: "Planning for International Students",
        content:
          "These figures serve as useful planning reference points for Indian students. Individual programs and state universities publish specific international student rates that may vary based on laboratory and departmental credits.",
      },
    ],
  },
  pg_tuition: {
    category: "02 / Cost of Studying",
    title: "Master's Degree Tuition Fees",
    badge: "Approx. $16,000–$31,000 / Year",
    tagline: "Program-specific fee breakdowns for MS, MBA, and professional degrees.",
    highlights: [
      { label: "Indicative Range", value: "$16,000 – $31,000/yr (₹15.2–29.5 Lakh)" },
      { label: "Specialized / MBA", value: "$22,000 – $45,000/yr (₹20.9–42.7 Lakh)" },
      { label: "Duration Factor", value: "Total cost depends on 1 vs 2-year structure" },
      { label: "ROI Potential", value: "High career compensation in STEM fields" },
    ],
    sections: [
      {
        heading: "How Much Does a Master's Cost in the USA?",
        content:
          "International students can use US$22,000–45,000 per year (approx. ₹20.9–42.75 lakh) as an indicative tuition range for many technical master's programs. Specialized MBA degrees and high-ranked private institutions cost more, while public state universities often offer economical tracks.",
      },
      {
        heading: "Degree Duration Impact",
        content:
          "A two-year master's degree requires a different total budget from an accelerated 1-year program, even if the annual tuition appears similar. Always evaluate total estimated completion expenses.",
      },
    ],
  },
  other_fees: {
    category: "02 / Cost of Studying",
    title: "Mandatory University Fees & Additional Expenses",
    badge: "Budgeting for Health, Labs & Visas",
    tagline: "Essential expenses beyond basic tuition you must account for before arrival.",
    highlights: [
      { label: "University Fees", value: "$1,500 – $3,500/yr (tech, student life)" },
      { label: "Health Insurance", value: "$1,800 – $3,500/yr (mandatory coverage)" },
      { label: "Books & Equipment", value: "$800 – $1,500/yr" },
      { label: "SEVIS & F-1 Visa", value: "$350 SEVIS I-901 + $185 Visa fee" },
    ],
    sections: [
      {
        heading: "Mandatory Campus & Technology Fees",
        content:
          "Universities charge dedicated student life, laboratory access, recreation, and campus technology fees that are billed separately from pure tuition charges.",
      },
      {
        heading: "Health Insurance Coverage",
        content:
          "Nearly all U.S. universities require international students to enroll in approved comprehensive health insurance coverage. Institutional policies and waiver requirements differ widely.",
      },
    ],
  },
  budget_strategy: {
    category: "02 / Cost of Studying",
    title: "How Much Should You Budget Before Applying?",
    badge: "Financial Planning Roadmap",
    tagline: "Calculating total cost of attendance and avoiding financial surprises.",
    highlights: [
      { label: "I-20 Requirement", value: "Proof of 1 year total funds required" },
      { label: "Upfront Costs", value: "App fees, GRE/IELTS, tuition deposits" },
      { label: "Funding Offsets", value: "Scholarships, on-campus jobs, loans" },
      { label: "Smart Shortlisting", value: "Balance ambitious and budget-friendly unis" },
    ],
    sections: [
      {
        heading: "Official Cost of Attendance (COA)",
        content:
          "Always consult the university's official Cost of Attendance page for your exact major. The I-20 document issued for your visa interview requires documented proof of liquid funds covering tuition plus living expenses for your first academic year.",
      },
    ],
  },

  // Living & Culture
  monthly_budget: {
    category: "03 / Cost of Living & Culture",
    title: "How Much Does It Cost to Live in the USA as a Student?",
    badge: "US$1,000–$2,500 / Month",
    tagline: "Realistic monthly budget ranges for Indian students across US college towns.",
    highlights: [
      { label: "Estimated Range", value: "$1,000 – $2,500/mo (₹95,000–2.38 Lakh)" },
      { label: "College Towns", value: "Economical ($900 – $1,400/mo)" },
      { label: "Metropolitan Cities", value: "Higher living costs ($1,800 – $2,500+/mo)" },
      { label: "Excludes", value: "Tuition and institutional fees" },
    ],
    sections: [
      {
        heading: "Location Drives Living Expenses",
        content:
          "Your monthly budget in smaller college towns across states like Texas, Indiana, or Ohio will be significantly more economical than living in high-cost metro hubs such as New York City, Boston, or San Francisco.",
      },
      {
        heading: "Recommended Monthly Allocation",
        content:
          "Rent: 50–60%, Groceries: 20–25%, Transport & Utilities: 10–15%, Personal & Miscellaneous: 10%.",
      },
    ],
  },
  housing: {
    category: "03 / Cost of Living & Culture",
    title: "Student Accommodation & Utilities",
    badge: "On-Campus vs. Off-Campus Housing",
    tagline: "Finding the right place to stay and managing security deposits and utilities.",
    highlights: [
      { label: "On-Campus Dorms", value: "$800 – $1,600/mo (includes utilities)" },
      { label: "Off-Campus Shared", value: "$450 – $950/mo (shared apartment)" },
      { label: "Utilities", value: "Electricity, heating, water, high-speed Wi-Fi" },
      { label: "Deposits", value: "1–2 months rent upfront" },
    ],
    sections: [
      {
        heading: "On-Campus Residence Halls",
        content:
          "Dorms offer unmatched proximity to academic buildings and include utilities and campus security. Many universities require first-year undergraduates to live on campus.",
      },
      {
        heading: "Off-Campus Shared Living",
        content:
          "Most Indian graduate students choose shared off-campus apartments with roommates to drastically reduce rental expenses while enjoying independent living.",
      },
    ],
  },
  lifestyle: {
    category: "03 / Cost of Living & Culture",
    title: "Food, Groceries, Transport & Daily Essentials",
    badge: "Smart Daily Budget Management",
    tagline: "Balancing Indian groceries, cooking, campus shuttles, and social spending.",
    highlights: [
      { label: "Cooking at Home", value: "$200 – $350/mo for groceries" },
      { label: "Campus Transit", value: "Often free or discounted for students" },
      { label: "Mobile Plans", value: "$25 – $45/mo on group student plans" },
      { label: "Indian Stores", value: "Widely accessible across US college cities" },
    ],
    sections: [
      {
        heading: "Managing Food Spending",
        content:
          "American cities and college towns have well-stocked Indian and Asian supermarkets (Patel Brothers, local markets). Cooking at home is one of the most effective ways to maintain a healthy budget and stay connected to familiar tastes.",
      },
    ],
  },
  culture: {
    category: "03 / Cost of Living & Culture",
    title: "The Culture: Finding Your Place in America",
    badge: "Embracing New Perspectives",
    tagline: "Navigating direct communication, campus diversity, weather, and student life.",
    highlights: [
      { label: "Communication", value: "Direct, punctual, schedule-focused" },
      { label: "Campus Life", value: "Student clubs, ISA events, Diwali fests" },
      { label: "Diversity", value: "Classmates from 50+ countries" },
      { label: "Adjustment", value: "Keep your roots while discovering new horizons" },
    ],
    sections: [
      {
        heading: "Adapting to the American Rhythm",
        content:
          "Conversations may feel more direct, and schedules are structured in advance. Campus brings together individuals from diverse cultures, offering debate clubs, sports leagues, research symposiums, and cultural associations.",
      },
      {
        heading: "Preserving Your Heritage",
        content:
          "The goal is not to leave your culture behind, but to build a rich global student experience carrying your traditions forward while mastering new ways of learning and collaborating.",
      },
    ],
  },

  // Scholarships
  merit_aid: {
    category: "04 / Scholarships & Funding",
    title: "Merit-Based Scholarships in the USA",
    badge: "Rewarding Academic & Leadership Excellence",
    tagline: "Automatic institutional awards, dean's scholarships, and honors funding.",
    highlights: [
      { label: "Award Values", value: "$5,000 up to full tuition coverage" },
      { label: "Evaluation", value: "GPA, GRE/SAT, SOP, leadership achievements" },
      { label: "Application", value: "Automatic with admission or separate form" },
      { label: "Renewability", value: "Maintain minimum GPA (e.g. 3.0+)" },
    ],
    sections: [
      {
        heading: "How Merit Scholarships Work",
        content:
          "Merit awards recognize past academic excellence, standardized test scores, research publications, and leadership credentials. Some universities automatically consider all applicants upon admission submission, while others invite selected applicants to apply for competitive honors scholarships.",
      },
    ],
  },
  need_aid: {
    category: "04 / Scholarships & Funding",
    title: "Need-Based Financial Aid (Harvard, Yale & Top Unis)",
    badge: "100% Demonstrated Financial Need",
    tagline: "Need-based aid policies that extend generously to international undergraduates.",
    highlights: [
      { label: "Key Institutions", value: "Harvard, Yale, Princeton, MIT, Amherst" },
      { label: "Aid Model", value: "Meets 100% of demonstrated financial need" },
      { label: "Documentation", value: "CSS Profile, International Financial Aid Form" },
      { label: "Selectivity", value: "Extremely competitive admission standard" },
    ],
    sections: [
      {
        heading: "Substantial Need-Based Aid Policies",
        content:
          "Institutions like Harvard and Yale commit to meeting 100% of the demonstrated financial need of admitted undergraduate students, including international applicants. Admission is holistic and rigorous, but admitted students receive aid tailored to family income.",
      },
    ],
  },
  fellowships: {
    category: "04 / Scholarships & Funding",
    title: "Prestigious External Fellowships (Fulbright, Inlaks & Stanford)",
    badge: "Competitive Global Fellowships",
    tagline: "Comprehensive funding packages for graduate and doctoral scholars.",
    highlights: [
      { label: "Fulbright-Nehru", value: "Full tuition, living stipend & airfare" },
      { label: "Inlaks Foundation", value: "Up to $100,000 for top global universities" },
      { label: "Knight-Hennessy", value: "Full graduate funding at Stanford University" },
      { label: "Eligibility", value: "Work experience, leadership, academic distinction" },
    ],
    sections: [
      {
        heading: "Fulbright-Nehru Master's Fellowships",
        content:
          "Supports outstanding Indian professionals pursuing selected master's degrees in the US. Requires a bachelor's degree, at least 3 years of full-time professional experience, and demonstrated community leadership.",
      },
      {
        heading: "Inlaks Shivdasani Foundation Scholarships",
        content:
          "Provides funding for top-tier master's programs in Europe and the USA for Indian students who demonstrate exceptional intellectual and social promise.",
      },
    ],
  },
  scholarship_steps: {
    category: "04 / Scholarships & Funding",
    title: "How to Get a Scholarship to Study in USA (7 Steps)",
    badge: "Proven 7-Step Application Strategy",
    tagline: "Actionable roadmap from university shortlisting to net cost calculation.",
    highlights: [
      { label: "Step 1", value: "Shortlist universities with generous aid" },
      { label: "Step 2", value: "Align funding route with your profile" },
      { label: "Step 3", value: "Verify exact eligibility criteria" },
      { label: "Step 4", value: "Craft tailored SOPs and secure strong LORs" },
      { label: "Step 5", value: "Complete family financial paperwork accurately" },
      { label: "Step 6", value: "Apply before early priority deadlines" },
      { label: "Step 7", value: "Compare net remaining out-of-pocket costs" },
    ],
    sections: [
      {
        heading: "Strategy Over Speculation",
        content:
          "Treat scholarship research as an integral part of university shortlisting from day one. Apply well ahead of regular admission deadlines, as scholarship pools are frequently allocated on a first-come, first-served basis.",
      },
    ],
  },

  // Post-Study Work Visa (OPT)
  opt_standard: {
    category: "05 / Post-Study Visa",
    title: "12 Months of Optional Practical Training (OPT)",
    badge: "F-1 Post-Completion Work Authorization",
    tagline: "Gain hands-on professional U.S. work experience directly in your field.",
    highlights: [
      { label: "Duration", value: "12 Months of full-time work authorization" },
      { label: "Document", value: "Employment Authorization Document (EAD)" },
      { label: "Job Requirement", value: "Directly related to major field of study" },
      { label: "Processing Agency", value: "USCIS (Form I-765)" },
    ],
    sections: [
      {
        heading: "What is Optional Practical Training?",
        content:
          "Eligible F-1 international students can apply for up to 12 months of post-completion OPT after graduating. Employment must be directly related to the student's major field of study. Work can begin only on the authorized start date shown on your USCIS-issued EAD card.",
      },
    ],
  },
  opt_stem: {
    category: "05 / Post-Study Visa",
    title: "Up to 36 Months: 24-Month STEM OPT Extension",
    badge: "Total 3 Years of US Work Experience",
    tagline: "Extended work authorization for Science, Technology, Engineering & Math degrees.",
    highlights: [
      { label: "Extension", value: "Additional 24 Months (36 Months total)" },
      { label: "Degree Requirement", value: "DHS STEM Designated Degree List" },
      { label: "Employer Mandate", value: "Enrolled in E-Verify system" },
      { label: "Training Plan", value: "Completed Form I-983" },
    ],
    sections: [
      {
        heading: "STEM Extension Eligibility",
        content:
          "Graduates whose degree program appears on the US Department of Homeland Security (DHS) STEM list may apply for an additional 24-month extension, yielding up to 36 months of total post-completion work authorization.",
      },
      {
        heading: "Employer Obligations",
        content:
          "Employers must be registered in the federal E-Verify program and work with the student to establish a formal mentoring and training plan under Form I-983.",
      },
    ],
  },
  opt_eligibility: {
    category: "05 / Post-Study Visa",
    title: "Who Is Eligible for OPT & When to Apply?",
    badge: "Application Windows & Compliance",
    tagline: "Navigating DSO recommendations in SEVIS, 90-day windows, and USCIS filing.",
    highlights: [
      { label: "Earliest Filing", value: "Up to 90 days before graduation" },
      { label: "Latest Filing", value: "No later than 60 days after graduation" },
      { label: "SEVIS Requirement", value: "DSO recommendation within past 30 days" },
      { label: "Academic Standing", value: "Minimum 1 full academic year in F-1 status" },
    ],
    sections: [
      {
        heading: "Application Window Timing",
        content:
          "You can apply for OPT up to 90 days before your degree completion date and up to 60 days after. USCIS must receive your application within 30 days of your university's DSO entering the recommendation into SEVIS.",
      },
    ],
  },
  h1b_careers: {
    category: "05 / Post-Study Visa",
    title: "What Happens After OPT? (H-1B & Future Career Pathways)",
    badge: "Specialty Occupation Visa Sponsorship",
    tagline: "Transitioning to employer-sponsored H-1B status and long-term planning.",
    highlights: [
      { label: "Visa Category", value: "H-1B Specialty Occupation" },
      { label: "Process", value: "Employer-led petition & annual lottery" },
      { label: "Master's Cap", value: "Additional 20,000 quota for US Master's grads" },
      { label: "Strategy", value: "Use 3-year STEM window for multiple lottery attempts" },
    ],
    sections: [
      {
        heading: "Employer-Sponsored H-1B Status",
        content:
          "During your OPT period, eligible U.S. employers can sponsor you for H-1B specialty occupation status. Graduates with a U.S. Master's degree benefit from an additional 20,000 exemption pool in the annual lottery selection process.",
      },
      {
        heading: "Course Choice Strategy",
        content:
          "Prioritize degree programs with STEM designation and strong practical internship connections, giving you the best runway to establish your career.",
      },
    ],
  },
};

/* All ordered keys for carousel navigation across all folders */
const ALL_KEYS = FOLDER_CATEGORIES.flatMap((cat) => cat.files.map((f) => f.key));

/* =====================================================================
   MAIN SECTION COMPONENT
===================================================================== */

export default function OnlineDegreeSection() {
  const [activeDialogKey, setActiveDialogKey] = useState(null);

  const selectedDetail = activeDialogKey ? FILE_DETAILS[activeDialogKey] : null;

  const currentIndex = activeDialogKey ? ALL_KEYS.indexOf(activeDialogKey) : -1;
  const canPrev = currentIndex > 0;
  const canNext = currentIndex >= 0 && currentIndex < ALL_KEYS.length - 1;

  const handlePrev = () => {
    if (canPrev) {
      setActiveDialogKey(ALL_KEYS[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (canNext) {
      setActiveDialogKey(ALL_KEYS[currentIndex + 1]);
    }
  };

  /* Keyboard arrows & escape listener */
  useEffect(() => {
    if (!activeDialogKey) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setActiveDialogKey(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDialogKey, currentIndex]);

  return (
    <section className="relative w-full overflow-hidden bg-white pt-4 pb-12 sm:pt-6 sm:pb-16 md:pb-20">
      {/* Background ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[850px] -translate-x-1/2 rounded-full bg-[#1765F5]/[0.035] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#5D93F8]/[0.03] blur-[150px]"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1550px] px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[26px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#0C337B] sm:text-[34px] md:text-[40px]"
          >
            Designed for <span className="text-[#1765F5]">Your Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed text-[#526B8C] sm:text-[15px]"
          >
            Explore our interactive folder archives below. Hover to lean a folder, click to fan out its files, and tap any document to inspect complete admissions, costs, scholarships, and visa guidelines.
          </motion.p>
        </div>

        {/* 5 Glass Folder Cards Row — Perfectly aligned in a straight horizontal line */}
        <div className="flex w-full items-start justify-start xl:justify-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto no-scrollbar px-6 sm:px-8 py-4">
          {FOLDER_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex shrink-0 flex-col items-center w-[230px]"
            >
              {/* Folder Component (consistent 230px width and fixed baseline) */}
              <div className="flex w-[230px] items-center justify-center">
                <GlassFolder
                  label={cat.label}
                  meta={cat.meta}
                  tone={cat.tone}
                  art={cat.art}
                  seed={cat.seed}
                  action="none"
                  width={230}
                  appearDelay={idx * 70}
                  files={cat.files}
                  onFileSelect={(file) => {
                    if (file.key) {
                      setActiveDialogKey(file.key);
                    }
                  }}
                />
              </div>

              {/* Pillar Category Number & Summary under folder - fixed uniform height */}
              <div className="mt-3 flex w-[230px] min-h-[80px] flex-col items-center text-center">
                <span className="font-mono text-[11px] font-bold text-[#1765F5]">
                  {cat.id} / 05
                </span>
                <p className="mt-1 text-[12px] leading-relaxed text-[#526B8C]">
                  {cat.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          DETAILED DIALOG / MODAL (Light Shade + Depth Effect + Carousel Navigation)
      ====================================================================== */}
      <AnimatePresence>
        {selectedDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
            {/* Backdrop with dark blue tint and blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDialogKey(null)}
              className="absolute inset-0 bg-[#0C337B]/55 backdrop-blur-md"
            />

            {/* Modal Dialog Card - Light & Ethereal Glass Depth Theme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#A2C1FB]/50 bg-white shadow-[0_25px_80px_rgba(12,51,123,0.35)]"
            >
              {/* 3D DEPTH BACKGROUND IMAGE WITH FROSTED OVERLAY */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <Image
                  src="/images/study-usa/modal-depth-bg.jpg"
                  alt=""
                  fill
                  className="object-cover object-top opacity-20 filter blur-[1px] scale-105"
                  priority
                />
                {/* Frosted glass gradient wash over depth image */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E8F0FE]/85 via-white/95 to-white" />
              </div>

              {/* MODAL HEADER */}
              <div className="relative z-10 border-b border-[#E2E8F0] bg-white/75 px-5 py-4 sm:px-8 sm:py-5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3">
                  {/* Category Pill & Progress Indicator */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="inline-flex items-center rounded-full border border-[#5D93F8]/30 bg-[#E8F0FE] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1765F5]">
                      {selectedDetail.category}
                    </span>
                    <span className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#1047AC]">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(ALL_KEYS.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Top Right Controls: Carousel Prev/Next & Close */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={!canPrev}
                      aria-label="Previous guide"
                      title="Previous (Left Arrow)"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#0C337B] shadow-sm transition hover:border-[#1765F5] hover:bg-[#E8F0FE] disabled:pointer-events-none disabled:opacity-30 sm:h-9 sm:w-9"
                    >
                      <ChevronLeft size={18} strokeWidth={2.2} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canNext}
                      aria-label="Next guide"
                      title="Next (Right Arrow)"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#0C337B] shadow-sm transition hover:border-[#1765F5] hover:bg-[#E8F0FE] disabled:pointer-events-none disabled:opacity-30 sm:h-9 sm:w-9"
                    >
                      <ChevronRight size={18} strokeWidth={2.2} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDialogKey(null)}
                      aria-label="Close dialog"
                      title="Close (Esc)"
                      className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:h-9 sm:w-9"
                    >
                      <X size={17} strokeWidth={2.2} />
                    </button>
                  </div>
                </div>

                {/* Title & Tagline with smooth transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDialogKey}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3"
                  >
                    <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-[#0C337B] sm:text-[25px]">
                      {selectedDetail.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-[#526B8C] sm:text-[14px]">
                      {selectedDetail.tagline}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Key Metric Chips Grid */}
                {selectedDetail.highlights && (
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {selectedDetail.highlights.map((chip, cIdx) => (
                      <div
                        key={cIdx}
                        className="rounded-xl border border-[#A2C1FB]/40 bg-white/80 p-2.5 shadow-sm backdrop-blur-sm transition hover:border-[#5D93F8]"
                      >
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                          {chip.label}
                        </span>
                        <span className="mt-0.5 block text-[12px] font-extrabold text-[#1047AC]">
                          {chip.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* MODAL BODY (Scrollable with smooth carousel slide transition) */}
              <div className="relative z-10 flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDialogKey}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-4 sm:space-y-5"
                  >
                    {selectedDetail.sections.map((sec, sIdx) => (
                      <div
                        key={sIdx}
                        className="rounded-2xl border border-[#E2E8F0]/90 bg-white/80 p-4 sm:p-5 shadow-sm backdrop-blur-sm"
                      >
                        <h4 className="flex items-center gap-2.5 text-[15px] font-extrabold text-[#0C337B] sm:text-[16px]">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F0FE] text-[#1765F5]">
                            <CheckCircle2 size={16} strokeWidth={2.3} />
                          </span>
                          {sec.heading}
                        </h4>
                        <p className="mt-2 pl-[34px] text-[13px] leading-relaxed text-[#334155] sm:text-[14px]">
                          {sec.content}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* MODAL FOOTER WITH CAROUSEL BUTTONS */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#E2E8F0] bg-[#F8FAFC]/90 px-5 py-3.5 sm:px-8 sm:py-4 backdrop-blur-md">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={!canPrev}
                  className="flex items-center gap-2 rounded-full border border-[#D9E4ED] bg-white px-4 py-2 text-[12px] font-bold text-[#0C337B] shadow-sm transition hover:border-[#1765F5] hover:bg-[#E8F0FE] disabled:pointer-events-none disabled:opacity-30 sm:text-[13px]"
                >
                  <ChevronLeft size={16} strokeWidth={2.2} />
                  <span>Previous Guide</span>
                </button>

                <span className="hidden text-[12px] font-semibold text-[#64748B] sm:inline-block">
                  Topic {currentIndex + 1} of {ALL_KEYS.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canNext}
                    className="flex items-center gap-2 rounded-full bg-[#1765F5] px-5 py-2 text-[12px] font-bold text-white shadow-[0_4px_14px_rgba(23,101,245,0.28)] transition hover:bg-[#1047AC] disabled:pointer-events-none disabled:opacity-40 sm:text-[13px]"
                  >
                    <span>Next Guide</span>
                    <ChevronRight size={16} strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
