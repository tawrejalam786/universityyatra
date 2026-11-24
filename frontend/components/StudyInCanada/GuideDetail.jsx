import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bookmark, CheckCircle2, Compass, MessageCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import UniversityFooter from "@/components/layout/UniversityFooter";

import { CANADA_BOOK_GUIDES } from "@/data/canada-guides";

const GUIDE_IMAGES = {
  "/images/canada-guides/toronto.jpg": {
    "width": 1024,
    "height": 1024
  },
  "/images/canada-guides/vancouver.jpg": {
    "width": 600,
    "height": 600
  },
  "/images/canada-guides/montreal.jpg": {
    "width": 1147,
    "height": 860
  },
  "/images/canada-guides/calgary.jpg": {
    "width": 1024,
    "height": 1024
  },
  "/images/canada-guides/winnipeg-and-edmonton.jpg": {
    "width": 1024,
    "height": 1024
  }
};

/* Parse headings, paragraphs, bullet lists, images, and Markdown tables without packages. */
function parseSections(markdown) {
  const intro = [];
  const chapters = [];
  let current = intro;
  for (const line of markdown.split(/\r?\n/)) {
    if (/^# /.test(line)) continue;
    if (/^## /.test(line)) {
      const chapter = { heading: line.slice(3), lines: [] };
      chapters.push(chapter);
      current = chapter.lines;
      continue;
    }
    current.push(line);
  }
  return { intro, chapters };
}

function Inline({ value = "" }) {
  return value.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-bold text-[#0C337B]">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

function MarkdownContent({ lines }) {
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line || line === "---") { i++; continue; }
    const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch && GUIDE_IMAGES[imageMatch[2]]) {
      blocks.push({ type: "image", alt: imageMatch[1], src: imageMatch[2], ...GUIDE_IMAGES[imageMatch[2]] });
      i++;
      continue;
    }
    if (/^### /.test(line)) {
      blocks.push({ type: "heading", text: line.slice(4) });
      i++;
      continue;
    }
    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i].trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
        if (!cells.every((cell) => /^:?-+:?$/.test(cell))) rows.push(cells);
        i++;
      }
      blocks.push({ type: "table", rows });
      continue;
    }
    if (/^(?:- |\d+\. )/.test(line)) {
      const items = [];
      const ordered = /^\d+\. /.test(line);
      while (i < lines.length && /^(?:- |\d+\. )/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^(?:- |\d+\. )/, ""));
        i++;
      }
      blocks.push({ type: "list", items, ordered });
      continue;
    }
    const paragraph = [];
    while (i < lines.length && lines[i].trim() && !/^(?:### |## |# |- |\d+\. |\||!\[)/.test(lines[i].trim())) {
      paragraph.push(lines[i].trim());
      i++;
    }
    if (paragraph.length) blocks.push({ type: "paragraph", text: paragraph.join(" ") });
    else i++;
  }

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.type === "image") return <Image key={index} src={block.src} alt={block.alt} width={block.width} height={block.height} sizes="(min-width: 1024px) 800px, 100vw" className="mx-auto h-auto w-full max-w-full rounded-xl" />;
        if (block.type === "heading") return <h3 key={index} className="pt-3 text-[17px] font-extrabold leading-[1.35] text-[#0C337B] sm:text-[19px]"><Inline value={block.text} /></h3>;
        if (block.type === "paragraph") return <p key={index} className="text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]"><Inline value={block.text} /></p>;
        if (block.type === "list") {
          const Tag = block.ordered ? "ol" : "ul";
          return <Tag key={index} className={block.ordered ? "list-decimal space-y-3 pl-5" : "space-y-3"}>
            {block.items.map((text, n) => <li key={n} className="flex items-start gap-2.5 text-[13px] leading-[1.75] text-[#526B8C] sm:text-[14px]"><CheckCircle2 size={16} className="mt-1 shrink-0 text-[#1765F5]" /><span className="min-w-0"><Inline value={text} /></span></li>)}
          </Tag>;
        }
        if (block.type === "table") return <div key={index} className="max-w-full overflow-x-auto rounded-xl border border-[#DAE7FA]"><table className="w-full min-w-[540px] border-collapse text-left text-[12px] leading-[1.6]"><thead className="bg-[#EAF2FF] text-[#0C337B]"><tr>{(block.rows[0] || []).map((cell, n) => <th key={n} className="border-b border-[#D6E5FA] px-3 py-3 font-bold"><Inline value={cell} /></th>)}</tr></thead><tbody>{block.rows.slice(1).map((row, n) => <tr key={n} className={n % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}>{row.map((cell, j) => <td key={j} className="border-b border-[#E9F0F9] px-3 py-2.5 align-top text-[#526B8C]"><Inline value={cell} /></td>)}</tr>)}</tbody></table></div>;
        return null;
      })}
    </div>
  );
}

export default function GuideDetail({ guideData, guide }) {
  const { intro, chapters } = parseSections(guideData.markdown);
  const whatsappUrl = `https://wa.me/919217368750?text=${encodeURIComponent(`Hi University Yatra, I need guidance on ${guideData.title}.`)}`;

  return (
    <>
      <Navbar active="Destinations" />
      <main className="min-h-screen w-full overflow-x-hidden bg-[#F8FAFC]">
        {/* USA-STYLE PHOTO HERO */}
        <section className="relative isolate w-full overflow-hidden bg-[#0C337B] text-white lg:min-h-[530px]">
          <div className="pointer-events-none absolute inset-0 -z-20"><Image src={guideData.heroImage} alt={guideData.title} fill priority sizes="100vw" className="object-cover object-center" /></div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[#061F40]/60" />
          <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center px-4 pb-10 pt-[112px] text-center sm:px-6 sm:pb-14 sm:pt-[130px] lg:min-h-[530px] lg:justify-center lg:px-8 lg:py-16">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-white/85 sm:text-[12px]"><Link href="/" className="hover:text-white">Home</Link><span>/</span><Link href="/study-in-canada" className="hover:text-white">Study in Canada</Link><span>/</span><span className="font-bold text-white">{guideData.shortTitle}</span></div>
            <h1 className="mx-auto max-w-[1000px] text-balance text-[30px] font-extrabold leading-[1.09] tracking-[-0.04em] text-white drop-shadow-lg sm:text-[46px] lg:text-[60px]">{guideData.title}</h1>
            <div className="mb-3 mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-1.5 shadow-sm"><Bookmark size={14} className="shrink-0 text-[#1765F5]" /><span className="text-center font-mono text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#0C337B] sm:text-[11px]">{guideData.vol} • {guideData.badge}</span></div>
            <div className="mt-2 flex max-w-[700px] flex-wrap items-center justify-center gap-2">{guideData.pillColors.map((pill) => <span key={pill.label} className="rounded-full px-3 py-1.5 text-center text-[10px] font-extrabold uppercase shadow-sm" style={{ backgroundColor: pill.bg, color: pill.text }}>{pill.label}</span>)}</div>
            <div className="mt-5 flex w-full max-w-[510px] flex-wrap justify-center gap-2 sm:mt-7 sm:gap-4"><a href="#contact-advisory" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full bg-[#1765F5] px-4 py-2.5 text-[12px] font-bold text-white transition hover:bg-[#0C337B] sm:text-[14px]">Book a Free Consultation <ArrowRight size={16} /></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full border border-white/60 bg-white px-4 py-2.5 text-[12px] font-bold text-[#0C337B] transition hover:bg-[#EAF2FF] sm:text-[14px]"><MessageCircle size={16} /> Chat on WhatsApp</a></div>
          </div>
        </section>

        {/* INTRODUCTION + CHAPTERS + SIDE GUIDES */}
        <section className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="min-w-0 space-y-6 lg:col-span-2">
              <div className="rounded-3xl border border-[#A2C1FB]/40 bg-[#EBF3FE] p-5 shadow-sm sm:p-8"><div className="flex items-center gap-2 text-[#1765F5]"><Compass size={18} /><span className="font-mono text-[11px] font-extrabold uppercase tracking-widest">Executive Summary</span></div><h2 className="mt-2 text-[20px] font-extrabold text-[#0C337B] sm:text-[24px]">Navigating {guideData.shortTitle}</h2><div className="mt-3"><MarkdownContent lines={intro} /></div></div>
              {chapters.map((chapter, index) => <article key={`${guideData.id}-${index}`} className="min-w-0 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#A2C1FB] hover:shadow-md sm:p-8"><div className="flex items-start gap-3 sm:gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1765F5] sm:h-11 sm:w-11"><BookOpen size={21} /></span><h2 className="min-w-0 text-[19px] font-extrabold leading-[1.3] tracking-tight text-[#0C337B] sm:text-[22px]">{chapter.heading}</h2></div><div className="mt-5 border-t border-slate-100 pt-5"><MarkdownContent lines={chapter.lines} /></div></article>)}
            </div>
            <aside className="min-w-0 space-y-6">
              <div id="contact-advisory" className="scroll-mt-24 rounded-3xl border border-[#1765F5]/30 bg-[#E8F0FE] p-6 shadow-sm sm:p-7"><span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1765F5]">1-on-1 Student Guidance</span><h3 className="mt-1.5 text-[18px] font-extrabold text-[#0C337B]">Plan Your Canada Journey With an Expert</h3>
              <div className="mt-5 flex flex-col gap-2.5"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#1EB956]"><MessageCircle size={16} /> Chat on WhatsApp</a>
              {/* <button disabled className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-300 px-5 py-3 text-[13px] font-bold text-gray-500 cursor-not-allowed opacity-60">Book Free Consultation <ArrowRight size={15} /></button> */}
              </div></div>
              <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-7"><div className="flex items-center justify-between gap-2"><h3 className="text-[14px] font-extrabold uppercase tracking-wider text-[#0C337B]">Other Canada Guides</h3><span className="font-mono text-[10px] text-[#1765F5]">Series</span></div><div className="mt-4 space-y-2.5">{CANADA_BOOK_GUIDES.filter((item) => item.slug !== guide).map((item) => <Link key={item.id} href={`/study-in-canada/${item.slug}`} className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[13px] font-bold text-[#0C337B] transition hover:border-[#1765F5] hover:bg-[#E8F0FE]"><div className="min-w-0"><span className="block">{item.title}</span>{item.summary ? <div className="mt-3 font-normal"><MarkdownContent lines={item.summary.split(/\r?\n/)} /><span className="mt-3 block font-bold text-[#1765F5]">Read More →</span></div> : <span className="mt-1 block text-[11px] font-medium text-[#64748B]">{item.badge}</span>}</div><span className="shrink-0 font-mono text-[11px] font-bold text-[#1765F5] transition-transform group-hover:translate-x-1">{item.vol} →</span></Link>)}</div></div>
            </aside>
          </div>
        </section>
      </main>
      <UniversityFooter />
    </>
  );
}
