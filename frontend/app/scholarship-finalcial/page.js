import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import AdmissionHero from "@/components/StudentServices/ScholarshipFinalcial/AdmissionHero";
import AbroadChecklist from "@/components/StudentServices/ScholarshipFinalcial/AbroadChecklist";
import AdmissionSupport from "@/components/StudentServices/ScholarshipFinalcial/AdmissionSupport";
import WhyUniversityYatra from "@/components/StudentServices/ScholarshipFinalcial/WhyUniversityYatra";
import VideoLed from "@/components/StudentServices/ScholarshipFinalcial/VideoLed";
import AdmissionFAQ from "@/components/StudentServices/ScholarshipFinalcial/AdmissionFAQ";
import AssessmentForm from "@/components/StudentServices/ScholarshipFinalcial/AssessmentForm";


export const metadata = {
  title:
    "Scholarship & Financial Aid Assistance | University Yatra",

  description:
    "Explore scholarship opportunities and financial aid options with University Yatra. Get expert guidance on merit-based scholarships, need-based financial assistance, education funding and application support to make your study abroad journey more affordable.",

  keywords: [
    "scholarship assistance",
    "study abroad scholarships",
    "financial aid assistance",
    "international student scholarships",
    "merit based scholarships",
    "need based financial aid",
    "study abroad funding",
    "education funding assistance",
    "scholarship application guidance",
    "international education financial support",
    "scholarship counselling",
    "University Yatra",
  ],
};

export default function AdmissionApplicationPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/*1 Hero Section */}
      <AdmissionHero />
      
      <AbroadChecklist />

      <AdmissionSupport />

      <WhyUniversityYatra />

      <VideoLed />

      <AdmissionFAQ />

      <AssessmentForm />
      
      <UniversityFooter />
    </main>
  );
}
