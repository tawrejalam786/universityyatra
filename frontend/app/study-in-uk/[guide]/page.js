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
    title: "Study in the UK for Indian Students",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & University Selection",
    tagline: "Bachelor's Degrees, Master's Programs & Course Structures",
    heroImage: "/images/universities/uk/imperial-college-london.webp",
    accentColor: "#0A1E3F",
    pillColors: [
      { label: "3-4 YEAR BACHELOR'S", bg: "#D7F77D", text: "#063B72" },
      { label: "1-2 YEAR MASTER'S", bg: "#B5E9F2", text: "#063B72" },
      { label: "RESEARCH PhDs", bg: "#FFD4E6", text: "#063B72" },
      { label: "SEPTEMBER & JANUARY INTAKES", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "The UK offers undergraduate and postgraduate programmes across a wide range of subjects, from business and engineering to computer science, healthcare, law, and creative fields. Understanding how its education system works can help you choose a qualification that fits your previous studies, academic interests, and future plans. For Indian students, the first step is to decide what they want from their education: a bachelor's degree after Class 12, a specialised master's after graduation, or a research qualification. From there, the focus should shift to finding the right course, checking eligibility, comparing universities, and preparing a realistic application.",
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
        desc: "Your current qualification determines which UK study pathways are available to you. Undergraduate and postgraduate programmes differ in their entry requirements, duration, and academic expectations.",
        points: [
          "Bachelor's degree in the UK: If you have completed Class 12, you can consider an undergraduate degree in your chosen field. Depending on the university and your qualifications, you may be eligible for direct entry or need a foundation programme first. Most bachelor's degrees take three years in England, Wales, and Northern Ireland, while Scottish undergraduate degrees commonly take four years. Some programmes have different structures or additional placement years.",
          "Master's degree in the UK: If you already hold a bachelor's degree, a master's can help you deepen your knowledge, specialise in a subject, or develop expertise in a related field. Most taught master's programmes last one year full-time, although some take longer. Your undergraduate subject, grades, and any course-specific prerequisites will determine which programmes you can apply for. Some degrees accept applicants from related disciplines, while others require a closely matched academic background.",
          "Research degrees and specialised pathways: Students interested in independent research can consider qualifications such as an MRes, MPhil, or PhD. These programmes place greater emphasis on research design, specialist knowledge, and independent investigation. Their duration, admission process, and funding arrangements vary. Research applicants may need a proposal, relevant academic experience, and a suitable supervisor.",
        ],
      },
      {
        icon: BookOpen,
        title: "Know How UK Courses Are Structured",
        desc: "UK courses are often organised into modules, which cover specific topics within a degree. Students may study compulsory modules alongside optional subjects, depending on the programme.",
        points: [
          "The learning experience can include lectures, seminars, tutorials, laboratory sessions, practical assignments, group projects, and independent study. Assessment methods vary by subject and may involve essays, examinations, presentations, coursework, portfolios, or a dissertation.",
          "This structure makes it important to read the course curriculum before applying. Two universities may offer degrees with the same title but different specialisations, module choices, assessment methods, and practical components.",
          "For example, a master's in Business Analytics might focus on statistical modelling and data visualisation at one university, while another programme may place greater emphasis on business strategy and decision-making. Comparing modules helps you understand what you will actually learn.",
        ],
      },
      {
        icon: Globe2,
        title: "Choose the Right Course for Your Background",
        desc: "The most suitable UK university courses are those that match your existing qualifications and the knowledge you want to develop. A course's popularity or reputation should not replace an assessment of its academic fit.",
        points: [
          "Commerce or business: Finance, Accounting, Business Analytics, Marketing, Management",
          "Computer science or IT: Computer Science, Software Engineering, Data Science, Cybersecurity",
          "Engineering: Advanced Engineering, Renewable Energy, Robotics, Project Management",
          "Biological or health sciences: Biomedical Sciences, Public Health, Biotechnology, relevant professional programmes",
          "Humanities or social sciences: Economics, Psychology, International Relations, Media Studies",
          "Design or creative disciplines: Architecture, Film Production, Graphic Design, Creative Media",
          "These are starting points, not automatic eligibility matches. Some courses accept applicants from different academic backgrounds, while others require specific undergraduate subjects, mathematics knowledge, professional experience, or a portfolio.",
          "If you are considering a change of field, check whether the course is designed for applicants without a relevant degree. A conversion programme may provide a suitable route, but not every master's programme is intended for career changers.",
          "Professional fields also need extra attention. For example, completing a general master's in a healthcare or law-related subject does not automatically qualify you to practise a regulated profession in the UK. Check the relevant professional body's requirements separately.",
        ],
      },
      {
        icon: Building2,
        title: "Compare UK Universities Beyond Their Rankings",
        desc: "When shortlisting UK universities, consider the strength and structure of your intended course rather than relying only on overall university rankings.",
        points: [
          "The Russell Group includes 24 research-intensive universities, but membership alone does not establish which institution is best for your particular subject. Universities outside the group may also have strong departments, specialist facilities, industry connections, or teaching approaches that suit your goals.",
          "Compare the following before making a shortlist:",
          "Course content: Review compulsory modules, optional subjects, specialisations, and dissertation requirements.",
          "Academic environment: Check faculty expertise, research activity, laboratories, studios, and other subject-specific facilities.",
          "Practical opportunities: Determine whether placements, industry projects, or professional learning are part of the programme or optional extras.",
          "Student support: Review academic assistance, careers guidance, library resources, and international student services.",
          "Location: Consider the campus environment, transport, accommodation options, and access to facilities relevant to your studies.",
          "Entry requirements: Make sure your academic qualifications and subject background match the course's published criteria.",
          "Also distinguish between a university's reputation and the outcome you personally want from your degree. A highly ranked institution may be an excellent choice, but the curriculum, cost, learning environment, and suitability of the programme still matter.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "Check UK University Admission Requirements",
        desc: "Admission requirements are set by individual universities and may differ between courses at the same institution. Before applying, check the official course page for the academic qualifications, grades, subject prerequisites, and supporting documents required.",
        points: [
          "For bachelor's applicants: Universities assess your Class 12 qualifications and may specify minimum grades in particular subjects. If your qualifications do not meet direct-entry criteria, a foundation programme may be an option.",
          "For master's applicants: Universities usually consider your bachelor's degree, academic performance, and the relevance of your previous studies. Some programmes also require work experience, a portfolio, references, or a statement explaining your academic interests.",
          "English-language proficiency: Depending on the university and course, you may need to provide IELTS Academic or another accepted form of English-language evidence. The required score and accepted alternatives vary, so check the institution's policy and the relevant visa requirements.",
          "Additional requirements: Certain courses may ask for interviews, auditions, research proposals, entrance assessments, or evidence of professional experience.",
          "Meeting the minimum criteria does not guarantee an offer. Competitive courses may receive more qualified applications than they have available places.",
        ],
      },
      {
        icon: Calendar,
        title: "Understand UK University Intakes and Application Routes",
        desc: "The main academic intake is generally in September or October. January entry is available for selected programmes, and some courses offer other start dates.",
        points: [
          "Undergraduate applicants commonly use UCAS, the UK's centralised undergraduate application service. However, application arrangements and deadlines depend on the course and institution.",
          "Postgraduate applicants generally apply directly to universities. Each institution sets its own application requirements and deadlines, so there is no single deadline that applies to every master's programme.",
          "A practical application plan looks like this:",
          "1. Research courses: Identify programmes that match your qualification, subject interests, and academic goals.",
          "2. Check eligibility: Compare entry requirements, English-language criteria, and any additional selection requirements.",
          "3. Prepare documents: Arrange transcripts, certificates, references, personal statements, and other required materials.",
          "4. Submit applications: Follow the correct application route and each university's deadline.",
          "5. Review your offer: Understand any conditions you must meet before enrolment.",
          "6. Plan the next steps: Once you have an appropriate offer, review the financial, accommodation, and Student visa requirements that apply to your circumstances.",
          "For international students who need a UK Student visa, an offer alone is not enough. The course and provider must meet the relevant sponsorship requirements, and eligible applicants need a Confirmation of Acceptance for Studies (CAS) to apply for the visa. Check the current official requirements before making travel arrangements.",
        ],
      },
      {
        icon: Compass,
        title: "Make Your UK Study Plan Work for You",
        desc: "Before finalising a university, bring your research together. Check that the course matches your academic background, the qualification is suitable for your intended direction, and the university's published requirements are achievable. Then consider the practical side: tuition and living expenses, the location, application deadlines, and any additional requirements associated with your course. These factors are covered in greater detail in the separate cost, scholarship, and post-study work sections of this guide.",
        points: [
          "University Yatra helps students compare UK universities and courses, understand admission requirements, and organise the application process around their individual academic profiles.",
        ],
      },
    ],
    faqs: [],
  },

  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    title: "Cost of Studying in the UK",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Indicative Tuition Fees, Living Costs, Visa Fees & Financial Planning",
    heroImage: "/images/universities/uk/university-college-london.webp",
    accentColor: "#4A101D",
    pillColors: [
      { label: "MASTER'S TUITION", bg: "#D7F77D", text: "#063B72" },
      { label: "BACHELOR'S TUITION", bg: "#B5E9F2", text: "#063B72" },
      { label: "VISA & IHS FEES", bg: "#FFD4E6", text: "#063B72" },
      { label: "TOTAL DEGREE BUDGET", bg: "#0C9253", text: "#FFFFFF" },
    ],
    overview:
      "The main financial decision when planning to study in the UK is not simply how much tuition a university charges. You also need to account for accommodation, everyday expenses, immigration fees, course materials, and the money required before you travel. For Indian students, the total cost of studying in the UK can differ substantially depending on the degree, university, subject, and city. A one-year master's may reduce the number of years you pay for accommodation compared with a longer programme elsewhere, but the upfront cost can still be significant. The most useful way to plan is to separate your total study budget, the funds required for your Student visa, and the money you need to pay before arriving. These are related, but they are not the same.",
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
          "Tuition fees: The fee for your chosen programme and academic year",
          "Accommodation: University residence, shared housing, or private rent",
          "Living expenses: Groceries, transport, phone bills, utilities, and personal spending",
          "Immigration costs: Student visa application fee and Immigration Health Surcharge (IHS)",
          "Academic expenses: Books, software, equipment, lab materials, and course-specific charges",
          "Pre-arrival expenses: Travel, accommodation deposits, initial purchases, and other setup costs",
          "Financial buffer: Emergency expenses and unexpected changes in your plans",
          "A university's advertised tuition fee is only one part of the total investment. Build your budget around the full period of study, not just the first payment or the amount shown on your offer letter.",
        ],
      },
      {
        icon: FileText,
        title: "Tuition Fees in the UK for International Students",
        desc: "Tuition fees depend on the institution, qualification, subject, and resources required to deliver the course. Laboratory-based programmes, clinical training, specialist equipment, and premium MBA programmes can cost considerably more than classroom-based degrees.",
        points: [
          "The following figures are broad planning ranges based on the supplied reference, not official UK-wide averages or guaranteed prices for 2026–27.",
          "Undergraduate degrees: £11,400–£38,000",
          "Taught master's degrees: £11,000–£35,000",
          "MBA programmes: £15,000–£40,000+, with some considerably higher",
          "Engineering programmes: £20,000–£42,000",
          "Medicine and dentistry: £31,000–£70,500+",
          "These ranges overlap and should not be treated as fixed price bands. Some universities charge outside them, and clinical or specialist courses can have different fee structures.",
        ],
      },
      {
        icon: GraduationCap,
        title: "Undergraduate tuition fees",
        desc: "For students applying after Class 12, the cost of a bachelor's degree depends on the subject, university, and length of the programme. Classroom-based subjects may be less expensive than programmes requiring extensive laboratory, studio, or specialist facilities.",
        points: [
          "Remember that a three-year degree and a four-year degree can have very different total costs even when their annual fees are similar. If your academic qualifications require a foundation year before undergraduate entry, budget for that additional year separately.",
        ],
      },
      {
        icon: BookOpen,
        title: "Postgraduate tuition fees",
        desc: "A one-year taught master's is a common route for Indian graduates considering the UK. Programmes such as MSc, MA, and many MBA degrees can provide advanced subject knowledge over a relatively short period.",
        points: [
          "However, a shorter course does not necessarily mean a low upfront cost. Tuition may be concentrated into one intensive academic year, and students still need to fund accommodation, living expenses, and immigration costs.",
          "Compare the total cost of completing the qualification, not just the annual fee. Also check whether the university's quoted tuition includes all required components or whether additional course charges apply.",
        ],
      },
      {
        icon: Award,
        title: "MBA, medicine, and specialist programmes",
        desc: "Some programmes carry a substantial price premium because of their teaching model, facilities, professional requirements, or institutional positioning.",
        points: [
          "MBA fees can vary sharply between institutions, particularly where the programme includes executive-level teaching, intensive networking, or specialist career support. Medicine and dentistry may involve clinical facilities and placement-related costs, while engineering, architecture, and laboratory sciences may require specialist equipment or materials.",
          "For these courses, use the university's official fee page as the primary source and check whether the published figure applies to international students entering in your intended year.",
        ],
      },
      {
        icon: Calculator,
        title: "How Your University and Course Affect the Cost",
        desc: "Two programmes at the same university can have different tuition fees. Likewise, a well-known university is not necessarily the most expensive option in every subject.",
        points: [
          "Subject and facilities: Classroom-based programmes may cost less than courses involving laboratory work, clinical training, workshops, or specialist equipment. Always compare the fee for the exact programme.",
          "Institution and programme: Tuition varies by university and department. Compare the curriculum, facilities, and academic fit alongside price rather than assuming rankings directly determine value.",
          "Location: Universities in London may charge different tuition fees from those in other parts of the UK. The city also affects rent and everyday expenses, so assess tuition and living costs separately.",
          "Course duration: A shorter programme can reduce the number of months you pay for housing and everyday living. Compare the complete programme cost, including any foundation year, placement year, or extension.",
        ],
      },
      {
        icon: Home,
        title: "Cost of Living in the UK",
        desc: "Living expenses depend on where you study and how you arrange your accommodation. London can require a substantially larger budget than many regional cities, especially if you rent privately. Even within the same city, the difference between university accommodation, a shared house, and a private studio can be considerable.",
        points: [
          "For early planning, the following are illustrative monthly budgets, not official national averages. They assume a student living independently and should be replaced with current accommodation and transport estimates for your chosen city.",
          "Accommodation and utilities: London £800–£1,500+; Other UK cities £500–£1,000+",
          "Groceries and basic household items: London £180–£300; Other UK cities £160–£260",
          "Local transport: London £100–£200; Other UK cities £50–£120",
          "Phone, personal expenses, and social activities: London £150–£300; Other UK cities £120–£250",
          "Indicative monthly total: London £1,230–£2,300+; Other UK cities £830–£1,630+",
          "These totals are budgeting illustrations. Rent, utility arrangements, commuting distance, and individual spending can push costs above or below these figures. Check your university's accommodation prices and local transport fares before finalising your estimate.",
        ],
      },
      {
        icon: HomeIcon,
        title: "Accommodation",
        desc: "Housing is often the largest recurring living expense. University residences can simplify the initial move, while shared private accommodation may offer different options for rent, location, and facilities.",
        points: [
          "When comparing properties, check whether utilities and internet are included, whether a deposit is required, and how far you will need to travel to campus. A cheaper room farther away may not be cheaper overall if transport costs are high.",
        ],
      },
      {
        icon: Utensils,
        title: "Food and daily expenses",
        desc: "Cooking at home, planning groceries, and using student discounts where available can help control everyday spending. Build a realistic budget that includes household supplies and occasional meals out rather than estimating food costs alone.",
        points: [],
      },
      {
        icon: Bus,
        title: "Transport and location",
        desc: "Some students can walk to campus, while others need buses, trains, or local rail services. Check the actual journey and fare for your accommodation before choosing a location. A city with lower rent may still require a larger commuting budget.",
        points: [],
      },
      {
        icon: ShieldCheck,
        title: "Student Visa, Immigration Health Surcharge, and Other Mandatory Costs",
        desc: "International students should budget for immigration-related expenses separately from tuition and living costs.",
        points: [
          "Student visa application: £558. Current standard fee for an application made from outside the UK, according to GOV.UK.",
          "Immigration Health Surcharge (IHS): £776 per year. The student rate. The total payment depends on the length of immigration permission granted, not simply the advertised course duration.",
          "The Immigration Health Surcharge is paid as part of the relevant immigration application and generally provides access to NHS services on the applicable terms. It is separate from tuition, private medical cover, and other personal expenses.",
          "You may also need to budget for:",
          "TB testing: Applicants from India who fall within the testing requirements need a certificate from an approved clinic.",
          "Travel: One-way or return flights, baggage, and transfers to your accommodation.",
          "Accommodation deposits: Initial payments required to secure university or private housing.",
          "Application costs: UCAS or other application charges, where applicable, and any fees charged by individual universities.",
          "Course-specific expenses: Equipment, books, software, professional checks, or other requirements associated with your programme.",
          "A Confirmation of Acceptance for Studies (CAS) is issued by an eligible education provider for the Student visa process. Do not assume that a separate CAS fee is payable to the UK government; check the university's own terms for any required tuition deposit or administrative charge.",
        ],
      },
      {
        icon: Calendar,
        title: "How Much Money Must You Show for a UK Student Visa?",
        desc: "The UK's financial requirement is different from your full living budget. For eligible applicants, the required maintenance amount is calculated using the official monthly figure for the study location, for up to nine months.",
        points: [
          "Studying in London: £1,529/month, up to 9 months",
          "Studying outside London: £1,171/month, up to 9 months",
          "This means a student applying under the standard nine-month calculation needs to demonstrate £13,761 for London or £10,539 outside London, in addition to any outstanding course fees required by the rules.",
          "The financial evidence rules specify how funds must be held and documented. In many cases, the required balance must be maintained for a continuous 28-day period, with the relevant period ending within the permitted timeframe before the application.",
          "The amount you must show is a visa eligibility threshold, not a guarantee that it will cover your real expenses. If your accommodation is expensive or your course lasts longer than the period used for the visa calculation, you may need a larger practical budget.",
          "Always check the current GOV.UK financial requirements and your Confirmation of Acceptance for Studies before arranging your finances.",
        ],
      },
      {
        icon: Sparkles,
        title: "Scholarships and Financial Support",
        desc: "Scholarships can reduce the amount you need to pay, but the award's value and conditions matter. Some scholarships provide a fixed reduction in tuition, while others offer more substantial funding. A tuition discount does not automatically cover accommodation, living expenses, travel, or immigration costs.",
        points: [
          "Indian students can investigate:",
          "University scholarships: Awards for international applicants, academic achievement, or specific programmes.",
          "Government-backed scholarships: Opportunities such as Chevening and Commonwealth awards, subject to their individual eligibility criteria.",
          "External funding: Awards from foundations and other organisations for eligible students.",
          "Research funding: Studentships and stipends available for some research master's and doctoral programmes.",
          "Check whether the award is open to Indian applicants, whether a separate application is needed, and whether it applies to your course and intake. Do not subtract a scholarship from your budget until you have confirmed the award's value and conditions.",
          "We will cover specific opportunities and application requirements in the separate Scholarships in the UK section.",
        ],
      },
      {
        icon: Calculator,
        title: "Calculate the Total Cost Before Applying",
        desc: "A useful budget includes all the expenses you expect to incur, not only the university's annual fee. The following example shows how to organise a first-year estimate.",
        points: [
          "Tuition: Published fee for your specific course and intake",
          "Living expenses: Monthly budget multiplied by the period you expect to live in the UK",
          "Visa and IHS: Current application fee and surcharge based on your immigration permission",
          "Travel and arrival: Flights, transfers, initial purchases, and accommodation deposits",
          "Academic extras: Books, equipment, software, field trips, or professional requirements",
          "Financial buffer: A reserve for unexpected costs or changes in expenses",
          "For example, a student on a one-year master's should calculate the tuition for that programme, the living budget for the full stay, the relevant visa and IHS payments, and the cost of moving to the UK. A bachelor's student should budget for the entire degree, including the possibility of annual fee changes where applicable.",
          "The most important step is to avoid building a financial plan that depends entirely on securing a part-time job or future graduate employment. Neither is guaranteed, and work income should not replace the funds needed to begin your studies safely.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "Practical Ways to Manage Your Study Budget",
        points: [
          "Compare total costs, not just tuition. Include rent, transport, immigration expenses, and course-specific charges.",
          "Shortlist universities by budget as well as course fit. A suitable regional university may have a lower overall cost than an otherwise comparable option in London.",
          "Read the fee terms carefully. Confirm the amount due before enrolment, payment deadlines, and whether fees may increase in later years.",
          "Check scholarships early. Some funding deadlines fall before the course application deadline.",
          "Keep an arrival fund. Deposits, initial food purchases, transport, and essential items can make the first few weeks more expensive.",
          "Maintain a financial buffer. Do not rely on future work income to meet essential tuition or living expenses.",
          "The objective is not necessarily to find the cheapest university. It is to choose a course you are eligible for and can realistically fund, with enough financial flexibility to complete your studies.",
        ],
      },
    ],
    faqs: [],
  },

  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    title: "Cost of Living & Culture in the UK",
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
      "Moving to the UK involves more than paying university tuition fees. You will need to budget for accommodation, groceries, transport, utilities, and the everyday experiences that make student life enjoyable. At the same time, living in the UK gives you the opportunity to experience different communities, traditions, food, arts, and ways of life. Your actual expenses will depend on where you live, your accommodation choices, and how you spend your free time. Understanding these differences before travelling can help you prepare for life as an international student.",
    metrics: [
      { label: "Monthly Living Cost", value: "£830–£2,300+ / mo" },
      { label: "Accommodation (London)", value: "£800–£1,500+ / mo" },
      { label: "Accommodation (Regional)", value: "£450–£1,000+ / mo" },
      { label: "Campus Life", value: "Clubs, Culture & Community" },
    ],
    chapters: [
      {
        icon: Home,
        title: "Understanding the Cost of Living in the UK",
        desc: "Accommodation is usually one of the largest monthly expenses for international students. Food, transport, household bills, and personal spending make up the rest of the budget.",
        points: [
          "As a broad planning guide, students may need around £900–£1,400 per month outside London and approximately £1,300–£1,500 per month in London for accommodation, bills, and regular living expenses. These are indicative ranges, not fixed costs, and some students may spend more depending on their housing and lifestyle.",
        ],
      },
      {
        icon: Calculator,
        title: "Estimated Monthly Expenses",
        points: [
          "Accommodation: London £800–£1,500+; Other UK cities £450–£1,000+",
          "Groceries: London £160–£250; Other UK cities £140–£220",
          "Utilities and internet: London £70–£120; Other UK cities £70–£120",
          "Local transport: London £80–£150+; Other UK cities £40–£100",
          "Personal and social expenses: London £150–£300; Other UK cities £120–£250",
          "These are illustrative budgeting estimates, not official averages. Accommodation type, neighbourhood, utility arrangements, transport habits, and lifestyle can change the totals considerably. Check whether bills are included in your rent before comparing properties.",
        ],
      },
      {
        icon: HomeIcon,
        title: "Choosing the Right Student Accommodation",
        desc: "Your accommodation decision affects both your monthly budget and your day-to-day experience.",
        points: [
          "University Halls of Residence: University-managed accommodation can be convenient for first-year students and those arriving from abroad. It often provides furnished rooms and shared facilities, and some options include utilities. Check the contract carefully to understand what is covered.",
          "Shared Private Housing: Renting a room in a shared house or flat can offer more independence and may be less expensive than living alone. However, you may need to budget separately for bills, internet, deposits, and travel to campus.",
          "Private Studios and En-suite Rooms: These options offer greater privacy but generally cost more. Compare the additional expense with the convenience, location, and facilities you receive.",
          "Before signing a contract, check the distance to campus, public transport links, tenancy length, deposit arrangements, and whether utility bills are included. International students renting privately may also need to arrange a guarantor or meet other payment conditions.",
        ],
      },
      {
        icon: Utensils,
        title: "Managing Food, Transport, and Everyday Expenses",
        desc: "Small, recurring expenses can make a noticeable difference to your monthly budget. Planning them early helps you maintain a comfortable lifestyle without overspending.",
        points: [
          "Groceries and cooking: Supermarkets such as Aldi and Lidl can be useful for budget-conscious shopping. Indian grocery shops are also available in many university towns and larger cities, making it easier to find familiar ingredients.",
          "Transport: Walking or cycling may work well if you live close to campus. In larger cities, compare bus passes, student travel concessions, and railcards where eligible.",
          "Utilities: Check heating, electricity, water, and broadband arrangements before renting. Energy use can increase during colder months, particularly in properties where bills are paid separately.",
          "Mobile connectivity: Compare SIM-only plans and contract terms before committing to a long-term package.",
          "Social spending: Keep a separate allowance for eating out, cinema visits, gym memberships, day trips, and other activities.",
          "Full-time students are generally exempt from council tax when the applicable eligibility conditions are met. Check the rules for your household and accommodation rather than assuming every rental arrangement qualifies.",
        ],
      },
      {
        icon: Globe2,
        title: "Understanding British Culture and Everyday Life",
        desc: "The UK is not culturally uniform. England, Scotland, Wales, and Northern Ireland each have distinct traditions, identities, local expressions, and regional experiences. Your university city will also shape your experience, from the pace of everyday life to the activities available outside the classroom.",
        points: [],
      },
      {
        icon: Users,
        title: "A Multicultural Student Community",
        desc: "Universities bring together students from different countries, languages, religions, and backgrounds. You may meet people through lectures, student societies, accommodation, sports clubs, and campus events.",
        points: [
          "For Indian students, larger cities often offer familiar food, cultural associations, places of worship, and international communities. Smaller university towns can provide a more close-knit student environment. Neither experience is universal, so it is worth researching the community around your shortlisted universities.",
        ],
      },
      {
        icon: Utensils,
        title: "Food, Traditions, and Social Life",
        desc: "British food culture includes traditional dishes such as fish and chips, a full English breakfast, and Sunday roast, alongside a wide range of international cuisines. Indian restaurants, supermarkets, and specialist grocery shops are available in many parts of the country.",
        points: [
          "Social life may involve coffee shops, shared meals, university events, live music, football, theatre, or informal gatherings with friends. Pubs are a familiar part of social life in many places, but they are not the only way to meet people. There are plenty of alcohol-free activities and spaces too.",
        ],
      },
      {
        icon: Sparkles,
        title: "Arts, Music, Sport, and Weekend Activities",
        desc: "The UK has an extensive cultural scene, from museums and galleries to live performances, independent cinemas, music festivals, and professional sporting events. Many museums offer free general admission, although special exhibitions may charge an entry fee. University societies can also introduce you to new interests without requiring a large budget.",
        points: [
          "Weekends can be an opportunity to visit historic towns, explore national parks, attend local events, or travel to another city. Plan trips around your academic schedule and transport costs to make them more affordable.",
        ],
      },
      {
        icon: MessageCircle,
        title: "Communication and Social Etiquette",
        desc: "Everyday communication may take some adjustment. People use different regional accents and expressions, and humour or conversational styles can vary. Politeness, respecting personal space, being punctual for appointments, and communicating clearly are useful starting points.",
        points: [
          "You do not need to change your identity or abandon familiar customs to fit in. Learning how people communicate locally, asking questions when something is unfamiliar, and being open to different perspectives can make settling in easier.",
        ],
      },
      {
        icon: Clock,
        title: "Weather and Daily Routines",
        desc: "The weather can change quickly, and conditions differ across the UK. Rain, cold spells, and shorter daylight hours during winter may affect your routine, clothing choices, and heating expenses. Bring suitable layers, check local forecasts, and factor seasonal costs into your budget.",
        points: [],
      },
      {
        icon: Calendar,
        title: "Adjusting to Life Away from Home",
        desc: "Moving abroad can be exciting, but the initial adjustment may also involve homesickness, unfamiliar routines, and the responsibility of managing money independently.",
        points: [
          "A few habits can help:",
          "Build a routine: Balance classes, meals, sleep, exercise, and time with friends.",
          "Get involved early: Join a society, attend orientation activities, or take part in campus events.",
          "Stay connected: Keep in touch with family and friends while making time to develop a local support network.",
          "Understand available support: Find out how your university provides academic guidance, wellbeing services, and support for international students.",
          "Keep a realistic budget: Track spending during your first few months and adjust your plan as you learn the actual costs.",
          "Settling in is a process rather than something that happens immediately. Give yourself time to understand your surroundings and develop a routine that works for you.",
        ],
      },
      {
        icon: Compass,
        title: "Choosing a UK City That Fits Your Budget and Lifestyle",
        desc: "The right city is not necessarily the cheapest or the most famous. It is the place where your course, accommodation budget, transport needs, and preferred lifestyle work together.",
        points: [
          "London: Extensive transport, cultural attractions, and career networks, alongside generally higher housing and daily costs",
          "Manchester and Birmingham: Large, diverse student communities, cultural activities, and access to major urban amenities",
          "Leeds and Sheffield: University-centred communities, arts and music, and a mix of urban and outdoor activities",
          "Glasgow and Edinburgh: Distinct Scottish culture, historic settings, and access to arts, festivals, and outdoor destinations",
          "These are broad descriptions, not guarantees of affordability. Costs vary significantly within each city, so compare actual accommodation options and commute times before deciding.",
        ],
      },
      {
        icon: DollarSign,
        title: "Plan for Both Living Costs and Student Life",
        desc: "A realistic UK budget should cover essential expenses first, then leave room for travel, hobbies, and social activities. Keep emergency savings where possible, account for upfront accommodation payments, and avoid relying on part-time work to cover costs before you have confirmed your eligibility and practical options.",
        points: [
          "Remember that the amount required for a Student visa financial assessment is a separate immigration requirement. It should not be treated as a complete estimate of what you will actually spend while living in the UK.",
          "With a well-planned budget and a willingness to experience a new environment, studying in the UK can become an opportunity to develop independence, build international friendships, and discover interests beyond your degree.",
        ],
      },
    ],
    faqs: [],
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
      "Studying in the UK can be a significant financial commitment, but the right scholarship can make your plans more manageable. Funding may come from the UK government, universities, charitable trusts, or Indian government schemes. Some awards cover the full cost of an eligible programme, while others reduce tuition fees or provide a contribution towards living expenses. The key is to identify scholarships that match your academic background, intended course, financial circumstances, and career goals. Instead of applying everywhere, build a shortlist of funding options for which you meet the actual eligibility requirements.",
    metrics: [
      { label: "Chevening Award", value: "Fully Funded" },
      { label: "GREAT Scholarships", value: "£10,000 towards tuition" },
      { label: "University Awards", value: "Merit & Need-Based" },
      { label: "Application Range", value: "Highly Competitive" },
    ],
    chapters: [
      {
        icon: Award,
        title: "Understand the Types of Scholarships Available in the UK",
        desc: "Scholarships for international students are not all structured in the same way. Understanding the different categories helps you identify where to focus your applications.",
        points: [
          "Fully Funded Scholarships: These may cover tuition fees, living expenses, and other approved costs such as return travel. They are highly competitive and often have specific academic, professional, or development-related requirements.",
          "University Scholarships: Many UK universities offer merit-based awards, international student scholarships, and course-specific funding. The value may be a fixed tuition discount, a percentage reduction, or a larger award for selected applicants.",
          "Subject-Specific Scholarships: Funding may be available for particular disciplines, research areas, or professional pathways. These awards can be especially relevant to applicants pursuing specialised postgraduate study or research.",
          "External and Indian Government Funding: Charitable trusts, foundations, and Indian government schemes may support eligible students studying overseas. Some awards target particular communities, regions, academic fields, or financial circumstances.",
          "An important distinction: a scholarship is not always a full funding package. Check whether the award covers tuition alone or also contributes towards accommodation, daily expenses, travel, and other costs.",
        ],
      },
      {
        icon: Sparkles,
        title: "Major UK Scholarships for Indian Students",
        desc: "The following programmes are useful starting points when researching scholarships to study in the UK. Their eligibility criteria and availability differ, so check the current application cycle before preparing your documents.",
        points: [],
      },
      {
        icon: Award,
        title: "Chevening Scholarship",
        image: { src: "/images/study-uk/chevening-scholarship.jpg", alt: "Applications for the The UK Government's prestigious Chevening Scholarships opened on 3 August - GOV.UK" },
        desc: "UK government-funded postgraduate scholarship",
        points: [
          "Chevening supports eligible applicants pursuing a one-year master's degree in the UK. It is designed for people who demonstrate leadership potential, professional ambition, and a clear plan to create impact.",
          "Best suited for: Applicants with professional experience and evidence of leadership or influence.",
          "Funding: A fully funded award, subject to the programme's terms.",
          "Key consideration: Applicants must meet Chevening's eligible work-experience requirements and agree to its post-study return-home condition.",
        ],
        link: { prefix: "Official details:", label: "Chevening India", href: "https://www.chevening.org/scholarship/india/" },
      },
      {
        icon: Globe2,
        title: "Commonwealth Scholarships",
        image: { src: "/images/study-uk/commonwealth-scholarships.jpg", alt: "Want to study in the UK? Consider Commonwealth Scholarship to sponsor your education - The Economic Times" },
        desc: "Funding for eligible Commonwealth applicants",
        points: [
          "Commonwealth Scholarships support selected students whose study can contribute to development priorities. Different schemes have different eligible countries, courses, nomination processes, and funding arrangements.",
          "Best suited for: Applicants whose academic plans align with an eligible scheme's objectives.",
          "Funding: Certain awards cover tuition and living costs, with other approved support depending on the scheme.",
          "Key consideration: Do not assume every Commonwealth scholarship is open to every Indian applicant or course.",
        ],
        link: { prefix: "Official details:", label: "Commonwealth Scholarship Commission", href: "https://cscuk.fcdo.gov.uk/scholarships/" },
      },
      {
        icon: GraduationCap,
        title: "GREAT Scholarships",
        image: { src: "/images/study-uk/great-scholarships.jpg", alt: "GREAT Scholarships 2026 | Scholarships and Student Funding | Registry Services" },
        desc: "Tuition support for selected postgraduate courses",
        points: [
          "GREAT Scholarships are jointly funded by the UK government's GREAT Britain campaign, the British Council, and participating universities.",
          "Best suited for: Eligible Indian students applying for participating one-year taught postgraduate courses.",
          "Funding: For the 2026–27 cycle, the listed award value is £10,000 towards tuition fees.",
          "Key consideration: Eligible universities, courses, and application deadlines vary. This award should not be assumed to cover all living expenses.",
          "Other awards worth researching include the Rhodes Scholarship, selected university-funded research scholarships, the Charles Wallace India Trust for eligible arts and heritage-related opportunities, and the National Overseas Scholarship for eligible applicants under India's scheme. These programmes have distinct eligibility rules and should not be treated as interchangeable funding options.",
        ],
        link: { prefix: "Official details:", label: "GREAT Scholarships for India", href: "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships/india" },
      },
      {
        icon: Building2,
        title: "UK University Scholarships for International Students",
        desc: "Government-funded scholarships receive considerable attention, but university-specific funding can be equally important when calculating your study budget. Some universities automatically consider eligible applicants for certain awards, while others require a separate scholarship application.",
        points: [
          "International merit awards: Academic grades, previous qualifications, and whether consideration is automatic",
          "Course-specific awards: Eligible degree programmes, subject requirements, and available funding",
          "Research funding: Supervisor or department requirements, research proposal, and funding availability",
          "University-wide postgraduate awards: Nationality restrictions, offer conditions, and separate application deadlines",
          "Need-based or hardship funding: Financial evidence, eligibility restrictions, and whether international students qualify",
          "Do not choose a university based only on the scholarship amount advertised. Compare the remaining tuition fee, likely living expenses, scholarship conditions, and total cost of the degree. A smaller award at a lower-cost university may sometimes make more financial sense than a larger award at a more expensive institution.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "Scholarships in the UK: Eligibility Criteria",
        desc: "There is no single eligibility checklist that applies to every scholarship. However, these are common factors to review before applying.",
        points: [
          "Academic performance: Some awards require high grades or a specific degree classification. Others consider academic potential alongside professional achievements.",
          "Nationality and residency: Certain scholarships are restricted to Indian citizens, residents of particular countries, or applicants from eligible regions.",
          "Course and university: Your intended programme may need to appear on an approved course list, and you may need an offer from a participating university.",
          "English-language requirements: You must meet the university's language requirements where applicable. A particular scholarship may also specify additional conditions.",
          "Work experience and leadership: Competitive postgraduate awards may assess professional experience, community involvement, leadership, or a demonstrated record of impact.",
          "Financial circumstances: Some schemes are designed for applicants who could not otherwise afford the programme, while others focus primarily on academic merit.",
          "Career objectives: Certain scholarships assess how you intend to use your education after graduation, including the contribution you could make to your community or professional field.",
          "Meeting the minimum eligibility criteria does not guarantee selection. Scholarship committees may also assess the quality of your application, references, career plans, and fit with the award's objectives.",
        ],
      },
      {
        icon: FileText,
        title: "How to Apply for Scholarships in the UK from India",
        desc: "A strong scholarship application starts well before the deadline. Use the following process to organise your search and avoid spending time on awards that do not match your profile.",
        points: [
          "1. Shortlist scholarships that fit your profile: Start with your intended degree, subject, academic results, nationality, work experience, and budget. Identify a mix of government-funded, university-specific, and external awards.",
          "2. Check the official eligibility requirements: Confirm eligible courses and institutions, funding coverage, application route, required offer status, and any return-home or other award conditions. Use the official scholarship website rather than relying solely on third-party summaries.",
          "3. Prepare your university application: Many scholarships require a separate university application, and some require an offer before you can apply for funding. Check the sequence for each award so that the two deadlines do not conflict.",
          "4. Organise your supporting documents: Common requirements include academic transcripts, degree certificates, a CV, a personal statement or scholarship essay, references, and proof of English-language proficiency where required. Some programmes request additional evidence.",
          "5. Write a specific scholarship statement: Explain why the course fits your goals, what you bring to the programme, and how the funding will support your plans. For leadership-focused awards, use concrete examples of decisions, responsibilities, and outcomes rather than relying on broad claims.",
          "6. Submit early and track every deadline: Keep a record of application dates, document requirements, referee requests, interview stages, and results. Scholarship deadlines are not uniform, even when awards belong to the same programme.",
        ],
      },
      {
        icon: Sparkles,
        title: "How to Improve Your Chances of Securing a UK Scholarship",
        desc: "Scholarships can attract applicants with excellent academic records, so a strong application needs more than good marks. Focus on the requirements of the specific award.",
        points: [
          "Show evidence, not just ambition. Use examples of academic work, projects, employment, volunteering, or leadership that demonstrate your abilities.",
          "Connect your course to a clear objective. Explain why the programme is relevant to the work you want to do and what skills you expect to gain.",
          "Personalise each application. Avoid using the same statement for every scholarship. Address the award's stated priorities and selection criteria.",
          "Choose references carefully. Ask people who can speak directly about your academic strengths, professional contribution, or leadership potential.",
          "Apply to a realistic range of awards. Combine highly competitive major scholarships with relevant university awards and other funding options for which you qualify.",
          "Prepare for interviews when required. Practise explaining your goals, decisions, achievements, and future plans clearly, using genuine examples.",
          "There is no reliable way to guarantee a scholarship. The aim is to submit complete, well-supported applications to awards that genuinely match your profile.",
        ],
      },
      {
        icon: Calculator,
        title: "Plan Your Budget Even If You Receive a Scholarship",
        desc: "Before accepting an award, calculate how much of your total study cost it will cover. A tuition-fee scholarship may leave you responsible for accommodation, food, travel, immigration-related costs, and other expenses.",
        points: [
          "Review the following before making a final decision:",
          "Total tuition fees after the scholarship is applied.",
          "Accommodation and everyday living costs for the full course duration.",
          "Whether the award is paid directly to the university or to you.",
          "Conditions for keeping the scholarship, including academic progress or attendance.",
          "Whether the award can be combined with other scholarships or financial support.",
          "What happens if your course, enrolment status, or study plans change.",
          "Do not assume that a scholarship automatically satisfies UK Student visa financial requirements. Check the current rules and the evidence accepted for your particular circumstances.",
        ],
      },
      {
        icon: Users,
        title: "How University Yatra Helps You Explore Scholarship Options",
        desc: "University Yatra helps students organise the steps involved in planning a UK education. This includes shortlisting suitable universities and courses, understanding admissions requirements, preparing application documents, and identifying scholarship opportunities relevant to the student's profile.",
        points: [
          "Our guidance can help you:",
          "Identify scholarships that align with your intended course and background.",
          "Understand the difference between full funding and partial tuition awards.",
          "Track university admission and scholarship application requirements.",
          "Prepare and review supporting documents, personal statements, and application timelines.",
          "Compare the likely total cost of shortlisted study options.",
          "Scholarship availability and final decisions remain with the respective funding bodies and universities. No scholarship amount or selection outcome should be considered guaranteed before official confirmation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can Indian students get fully funded scholarships in the UK?",
        a: "Yes. Some programmes offer full funding to eligible Indian applicants, including certain government-funded postgraduate scholarships. These awards are competitive and may have specific academic, professional, course, or post-study conditions.",
      },
      {
        q: "Are scholarships available for undergraduate study in the UK?",
        a: "Yes, some UK universities offer undergraduate scholarships or tuition-fee discounts to international students. Availability, award value, and eligibility vary by institution and course.",
      },
      {
        q: "Which UK scholarships are available for Indian students?",
        a: "Options to investigate include Chevening, GREAT Scholarships, eligible Commonwealth schemes, university-specific awards, and selected Indian government or charitable funding programmes. Not every award is available for every intake or degree level.",
      },
      {
        q: "Do I need an offer letter before applying for a UK scholarship?",
        a: "It depends on the scholarship. Some require an offer from an eligible university or course, while others use a separate application process. Check the official instructions before deciding which application to submit first.",
      },
      {
        q: "Can I apply for more than one scholarship?",
        a: "Often, yes, but each scholarship has its own rules. Some awards cannot be combined with other funding or may require you to declare additional financial support.",
      },
      {
        q: "When should I apply for scholarships to study in the UK?",
        a: "Start researching as soon as you have a likely course and intake in mind. Major scholarships and university awards follow different timelines, so check each official deadline and work backwards to prepare your documents.",
      },
      {
        q: "Does a UK scholarship cover living expenses?",
        a: "Some scholarships include a living allowance, while others cover only part of tuition fees. Read the funding terms carefully and calculate the remaining amount you will need to finance yourself.",
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
      "Completing a degree in the UK can open the door to international work experience, but your options after graduation depend on your visa, qualifications, job opportunities, and the immigration rules in force at the time. For many international students, the first step is the UK Graduate visa, which allows eligible graduates to remain in the country after completing an approved course. Others may be able to move directly to an employer-sponsored work visa if they secure a qualifying job. Understanding these routes before you graduate can help you plan your job search, manage your finances, and make informed decisions about your future in the UK.",
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
        desc: "The Graduate visa, commonly called the UK post-study work visa, allows eligible international students to stay in the UK after successfully completing an eligible course. It does not normally require a job offer or employer sponsorship when you apply.",
        points: [
          "This gives graduates time to search for suitable employment, gain work experience, or explore career opportunities before deciding whether to switch to another immigration route.",
        ],
      },
      {
        icon: Calendar,
        title: "How Long Can You Stay After Studying in the UK?",
        points: [
          "Bachelor's degree: 2 years for applications submitted by 31 December 2026; 18 months from 1 January 2027",
          "Master's degree: 2 years for applications submitted by 31 December 2026; 18 months from 1 January 2027",
          "PhD or other doctoral qualification: 3 years",
          "These durations are based on the application date and current published rules. Your qualification must meet the eligibility requirements for the route.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "Who Is Eligible for the Graduate Visa?",
        desc: "You generally need to:",
        points: [
          "Be in the UK when you apply.",
          "Hold a valid Student visa or eligible Tier 4 student permission.",
          "Have successfully completed an eligible course in the UK.",
          "Have your university or education provider notify the Home Office that you have completed the course.",
          "Apply before your existing Student visa expires.",
          "You do not need to wait for your graduation ceremony if your university has confirmed your successful completion to the Home Office and you meet the other requirements.",
          "Important: Completing a UK degree does not automatically grant a Graduate visa. You must submit an application and satisfy the immigration rules.",
        ],
      },
      {
        icon: Briefcase,
        title: "What Can You Do on a Graduate Visa?",
        desc: "The Graduate visa provides flexibility while you establish your career after university.",
        points: [
          "Eligible holders can generally:",
          "Work in most jobs, including roles that do not require employer sponsorship.",
          "Search for employment and attend interviews.",
          "Work for themselves, subject to the route's conditions.",
          "Change jobs without applying for a new sponsored visa each time.",
          "Explore opportunities across different industries while building professional experience.",
          "There are restrictions, including limits on certain professional sporting activities. You should check the official conditions before accepting work or making a change to your circumstances.",
        ],
      },
      {
        icon: Users,
        title: "Can You Bring Dependants?",
        desc: "The rules for dependants are restricted. In general, a partner or child who was already your dependant on your Student visa may be able to continue as your dependant on the Graduate route if the requirements are met. New dependants cannot usually join you under this route, although specific exceptions may apply.",
        points: [
          "Check the current rules for your family circumstances before making plans.",
        ],
      },
      {
        icon: DollarSign,
        title: "UK Graduate Visa Fees and Application Costs",
        desc: "The cost of applying for a Graduate visa includes the application fee and the Immigration Health Surcharge (IHS).",
        points: [
          "Graduate visa application fee: £937",
          "Immigration Health Surcharge: Usually £1,035 per year",
          "IHS for an 18-month Graduate visa: £1,152.50",
          "IHS for a 2-year Graduate visa: £2,070",
          "IHS for a 3-year Graduate visa: £3,105",
          "These figures reflect the currently published GOV.UK charges and may change. The total payable depends on the visa duration and your circumstances. Check the official fee page immediately before applying.",
          "Remember to budget separately for accommodation, everyday expenses, travel, and the costs associated with finding work.",
        ],
      },
      {
        icon: Briefcase,
        title: "Finding a Job After Graduation in the UK",
        desc: "A Graduate visa gives you permission to work, but it does not guarantee employment. Your chances depend on your field, skills, experience, location, and the roles available in the market. Start preparing for employment before your final semester rather than waiting until your visa begins.",
        points: [],
      },
      {
        icon: Compass,
        title: "What Should You Focus On?",
        points: [
          "Build relevant experience: Internships, eligible placements, projects, research, and part-time experience can help demonstrate your capabilities.",
          "Develop a UK-ready CV: Highlight relevant achievements, practical skills, and measurable outcomes instead of listing responsibilities alone.",
          "Use university career services: Seek help with CV reviews, interview practice, employer events, and graduate recruitment opportunities.",
          "Research employers early: Identify organisations recruiting in your field and understand their application timelines.",
          "Prepare for sponsorship requirements: If you hope to remain in the UK beyond the Graduate route, research which employers hold the appropriate sponsor licence and which roles may qualify.",
          "A placement year or internship can provide useful professional experience and employer connections, but neither guarantees a sponsored job.",
        ],
      },
      {
        icon: Globe2,
        title: "Switching to a Skilled Worker Visa",
        desc: "For graduates who want to continue working in the UK beyond their Graduate visa, the Skilled Worker route is one possible option.",
        points: [
          "Unlike the Graduate visa, this route generally requires an eligible job offer from an employer approved to sponsor workers. The role must meet the applicable occupation and salary requirements, and you must satisfy the other visa conditions.",
        ],
      },
      {
        icon: FileText,
        title: "Graduate Visa vs. Skilled Worker Visa",
        points: [
          "Job offer required to apply: Graduate visa: No; Skilled Worker visa: Yes",
          "Employer sponsorship required: Graduate visa: No; Skilled Worker visa: Yes",
          "Salary threshold: Graduate visa: No general sponsored-job salary threshold; Skilled Worker visa: Applicable salary and occupation rules must be met",
          "Flexibility to change jobs: Graduate visa: Generally broad work flexibility; Skilled Worker visa: Changes may require a visa update",
          "Long-term pathway: Graduate visa: Not itself a settlement route; Skilled Worker visa: May lead to settlement if all requirements are met",
        ],
      },
      {
        icon: Calculator,
        title: "Skilled Worker Salary Requirements",
        desc: "The standard Skilled Worker salary requirement is generally £41,700 per year or the relevant occupation's going rate, whichever is higher, subject to the applicable rules and exceptions.",
        points: [
          "Some eligible applicants, including certain recent graduates and people under 26, may qualify for a lower salary threshold. These concessions have specific conditions, minimum salary requirements, and limits.",
          "Do not assume that every graduate qualifies for a discount or that meeting the general salary threshold is sufficient for every occupation. Check the current occupation code, going rate, and applicable salary options before accepting a job offer.",
        ],
      },
      {
        icon: ArrowRight,
        title: "Can You Switch Directly from a Student Visa?",
        desc: "Eligible students may be able to switch directly to the Skilled Worker route if they meet its requirements. Depending on the circumstances, this may be preferable to first applying for a Graduate visa.",
        points: [
          "However, the right choice depends on whether you have a qualifying job offer, your course completion status, your employer, and the rules applicable to your case.",
        ],
      },
      {
        icon: Award,
        title: "Can You Get Permanent Residency After Studying in the UK?",
        desc: "A Graduate visa does not, by itself, lead directly to permanent residency. Graduates seeking to settle in the UK typically need to qualify under a separate immigration route.",
        points: [
          "The Skilled Worker route may provide a pathway to Indefinite Leave to Remain (ILR) after the relevant qualifying period, subject to the rules in force when the application is made.",
          "Under the current published Skilled Worker route, eligible applicants may generally apply for settlement after five years on a qualifying route, provided they satisfy the applicable residence, salary, sponsorship, English-language, and other requirements. Time spent on a Graduate visa does not normally count towards the five-year Skilled Worker settlement period.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "What Should Graduates Keep in Mind?",
        points: [
          "Keep your immigration documents and employment records organised.",
          "Track visa expiry dates and submit applications within the permitted period.",
          "Understand the requirements before switching between visa routes.",
          "Monitor official changes to settlement and immigration rules.",
          "Avoid making long-term financial or career decisions based on proposed reforms as if they were already law.",
          "The UK government has consulted on changes to settlement rules. Because immigration policy can change, verify the current position before relying on a particular settlement timeline.",
        ],
      },
      {
        icon: Sparkles,
        title: "Other Options After Studying in the UK",
        desc: "The Graduate and Skilled Worker routes are not the only possibilities. Depending on your qualifications, achievements, and circumstances, other routes may be relevant.",
        points: [
          "Global Talent visa: May be an option for eligible people with recognised or promising talent in specified fields. It has particular endorsement or eligibility requirements and is not a general graduate work visa.",
          "Innovator Founder visa: May be relevant to eligible applicants developing a qualifying business venture that meets the route's requirements.",
          "Further study: Graduates continuing to another eligible course may be able to apply for a new Student visa, subject to the rules.",
          "Other work routes: Some occupations or circumstances may qualify under separate visa categories.",
          "Each route has different requirements. Eligibility should be assessed individually rather than assumed from having a UK degree.",
        ],
      },
      {
        icon: Users,
        title: "How University Yatra Helps You Plan Beyond Graduation",
        desc: "Planning your UK education should involve more than choosing a university and securing admission. It is also useful to understand how your intended course connects with potential career paths and the immigration options that may be available after completion.",
        points: [
          "University Yatra can help you:",
          "Compare courses and universities in relation to your academic background and career objectives.",
          "Understand programme structures, placement opportunities, and course requirements.",
          "Organise admissions documentation and application timelines.",
          "Plan your education budget with course duration and likely living expenses in mind.",
          "Identify questions to research about post-study employment and immigration routes before committing to a programme.",
          "Visa eligibility, employment outcomes, and settlement are determined by the relevant authorities and employers. No course or university can guarantee a job, sponsorship, or permanent residency.",
        ],
      },
    ],
    faqs: [],
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
                      {chapter.image && (
                        <div className="relative aspect-[3/2] w-full max-w-[560px] overflow-hidden rounded-2xl">
                          <Image src={chapter.image.src} alt={chapter.image.alt} fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
                        </div>
                      )}
                      {chapter.desc && <p className="text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">{chapter.desc}</p>}
                      <PointsList points={chapter.points} />
                      {chapter.link && (
                        <p className="text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]">
                          <strong className="font-bold text-[#0C337B]">{chapter.link.prefix}</strong>{" "}
                          <a href={chapter.link.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1765F5] underline hover:text-[#0C337B]">{chapter.link.label}</a>
                        </p>
                      )}
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