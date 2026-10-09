import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInUkHero from '@/components/StudyInUk/StudyInUkHero';
import OnlineDegreeSection from "@/components/StudyInUk/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInUk/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInUk/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInUk/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInUk/UniversityCarousel";
import CostOfStudyingUk from "@/components/StudyInUk/CostOfStudyingUk";
import Testimonials from "@/components/StudyInUk/Testimonials";
import GlobalEducationCTA from "@/components/StudyInUk/GlobalEducationCTA";



export const metadata = {
  title: "Study in UK | Top Universities & Admission Guide - University Yatra",
  description:
    "Explore study opportunities in the UK with University Yatra. Compare universities, undergraduate and postgraduate programs, admission requirements, study destinations, and choose the right pathway for your academic goals.",
  keywords:
    "study in UK, UK universities, study abroad UK, bachelors in UK, masters in UK, UK admission guide, study in United Kingdom, higher education UK, University Yatra",
  openGraph: {
    title: "Study in UK | Universities, Programs & Admission Guidance",
    description:
      "Explore universities, degree programs, and study opportunities across the UK with guidance from University Yatra.",
    type: "website",
  },
};


export default function StudyInUkPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInUkHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        {/* <DegreeComparison /> */}
        <CostOfStudyingUk />
        <Testimonials />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}
