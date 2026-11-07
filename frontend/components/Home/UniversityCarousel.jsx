
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

/* ==========================================
   COUNTRIES DATA
========================================== */

const countries = [
  {
    name: "USA",
    fullName: "United States of America",
    image: "/images/countries/new-york-usas.webp",
    flag: "us",
    featuredCity: "New York",
    cities: ["New York", "Boston", "Los Angeles", "San Francisco"],
    href: "/contact",
  },
  {
    name: "Canada",
    fullName: "Canada",
    image: "/images/countries/toronta-canadass.webp",
    flag: "ca",
    featuredCity: "Toronto",
    cities: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    href: "#",
  },
  {
    name: "Europe",
    fullName: "Study in Europe",
    image: "/images/countries/amsterdam-europe.webp",
    flag: "eu",
    featuredCity: "Amsterdam",
    cities: ["Amsterdam", "Barcelona", "Milan", "Prague"],
    href: "#",
  },
  {
    name: "UK",
    fullName: "United Kingdom",
    image: "/images/countries/london-uk.webp",
    flag: "gb",
    featuredCity: "London",
    cities: ["London", "Manchester", "Edinburgh", "Birmingham"],
    href: "#",
  },
  {
    name: "Ireland",
    fullName: "Ireland",
    image: "/images/countries/dublin-ireland.webp",
    flag: "ie",
    featuredCity: "Dublin",
    cities: ["Dublin", "Cork", "Galway", "Limerick"],
    href: "#",
  },
  {
    name: "UAE",
    fullName: "United Arab Emirates",
    image: "/images/countries/dubai-uae.webp",
    flag: "ae",
    featuredCity: "Dubai",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    href: "#",
  },
  {
    name: "Germany",
    fullName: "Germany",
    image: "/images/countries/berlin-germany.webp",
    flag: "de",
    featuredCity: "Berlin",
    cities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    href: "#",
  },
  {
    name: "France",
    fullName: "France",
    image: "/images/countries/paris-france.webp",
    flag: "fr",
    featuredCity: "Paris",
    cities: ["Paris", "Lyon", "Toulouse", "Bordeaux"],
    href: "#",
  },
  {
    name: "Russia",
    fullName: "Russia",
    image: "/images/countries/moscow-russia.webp",
    flag: "ru",
    featuredCity: "Moscow",
    cities: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"],
    href: "#",
  },
  {
    name: "Australia",
    fullName: "Australia",
    image: "/images/countries/sydney-australia.webp",
    flag: "au",
    featuredCity: "Sydney",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    href: "#",
  },
  {
    name: "New Zealand",
    fullName: "New Zealand",
    image: "/images/countries/auckland-new-zealand.webp",
    flag: "nz",
    featuredCity: "Auckland",
    cities: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
    href: "#",
  },
  {
    name: "Singapore",
    fullName: "Singapore",
    image: "/images/countries/marina-bay-singapore.webp",
    flag: "sg",
    featuredCity: "Singapore",
    cities: ["Clementi", "Queenstown", "Jurong", "Bras Basah"],
    href: "#",
  },
  {
    name: "Japan",
    fullName: "Japan",
    image: "/images/countries/tokyo-japan.webp",
    flag: "jp",
    featuredCity: "Tokyo",
    cities: ["Tokyo", "Osaka", "Kyoto", "Fukuoka"],
    href: "#",
  },
];

/* ==========================================
   COUNTRY CARD — CINEMATIC IMAGE TREATMENT
========================================== */

    function CountryCard({ country, active, index }) {
      return (
      <article
  className={`group relative isolate flex h-[490px] w-full min-w-0 flex-col overflow-hidden rounded-[22px] bg-[#0B50CF] transition-[opacity,box-shadow] duration-700 sm:h-[420px] sm:rounded-[25px] lg:h-[530px] ${
    active
      ? "opacity-100 shadow-[0_25px_60px_rgba(12,51,123,0.25)]"
      : "opacity-[0.94] shadow-[0_8px_24px_rgba(12,51,123,0.1)]"
  }`}
  style={{
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
  }}
>
  {/* PHOTO: only this top area, it never goes behind the blue panel */}
  <div className="relative min-h-0 flex-1 overflow-hidden bg-[#A2C1FB]">
    <Image
      src={country.image}
      alt={`${country.fullName} - ${country.featuredCity}`}
      fill
      priority={index === 0}
      sizes="(max-width: 479px) 85vw, (max-width: 767px) 60vw, (max-width: 1023px) 45vw, 30vw"
      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0) scale(1.01)",
      }}
    />

    {/* TOP BADGE: FLAG */}
    <div className="absolute left-4 top-4 z-10 inline-flex h-9 w-[60px] items-center justify-center overflow-hidden rounded-lg">
      <Image
        src={`https://flagcdn.com/w320/${country.flag}.png`}
        alt={`${country.name} flag`}
        width={60}
        height={36}
        className="h-full w-full object-contain"
      />
    </div>
  </div>

  {/* BLUE PANEL: sits below the photo, height depends on its content */}
  <div className="relative z-10 shrink-0">
    {/* wave: sits on top of the panel and overlaps the bottom of the photo */}
    <svg
      aria-hidden="true"
      viewBox="0 0 400 40"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-[calc(100%-1px)] block h-[26px] w-full sm:h-[30px]"
    >
      <path
        d="M0 22 C60 4 120 0 190 14 C250 26 320 34 400 10 V40 H0 Z"
        fill="#0B50CF"
      />
    </svg>

    <div className="bg-gradient-to-b from-[#0B50CF] to-[#0A3AA6] px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
      {/* LABEL */}
      <p className="mb-2 text-[14px] font-bold text-white sm:text-[15px]">
        {country.name === "Singapore"
          ? "Popular Education Areas"
          : "Popular Cities"}
      </p>

      {/* CITY CHIPS (2 columns) */}
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
        {country.cities.map((city) => (
          <span
            key={city}
            className="truncate rounded-full bg-[#F2F7FF] px-2 py-2 text-center text-[12px] font-bold leading-[1.2] text-[#0B50CF] sm:text-[13px]"
          >
            {city}
          </span>
        ))}
      </div>

      {/* EXPLORE BUTTON */}
<Link
  href={country.href}
  aria-label={`Explore studying in ${country.fullName}`}
  className="group/btn relative mt-3 flex items-center justify-center rounded-full border-2 border-white bg-white py-[9px] pl-4 pr-14 text-[15px] font-bold text-[#0B50CF] shadow-[0_8px_20px_rgba(6,27,59,0.25)] transition-colors duration-300 hover:bg-[#2F77F5] hover:text-white sm:text-[16px]"
>
  <span>Explore {country.name}</span>

  <span className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B50CF] text-white transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:bg-white group-hover/btn:text-[#0B50CF]">
    <ArrowRight size={19} strokeWidth={2.4} />
  </span>
</Link>
    </div>
  </div>
</article>
  );
}

/* ==========================================
   FULL WIDTH 3D COVERFLOW CAROUSEL
========================================== */

export default function CountriesCarousel() {
  const swiperRef = useRef(null);

  return (
    <section aria-labelledby="countries-carousel-title" className="relative w-full overflow-hidden bg-[#F8FAFF] py-10 sm:py-12 lg:py-14">
      {/* HEADER */}
      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-5 lg:px-8">
        <div className="relative mb-6 flex flex-col items-center gap-5 lg:mb-8">

          {/* CENTERED TITLE & DESCRIPTION */}
          <div className="mx-auto w-full max-w-[850px] text-center">
            <div className="mx-auto w-full max-w-[800px]">

              {/* TOP LABEL */}
              {/* <p className="mb-2 text-center text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1765F5] sm:text-[11px]">
                Explore study opportunities across 40+ countries and leading universities worldwide.
              </p> */}

              {/* MAIN HEADING */}
              <h2 id="countries-carousel-title" className="text-center text-[28px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#1765F5] sm:text-[35px] lg:text-[44px]">
                The World Is{" "}
                <span className="text-[#0C337B]">
                  Your Campus..
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-3 max-w-[750px] text-center text-[12px] leading-[1.65] text-[#526B8C] sm:text-[13px] lg:text-[14px]">
                Explore study opportunities across 40+ countries and leading universities worldwide. From choosing the right destination to finding programmes that match your goals, discover a world of possibilities for your academic and professional future.
              </p>

            </div>
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="flex items-center justify-center gap-2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <button type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous country" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E5FA] bg-white text-[#0C337B] shadow-sm transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white sm:h-11 sm:w-11">
              <ChevronLeft size={20} />
            </button>

            <button type="button" onClick={() => swiperRef.current?.slideNext()} aria-label="Next country" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E5FA] bg-white text-[#0C337B] shadow-sm transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white sm:h-11 sm:w-11">
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>

      {/* FULL WIDTH 3D SWIPER */}
      <div className="relative w-full overflow-hidden py-1">
        <Swiper
          modules={[EffectCoverflow]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          speed={700}
          slidesPerView={1.35}
          slidesPerGroup={1}
          spaceBetween={0}
          watchSlidesProgress={true}
          roundLengths={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 1,
            scale: 0.88,
            slideShadows: false,
          }}
          breakpoints={{
             320: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 1.6,
              spaceBetween: 100,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2.8,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 15,
            },
            1536: {
              slidesPerView: 4.5,
              spaceBetween: 18,
            },
          }}
          className="w-full !overflow-visible !py-0"
        >
          {countries.map((country, index) => (
            <SwiperSlide key={country.name} className="!h-auto">
              {({ isActive }) => (
                <CountryCard
                  country={country}
                  active={isActive}
                  index={index}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
