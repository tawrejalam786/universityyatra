// Backup of original page
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";
import StudyInIndiaHero from "@/components/StudyInIndia/StudyInIndiaHero";
import WhyStudyInIndia from "@/components/StudyInIndia/WhyStudyInIndia";
import KeyBenefits from "@/components/StudyInIndia/KeyBenefits";
import UniversitiesGrid from "@/components/StudyInIndia/UniversitiesGrid";
import InDemandProfessions from "@/components/StudyInIndia/InDemandProfessions";
import InDemandCourses from "@/components/StudyInIndia/InDemandCourses";
import OnlineVsCampus from "@/components/StudyInIndia/OnlineVsCampus";
import CostBreakdown from "@/components/StudyInIndia/CostBreakdown";
import FAQSection from "@/components/StudyInIndia/FAQSection";
import CTASection from "@/components/StudyInIndia/CTASection";

export const metadata = {
  title: "Study in India | Top Universities & Admission Guide - University Yatra",
  description: "Explore flexible online and on-campus degree programs from top NAAC A+ accredited Indian universities. Complete Bachelor's, Master's, and DBA programs while you work.",
  keywords: "study in india, online degree india, indian universities, distance learning india, online MBA india, bachelor degree online india",
  openGraph: {
    title: "Study in India - Flexible Learning with Recognized Degrees",
    description: "Pursue Bachelor's and Master's programs from recognized Indian universities. Compare multiple universities, WES-recognized options available.",
    type: "website",
  }
};

export default function StudyInIndiaPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInIndiaHero />
        <WhyStudyInIndia />
        <KeyBenefits />
        <UniversitiesGrid />
        <InDemandProfessions />
        <InDemandCourses />
        <OnlineVsCampus />
        <CostBreakdown />
        <FAQSection />
        <CTASection />
      </main>
      <UniversityFooter />
    </>
  );
}
