import GuideDetail from "@/components/StudyInRussia/GuideDetail";
import { notFound } from "next/navigation";
import { RUSSIA_GUIDES } from "@/data/russia-guides";

export async function generateStaticParams() {
  return Object.keys(RUSSIA_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(RUSSIA_GUIDES, slug) ? RUSSIA_GUIDES[slug] : undefined);

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

export default async function RussiaGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(RUSSIA_GUIDES, slug) ? RUSSIA_GUIDES[slug] : undefined);
  if (!guide) {
    notFound();
  }

  return <GuideDetail guide={guide} slug={slug} />;
}
