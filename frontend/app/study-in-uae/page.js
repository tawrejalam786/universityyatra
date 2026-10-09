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
  title: "Study in UAE | Top Universities & Admission Guide - University Yatra",
  description:
    "Explore study opportunities in the UAE with University Yatra. Compare universities in Dubai, Abu Dhabi, and other Emirates, undergraduate and postgraduate programs, admission requirements, and choose the right pathway for your academic and career goals.",
  keywords:
    "study in UAE, UAE universities, study abroad UAE, study in Dubai, study in Abu Dhabi, bachelors in UAE, masters in UAE, UAE admission guide, universities in Dubai, higher education UAE, UAE student visa, courses in UAE, University Yatra",
  openGraph: {
    title: "Study in UAE | Universities, Programs & Admission Guidance",
    description:
      "Explore universities, degree programs, and study opportunities across the UAE with admission guidance from University Yatra.",
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
