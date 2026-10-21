import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/UniversityFooter";
import Hero from "@/components/Home/Hero";
import NextChapter from "@/components/Home/NextChapter";
import JourneyBento from "@/components/Home/JourneyBento";
import UniversityCarousel from "@/components/Home/UniversityCarousel";
import TopUniversities from "@/components/Home/TopUniversities";
import CommittedToExcellence from "@/components/Home/CommittedToExcellence";
import ChooseDestination from "@/components/Home/ChooseDestination";
import Programs from "@/components/Home/Programs";
import HowUniversityYatraHelps from "@/components/Home/HowUniversityYatraHelps";
import ExploreByDestination from "@/components/Home/ExploreByDestination";
import GuidanceSection from "@/components/Home/GuidanceSection";
import StudentStories from "@/components/Home/StudentStories";
import PlanNextChapter from "@/components/Home/PlanNextChapter";
import CoursesSection from "@/components/Home/CoursesSection";

export default function Home() {
  return (
       <>
           <Navbar active="Home" />
            <main>  
              <Hero />
              {/* <NextChapter
                images={{
                  university: "/images/3d/university.png",
                  funding: "/images/3d/funding.png",
                  sop: "/images/3d/sop.png",
                }}
              /> */}
              
              <JourneyBento />
              <UniversityCarousel />
              <CoursesSection />

              {/* <TopUniversities /> */}
              {/* <CommittedToExcellence /> */}
              {/* <ChooseDestination /> */}
              {/* <Programs /> */}
              <HowUniversityYatraHelps />
              {/* <ExploreByDestination /> */}
              {/* <GuidanceSection
                primaryHref="/contact"
                showLogin={false}
              /> */}
              <StudentStories />
              <PlanNextChapter image="/images/callback-studentss.png" />
            </main>
            <Footer />
       </>
  );
}
