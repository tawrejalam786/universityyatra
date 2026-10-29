import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, MessageCircle, BookOpen, Compass, GraduationCap, Calendar, Home, Wallet, Award, CheckCircle2, Clock, Globe2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

/*
  FILE LOCATION (IMPORTANT):
  app/study-in-ireland/[guide]/page.jsx

  Folder name MUST be [guide] because generateStaticParams returns { guide: slug }
  and the code reads params.guide.
*/

/* Unknown slugs -> 404 */
export const dynamicParams = false;

/* All five Ireland guides - article content taken from ireland.docx */
const IRELAND_GUIDES = {
  "study-in-ireland": {
    id: "01",
    vol: "VOL. I",
    slug: "study-in-ireland",
    title: "Study in Ireland",
    shortTitle: "Study in Ireland",
    badge: "Why Study in Ireland?",
    tagline: "Ireland offers Indian students a distinctive combination of English-medium higher education, membership of the European Union and connections to internationally established industries.",
    heroImage: "/images/universities/ireland/trinity-college-dublin.webp",
    pillColors: [
      { label: "ENGLISH-MEDIUM EDUCATION", bg: "#D7F77D", text: "#0C337B" },
      { label: "UNIVERSITIES", bg: "#B5E9F2", text: "#0C337B" },
      { label: "COURSES IN IRELAND", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Study in Ireland

Ireland offers Indian students a distinctive combination of English-medium higher education, membership of the European Union and connections to internationally established industries. From technology and financial services in Dublin to pharmaceutical and medical-technology activity in Cork and Galway, the country offers academic pathways linked to several global sectors.

But deciding to study in Ireland for Indian students involves more than choosing a university or a popular course. Your qualification, the institution you attend, the city you live in and your intended career can all influence the value of your experience.

Understanding these factors before applying can help you compare Irish universities for international students with a clearer view of both the opportunities and the practical challenges.

## Why Study in Ireland?

### 1. English-Medium Education Within the European Union

Ireland is an English-speaking EU member state, making it an option for students who want to pursue international education without learning another language simply to access the local academic and professional environment.

English-medium education can make classroom participation, everyday communication and the transition into professional life more straightforward. Ireland's position within the EU also connects its academic and business environment to wider European networks.

However, an Irish student permission does not automatically provide the right to work or settle in other EU countries. Each country has its own immigration requirements.

### 2. Universities Connected to International Industries

Ireland's employment market has notable strengths in specific sectors, particularly information and communication technology, pharmaceuticals, medical technology and financial services.

Dublin is a major centre for technology companies and international financial services. Cork and Galway have established pharmaceutical, life-sciences and medical-technology activity.

For students exploring courses in Ireland, these regional clusters can help inform university selection. Someone interested in software development may investigate relevant programmes and employers around technology centres, while a student pursuing biotechnology or pharmaceutical sciences may prioritise institutions with suitable laboratories, research opportunities and industry connections.

The important consideration is alignment: choose a programme that develops relevant skills rather than assuming that studying in a particular city guarantees employment.

### 3. Different Types of Higher Education Institutions

The Irish higher education system includes universities, technological universities, specialist institutions and private or independent providers.

Universities offer a broad range of academic disciplines, postgraduate programmes and research opportunities. Technological universities often combine academic study with applied learning, professional development and practical projects. Specialist institutions may focus on particular disciplines or professional areas.

When comparing universities in Ireland, consider the qualification awarded, course structure, academic facilities, practical learning opportunities and entry requirements. The institution's name alone is not enough to determine whether a programme fits your goals.

### 4. Qualifications That Support Different Academic Goals

Ireland offers undergraduate, taught postgraduate and research-based pathways.

**Bachelor's degrees:** These provide foundational knowledge and subject-specific skills. Indian applicants should verify whether their Class 12 qualifications meet the entry requirements of their chosen programme.

**Master's degrees:** Taught master's programmes allow students to specialise after their bachelor's degree. Academic prerequisites, previous subject knowledge and grades can influence admission.

**Research degrees:** Research master's and doctoral programmes focus on specialised investigation. Depending on the institution and subject, applicants may need a research proposal, relevant experience or an appropriate supervisor.

The qualification level also matters for post-study immigration options. Before applying, verify the award and its level under Ireland's National Framework of Qualifications (NFQ).

## Courses in Ireland: Choose with Your Career in Mind

Ireland offers programmes across business, computing, engineering, life sciences, finance and other academic fields. The best course depends on your existing qualifications, interests and intended career.

Rather than choosing solely by subject popularity, compare the modules taught, practical components, assessment methods and skills developed during the programme. Check whether the course includes a dissertation, laboratory work, projects or placement opportunities instead of assuming these features are available in every degree.

Your chosen field should also inform your location and university shortlist. Ireland's job market is relatively concentrated by sector and geography, making the connection between your programme and the relevant industry particularly important.

## Ireland University Admission Requirements

Admission requirements vary by university, qualification level and subject. Indian students may need to provide academic transcripts, proof of English-language proficiency and other documents specified by the institution.

For postgraduate applications, the relevance of your bachelor's degree can be particularly important. Some courses require specific undergraduate subjects, quantitative preparation, a portfolio, professional experience or other evidence of academic readiness.

Before submitting an application, confirm:

- Whether your existing qualification meets the entry requirements.
- The minimum academic grades and subject prerequisites.
- Which English-language tests and scores are accepted.
- The documents and deadlines applicable to your course.
- Whether the programme meets the relevant student immigration eligibility requirements.

Checking these requirements early helps you avoid unsuitable applications and unexpected delays.

## Ireland Student Visa Requirements and Course Eligibility

For students planning to study in Ireland for more than 90 days, checking immigration eligibility is a necessary part of choosing a course.

Ireland has been transitioning from the Interim List of Eligible Programmes (ILEP) towards the TrustEd Ireland framework. The applicable eligibility route depends on the provider and programme, so students should consult the current official information and check the relevant eligible-programme lists before committing to a course.

Do not assume that a programme qualifies for student immigration simply because it appears on a university or college website. Verify the provider, the specific programme and the applicable requirements before paying a deposit or making travel arrangements.

Students must also meet the relevant visa or immigration conditions, including financial and documentation requirements where applicable.

## Cost of Studying in Ireland

The cost of studying in Ireland depends on your university, programme, accommodation and lifestyle. Your financial plan should include more than tuition fees.

Consider the following expenses when estimating your total budget:

- Tuition fees and any required institutional charges.
- Accommodation, including deposits and initial housing costs.
- Food, local transport and everyday living expenses.
- Health insurance and other required arrangements.
- Application, visa, travel and document-related expenses.
- Books, study materials and personal costs.

Accommodation deserves particular attention. Housing can be expensive and difficult to secure, especially in Dublin. Research student residences and private rentals early, check the terms carefully and allow for the possibility of temporary accommodation while settling in.

Do not rely on part-time employment to fund your entire education. Work permissions have conditions, and finding a suitable job is not guaranteed.

## Career Opportunities in Ireland for International Graduates

Ireland's international business connections create potential opportunities across technology, financial services, pharmaceuticals, medical technology and other specialised sectors. However, opportunities differ by industry, location and the skills employers seek.

The Higher Education Authority's Graduate Outcomes Survey for the Class of 2024 reported that 86.6% of postgraduate taught graduates were employed nine months after graduation. Among internationally domiciled graduates across qualification types, 76.6% were employed at the same point.

These figures provide context for understanding graduate outcomes, not a guarantee of individual employment. The groups measured are different, and results vary by subject, experience and circumstances.

When evaluating career opportunities in Ireland, investigate the roles associated with your degree, the practical skills you will develop, relevant employer locations and the experience you can gain during your studies.

## Post-Study Work Visa Ireland: Understanding Stamp 1G

Eligible international graduates may be able to remain in Ireland under the Third Level Graduate Programme, commonly associated with Stamp 1G.

In general, eligible graduates with an NFQ Level 8 award may qualify for up to 12 months, while eligible graduates with an NFQ Level 9 or higher award may qualify for up to 24 months, subject to the programme's rules and individual eligibility.

Stamp 1G provides an opportunity to seek employment and pursue an appropriate employment-permit route. It does not guarantee a job, permanent residence or citizenship.

Students who intend to remain in Ireland after graduation should understand the relevant employment-permit pathways before choosing their course. Qualification level, employment eligibility and the conditions of the next immigration permission can all affect their longer-term plans.

## Is Ireland the Right Choice for You?

Ireland may suit students seeking English-medium higher education, internationally connected industries and the opportunity to build professional experience after graduation.

It requires careful planning if your chosen field has a limited local job market, your finances leave little room for accommodation costs or your plans depend on securing employment immediately after completing your degree.

Before making a decision, assess your academic eligibility, compare the full cost of studying and living, research the industries connected to your chosen field and verify the immigration conditions attached to your programme.

University Yatra can help you evaluate suitable courses and institutions, understand admission requirements and organise your application around your academic goals, budget and long-term plans.`,
  },

  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    slug: "cost-of-studying",
    title: "Cost of Studying in Ireland",
    shortTitle: "Cost of Studying",
    badge: "Tuition Fees in Ireland",
    tagline: "Planning the cost of studying in Ireland means looking beyond tuition fees.",
    heroImage: "/images/universities/ireland/university-college-dublin.webp",
    pillColors: [
      { label: "TUITION FEES", bg: "#D7F77D", text: "#0C337B" },
      { label: "FINANCIAL PROOF", bg: "#B5E9F2", text: "#0C337B" },
      { label: "COST OF LIVING", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Cost of Studying in Ireland

Planning the cost of studying in Ireland means looking beyond tuition fees. Your total budget includes accommodation, daily expenses, immigration charges, health insurance and the money you may need after graduation while searching for employment.

For Indian students, it is important to separate three figures: the amount your university charges, the funds Irish immigration authorities require you to demonstrate, and the amount you should realistically plan to spend. These figures serve different purposes and should not be treated as interchangeable.

## 1. Tuition Fees in Ireland

Tuition fees in Ireland vary by university, programme, qualification level and student fee status. There is no single national fee that accurately represents the cost of every bachelor's or master's degree.

For international applicants, the most reliable starting point is the university's official fee schedule for your intended intake. Confirm the exact programme title, course code, duration and non-EU fee before calculating your budget.

### Example: Trinity College Dublin, 2026/27

The following examples illustrate how tuition can differ within one institution.

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Programme</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Non-EU fee for the listed year</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Master in Education, full-time</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€14,210</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Research MSc in Computer Science</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€16,960</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Professional Master&#x27;s in Physiotherapy</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€27,000</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Integrated Master&#x27;s in Environmental Science and Engineering, Year 5</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€28,908</td></tr></tbody></table></div>

These are examples from Trinity College Dublin's published fee information, not national averages. The applicable fee and duration depend on the exact programme.

### Why the Course Code Matters

Two programmes with similar names can have substantially different fees. A research master's may have a different duration and fee from a taught master's in the same subject. Conversion courses designed for applicants from another academic background may also cost more than standard-entry programmes.

Before accepting an offer, verify:

- The exact programme and course code.
- The non-EU fee for your intended intake.
- Whether the quoted amount covers one year or the full programme.
- Whether annual fee increases may apply.
- The deposit and payment deadlines.

Do not calculate your entire degree cost using a first-year fee unless the institution confirms that the amount covers the complete programme.

## 2. Financial Proof Required for an Ireland Student Visa

Irish immigration authorities require international students to demonstrate that they can support themselves without relying on public funds or casual employment.

For courses lasting more than eight months, the standard financial-proof requirement is **€10,000 for one academic year**, alongside the applicable tuition-fee requirements. Students must also demonstrate access to the required living funds for subsequent years of a multi-year course.

For courses lasting eight months or less, the published requirement is €833 per month, up to €6,665.

These figures are financial requirements, not a guarantee that the same amount will cover every student's actual living expenses.

### Tuition Payment Before Applying

The amount you need to pay before applying for a visa depends on the course fee and the applicable immigration rules.

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Course fee</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">General pre-visa payment requirement</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Below €6,000</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">The full course fee must generally be paid in advance</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Above €6,000</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">At least €6,000 must generally be paid in advance</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Any fee level</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">The institution may require a larger deposit or full payment under its own terms</td></tr></tbody></table></div>

Confirm the applicable requirements against current official guidance and your university's offer letter before transferring money.

### How You Demonstrate Your Funds

Applicants may need bank statements covering the period specified by immigration authorities, along with evidence explaining the source of funds. If a sponsor is supporting you, their financial documents and relationship to you may also need to be documented.

A large deposit into an account should be explainable. Funds held in a deposit account may require a bank letter confirming that the money can be accessed.

Ireland also operates an education-bond option for eligible degree-programme students, with a minimum value of €10,000 under the applicable pilot arrangement. Check the current conditions, approved payment service and eligibility rules before choosing this alternative.

**Remember:** financial proof demonstrates your ability to support yourself. It is not an additional tuition fee, but the funds must be available in the manner required by immigration authorities.

## 3. Cost of Living in Ireland

Your monthly expenses will depend heavily on accommodation, city, transport requirements and personal spending habits. Dublin deserves particular attention because accommodation can be expensive and difficult to secure.

The government's €10,000 annual financial benchmark is a starting point for immigration purposes, not a guarantee that it will cover your actual expenses.

Build your personal budget around the following categories.

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Expense category</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">What to include</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Accommodation</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Student residence, shared accommodation or private rental</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Food and groceries</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Groceries, meals and occasional eating out</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Transport</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Public transport, commuting and local travel</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Utilities and connectivity</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Electricity, heating where applicable, internet and mobile service</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Personal expenses</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Clothing, household essentials, leisure and other daily needs</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Study expenses</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Books, materials, equipment and course-related costs</td></tr></tbody></table></div>

### Accommodation: Plan Before You Arrive

Housing should be one of the first items you investigate, not something left until your visa is approved. University residences may have limited availability, while private accommodation can require deposits and advance rent.

Research the following before committing to a university:

- Whether student accommodation is available and what it costs.
- The distance between likely housing options and campus.
- Whether utilities are included in the advertised rent.
- The deposit, payment schedule and cancellation terms.
- The availability of temporary accommodation if your permanent housing is not ready.

If you are considering Dublin, allow additional flexibility in your budget. Do not assume that the national financial-proof benchmark is enough to cover rent and every other expense in a high-cost location.

## 4. Additional Costs Before and During Your Studies

Tuition and living expenses are only part of the total cost of studying in Ireland. You should also account for the charges associated with travel, immigration and settling into the country.

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Cost</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Published amount or budgeting approach</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Long-stay study visa</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€60 for single entry or €100 for multiple entry, where applicable</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Irish Residence Permit registration</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€300 registration fee, subject to applicable rules and exemptions</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Private medical insurance</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Obtain a quote from an eligible provider or your university&#x27;s group scheme</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">English-language test</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Depends on the test and provider</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Document preparation</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Varies according to documents and services required</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Flights</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Depends on travel dates, route and baggage</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Accommodation deposit</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Depends on the property and rental terms</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Initial settling-in expenses</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Budget for essentials before your routine is established</td></tr></tbody></table></div>

Visa fees are generally non-refundable if an application is refused or withdrawn. Additional application or consular charges may apply.

### Private Medical Insurance

Non-EEA students studying in Ireland are generally required to hold private medical insurance that meets the applicable immigration conditions.

The cost depends on the provider, policy and coverage. Check whether your university offers a group scheme and whether the policy meets the requirements for registration and subsequent renewals.

Do not assume that every travel-insurance policy is sufficient for the duration of your studies. Confirm the accepted coverage and documentation before purchasing insurance.

## 5. Calculate the Total Cost, Not Just Tuition

A useful study budget combines four components:

1. **Tuition:** The published fee for your exact course and intake.
1. **Living expenses:** Accommodation and everyday costs based on your intended city.
1. **Additional charges:** Visa, registration, insurance, travel and initial setup.
1. **Post-graduation reserve:** Money available while you seek suitable employment after completing your degree.

The fourth component is often overlooked. Eligible master's graduates may qualify for up to 24 months under Stamp 1G, depending on their qualification and applicable conditions. This period does not guarantee employment or income, so you should consider how you would support yourself if the job search takes longer than expected.

### Worked Budget Example: One-Year Master's in Dublin

Consider a student entering a one-year full-time Master in Education at Trinity College Dublin in 2026/27. The published non-EU tuition fee is €14,210.

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Budget item</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Amount</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">First-year tuition</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€14,210</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Annual living-cost benchmark</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€10,000</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Multiple-entry study visa</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€100</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Residence permit registration</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€300</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Study-year subtotal</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€24,610</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Six-month post-graduation reserve, including €5,000 living expenses and €300 registration</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€5,300</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Illustrative total</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€29,910</td></tr></tbody></table></div>

The total excludes private medical insurance, flights, accommodation deposits, initial setup expenses and any additional costs. It is an illustrative calculation, not a typical or guaranteed budget for every Irish student.

It also uses the national living-cost benchmark, which may be insufficient for a student's actual expenses in Dublin. Your own budget should use realistic accommodation and spending estimates.

## 6. Plan for the Period After Graduation

Graduation does not necessarily mean your expenses stop. If you intend to seek employment in Ireland, you may need to cover rent, food, insurance and other costs while applying for jobs.

Before accepting an education loan, review its repayment schedule and moratorium period. Check whether repayments could begin while you are still searching for work and whether you would have enough savings to manage that period.

Do not assume you will find a qualifying job immediately after graduation. A post-study permission provides an opportunity to seek employment; it does not guarantee a job or a particular immigration outcome.

A realistic budget should therefore cover the study period and leave room for a reasonable transition into employment.

## 7. How to Build Your Personal Study Budget

Before finalising your plans, work through this checklist:

- Confirm the exact non-EU tuition fee for your course and intake.
- Check the amount your institution requires before enrolment.
- Calculate the financial proof required for your visa or registration.
- Estimate rent and daily expenses for your intended city.
- Add insurance, visa, registration, travel and setup costs.
- Keep a separate reserve for unexpected expenses and the post-graduation period.
- Recheck all fees and financial requirements against current official information before paying.

The best budget is not simply the lowest figure you can find. It is a realistic estimate of what your education will cost, what you must demonstrate before travelling, and how you will support yourself throughout the journey.

University Yatra can help you compare suitable universities, understand their fee structures and organise the financial considerations involved in planning your education in Ireland.`,
  },

  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    slug: "living-and-culture",
    title: "Cost of Living and Culture in Ireland",
    shortTitle: "Living and Culture",
    badge: "Cost of Living in Ireland",
    tagline: "Living in Ireland means planning for more than university fees.",
    heroImage: "/images/universities/ireland/university-college-cork.webp",
    pillColors: [
      { label: "ACCOMMODATION", bg: "#D7F77D", text: "#0C337B" },
      { label: "PART-TIME WORK", bg: "#B5E9F2", text: "#0C337B" },
      { label: "IRISH CULTURE", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Cost of Living and Culture in Ireland

Living in Ireland means planning for more than university fees. Accommodation, groceries, transport, healthcare, weather, social life and everyday routines all shape the student experience. Your actual expenses will depend on where you study, the type of accommodation you secure, and how you manage your monthly budget.

For Indian students, the biggest financial consideration is often housing. Dublin offers access to a large concentration of universities and employers, but accommodation can be expensive and difficult to secure. Cities such as Cork, Galway and Limerick may offer alternatives, although regional cities are not automatically inexpensive.

Understanding the cost of living in Ireland before accepting an offer can help you compare destinations realistically and prepare for life beyond the classroom.

## 1. What Does It Cost to Live in Ireland as a Student?

Irish immigration uses **€10,000 as the standard estimated living-cost amount for one academic year** for relevant student applications. This is a financial-evidence benchmark, not a promise that every student's expenses will fit within that amount.

Your actual cost of living in Ireland will depend heavily on rent. A student sharing a house, living in university accommodation or renting a private studio may have very different monthly expenses, even in the same city.

### Main student living expenses

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Expense</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">What to plan for</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Accommodation</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Rent is usually one of the largest and least predictable expenses.</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Groceries</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Costs depend on where you shop, your diet and how often you cook at home.</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Utilities</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Electricity, heating, internet and other household bills may be included in rent or charged separately.</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Transport</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Budget according to the distance between your accommodation, campus, workplace and city centre.</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Phone and internet</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Compare student-friendly mobile plans and check whether home internet is included in your accommodation.</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Healthcare</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Non-EEA students generally need appropriate private medical insurance. Check the cover required for your permission and course.</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Study materials</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Allow for books, software, printing, equipment and course-specific expenses.</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Personal and social expenses</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Include clothing, leisure, eating out, subscriptions and occasional travel.</td></tr></tbody></table></div>

Do not build your budget around the lowest possible estimate. Leave room for unexpected expenses, rent increases where applicable, travel home and periods when you may not have paid work.

## 2. Accommodation in Ireland: The Biggest Budget Decision

Finding suitable accommodation is one of the most important steps in preparing to study in Ireland. Availability can be limited, particularly in Dublin, and waiting until you arrive may leave you paying for temporary accommodation while you search.

### Your main accommodation options

**University-managed accommodation**

University residences can be convenient for first-year students because they may offer proximity to campus and opportunities to meet other students. However, places are limited and should not be assumed to be available to every international applicant. Check application dates, contract length, deposits and what the quoted price includes.

**Purpose-built student accommodation**

These privately operated residences are designed for students and may include furnished rooms, shared facilities and selected utilities or amenities. Compare the total price rather than the advertised weekly rate, and check the contract duration, cancellation rules and additional charges.

**Private shared accommodation**

Sharing a house or apartment can help students divide rent and household bills. It may offer more flexibility, but finding a suitable room from overseas can be challenging. Confirm the address, tenancy terms, bills, deposit arrangements and identity of the person offering the room before transferring money.

**A room in an owner-occupied home**

A room in a family home may provide a more personal living arrangement. However, the legal protections and dispute-resolution arrangements can differ from those applying to a standard private tenancy. Understand the arrangement in writing before committing.

### What the rental figures tell you

The Residential Tenancies Board (RTB) and Economic and Social Research Institute (ESRI) publish rental data based on registered tenancies. Their figures are useful for understanding the wider market, but they measure whole rental properties, not the price of a room in shared housing or a student-residence bed.

The Q1 2026 RTB/ESRI Rent Index reported standardised average monthly rent of **€1,839 for new tenancies nationally**, compared with €1,513 for existing tenancies. City figures from earlier quarters also show why location matters: Dublin City recorded €2,237 for new tenancies in Q3 2025, while Cork City recorded €1,753 and Galway City €1,888 in the same quarter.

These figures are market context, not student-room price quotes. The periods are not all the same, and the latest available release should be checked before making a financial decision.

### How to avoid accommodation problems

- Start searching as soon as your university's accommodation process allows.
- Ask whether utilities, internet and other charges are included in the advertised rent.
- Confirm the deposit, payment schedule, contract length and notice terms in writing.
- Be cautious if a property cannot be viewed, the offer seems unusually cheap or the person demands an immediate transfer.
- Never send money solely on the basis of photographs or an unverified online listing.
- Check the relevant tenancy rules and the role of the RTB before signing.

If you have not secured a long-term place before travelling, budget separately for temporary accommodation. Do not assume you will find a permanent room within your first few days.

## 3. Does Your Choice of Irish City Affect Your Budget?

Yes. Your city influences rent, transport, access to part-time work, social activities and proximity to your university.

**Dublin:** The capital has a large concentration of universities, international employers, cultural venues and transport connections. However, accommodation can be particularly costly and competitive. A course in Dublin should be evaluated alongside a realistic housing plan.

**Cork:** Cork offers a university environment and links to sectors including pharmaceuticals, technology and life sciences. It may be worth comparing with Dublin, but rental pressure means you should not assume every accommodation option will be affordable.

**Galway:** Galway has a strong student identity and connections to areas such as medical technology and life sciences. The city's appeal should be weighed against housing availability and the location of your campus.

**Limerick:** Limerick can be an alternative for students considering universities and programmes outside the capital. Compare current room listings, transport and the location of relevant employers before treating it as a lower-cost choice.

**Other towns and university locations:** Smaller locations may offer a different pace of life, but the availability of accommodation, public transport and jobs can vary. A lower rent is less useful if you need expensive transport or cannot easily reach your campus or placement.

The best city is not necessarily the cheapest one. Compare the total cost of living with your course, campus location, placement opportunities and career plans.

## 4. Can Part-Time Work Cover Your Living Costs?

Part-time work can provide extra income and help you gain experience, but it should not be the foundation of your study-abroad budget.

Eligible international students holding **Stamp 2 permission** can generally work up to **20 hours per week during term time** and up to **40 hours per week during specified holiday periods**. The permitted holiday periods include June to September and 15 December to 15 January. Conditions differ by immigration permission, so check the rules that apply to your status.

Your ability to work the permitted hours does not guarantee that you will find a job quickly or receive enough shifts to cover your expenses. The job search may take time, and earnings will depend on your role, age where minimum-wage rules vary, hours available and deductions.

Before travelling, make sure you can demonstrate the required funds without relying on future casual employment. Treat any earnings from a part-time job as supplementary income for everyday expenses, savings or personal costs.

Students on Stamp 2 must also follow the conditions of their permission. In particular, they cannot use that permission to become self-employed or operate a business.

## 5. Everyday Life in Ireland: What Should You Expect?

Moving to Ireland involves adjusting to new routines as well as managing your finances. Understanding the practical details in advance can make the transition smoother.

**Weather and clothing**

Ireland has a temperate maritime climate, with changeable weather, frequent rain and relatively mild temperatures compared with many parts of India. Bring a waterproof outer layer, comfortable shoes and clothes that can be worn in layers. Winter daylight is shorter, so allow yourself time to adjust to the change in weather and routine.

**Food and groceries**

Students can find supermarkets, cafés, restaurants and international food shops, particularly in larger cities. Cooking at home and planning meals can help control expenses. Indian ingredients and familiar foods are available in many urban areas, although selection and prices vary by location.

**Getting around**

Your commute will depend on where you live. Some students walk or cycle, while others rely on buses, trains or other public transport. Check the actual route and journey time before renting a room; a cheaper property far from campus may increase your transport costs and daily travel time.

**Healthcare and insurance**

International students should understand their healthcare arrangements before arrival. Non-EEA students generally need private medical insurance that meets immigration requirements. Confirm what your university package includes, what is excluded and how to access medical care if you need it.

**Managing daily tasks**

You may need to arrange a local phone number, bank account, proof of address, immigration registration where applicable and a Personal Public Service Number (PPS Number) if required for work or public services. The order and requirements can vary, so use official guidance and your university's international-student support service.

## 6. Understanding Irish Culture as an International Student

Ireland combines a strong sense of local identity with an increasingly international student population. Your experience will depend on your university, city, social circles and personal interests, but a few cultural differences are useful to understand before arrival.

### Communication is often friendly and conversational

Everyday conversations can feel informal, including interactions with lecturers, classmates and colleagues. Humour and light conversation often help people connect. This does not mean every situation is casual: academic submissions, workplace responsibilities and official appointments still require professionalism.

### Punctuality and reliability matter

Arriving on time for classes, interviews, group meetings and appointments is a practical way to show respect. If you are running late or cannot attend, communicate as early as possible. In group assignments, contributing consistently and meeting agreed deadlines can matter as much as the final presentation.

### Independence is part of student life

Students are generally expected to manage their own schedules, keep track of deadlines, ask questions when they need help and take responsibility for their learning. Lecturers and student-support teams can provide guidance, but you may need to approach them proactively rather than wait for someone to check in.

### Social connections often grow through shared activities

University societies, sports clubs, volunteering, student events and course groups can help you meet people beyond your immediate class. You do not need to be highly outgoing to make connections. Attending regularly, showing interest and following up with people can help friendships develop naturally.

### Respect for personal space and different backgrounds

People vary in how quickly they become comfortable with new friends. Be considerate of personal boundaries, different beliefs and communication styles. Ireland's universities include students from many countries, but individual experiences differ, and it is reasonable to seek support if you encounter discrimination or feel excluded.

### Food, celebrations and cultural identity

Irish food traditions, music, sport and local festivals are part of everyday cultural life. At the same time, students can find international communities, Indian societies and opportunities to celebrate familiar festivals. You do not have to give up your own traditions to take part in Irish student life; both can become part of your experience.

## 7. Building a Social Life Without Overspending

A meaningful student experience does not have to depend on frequent restaurant visits or expensive outings. University clubs, student societies, public parks, cultural events, volunteering and shared meals can help you meet people while keeping costs manageable.

Consider setting a monthly allowance for social activities rather than deciding separately each time you go out. Look for student discounts where available, and check whether your university includes activities or facilities in its student services.

It can also help to connect with Indian and other international student groups before arriving. These communities may offer practical advice about settling in, but verify important immigration, employment and tenancy information through official sources rather than relying only on group chats.

## 8. Settling In: A Practical First-Month Checklist

Before travelling, arrange or plan for:

- Confirmed accommodation or a realistic temporary-stay budget.
- A clear understanding of your rent, deposit, contract and utility costs.
- Required private medical insurance.
- Your university enrolment and student-status documents.
- Immigration registration, if applicable, and the relevant appointment process.
- A local bank account and PPS Number, if eligible and needed.
- A route between your accommodation and campus.
- A monthly budget that does not depend on finding work immediately.
- Contact details for your university's international office and student support services.

Keep digital and physical copies of important documents, and use official Irish government guidance when checking immigration, employment or tenancy rules.

## Is Ireland the Right Fit for You?

Ireland can be a strong option if you want an English-speaking study environment, access to international academic and professional communities, and an opportunity to experience a different culture. But the right choice depends on more than a university's reputation or a course title.

Compare accommodation availability, the realistic cost of living, the location of your programme, transport, placement opportunities and your financial buffer before committing. A well-planned move gives you more room to focus on your education and make the most of student life.

**University Yatra can help you compare study destinations, understand practical considerations and plan your next steps around your academic goals and circumstances.**`,
  },

  "scholarships": {
    id: "04",
    vol: "VOL. IV",
    slug: "scholarships",
    title: "Scholarships in Ireland for International Students",
    shortTitle: "Scholarships in Ireland",
    badge: "Scholarships in Ireland",
    tagline: "Scholarships can make studying in Ireland more affordable, but the right funding option depends on your academic record, chosen programme, nationality, financial circumstances and level of study.",
    heroImage: "/images/universities/ireland/nui-galway.webp",
    pillColors: [
      { label: "GOVERNMENT SCHOLARSHIPS", bg: "#D7F77D", text: "#0C337B" },
      { label: "UNIVERSITY SCHOLARSHIPS", bg: "#B5E9F2", text: "#0C337B" },
      { label: "RESEARCH FUNDING", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Scholarships in Ireland for International Students

Scholarships can make studying in Ireland more affordable, but the right funding option depends on your academic record, chosen programme, nationality, financial circumstances and level of study. Some awards reduce tuition fees, while others provide a stipend or contribute towards research expenses.

For Indian students, the best approach is to explore government scholarships, university-specific awards and research funding in parallel. Do this early, because many scholarships require an admission offer, a separate application or supporting documents before a fixed deadline.

## 1. What Scholarships Are Available in Ireland?

Scholarships in Ireland are not all structured in the same way. Understanding what an award actually covers is the first step towards building a realistic funding plan.

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Type of funding</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">What it may cover</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Best suited for</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Government-funded scholarships</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">A stipend, tuition-fee waiver or other specified support</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Eligible international applicants meeting the scheme&#x27;s criteria</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">University scholarships</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Partial or full tuition reductions, or selected financial awards</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Students applying to participating Irish institutions</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Research funding</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Stipend, eligible fees and research expenses, depending on the award</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Research master&#x27;s and PhD candidates</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Subject-specific awards</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Funding linked to a discipline, school or programme</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Applicants in eligible academic fields</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Indian government scholarships</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Funding under specific Indian schemes, subject to eligibility</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Indian students who meet the relevant category and scheme conditions</td></tr></tbody></table></div>

**Important:** A scholarship advertised as “up to 100%” may cover tuition alone. Always establish whether it also provides money for rent, food, insurance, travel or other living expenses.

## 2. Government of Ireland International Education Scholarship

The **Government of Ireland International Education Scholarship (GOI-IES)** is one of the main national scholarship opportunities for eligible international students pursuing higher education in Ireland.

Under the 2026 call, the programme offered 60 scholarships nationally for one year of eligible full-time, in-person study at NFQ Level 9 or 10. These levels include qualifying master's, postgraduate diploma and doctoral programmes.

### What does the scholarship provide?

Successful applicants receive:

- A €10,000 stipend for the scholarship year.
- A full tuition-fee and registration-fee waiver from the host institution for that year.

The award is competitive and limited in number. The stipend is intended to help with living expenses, but it should not automatically be treated as a complete living-cost budget.

### Who can apply?

Under the 2026 call, applicants needed to meet the programme's eligibility requirements, including:

- A domicile of origin outside the EU/EEA, Switzerland and the United Kingdom.
- An offer for an eligible full-time, in-person programme at a participating Irish higher education institution.
- Compliance with the programme's nationality and previous-award restrictions.
- Submission of the required application and references within the specified deadline.

Institutional requirements can also affect eligibility. An offer from an Irish university does not, by itself, guarantee that the chosen programme qualifies for the scholarship.

### When should you apply?

The 2026 application deadline was **12 March 2026**, and the call is now closed. Future applicants should check the Higher Education Authority's official scholarship page for the next call and its confirmed dates rather than assuming the previous schedule will repeat exactly.

The most important planning step is to apply for university admission well in advance. If the scholarship requires an offer, waiting until the scholarship deadline is approaching can leave too little time to complete both processes.

## 3. University Scholarships in Ireland

University scholarships are an important category for international students because institutions may offer awards to applicants across a wider range of programmes than a single national scholarship scheme.

These awards can be based on academic merit, programme, country of origin, subject area or a separate competitive application. The amount and eligibility rules vary between universities and can change each academic year.

### What types of university awards should you look for?

**International student merit scholarships**

Some universities assess eligible applicants for tuition discounts based on academic performance or their admission application. These awards may be automatic, meaning no separate scholarship form is required, but eligibility must still be checked.

**Excellence scholarships**

These are usually competitive awards that may cover a percentage of tuition or, in some cases, the full tuition fee. Applicants may need an offer, a strong academic profile and a separate scholarship application.

**Country-specific scholarships**

Some institutions offer awards for applicants from particular countries or regions. Indian students should check whether citizenship, domicile, programme and academic requirements apply.

**School- or programme-specific scholarships**

A university's business school, science faculty or another academic department may offer its own awards. These can be particularly relevant when funding is linked to a specific degree.

### How to compare university scholarships

Before including a scholarship in your financial plan, confirm:

- **Coverage:** Does it reduce tuition, provide a fixed amount or pay a living stipend?
- **Eligibility:** Does the award apply to your nationality, programme and fee category?
- **Application process:** Is consideration automatic, or must you submit a separate application?
- **Offer requirements:** Is a conditional offer accepted, or is an unconditional offer preferred?
- **Renewal:** Is funding available for the entire programme or only one academic year?
- **Award conditions:** Are there minimum grades or other requirements to retain the funding?
- **Payment timing:** Will the scholarship be confirmed before the tuition deposit is due?

For example, an award that reduces tuition by 25% may be valuable, but the remaining tuition and living costs still need to be funded. A smaller award with clear eligibility may be more realistic than building your plans around a highly competitive full-fee scholarship.

## 4. Research Scholarships and PhD Funding in Ireland

Students considering a research master's or PhD should explore funded research opportunities alongside traditional scholarships.

Research funding may be attached to a particular project, supervisor, research group, university or external funding scheme. Depending on the award, support may include a stipend, a contribution towards tuition and eligible research expenses.

### Research Ireland funding

Research Ireland is a key national organisation supporting research and innovation funding. Its funding opportunities and programme structure can change, so applicants should check the current funding directory rather than rely on older scholarship summaries.

The former **Government of Ireland Postgraduate Scholarship Programme** has been integrated into Research Ireland's Empower programme. Students should therefore verify the current route for research funding and should not assume the former individual application process remains open in the same form.

### Funded research positions

A university may advertise a funded PhD or research master's position linked to a specific project. Such opportunities can have their own academic prerequisites, research expectations and application deadlines.

A practical search strategy is to:

1. Identify research areas that match your academic background.
1. Explore relevant university departments and research groups.
1. Check the current Research Ireland funding opportunities.
1. Read the project advertisement to establish whether fees and living support are included.
1. Contact a potential supervisor when the programme or funding process requires it.
1. Prepare your research proposal, academic references and supporting documents early.

Research funding is not interchangeable with a general taught-master's scholarship. A funded PhD position may be an excellent route for a suitable research candidate, but it will not necessarily support someone applying for a taught master's degree.

## 5. Scholarships in Ireland for Indian Students

Indian students should consider both Irish university funding and relevant Indian funding schemes. Eligibility for Indian government support depends on the particular scheme, not simply on being an Indian citizen.

### Indian government scholarships

The National Overseas Scholarship and other overseas-study schemes may support eligible applicants who meet specific category, academic, income and course requirements. Some schemes are designed for particular disadvantaged or under-represented groups and have separate application procedures.

Students should verify the current guidelines with the responsible Indian ministry before applying. Check eligible qualifications, approved courses, income limits, award coverage, application windows and any restrictions on combining funding.

Do not assume that a scheme is open to every Indian student or that it can automatically be combined with an Irish university award.

### A practical funding strategy

For Indian students planning to study in Ireland, it is sensible to investigate funding through three parallel routes:

- The national scholarship opportunities offered by Ireland.
- Scholarships and tuition reductions from the chosen university.
- Indian government schemes for which the student may qualify.

This approach creates more options without assuming that any single award will cover the entire cost of studying abroad.

## 6. Do Scholarships Cover the Cost of Living in Ireland?

Not necessarily. The distinction between tuition funding and living-cost funding is essential.

A tuition scholarship reduces the amount you owe the institution. A stipend provides money that can help pay for accommodation, food, transport and other expenses. Some awards include both, while others cover only one component.

Even the Government of Ireland International Education Scholarship's €10,000 stipend is intended as a contribution towards student costs rather than a guarantee that every expense will be covered.

Before accepting an offer, prepare a funding breakdown that includes:

- Remaining tuition after confirmed scholarships.
- Accommodation and utility costs.
- Food and transport.
- Private medical insurance and other required charges.
- Visa and immigration-related costs where applicable.
- Travel and initial settling-in expenses.
- A reserve for unexpected expenses.

Also check the timing of scholarship confirmation. You may have to pay an admission deposit or meet a tuition-payment deadline before your final award is confirmed.

### Does a scholarship reduce the funds required for an Irish student visa?

It depends on what the scholarship actually covers and the evidence required for your application.

A confirmed tuition waiver may change the tuition amount payable, but it does not automatically satisfy the separate living-cost financial requirement. A stipend may contribute towards your available resources, but you should check the current immigration rules and accepted evidence before relying on it.

Obtain written confirmation from the institution showing the award, the amount covered and any remaining fees. Do not assume that an award letter removes every financial-evidence requirement.

## 7. How to Improve Your Scholarship Application

Scholarships are competitive, so preparation should begin before the application deadline.

**Build a strong academic case.** Review the award's selection criteria and present your academic achievements in the context of the programme you intend to study.

**Explain why the programme fits your goals.** Your statement should make a clear connection between your previous experience, the course, your future plans and why studying in Ireland is relevant to that progression.

**Choose suitable referees.** Academic or professional referees should be able to discuss your abilities and achievements with specific examples. Give them enough notice to prepare a thoughtful reference.

**Prepare documents early.** Depending on the award, you may need transcripts, degree certificates, an admission offer, a personal statement, references, a CV or other supporting information.

**Check the eligibility rules first.** Do not spend time preparing an application before confirming that your programme, nationality, study level and admission status meet the current criteria.

**Track deadlines separately.** University admission and scholarship deadlines may be different. Keep a record of each deadline, the required documents and whether an application is automatic or separate.

**Maintain a backup funding plan.** Scholarship decisions are uncertain. Your study plan should remain financially realistic even if you receive a smaller award than expected or are not selected.

## 8. Common Scholarship Mistakes to Avoid

- Assuming that every scholarship covers both tuition and living expenses.
- Applying before confirming programme and nationality eligibility.
- Waiting too long to obtain an admission offer.
- Missing a separate scholarship application because admission consideration was automatic, or vice versa.
- Using an old deadline or relying on a previous year's scholarship amount.
- Assuming a scholarship will be renewed for every year of a multi-year course.
- Paying a tuition deposit without checking the refund policy and the timing of scholarship decisions.
- Depending on an unconfirmed award to make the overall study budget work.

## Find a Scholarship That Fits Your Study Plan

The right scholarship is one that matches your academic profile, course, eligibility and financial needs. Start with confirmed eligibility, compare the actual value of each award, and build your budget around funding you can reasonably evidence.

University Yatra can help you compare Irish universities, understand programme requirements and organise your application planning so that admission and scholarship deadlines are considered together. Scholarship availability and final decisions remain subject to each funding provider's rules.`,
  },

  "post-study-work-visa": {
    id: "05",
    vol: "VOL. V",
    slug: "post-study-work-visa",
    title: "Post-Study Work Visa in Ireland",
    shortTitle: "Post-Study Work Visa",
    badge: "Stamp 1G",
    tagline: "Planning to study in Ireland involves more than choosing a university and completing a degree.",
    heroImage: "/images/universities/ireland/dublin-city-university.webp",
    pillColors: [
      { label: "STAMP 1G", bg: "#D7F77D", text: "#0C337B" },
      { label: "EMPLOYMENT PERMIT", bg: "#B5E9F2", text: "#0C337B" },
      { label: "STAMP 4", bg: "#FFD4E6", text: "#0C337B" },
    ],
    markdown: String.raw`# Post-Study Work Visa in Ireland

Planning to study in Ireland involves more than choosing a university and completing a degree. For many international students, the next question is whether they can stay in Ireland after graduation, gain professional experience and move into long-term employment.

Ireland offers an established graduate immigration route called the **Third Level Graduate Programme**, under which eligible graduates can receive **Stamp 1G permission**. This allows them to remain in Ireland for a limited period, seek graduate-level employment and work full-time without first obtaining an employment permit.

However, Stamp 1G is not a permanent work visa. Graduates who want to remain beyond this period generally need to qualify for an employment permit or another appropriate immigration permission. Your qualification level, job offer, occupation, salary and application timing can all affect your options.

## 1. What Is the Post-Study Work Visa in Ireland?

The term “post-study work visa” is commonly used to describe Ireland's graduate stay-back option. Officially, the route is known as the **Third Level Graduate Programme**, and the immigration permission granted under it is Stamp 1G.

It is designed to give eligible non-EEA graduates time to seek suitable graduate-level employment and pursue an employment permit or another qualifying route.

During Stamp 1G, eligible graduates can:

- Work full-time, subject to Irish employment law.
- Work without obtaining an employment permit during the Stamp 1G period.
- Apply for jobs across employers and sectors while looking for suitable graduate-level employment.
- Prepare to transition to an employment permit if they secure a qualifying role.

Stamp 1G does not allow you to operate a business or work as a self-employed person. It is also time-limited, so you should plan your job search with the expiry date in mind.

## 2. How Long Can You Stay in Ireland After Graduation?

The duration of graduate permission depends on the level of your Irish qualification.

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Qualification awarded in Ireland</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Potential Stamp 1G duration</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">NFQ Level 8</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Up to 12 months</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">NFQ Level 9 or above</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Up to 24 months, subject to the programme&#x27;s conditions</td></tr></tbody></table></div>

For an eligible Level 9 or higher graduate, the 24-month period is generally granted in two blocks of 12 months. The second period is not automatic: the graduate must satisfy the relevant conditions, including demonstrating appropriate efforts to obtain suitable graduate-level employment.

This makes the qualification level important when comparing study options. A Level 8 degree and a Level 9 master's may lead to different periods of graduate permission, but neither guarantees a job or an employment permit.

There are also limits on the total time spent under the relevant student immigration pathway. The current rules generally set an aggregate limit of seven years for Level 8 graduates and eight years for Level 9 or higher graduates across specified student-related permissions. Previous study in Ireland may therefore affect your available time.

## 3. Who Is Eligible for Stamp 1G?

Graduation alone does not automatically grant Stamp 1G. Applicants must meet the conditions of the Third Level Graduate Programme.

The main requirements generally include:

- **An eligible Irish qualification:** You must complete a qualifying programme and receive an eligible award at the required NFQ level from a recognised Irish awarding body.
- **Valid student immigration permission:** You must hold current Stamp 2 permission and an up-to-date Irish Residence Permit (IRP) when applying.
- **A timely application:** You must apply within the permitted period after being notified that you have achieved your award. Current guidance specifies a six-month application window.
- **Compliance with the programme's conditions:** Your previous student-related permissions and other circumstances must meet the applicable rules.

The course and provider must also satisfy the relevant immigration eligibility conditions. Students should verify their specific programme and awarding body rather than assume that every course marketed as a degree qualifies.

### When should you apply?

Use the date on which your institution officially notifies you that you have achieved your qualification, alongside the validity of your current Stamp 2 permission. Do not plan around your graduation ceremony alone, because results, award notifications and ceremonies can occur at different times.

Start checking the application requirements before your course ends. Keep your passport, IRP, award documentation, medical insurance evidence and other required documents ready, and follow the current Immigration Service Delivery instructions.

## 4. What Can You Do While on Stamp 1G?

Stamp 1G gives eligible graduates an opportunity to build professional experience while searching for a longer-term immigration route.

During this permission, graduates can generally work full-time without an employment permit. This can help them apply for graduate programmes, gain relevant experience, build professional contacts and demonstrate their suitability for roles that may qualify for employment permits.

However, the permission comes with important limits:

- You cannot operate a business or work as a self-employed person under the graduate permission.
- Stamp 1G does not guarantee an employment permit or permanent residence.
- You must comply with the conditions of your immigration permission.
- You need to transition to an appropriate permission before your Stamp 1G expires if you intend to remain in Ireland.

A practical job-search strategy should begin before graduation. Focus on roles that fit your qualification and skills, and investigate whether the occupation and proposed salary can meet the relevant employment permit requirements.

## 5. What Happens After Stamp 1G Expires?

Stamp 1G is a temporary opportunity to move from education into employment. To remain in Ireland after it expires, eligible graduates generally need to secure a qualifying job and transition to an employment permit or another appropriate immigration permission.

Two major employment permit routes are the **Critical Skills Employment Permit** and the **General Employment Permit**. The right option depends on the occupation, salary, qualifications, employer and other eligibility criteria.

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Feature</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Critical Skills Employment Permit</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">General Employment Permit</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Main purpose</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Attract workers in specified highly skilled occupations and other qualifying high-remuneration roles</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Allow eligible non-EEA nationals to work in a broader range of occupations that are not excluded</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Occupation rules</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Listed occupations may qualify under specific criteria; certain higher-salary roles outside the list can also qualify</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">The role must not fall within the applicable ineligible categories and must meet the other conditions</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Salary</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Depends on the relevant occupation and qualification route</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Depends on the applicable salary threshold and any eligible exception</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Labour Market Needs Test</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Not generally required</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Generally required, subject to applicable exceptions</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Job offer</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">A qualifying offer of at least two years is generally required</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">A qualifying job offer is required; eligible contracts can differ in duration</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Potential Stamp 4 route</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Generally after 21 months of qualifying employment in Ireland</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Generally after 57 months of qualifying employment in Ireland</td></tr></tbody></table></div>

These are separate employment permit routes, not automatic extensions of Stamp 1G. You must meet the relevant requirements and obtain the required approval.

## 6. Critical Skills Employment Permit: A Route for Eligible Graduate Roles

The Critical Skills Employment Permit (CSEP) is intended for eligible highly skilled occupations and other qualifying roles that meet the relevant remuneration criteria.

It can be an attractive route for graduates whose qualifications and job offers match Ireland's current skills requirements. Occupations such as certain ICT, engineering and professional roles may qualify, but the exact job duties and applicable list matter.

### Salary thresholds in 2026

From 1 March 2026, the published remuneration thresholds include:

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Critical Skills route</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Minimum annual remuneration</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Eligible occupation requiring a relevant degree or higher</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€40,904</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Eligible recent graduate who meets the relevant criteria</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€36,848</td></tr><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Qualifying higher-remuneration role outside the Critical Skills list, provided it is not ineligible</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€68,911</td></tr></tbody></table></div>

The lower recent-graduate threshold applies only where the applicant meets the specific qualification and timing criteria. For example, the relevant qualification must have been obtained within the 12 months before the permit application, and it must meet the rules for the role being offered.

Salary thresholds alone do not establish eligibility. The occupation, qualifications, employer, contract and remuneration package must all satisfy the applicable conditions. Check the current Critical Skills Occupations List and the Department of Enterprise, Tourism and Employment's guidance before relying on a particular route.

### Why the Critical Skills route matters

Eligible CSEP holders may qualify to apply for Stamp 4 after completing 21 months of qualifying employment in Ireland, subject to the relevant immigration requirements.

Stamp 4 generally allows the holder to work without an employment permit and provides broader flexibility than a permission tied to a specific employment permit. It is still subject to registration and renewal requirements.

## 7. General Employment Permit: Another Possible Route

Not every qualifying graduate role falls under the Critical Skills route. A General Employment Permit (GEP) may be available for a broader range of occupations, provided the job is not excluded and the employer, salary and other requirements are met.

### Salary thresholds in 2026

The published General Employment Permit remuneration thresholds from 1 March 2026 include:

<div data-ireland-guide-table="true" class="my-5 w-full max-w-full overflow-x-auto rounded-xl border border-[#E2E8F0]"><table class="w-full min-w-[480px] border-collapse text-left text-[12px] sm:text-[13px]"><thead class="bg-[#E8F0FE] text-[#0C337B]"><tr><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">General Employment Permit route</th><th class="border-b border-[#E2E8F0] p-3 align-top font-extrabold">Minimum annual remuneration</th></tr></thead><tbody><tr class="bg-white"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Standard threshold</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€36,605</td></tr><tr class="bg-[#F8FAFC]"><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">Eligible recent graduate with a relevant Irish third-level qualification obtained within the previous 12 months</td><td class="border-b border-[#E2E8F0] p-3 align-top text-[#425A70]">€34,009</td></tr></tbody></table></div>

The recent-graduate threshold is conditional. It is not available simply because an applicant has studied in Ireland; the qualification and timing requirements must be met.

A Labour Market Needs Test is generally required for a General Employment Permit, although exceptions may apply. This process normally requires the employer to advertise the vacancy through specified channels before submitting the permit application.

The employer must also meet the applicable requirements, and the role must satisfy the current rules on eligible occupations, salary and employment conditions.

### Moving towards Stamp 4

A General Employment Permit holder may generally become eligible to apply for Stamp 4 after 57 months of qualifying employment in Ireland, subject to the applicable conditions.

The route is longer than the usual 21-month Critical Skills pathway. Nevertheless, it may be a valid option for a graduate whose job does not qualify for a Critical Skills Employment Permit.

Always check which permit the employer intends to apply for before accepting a role, and confirm that the position meets the relevant criteria.

## 8. When Should You Start the Employment Permit Process?

Do not wait until your Stamp 1G permission is almost over before investigating employment permits.

The Department of Enterprise, Tourism and Employment states that an employment permit application must generally be received at least **12 weeks before the proposed employment start date**. Other steps, including gathering documents and meeting any Labour Market Needs Test, can add time.

A practical timeline is:

**During your course:** Research eligible occupations, build relevant experience and identify employers that recruit for your target roles.

**Before graduation:** Update your CV, prepare examples of your skills and begin applying for suitable graduate-level opportunities.

**Early in Stamp 1G:** Prioritise roles that match your qualification and could qualify for an employment permit. Confirm the occupation, salary and employer criteria.

**Several months before expiry:** Discuss the relevant permit route with your employer and work backwards from the proposed employment start date. Allow time for the application and any additional requirements.

**Before your permission expires:** Ensure you have obtained the required approval or another valid immigration permission. Do not assume that a pending application automatically extends your right to remain or work.

The goal is to give yourself sufficient time to make an informed decision rather than relying on a last-minute offer.

## 9. What If You Do Not Find a Job Before Stamp 1G Expires?

Not every graduate secures a qualifying job within the available period. If you are approaching the end of Stamp 1G without a suitable offer, review your options early.

Depending on your circumstances, possible next steps may include:

- Continuing your search for a role that qualifies for an employment permit, while there is sufficient time to apply.
- Assessing whether a different eligible employment permit route is available.
- Checking whether another immigration permission applies to your circumstances.
- Making arrangements to leave Ireland before your permission expires if no valid route is available.

Further study should not be assumed to be an automatic extension. Eligibility for a new student permission depends on the course, your circumstances and the applicable immigration rules.

If you cannot qualify for another permission, leaving before your existing permission expires is generally preferable to allowing your status to lapse. Seek advice from official immigration sources or a suitably qualified adviser if your circumstances are complex.

## 10. Does Time on Stamp 1G Count Towards Irish Citizenship?

Immigration permissions can have different consequences for long-term residence and naturalisation.

Stamp 1G time granted under the Third Level Graduate Programme is generally considered reckonable residence for Irish citizenship purposes. Time spent on Stamp 2 student permission is generally not reckonable for that purpose.

However, citizenship eligibility involves more than adding up time spent in Ireland. The applicable residence conditions, continuity requirements, absences and other legal criteria must be assessed under the rules in force when you apply.

Similarly, eligibility for Stamp 4 through an employment permit depends on the qualifying employment and immigration permission conditions. Neither Stamp 1G nor an employment permit guarantees citizenship.

If long-term residence or naturalisation is one of your goals, keep copies of your immigration permissions, IRP records and travel history, and check the official requirements rather than relying on a simplified timeline.

## 11. Common Mistakes to Avoid

- Assuming every Irish degree automatically qualifies for Stamp 1G.
- Missing the application window after receiving official notification of your award.
- Allowing Stamp 2 permission to expire before making the required application.
- Treating the full 24-month Level 9 route as automatic rather than conditional.
- Assuming any job offer qualifies for an employment permit.
- Using salary thresholds from an older year.
- Waiting until the end of Stamp 1G to discuss employment permit sponsorship with an employer.
- Assuming a pending permit application gives you permission to keep working.
- Treating Stamp 4 or citizenship as guaranteed outcomes.

## Is Ireland a Good Choice for Post-Study Work?

Ireland may suit students who want to study in an English-speaking environment and pursue professional opportunities in areas such as technology, engineering, life sciences, business and other eligible fields. But the value of a study destination depends on more than the length of its post-study permission.

Before choosing a course, consider the qualification level, the types of roles it can lead to, relevant employer demand, likely salary ranges, and whether those roles could meet employment permit criteria. Also consider the cost of studying and living in Ireland while preparing for the possibility that your job search may take time.

**University Yatra can help you compare Irish courses and universities with your academic goals and career plans in mind.** Immigration rules and employment permit eligibility are determined by the relevant Irish authorities, and you should verify the requirements that apply to your circumstances before making a decision.`,
  },

};

/* ==========================================
   SIMPLE MARKDOWN -> HTML
   Supports: # ## ### headings, - lists, 1. lists,
   **bold**, paragraphs, Word-document tables.
   The first H1 is skipped
   because the hero already shows the title.
========================================== */

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inline(text) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdown(md) {
  const lines = md.split("\n");
  const out = [];
  let listType = null; // "ul" | "ol" | null
  let skippedH1 = false;

  const closeList = () => {
    if (listType) {
      out.push(`</${listType}>`);
      listType = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.trim() === "") {
      closeList();
      continue;
    }

    // Responsive tables transferred from the Word document.
    if (line.startsWith('<div data-ireland-guide-table="true"')) {
      closeList();
      out.push(line);
      continue;
    }

    if (line.startsWith("# ")) {
      closeList();
      if (!skippedH1) {
        skippedH1 = true;
        continue;
      }
      out.push(`<h1>${inline(line.slice(2))}</h1>`);
      continue;
    }

    if (line.startsWith("## ")) {
      closeList();
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith("### ")) {
      closeList();
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith("- ")) {
      if (listType !== "ul") {
        closeList();
        out.push("<ul>");
        listType = "ul";
      }
      out.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      if (listType !== "ol") {
        closeList();
        out.push("<ol>");
        listType = "ol";
      }
      out.push(`<li>${inline(orderedMatch[1])}</li>`);
      continue;
    }

    closeList();
    out.push(`<p>${inline(line)}</p>`);
  }

  closeList();
  return out.join("");
}

/* ==========================================
   STATIC PARAMS + METADATA
========================================== */

export async function generateStaticParams() {
  return Object.keys(IRELAND_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = IRELAND_GUIDES[slug];

  if (!guide) {
    return {
      title: "Page Not Found - University Yatra",
    };
  }

  return {
    title: `${guide.title} | University Yatra`,
    description: guide.tagline,
    openGraph: {
      title: guide.title,
      description: guide.tagline,
      type: "article",
    },
  };
}

/* ==========================================
   USA DESIGN LAYOUT - IRELAND CONTENT FROM WORD
   Reuses the same design for all five updated guides.
========================================== */

const GUIDE_SECTION_ICONS = {
  "study-in-ireland": [GraduationCap, Calendar, BookOpen],
  "cost-of-studying": [Wallet, Home, BookOpen],
  "living-and-culture": [Home, Wallet, Globe2],
  scholarships: [Award, CheckCircle2, BookOpen],
  "post-study-work-visa": [Clock, CheckCircle2, BookOpen, BookOpen],
};

// Split each Word-document section into the existing chapter cards.
function parseIrelandChapters(markdown) {
  const introduction = [];
  const chapters = [];
  let currentLines = introduction;

  for (const line of markdown.split(/\r?\n/)) {
    if (line.startsWith("## ")) {
      const chapter = { title: line.slice(3), lines: [] };
      chapters.push(chapter);
      currentLines = chapter.lines;
      continue;
    }
    currentLines.push(line);
  }

  return {
    introductionHtml: renderMarkdown(introduction.join("\n")),
    chapters: chapters.map(({ title, lines }) => ({ title, html: renderMarkdown(lines.join("\n")) })),
  };
}

// Format lists, bold text, and paragraphs as editorial cards without altering wording.
const ARTICLE_PROSE_CLASSES = "min-w-0 break-words text-[14px] leading-[1.8] text-[#425A70] sm:text-[15px] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5 [&_li]:pl-1 [&_li]:leading-[1.75] [&_li::marker]:font-bold [&_li::marker]:text-[#1765F5] [&_strong]:font-bold [&_strong]:text-[#0C337B] [&_h3]:mb-3 [&_h3]:mt-5 [&_h3]:text-[18px] [&_h3]:font-extrabold [&_h3]:text-[#0C337B]";

export default async function IrelandGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = IRELAND_GUIDES[slug];

  if (!guide) notFound();

  const { introductionHtml, chapters } = parseIrelandChapters(guide.markdown);
  const otherGuides = Object.values(IRELAND_GUIDES).filter((item) => item.slug !== slug);
  const chapterIcons = GUIDE_SECTION_ICONS[slug] || [];
  const whatsappHref = "https://wa.me/919286844550?text=Hi%20University%20Yatra%2C%20I%20would%20like%20guidance%20on%20studying%20in%20Ireland.";

  return (
    <>
      <Navbar active="Destinations" />

      <main className="min-h-screen w-full overflow-x-clip bg-[#F8FAFC]">
        {/* USA-STYLE CAMPUS IMAGE HERO */}
        <section className="relative isolate w-full overflow-hidden bg-[#EAF4FA] text-[#063B72] lg:min-h-[600px]">
          <div className="pointer-events-none absolute inset-0 -z-20">
            <Image src={guide.heroImage} alt={guide.title} fill priority sizes="100vw" className="object-cover object-center" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-white/25" />

          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-3 pb-9 pt-[112px] text-center min-[390px]:px-4 sm:px-6 sm:pb-12 sm:pt-[135px] lg:min-h-[600px] lg:justify-center lg:px-8 lg:pb-16 lg:pt-[100px]">
            <nav aria-label="Breadcrumb" className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#526B8C] sm:mb-5 sm:text-[12px]">
              <Link href="/" className="transition-colors hover:text-[#1765F5]">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/study-in-ireland" className="transition-colors hover:text-[#1765F5]">Study in Ireland</Link>
              <span aria-hidden="true">/</span>
              <span className="font-bold text-[#0C337B]">{guide.shortTitle}</span>
            </nav>

            <h1 className="relative z-10 mx-auto max-w-[1100px] break-words text-balance text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white [-webkit-text-fill-color:#FFFFFF] [-webkit-text-stroke:1px_#0C337B] [paint-order:stroke_fill] [text-shadow:0_3px_12px_rgba(12,51,123,0.25)] min-[390px]:text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px]">
              {guide.title}
            </h1>

            <div className="relative z-10 mb-3 mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#1765F5]/25 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-4">
              <Bookmark size={13} className="shrink-0 text-[#1765F5]" />
              <span className="text-center font-mono text-[9px] font-extrabold uppercase tracking-[0.07em] text-[#1765F5] min-[390px]:text-[10px] sm:text-[11px] sm:tracking-widest">{guide.vol} • {guide.badge}</span>
            </div>

            <p className="relative z-10 mx-auto mb-1 max-w-[730px] text-[12px] font-semibold leading-[1.6] text-[#0C337B] sm:text-[14px]">{guide.tagline}</p>

            <div className="relative z-10 mb-2 mt-2 flex max-w-[670px] flex-wrap items-center justify-center gap-2 sm:mb-4 sm:mt-4 sm:gap-3">
              {guide.pillColors.map((pill, index) => (
                <span key={`${pill.label}-${index}`} style={{ backgroundColor: pill.bg, color: pill.text }} className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-center text-[9px] font-extrabold uppercase tracking-[0.04em] shadow-sm min-[390px]:px-3.5 min-[390px]:text-[10px] sm:text-[11px]">
                  {pill.label}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-5 flex w-full flex-nowrap items-center justify-center gap-2 px-1 sm:mt-8 sm:gap-6 sm:px-0">
              <a href="#contact-advisory" className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#1765F5] bg-[#1765F5] px-1.5 py-3 text-[9px] font-bold text-white shadow-[0_8px_22px_rgba(23,101,245,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B] min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]">
                <span>Book a Free Consultation</span>
                <ArrowRight size={14} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-[17px]" />
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#25D366] bg-white px-1.5 py-3 text-[9px] font-bold text-[#0C337B] shadow-[0_8px_20px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white min-[360px]:px-2 min-[360px]:text-[10px] min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px]">
                <MessageCircle size={16} className="shrink-0 text-[#25D366] group-hover:text-white" />
                <span>Chat On Whatsapp</span>
              </a>
            </div>
          </div>
        </section>

        {/* USA-STYLE TWO COLUMN EDITORIAL LAYOUT */}
        <section className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-12">
            <div className="min-w-0 space-y-6 lg:col-span-2 lg:space-y-8">
              {/* Introduction from the supplied Ireland document */}
              {introductionHtml && (
                <div className="min-w-0 rounded-3xl border border-[#A2C1FB]/40 bg-gradient-to-br from-[#EBF3FE] to-white p-5 shadow-sm sm:p-8">
                  <div className="flex items-center gap-2 text-[#1765F5]">
                    <Compass size={18} />
                    <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">Executive Summary</span>
                  </div>
                  <h2 className="mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">Navigating {guide.shortTitle}</h2>
                  <div className={`${ARTICLE_PROSE_CLASSES} mt-3`} dangerouslySetInnerHTML={{ __html: introductionHtml }} />
                </div>
              )}

              {/* Every Word-document section becomes a chapter card */}
              {chapters.map((chapter, index) => {
                const ChapterIcon = chapterIcons[index] || BookOpen;
                return (
                  <article key={`${chapter.title}-${index}`} className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#A2C1FB] hover:shadow-md sm:p-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5]">
                        <ChapterIcon size={22} strokeWidth={2.2} />
                      </span>
                      <h2 className="min-w-0 break-words pt-1 text-[19px] font-extrabold tracking-tight text-[#0C337B] sm:text-[22px]">{chapter.title}</h2>
                    </div>
                    <div className="mt-5 border-t border-slate-100 pt-5">
                      <div className={ARTICLE_PROSE_CLASSES} dangerouslySetInnerHTML={{ __html: chapter.html }} />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* USA-STYLE RIGHT SIDEBAR */}
            <aside className="min-w-0 space-y-6">
              <div id="contact-advisory" className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-gradient-to-br from-[#E8F0FE] to-white p-5 shadow-sm sm:p-7">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">1-on-1 Student Guidance</span>
                <h2 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">Need Personalized Guidance?</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-[#526B8C]">Speak with our Ireland study experts</p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#1eb956]">
                    <MessageCircle size={15} /> Chat on WhatsApp
                  </a>
                  <Link href="/counselling" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1765F5] bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#0C337B]">Book Free Counselling</Link>
                </div>
              </div>

              <div className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">Other Ireland Guides</h2>
                  <span className="font-mono text-[10px] text-[#1765F5]">Series</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {otherGuides.map((item) => (
                    <Link key={item.slug} href={`/study-in-ireland/${item.slug}`} className="group flex min-w-0 items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]">
                      <span className="min-w-0 flex-1">
                        <span className="block break-words">{item.title}</span>
                        <span className="mt-1 block break-words text-[11px] font-medium text-[#64748B]">{item.badge}</span>
                      </span>
                      <span className="shrink-0 font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">{item.vol} →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <UniversityFooter />
    </>
  );
}
