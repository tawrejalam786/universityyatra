
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  IndianRupee,
  Landmark,
} from "lucide-react";

/**
 * "Your next chapter, made simpler." – three service cards.
 */

const EYEBROW =
  "text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy sm:text-[11px]";

/* ---------- Image slot ---------- */
function Media({ src, Icon, tileClass, sizes }) {
  if (src) {
    return (
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        className="object-contain object-center"
      />
    );
  }

  return (
    <div className="grid size-full place-items-center">
      <span
        className={`grid aspect-square w-3/5 max-w-32 place-items-center rounded-2xl ${tileClass}`}
      >
        <Icon
          aria-hidden="true"
          className="size-1/2"
          strokeWidth={1.75}
        />
      </span>
    </div>
  );
}

/* ---------- Large card ---------- */
function UniversityCard({ image }) {
  return (
    <article className="group relative isolate flex min-h-[22rem] flex-col overflow-hidden rounded-[24px] border border-brand-navy/10 bg-tint-sky p-5 sm:min-h-[24rem] sm:p-6 lg:row-span-2 lg:min-h-[29rem] lg:p-6">
      {/* Background circle */}
      <span
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 -z-10 size-64 rounded-full bg-tint-sky-deep/70 sm:size-72 lg:-bottom-32 lg:-right-16 lg:size-[28rem]"
      />

      <p className={EYEBROW}>University selection</p>

      <h3 className="mt-3 max-w-xs text-balance text-2xl font-extrabold leading-[1.08] tracking-tight text-brand-navy-dark sm:text-3xl lg:max-w-sm lg:text-[2.15rem]">
        Find a university that fits you.
      </h3>

      <p className="mt-2 max-w-sm text-sm text-slate-600 sm:text-base">
        Your profile. Your goals. Your shortlist.
      </p>

      {/* Illustration */}
      <div className="relative mt-1 h-44 sm:h-52 lg:absolute lg:bottom-5 lg:right-5 lg:h-[58%] lg:w-[62%]">
        <Media
          src={image}
          Icon={Landmark}
          tileClass="bg-brand-navy text-white"
          sizes="(min-width: 1024px) 40vw, 90vw"
        />
      </div>

      {/* CTA */}
      <Link
        href="/universities"
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white transition-colors after:absolute after:inset-0 after:z-10 hover:bg-brand-navy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal sm:h-13 sm:w-fit sm:justify-start sm:self-start lg:mt-auto"
      >
        Explore universities

        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none sm:size-5"
        />
      </Link>
    </article>
  );
}

/* ---------- Compact card ---------- */
function CompactCard({
  tone,
  eyebrow,
  title,
  description,
  cta,
  href,
  image,
  Icon,
  tileClass,
}) {
  return (
    <article
      className={`group relative flex min-h-[9.5rem] items-center justify-between gap-3 overflow-hidden rounded-[24px] border border-brand-navy/10 p-4 sm:min-h-[10.5rem] sm:gap-4 sm:p-5 lg:min-h-0 lg:p-6 ${tone}`}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <p className={EYEBROW}>{eyebrow}</p>

        <h3 className="mt-1.5 text-lg font-extrabold leading-tight tracking-tight text-brand-navy-dark sm:text-xl lg:text-[1.45rem]">
          {title}
        </h3>

        <p className="mt-1 text-xs text-slate-600 sm:text-sm">
          {description}
        </p>

        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-1.5 self-start rounded-md text-xs font-bold text-brand-navy after:absolute after:inset-0 after:z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal sm:text-sm"
        >
          {cta}

          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </Link>
      </div>

      {/* Image */}
      <div className="relative size-24 shrink-0 sm:size-28 lg:size-32">
        <Media
          src={image}
          Icon={Icon}
          tileClass={tileClass}
          sizes="(min-width: 1024px) 128px, 112px"
        />
      </div>
    </article>
  );
}

/* ---------- Section ---------- */
export default function NextChapter({ images = {} }) {
  return (
    <section
      aria-labelledby="next-chapter-title"
      className="bg-white py-10 sm:py-12 lg:py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <h2
            id="next-chapter-title"
            className="max-w-xl text-balance text-[1.8rem] font-extrabold leading-[1.08] tracking-tight text-brand-navy-dark sm:text-4xl lg:text-[2.8rem]"
          >
            Your next chapter, made simpler.
          </h2>

          <p className="max-w-sm text-sm text-slate-600 sm:text-base lg:text-right">
            The right support for your study abroad journey.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-[1.2fr_1fr] lg:grid-rows-2">
          {/* Large card */}
          <UniversityCard image={images.university} />

          {/* Funding */}
          <CompactCard
            tone="bg-tint-sand"
            eyebrow="Education funding"
            title="Finance your future."
            description="Loans & scholarships"
            cta="Explore funding"
            href="/funding"
            image={images.funding}
            Icon={IndianRupee}
            tileClass="bg-brand-teal text-brand-navy-dark"
          />

          {/* SOP */}
          <CompactCard
            tone="bg-tint-lilac"
            eyebrow="SOP support"
            title={
              <>
                <span className="block">Your story.</span>
                <span className="block">A stronger SOP.</span>
              </>
            }
            description="Writing, editing & review"
            cta="Get SOP support"
            href="/sop-support"
            image={images.sop}
            Icon={FileText}
            tileClass="bg-brand-navy/10 text-brand-navy"
          />
        </div>
      </div>
    </section>
  );
}
