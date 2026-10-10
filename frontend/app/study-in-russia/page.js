import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInAustraliaHero from '@/components/StudyInAustralia/StudyInAustraliaHero';
import OnlineDegreeSection from "@/components/StudyInAustralia/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInAustralia/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInAustralia/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInAustralia/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInAustralia/UniversityCarousel";
import CostOfStudyingAustralia from "@/components/StudyInAustralia/CostOfStudyingAustralia";
import Testimonials from "@/components/StudyInAustralia/Testimonials";
import GlobalEducationCTA from "@/components/StudyInAustralia/GlobalEducationCTA";




export const metadata = {
  title: "Study in Australia | Top Universities & Admission Guide - University Yatra",
  description:
    "Explore study opportunities in Australia with University Yatra. Compare top universities in Sydney, Melbourne, Brisbane, Perth, and Adelaide. Discover undergraduate and postgraduate programs, scholarships, admission requirements, and student visa guidance to plan your academic future.",
  keywords:
    "study in Australia, Australia universities, study abroad Australia, study in Sydney, study in Melbourne, study in Brisbane, study in Perth, study in Adelaide, bachelors in Australia, masters in Australia, MBA in Australia, top universities in Australia, Australia admission guide, scholarships in Australia, higher education Australia, Australia student visa, courses in Australia, University Yatra",
  openGraph: {
    title: "Study in Australia | Universities, Programs & Admission Guidance",
    description:
      "Explore leading Australian universities, undergraduate and postgraduate programs, scholarships, and study opportunities with admission guidance from University Yatra.",
    type: "website",
  },
};




export default function StudyInAustraliaPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInAustraliaHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        <CostOfStudyingAustralia />
        <Testimonials />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}
