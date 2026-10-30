"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

// University names and image paths
const universities = [
  {
    "name": "University of Ottawa",
    "filename": "university-of-ottawa.webp",
    "image": "/images/about/universities/university-of-ottawa.webp"
  },
  {
    "name": "University of Edinburgh",
    "filename": "university-of-edinburgh.webp",
    "image": "/images/about/universities/university-of-edinburgh.webp"
  },
  {
    "name": "ETH Zurich",
    "filename": "eth-zurich.webp",
    "image": "/images/about/universities/eth-zurich.webp"
  },
  {
    "name": "Charles Sturt University",
    "filename": "charles-sturt-university.webp",
    "image": "/images/about/universities/charles-sturt-university.webp"
  },
  {
    "name": "Arizona State University",
    "filename": "arizona-state-university.webp",
    "image": "/images/about/universities/arizona-state-university.webp"
  },
  {
    "name": "Auckland University of Technology",
    "filename": "auckland-university-of-technology.webp",
    "image": "/images/about/universities/auckland-university-of-technology.webp"
  },
  {
    "name": "Khalifa University",
    "filename": "khalifa-university.webp",
    "image": "/images/about/universities/khalifa-university.webp"
  },
  {
    "name": "York University",
    "filename": "york-university.webp",
    "image": "/images/about/universities/york-university.webp"
  },
  {
    "name": "National University of Singapore",
    "filename": "national-university-of-singapore.webp",
    "image": "/images/about/universities/national-university-of-singapore.webp"
  },
  {
    "name": "University of Manchester",
    "filename": "university-of-manchester.webp",
    "image": "/images/about/universities/university-of-manchester.webp"
  },
  {
    "name": "University of Illinois at Chicago",
    "filename": "university-of-illinois-at-chicago.webp",
    "image": "/images/about/universities/university-of-illinois-at-chicago.webp"
  },
  {
    "name": "La Trobe University",
    "filename": "la-trobe-university.webp",
    "image": "/images/about/universities/la-trobe-university.webp"
  },
  {
    "name": "EPFL",
    "filename": "epfl.webp",
    "image": "/images/about/universities/epfl.webp"
  },
  {
    "name": "Technical University of Munich",
    "filename": "technical-university-of-munich.webp",
    "image": "/images/about/universities/technical-university-of-munich.webp"
  },
  {
    "name": "Northeastern University",
    "filename": "northeastern-university.webp",
    "image": "/images/about/universities/northeastern-university.webp"
  },
  {
    "name": "Massey University",
    "filename": "massey-university.webp",
    "image": "/images/about/universities/massey-university.webp"
  },
  {
    "name": "Lincoln University",
    "filename": "lincoln-university.webp",
    "image": "/images/about/universities/lincoln-university.webp"
  },
  {
    "name": "Griffith University",
    "filename": "griffith-university.webp",
    "image": "/images/about/universities/griffith-university.webp"
  },
  {
    "name": "University of Birmingham",
    "filename": "university-of-birmingham.webp",
    "image": "/images/about/universities/university-of-birmingham.webp"
  },
  {
    "name": "University of South Florida",
    "filename": "university-of-south-florida.webp",
    "image": "/images/about/universities/university-of-south-florida.webp"
  },
  {
    "name": "University of Sharjah",
    "filename": "university-of-sharjah.webp",
    "image": "/images/about/universities/university-of-sharjah.webp"
  },
  {
    "name": "Wilfrid Laurier University",
    "filename": "wilfrid-laurier-university.webp",
    "image": "/images/about/universities/wilfrid-laurier-university.webp"
  },
  {
    "name": "Deakin University",
    "filename": "deakin-university.webp",
    "image": "/images/about/universities/deakin-university.webp"
  },
  {
    "name": "Curtin Singapore",
    "filename": "curtin-singapore.webp",
    "image": "/images/about/universities/curtin-singapore.webp"
  }
];

function UniversityCard({ university, active, index }) {
  return (
    <article
      className={`group relative isolate h-[390px] w-full min-w-0 overflow-hidden rounded-[22px] bg-[#0C337B] transition-[opacity,box-shadow] duration-700 sm:h-[420px] sm:rounded-[25px] lg:h-[445px] ${active ? "opacity-100 shadow-[0_25px_60px_rgba(12,51,123,0.25)]" : "opacity-85 shadow-[0_8px_24px_rgba(12,51,123,0.1)]"}`}
      style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
    >
      {/* University background image */}
      <div className="absolute -inset-[1px] overflow-hidden rounded-[inherit] bg-[#0C337B]">
        <Image
          src={university.image}
          alt={university.name}
          fill
          priority={index === 0}
          sizes="(max-width: 479px) 85vw, (max-width: 767px) 60vw, (max-width: 1023px) 45vw, 30vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        />
      </div>

      {/* Image gradient overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B3B]/95 via-[#061B3B]/45 to-[#061B3B]/10" />

      {/* Top badge */}
      <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/90 px-3 py-2 text-[#0C337B] shadow-sm">
        <GraduationCap size={15} className="text-[#1765F5]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">University</span>
      </div>

      {/* University name */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col px-5 pb-5 sm:px-6 sm:pb-6">
        <h3 className="line-clamp-3 break-words text-[25px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[29px] lg:text-[32px]">
          {university.name}
        </h3>
        <div aria-hidden="true" className="mt-4 h-[3px] w-[48px] rounded-full bg-[#A2C1FB] transition-all duration-500 group-hover:w-[80px]" />
      </div>
    </article>
  );
}

export default function UniversitiesCarousel() {
  const swiperRef = useRef(null);

  return (
    <section aria-labelledby="universities-carousel-title" className="relative w-full overflow-hidden bg-[#F8FAFF] py-10 sm:py-12 lg:py-14">
      {/* Header */}
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-5 lg:px-8">
        <div className="relative mb-6 flex flex-col items-center gap-5 lg:mb-8">
          <div className="mx-auto w-full max-w-[850px] text-center">
            <h2 id="universities-carousel-title" className="text-center text-[28px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#1765F5] sm:text-[35px] lg:text-[44px]">
              Our Global <span className="text-[#0C337B]">University Network.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[750px] text-center text-[12px] leading-[1.65] text-[#526B8C] sm:text-[13px] lg:text-[14px]">
              We work with trusted universities and institutions worldwide to provide students with genuine opportunities and a smooth admission experience.
            </p>
          </div>

          {/* Carousel navigation */}
          <div className="flex items-center justify-center gap-2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <button type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous university" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E5FA] bg-white text-[#0C337B] shadow-sm transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white sm:h-11 sm:w-11">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => swiperRef.current?.slideNext()} aria-label="Next university" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E5FA] bg-white text-[#0C337B] shadow-sm transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white sm:h-11 sm:w-11">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width 3D coverflow */}
      <div className="relative w-full overflow-hidden py-4">
        <Swiper
          modules={[EffectCoverflow]}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
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
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 180, modifier: 1, scale: 0.88, slideShadows: false }}
          breakpoints={{
                        320: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 1.6,
              spaceBetween: 100,
            },
            640: { slidesPerView: 2.2, spaceBetween: 0 },
            768: { slidesPerView: 2.8, spaceBetween: 0 },
            1024: { slidesPerView: 3.5, spaceBetween: 0 },
            1280: { slidesPerView: 4.2, spaceBetween: 0 },
            1536: { slidesPerView: 4.5, spaceBetween: 10 },
          }}
          className="w-full !overflow-visible"
        >
          {universities.map((university, index) => (
            <SwiperSlide key={university.filename} className="!h-auto">
              {({ isActive }) => (
                <UniversityCard university={university} active={isActive} index={index} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
