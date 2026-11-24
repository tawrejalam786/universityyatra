import { notFound } from "next/navigation";
import GuideDetail from "@/components/StudyInUsa/GuideDetail";
import { GUIDE_DETAILS_DATABASE } from "@/data/usa-guides";

export default async function GuideDetailPage({ params }) {
  const { guide: guideSlug } = await params;
  const guideData = Object.hasOwn(GUIDE_DETAILS_DATABASE, guideSlug)
    ? GUIDE_DETAILS_DATABASE[guideSlug]
    : undefined;

  if (!guideData) {
    notFound();
  }

  return <GuideDetail guideData={guideData} guideSlug={guideSlug} />;
}
