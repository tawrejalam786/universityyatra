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
  BookOpen,
  FileText,
  Calculator,
  Clock,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import GlobalEducationCTA from "@/components/StudyInUsa/GlobalEducationCTA";
import { BOOK_GUIDES } from "@/components/StudyInUsa/bookGuidesData";

/* =====================================================================
   COMPREHENSIVE RICH DATA FOR EACH OF THE GUIDES (FULL CLIENT CONTENT)
===================================================================== */
const GUIDE_DETAILS_DATABASE = {
  "academic-pathways": {
    id: "01",
    vol: "VOL. I",
    title: "Study in USA",
    shortTitle: "Academic Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Undergraduate Pathways, Specialized Master's Degrees & US Intake Calendars",
    heroImage: "/images/universities/canada/university-of-ottawas.webp",
    accentColor: "#0A1E3F",
    pillColors: [
      { label: "4-YEAR BACHELOR'S", bg: "#D7F77D", text: "#063B72" },
      { label: "1-2 YEAR MASTER'S", bg: "#B5E9F2", text: "#063B72" },
      { label: "RESEARCH PHDs", bg: "#FFD4E6", text: "#063B72" },
      { label: "FALL & SPRING INTAKES", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "The US education system offers students multiple ways to build their academic pathway. Undergraduate students can often study subjects outside their major, while postgraduate programs allow for deeper specialisation in a chosen field. For Indian students, understanding these differences helps when deciding which degree, university, and course structure best fits their goals.",
    metrics: [
      { label: "Bachelor's Degree", value: "Typically 4 Years" },
      { label: "Master's Degree", value: "Commonly 1–2 Years" },
      { label: "Main Intakes", value: "Fall (Aug) & Spring (Jan)" },
      { label: "Academic Flexibility", value: "Majors, Minors & Electives" },
    ],
    chapters: [
      {
        icon: GraduationCap,
        title: "How does the US education system work?",
        desc: "The right pathway depends on your current qualification, intended field of study, and future plans.",
        points: [
          "Postgraduate Programs: Master's degrees commonly take one to two years, depending on the subject and university. Options include MS programs in technical fields, MBA programs in business, and specialised degrees across healthcare, economics, and the humanities.",
          "Undergraduate Programs: Bachelor's degrees typically take four years. Many universities allow students to choose a major, take electives, and sometimes pursue a minor or additional area of study.",
          "Doctoral Programs: PhD programs focus on advanced research and independent academic work. They can take several years to complete, depending on the discipline, research requirements, and institution.",
        ],
      },
      {
        icon: BookOpen,
        title: "What is studying in the USA actually like?",
        desc: "Learning often extends beyond lectures and final examinations. Students may complete research projects, participate in seminars, give presentations, and work on group assignments. Assessment can include coursework, quizzes, midterms, class participation, and final examinations, depending on the program.",
        points: [
          "When comparing universities, look beyond rankings. Course structure, faculty expertise, research opportunities, assessment methods, and program requirements can all influence your academic experience.",
        ],
      },
      {
        icon: Calendar,
        title: "When can you start studying in the USA?",
        desc: "US universities commonly offer Fall and Spring admissions, while selected programs also accept students in Summer.",
        points: [
          "Fall Intake (August–September): The main intake, generally with the widest range of available programs.",
          "Spring Intake (January): An alternative for students who need additional time to prepare applications or meet admission requirements.",
          "Summer Intake (May–June): Available for selected courses and institutions.",
          "Intake availability and deadlines differ by university and program. Check the specific course page before planning your application.",
          "For Indian students planning to study in the USA, start by identifying the right degree level, checking entry requirements, and comparing programs that match your academic background and career goals.",
        ],
      },
    ],
    faqs: [],
  },

  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    title: "Cost of Studying in USA",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Indicative Tuition Fees, Living Costs, Health Insurance & Financial Planning",
    heroImage: "/images/universities/canada/toronto-metropolitan-university.webp",
    accentColor: "#4A101D",
    pillColors: [
      { label: "MASTER'S TUITION", bg: "#D7F77D", text: "#063B72" },
      { label: "BACHELOR'S TUITION", bg: "#B5E9F2", text: "#063B72" },
      { label: "MANDATORY FEES", bg: "#FFD4E6", text: "#063B72" },
      { label: "TOTAL DEGREE BUDGET", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Planning your education budget is an important part of choosing a university in the USA. Tuition is usually one of your biggest expenses, but the amount depends on your degree, university, field of study, and course duration. A master's program in Computer Science, for example, may have a very different fee structure from an MBA or a bachelor's degree.",
    metrics: [
      { label: "Master's Tuition (Indicative)", value: "US$22,000–$45,000 / yr" },
      { label: "Public Bachelor's (Out-of-state)", value: "US$31,880 / yr (~₹30.3 L)" },
      { label: "Private Nonprofit Bachelor's", value: "US$45,000 / yr (~₹42.75 L)" },
      { label: "Living Expenses Estimate", value: "US$1,000–$2,500 / mo" },
    ],
    chapters: [
      {
        icon: DollarSign,
        title: "How Much Does It Cost to Study in the USA?",
        points: [
          "Master's Degree Tuition Fees: For initial planning, international students can use US$22,000–45,000 per year (approximately ₹20.9–42.75 lakh) as an indicative tuition range for many master's programs. This is a planning estimate, not a verified national average. MBA programs, specialised degrees, and universities with higher tuition may cost more, while some institutions offer lower-cost options or funding.",
          "Bachelor's Degree Tuition Fees: For bachelor's programs, the College Board's Trends in College Pricing 2025 reports the following average annual tuition and fees for 2025–26:",
          "Public four-year universities, out-of-state: US$31,880 (approximately ₹30.3 lakh).",
          "Private nonprofit four-year universities: US$45,000 (approximately ₹42.75 lakh).",
          "These figures are useful reference points for Indian students, but they are undergraduate averages rather than guaranteed international-student fees. Public universities may have different published rates for international students, and individual programs can charge more or less.",
          "Rupee conversions are illustrative, using ₹95 per US dollar. Actual costs will change with the exchange rate.",
        ],
      },
      {
        icon: FileText,
        title: "What Other Expenses Should You Budget For?",
        desc: "Tuition is only one part of the total cost of studying in the USA. Before applying, account for these additional expenses:",
        points: [
          "University Fees: Mandatory student, technology, laboratory, or course-specific fees may be charged separately from tuition.",
          "Health Insurance: Many universities require international students to maintain approved health coverage. Premiums and waiver rules vary by institution.",
          "Books and Supplies: Textbooks, software, equipment, and laboratory materials depend on your course.",
          "Application and Initial Payments: Application fees, tuition deposits, and other enrolment charges can increase your upfront spending.",
          "Student Visa and SEVIS Fees: Budget separately for the applicable F-1 visa application and I-901 SEVIS fees. Confirm the latest amounts through official US government sources before paying.",
        ],
      },
      {
        icon: Calculator,
        title: "How Much Should You Budget Before Applying?",
        points: [
          "Start by checking the university's official cost-of-attendance page for your specific course. Compare tuition, mandatory fees, program duration, and any scholarships or assistantships you may qualify for. A two-year master's degree, for instance, requires a different total budget from a one-year program, even if the annual tuition is similar.",
          "You should also account for accommodation, food, transport, utilities, and personal expenses. These costs are covered in our separate Cost of Living & Culture guide.",
          "The most useful comparison is the total estimated cost of completing your degree, not just the first year's tuition. This helps you shortlist universities that fit your budget before committing to applications.",
        ],
      },
    ],
    faqs: [],
  },

  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    title: "Cost of Living in USA",
    shortTitle: "Living & Culture",
    badge: "Student Life & Monthly Expenses",
    tagline: "Monthly Expenses, Accommodation, Transit & Finding Your Place in America",
    heroImage: "/images/universities/canada/university-of-saskatchewan.webp",
    accentColor: "#165548",
    pillColors: [
      { label: "MONTHLY BUDGET", bg: "#D7F77D", text: "#063B72" },
      { label: "ACCOMMODATION", bg: "#FFD4E6", text: "#063B72" },
      { label: "FOOD & GROCERIES", bg: "#B5E9F2", text: "#063B72" },
      { label: "CAMPUS CULTURE", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Moving to the United States means learning to manage a different set of everyday expenses. Rent, groceries, transport, utilities, and personal spending all add up, and your monthly budget can look very different depending on where you live.",
    metrics: [
      { label: "Monthly Living Cost", value: "US$1,000 – $2,500 / mo" },
      { label: "Rupee Equivalent", value: "₹95,000 – ₹2.38 Lakh / mo" },
      { label: "Major Expense", value: "Housing & Accommodation" },
      { label: "Campus Life", value: "Clubs, Culture & Community" },
    ],
    chapters: [
      {
        icon: DollarSign,
        title: "How Much Does It Cost to Live in the USA as a Student?",
        points: [
          "As an initial planning estimate, budget approximately US$1,000–2,500 per month (₹95,000–2.38 lakh) for living expenses, excluding tuition. Your actual costs will depend on your university location, accommodation, transport, and lifestyle. Large metropolitan areas can be considerably more expensive than smaller university towns.",
        ],
      },
      {
        icon: HomeIcon,
        title: "What Will Your Monthly Expenses Include?",
        points: [
          "Accommodation: On-campus residence halls, shared apartments, and private rentals come with different costs. Remember to account for deposits, utilities, and any additional housing charges.",
          "Food and Groceries: Cooking at home and shopping for groceries can help you manage your budget. Eating out regularly, ordering delivery, and buying convenience foods will increase your spending.",
          "Transport: Your costs depend on the city and how close you live to campus. Some students rely on public transport, university shuttles, cycling, or walking, while others may need a car.",
          "Utilities and Internet: Depending on your housing arrangement, electricity, heating, water, and internet may be included in rent or billed separately.",
          "Personal Expenses: Mobile plans, laundry, clothing, healthcare-related costs, and social activities are easy to overlook when preparing a budget.",
          "Before choosing your university, check its official estimated living expenses and compare accommodation options nearby. Build your budget around your actual destination rather than relying on a nationwide average.",
        ],
      },
      {
        icon: Users,
        title: "The Culture: Finding Your Place in America",
        points: [
          "Your first few weeks in the United States may feel like learning a new rhythm. People might be more direct in conversations, plans are often made around individual schedules, and everyday interactions can feel different from what you're used to in India. These differences aren't necessarily better or worse; they're part of getting familiar with a new place.",
          "Campus life has its own little world. A university can bring together students from different states, countries, and backgrounds. You might find yourself in a debate club one evening, at a cultural festival the next, or sharing a meal with classmates whose experiences are completely different from yours. Student organisations, sports, interest groups, and campus events can make it easier to meet people beyond your course.",
          "Food becomes part of the adjustment, too. American campuses and cities offer everything from familiar Indian groceries and restaurants to regional cuisines from around the world. Cooking for yourself may become a regular part of student life, especially when you're balancing a busy schedule with a monthly budget.",
          "Then there's the geography. In some cities, you can walk or take a train to class, meet friends, and explore neighbourhoods without much planning. In others, distances are greater and a car may be more practical. Weather can also shape your routine, from snowy winters in the Northeast and Midwest to warmer conditions in parts of the South and Southwest.",
          "The experience won't be identical everywhere. Life in a large city can feel fast-paced and independent, while a smaller college town may revolve more closely around the university. Give yourself time to adjust, ask questions when something feels unfamiliar, and stay open to routines that differ from home.",
          "The goal isn't to leave your own culture behind. It's to build a life that lets you carry familiar traditions with you while discovering new ways of living.",
        ],
      },
    ],
    faqs: [],
  },

  "scholarships-and-aid": {
    id: "04",
    vol: "VOL. IV",
    title: "Scholarships in USA for Indian Students",
    shortTitle: "Scholarships & Aid",
    badge: "Funding, Grants & Financial Aid",
    tagline: "Merit Awards, Need-Based Aid, Fellowships & Complete Step-by-Step Application Guide",
    heroImage: "/images/universities/canada/trent-university.webp",
    accentColor: "#1A2645",
    pillColors: [
      { label: "MERIT SCHOLARSHIPS", bg: "#D7F77D", text: "#063B72" },
      { label: "NEED-BASED AID", bg: "#B5E9F2", text: "#063B72" },
      { label: "FULBRIGHT & INLAKS", bg: "#FFD4E6", text: "#063B72" },
      { label: "TA / RA ASSISTANTSHIPS", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Studying in the United States can be a significant financial commitment, but the amount you pay may not always be the same as the university's published fee. Depending on your academic profile, financial circumstances, chosen institution, and program, you may qualify for scholarships or other forms of financial assistance. The important thing is to understand what kind of funding you're looking for. Some awards recognise academic achievement, some are designed for students who demonstrate financial need, and others support research, leadership, or specific professional goals. Each comes with its own eligibility criteria and application process.",
    metrics: [
      { label: "Merit Scholarships", value: "Academic & Profile Based" },
      { label: "Need-Based Aid", value: "Assesses Family Circumstances" },
      { label: "External Funding", value: "Fulbright-Nehru & Inlaks" },
      { label: "Graduate Support", value: "TA / RA Stipends & Waivers" },
    ],
    chapters: [
      {
        icon: Award,
        title: "Types of Scholarships in USA",
        points: [
          "1. Merit-Based Scholarships: These awards recognise academic achievement and, depending on the university, may also consider leadership, extracurricular involvement, talent, or other accomplishments. Some universities automatically consider eligible applicants during admission, while others require a separate scholarship application. Merit scholarships may cover part of your tuition or provide a larger award. The amount and renewal conditions vary by institution, so check whether the award is one-time or renewable for subsequent years.",
          "2. Need-Based Financial Aid: Need-based aid is intended for students whose families may not be able to meet the full cost of education. Universities assess financial circumstances using their required forms and supporting documents. Some institutions extend substantial need-based aid to international students. For example, Harvard states that it meets the demonstrated financial need of admitted undergraduates, while Yale offers need-based aid to eligible international undergraduate applicants. These are institution-specific policies, not a standard benefit available at every US university.",
          "3. University and Department Scholarships: Universities may offer scholarships through individual schools, departments, academic programs, or donor-funded initiatives. Some are available to incoming international students; others are restricted by degree level, subject, academic performance, or other criteria. When comparing universities, check the scholarship page for your exact program rather than assuming that an award advertised by the university applies to every course.",
          "4. Graduate Assistantships and Research Funding: Students pursuing graduate study, particularly research-oriented master's and doctoral programs, may find funding through teaching assistantships, research assistantships, or departmental funding packages. Depending on the position and institution, support may include a stipend, a tuition waiver, or both. Availability is not guaranteed, and some positions have specific academic, departmental, or work requirements. PhD applicants should also investigate whether their department offers funding as part of admission.",
          "5. Government-Funded and External Scholarships: Some funding opportunities operate independently of university admission. They may support particular fields, academic levels, research projects, or professional backgrounds. For Indian applicants, options worth researching include the Fulbright-Nehru fellowship programs and the Inlaks Scholarship. Their eligibility requirements differ considerably, so check the specific award before investing time in an application.",
        ],
      },
      {
        icon: Sparkles,
        title: "Scholarships Worth Exploring",
        points: [
          "Fulbright-Nehru Master's Fellowships: These fellowships support eligible Indian professionals pursuing selected master's programs in the United States. The published eligibility criteria include a recognised bachelor's-level qualification, at least three years of relevant full-time paid professional experience, and evidence of leadership and community engagement. Eligible fields and other requirements are specified by the programme. The fellowship can provide support towards tuition and fees, living and related costs, travel, and health coverage. It is therefore particularly relevant to eligible applicants with professional experience, rather than a general scholarship for every recent graduate.",
          "Inlaks Scholarship: The Inlaks Scholarship supports eligible Indian students pursuing selected postgraduate programmes at approved institutions. Its published award may cover tuition, living expenses, one-way travel, visa costs, and a health allowance, up to the programme's stated funding limit. Applicants must meet the Foundation's eligibility requirements and have the required admission offer. Academic thresholds, age criteria, eligible institutions, subject exclusions, and application rules should be checked against the relevant year's official guidelines.",
          "Knight-Hennessy Scholars at Stanford University: For students applying to eligible graduate programmes at Stanford, Knight-Hennessy Scholars is a separate, highly competitive funding opportunity. Scholars can receive support towards tuition and associated fees, living and academic expenses, and annual travel for up to three years, subject to programme rules. Applicants must complete the relevant graduate admission process as well as the separate Knight-Hennessy application. Strong academics alone do not guarantee selection; the programme also focuses on leadership and the potential to make a positive impact.",
          "Need-Based Aid at Harvard and Yale: Harvard and Yale are examples of US universities with substantial need-based financial aid policies for international undergraduates. Both state that they meet the demonstrated financial need of admitted students under their respective policies. This does not mean that admission or full funding is easy to obtain. These are highly selective universities, and aid is determined through their own assessment processes. Their policies should not be assumed to apply to every university or to graduate programmes.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "How to Get a Scholarship to Study in USA",
        desc: "Finding funding is easier to manage when you treat it as part of your university research, rather than something to consider after receiving an offer.",
        points: [
          { title: "Step 1: Shortlist universities with suitable funding options", text: "Start by identifying universities that offer your intended course and then check their official financial aid pages. Confirm whether international students are eligible for merit awards, need-based aid, departmental scholarships, or assistantships." },
          { title: "Step 2: Identify which funding route fits your profile", text: "Your next step depends on the type of support you need. Academic achievements may be important for merit scholarships, family financial information may be required for need-based aid, and research experience or professional achievements may matter for specialised fellowships." },
          { title: "Step 3: Review eligibility before applying", text: "Check the required academic qualifications, eligible nationalities, degree levels, subjects, work experience, age criteria, and any other conditions. A scholarship's name alone does not tell you whether you qualify." },
          { title: "Step 4: Prepare a strong application", text: "Keep your academic transcripts, CV or résumé, statement of purpose, and letters of recommendation ready where required. For research-based funding, you may also need a research proposal or evidence of previous research. Tailor each application to the award's stated selection criteria." },
          { title: "Step 5: Complete financial aid documentation carefully", text: "For need-based assistance, universities may request information about family income, assets, expenses, and other financial circumstances through their designated forms. Submit the correct documents in the requested format and ensure that the information is accurate and consistent." },
          { title: "Step 6: Apply before the relevant deadlines", text: "Scholarship deadlines may be earlier than, the same as, or separate from university admission deadlines. Some awards require no additional application, while others have an independent process. Check the deadline for each university and funding programme rather than relying on a general calendar." },
          { title: "Step 7: Compare the award with your remaining costs", text: "A scholarship may cover tuition alone or include additional expenses. Once you receive an offer, check the award amount, duration, renewal conditions, and any costs that remain your responsibility. This helps you understand the actual financial commitment before accepting admission." },
        ],
      },
      {
        icon: FileText,
        title: "What Documents May You Need?",
        desc: "Requirements differ by scholarship, but common documents include:",
        points: [
          "Academic transcripts and degree certificates",
          "CV or résumé",
          "Statement of purpose or scholarship essays",
          "Letters of recommendation",
          "Standardised test scores, if required by the university or programme",
          "Family income, tax, or asset documents for need-based aid",
          "Research proposal or portfolio, where applicable",
          "University admission offer, if required by the scholarship",
          "Not every award asks for every document. Follow the official checklist for each application.",
        ],
      },
      {
        icon: Calendar,
        title: "When Should You Apply?",
        points: [
          "There is no single scholarship deadline for the entire United States. Some universities consider funding applications alongside admission, while external fellowships have their own annual cycles. Start researching well before your intended intake so you have time to prepare documents, request recommendations, and meet separate funding deadlines.",
          "One final thing to remember: A scholarship can reduce your financial burden, but it should never be assumed until it has been formally awarded. Build your university shortlist around both academic fit and realistic funding options, and calculate the remaining cost before making your final decision.",
        ],
      },
    ],
    faqs: [],
  },

  "post-study-visa": {
    id: "05",
    vol: "VOL. V",
    title: "Post-Study Work Visa USA",
    shortTitle: "Post-Study Visa",
    badge: "OPT, STEM Extensions & Careers",
    tagline: "12-Month Optional Practical Training (OPT), 24-Month STEM Extension & Career Planning",
    heroImage: "/images/universities/canada/university-of-windsor.webp",
    accentColor: "#1E2530",
    pillColors: [
      { label: "12-MONTH OPT", bg: "#D7F77D", text: "#063B72" },
      { label: "UP TO 36 MOS STEM", bg: "#B5E9F2", text: "#063B72" },
      { label: "FORM I-765 EAD", bg: "#FFD4E6", text: "#063B72" },
      { label: "EMPLOYER H-1B", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Rather than a separate graduate visa, the United States primarily uses Optional Practical Training (OPT) to let eligible F-1 international students gain practical work experience related to their field of study. OPT is a temporary employment authorisation, not a separate visa category or a guarantee of long-term employment.",
    metrics: [
      { label: "Standard OPT Duration", value: "12 Months Full-Time" },
      { label: "STEM Extension", value: "+24 Months (36 Mos Total)" },
      { label: "Application Window", value: "90 Days Pre-Graduation" },
      { label: "Long-Term Transition", value: "Employer-Sponsored H-1B" },
    ],
    chapters: [
      {
        icon: Clock,
        title: "How Long Can You Work in the USA After Graduation?",
        points: [
          "12 Months Under OPT: Eligible F-1 students can apply for up to 12 months of post-completion OPT after completing an academic program. The employment must be directly related to the student's major field of study. You cannot begin working simply because you have graduated or submitted your application. USCIS must approve your employment authorisation, and you can start only on the authorised date shown on your Employment Authorization Document (EAD). OPT eligibility and the permitted period depend on your circumstances and previous practical training. For example, full-time OPT used before graduation can reduce the amount available afterwards.",
          "Up to 36 Months for Eligible STEM Graduates: Graduates whose degrees qualify under the US Department of Homeland Security's STEM Designated Degree Program List may be eligible to apply for a further 24-month STEM OPT extension. When approved, this can provide up to 36 months of post-completion work authorisation in total.",
          "The extension has additional conditions. These generally include:",
          "A qualifying degree: Your degree must meet the applicable STEM eligibility requirements. A course sounding technical or scientific does not automatically qualify.",
          "An eligible employer: The employer must participate in E-Verify and meet the relevant requirements.",
          "A formal training plan: You and your employer must complete Form I-983, outlining the practical training, learning objectives, supervision, and evaluation process.",
          "Continued compliance: You must meet the applicable reporting and employment requirements throughout the extension.",
          "A STEM OPT extension is not automatic. Your degree, employer, application, and training arrangement must satisfy the relevant rules.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Who Is Eligible for OPT in the USA?",
        desc: "OPT is intended for eligible F-1 students who meet the applicable immigration and academic requirements. Eligibility depends on your individual circumstances, but the standard post-completion route generally involves the following:",
        points: [
          "Maintain valid F-1 status: You must comply with the conditions of your student status.",
          "Complete the required academic study: Generally, students must have completed at least one full academic year of qualifying study in the United States.",
          "Obtain a recommendation from your university: Your Designated School Official (DSO) must recommend OPT and update your record in the Student and Exchange Visitor Information System (SEVIS).",
          "Apply to USCIS: You must submit Form I-765, Application for Employment Authorization, with the required supporting documents and applicable fee.",
          "Work in a related field: Employment during OPT must relate directly to your major field of study.",
          "Meeting the general conditions does not guarantee approval. Students should confirm their eligibility and application requirements with their university's international student office.",
        ],
      },
      {
        icon: Calendar,
        title: "When Should You Apply for OPT?",
        desc: "Application timing matters because graduating, submitting an application, and receiving permission to work are separate steps.",
        points: [
          "For standard post-completion OPT, the application window generally allows you to:",
          "Apply up to 90 days before your program end date.",
          "Apply no later than 60 days after your program end date.",
          "Ensure USCIS receives your application within 30 days of the DSO entering the OPT recommendation in SEVIS.",
          "You must wait for approval and the authorised start date before beginning employment.",
          "For the STEM OPT extension, separate deadlines apply. Eligible students generally need to apply before their existing OPT authorisation expires and within the required period after their DSO's recommendation. Check the latest USCIS instructions before submitting either application, as missing a deadline can affect eligibility.",
        ],
      },
      {
        icon: Briefcase,
        title: "What Happens After OPT?",
        desc: "OPT is temporary work authorisation. It does not automatically lead to a longer-term work visa or permanent residency, so it is important to consider your next steps before your authorised period ends.",
        points: [
          "Employer-Sponsored H-1B Status: Some graduates seek H-1B status, which allows eligible US employers to employ foreign workers in qualifying specialty occupations. This requires a separate employer-led process, and many cap-subject petitions are subject to a selection process. Finding a job does not guarantee H-1B sponsorship or selection. Your employer must be willing and eligible to proceed, and the petition must satisfy the applicable requirements.",
          "Other Possible Next Steps: Depending on your circumstances, you may qualify for another immigration category, continue studying under the appropriate student status, or need to leave the United States when your authorised stay ends. Each option has separate eligibility requirements and procedures.",
          "Plan ahead rather than assuming that an employer or another visa will be available before your OPT period finishes.",
        ],
      },
      {
        icon: Award,
        title: "How Should OPT Affect Your Course Choice?",
        desc: "If working in the USA after graduation is part of your plan, consider employment authorisation alongside tuition fees, curriculum, and career prospects.",
        points: [
          "Before accepting an offer, check whether the exact degree qualifies for the STEM OPT extension, what opportunities the university offers for internships and practical learning, and how graduates in your field typically pursue employment. The degree title alone is not enough to establish STEM eligibility.",
          "Also remember that OPT does not guarantee a job, employer sponsorship, or permanent residency. Your career outcome will depend on your qualifications, employment opportunities, immigration eligibility, and the rules in force at the time.",
          "The best approach is to choose a program that fits your academic and career goals first, then understand the work authorisation options available to eligible graduates.",
        ],
      },
    ],
    faqs: [],
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

// Ensure aliases map correctly to the comprehensive guide content
GUIDE_DETAILS_DATABASE["visa-and-work-rights"] = GUIDE_DETAILS_DATABASE["post-study-visa"];
GUIDE_DETAILS_DATABASE["scholarships"] = GUIDE_DETAILS_DATABASE["scholarships-and-aid"];

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
       
<section className="relative isolate w-full overflow-hidden bg-[#EAF4FA] text-[#063B72] lg:min-h-[600px]">

  {/* BACKGROUND PHOTOGRAPH */}
  <div className="pointer-events-none absolute inset-0 -z-20">
    <Image
      src={guideData.heroImage}
      alt={guideData.title}
      fill
      priority
      sizes="100vw"
      unoptimized
      className="object-cover object-center"
    />
  </div>

  {/* OPTIONAL LIGHT OVERLAY */}
  {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/20 via-transparent to-black/10" /> */}

  {/* HERO CONTENT WRAPPER */}
  <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-3 pb-8 pt-[112px] text-center min-[390px]:px-4 sm:px-6 sm:pb-12 sm:pt-[135px] lg:min-h-[600px] lg:justify-center lg:px-8 lg:pb-16 lg:pt-[100px]">

    {/* BREADCRUMBS */}
    <div className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#526B8C] sm:mb-5 sm:text-[12px]">

      <Link
        href="/"
        className="transition-colors hover:text-[#1765F5]"
      >
        Home
      </Link>

      <span>/</span>

      <Link
        href="/study-in-usa"
        className="transition-colors hover:text-[#1765F5]"
      >
        Study in USA
      </Link>

      <span>/</span>

      <span className="font-bold text-[#0C337B]">
        {guideData.shortTitle}
      </span>

    </div>

    {/* MAIN HEADING */}
    <h1 className="relative z-10 mx-auto max-w-[1100px] text-balance text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white [-webkit-text-fill-color:#FFFFFF] [-webkit-text-stroke:1px_#0C337B] [paint-order:stroke_fill] [text-shadow:0_3px_12px_rgba(12,51,123,0.25)] min-[390px]:text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px]">
      {guideData.title}
    </h1>

    {/* VOLUME BADGE */}
    <div className="relative z-10 mb-3 mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#1765F5]/25 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-4">

      <Bookmark
        size={13}
        className="shrink-0 text-[#1765F5]"
      />

      <span className="text-center font-mono text-[9px] font-extrabold uppercase tracking-[0.07em] text-[#1765F5] min-[390px]:text-[10px] sm:text-[11px] sm:tracking-widest">
        {guideData.vol} • {guideData.badge}
      </span>

    </div>

    {/* COLORED CHARACTERISTIC PILLS */}
    <div className="relative z-10 mb-2 mt-2 flex max-w-[580px] flex-wrap items-center justify-center gap-2 sm:mb-4 sm:mt-4 sm:gap-3">

      {guideData.pillColors.map((pill, pIdx) => (
        <span
          key={pIdx}
          style={{
            backgroundColor: pill.bg,
            color: pill.text,
          }}
          className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-center text-[9px] font-extrabold uppercase tracking-[0.04em] shadow-sm min-[390px]:px-3.5 min-[390px]:text-[10px] sm:text-[11px]"
        >
          {pill.label}
        </span>
      ))}

    </div>

    {/* CTA BUTTONS - SAME ROW ON MOBILE */}
    <div className="relative z-10 mt-5 flex w-full flex-nowrap items-center justify-center gap-2 px-1 sm:mt-8 sm:gap-6 sm:px-0">

      {/* FREE CONSULTATION */}
      <a
        href="#contact-advisory"
        className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#1765F5] bg-[#1765F5] px-1.5 py-3 text-[9px] font-bold text-white shadow-[0_8px_22px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] hover:shadow-[0_16px_40px_rgba(12,51,123,0.4)] min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]"
      >
        <span>Book a Free Consultation</span>

        <ArrowRight
          size={14}
          strokeWidth={2.4}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-[17px]"
        />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20studying%20in%20USA."
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#25D366] bg-white px-1.5 py-3 text-[9px] font-bold text-[#0C337B] shadow-[0_8px_20px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]"
      >

        <svg
          aria-hidden="true"
          className="h-[14px] w-[14px] shrink-0 fill-[#25D366] transition-colors group-hover:fill-white sm:h-5 sm:w-5"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.6a9 9 0 0 1-13.3 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
        </svg>

        <span>Chat On Whatsapp</span>
      </a>

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
                        {chap.desc && (
                          <p className="mt-1 text-[13px] text-[#64748B] sm:text-[14px]">
                            {chap.desc}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Optional chapter image: add image: { src, alt } to a chapter */}
                    {chap.image && (
                      <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                        <Image
                          src={chap.image.src}
                          alt={chap.image.alt || chap.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    )}

                    <ul className="mt-5 space-y-3.5 border-t border-slate-100 pt-5">
                      {chap.points.map((pt, pIdx) => {
                        const isObj = typeof pt === "object";
                        const colonIdx = isObj ? -1 : pt.indexOf(":");
                        const hasPrefix = isObj || (colonIdx > 0 && colonIdx < 50);
                        const prefix = isObj ? pt.title : hasPrefix ? pt.substring(0, colonIdx) : null;
                        const content = isObj ? " " + pt.text : hasPrefix ? pt.substring(colonIdx + 1) : pt;

                        return (
                          <li key={pIdx} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#1765F5]" />
                            <span className="text-[14px] leading-relaxed text-[#425A70] sm:text-[15px]">
                              {hasPrefix ? (
                                <>
                                  <strong className="font-bold text-[#0C337B]">{prefix}:</strong>
                                  {content}
                                </>
                              ) : (
                                pt
                              )}
                            </span>
                          </li>
                        );
                      })}
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