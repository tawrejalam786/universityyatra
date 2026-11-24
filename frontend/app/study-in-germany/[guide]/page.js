import GuideDetail from "@/components/StudyInGermany/GuideDetail";
import { notFound } from "next/navigation";
import { GERMANY_GUIDES } from "@/data/germany-guides";

export async function generateStaticParams() {
  return Object.keys(GERMANY_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(GERMANY_GUIDES, slug) ? GERMANY_GUIDES[slug] : undefined);

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

export default async function GermanyGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(GERMANY_GUIDES, slug) ? GERMANY_GUIDES[slug] : undefined);
  if (!guide) {
    notFound();
  }

  return <GuideDetail guide={guide} slug={slug} />;
}
