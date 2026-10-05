import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/UniversityFooter";
import Hero from "@/components/Home/Hero";
import NextChapter from "@/components/Home/NextChapter";
import TopUniversities from "@/components/Home/TopUniversities";
import CommittedToExcellence from "@/components/Home/CommittedToExcellence";
import ChooseDestination from "@/components/Home/ChooseDestination";
import Programs from "@/components/Home/Programs";
import JourneySteps from "@/components/Home/JourneySteps";
import ExploreByDestination from "@/components/Home/ExploreByDestination";
import GuidanceSection from "@/components/Home/GuidanceSection";
import StudentStories from "@/components/Home/StudentStories";
import PlanNextChapter from "@/components/Home/PlanNextChapter";

export default function Home() {
  return (
       <>
           <Navbar active="Home" />
            <main>  
              <Hero />
              <NextChapter
                images={{
                  university: "/images/3d/university.png",
                  funding: "/images/3d/funding.png",
                  sop: "/images/3d/sop.png",
                }}
              />
              <TopUniversities />
              <CommittedToExcellence />
              <ChooseDestination />
              <Programs />
              <JourneySteps image="/images/journey-student.webp" />
              <ExploreByDestination />
              <GuidanceSection
                primaryHref="/contact"
                showLogin={false}
              />
              <StudentStories />
              <PlanNextChapter image="/images/callback-student.webp" />
            </main>
            <Footer />
       </>
  );
}
