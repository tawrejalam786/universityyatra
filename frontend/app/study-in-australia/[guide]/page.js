import GuideDetail from "@/components/StudyInAustralia/GuideDetail";
import { notFound } from "next/navigation";
import { AUSTRALIA_GUIDES } from "@/data/australia-guides";

export async function generateStaticParams() {
  return Object.keys(AUSTRALIA_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(AUSTRALIA_GUIDES, slug) ? AUSTRALIA_GUIDES[slug] : undefined);

  if (!guide) {
    return {
      title: "Page Not Found - University Yatra",
    };
  }

  return {
    title: `${guide.title} | University Yatra`,
    description: guide.tagline,
    openGraph: {
      title: guide.title,
      description: guide.tagline,
      type: "article",
    },
  };
}

export default async function AustraliaGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(AUSTRALIA_GUIDES, slug) ? AUSTRALIA_GUIDES[slug] : undefined);
  if (!guide) {
    notFound();
  }

  return <GuideDetail guide={guide} slug={slug} />;
}
