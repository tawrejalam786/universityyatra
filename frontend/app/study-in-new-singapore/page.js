import Navbar from '@/components/layout/Navbar';
import UniversityFooter from '@/components/layout/UniversityFooter';
import StudyInNewSingaporeHero from '@/components/StudyInNewSingapore/StudyInNewSingaporeHero';
import OnlineDegreeSection from "@/components/StudyInNewSingapore/OnlineDegreeSection";
import WhatItGetsYou from "@/components/StudyInNewSingapore/WhatItGetsYou";
import CoursesSlider from "@/components/StudyInNewSingapore/CoursesSlider";
import HowUniversityYatraHelps from "@/components/StudyInNewSingapore/HowUniversityYatraHelps";
import UniversityCarousel from "@/components/StudyInNewSingapore/UniversityCarousel";
import CostOfStudyingNewSingapore from "@/components/StudyInNewSingapore/CostOfStudyingNewSingapore";
import Testimonials from "@/components/StudyInNewSingapore/Testimonials";
import GlobalEducationCTA from "@/components/StudyInNewSingapore/GlobalEducationCTA";



export const metadata = {
  title: "Study in Singapore | Top Universities & Admission Guide - University Yatra",

  description:
    "Explore study opportunities in Singapore with University Yatra. Compare leading universities including NUS, NTU, SMU, and other institutions. Discover undergraduate and postgraduate programs, MBA courses, scholarships, admission requirements, and student visa guidance to plan your academic future.",

  keywords:
    "study in Singapore, Singapore universities, study abroad Singapore, top universities in Singapore, National University of Singapore, Nanyang Technological University, Singapore Management University, bachelors in Singapore, masters in Singapore, MBA in Singapore, business courses in Singapore, engineering courses in Singapore, computer science in Singapore, Singapore admission guide, scholarships in Singapore, higher education Singapore, Singapore student pass, Singapore student visa, courses in Singapore, University Yatra",

  openGraph: {
    title:
      "Study in Singapore | Universities, Programs & Admission Guidance",

    description:
      "Explore leading Singapore universities, undergraduate and postgraduate programs, MBA courses, scholarships, and study opportunities with admission guidance from University Yatra.",

    type: "website",
  },
};


export default function StudyInNewSingaporePage() {
  return (
    <>
      <Navbar active="Destinations" />
      <main>
        <StudyInNewSingaporeHero />
        <OnlineDegreeSection />
        <WhatItGetsYou />
        <CoursesSlider />
        <HowUniversityYatraHelps />
        <UniversityCarousel />
        <CostOfStudyingNewSingapore />
        <Testimonials />
        <GlobalEducationCTA />
      </main>
      <UniversityFooter />
    </>
  );
}
