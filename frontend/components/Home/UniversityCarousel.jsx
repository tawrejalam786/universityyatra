
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  MapPin,
  Globe2,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const countries = [
  {
    name: "USA",
    fullName: "United States of America",
    image: "/images/countries/new-york.jpg",
    featuredCity: "New York",
    cities: ["New York", "Boston", "Los Angeles", "San Francisco"],
    href: "/study-abroad/usa",
  },
  {
    name: "Canada",
    fullName: "Canada",
    image: "/images/countries/toronto.jpg",
    featuredCity: "Toronto",
    cities: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    href: "/study-abroad/canada",
  },
  {
    name: "Europe",
    fullName: "Study in Europe",
    image: "/images/countries/europe.webp",
    featuredCity: "Amsterdam",
    cities: ["Amsterdam", "Barcelona", "Milan", "Prague"],
    href: "/study-abroad/europe",
  },
  {
    name: "UK",
    fullName: "United Kingdom",
    image: "/images/countries/uk.webp",
    featuredCity: "London",
    cities: ["London", "Manchester", "Edinburgh", "Birmingham"],
    href: "/study-abroad/uk",
  },
  {
    name: "Ireland",
    fullName: "Ireland",
    image: "/images/countries/ireland.webp",
    featuredCity: "Dublin",
    cities: ["Dublin", "Cork", "Galway", "Limerick"],
    href: "/study-abroad/ireland",
  },
  {
    name: "UAE",
    fullName: "United Arab Emirates",
    image: "/images/countries/uae.webp",
    featuredCity: "Dubai",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    href: "/study-abroad/uae",
  },
  {
    name: "Germany",
    fullName: "Germany",
    image: "/images/countries/germany.webp",
    featuredCity: "Berlin",
    cities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    href: "/study-abroad/germany",
  },
  {
    name: "France",
    fullName: "France",
    image: "/images/countries/france.webp",
    featuredCity: "Paris",
    cities: ["Paris", "Lyon", "Toulouse", "Bordeaux"],
    href: "/study-abroad/france",
  },
  {
    name: "Russia",
    fullName: "Russia",
    image: "/images/countries/russia.webp",
    featuredCity: "Moscow",
    cities: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"],
    href: "/study-abroad/russia",
  },
  {
    name: "Australia",
    fullName: "Australia",
    image: "/images/countries/australia.webp",
    featuredCity: "Sydney",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    href: "/study-abroad/australia",
  },
  {
    name: "New Zealand",
    fullName: "New Zealand",
    image: "/images/countries/new-zealand.webp",
    featuredCity: "Auckland",
    cities: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
    href: "/study-abroad/new-zealand",
  },
  {
    name: "Singapore",
    fullName: "Singapore",
    image: "/images/countries/singapore.webp",
    featuredCity: "Singapore",
    cities: ["Clementi", "Queenstown", "Jurong", "Bras Basah"],
    href: "/study-abroad/singapore",
  },
  {
    name: "Japan",
    fullName: "Japan",
    image: "/images/countries/tokyo.jpg",
    featuredCity: "Tokyo",
    cities: ["Tokyo", "Osaka", "Kyoto", "Fukuoka"],
    href: "/study-abroad/japan",
  },
];

/* ==========================================
   FULL IMAGE COUNTRY CARD
========================================== */

function CountryCard({ country, active, index }) {
  return (
    <article className={`group relative h-[390px] w-full min-w-0 overflow-hidden rounded-[22px] bg-[#0C337B] transition-[transform,opacity,box-shadow] duration-500 sm:h-[420px] sm:rounded-[25px] lg:h-[445px] ${active ? "scale-100 opacity-100 shadow-[0_20px_45px_rgba(12,51,123,0.2)]" : "scale-[0.95] opacity-80 shadow-[0_8px_24px_rgba(12,51,123,0.1)]"}`}>

      {/* FULL BACKGROUND IMAGE */}
      <Image
        src={country.image}
        alt={`${country.fullName} - ${country.featuredCity}`}
        fill
        priority={index === 0}
        sizes="(max-width: 479px) 85vw, (max-width: 767px) 60vw, (max-width: 1023px) 45vw, 30vw"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      {/* GRADIENT OVERLAY */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B3B]/95 via-[#061B3B]/45 to-[#061B3B]/10" />

      {/* TOP LABEL */}
      <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/90 px-3 py-2 text-[#0C337B] shadow-sm backdrop-blur-md">
        <Globe2 size={14} className="text-[#1765F5]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
          Study Abroad
        </span>
      </div>

      {/* CONTENT OVER IMAGE */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col px-5 pb-5 sm:px-6 sm:pb-6">

        <div className="mb-2 inline-flex items-center gap-1.5 self-start text-white/85">
          <MapPin size={14} />
          <span className="text-[11px] font-semibold">
            {country.featuredCity}
          </span>
        </div>

        <h3 className="text-[29px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[32px] lg:text-[35px]">
          {country.name}
        </h3>

        <p className="mt-1 text-[11px] font-medium text-white/80 sm:text-[12px]">
          {country.fullName}
        </p>

        {/* POPULAR DESTINATIONS */}
        <div className="mt-4">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white/75">
            {country.name === "Singapore" ? "Popular Education Areas" : "Popular Study Destinations"}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {country.cities.map((city) => (
              <span key={city} className="rounded-full border border-white/25 bg-white/15 px-2.5 py-1.5 text-[10px] font-medium leading-[1.2] text-white backdrop-blur-sm">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* EXPLORE LINK */}
        <Link href={country.href} aria-label={`Explore studying in ${country.fullName}`} className="mt-5 flex items-center justify-between gap-3 border-t border-white/25 pt-4 text-white">

          <span className="text-[12px] font-bold">
            Explore {country.name}
          </span>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#1765F5] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#1765F5] group-hover:text-white">
            <ArrowUpRight size={19} strokeWidth={2} />
          </span>

        </Link>
      </div>

    </article>
  );
}

/* ==========================================
   COUNTRIES CAROUSEL
========================================== */

export default function CountriesCarousel() {
  const swiperRef = useRef(null);

  return (
    <section aria-labelledby="countries-carousel-title" className="relative w-full overflow-hidden bg-[#F8FAFF] py-10 sm:py-12 lg:py-14">

      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-5 lg:px-8">

        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-8">

          <div className="max-w-[800px]">
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">
              EXPLORE STUDY ABROAD DESTINATIONS
            </p>

            <h2 id="countries-carousel-title" className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#1765F5] sm:text-[35px] lg:text-[44px]">
              The World Is{" "}
              <span className="text-[#0C337B]">
                Your Campus.
              </span>
            </h2>

            <p className="mt-3 max-w-[750px] text-[12px] leading-[1.65] text-[#526B8C] sm:text-[13px] lg:text-[14px]">
              Explore study opportunities across 40+ countries and leading universities worldwide. From choosing the right destination to finding programmes that match your goals, discover a world of possibilities for your academic and professional future.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
            <button type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous country" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E5FA] bg-white text-[#0C337B] transition-all duration-300 hover:bg-[#1765F5] hover:text-white sm:h-11 sm:w-11">
              <ChevronLeft size={20} />
            </button>

            <button type="button" onClick={() => swiperRef.current?.slideNext()} aria-label="Next country" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E5FA] bg-white text-[#0C337B] transition-all duration-300 hover:bg-[#1765F5] hover:text-white sm:h-11 sm:w-11">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* SWIPER */}
        <div className="relative w-full overflow-hidden py-3">
          <Swiper
            modules={[EffectCoverflow]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            effect="coverflow"
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            speed={650}
            slidesPerView={1.15}
            spaceBetween={12}
            watchSlidesProgress={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 90,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              480: { slidesPerView: 1.45, spaceBetween: 14 },
              640: { slidesPerView: 2.15, spaceBetween: 16 },
              768: { slidesPerView: 2.55, spaceBetween: 18 },
              1024: { slidesPerView: 3.15, spaceBetween: 20 },
              1280: { slidesPerView: 3.55, spaceBetween: 22 },
            }}
            className="!overflow-visible !pb-7 !pt-3"
          >
            {countries.map((country, index) => (
              <SwiperSlide key={country.name} className="!h-auto">
                {({ isActive }) => (
                  <CountryCard country={country} active={isActive} index={index} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
