import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

const UAE_GUIDES = {
  "study-in-uae": {
    title: "Study in the UAE",
    description: "Explore undergraduate and postgraduate education in the United Arab Emirates",
  },
  "cost-of-studying": {
    title: "Cost of Studying in the UAE",
    description: "Understand tuition fees, living expenses, and budget planning for UAE studies",
  },
  "living-and-culture": {
    title: "Cost of Living & Culture in the UAE",
    description: "Navigate accommodation, daily expenses, and multicultural student life in the Emirates",
  },
  "scholarships": {
    title: "Scholarships in the UAE",
    description: "Discover scholarship opportunities and funding options for international students",
  },
  "post-study-work-visa": {
    title: "Post-Study Work Visa in the UAE",
    description: "Learn about employment visas and career opportunities after graduation",
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const guide = UAE_GUIDES[resolvedParams.guide];

  if (!guide) {
    return {
      title: "Guide Not Found - University Yatra",
    };
  }

  return {
    title: `${guide.title} | University Yatra`,
    description: guide.description,
  };
}

export default async function UaeGuidePage({ params }) {
  const resolvedParams = await params;
  const guide = UAE_GUIDES[resolvedParams.guide];

  if (!guide) {
    notFound();
  }

  return (
    <>
      <Navbar active="Destinations" />
      <main className="mx-auto max-w-[1100px] px-4 py-16">
        <h1 className="text-4xl font-bold text-[#0C337B] mb-6">{guide.title}</h1>
        <p className="text-lg text-[#526B8C] mb-8">{guide.description}</p>
        <div className="prose prose-lg max-w-none">
          <p className="text-[#526B8C]">
            Content for this guide is being prepared. Please check back soon for comprehensive information about {guide.title.toLowerCase()}.
          </p>
        </div>
      </main>
      <UniversityFooter />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(UAE_GUIDES).map((guide) => ({
    guide,
  }));
}
