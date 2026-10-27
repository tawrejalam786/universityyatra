import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

/* All five Germany guides with placeholder content */
const GERMANY_GUIDES = {
  "study-in-germany": {
    id: "01",
    vol: "VOL. I",
    slug: "study-in-germany",
    title: "Study in Germany",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Bachelor's, master's, PhD programs and German admission intakes",
    heroImage: "/images/universities/germany/tu-munich.webp",
    pillColors: [{"label": "BACHELOR'S","bg": "#D7F77D","text": "#0C337B"},{"label": "MASTER'S","bg": "#B5E9F2","text": "#0C337B"},{"label": "MAIN INTAKES","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Study in Germany

Germany offers world-class education with a strong focus on engineering, technology, and research. Whether you're planning a bachelor's degree after Class 12 or a master's degree after graduation, understanding how German education works can help you narrow down the right options.

## Why Study in Germany?

Germany is renowned for its engineering excellence, research opportunities, and tuition-free or low-cost public universities. The country combines academic rigor with practical industry connections, creating excellent opportunities for international students.

### Universities: Bachelor's, Master's and Doctoral Degrees

German universities offer undergraduate and postgraduate education, with many institutions specializing in technical and engineering fields.

- **Bachelor's Degrees**: Most programs take three years. Many programs are taught in German, though English-taught programs are increasingly available. Engineering, computer science, and business programs are particularly strong.
- **Master's Degrees**: These commonly take two years. Options range from a Master of Science (MSc) or Master of Engineering (MEng) to business, humanities, and other specialized fields.
- **Doctoral Degrees**: PhD programs focus on advanced research and usually take three to five years to complete. Germany invests heavily in research and development.

## Cost of Education

Most public universities charge no tuition fees or only semester contributions of EUR 300-500. Private universities may charge EUR 10,000-20,000 per year. Living expenses typically range from EUR 850-1,200 per month depending on the city.

## Main Intakes

German universities typically have two main admission periods:
- **Winter Semester (October)**: The main intake with the broadest selection of programs
- **Summer Semester (April)**: Available for selected programs and institutions

Application deadlines vary by university and program. Check specific program requirements well in advance.`,
  },
  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    slug: "cost-of-studying",
    title: "Cost of Studying in Germany",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Tuition, semester fees, living expenses and financial planning",
    heroImage: "/images/universities/germany/heidelberg-university.webp",
    pillColors: [{"label": "PUBLIC UNIVERSITIES","bg": "#D7F77D","text": "#0C337B"},{"label": "LIVING EXPENSES","bg": "#B5E9F2","text": "#0C337B"},{"label": "HEALTH INSURANCE","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Cost of Studying in Germany

Germany offers one of the most affordable education systems for international students, with most public universities charging no tuition fees. Your main expenses will be living costs, health insurance, and semester contributions.

## Tuition Fees

### Public Universities
Most public universities in Germany charge **no tuition fees** or only nominal semester contributions of **EUR 300-500 per semester** (approximately ₹25,000-42,000). This semester fee typically covers administrative costs and often includes a semester ticket for public transportation.

### Private Universities
Private universities charge tuition ranging from **EUR 10,000-20,000 per year** (approximately ₹8.5-17 lakh).

*INR conversions use an illustrative exchange rate of EUR 1 = ₹85. Your actual rupee cost will depend on the exchange rate when you transfer funds.*

## Living Expenses

Your monthly living costs typically range from **EUR 850-1,200** (approximately ₹72,000-1.02 lakh), depending on your city and lifestyle:

- **Accommodation**: EUR 250-600/month
  - Student dormitory: EUR 250-400/month
  - Shared apartment (WG): EUR 350-600/month
  - Private apartment: EUR 500-800/month

- **Food and Groceries**: EUR 200-300/month
- **Health Insurance**: EUR 110/month (mandatory)
- **Transportation**: EUR 30-100/month (often covered by semester ticket)
- **Books and Supplies**: EUR 20-50/month
- **Personal Expenses**: EUR 100-200/month

Cities like Munich, Frankfurt, and Hamburg are more expensive, while Leipzig, Dresden, and smaller university towns offer lower living costs.

## Mandatory Health Insurance

All students must have health insurance, costing approximately **EUR 110 per month** for students under 30 years old.

## Blocked Account Requirement

For student visa applications, you must show proof of funds through a blocked account ("Sperrkonto") with approximately **EUR 11,208 per year** (updated regularly). This money is then released monthly for your living expenses.`,
  },
  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    slug: "living-and-culture",
    title: "Cost of Living & Culture in Germany",
    shortTitle: "Living & Culture",
    badge: "Living Costs & Student Life",
    tagline: "Accommodation, transport, culture and life in Germany",
    heroImage: "/images/universities/germany/lmu-munich.webp",
    pillColors: [{"label": "CITY CHOICE","bg": "#D7F77D","text": "#0C337B"},{"label": "DAILY ESSENTIALS","bg": "#B5E9F2","text": "#0C337B"},{"label": "GERMAN CULTURE","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Cost of Living & Culture in Germany

Living in Germany combines efficient infrastructure, cultural diversity, and excellent quality of life. Your expenses and experience will vary significantly based on your city choice and lifestyle.

## Cost of Living by City

### Expensive Cities
Munich, Frankfurt, Stuttgart, and Hamburg have higher living costs, particularly for accommodation. Monthly expenses can range from EUR 1,000-1,400.

### Affordable Cities
Leipzig, Dresden, Jena, and smaller university towns offer lower costs, with monthly expenses around EUR 800-1,000.

## Accommodation Options

### Student Dormitories (Studentenwohnheim)
The most affordable option (EUR 250-400/month), but limited availability. Apply early through Studentenwerk.

### Shared Apartments (Wohngemeinschaft/WG)
Popular among students. You rent a private room and share kitchen and bathroom. Typically EUR 350-600/month.

### Private Apartments
More expensive (EUR 500-800/month) but offer complete independence.

## Transportation

Most universities include a semester ticket in their fees, providing free or heavily discounted public transport. Germany's public transportation is efficient, punctual, and extensive.

Many students also use bicycles as primary transport, especially in smaller cities.

## German Culture and Student Life

### Language
While many master's programs are taught in English, learning basic German significantly improves daily life and integration. German language courses are often available at universities.

### Punctuality
Germans value punctuality. Arriving on time for classes, meetings, and appointments is expected and appreciated.

### Student Life
Universities have various student organizations (Fachschaft), clubs, and international student groups. Germany offers rich cultural experiences, from museums and theaters to festivals and outdoor activities.

### Work-Life Balance
German culture emphasizes work-life balance. Students are encouraged to maintain healthy study schedules and enjoy recreational activities.

## Food and Dining

### Mensa (University Cafeteria)
Offers subsidized meals for students (EUR 2-5 per meal). A great way to save money on food.

### Groceries
Supermarkets like Aldi, Lidl, Rewe, and Edeka offer affordable groceries. Asian supermarkets are available in larger cities for international ingredients.

## Weather and Clothing

Winters can be cold with temperatures below freezing. Budget for warm clothing including a good winter coat, boots, and gloves. Summers are mild and pleasant.`,
  },
  "scholarships": {
    id: "04",
    vol: "VOL. IV",
    slug: "scholarships",
    title: "Scholarships in Germany for Indian Students",
    shortTitle: "Scholarships & Funding",
    badge: "DAAD & University Funding",
    tagline: "DAAD scholarships, university funding and financial support",
    heroImage: "/images/universities/germany/rwth-aachen.webp",
    pillColors: [{"label": "DAAD","bg": "#D7F77D","text": "#0C337B"},{"label": "UNIVERSITY FUNDING","bg": "#B5E9F2","text": "#0C337B"},{"label": "RESEARCH GRANTS","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Scholarships in Germany for Indian Students

Germany offers numerous scholarship opportunities for international students, primarily through DAAD (German Academic Exchange Service) and university-specific programs.

## DAAD Scholarships

The German Academic Exchange Service (DAAD) is the largest funding organization for international students in Germany.

### Master's Programs
- **EPOS (Development-Related Postgraduate Courses)**: For students from developing countries pursuing master's degrees in development-related fields
- **DAAD Helmut Schmidt Programme**: Public Policy and Good Governance master's programs
- **Funding**: Typically covers tuition (if applicable), monthly allowance (EUR 861-1,200), health insurance, and travel costs

### PhD Programs
- **Research Grants for Doctoral Candidates**: For PhD students with excellent academic records
- **Funding Duration**: Usually 1-3 years
- **Monthly Stipend**: Approximately EUR 1,200

### Application Requirements
- Excellent academic record
- Clear research proposal or study plan
- Language proficiency (German or English depending on program)
- Proof of admission or conditional offer from German university

## University-Specific Scholarships

Many German universities offer their own scholarships for international students:

### Examples:
- **TU Munich**: International students can apply for various merit-based scholarships
- **Heidelberg University**: Offers scholarships through various foundations
- **RWTH Aachen**: Provides funding for excellent international students

## Research Foundations

Several German foundations offer funding:
- **Heinrich Böll Foundation**: For students committed to ecology and sustainability
- **Konrad Adenauer Foundation**: For politically interested students
- **Friedrich Ebert Foundation**: Supports social democratic values

## Application Tips

1. **Start Early**: Many scholarship applications open 12-18 months before program start
2. **Strong Motivation Letter**: Clearly explain your goals, qualifications, and why you deserve funding
3. **Academic Excellence**: Most scholarships require strong academic records
4. **Research Proposal**: For PhD scholarships, a well-developed research proposal is crucial
5. **Language Skills**: Demonstrate proficiency in the language of instruction

## Resources

- **DAAD Portal**: daad.de/scholarships
- **My DAAD**: Account system for applications
- **Scholarship Database**: Searchable database of available funding opportunities`,
  },
  "post-study-work-visa": {
    id: "05",
    vol: "VOL. V",
    slug: "post-study-work-visa",
    title: "Post-Study Work Visa in Germany",
    shortTitle: "Work Permit & PR",
    badge: "Job Seeker Visa & PR Pathways",
    tagline: "18-month job seeker visa, EU Blue Card and permanent residence",
    heroImage: "/images/universities/germany/humboldt-berlin.webp",
    pillColors: [{"label": "JOB SEEKER VISA","bg": "#D7F77D","text": "#0C337B"},{"label": "EU BLUE CARD","bg": "#B5E9F2","text": "#0C337B"},{"label": "PR PATHWAY","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: `# Post-Study Work Visa in Germany

Germany offers attractive post-study work opportunities for international graduates, with clear pathways to permanent residence and EU-wide work authorization.

## 18-Month Job Seeker Visa

After completing your degree in Germany, you can apply for an **18-month job seeker visa** (Aufenthaltserlaubnis zur Arbeitsplatzsuche).

### Key Features:
- **Duration**: Up to 18 months
- **Purpose**: Find employment matching your qualifications
- **Work Allowed**: You can work part-time or take up internships while searching
- **Requirement**: Proof of sufficient funds to support yourself

### Application Process:
Apply at your local Ausländerbehörde (foreigners' office) before your student visa expires. You'll need:
- Valid passport
- Proof of completed degree
- Proof of health insurance
- Proof of financial means (approximately EUR 1,027/month)

## EU Blue Card

Once you secure a job matching your qualifications with a minimum salary threshold, you can apply for the **EU Blue Card**.

### Requirements:
- **Minimum Salary**: Approximately EUR 58,400 per year (2024, updated annually)
- **Lower Threshold**: EUR 45,552 for shortage occupations (IT, engineering, healthcare, etc.)
- **Qualification**: Recognized university degree

### Benefits:
- Work and reside in Germany
- After 33 months (or 21 months with German B1 language skills), eligible for permanent residence
- Family reunification rights
- Travel within EU

## Permanent Residence (Niederlassungserlaubnis)

You can apply for permanent residence after:
- **21 months** with EU Blue Card and German language skills (B1 level)
- **33 months** with EU Blue Card and basic German (A1 level)
- **4 years** of regular employment with sufficient German skills

### Requirements:
- Secure job or proof of financial stability
- Adequate German language skills (typically B1)
- Integration into German society
- Adequate living space
- Mandatory social security contributions

## Citizenship Pathway

After **6-8 years** of legal residence (can be reduced to 6 years with special integration achievements), you may apply for German citizenship.

Germany now allows dual citizenship, so you don't have to give up your Indian passport.

## Work During Studies

While studying, you can work:
- **120 full days** or **240 half days** per year
- Unlimited hours for student jobs at university
- This work experience can help you secure post-study employment

## Tips for Success

1. **Start Networking Early**: Build connections during your studies
2. **Learn German**: Even if your program is in English, German skills significantly improve job prospects
3. **Internships**: Complete internships during studies to gain local work experience
4. **Join Professional Networks**: LinkedIn, XING (German professional network)
5. **Career Services**: Use your university's career center for job search support

## Resources

- **Make it in Germany**: work-in-germany.de (official German government portal)
- **BAMF**: Federal Office for Migration and Refugees
- **Arbeitsagentur**: German Employment Agency`,
  },
};

// Generate static params for all guide routes
export function generateStaticParams() {
  return Object.keys(GERMANY_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

// Generate metadata for each guide
export function generateMetadata({ params }) {
  const guide = GERMANY_GUIDES[params.guide];

  if (!guide) {
    return {
      title: 'Guide Not Found',
    };
  }

  return {
    title: `${guide.title} - University Yatra`,
    description: guide.tagline,
    keywords: `${guide.title}, study in germany, ${params.guide}`,
  };
}

export default function GermanyGuidePage({ params }) {
  const guide = GERMANY_GUIDES[params.guide];

  if (!guide) {
    notFound();
  }

  return (
    <>
      <Navbar active="Destinations" />
      <main className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0C337B] via-[#1765F5] to-[#0C337B] py-16 sm:py-20">
          <div className="absolute inset-0 -z-10 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }} />
          
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                {guide.vol} · {guide.badge}
              </p>
              
              <h1 className="mt-4 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[52px]">
                {guide.title}
              </h1>
              
              <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-[1.7] text-white/90 sm:text-[16px]">
                {guide.tagline}
              </p>

              {guide.pillColors && (
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  {guide.pillColors.map((pill, index) => (
                    <span 
                      key={index}
                      className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em]"
                      style={{ backgroundColor: pill.bg, color: pill.text }}
                    >
                      {pill.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className="mx-auto max-w-[820px] px-4 py-12 sm:px-6 sm:py-16">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-[28px] prose-h2:text-[#0C337B] prose-h3:text-[22px] prose-h3:text-[#1765F5] prose-p:text-[15px] prose-p:leading-[1.75] prose-p:text-[#374151] prose-ul:text-[15px] prose-li:text-[#374151]"
            dangerouslySetInnerHTML={{ __html: guide.markdown.replace(/\n/g, '<br />').replace(/##/g, '<h2>').replace(/<br \/><h2>/g, '</p><h2>').replace(/(<h2>.*?<\/h2>)/g, '$1<p>') }}
          />
        </article>

      </main>
      <UniversityFooter />
    </>
  );
}
