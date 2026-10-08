import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInEuropeHero from '@/components/StudyInEurope/StudyInEuropeHero';
import OnlineDegreeSection from "@/components/StudyInEurope/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInEurope/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInEurope/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInEurope/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInEurope/UniversityCarousel";
import DegreeComparison from "@/components/StudyInEurope/DegreeComparison";
import CostOfStudyingEurope from "@/components/StudyInEurope/CostOfStudyingEurope";
import GlobalEducationCTA from "@/components/StudyInEurope/GlobalEducationCTA";


export const metadata = {
  title: "Study in Europe | Top Universities & Admission Guide - University Yatra",
  description: "Explore study opportunities across Europe with University Yatra. Compare universities, degree programs, admission requirements, study destinations, and choose the right pathway for your academic goals.",
  keywords: "study in Europe, European universities, study abroad Europe, bachelors in Europe, masters in Europe, Europe admission guide, study in European countries, University Yatra",
  openGraph: {
    title: "Study in Europe | Universities, Programs & Admission Guidance",
    description: "Explore universities, degree programs, and study destinations across Europe with guidance from University Yatra.",
    type: "website",
  },
};

export default function StudyInEuropePage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInEuropeHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        {/* <DegreeComparison /> */}
        <CostOfStudyingEurope />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}
