import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInIrelandHero from '@/components/StudyInIreland/StudyInIrelandHero';
import OnlineDegreeSection from "@/components/StudyInIreland/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInIreland/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInIreland/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInIreland/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInIreland/UniversityCarousel";
import CostOfStudyingIreland from "@/components/StudyInIreland/CostOfStudyingIreland";
import Testimonials from "@/components/StudyInIreland/Testimonials";
import GlobalEducationCTA from "@/components/StudyInIreland/GlobalEducationCTA";


export const metadata = {
  title: "Study in Ireland | Top Universities & Admission Guide - University Yatra",
  description:
    "Explore study opportunities in Ireland with University Yatra. Compare top Irish universities, undergraduate and postgraduate programs, admission requirements, scholarships, and choose the right study pathway for your career goals.",
  keywords:
    "study in Ireland, Ireland universities, study abroad Ireland, bachelors in Ireland, masters in Ireland, Ireland admission guide, study in Dublin, higher education Ireland, Ireland student visa, courses in Ireland, University Yatra",
  openGraph: {
    title: "Study in Ireland | Universities, Programs & Admission Guidance",
    description:
      "Explore universities, degree programs, and study opportunities across Ireland with expert admission guidance from University Yatra.",
    type: "website",
  },
};


export default function StudyInIrelandPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInIrelandHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        {/* <DegreeComparison /> */}
        <CostOfStudyingIreland />
        <Testimonials />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}
