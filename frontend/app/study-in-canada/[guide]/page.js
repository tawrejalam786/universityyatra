import { notFound } from "next/navigation";
import GuideDetail from "@/components/StudyInCanada/GuideDetail";
import { CANADA_GUIDES, CANADA_BOOK_GUIDES } from "@/data/canada-guides";

export function generateStaticParams() {
  return CANADA_BOOK_GUIDES.map(({ slug }) => ({ guide: slug }));
}

export async function generateMetadata({ params }) {
  const { guide } = await params;
  const data = Object.hasOwn(CANADA_GUIDES, guide) ? CANADA_GUIDES[guide] : undefined;
  if (!data) return { title: "Guide Not Found" };
  return { title: `${data.title} | University Yatra`, description: data.tagline };
}

export default async function GuideDetailPage({ params }) {
  const { guide } = await params;
  const guideData = Object.hasOwn(CANADA_GUIDES, guide) ? CANADA_GUIDES[guide] : undefined;
  if (!guideData) notFound();

  return <GuideDetail guideData={guideData} guide={guide} />;
}
