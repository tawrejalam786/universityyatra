import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, CheckCircle2, Compass, MessageCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

/* All five Canada guides and the full supplied Markdown are in this ONE file. */
const CANADA_GUIDES = {
  "study-in-canada": {
    id: "01",
    vol: "VOL. I",
    slug: "study-in-canada",
    title: "Study in Canada",
    shortTitle: "Education Pathways",
    badge: "Degrees, Programs & Intakes",
    tagline: "Bachelor's, master's, college credentials and Canadian admission intakes",
    heroImage: "/images/universities/canada/university-of-ottawas.webp",
    pillColors: [{"label": "BACHELOR'S","bg": "#D7F77D","text": "#0C337B"},{"label": "MASTER'S","bg": "#B5E9F2","text": "#0C337B"},{"label": "MAIN INTAKES","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Study in Canada

Choosing to study in Canada means choosing between different types of institutions, degree pathways, and learning environments. Whether you're planning a bachelor's degree after Class 12 or a master's degree after graduation, understanding how Canadian education works can help you narrow down the right options.

## How Does the Canadian Education System Work?

Canada offers university degrees alongside college diplomas, graduate certificates, and other career-focused qualifications. The right choice depends on your previous education, the subject you want to study, and the qualification you need for your future plans.

### Universities: Bachelor's, Master's and Doctoral Degrees

Canadian universities offer undergraduate and postgraduate education, with many institutions combining classroom learning, research, and practical projects.

- Bachelor's Degrees: Most programs take three to four years, depending on the province, institution, and field. Some programs include co-op placements, allowing students to gain structured work experience as part of their studies.
- Master's Degrees: These commonly take one to two years. Depending on the subject, you may choose a coursework-based program, a research-focused degree, or a combination of both. Options range from a Master of Science (MSc) or Master of Engineering (MEng) to business, public health, and other specialised fields.
- Doctoral Degrees: PhD programs focus on advanced research and usually take several years to complete. The duration depends on the discipline, research project, and university.

Degree titles and admission requirements differ between institutions. Check the specific program to understand its duration, curriculum, and entry criteria.

### Colleges and Polytechnics: Practical, Career-Focused Learning

Canadian colleges and polytechnics offer a different route for students who want specialised, applied training. Their programs can include diplomas, advanced diplomas, graduate certificates, and selected degree programs.

- Diplomas and Advanced Diplomas: These often focus on practical knowledge and technical skills in areas such as business, engineering technology, healthcare, and digital media.
- Graduate Certificates and Diplomas: These are generally designed for students who already hold a previous qualification and want to develop more specialised skills. Admission requirements and program length vary.
- Applied Learning: Depending on the course, students may complete laboratory work, industry projects, placements, or co-op terms alongside classroom study.

A college qualification is not automatically equivalent to a university degree. Before applying, confirm the credential awarded, the entry requirements, and whether the program supports your academic or professional goals.

## What Is Studying in Canada Actually Like?

The learning experience depends on the institution and course, but many Canadian programs combine academic instruction with assignments, presentations, group projects, laboratory work, and independent study.

At university, you may spend more time developing theoretical knowledge, analysing research, or working on advanced academic projects. In a college or polytechnic program, learning may place greater emphasis on applied tasks and technical training. These are broad differences, not fixed rules; individual programs can combine both approaches.

Some courses also offer co-operative education, commonly called co-op, where eligible students alternate academic study with structured work placements. Availability, admission to the co-op stream, and placement arrangements depend on the institution and program. A co-op option should not be treated as a guarantee of employment.

When comparing programs, look beyond the institution's reputation. Review the curriculum, teaching approach, practical components, faculty or research strengths, and the qualifications you will receive.

## When Can You Start Studying in Canada?

Many Canadian institutions offer three main admission periods, although not every program is available in every intake.

- Fall Intake (September): Often the main entry point, with a broad selection of undergraduate and postgraduate programs.
- Winter Intake (January): A common alternative for students who need more time to complete their applications or prepare for admission.
- Summer Intake (May): Available for selected programs and institutions, with a more limited choice in some subject areas.

Application deadlines can differ significantly by university, college, program, and applicant category. Some competitive courses may close applications early, and scholarship deadlines may not match admission deadlines. Check the official program page before deciding when to apply.

## How Should You Choose the Right Study Pathway?

Start with your current qualification and the next credential you want to earn.

If you're applying after Class 12, compare bachelor's programs by subject requirements, duration, curriculum, and available specialisations. If you've already completed a bachelor's degree, check whether a master's program or a career-focused postgraduate qualification is more appropriate for your goals.

Before shortlisting institutions, confirm:

- Academic eligibility: Whether your previous qualifications and subjects meet the entry requirements.
- Program structure: The degree or credential awarded, course duration, curriculum, and any co-op or research components.
- Application requirements: English-language proficiency, academic documents, references, portfolios, or other requirements where applicable.
- Institution and program status: Confirm the institution's official status and check any additional requirements relevant to international students.

For Indian students planning to study in Canada, the best starting point is to match your academic background and intended career direction with a suitable qualification. Once you know which pathway fits, comparing institutions and preparing a realistic application becomes much easier.`,
  },
  "cost-of-studying": {
    id: "02",
    vol: "VOL. II",
    slug: "cost-of-studying",
    title: "Cost of Studying in Canada",
    shortTitle: "Cost of Studying",
    badge: "Tuition, Fees & Budget Guide",
    tagline: "Tuition, mandatory fees, living-funds requirements and financial planning",
    heroImage: "/images/universities/canada/toronto-metropolitan-university.webp",
    pillColors: [{"label": "GRADUATE AVERAGE","bg": "#D7F77D","text": "#0C337B"},{"label": "UNDERGRADUATE AVERAGE","bg": "#B5E9F2","text": "#0C337B"},{"label": "LIVING-FUNDS THRESHOLD","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Cost of Studying in Canada

Planning to study in Canada involves more than checking the tuition fee on a university's website. Your total budget needs to cover your course, mandatory student fees, health insurance where applicable, study-permit expenses, and the money you'll need to settle into a new country.

For Indian students, it is particularly important to understand the difference between the advertised tuition fee and the full amount needed before travelling. Here's how to break down the cost of studying in Canada and build a realistic budget.

## How Much Does It Cost to Study in Canada?

Your tuition depends on the qualification you choose, your field of study, and the institution. Master's programs, bachelor's degrees, college diplomas, and MBA programs can have very different fee structures.

### Master's Degree Tuition Fees

For a postgraduate budget, **CAD 20,000–38,000 per year (approximately ₹13.6–25.8 lakh)** is a useful initial planning range for many master's programs. Some professional degrees, including certain MBA programs, can cost considerably more.

For context, the latest national figures published by the Government of Canada's EduCanada portal report average annual tuition of **CAD 24,028 for international graduate students**. This is a national average for graduate study, not a guaranteed price for a specific master's program. Research-based programs may also have funding arrangements that change the amount a student ultimately pays.

**Bachelor's Degree Tuition Fees**

For undergraduate students, a useful initial planning range is **CAD 25,000–45,000 per year (approximately ₹17–30.6 lakh)**, although individual programs can fall outside it.

The latest national average published by EduCanada is **CAD 41,746 per year for international undergraduate students**. Professional programs and certain high-demand courses may cost more, while fees at individual institutions can differ substantially.

**College Diplomas and Postgraduate Certificates**

Students considering colleges and polytechnics should compare the exact credential and program duration before budgeting. EduCanada gives an indicative range of **CAD 16,000–25,000 per year** for international students in college diploma programs, including mandatory fees such as student association fees and health insurance. Books and supplies may be additional.

A postgraduate certificate is not automatically equivalent to a master's degree. Check the credential awarded, entry requirements, and how the program fits your academic and career plans before comparing prices.

*INR conversions above use an illustrative exchange rate of CAD 1 = ₹68. Your actual rupee cost will depend on the exchange rate and bank charges when you transfer funds.*

## What Is Included in Your Study Budget?

Tuition is usually the largest academic expense, but it is not the only one. When calculating the total cost of studying in Canada, include these additional items.

- **Mandatory University Fees:** Student association fees, campus services, registration charges, and other compulsory fees may be charged separately or included in the published tuition estimate.
- **Health Insurance:** Coverage arrangements differ by province and institution. Some students are enrolled in a university plan, while other provinces or institutions have different arrangements. Check the premium, coverage period, and eligibility rules for your destination.
- **Books, Supplies and Software:** Textbooks, specialist software, laboratory materials, and equipment can add to your academic expenses. Requirements depend on your course.
- **Application Fees and Tuition Deposits:** Universities and colleges may charge application fees. After accepting an offer, you may also need to pay a deposit towards your tuition. Check whether the deposit is refundable and how it is applied to your fees.
- **Study Permit and Biometrics:** The standard Canadian study-permit application fee is CAD 150, and the individual biometrics fee is CAD 85 when required. Confirm the current fees and your specific requirements on the official government website. 

These costs should be included in your budget even when they are not part of the advertised annual tuition.

## How Much Money Do You Need to Show for a Canadian Study Permit?

One important part of planning to study in Canada is understanding the financial-support requirements for your study-permit application.

For applications made on or after **September 1, 2026**, a single student applying to study outside Quebec must show **CAD 23,448 for one year's living expenses**, excluding tuition and transportation. The amount increases if family members accompany the applicant. Quebec has separate financial requirements. 

This is a government financial-support threshold, not a prediction of exactly how much you will spend. Your actual living costs may be higher or lower depending on accommodation, location, transport, and personal habits.

You must also show that you can pay your tuition and transportation costs. For a program lasting longer than one year, you need to explain how you plan to finance the full duration of your studies. The government may accept different forms of financial evidence, including bank statements, education loans, scholarship documentation, and a Guaranteed Investment Certificate (GIC), where applicable. 

**A GIC is not a universal requirement for every study-permit applicant.** Check the current instructions for your application route rather than relying on older references to the former Student Direct Stream.

## What Affects Tuition Fees in Canada?

Two programs with similar titles can have different fees. Before comparing universities, understand what is driving the difference.

### 1. Degree Level and Program Structure

A master's degree, MBA, bachelor's degree, and college diploma have different tuition structures. Professional programs may have additional course or facility fees, while research-based graduate programs may offer funding to eligible students.

### 2. Province and Institution

Tuition varies across provinces and institutions. Statistics Canada's 2025–26 data show that Ontario has some of the highest average international tuition fees, while fees can be considerably lower in provinces such as Newfoundland and Labrador. Compare actual program fees rather than assuming every institution in a province charges the same amount. 

**3. Field of Study**

Business, engineering, computer science, healthcare, and other specialised programs can have different fee structures. Some courses require laboratory access, specialist equipment, placements, or professional training, which can affect the total cost.

### 4. Program Length

Annual tuition alone does not tell you the full cost of a degree. A program with lower yearly fees may still cost more overall if it takes longer to complete. Compare the published tuition for the entire program, including the expected number of terms and any mandatory additional charges.

## The Costs Students Often Overlook

The difference between a manageable budget and a financial shortfall often comes down to expenses that are not immediately visible on a university's fee page.

- **Tuition Deposit:** You may need to pay a deposit to secure your place. This is usually credited towards tuition if you enrol, but the amount and refund rules depend on the institution.
- **First-Month Housing Costs:** Rent may require a deposit or advance payment, and temporary accommodation can be necessary before you move into your longer-term housing.
- **Initial Setup:** Winter clothing, bedding, kitchen supplies, a mobile plan, and local transport can create significant expenses during your first few weeks.
- **Currency Exchange and Transfers:** The rupee amount your family pays can change with the exchange rate, transfer fees, and payment timing. A small exchange-rate movement can make a noticeable difference when paying a large tuition instalment.
- **Course-Specific Charges:** Laboratory supplies, studio materials, software, fieldwork, or professional examinations may not be covered by standard tuition.

For these reasons, it is useful to separate the cost of completing your degree from the cash you need to have available before departure and during your first few months.

## A More Useful Way to Plan Your Budget

Instead of looking at tuition alone, organise your finances into three separate amounts.

**1. Total Study Cost**

Calculate tuition for the full program, mandatory fees, insurance where applicable, books, and other course-related expenses. This gives you a clearer picture of the academic investment.

**2. Proof of Financial Support**

Check the current study-permit requirements for tuition, living expenses, and transportation. This is the amount you need to demonstrate through acceptable financial documents; it should not be confused with your actual spending forecast.

**3. Upfront Cash Requirement**

Work out what must be paid before departure or soon after arrival. Include tuition deposits, initial housing costs, travel, insurance payments, and essential setup expenses. Some of these amounts may later form part of your annual budget, but you still need access to the money at the right time.

This three-part approach is especially useful for families funding education from India because tuition payments, currency transfers, and arrival expenses often fall due at different times.

## How Can You Reduce the Cost of Studying in Canada?

Reducing costs starts with comparing the full value of a program, not simply choosing the lowest advertised fee.

- **Compare Total Program Fees:** Calculate the expected cost of all terms, rather than comparing only the first year.
- **Check Scholarships and Funding:** Look for university awards, department funding, and eligible graduate assistantships before finalising your budget.
- **Review Housing Options Early:** Compare campus accommodation, shared rentals, and transport costs around your shortlisted institutions.
- **Understand Your Deposit Terms:** Check whether your deposit is refundable and when the remaining tuition instalments are due.
- **Plan for Currency Fluctuations:** Keep some flexibility in your rupee budget instead of assuming the exchange rate will remain unchanged.

Part-time employment may be permitted for eligible students who meet the conditions of their study permit, but expected earnings should not be treated as a substitute for the funds required to apply. Plan your finances so that you can meet your study and living costs without relying on finding work after arrival.

## Is Studying in Canada Worth the Investment?

The answer depends on the program you choose, how you finance it, and what you want from your education. A higher tuition fee does not automatically mean better career outcomes, just as a lower-cost program is not necessarily the right choice for every student.

Compare the curriculum, qualification, length of study, available funding, and potential career relevance alongside the total cost. If you're considering a master's degree, also check whether the program's structure and funding opportunities align with your goals.

**The aim is not simply to find a university you can afford for the first year. It is to choose a program you can realistically finance through completion.**`,
  },
  "living-and-culture": {
    id: "03",
    vol: "VOL. III",
    slug: "living-and-culture",
    title: "Cost of Living in Canada & Culture",
    shortTitle: "Living & Culture",
    badge: "Living Costs & Student Life",
    tagline: "Accommodation, food, transport, winter and life in Canada",
    heroImage: "/images/universities/canada/university-of-saskatchewan.webp",
    pillColors: [{"label": "BIGGEST VARIABLE","bg": "#D7F77D","text": "#0C337B"},{"label": "DAILY ESSENTIALS","bg": "#B5E9F2","text": "#0C337B"},{"label": "CANADIAN LIFE","bg": "#FFD4E6","text": "#0C337B"}],
    markdown: String.raw`# Cost of Living in Canada & Culture 

Choosing a Canadian university is also a decision about the kind of everyday life you can afford. Your rent, commute, grocery options, and distance from campus can influence your monthly budget just as much as the city itself.

Two students attending universities in the same city may have very different expenses. One might share a house near campus and cook most meals, while another rents a private apartment and relies on paid transport. The difference is not simply lifestyle; it can add up over an entire degree.

For Indian students, the most useful approach is to plan around where you will live, how you will get around, and what your first few months will cost, rather than relying on a single national living-cost figure.

## 1. What Does the Cost of Living Include?

Your monthly budget should cover more than rent and groceries. Some expenses recur every month, while others appear mainly when you first arrive or when the weather changes.

| Expense category             | What to include                                                | What students should check                                          |
| ---------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------- |
| Accommodation                | Rent, applicable deposits, tenant insurance                    | Whether utilities and internet are included                         |
| Food and groceries           | Weekly groceries, cooking essentials, occasional meals out     | Access to affordable supermarkets and South Asian grocery stores    |
| Transportation               | Student transit pass, occasional rides, cycling costs          | Whether your university offers a discounted transit pass            |
| Utilities and internet       | Electricity, heating, water, Wi-Fi                             | Which bills are included in the rent                                |
| Phone                        | Monthly mobile plan and data                                   | Coverage, data allowance, and contract terms                        |
| Health and personal expenses | Required insurance, prescriptions where applicable, toiletries | Provincial and university health coverage arrangements              |
| Seasonal expenses            | Winter coat, boots, gloves, additional clothing                | What you already own and what you need to purchase locally          |
| Study and social life        | Printing, supplies, gym, outings, subscriptions                | Which services are covered by student fees or offer student pricing |

The important distinction is between monthly spending and arrival costs. Your first month may involve rent, a permitted deposit, household essentials, winter clothing, and other setup expenses before your normal routine begins.

## 2. Average Monthly Living Costs in Canada

The figures below are practical planning estimates for a student living independently or sharing accommodation. They are not official averages or guaranteed prices. Actual expenses depend on the neighbourhood, housing arrangement, university fees, and personal habits.

Illustrative currency conversion: CAD 1 ≈ ₹68. Actual exchange rates will fluctuate.

| Monthly expense              | Toronto / Vancouver | More affordable city or shared-living setup |
| ---------------------------- | ------------------- | ------------------------------------------- |
| Shared accommodation         | CAD 900–1,400       | CAD 600–900                                 |
| Utilities and internet       | CAD 100–150         | CAD 80–130                                  |
| Groceries                    | CAD 350–500         | CAD 300–450                                 |
| Transportation               | CAD 130–160         | CAD 90–120                                  |
| Personal and social expenses | CAD 200–350         | CAD 150–300                                 |
| Estimated monthly total      | CAD 1,680–2,560     | CAD 1,220–1,900                             |
| Approximate INR total        | ₹1.14–1.74 lakh     | ₹83,000–1.29 lakh                           |

These estimates assume shared accommodation and do not necessarily include every insurance, medical, academic, or one-time expense. A private apartment can push the budget substantially higher. Some universities also charge for student transit or health coverage through their fee schedules, so check whether those costs are already included.

For comparison, EduCanada advises budgeting at least CAD 23,000 annually for living expenses, while the applicable study-permit financial threshold depends on when and where you apply and your family size. Your own budget should reflect the likely cost of living at your destination, not just the minimum amount required for an application.

## 3. Accommodation: The Decision That Shapes Your Budget

Housing is often the biggest variable in a student's monthly spending. Before choosing a residence, compare the full cost of living there, not just the advertised rent.

### On-campus residence

University residences can make the transition easier because you are closer to classes and campus activities. Some options include meal plans, furniture, or utilities. However, availability, contract duration, and pricing differ by institution, and residence fees may need to be paid by term or for the academic year.

### Shared off-campus housing

Sharing a house or apartment lets students split rent and, in some cases, internet and utility bills. It can be a practical choice for students who want more control over food and living arrangements.

Before signing, check whether the room is furnished, how bills are divided, what the lease requires, and how long you are committed to staying. Confirm the applicable deposit rules for the province rather than assuming every landlord can request the same amount.

### Private accommodation

Renting an apartment alone offers more privacy, but you may be responsible for the entire rent and additional household bills. It is worth comparing this option with a private room in a shared apartment, particularly if you are moving to an expensive city.

### A useful housing calculation

Do not compare two homes on rent alone. Calculate:

Monthly housing cost = rent + utilities not included + internet + transport needed to reach campus.

A room that is slightly more expensive but within walking distance of campus may cost less overall than a cheaper room that requires a daily commute. The reverse can also be true if a transit pass is included in your student fees.

## 4. Food and Groceries: Building a Routine That Works

Food costs depend heavily on how often you cook, where you shop, and whether you have access to a kitchen. Students who prepare meals at home can generally control their spending more easily than those who rely on restaurant meals or takeaway food.

Indian students can usually find staples such as rice, atta, lentils, spices, and frozen vegetables through mainstream supermarkets and South Asian grocery stores. The selection and prices vary by location, so check the shops near your actual accommodation rather than assuming every neighbourhood has the same options.

A practical grocery routine might include:

- Planning a few meals around shared ingredients instead of buying separate items for every dish.
- Comparing weekly supermarket flyers and store-brand products.
- Buying non-perishable staples in quantities you can realistically use and store.
- Sharing basic household items with roommates where appropriate.
- Keeping restaurant meals and food delivery within a planned budget.

You do not need to abandon familiar food to manage your expenses. The more useful adjustment is learning which local shops offer good value and building a repeatable weekly shopping routine.

## 5. Transportation: Consider the Commute Before You Choose a Home

Canada's cities differ in how easy it is to get around without a car. Some university areas are well served by public transit, while others may require longer journeys or a combination of buses, trains, and walking.

Many institutions offer student transit passes or discounted fares. Check whether the pass is included in your student fees, whether it applies throughout the year, and which transport services it covers.

When comparing accommodation, consider:

- The actual journey time to your campus during class hours.
- How frequently buses or trains run on your route.
- Whether you may need transport late in the evening or during winter.
- The cost of occasional rides when public transport is unavailable or inconvenient.

Do not assume that living outside the city centre automatically saves money. Lower rent can be offset by a longer commute, extra transport expenses, and time spent travelling.

## 6. Utilities, Phone Plans, and Other Recurring Bills

Some rentals include heating, electricity, water, and internet in the monthly rent. Others charge separately, so read the rental agreement carefully before comparing properties.

Heating arrangements matter during colder months, but the effect on your bill depends on the building, heating system, local rates, and what your rental agreement covers. Do not automatically assume every winter bill will double.

Phone plans also deserve a little research. Compare monthly data allowances, coverage in your area, and whether a plan has a contract or cancellation fee. Campus Wi-Fi may reduce how much mobile data you need.

Before arriving, make a simple list of recurring payments: rent, utilities, internet, phone, transport, insurance, and subscriptions. Even small monthly charges become significant when added together over a semester.

## 7. Winter and Seasonal Expenses

For students arriving from India, winter preparation can involve both a financial and a practical adjustment. The level of cold varies by province and city, so the clothing needed in Vancouver may differ from what is suitable for Winnipeg or Edmonton.

Plan for items such as:

- A winter coat suited to the temperatures you will experience.
- Insulated footwear with good grip for snow and ice.
- Gloves, a warm hat, and layers that can be worn indoors and outdoors.
- Waterproof clothing or footwear where local conditions make them useful.

You do not necessarily need to purchase everything before departure. Check the climate of your destination and compare prices locally. Prioritise warmth, fit, and suitability over buying the most expensive branded items.

Winter can also change your routine. Walking distances that feel manageable in mild weather may become less comfortable in snow, ice, or strong winds. When choosing accommodation, think about the winter commute as well as the summer one.

## 8. How Your City Changes the Cost of Living

A university's location can affect your expenses, access to services, commute, and social life. Instead of treating all Canadian cities as one market, compare the places where your shortlisted institutions are actually located.`,
  },
 
  "scholarships": {
    id: "04",
    vol: "VOL. IV",
    slug: "scholarships",
    title: "Scholarships in Canada for Indian Students",
    shortTitle: "Scholarships & Funding",
    badge: "Funding by Degree Level",
    tagline: "Entrance awards, programme funding and research scholarships",
    heroImage: "/images/universities/canada/trent-university.webp",

    pillColors: [
      {
        label: "UNDERGRADUATE",
        bg: "#D7F77D",
        text: "#0C337B",
      },
      {
        label: "MASTER'S",
        bg: "#B5E9F2",
        text: "#0C337B",
      },
      {
        label: "PHD",
        bg: "#FFD4E6",
        text: "#0C337B",
      },
    ],

    markdown: String.raw`# Scholarships in Canada for Indian Students

  A scholarship can change the financial picture of studying in Canada, but finding the right one requires more than searching for awards that promise to cover your tuition. Each funding opportunity has its own purpose. Some reward academic performance, others prioritise financial need or leadership, and research scholarships may depend on your proposed work and the university supporting it.

  For Indian students planning a bachelor's or master's degree in Canada, the first step is to understand which awards are open to international applicants, how the funding is distributed, and whether the award fits the course you intend to pursue.

  The key is to build your scholarship strategy around your profile and target universities, rather than choosing a university solely because it advertises a large scholarship.

  ## 1. What Types of Scholarships Can You Apply For?

  Scholarships in Canada are offered by universities, research institutions, government bodies, and private organisations. The funding may be deducted from tuition, paid as a stipend, or provided as a one-time award.

  ### Merit-Based Scholarships

  These awards recognise academic achievement, strong admission results, or other indicators of excellence. Some are assessed automatically when you apply for admission, while others require a separate scholarship application.

  They may suit students with consistently strong academic records, although the exact selection criteria vary by institution.

  ### Need-Based Financial Aid

  Need-based awards consider your financial circumstances alongside the university's eligibility criteria. Applicants may need to provide information about family income, assets, expenses, and available funding.

  These awards are particularly relevant when the main barrier to studying abroad is affordability rather than academic eligibility alone.

  ### Leadership and Community-Based Awards

  Some scholarships look beyond examination results. They may consider student leadership, volunteering, community projects, initiative, and evidence that you have contributed to something beyond your own academic progress.

  A meaningful record of involvement is more useful than a long list of activities without clear responsibilities or outcomes.

  ### Research Scholarships and Graduate Funding

  Students pursuing research-oriented master's degrees or PhD programs may be considered for scholarships, research assistantships, teaching assistantships, and supervisor-funded projects.

  The availability of funding depends on the institution, department, research area, and individual opportunity. Not every postgraduate program provides financial support, and a coursework-based master's degree should not be assumed to include research funding.

  ### Entrance Awards and Tuition Reductions

  Many institutions offer awards to eligible incoming students. Some are automatically assessed using admission information, while others require an additional application, nomination, or supporting documents.

  An entrance award may cover only part of the first year's tuition, but a smaller award can still be valuable when combined with other funding.

  ## 2. Fully Funded vs Partial Scholarships

  The headline amount is only one part of a scholarship's value. You also need to understand what the award pays for and how long the funding lasts.

  | **Funding type** | **What it may cover** | **What to verify** |
  | --- | --- | --- |
  | Fully funded award | Tuition, living stipend, and potentially additional expenses | Whether all costs are covered and for how long |
  | Full tuition scholarship | Tuition fees for the specified program or period | Whether living expenses, insurance, and other fees are excluded |
  | Partial tuition award | A fixed amount or percentage of tuition | Whether it renews in subsequent years |
  | Living stipend | Regular financial support during eligible study periods | Payment schedule, duration, and conditions |
  | Research or teaching funding | Financial support connected to an academic or research role | Workload, supervisor approval, and continuation requirements |
  | Entrance scholarship | An award linked to admission or academic results | Whether a separate application is needed and what maintains eligibility |

  A full tuition scholarship is not necessarily a fully funded scholarship. If an award covers tuition but not accommodation, food, travel, or insurance, you will still need a separate plan for those expenses.

  Also check whether the scholarship is renewable. An award that applies only to the first year can reduce your initial costs without solving the financial requirements of the entire degree.

  ## 3. Major Canadian Scholarships to Know About

  The following opportunities illustrate the different kinds of funding Indian students can investigate. They are not a guarantee of eligibility or selection. Always confirm the current award rules, eligible programs, and deadlines before applying.

  ### 1. Lester B. Pearson International Scholarship

  University of Toronto | Undergraduate

  The Lester B. Pearson International Scholarship is aimed at outstanding international students entering their first undergraduate degree at the University of Toronto.

  The award is particularly relevant to students who combine strong academic performance with creativity, initiative, and meaningful involvement in their school or community.

  - Funding: Covers tuition, books, incidental fees, and residence support for up to four years, subject to the award's terms.
  - Who should explore it: International secondary-school students entering their first undergraduate program.
  - Application route: Students must be nominated by their school and apply for admission to the University of Toronto.
  - Important consideration: Students already pursuing post-secondary studies are not eligible under the published criteria.

  The nomination process makes early preparation essential. Students should speak to their school well before the relevant deadline and confirm the admission requirements for their intended intake.

  ### 2. UBC International Scholars Program

  University of British Columbia | Undergraduate

  UBC's International Scholars Program is designed for international students who demonstrate strong academic achievement, leadership, community involvement, and significant financial need.

  Unlike a scholarship assessed primarily on grades, this program also examines whether financial support is necessary for the applicant to attend UBC.

  - Funding: Award amounts depend on the student's assessed financial need and the particular award.
  - Who should explore it: Eligible international students entering their first undergraduate degree directly from secondary school.
  - Application route: A separate award application and school nomination or reference requirements may apply.
  - Important consideration: Applicants need to document their financial circumstances and meet the program's academic and admission conditions.

  This opportunity is worth investigating if you have a strong academic record and a substantial funding gap that would otherwise make university attendance difficult.

  ### 3. McCall MacBain Scholarships

  McGill University | Master's and eligible professional programs

  The McCall MacBain Scholarships support selected students pursuing eligible master's or professional degrees at McGill University. The selection process considers academic ability alongside leadership, character, community engagement, and the capacity to work constructively with others.

  - Funding: Full tuition and fees, a living stipend during academic terms, and additional support specified by the program.
  - Who should explore it: Students whose academic goals and leadership experience align with an eligible McGill program.
  - Application route: The scholarship application is separate from the application for admission to the chosen degree.
  - Important consideration: Applicants must meet the scholarship's program and eligibility conditions, including the relevant deadlines for international applicants.

  For prospective master's students, this is an example of why a scholarship application should not be reduced to grades alone. Your experiences, decisions, and contributions may also be important parts of the assessment.

  ### 4. President's International Distinction Scholarship

  University of Alberta | Undergraduate

  The University of Alberta offers this high-value entrance award to selected international undergraduate students who demonstrate exceptional academic achievement and leadership.

  - Funding: Up to CAD 120,000, payable over four years, according to the published award information.
  - Who should explore it: High-achieving international students entering the first year of an undergraduate degree.
  - Selection considerations: Academic standing, leadership, and the university's current award criteria.
  - Important consideration: The maximum award is not a guaranteed amount for every applicant. Confirm the current application process, award availability, and renewal conditions.

  Students should also investigate the university's other international entrance awards. A highly competitive flagship scholarship is not the only potential source of funding.

  ### 5. Ontario Trillium Scholarships

  Participating Ontario universities | Doctoral

  The Ontario Trillium Scholarships program supports selected outstanding international doctoral students pursuing eligible research at participating Ontario universities.

  - Funding: CAD 40,000 per year, with renewal possible for up to four years under the program's conditions.
  - Who should explore it: International applicants planning eligible full-time doctoral studies in Ontario.
  - Application route: Universities select candidates, so the admission and nomination process is institution-specific.
  - Important consideration: Availability and deadlines should be checked with the graduate studies office of the intended university.

  This award is primarily relevant to doctoral applicants. It should not be presented as a general scholarship option for bachelor's or taught master's students.

  ### What About Vanier and Other Government Research Scholarships?

  The Vanier Canada Graduate Scholarships program was discontinued as a new competition following the 2024 competition cycle, with funding transitioning into Canada's harmonised research training awards structure. It should therefore not be promoted as an open scholarship for new applicants.

  Doctoral candidates should instead check the current Canada Graduate Research Scholarship–Doctoral program and the relevant university's guidance on international eligibility. Access to funding can depend on the program's rules and the applicant's institutional status.

  ## 4. Scholarships Offered by Indian Organisations

  Your scholarship search does not need to stop at Canadian institutions. Some Indian organisations provide financial support to eligible citizens pursuing higher education overseas.

  However, it is important to distinguish a scholarship or grant from a loan scholarship. They can reduce the immediate funding burden in different ways, but they do not have the same repayment obligations.

  ### National Overseas Scholarship

  The National Overseas Scholarship is a Government of India scheme intended to support eligible students from specified disadvantaged and marginalised communities pursuing higher education abroad, including master's and doctoral programs.

  - Funding: Support may include eligible tuition, maintenance, and travel-related expenses under the scheme's rules.
  - Eligibility: Restricted to specified categories and subject to academic, income, admission, and other conditions.
  - Application route: Applications are handled through the official scheme portal during the announced application period.

  This is not a general scholarship available to every Indian student. Applicants should check the current scheme guidelines carefully to confirm their community category and other eligibility conditions.

  ### J. N. Tata Endowment Loan Scholarship

  The J. N. Tata Endowment provides merit-based loan scholarships for eligible Indian students pursuing postgraduate, doctoral, and postdoctoral studies overseas.

  - Funding type: A loan scholarship, with selected scholars potentially considered for additional travel grants or gift awards under the Endowment's terms.
  - Who should explore it: Eligible Indian graduates planning qualifying higher studies abroad.
  - Application route: Apply through the Endowment's official application process.
  - Important consideration: The support is not automatically a non-repayable grant. Review the loan conditions before including it in your financial plan.

  Students pursuing undergraduate degrees should not assume that this opportunity applies to them, as the Endowment's published eligibility excludes undergraduate study.

  ### A Note on Private Foundations

  Private foundations and trusts may offer overseas education funding, but their eligibility criteria can be narrow. Some focus on particular qualifications, financial circumstances, academic fields, or applicant backgrounds.

  Before spending time on an application, confirm that the award supports your destination country, degree level, institution, and intended intake. Do not assume that a scholarship available to Indian students studying abroad will necessarily fund every Canadian course.

  ## 5. How to Find Scholarships That Match Your Profile

  The most efficient scholarship search begins with your intended course and academic level. Once you know what you plan to study, you can narrow the search to relevant awards rather than applying indiscriminately.

  ### If You Are Applying for a Bachelor's Degree

  Start with international entrance scholarships and awards linked to secondary-school performance.

  Focus on:

  - Your Class 11 and 12 academic record and predicted or final results, as applicable.
  - Whether the award requires a school nomination.
  - Leadership, volunteering, creative work, or other meaningful involvement.
  - Whether the award is available to students entering their first undergraduate degree.
  - The deadline for admission and the separate scholarship deadline, if applicable.

  For highly competitive undergraduate awards, school nominations and early application requirements can be just as important as academic preparation.

  ### If You Are Applying for a Master's Degree

  Your search should include university entrance awards, faculty-specific funding, external scholarships, and research funding where relevant.

  Focus on:

  - Your undergraduate grades and the relevance of your academic background.
  - Whether the program is coursework-based, research-based, or mixed.
  - Research experience, projects, professional achievements, and academic references.
  - Whether funding is available for international students.
  - Whether the award covers tuition, living expenses, or only part of the total cost.

  For research-oriented programs, contacting the relevant department and understanding the funding structure may be especially useful. For coursework-based programs, check the university's financial aid and entrance award pages directly.

  ### If You Are Applying for a PhD

  Doctoral funding requires a more specialised search. Look at university fellowships, department funding packages, supervisor-funded research opportunities, and eligible national research awards.

  Focus on:

  - The strength and fit of your research proposal.
  - Your academic and research record.
  - Potential supervisors and the funding available in their research groups.
  - Whether the award is open to international candidates.
  - The duration of funding and any teaching or research responsibilities.

  A PhD offer and a funded PhD offer are not the same thing. Ask for the financial terms in writing, including stipend amounts, tuition arrangements, renewal conditions, and expected work commitments.

  ## 6. What Scholarship Committees May Look For

  Every scholarship has its own assessment framework. Some place most of the weight on academic achievement, while others consider financial need, research potential, leadership, or community contribution.

  A strong application makes the evidence relevant to the award rather than relying on a generic list of accomplishments.

  ### Academic Performance

  Provide accurate transcripts, grading information, and any required academic documents. If the award sets a minimum academic threshold, meeting it makes you eligible for consideration; it does not guarantee selection.

  ### Leadership and Contribution

  Explain what you actually did in a project, society, workplace, or community initiative. Describe your responsibilities, the decisions you made, and the outcome where it can be demonstrated.

  ### Purpose and Direction

  Your application should make a clear connection between the proposed course, your past experience, and your future goals. Avoid broad claims about wanting to succeed internationally without explaining why the particular program is relevant to you.

  ### References

  Choose referees who can speak directly about your academic ability, research potential, professional work, or leadership. Give them enough time and provide accurate details about the scholarship and its selection criteria.

  ### Financial Documentation

  For need-based awards, provide complete and consistent information about your financial circumstances. Follow the institution's requirements for documents and disclosure rather than estimating or omitting figures.

  There is no universal IELTS score, GPA, or percentage that guarantees a Canadian scholarship. Meet the specific eligibility criteria first, then assess how well your application addresses the award's actual selection priorities.

  ## 7. How to Apply for Scholarships in Canada From India

  A well-organised application process helps you avoid missing deadlines or discovering late in the process that an award requires a nomination or separate submission.

  ### Step 1: Shortlist Universities and Courses

  Identify suitable bachelor's, master's, or doctoral programs. Check their admission requirements, fees, and whether international students can access institutional funding.

  ### Step 2: Create a Scholarship Tracker

  For every relevant award, record:

  - Scholarship name and official application link.
  - Eligible degree level and applicant category.
  - Funding amount and what it covers.
  - Minimum eligibility criteria.
  - Required documents and nomination requirements.
  - Admission deadline and scholarship deadline.
  - Renewal conditions and any service or work obligations.

  Keep the information from official scholarship pages, since deadlines and eligibility can change between intakes.

  ### Step 3: Prepare Your Documents Early

  Depending on the award, you may need academic transcripts, certificates, a CV or résumé, personal statements, reference letters, financial documents, and evidence of leadership or research.

  Prepare a reliable core set of documents, but tailor each application to the requirements of the specific award.

  ### Step 4: Apply for Admission and Funding in the Correct Order

  Some scholarships require an offer of admission, while others require you to apply for admission and the scholarship separately. A small number also require school or university nominations.

  Follow the exact sequence for each award. Do not assume that submitting a university application automatically enters you into every scholarship competition.

  ### Step 5: Tailor Your Statement and Supporting Evidence

  Explain why you fit the scholarship's purpose. Use concrete examples from your education, research, employment, or community involvement rather than relying on general statements about being hardworking or ambitious.

  ### Step 6: Track Decisions and Conditions

  Check your application portal and email regularly. If selected, read the award terms carefully before accepting. Confirm the payment schedule, renewal criteria, and any remaining costs you must finance yourself.

  ## 8. Common Scholarship Mistakes to Avoid

  - Applying without checking eligibility: An award may be limited to a specific degree level, institution, or applicant category.
  - Confusing a loan with a grant: Funding that must be repaid should be treated differently from non-repayable assistance.
  - Relying on outdated deadlines: Scholarship dates can change every intake.
  - Assuming every award is fully funded: Verify whether living costs and other expenses are included.
  - Using the same statement everywhere: Different awards may prioritise academic merit, financial need, research, or leadership.
  - Ignoring smaller awards: A partial scholarship can still reduce the amount you need to finance.
  - Treating a scholarship as a visa guarantee: A scholarship may form part of your financial documentation, but it does not guarantee a study permit or any future immigration outcome.

  ## 9. Build a Funding Plan, Not Just a Scholarship List

  Before accepting an offer, calculate the remaining cost after confirmed funding has been deducted. Include tuition, living expenses, insurance, travel, and any costs not covered by the award.

  For example, a CAD 10,000 tuition award may be valuable, but its impact depends on the total fee and whether it is renewable. A smaller recurring award could provide more support across a longer program than a larger one-time payment.

  Also keep a backup plan. Scholarship decisions are competitive, and you should not commit to a program on the assumption that funding you have not yet secured will arrive.

  The strongest approach is to combine realistic university choices, suitable scholarship applications, and a financial plan that remains workable even if you do not receive your first-choice award.`,
  },

  "post-study-work-visa": {
    id: "05",
    vol: "VOL. V",
    slug: "post-study-work-visa",
    title: "Post-Study Work Visa in Canada",
    shortTitle: "Post-Study Work Visa",
    badge: "PGWP & Work Pathways",
    tagline: "PGWP eligibility, application timing and potential work opportunities",
    heroImage: "/images/universities/canada/university-of-windsor.webp",

    pillColors: [
      {
        label: "MASTER'S",
        bg: "#D7F77D",
        text: "#0C337B",
      },
      {
        label: "APPLICATION WINDOW",
        bg: "#B5E9F2",
        text: "#0C337B",
      },
      {
        label: "PR PATHWAY",
        bg: "#FFD4E6",
        text: "#0C337B",
      },
    ],

    markdown: String.raw`# Post-Study Work Visa in Canada

  For many international students, studying in Canada is not only about earning a qualification. It is also an opportunity to gain professional experience, understand the Canadian job market, and explore possible career options after graduation.

  Canada's Post-Graduation Work Permit (PGWP) allows eligible graduates to work in Canada after completing their studies. It can provide time to apply their skills in a professional setting, build relevant work experience, and assess whether they may qualify for a longer-term immigration pathway.

  However, graduating from a Canadian institution does not automatically make you eligible for a PGWP. Your institution, program, study history, language proficiency, and the rules applicable to your application can all affect eligibility.

  For Indian students choosing a university or college, understanding these requirements before enrolling is an important part of making an informed study-abroad decision.

  ## 1. What Is the Post-Graduation Work Permit (PGWP)?

  The Post-Graduation Work Permit is an open work permit available to eligible graduates of qualifying Canadian institutions and programs. Unlike an employer-specific work permit, it generally allows the holder to work for eligible employers across Canada without needing a separate job offer from a particular employer to obtain the permit.

  The PGWP is designed to help eligible international graduates gain Canadian work experience after completing their education.

  Here is what it can mean for your plans:

  - Professional experience: Apply the knowledge and skills gained during your Canadian degree or diploma.
  - Career exploration: Apply for suitable roles and gain exposure to Canadian workplace expectations.
  - Employment flexibility: An open work permit generally provides more freedom to change employers than an employer-specific permit, subject to the permit's conditions.
  - Potential immigration options: Eligible Canadian work experience may help you qualify for certain permanent residence programs, depending on their requirements at the time.

  The distinction is important: a PGWP gives eligible graduates temporary work authorisation. It does not guarantee a job, permanent residency, or an extension of their stay beyond the permit's validity.

  ## 2. Who Is Eligible for a PGWP in Canada?

  PGWP eligibility depends on several requirements, not simply whether you studied at a Canadian college or university.

  ### Study at a PGWP-Eligible Institution

  You must complete an eligible program at a designated learning institution (DLI) that offers a qualifying program for the PGWP.

  A school appearing on Canada's DLI list does not automatically mean every program it offers qualifies. Check the institution's PGWP status and the specific program's eligibility before paying a deposit or accepting an offer.

  ### Complete an Eligible Program

  In general, your program must meet the minimum duration requirements and other applicable conditions. Most qualifying programs must be at least eight months long, while certain Quebec programs have different duration rules.

  You must also satisfy the applicable study requirements, including rules relating to full-time enrolment and the completion of your program. Exceptions and specific conditions may apply, so review the official criteria for your circumstances.

  ### Meet the Language Requirement

  Most PGWP applicants who apply under the rules introduced on November 1, 2024, must provide proof of English or French proficiency.

  The minimum language level depends on the qualification completed:

  - Bachelor's, master's, and doctoral graduates: Generally require CLB 7 in English or NCLC 7 in French across all four language abilities.
  - Graduates of other eligible university programs: Generally require CLB 7 or NCLC 7.
  - Graduates of eligible college and other non-university programs: Generally require CLB 5 or NCLC 5.

  Applicants must use an accepted language test and meet the applicable validity and evidence requirements. Do not assume that the test score used for university admission will automatically satisfy the PGWP requirement.

  ### Check Whether Your Field of Study Matters

  Field-of-study rules apply to certain non-degree programs, particularly where the applicant's study permit application falls under the rules introduced on November 1, 2024.

  Bachelor's, master's, and doctoral graduates are generally exempt from the field-of-study requirement. For other eligible college and non-university programs, the qualification may need to correspond to an eligible field identified through its Classification of Instructional Programs (CIP) code.

  These rules can be affected by when you applied for your study permit and the applicable list of eligible fields. A course title alone is not enough to establish eligibility.

  Before choosing a college diploma or certificate, verify the exact program and its CIP code against the official PGWP requirements. This check should happen before you commit to the course, not after graduation.

  ## 3. How Long Can You Stay and Work in Canada After Studying?

  The duration of a post-study work visa in Canada depends on the type and length of your qualification, the applicable PGWP rules, and your passport's expiry date.

  ### Master's degree

  # Up to 3 years

  Eligible master's graduates may qualify for a three-year PGWP if their program meets the applicable requirements, including the minimum program duration of eight months.

  ### Bachelor's or doctoral degree

  # Up to 3 years

  Eligible graduates may qualify for a permit of up to three years, subject to the applicable rules and passport validity.

  ### Eligible college or other non-degree program

  # Depends on the program

  The permit may reflect the length of the completed program. Programs lasting two years or more may qualify for a permit of up to three years if all relevant requirements are met.

  These are general duration guidelines, not guarantees. The final permit length is determined under the rules that apply to your case.

  ### Does a One-Year Master's Degree Qualify for a Three-Year PGWP?

  An eligible master's program lasting at least eight months may qualify its graduate for a PGWP of up to three years, even if the program itself is shorter than two years.

  This makes the eligibility of the specific master's program important. Before applying, confirm that the institution and program qualify and that you meet the other applicable requirements.

  ### What If Your Course Is Shorter Than Eight Months?

  Programs shorter than the applicable minimum duration generally do not qualify for a PGWP. Certain Quebec programs have different minimum-duration rules.

  If your main objective is to work in Canada after graduation, verify the permit implications before selecting a short course or certificate.

  ## 4. Can You Extend a PGWP?

  A PGWP is generally issued only once. Completing another course later does not automatically entitle you to a second PGWP, and you should not plan your education around the assumption that you can simply renew the permit.

  There are limited situations in which your status or work authorisation may be extended or changed.

  ### Passport-Validity Limitations

  A PGWP cannot normally extend beyond your passport's validity. If your permit was issued for a shorter period because your passport was expiring, you may be able to apply for the remaining eligible duration after renewing your passport, subject to IRCC's rules and application procedure.

  This is different from extending a permit simply because you want more time to find a job.

  ### Bridging Open Work Permit

  A Bridging Open Work Permit (BOWP) may be available to certain applicants who have submitted an eligible permanent residence application and meet the relevant conditions.

  It is not a general extension for every PGWP holder. Eligibility depends on the immigration program, the status of the permanent residence application, and other requirements.

  ### Employer-Specific Work Permit

  Some graduates may qualify for another type of work permit through an employer, depending on the applicable program and requirements. An employer-specific permit may restrict the holder to the employer or employment conditions specified in the permit.

  A job offer alone does not guarantee eligibility. Additional requirements may apply, including a Labour Market Impact Assessment (LMIA) where required, or an applicable exemption.

  The practical takeaway: Treat your PGWP as a defined period of work authorisation. If you may need another status later, research the relevant pathway early rather than waiting until the permit is close to expiry.

  ## 5. How to Apply for a Post-Graduation Work Permit

  Eligible graduates can generally apply for a PGWP online from within Canada or from outside Canada, subject to the applicable requirements.

  You have up to 180 days after completing your program to apply. Your study permit must also have been valid at some point during the relevant 180-day period. Other rules determine whether you can remain in Canada or work while your application is being processed.

  ### Step 1: Confirm Your Eligibility

  Before starting the application, check:

  - Whether your institution and completed program qualify.
  - Whether you meet the applicable language requirements.
  - Whether a field-of-study requirement applies to your program.
  - Whether your study history meets the relevant conditions.
  - Whether your passport is valid for the period you may be eligible to receive.

  ### Step 2: Prepare Your Documents

  The documents required depend on your circumstances, but may include:

  - An official completion letter from your institution.
  - Your official transcript or an accepted copy of your transcript.
  - Proof of language results, where required.
  - Proof of an eligible field of study, where applicable.
  - Your passport and current immigration documents.
  - Other documents requested by IRCC for your application.

  Use the personalised checklist provided through the official application process. Do not rely on an old checklist from another applicant, as the requirements can differ.

  ### Step 3: Submit Your Application Online

  Complete the applicable work permit application, upload the required documents, and pay the current fee. Review your answers and attachments before submitting, particularly your education history and evidence of completion.

  Keep a copy of your submission confirmation and payment receipt.

  ### Step 4: Understand Your Work Authorisation While Waiting

  Some graduates may work full-time while IRCC processes their PGWP application, but only if they meet the specific conditions.

  For example, when submitting the application, they generally must have a valid study permit, have completed their program, have been authorised to work off campus during their studies, and have complied with the applicable work-hour limits.

  Do not assume that submitting an application automatically gives you permission to work. Check the official conditions that apply to your status and retain the documents needed to demonstrate your authorisation.

  ## 6. What Does a PGWP Cost?

  The published PGWP application fee is CAD 255. Additional costs may apply if you need to restore your status or meet other requirements.

  | **Fee** | **Amount** |
  | --- | --- |
  | PGWP application and open work permit holder fees | CAD 255 |
  | Other applicable charges | Depends on your circumstances |

  Check the official IRCC fee schedule before applying, since immigration fees can change. Budget separately for document preparation, language testing where required, and any other costs relevant to your case.

  ## 7. Can a PGWP Lead to Permanent Residency in Canada?

  A PGWP can give eligible graduates an opportunity to gain Canadian work experience that may be relevant to certain permanent residence programs. However, the permit itself does not provide permanent residency.

  One possible route is the Canadian Experience Class (CEC), part of the Express Entry system. Applicants must meet the program's requirements, including qualifying Canadian work experience, language proficiency, and other eligibility conditions.

  Not every job counts as qualifying work experience for every immigration pathway. For example, work performed while you were a full-time student generally does not count towards the Canadian Experience Class minimum work-experience requirement.

  Other pathways may include eligible provincial nominee programs or additional immigration programs, depending on your qualifications, work experience, location, and the rules in force when you apply.

  Your eligibility and chances of receiving an invitation can change as immigration policies and selection criteria change. A PGWP should therefore be treated as an opportunity to build a career and explore eligible options, not a guarantee of settlement.

  ## 8. Advantages and Limitations of the PGWP

  ### Advantages

  - Open work authorisation: Eligible holders generally have flexibility to work for different employers, subject to permit conditions.
  - Canadian work experience: Graduates can gain professional experience after completing their education.
  - Career development: Work experience can help graduates develop industry knowledge, professional networks, and transferable skills.
  - Potential immigration options: Qualifying work experience may support an application under an eligible permanent residence pathway.

  ### Limitations

  - Eligibility is not automatic: Graduating from a Canadian institution does not by itself establish PGWP eligibility.
  - Employment is not guaranteed: A work permit allows eligible employment but does not secure a job.
  - The permit has a defined duration: Graduates must plan around its expiry date and should not assume that it can be renewed.
  - Permanent residence is a separate process: Applicants must meet the criteria of the immigration pathway they pursue.
  - Rules may change: Students should check the requirements that apply to their own application dates and circumstances.

  ## 9. Plan Your Canadian Education With the PGWP in Mind

  If working in Canada after graduation is part of your long-term plan, evaluate more than the university's ranking or the course's popularity.

  Before selecting a program, confirm its PGWP eligibility, the qualification you will receive, its duration, the applicable language and field-of-study requirements, and the likely cost of completing the course. You should also assess whether the program fits your career goals and the kind of work you intend to pursue.

  For bachelor's and master's applicants, this means checking the eligibility of the degree and institution. For students considering college diplomas or certificates, it is especially important to verify the program-specific requirements before enrolling.

  A well-informed study decision begins with understanding both the education you will receive and the options available after graduation.`,
  },

};

const CANADA_BOOK_GUIDES = Object.values(CANADA_GUIDES).map(({ id, vol, slug, title, shortTitle, badge }) => ({ id, vol, slug, title, shortTitle, badge }));

/* Parse headings, paragraphs, bullet lists, and Markdown tables without packages. */
function parseSections(markdown) {
  const intro = [];
  const chapters = [];
  let current = intro;
  for (const line of markdown.split(/\r?\n/)) {
    if (/^# /.test(line)) continue;
    if (/^## /.test(line)) {
      const chapter = { heading: line.slice(3), lines: [] };
      chapters.push(chapter);
      current = chapter.lines;
      continue;
    }
    current.push(line);
  }
  return { intro, chapters };
}

function Inline({ value = "" }) {
  return value.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-bold text-[#0C337B]">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

function MarkdownContent({ lines }) {
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line || line === "---") { i++; continue; }
    if (/^### /.test(line)) {
      blocks.push({ type: "heading", text: line.slice(4) });
      i++;
      continue;
    }
    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i].trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
        if (!cells.every((cell) => /^:?-+:?$/.test(cell))) rows.push(cells);
        i++;
      }
      blocks.push({ type: "table", rows });
      continue;
    }
    if (/^(?:- |\d+\. )/.test(line)) {
      const items = [];
      const ordered = /^\d+\. /.test(line);
      while (i < lines.length && /^(?:- |\d+\. )/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^(?:- |\d+\. )/, ""));
        i++;
      }
      blocks.push({ type: "list", items, ordered });
      continue;
    }
    const paragraph = [];
    while (i < lines.length && lines[i].trim() && !/^(?:### |## |# |- |\d+\. |\|)/.test(lines[i].trim())) {
      paragraph.push(lines[i].trim());
      i++;
    }
    if (paragraph.length) blocks.push({ type: "paragraph", text: paragraph.join(" ") });
    else i++;
  }

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.type === "heading") return <h3 key={index} className="pt-3 text-[17px] font-extrabold leading-[1.35] text-[#0C337B] sm:text-[19px]"><Inline value={block.text} /></h3>;
        if (block.type === "paragraph") return <p key={index} className="text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]"><Inline value={block.text} /></p>;
        if (block.type === "list") {
          const Tag = block.ordered ? "ol" : "ul";
          return <Tag key={index} className={block.ordered ? "list-decimal space-y-3 pl-5" : "space-y-3"}>
            {block.items.map((text, n) => <li key={n} className="flex items-start gap-2.5 text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]"><CheckCircle2 size={16} className="mt-1 shrink-0 text-[#1765F5]" /><span className="min-w-0"><Inline value={text} /></span></li>)}
          </Tag>;
        }
        if (block.type === "table") return <div key={index} className="max-w-full overflow-x-auto rounded-xl border border-[#DAE7FA]"><table className="w-full min-w-[540px] border-collapse text-left text-[12px] leading-[1.6]"><thead className="bg-[#EAF2FF] text-[#0C337B]"><tr>{(block.rows[0] || []).map((cell, n) => <th key={n} className="border-b border-[#D6E5FA] px-3 py-3 font-bold"><Inline value={cell} /></th>)}</tr></thead><tbody>{block.rows.slice(1).map((row, n) => <tr key={n} className={n % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}>{row.map((cell, j) => <td key={j} className="border-b border-[#E9F0F9] px-3 py-2.5 align-top text-[#526B8C]"><Inline value={cell} /></td>)}</tr>)}</tbody></table></div>;
        return null;
      })}
    </div>
  );
}

export function generateStaticParams() {
  return CANADA_BOOK_GUIDES.map(({ slug }) => ({ guide: slug }));
}

export async function generateMetadata({ params }) {
  const { guide } = await params;
  const data = CANADA_GUIDES[guide];
  if (!data) return { title: "Guide Not Found" };
  return { title: `${data.title} | University Yatra`, description: data.tagline };
}

export default async function GuideDetailPage({ params }) {
  const { guide } = await params;
  const guideData = CANADA_GUIDES[guide];
  if (!guideData) notFound();

  const { intro, chapters } = parseSections(guideData.markdown);
  const whatsappUrl = `https://wa.me/919286844550?text=${encodeURIComponent(`Hi University Yatra, I need guidance on ${guideData.title}.`)}`;

  return (
    <>
      <Navbar active="Destinations" />
      <main className="min-h-screen w-full overflow-x-hidden bg-[#F8FAFC]">
        {/* USA-STYLE PHOTO HERO */}
        <section className="relative isolate w-full overflow-hidden bg-[#0C337B] text-white lg:min-h-[530px]">
          <div className="pointer-events-none absolute inset-0 -z-20"><Image src={guideData.heroImage} alt={guideData.title} fill priority sizes="100vw" className="object-cover object-center" /></div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[#061F40]/60" />
          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-4 pb-10 pt-[112px] text-center sm:px-6 sm:pb-14 sm:pt-[130px] lg:min-h-[530px] lg:justify-center lg:px-8 lg:py-16">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-white/85 sm:text-[12px]"><Link href="/" className="hover:text-white">Home</Link><span>/</span><Link href="/study-in-canada" className="hover:text-white">Study in Canada</Link><span>/</span><span className="font-bold text-white">{guideData.shortTitle}</span></div>
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
              <div className="rounded-3xl border border-[#A2C1FB]/40 bg-[#EBF3FE] p-5 shadow-sm sm:p-8"><div className="flex items-center gap-2 text-[#1765F5]"><Compass size={18} /><span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">Executive Summary</span></div><h2 className="mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">Navigating {guideData.shortTitle}</h2><div className="mt-3"><MarkdownContent lines={intro} /></div></div>
              {chapters.map((chapter, index) => <article key={`${guideData.id}-${index}`} className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#A2C1FB] hover:shadow-md sm:p-8"><div className="flex items-start gap-3 sm:gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5] sm:h-11 sm:w-11"><BookOpen size={21} /></span><h2 className="min-w-0 text-[19px] font-extrabold leading-[1.3] tracking-tight text-[#0C337B] sm:text-[22px]">{chapter.heading}</h2></div><div className="mt-5 border-t border-slate-100 pt-5"><MarkdownContent lines={chapter.lines} /></div></article>)}
            </div>
            <aside className="min-w-0 space-y-6">
              <div id="contact-advisory" className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-[#E8F0FE] p-6 shadow-sm sm:p-7"><span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">1-on-1 Student Guidance</span><h3 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">Plan Your Canada Journey With an Expert</h3><div className="mt-5 flex flex-col gap-2.5"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#1EB956]"><MessageCircle size={16} /> Chat on WhatsApp</a><Link href="/counselling" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1765F5] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#0C337B]">Book Free Consultation <ArrowRight size={15} /></Link></div></div>
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-7"><div className="flex items-center justify-between gap-2"><h3 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">Other Canada Guides</h3><span className="font-mono text-[10px] text-[#1765F5]">Series</span></div><div className="mt-4 space-y-2.5">{CANADA_BOOK_GUIDES.filter((item) => item.slug !== guide).map((item) => <Link key={item.id} href={`/study-in-canada/${item.slug}`} className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]"><span className="min-w-0"><span className="block">{item.title}</span><span className="mt-1 block text-[11px] font-medium text-[#64748B]">{item.badge}</span></span><span className="shrink-0 font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">{item.vol} →</span></Link>)}</div></div>
            </aside>
          </div>
        </section>
      </main>
      <UniversityFooter />
    </>
  );
}
