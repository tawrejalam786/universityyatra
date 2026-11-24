import GuideDetail from "@/components/StudyInUae/GuideDetail";
import { notFound } from "next/navigation";
import { UAE_GUIDES } from "@/data/uae-guides";

export async function generateStaticParams() {
  return Object.keys(UAE_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(UAE_GUIDES, slug) ? UAE_GUIDES[slug] : undefined);

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

export default async function UaeGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(UAE_GUIDES, slug) ? UAE_GUIDES[slug] : undefined);
  if (!guide) notFound();

  return <GuideDetail guide={guide} slug={slug} />;
}
