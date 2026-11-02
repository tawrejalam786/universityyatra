import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import TextPreHero from "@/components/StudentServices/AddmissionApplication/TextPreHero";


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

export default function CareerCounsellingPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/*1 Hero Section */}
      <TextPreHero />
      
      <UniversityFooter />
    </main>
  );
}
