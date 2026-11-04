import fs from "node:fs";
import path from "node:path";
import NavbarClient from "./NavbarClient";

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

function findAppDir() {
  for (const dir of ["src/app", "app"]) {
    const p = path.join(/*turbopackIgnore: true*/ process.cwd(), dir);
    if (fs.existsSync(/*turbopackIgnore: true*/ p)) return p;
  }
  return null;
}

/* app/<folder>/[guide]/page.js (ya [guides], .jsx/.tsx) ki file dhundo */
function findGuidePage(appDir, folder) {
  for (const dyn of ["[guide]", "[guides]"]) {
    for (const file of ["page.js", "page.jsx", "page.tsx", "page.ts"]) {
      const p = path.join(/*turbopackIgnore: true*/ appDir, folder, dyn, file);
      if (fs.existsSync(/*turbopackIgnore: true*/ p)) return p;
    }
  }
  return null;
}

/* page.js ke andar ke guide objects padho:
     "slug": {
       id: "01", ... shortTitle: "...", heroImage: "..."
   (alias assignments jaise GUIDE_DETAILS_DATABASE["x"] = ... ignore hote hain) */
function parseGuides(file) {
  const src = fs.readFileSync(file, "utf8");
  // More flexible regex: allows both quoted and unquoted keys, and quoted id values
  const re = /^[ \t]{2}"?([a-z0-9-]+)"?:\s*\{\s*\n\s*"?id"?:\s*"[^"]*"/gm;

  const starts = [];
  let m;
  while ((m = re.exec(src))) starts.push({ slug: m[1], index: m.index });

  return starts.map((s, i) => {
    const block = src.slice(s.index, starts[i + 1]?.index ?? src.length);
    const pick = (key) => block.match(new RegExp(`"?${key}"?:\\s*"([^"]+)"`))?.[1];
    return {
      slug: s.slug,
      label: pick("shortTitle") ?? pick("title") ?? s.slug,
      heroImage: pick("heroImage"),
    };
  });
}

function buildCountries() {
  const appDir = findAppDir();

  return COUNTRIES.map((c) => {
    let guides = [];
    try {
      const file = appDir && findGuidePage(appDir, c.folder);
      if (file) guides = parseGuides(file);
    } catch {
      guides = [];
    }

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