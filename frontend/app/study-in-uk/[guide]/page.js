import GuideDetail from "@/components/StudyInUk/GuideDetail";
import { notFound } from "next/navigation";
import { GUIDE_DETAILS_DATABASE } from "@/data/uk-guides";

export async function generateStaticParams() {
  return Object.keys(GUIDE_DETAILS_DATABASE).map((slug) => ({ guide: slug }));
}

export async function generateMetadata({ params }) {
  const { guide } = await params;
  const data = (Object.hasOwn(GUIDE_DETAILS_DATABASE, guide) ? GUIDE_DETAILS_DATABASE[guide] : undefined);
  if (!data) return { title: "Guide Not Found" };
  return { title: `${data.title} | University Yatra`, description: data.tagline };
}

export default async function GuideDetailPage({ params }) {
  const { guide } = await params;
  const guideData = (Object.hasOwn(GUIDE_DETAILS_DATABASE, guide) ? GUIDE_DETAILS_DATABASE[guide] : undefined);
  if (!guideData) notFound();

  return <GuideDetail guideData={guideData} guide={guide} />;
}
