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
  Home,
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
  Building2,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import GlobalEducationCTA from "@/components/StudyInUk/GlobalEducationCTA";

/* =====================================================================
   COMPREHENSIVE RICH DATA FOR EACH OF THE UK GUIDES (CONTENT UNCHANGED)
===================================================================== */
const GUIDE_DETAILS_DATABASE = {
  "study-in-the-uk": {
    id: "01",
    vol: "VOL. I",
    title: "Study in the UK: Education Pathways",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & University Selection",
    tagline: "Bachelor's Degrees, Master's Programs & Course Structures",
    heroImage: "/images/hero/uk-3d-depth-hero.jpg",
    accentColor: "#0A1E3F",
    pillColors: [
      { label: "3-4 YEAR BACHELOR'S", bg: "#D7F77D", text: "#063B72" },
      { label: "1-2 YEAR MASTER'S", bg: "#B5E9F2", text: "#063B72" },
      { label: "RESEARCH PhDs", bg: "#FFD4E6", text: "#063B72" },
      { label: "SEPTEMBER & JANUARY INTAKES", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "The UK education system offers structured degree pathways with clear progression. Bachelor's degrees typically take 3 years in England, Wales, and Northern Ireland, or 4 years in Scotland, while most postgraduate degrees are designed to be completed in one intensive year. Understanding how UK courses are structured and which qualifications suit your background helps you make informed choices.",
    metrics: [
      { label: "Bachelor's Degree", value: "3-4 Years" },
      { label: "Master's Degree", value: "Typically 1 Year" },
      { label: "Main Intakes", value: "September & January" },
      { label: "Russell Group", value: "24 Research-Intensive Universities" },
    ],
    chapters: [
      {
        icon: GraduationCap,
        title: "Understand Your Study Options",
        desc: "Your current qualification determines which UK study pathways are available.",
        points: [
          "Bachelor's Degree: If you have completed Class 12, you can consider an undergraduate degree in your chosen field. Most bachelor's degrees take three years in England, Wales, and Northern Ireland, while Scottish undergraduate degrees commonly take four years.",
          "Master's Degree: If you already hold a bachelor's degree, a master's can help you deepen your knowledge or specialise in a subject. Most taught master's programmes last one year full-time.",
          "Research Degrees: Students interested in independent research can consider qualifications such as an MRes, MPhil, or PhD. These programmes place greater emphasis on research design and independent investigation.",
        ],
      },
      {
        icon: BookOpen,
        title: "Know How UK Courses Are Structured",
        desc: "UK courses are often organised into modules, which cover specific topics within a degree.",
        points: [
          "Modular Structure: Students may study compulsory modules alongside optional subjects, depending on the programme.",
          "Learning Experience: Includes lectures, seminars, tutorials, laboratory sessions, practical assignments, group projects, and independent study.",
          "Assessment Methods: May involve essays, examinations, presentations, coursework, portfolios, or a dissertation.",
          "Course Variation: Two universities may offer degrees with the same title but different specialisations, module choices, and practical components. Always read the course curriculum before applying.",
        ],
      },
      {
        icon: Globe2,
        title: "Choose the Right Course for Your Background",
        desc: "The most suitable UK university courses match your existing qualifications and the knowledge you want to develop.",
        points: [
          "Commerce or Business: Finance, Accounting, Business Analytics, Marketing, Management",
          "Computer Science or IT: Computer Science, Software Engineering, Data Science, Cybersecurity",
          "Engineering: Advanced Engineering, Renewable Energy, Robotics, Project Management",
          "Biological or Health Sciences: Biomedical Sciences, Public Health, Biotechnology",
          "Humanities or Social Sciences: Economics, Psychology, International Relations, Media Studies",
          "Design or Creative Disciplines: Architecture, Film Production, Graphic Design, Creative Media",
        ],
      },
      {
        icon: Building2,
        title: "Compare UK Universities Beyond Rankings",
        desc: "When shortlisting UK universities, consider the strength of your intended course rather than relying only on rankings.",
        points: [
          "Russell Group: Includes 24 research-intensive universities, but membership alone does not establish which institution is best for your particular subject.",
          "Course Content: Review compulsory modules, optional subjects, specialisations, and dissertation requirements.",
          "Academic Environment: Check faculty expertise, research activity, laboratories, and subject-specific facilities.",
          "Practical Opportunities: Determine whether placements, industry projects, or professional learning are part of the programme.",
          "Student Support: Review academic assistance, careers guidance, library resources, and international student services.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "Check UK University Admission Requirements",
        desc: "Admission requirements are set by individual universities and differ by course.",
        points: [
          "For Bachelor's Applicants: Universities assess your Class 12 qualifications and may specify minimum grades. If your qualifications do not meet direct-entry criteria, a foundation programme may be an option.",
          "For Master's Applicants: Universities usually consider your bachelor's degree, academic performance, and relevance of your previous studies. Some programmes require work experience, portfolio, or research proposals.",
          "English-Language Proficiency: Depending on the university and course, you may need IELTS Academic or another accepted form of English-language evidence.",
          "Additional Requirements: Certain courses may ask for interviews, auditions, research proposals, or entrance assessments.",
        ],
      },
      {
        icon: Calendar,
        title: "Understand UK University Intakes and Application Routes",
        desc: "The main academic intake is generally in September or October, with January entry available for selected programmes.",
        points: [
          "Undergraduate Applications: Use UCAS, the UK's centralised undergraduate application service.",
          "Postgraduate Applications: Apply directly to universities. Each institution sets its own application requirements and deadlines.",
          "Application Plan: Research courses → Check eligibility → Prepare documents → Submit applications → Review offers → Plan next steps.",
          "Student Visa: For international students who need a UK Student visa, an offer alone is not enough. The course and provider must meet sponsorship requirements, and you need a Confirmation of Acceptance for Studies (CAS).",
        ],
      },
    ],
    faqs: [
      {
        q: "How long is a bachelor's degree in the UK?",
        a: "Bachelor's degrees typically take three years in England, Wales, and Northern Ireland, and four years in Scotland. Some programmes have different structures or include placement years.",
      },
      {
        q: "Are UK master's degrees really one year long?",
        a: "Most taught master's programmes are one year full-time, though some programmes may take longer depending on the subject and structure.",
      },
      {
        q: "What is the difference between the Russell Group and other universities?",
        a: "The Russell Group includes 24 research-intensive universities, but many universities outside the group have strong departments and specialist facilities in particular subjects.",
      },
    ],
  },

  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    title: "Cost of Studying in the UK",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Indicative Tuition Fees, Living Costs, Visa Fees & Financial Planning",
    heroImage: "/images/study-uk/modal-depth-bg.jpg",
    accentColor: "#4A101D",
    pillColors: [
      { label: "MASTER'S TUITION", bg: "#D7F77D", text: "#063B72" },
      { label: "BACHELOR'S TUITION", bg: "#B5E9F2", text: "#063B72" },
      { label: "VISA & IHS FEES", bg: "#FFD4E6", text: "#063B72" },
      { label: "TOTAL DEGREE BUDGET", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Planning your education budget is an important part of choosing a university in the UK. Tuition is usually one of your biggest expenses, but the amount depends on your degree, university, field of study, and course duration. International students must also account for accommodation, living expenses, and immigration-related costs across the full duration of study.",
    metrics: [
      { label: "Bachelor's Tuition (Indicative)", value: "£11,400–£38,000 / yr" },
      { label: "Master's Tuition (Indicative)", value: "£11,000–£35,000 / yr" },
      { label: "Student Visa Fee", value: "£558" },
      { label: "Immigration Health Surcharge", value: "£776 / year" },
    ],
    chapters: [
      {
        icon: DollarSign,
        title: "Understand the Main Costs",
        desc: "Your study budget should cover more than the tuition fee mentioned on a university's website.",
        points: [
          "Tuition Fees: The fee for your chosen programme and academic year.",
          "Accommodation: University residence, shared housing, or private rent.",
          "Living Expenses: Groceries, transport, phone bills, utilities, and personal spending.",
          "Immigration Costs: Student visa application fee (£558) and Immigration Health Surcharge (£776 per year for students).",
          "Academic Expenses: Books, software, equipment, lab materials, and course-specific charges.",
          "Pre-Arrival Expenses: Travel, accommodation deposits, initial purchases, and setup costs.",
        ],
      },
      {
        icon: FileText,
        title: "Tuition Fees in the UK for International Students",
        desc: "Tuition fees depend on the institution, qualification, subject, and resources required.",
        points: [
          "Undergraduate Degrees: £11,400–£38,000 annual tuition depending on subject and university.",
          "Taught Master's Degrees: £11,000–£35,000 annual tuition. Many taught master's are one year, but some may be longer.",
          "MBA Programmes: £15,000–£40,000+, with some considerably higher.",
          "Engineering Programmes: £20,000–£42,000 annually.",
          "Medicine and Dentistry: £31,000–£70,500+ annually.",
          "Note: These are indicative ranges. Some universities charge outside these bands, and specialist courses can have different structures.",
        ],
      },
      {
        icon: Calculator,
        title: "How Your University and Course Affect the Cost",
        desc: "Two programmes at the same university can have different tuition fees.",
        points: [
          "Subject and Facilities: Classroom-based programmes may cost less than courses involving laboratory work, clinical training, or specialist equipment.",
          "Institution and Programme: Tuition varies by university and department. Compare the curriculum, facilities, and academic fit alongside price.",
          "Location: Universities in London may charge different fees from those in other parts of the UK. London also affects rent and everyday expenses.",
          "Course Duration: A shorter programme can reduce the number of months you pay for housing and living expenses. Compare the complete programme cost, including any foundation year or placement year.",
        ],
      },
      {
        icon: Calendar,
        title: "Student Visa, Immigration Health Surcharge & Mandatory Costs",
        desc: "International students should budget for immigration-related expenses separately from tuition.",
        points: [
          "Student Visa Application: £558 (standard fee for application from outside the UK).",
          "Immigration Health Surcharge (IHS): £776 per year for student rate. Total depends on the length of immigration permission granted.",
          "TB Testing: Applicants from India who fall within testing requirements need a certificate from an approved clinic.",
          "Travel & Deposits: Flights, accommodation deposits, initial purchases.",
          "Confirmation of Acceptance for Studies (CAS): Issued by eligible education providers. Check the university for any required tuition deposit or administrative charge.",
        ],
      },
      {
        icon: Home,
        title: "How Much Money Must You Show for a UK Student Visa?",
        desc: "The UK's financial requirement is different from your full living budget.",
        points: [
          "Studying in London: £13,761 for up to 9 months (£1,529/month × 9).",
          "Studying Outside London: £10,539 for up to 9 months (£1,171/month × 9).",
          "Financial Evidence: Must be maintained for a continuous 28-day period, with the relevant period ending within the permitted timeframe before application.",
          "Note: This is a visa eligibility threshold, not a guarantee of your real expenses. If accommodation is expensive or your course is longer, you may need a larger practical budget.",
        ],
      },
      {
        icon: Calculator,
        title: "Calculate the Total Cost Before Applying",
        desc: "A useful budget includes all the expenses you expect to incur.",
        points: [
          "Budget Components: Tuition (published fee for your specific course), Living expenses (monthly budget × total duration), Visa and IHS (current fees based on visa duration), Travel and arrival (flights, transfers, deposits), Academic extras (books, equipment, software), Financial buffer (reserve for unexpected costs).",
          "Example Calculation: A one-year master's should include tuition for that programme, living costs for 12 months, visa and IHS payments, and moving costs.",
          "Important Rule: Avoid building a financial plan that depends entirely on securing a part-time job. Work income should not replace the funds needed to begin your studies safely.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the typical annual tuition fee range for master's programmes?",
        a: "Indicative annual tuition for master's programmes ranges from £11,000 to £35,000, depending on the university, specialization, and course structure.",
      },
      {
        q: "Do I need to pay the IHS separately from tuition?",
        a: "Yes. The Immigration Health Surcharge is paid as part of your immigration application and is separate from tuition fees. For students, it costs £776 per year.",
      },
      {
        q: "How much money do I need to show for a Student visa?",
        a: "You need to demonstrate £13,761 for London or £10,539 outside London, calculated as 9 months of the official maintenance figure, plus any outstanding course fees.",
      },
    ],
  },

  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    title: "Cost of Living & Culture in UK",
    shortTitle: "Living & Culture",
    badge: "Student Life & Monthly Expenses",
    tagline: "Monthly Expenses, Accommodation, Transit & Finding Your Place in the UK",
    heroImage: "/images/study-uk/living-and-culture-hero.jpg",
    accentColor: "#165548",
    pillColors: [
      { label: "MONTHLY BUDGET", bg: "#D7F77D", text: "#063B72" },
      { label: "ACCOMMODATION", bg: "#FFD4E6", text: "#063B72" },
      { label: "FOOD & GROCERIES", bg: "#B5E9F2", text: "#063B72" },
      { label: "CAMPUS CULTURE", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Moving to the UK means learning to manage a different set of everyday expenses. Rent, groceries, transport, utilities, and personal spending all add up, and your monthly budget can look very different depending on where you live. At the same time, living in the UK gives you the opportunity to experience diverse communities, traditions, food, arts, and ways of life.",
    metrics: [
      { label: "Monthly Living Cost", value: "£830–£2,300+ / mo" },
      { label: "Accommodation (London)", value: "£800–£1,500+ / mo" },
      { label: "Accommodation (Regional)", value: "£500–£1,000+ / mo" },
      { label: "Campus Life", value: "Clubs, Culture & Community" },
    ],
    chapters: [
      {
        icon: Home,
        title: "Understanding the Cost of Living in the UK",
        desc: "Accommodation is usually one of the largest monthly expenses for international students.",
        points: [
          "Planning Guide: Budget around £900–£1,400 per month outside London and approximately £1,300–£1,500 per month in London for accommodation, bills, and living expenses. These are indicative ranges, not fixed costs.",
          "London Breakdown: Accommodation (£800–£1,500+), Groceries (£160–£250), Utilities/Internet (£70–£120), Local Transport (£80–£150+), Personal/Social (£150–£300).",
          "Regional Cities Breakdown: Accommodation (£450–£1,000+), Groceries (£140–£220), Utilities/Internet (£70–£120), Local Transport (£40–£100), Personal/Social (£120–£250).",
        ],
      },
      {
        icon: HomeIcon,
        title: "Choosing the Right Student Accommodation",
        desc: "Your accommodation decision affects both your monthly budget and your experience.",
        points: [
          "University Halls of Residence: Often convenient for first-year students, providing furnished rooms and shared facilities. Some options include utilities. Check the contract to understand what is covered.",
          "Shared Private Housing: May offer more independence and lower costs than living alone. You may need to budget separately for bills, internet, deposits, and travel to campus.",
          "Private Studios and En-suite Rooms: Offer greater privacy but generally cost more. Compare the additional expense with convenience, location, and facilities.",
          "Before Signing: Check distance to campus, public transport links, tenancy length, deposit arrangements, and whether utilities are included.",
        ],
      },
      {
        icon: Users,
        title: "Managing Food, Transport & Everyday Expenses",
        desc: "Small, recurring expenses can make a noticeable difference to your monthly budget.",
        points: [
          "Groceries and Cooking: Supermarkets such as Aldi and Lidl are budget-conscious options. Indian grocery shops are available in many university towns and larger cities.",
          "Transport: Walking or cycling may work well if you live close to campus. In larger cities, compare bus passes, student travel concessions, and railcards.",
          "Utilities: Check heating, electricity, water, and broadband arrangements before renting. Energy use can increase during colder months.",
          "Mobile Connectivity: Compare SIM-only plans and contract terms before committing.",
          "Social Spending: Keep a separate allowance for eating out, cinema visits, gym memberships, day trips, and other activities.",
          "Council Tax: Full-time students are generally exempt when eligibility conditions are met.",
        ],
      },
      {
        icon: Globe2,
        title: "Understanding British Culture & Everyday Life",
        desc: "The UK is not culturally uniform. Each region has distinct traditions and ways of life.",
        points: [
          "Multicultural Student Community: Universities bring together students from different countries, languages, religions, and backgrounds. Larger cities often offer familiar food, cultural associations, places of worship, and international communities.",
          "Food Culture: Traditional British dishes include fish and chips, full English breakfast, and Sunday roast. Indian restaurants, supermarkets, and specialist shops are available in many places.",
          "Social Life: Coffee shops, shared meals, university events, live music, sports, theatre, and informal gatherings are common. Pubs are a familiar part of social life, but there are plenty of alcohol-free activities.",
          "Arts and Culture: Museums and galleries often offer free general admission. Universities have societies covering many interests. Weekend activities include historic towns, national parks, local events, and travel.",
          "Communication: People use different regional accents and expressions. Politeness, respecting personal space, punctuality, and clear communication are useful starting points.",
        ],
      },
      {
        icon: Calendar,
        title: "Adjusting to Life Away from Home",
        desc: "Moving abroad can be exciting, but initial adjustment may involve homesickness and new routines.",
        points: [
          "Build a Routine: Balance classes, meals, sleep, exercise, and time with friends.",
          "Get Involved Early: Join a society, attend orientation activities, or take part in campus events.",
          "Stay Connected: Keep in touch with family and friends while developing a local support network.",
          "Understand Support: Find out how your university provides academic guidance, wellbeing services, and international student support.",
          "Keep a Realistic Budget: Track spending during your first few months and adjust your plan as you learn actual costs.",
          "Give Yourself Time: Settling in is a process rather than something that happens immediately.",
        ],
      },
      {
        icon: Compass,
        title: "Choosing a UK City That Fits Your Budget & Lifestyle",
        desc: "The right city is where your course, budget, and lifestyle work together.",
        points: [
          "London: Extensive transport, cultural attractions, and career networks, alongside generally higher housing and costs.",
          "Manchester and Birmingham: Large, diverse student communities, cultural activities, and access to major urban amenities.",
          "Leeds and Sheffield: University-centred communities, arts and music, and a mix of urban and outdoor activities.",
          "Glasgow and Edinburgh: Distinct Scottish culture, historic settings, and access to arts, festivals, and outdoor destinations.",
          "Note: Costs vary significantly within each city, so compare actual accommodation options before deciding.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much should an Indian student budget per month for living expenses in the UK?",
        a: "Budget around £900–£1,400 outside London and £1,300–£1,500 in London per month for accommodation, food, transport, utilities, and personal expenses. Costs vary by location and lifestyle.",
      },
      {
        q: "Is it easy to cook Indian meals and find groceries on UK campuses?",
        a: "Yes. Most university towns have Indian grocery stores with spices, lentils, and fresh essentials, and student housing offers full kitchens, making home cooking common and economical.",
      },
      {
        q: "Which UK cities are the most affordable for students?",
        a: "Regional cities like Leeds, Sheffield, Manchester, and Glasgow generally offer lower accommodation and living costs than London. However, costs vary within each city.",
      },
    ],
  },

  "scholarships-and-funding": {
    id: "04",
    vol: "VOL. IV",
    title: "Scholarships in the UK for Indian Students",
    shortTitle: "Scholarships & Funding",
    badge: "Funding, Grants & Financial Aid",
    tagline: "Chevening, GREAT, Commonwealth & University Scholarships",
    heroImage: "/images/study-uk/study-in-uk-hero.jpg",
    accentColor: "#1A2645",
    pillColors: [
      { label: "CHEVENING", bg: "#D7F77D", text: "#063B72" },
      { label: "GREAT SCHOLARSHIPS", bg: "#B5E9F2", text: "#063B72" },
      { label: "COMMONWEALTH AWARDS", bg: "#FFD4E6", text: "#063B72" },
      { label: "UNIVERSITY FUNDING", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Studying in the UK can be a significant financial commitment, but the amount you pay may not always equal the university's published fee. Depending on your academic profile, financial circumstances, course, and institution, you may qualify for scholarships or other financial assistance. Some awards recognise academic achievement, some support students with demonstrated financial need, and others are tied to specific professional goals or post-study conditions.",
    metrics: [
      { label: "Chevening Award", value: "Fully Funded" },
      { label: "GREAT Scholarships", value: "£10,000 towards tuition" },
      { label: "University Awards", value: "Merit & Need-Based" },
      { label: "Application Range", value: "Highly Competitive" },
    ],
    chapters: [
      {
        icon: Award,
        title: "Types of Scholarships Available in the UK",
        desc: "Understanding the different categories helps identify where to focus applications.",
        points: [
          "Fully Funded Scholarships: May cover tuition fees, living expenses, and other approved costs such as return travel. Highly competitive with specific academic or professional requirements.",
          "University Scholarships: Merit-based awards, international student scholarships, and course-specific funding. Values range from fixed tuition discounts to larger awards for selected applicants.",
          "Subject-Specific Scholarships: Funding for particular disciplines or research areas, especially relevant to postgraduate study.",
          "External and Indian Government Funding: Charitable trusts, foundations, and Indian schemes supporting eligible overseas students.",
        ],
      },
      {
        icon: Sparkles,
        title: "Major UK Scholarships for Indian Students",
        desc: "Prominent programmes worth researching.",
        points: [
          "Chevening Scholarship: UK government-funded postgraduate scholarship for one-year master's degrees. Fully funded, subject to programme terms. Requires professional experience and post-study return to India commitment.",
          "Commonwealth Scholarships: Support eligible students whose study contributes to development priorities. Different schemes have different eligible countries and funding arrangements.",
          "GREAT Scholarships: UK government and British Council funded, for eligible postgraduate courses. Listed award value: £10,000 towards tuition fees for 2026–27. Eligible universities and courses vary.",
          "Other Awards: Rhodes Scholarship, Charles Wallace India Trust, National Overseas Scholarship, and university-funded research scholarships.",
        ],
      },
      {
        icon: Home,
        title: "UK University Scholarships for International Students",
        desc: "University-specific funding can be equally important when calculating your budget.",
        points: [
          "International Merit Awards: Based on academic grades and sometimes leadership or extracurricular involvement. Automatic consideration or separate application depends on the university.",
          "Course-Specific Awards: Tied to specific degree programmes or subjects.",
          "Research Funding: Available for supervisor or department-sponsored research programmes.",
          "University-Wide Postgraduate Awards: May have nationality restrictions and separate application deadlines.",
          "Need-Based or Hardship Funding: Some universities offer support based on financial circumstances, though eligibility may be limited for international students.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "Scholarships in the UK: Eligibility Criteria",
        desc: "Common factors to review before applying.",
        points: [
          "Academic Performance: Some require high grades or specific degree classifications. Others assess academic potential alongside professional achievements.",
          "Nationality and Residency: Some are restricted to Indian citizens or specific regions.",
          "Course and University: Your intended programme may need to be on an approved course list, and you may need an offer from a participating university.",
          "English-Language Requirements: Must meet the university's language criteria. Some scholarships specify additional conditions.",
          "Work Experience and Leadership: Competitive postgraduate awards assess professional background and demonstrated impact.",
          "Financial Circumstances: Some focus on applicants with financial need; others emphasise academic merit.",
          "Career Objectives: Certain scholarships assess your intended use of education after graduation.",
        ],
      },
      {
        icon: FileText,
        title: "How to Apply for UK Scholarships from India",
        desc: "A strong application starts well before the deadline.",
        points: [
          "Shortlist Scholarships: Identify awards matching your degree, subject, academic results, nationality, and budget.",
          "Check Official Requirements: Confirm eligible courses, institutions, funding coverage, and any conditions.",
          "Prepare University Application: Many scholarships require a separate application or offer before funding eligibility.",
          "Organise Documents: Transcripts, certificates, CV, personal statement, references, and English-language proof.",
          "Write a Specific Scholarship Statement: Explain why the course fits your goals and how funding supports your plans. Use concrete examples for leadership-focused awards.",
          "Submit Early: Keep a record of deadlines and requirements. Scholarship deadlines vary within the same programme.",
        ],
      },
      {
        icon: Sparkles,
        title: "How to Improve Your Chances of Securing Funding",
        desc: "Practical strategies for strengthening your application.",
        points: [
          "Show Evidence, Not Ambition: Use examples of academic work, projects, employment, volunteering, or leadership demonstrating your abilities.",
          "Connect Your Course to Clear Objectives: Explain why the programme is relevant and what skills you expect to gain.",
          "Personalise Each Application: Address the award's stated priorities rather than using identical statements.",
          "Choose References Carefully: Select people who can speak to your academic strengths, professional contribution, or leadership potential.",
          "Apply to a Realistic Range: Combine highly competitive major scholarships with relevant university awards.",
          "Prepare for Interviews: Practise explaining your goals, decisions, achievements, and future plans clearly using genuine examples.",
        ],
      },
      {
        icon: Calculator,
        title: "Plan Your Budget Even If You Receive a Scholarship",
        desc: "Before accepting an award, calculate total cost coverage.",
        points: [
          "Total Tuition After Scholarship: Apply the award reduction to the full course cost.",
          "Remaining Expenses: Calculate accommodation, living costs, and other expenses for the full duration.",
          "Payment Timing: Confirm whether the award is paid directly to the university or to you.",
          "Renewal and Conditions: Check conditions for maintaining the scholarship, including academic progress and attendance requirements.",
          "Combination with Other Support: Determine whether the award can be combined with other scholarships or financial support.",
          "Visa Financial Requirements: Do not assume a scholarship automatically satisfies Student visa financial requirements. Check current rules.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can Indian students get fully funded scholarships in the UK?",
        a: "Yes. Some programmes offer full funding to eligible Indian applicants, including Chevening. These awards are competitive and may have specific academic, professional, or post-study conditions.",
      },
      {
        q: "What external scholarships are available for Indian postgraduates in the UK?",
        a: "Prominent options include Chevening, GREAT Scholarships, eligible Commonwealth schemes, and university-specific awards. Each has distinct eligibility criteria.",
      },
      {
        q: "Do I need an offer letter before applying for a UK scholarship?",
        a: "It depends on the scholarship. Some require an offer from an eligible university, while others use a separate application process. Check official instructions before applying.",
      },
    ],
  },

  "post-study-work-visa": {
    id: "05",
    vol: "VOL. V",
    title: "Post-Study Work Visa in the UK",
    shortTitle: "Graduate Visa & Work",
    badge: "Working After Graduation",
    tagline: "Graduate Visa Duration, Work Rights & Skilled Worker Sponsorship",
    heroImage: "/images/study-uk/post-study-work-hero.jpg",
    accentColor: "#2C1F3D",
    pillColors: [
      { label: "GRADUATE VISA", bg: "#D7F77D", text: "#063B72" },
      { label: "2 YEARS (OR 18 MONTHS)", bg: "#B5E9F2", text: "#063B72" },
      { label: "DOCTORAL GRADUATES", bg: "#FFD4E6", text: "#063B72" },
      { label: "SKILLED WORKER PATH", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "Completing a degree in the UK can open the door to international work experience, but your options after graduation depend on your visa, qualifications, job opportunities, and immigration rules. For many international students, the UK Graduate visa is the first step, allowing eligible graduates to remain in the country after completing an approved course. Understanding these routes before you graduate helps you plan your job search and make informed decisions about your future.",
    metrics: [
      { label: "Graduate Visa Duration", value: "2 years / 18 months*" },
      { label: "PhD Graduates", value: "3 years" },
      { label: "Application Fee", value: "£937" },
      { label: "Work Flexibility", value: "Most jobs welcome" },
    ],
    chapters: [
      {
        icon: Clock,
        title: "What Is the UK Graduate Visa?",
        desc: "The Graduate visa allows eligible international students to stay in the UK after completing a course.",
        points: [
          "Definition: The Graduate visa, commonly called the UK post-study work visa, allows eligible international students to stay after successfully completing an eligible course. It does not require a job offer or employer sponsorship when you apply.",
          "Duration: Bachelor's and Master's graduates receive 2 years if they apply by 31 December 2026, or 18 months from 1 January 2027. Eligible doctoral graduates receive 3 years.",
          "Flexibility: Gives graduates time to search for suitable employment, gain work experience, or explore career opportunities before deciding whether to switch to another immigration route.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "What Can You Do on a Graduate Visa?",
        desc: "The Graduate visa provides flexibility while establishing your career.",
        points: [
          "Work Rights: Can work in most jobs, including roles that do not require employer sponsorship.",
          "Job Searching: Search for employment and attend interviews.",
          "Self-Employment: Work for themselves, subject to route conditions.",
          "Job Changes: Change jobs without applying for a new sponsored visa each time.",
          "Career Exploration: Explore opportunities across different industries while building professional experience.",
          "Restrictions: Limits on certain professional sporting activities. Check official conditions before accepting work.",
        ],
      },
      {
        icon: Users,
        title: "Can You Bring Dependants?",
        desc: "Dependant rules are restricted on the Graduate visa.",
        points: [
          "Existing Dependants: A partner or child who was already your dependant on your Student visa may be able to continue if requirements are met.",
          "New Dependants: New dependants generally cannot join under this route, though specific exceptions may apply.",
          "Check Current Rules: Verify the current rules for your family circumstances before making plans.",
        ],
      },
      {
        icon: DollarSign,
        title: "UK Graduate Visa Fees and Application Costs",
        desc: "Budget for application and health insurance fees.",
        points: [
          "Graduate Visa Application Fee: £937",
          "Immigration Health Surcharge: Usually £1,035 per year. Total depends on visa duration.",
          "18-Month Graduate Visa: £1,152.50 in total IHS",
          "2-Year Graduate Visa: £2,070 in total IHS",
          "3-Year Graduate Visa (Doctoral): £3,105 in total IHS",
          "Note: Verify latest figures on GOV.UK immediately before applying.",
        ],
      },
      {
        icon: Briefcase,
        title: "Finding a Job After Graduation in the UK",
        desc: "A Graduate visa gives permission to work, but does not guarantee employment.",
        points: [
          "Start Early: Begin preparing before your final semester rather than waiting until your visa begins.",
          "Build Experience: Internships, placements, projects, research, and part-time work demonstrate capabilities.",
          "Develop a UK-Ready CV: Highlight relevant achievements, practical skills, and measurable outcomes.",
          "Use University Services: Seek help with CV reviews, interview practice, employer events, and graduate recruitment.",
          "Research Employers: Identify organisations recruiting in your field and understand their timelines.",
          "Understand Sponsorship: Research which employers hold sponsor licences and which roles may qualify for Skilled Worker visas.",
        ],
      },
      {
        icon: Globe2,
        title: "Switching to a Skilled Worker Visa",
        desc: "A possible route for continuing work in the UK beyond the Graduate visa.",
        points: [
          "Requirements: Generally requires an eligible job offer from an employer approved to sponsor workers. The role must meet occupation and salary requirements.",
          "vs. Graduate Visa: Unlike the Graduate visa, employer sponsorship is required. Job changes may require a visa update.",
          "Salary Threshold: Standard Skilled Worker requirement is generally £41,700 per year or the relevant occupation's going rate, whichever is higher.",
          "Graduate Concessions: Certain recent graduates and people under 26 may qualify for lower salary thresholds with specific conditions.",
          "Settlement: May lead to Indefinite Leave to Remain (ILR) after meeting applicable requirements.",
        ],
      },
      {
        icon: Award,
        title: "Can You Get Permanent Residency After Studying in the UK?",
        desc: "A Graduate visa does not, by itself, lead directly to permanent residency.",
        points: [
          "Settlement Routes: Graduates typically need to qualify under a separate immigration route.",
          "Skilled Worker Route: May provide a pathway to Indefinite Leave to Remain (ILR) after meeting requirements and qualifying periods.",
          "Global Talent Visa: May be an option for eligible people with recognised talent in specified fields.",
          "Innovator Founder Visa: May be relevant for developing a qualifying business venture.",
          "Keep Records: Maintain organised immigration documents and employment records.",
          "Monitor Changes: Immigration policy can change, so verify current positions before relying on particular timelines.",
        ],
      },
      {
        icon: FileText,
        title: "How University Yatra Helps You Plan Beyond Graduation",
        desc: "Planning your UK education should extend beyond admission.",
        points: [
          "Course Comparison: Compare courses and universities in relation to your academic background and career objectives.",
          "Programme Understanding: Understand programme structures, placement opportunities, and course requirements.",
          "Admissions Support: Organise documentation and application timelines.",
          "Budget Planning: Plan your education budget with course duration and living expenses in mind.",
          "Post-Study Exploration: Identify questions to research about post-study employment and immigration routes before committing.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can Indian students stay in the UK after graduation?",
        a: "Eligible bachelor's and master's graduates receive a Graduate visa lasting 2 years if they apply by 31 December 2026, or 18 months from 1 January 2027. Eligible doctoral graduates receive 3 years.",
      },
      {
        q: "Can I apply for the Graduate visa without a job offer?",
        a: "Yes. A job offer is not normally required for the Graduate visa. You must still meet course completion, immigration status, location, and application requirements.",
      },
      {
        q: "Does the Graduate visa lead to permanent residency?",
        a: "Not directly. Graduates typically need to switch to a qualifying route such as Skilled Worker and meet that route's settlement requirements.",
      },
      {
        q: "How much does the UK Graduate visa cost?",
        a: "The application fee is £937, plus the Immigration Health Surcharge (usually £1,035 per year). The total depends on visa duration. Verify latest figures on GOV.UK before applying.",
      },
    ],
  },
};

/* =====================================================================
   CANADA-STYLE LAYOUT HELPERS
===================================================================== */

const UK_BOOK_GUIDES = Object.entries(GUIDE_DETAILS_DATABASE).map(
  ([slug, g]) => ({ id: g.id, vol: g.vol, slug, title: g.title, badge: g.badge })
);

// "Label: text" -> bold label + text (styling only, text unchanged)
function PointText({ text }) {
  const idx = text.indexOf(": ");
  if (idx > 0 && idx <= 60) {
    return (
      <>
        <strong className="font-bold text-[#0C337B]">{text.slice(0, idx + 1)}</strong>{" "}
        {text.slice(idx + 2)}
      </>
    );
  }
  return <>{text}</>;
}

function PointsList({ points }) {
  return (
    <ul className="space-y-3">
      {points.map((text, n) => (
        <li key={n} className="flex items-start gap-2.5 text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">
          <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#1765F5]" />
          <span className="min-w-0"><PointText text={text} /></span>
        </li>
      ))}
    </ul>
  );
}

/* =====================================================================
   MAIN GUIDE PAGE COMPONENT
===================================================================== */

export async function generateStaticParams() {
  return Object.keys(GUIDE_DETAILS_DATABASE).map((slug) => ({ guide: slug }));
}

export async function generateMetadata({ params }) {
  const { guide } = await params;
  const data = GUIDE_DETAILS_DATABASE[guide];
  if (!data) return { title: "Guide Not Found" };
  return { title: `${data.title} | University Yatra`, description: data.tagline };
}

export default async function GuideDetailPage({ params }) {
  const { guide } = await params;
  const guideData = GUIDE_DETAILS_DATABASE[guide];
  if (!guideData) notFound();

  const whatsappUrl = `https://wa.me/919286844550?text=${encodeURIComponent(`Hi University Yatra, I need guidance on ${guideData.title}.`)}`;

  return (
    <>
      <Navbar active="Destinations" />
      <main className="min-h-screen w-full overflow-x-hidden bg-[#F8FAFC]">
        {/* PHOTO HERO */}
        <section className="relative isolate w-full overflow-hidden bg-[#0C337B] text-white lg:min-h-[530px]">
          <div className="pointer-events-none absolute inset-0 -z-20"><Image src={guideData.heroImage} alt={guideData.title} fill priority sizes="100vw" className="object-cover object-center" /></div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[#061F40]/60" />
          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-4 pb-10 pt-[112px] text-center sm:px-6 sm:pb-14 sm:pt-[130px] lg:min-h-[530px] lg:justify-center lg:px-8 lg:py-16">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-white/85 sm:text-[12px]"><Link href="/" className="hover:text-white">Home</Link><span>/</span><Link href="/study-in-uk" className="hover:text-white">Study in UK</Link><span>/</span><span className="font-bold text-white">{guideData.shortTitle}</span></div>
            <h1 className="mx-auto max-w-[1000px] text-balance text-[30px] font-extrabold leading-[1.09] tracking-[-0.04em] text-white drop-shadow-lg sm:text-[46px] lg:text-[60px]">{guideData.title}</h1>
            <div className="mb-3 mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-1.5 shadow-sm"><Bookmark size={14} className="shrink-0 text-[#1765F5]" /><span className="text-center font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0C337B] sm:text-[11px]">{guideData.vol} • {guideData.badge}</span></div>
            <div className="mt-2 flex max-w-[700px] flex-wrap items-center justify-center gap-2">{guideData.pillColors.map((pill) => <span key={pill.label} className="rounded-full px-3 py-1.5 text-center text-[10px] font-extrabold uppercase shadow-sm" style={{ backgroundColor: pill.bg, color: pill.text }}>{pill.label}</span>)}</div>
            <div className="mt-5 flex w-full max-w-[510px] flex-wrap justify-center gap-2 sm:mt-7 sm:gap-4"><a href="#contact-advisory" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full bg-[#1765F5] px-4 py-2.5 text-[12px] font-bold text-white transition hover:bg-[#0C337B] sm:text-[14px]">Book a Free Consultation <ArrowRight size={16} /></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full border border-white/60 bg-white px-4 py-2.5 text-[12px] font-bold text-[#0C337B] transition hover:bg-[#EAF2FF] sm:text-[14px]"><MessageCircle size={16} /> Chat on WhatsApp</a></div>
          </div>
        </section>

        {/* INTRODUCTION + CHAPTERS + SIDE GUIDES */}
        <section className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="min-w-0 space-y-6 lg:col-span-2">
              {/* Executive Summary + metrics */}
              <div className="rounded-3xl border border-[#A2C1FB]/40 bg-[#EBF3FE] p-5 shadow-sm sm:p-8">
                <div className="flex items-center gap-2 text-[#1765F5]"><Compass size={18} /><span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">Executive Summary</span></div>
                <h2 className="mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">Navigating {guideData.shortTitle}</h2>
                <p className="mt-3 text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">{guideData.overview}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {guideData.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl border border-[#D6E5FA] bg-white p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">{m.label}</div>
                      <div className="mt-1 text-[14px] font-extrabold leading-snug text-[#0C337B]">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapters */}
              {guideData.chapters.map((chapter, index) => {
                const Icon = chapter.icon || BookOpen;
                return (
                  <article key={`${guideData.id}-${index}`} className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#A2C1FB] hover:shadow-md sm:p-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5] sm:h-11 sm:w-11"><Icon size={21} /></span>
                      <h2 className="min-w-0 text-[19px] font-extrabold leading-[1.3] tracking-tight text-[#0C337B] sm:text-[22px]">{chapter.title}</h2>
                    </div>
                    <div className="mt-5 space-y-4 border-t border-slate-100 pt-5">
                      {chapter.desc && <p className="text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">{chapter.desc}</p>}
                      <PointsList points={chapter.points} />
                    </div>
                  </article>
                );
              })}

              {/* FAQs */}
              {guideData.faqs?.length > 0 && (
                <article className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5] sm:h-11 sm:w-11"><HelpCircle size={21} /></span>
                    <h2 className="min-w-0 text-[19px] font-extrabold leading-[1.3] tracking-tight text-[#0C337B] sm:text-[22px]">Frequently Asked Questions</h2>
                  </div>
                  <div className="mt-5 space-y-4 border-t border-slate-100 pt-5">
                    {guideData.faqs.map((f, n) => (
                      <div key={n} className="rounded-2xl border border-[#E9F0F9] bg-[#F8FAFF] p-4">
                        <h3 className="text-[15px] font-extrabold leading-[1.4] text-[#0C337B]">{f.q}</h3>
                        <p className="mt-1.5 text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </article>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="min-w-0 space-y-6">
              <div id="contact-advisory" className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-[#E8F0FE] p-6 shadow-sm sm:p-7"><span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">1-on-1 Student Guidance</span><h3 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">Plan Your UK Journey With an Expert</h3><div className="mt-5 flex flex-col gap-2.5"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#1EB956]"><MessageCircle size={16} /> Chat on WhatsApp</a><Link href="/counselling" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#0C337B]">Book Free Consultation <ArrowRight size={15} /></Link></div></div>
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-7"><div className="flex items-center justify-between gap-2"><h3 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">Other UK Guides</h3><span className="font-mono text-[10px] text-[#1765F5]">Series</span></div><div className="mt-4 space-y-2.5">{UK_BOOK_GUIDES.filter((item) => item.slug !== guide).map((item) => <Link key={item.id} href={`/study-in-uk/${item.slug}`} className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]"><span className="min-w-0"><span className="block">{item.title}</span><span className="mt-1 block text-[11px] font-medium text-[#64748B]">{item.badge}</span></span><span className="shrink-0 font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">{item.vol} →</span></Link>)}</div></div>
            </aside>
          </div>
        </section>
      </main>
      <UniversityFooter />
    </>
  );
}
