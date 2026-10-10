import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInNewZealandHero from '@/components/StudyInNewZealand/StudyInNewZealandHero';
import OnlineDegreeSection from "@/components/StudyInNewZealand/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInNewZealand/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInNewZealand/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInNewZealand/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInNewZealand/UniversityCarousel";
import CostOfStudyingNewZealand from "@/components/StudyInNewZealand/CostOfStudyingNewZealand";
import Testimonials from "@/components/StudyInNewZealand/Testimonials";
import GlobalEducationCTA from "@/components/StudyInNewZealand/GlobalEducationCTA";




export const metadata = {
  title: "Study in New Zealand | Top Universities & Admission Guide - University Yatra",

  description:
    "Explore study opportunities in New Zealand with University Yatra. Compare top universities in Auckland, Wellington, Christchurch, Hamilton, and Dunedin. Discover undergraduate and postgraduate programs, scholarships, admission requirements, and student visa guidance to plan your academic future.",

  keywords:
    "study in New Zealand, New Zealand universities, study abroad New Zealand, study in Auckland, study in Wellington, study in Christchurch, study in Hamilton, study in Dunedin, bachelors in New Zealand, masters in New Zealand, MBA in New Zealand, top universities in New Zealand, New Zealand admission guide, scholarships in New Zealand, higher education New Zealand, New Zealand student visa, courses in New Zealand, University Yatra",

  openGraph: {
    title:
      "Study in New Zealand | Universities, Programs & Admission Guidance",

    description:
      "Explore leading New Zealand universities, undergraduate and postgraduate programs, scholarships, and study opportunities with admission guidance from University Yatra.",

    type: "website",
  },
};




export default function StudyInNewZealandPage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInNewZealandHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        <CostOfStudyingNewZealand />
        <Testimonials />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}
