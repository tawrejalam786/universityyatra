
"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white pt-[95px] sm:pt-[105px] md:pt-0">
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/contact/contact-banner.webp"
          alt="University Yatra Contact Us Banner"
          width={1600}
          height={600}
          priority
          quality={100}
          sizes="100vw"
          className="block h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
