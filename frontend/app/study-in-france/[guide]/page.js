import GuideDetail from "@/components/StudyInFrance/GuideDetail";
import { notFound } from "next/navigation";
import { GUIDE_DETAILS_DATABASE } from "@/data/france-guides";

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(GUIDE_DETAILS_DATABASE, slug) ? GUIDE_DETAILS_DATABASE[slug] : undefined);

  if (!guide) {
    return { title: "Guide Not Found - University Yatra" };
  }

  return {
    title: `${guide.title} | Complete Guide - University Yatra`,
    description: guide.tagline,
    openGraph: {
      title: guide.title,
      description: guide.tagline,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(GUIDE_DETAILS_DATABASE).map((slug) => ({
    guide: slug,
  }));
}

export default async function FranceGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(GUIDE_DETAILS_DATABASE, slug) ? GUIDE_DETAILS_DATABASE[slug] : undefined);
  if (!guide) {
    notFound();
  }

  return <GuideDetail guide={guide} slug={slug} />;
}
