import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import AdmissionHero from "@/components/StudentServices/AddmissionApplication/AdmissionHero";
import AbroadChecklist from "@/components/StudentServices/AddmissionApplication/AbroadChecklist";
import AdmissionSupport from "@/components/StudentServices/AddmissionApplication/AdmissionSupport";
import WhyUniversityYatra from "@/components/StudentServices/AddmissionApplication/WhyUniversityYatra";
import VideoLed from "@/components/StudentServices/AddmissionApplication/VideoLed";
import AdmissionFAQ from "@/components/StudentServices/AddmissionApplication/AdmissionFAQ";
import AssessmentForm from "@/components/StudentServices/AddmissionApplication/AssessmentForm";


export const metadata = {
  title: "Test Preparation for IELTS, TOEFL, PTE & More | University Yatra",
  description:
    "Prepare for IELTS, TOEFL, PTE, GRE, GMAT and other entrance exams with University Yatra. Get personalised test preparation guidance, exam strategies and expert support to achieve your study abroad goals.",
  keywords: [
    "test preparation",
    "IELTS preparation",
    "TOEFL preparation",
    "PTE preparation",
    "GRE preparation",
    "GMAT preparation",
    "study abroad entrance exams",
    "English proficiency tests",
    "exam preparation guidance",
    "test preparation counselling",
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
