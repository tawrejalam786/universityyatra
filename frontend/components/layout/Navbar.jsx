import { GUIDE_DETAILS_DATABASE as FRANCE_NAV_GUIDES } from "@/data/france-guides";
import { RUSSIA_GUIDES as RUSSIA_NAV_GUIDES } from "@/data/russia-guides";
import { UAE_GUIDES as UAE_NAV_GUIDES } from "@/data/uae-guides";
import { IRELAND_GUIDES as IRELAND_NAV_GUIDES } from "@/data/ireland-guides";
import { GERMANY_GUIDES as GERMANY_NAV_GUIDES } from "@/data/germany-guides";
import { GUIDE_DETAILS_DATABASE as UK_NAV_GUIDES } from "@/data/uk-guides";
import { AUSTRALIA_GUIDES as AUSTRALIA_NAV_GUIDES } from "@/data/australia-guides";
import NavbarClient from "./NavbarClient";
import { GUIDE_DETAILS_DATABASE } from "@/data/usa-guides";
import { CANADA_GUIDES } from "@/data/canada-guides";

// Navigation uses the same imported guide data as each country route.
const GUIDE_DATABASES = {
  "study-in-france": FRANCE_NAV_GUIDES,
  "study-in-russia": RUSSIA_NAV_GUIDES,
  "study-in-uae": UAE_NAV_GUIDES,
  "study-in-ireland": IRELAND_NAV_GUIDES,
  "study-in-germany": GERMANY_NAV_GUIDES,
  "study-in-uk": UK_NAV_GUIDES,
  "study-in-australia": AUSTRALIA_NAV_GUIDES,
  "study-in-usa": GUIDE_DETAILS_DATABASE,
  "study-in-canada": CANADA_GUIDES,
};

function guidesFromData(database) {
  const seen = new Set();
  return Object.entries(database).flatMap(([slug, guide]) => {
    // Aliases share the same guide; show each destination only once.
    if (seen.has(guide)) return [];
    seen.add(guide);
    return [{ slug, label: guide.shortTitle ?? guide.title ?? slug, heroImage: guide.heroImage }];
  });
}

/* ==========================================
   Countries (order yahin se). Folder = app/<folder>/[guide]/page.js
   code = flagcdn country code
========================================== */

const COUNTRIES = [
  { folder: "study-in-usa", name: "USA", code: "us" },
  { folder: "study-in-canada", name: "Canada", code: "ca" },
  { folder: "study-in-uk", name: "UK", code: "gb" },
  { folder: "study-in-germany", name: "Germany", code: "de" },
  { folder: "study-in-australia", name: "Australia", code: "au" },
  { folder: "study-in-ireland", name: "Ireland", code: "ie" },
  { folder: "study-in-france", name: "France", code: "fr" },
  { folder: "study-in-uae", name: "UAE", code: "ae" },
  { folder: "study-in-russia", name: "Russia", code: "ru" },
];

const GROUPS = [
  { id: "guide", title: "Study Guide" },
  { id: "costs", title: "Costs & Funding" },
  { id: "admission", title: "Admission & Exams" },
  { id: "visa", title: "Visa & Career" },
];

/* slug ke keywords se decide hota hai link kis column mein jayega */
function classify(slug, folder) {
  if (slug === folder) return "guide";
  if (/living|culture/.test(slug)) return "costs";
  if (/cost|fee|scholar|aid|fund|loan/.test(slug)) return "costs";
  if (/admission|ielts|toefl|gre|gmat|exam|test|application/.test(slug)) return "admission";
  if (/visa|post-study|work|job|career/.test(slug)) return "visa";
  return "guide";
}

function buildCountries() {
  return COUNTRIES.map((c) => {
    const guides = guidesFromData(GUIDE_DATABASES[c.folder]);

    const columns = GROUPS.map((g) => ({
      id: g.id,
      title: g.title,
      items: guides
        .filter((x) => classify(x.slug, c.folder) === g.id)
        .map((x) => ({ href: `/${c.folder}/${x.slug}`, label: x.label })),
    })).filter((g) => g.items.length > 0);

    // Promo image: country ki main guide ka heroImage, nahi to pehli guide ka
    const main = guides.find((x) => x.slug === c.folder) ?? guides[0];

    return {
      slug: c.folder,
      name: c.name,
      code: c.code,
      image: main?.heroImage ?? null,
      columns,
    };
  });
}

export default function Navbar({ active = "Home" }) {
  const countries = buildCountries();
  return <NavbarClient active={active} countries={countries} />;
}