import { Compass, GraduationCap, Calendar, DollarSign, FileText, Globe2, Award, CheckCircle2, Briefcase, Clock } from "lucide-react";

export const GUIDE_DETAILS_DATABASE = {
  "study-in-france": {
    id: "01",
    // vol: "VOL. I",
    title: "Study in France",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Licence, Master's, Doctorat and French Academic Intakes",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#0A1E3F",
    pillColors: [
      { label: "LMD FRAMEWORK", bg: "#D7F77D", text: "#063B72" },
      { label: "GRANDES ÉCOLES", bg: "#B5E9F2", text: "#063B72" },
      { label: "MAIN INTAKES", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "France follows the European Licence-Master-Doctorat (LMD) framework, offering structured pathways from undergraduate to doctoral studies. The system includes traditional universities alongside specialised Grandes Écoles.",
    metrics: [
      { label: "Licence (Bachelor's)", value: "Typically 3 Years" },
      { label: "Master's Degree", value: "Usually 2 Years" },
      { label: "Main Intakes", value: "September & January" },
      { label: "Academic System", value: "LMD Framework" },
    ],
    chapters: [
      {
        icon: GraduationCap,
        title: "Understanding the French Education System",
        desc: "France's higher education combines universities, Grandes Écoles, and specialised institutions.",
        points: [
          "Licence (Bachelor's): 3-year undergraduate programs (180 ECTS credits) covering foundational knowledge in chosen fields.",
          "Master's: 2-year postgraduate programs (120 ECTS credits) offering specialisation and advanced study.",
          "Doctorat (PhD): Research-focused doctoral programs typically lasting 3 years, requiring original research contribution.",
          "Grandes Écoles: Selective institutions offering specialised education in engineering, business, and public administration.",
        ],
      },
      {
        icon: Calendar,
        title: "Academic Intakes in France",
        desc: "French universities typically follow September and January intakes.",
        points: [
          "September/October: Main intake with widest program availability across universities.",
          "January/February: Limited availability for selected programs, particularly in business schools.",
          "Application deadlines vary by institution and program type.",
        ],
      },
    ],
    faqs: [],
  },

  "cost-of-studying": {
    id: "02",
    // vol: "VOL. II",
    title: "Cost of Studying in France",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Public University Fees, Living Costs & Financial Planning",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#4A101D",
    pillColors: [
      { label: "BACHELOR'S €2,902", bg: "#D7F77D", text: "#063B72" },
      { label: "MASTER'S €3,950", bg: "#B5E9F2", text: "#063B72" },
      { label: "PUBLIC UNIVERSITIES", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "France offers relatively affordable public university education. For 2026–27, public universities charge €2,902 yearly for Bachelor's and €3,950 for Master's programs for international students.",
    metrics: [
      { label: "Bachelor's (Licence)", value: "€2,902 / year" },
      { label: "Master's", value: "€3,950 / year" },
      { label: "Doctorate (PhD)", value: "€398 / year" },
      { label: "Living Costs", value: "€750–€1,600 / month" },
    ],
    chapters: [
      {
        icon: DollarSign,
        title: "Tuition Fees in France",
        points: [
          "Public Universities: €2,902/year for Bachelor's, €3,950/year for Master's, €398/year for PhD programs.",
          "Private Institutions: Fees vary significantly, ranging from €5,000 to €30,000+ annually depending on institution and program.",
          "Business Schools: MBA and specialized programs can cost €20,000 to €100,000+ for complete programs.",
          "Engineering Schools: Grandes Écoles may charge different fee structures based on institution type.",
        ],
      },
      {
        icon: FileText,
        title: "Additional Academic Expenses",
        points: [
          "CVEC: €105 annual Student and Campus Life Contribution for 2026–27.",
          "Campus France Fee: ₹20,000 processing fee from August 2026.",
          "Student Visa: €50 for Études en France applicants, €99 standard fee.",
          "Health Insurance: Required for international students in France.",
        ],
      },
    ],
    faqs: [],
  },

  "living-and-culture": {
    id: "03",
    // vol: "VOL. III",
    title: "Cost of Living in France & Culture",
    shortTitle: "Living & Culture",
    badge: "Student Life & Monthly Expenses",
    tagline: "Accommodation, Food, Transport & French Student Culture",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#165548",
    pillColors: [
      { label: "PARIS €1,100–€2,000", bg: "#D7F77D", text: "#063B72" },
      { label: "OTHER CITIES €700–€1,500", bg: "#B5E9F2", text: "#063B72" },
      { label: "CAF HOUSING AID", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "Living costs in France vary significantly by city. Paris requires higher budgets (€1,100–€2,000/month), while other cities like Lyon, Toulouse, and Lille offer more affordable options (€700–€1,500/month).",
    metrics: [
      { label: "Paris Monthly Cost", value: "€1,100–€2,000" },
      { label: "Other Cities", value: "€700–€1,500" },
      { label: "Biggest Expense", value: "Accommodation" },
      { label: "Student Meals", value: "€1 at CROUS canteens" },
    ],
    chapters: [
      {
        icon: Globe2,
        title: "Monthly Living Expenses",
        points: [
          "Accommodation: €300–€750 outside Paris, €600–€1,100 in Paris (CROUS residences more affordable).",
          "Food: €200–€350/month. CROUS restaurants offer €1 meals for eligible students.",
          "Transport: €10–€90/month depending on city. Student transport passes available.",
          "Utilities: €60–€140/month for electricity, water, heating, and internet.",
        ],
      },
      {
        icon: Compass,
        title: "French Student Culture",
        points: [
          "Art & Culture: France offers rich cultural heritage with museums, galleries, and historical sites. Many offer student discounts.",
          "Food Culture: French cuisine is central to daily life. Bakeries, markets, and restaurants are part of the cultural experience.",
          "Campus Life: Student associations (BDE), clubs, sports activities, and cultural events create vibrant campus communities.",
          "Regional Diversity: Each French region offers distinct culture, cuisine, and lifestyle experiences.",
        ],
      },
    ],
    faqs: [],
  },

  "scholarships": {
    id: "04",
    // vol: "VOL. IV",
    title: "Scholarships in France for Indian Students",
    shortTitle: "Scholarships & Aid",
    badge: "Funding, Grants & Financial Aid",
    tagline: "Eiffel Excellence, Charpak, Erasmus+ & University Scholarships",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#1A2645",
    pillColors: [
      { label: "EIFFEL SCHOLARSHIP", bg: "#D7F77D", text: "#063B72" },
      { label: "CHARPAK PROGRAM", bg: "#B5E9F2", text: "#063B72" },
      { label: "ERASMUS+ FUNDING", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "France offers various scholarships for international students through government programs, university funding, and European initiatives. Major opportunities include Eiffel Excellence, Charpak scholarships, and Erasmus+ programs.",
    metrics: [
      { label: "Eiffel Master's", value: "€1,200 / month" },
      { label: "Charpak Master's", value: "€860 / month" },
      { label: "Eiffel PhD", value: "€2,000 / month" },
      { label: "University Funding", value: "Varies by Institution" },
    ],
    chapters: [
      {
        icon: Award,
        title: "Major Scholarship Programs",
        points: [
          "Eiffel Excellence Scholarship: €1,200/month for Master's, €2,000/month for PhD. Includes travel, insurance, and cultural activities.",
          "Charpak Master's Scholarship: €860/month for Indian students, plus visa fee exemption, social security, and accommodation assistance.",
          "Erasmus Mundus: European Union funding for joint master's programs involving French universities.",
          "University Scholarships: Émile Boutmy (Sciences Po), HEC Foundation, Paris-Saclay International scholarships available.",
        ],
      },
      {
        icon: CheckCircle2,
        title: "How to Apply for Scholarships",
        points: [
          "Research eligibility requirements for each scholarship program early.",
          "Eiffel applications submitted by French institutions on behalf of candidates.",
          "Charpak applications through Campus France India with specific deadlines.",
          "University scholarships may require separate applications or automatic consideration during admission.",
          "Prepare strong academic transcripts, motivation letters, and recommendation letters.",
        ],
      },
    ],
    faqs: [],
  },

  "post-study-work-visa": {
    id: "05",
    // vol: "VOL. V",
    title: "Post-Study Work Visa in France",
    shortTitle: "Post-Study Visa",
    badge: "APS Permit & Work Opportunities",
    tagline: "12-Month APS Permit, Work Rights & Career Pathways",
    heroImage: "/images/hero/study-in-france.webp",
    accentColor: "#1E2530",
    pillColors: [
      { label: "12-MONTH APS", bg: "#D7F77D", text: "#063B72" },
      { label: "MASTER'S GRADUATES", bg: "#B5E9F2", text: "#063B72" },
      { label: "964 HOURS/YEAR", bg: "#FFD4E6", text: "#063B72" },
    ],
    overview:
      "France offers post-study work opportunities through the APS (Autorisation Provisoire de Séjour) permit. Eligible Master's graduates can receive 12 months to search for employment or develop business projects related to their studies.",
    metrics: [
      { label: "APS Duration", value: "12 Months" },
      { label: "Student Work", value: "964 Hours / Year" },
      { label: "Salary Threshold", value: "€2,800.53 / month" },
      { label: "Extension Option", value: "Indian Graduates +12 Months" },
    ],
    chapters: [
      {
        icon: Briefcase,
        title: "Post-Study Work Options",
        points: [
          "APS Permit: 12-month residence permit for job search or business creation for Master's graduates.",
          "India-France Agreement: Qualifying Indian graduates may receive up to 24 months (12+12) under bilateral arrangement.",
          "Work Requirements: Employment must relate to academic training and meet €2,800.53 gross monthly salary threshold.",
          "Application: Apply before student permit expires; Indian graduates can also apply within 4 years of graduation.",
        ],
      },
      {
        icon: Clock,
        title: "Transition to Long-Term Work",
        points: [
          "Salarié Permit: Standard work permit for qualifying employment meeting salary and job requirements.",
          "Talent Passport: For highly qualified professionals with €39,582+ annual salary (2026 threshold).",
          "EU Blue Card: For highly skilled workers with €59,373+ annual salary and relevant qualifications.",
          "Business Creation: APS permits support preparation of business projects related to academic field.",
        ],
      },
    ],
    faqs: [],
  },
};
