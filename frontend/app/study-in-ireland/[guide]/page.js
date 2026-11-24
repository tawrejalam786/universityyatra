import GuideDetail from "@/components/StudyInIreland/GuideDetail";
import { notFound } from "next/navigation";
import { IRELAND_GUIDES } from "@/data/ireland-guides";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(IRELAND_GUIDES).map((slug) => ({
    guide: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(IRELAND_GUIDES, slug) ? IRELAND_GUIDES[slug] : undefined);

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

export default async function IrelandGuidePage({ params }) {
  const { guide: slug } = await params;
  const guide = (Object.hasOwn(IRELAND_GUIDES, slug) ? IRELAND_GUIDES[slug] : undefined);
  if (!guide) notFound();

  return <GuideDetail guide={guide} slug={slug} />;
}
