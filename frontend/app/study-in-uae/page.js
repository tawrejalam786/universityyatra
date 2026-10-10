import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInUaeHero from '@/components/StudyInUae/StudyInUaeHero';
import OnlineDegreeSection from "@/components/StudyInUae/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInUae/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInUae/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInUae/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInUae/UniversityCarousel";
import CostOfStudyingUae from "@/components/StudyInUae/CostOfStudyingUae";
import Testimonials from "@/components/StudyInUae/Testimonials";
import GlobalEducationCTA from "@/components/StudyInUae/GlobalEducationCTA";


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


export default function StudyInUaePage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInUaeHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        {/* <DegreeComparison /> */}
        <CostOfStudyingUae />
        <Testimonials />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}
