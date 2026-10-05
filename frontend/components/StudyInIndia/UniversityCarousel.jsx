"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const universities = [
  {
    name: "Chandigarh University",
    grade: "A+",
    image: "/images/universities/chandigarh-university.webp",
  },
  {
    name: "Amrita Vishwa Vidyapeetham",
    grade: "A++",
    image: "/images/universities/amrita-university.webp",
  },
  {
    name: "Vivekananda Global University",
    grade: "A+",
    image: "/images/universities/vgu.webp",
  },
  {
    name: "Shoolini University",
    grade: "A+",
    image: "/images/universities/shoolini-university.webp",
  },
  {
    name: "Amity University",
    grade: "A+",
    image: "/images/universities/amity-university.webp",
  },
  {
    name: "Manipal University Jaipur",
    grade: "A+",
    image: "/images/universities/manipal-university-jaipur.webp",
  },
  {
    name: "University of Petroleum and Energy Studies (UPES)",
    grade: "A",
    image: "/images/universities/upes.webp",
  },
  {
    name: "Dr. D. Y. Patil University, Navi Mumbai",
    grade: "A++",
    image: "/images/universities/dy-patil-university.webp",
  },
  {
    name: "Galgotias University",
    grade: "A+",
    image: "/images/universities/galgotias-university.webp",
  },
  {
    name: "GLA University",
    grade: "A+",
    image: "/images/universities/gla-university.webp",
  },
  {
    name: "Lovely Professional University",
    grade: "A++",
    image: "/images/universities/lpu.webp",
  },
  {
    name: "Parul University",
    grade: "A++",
    image: "/images/universities/parul-university.webp",
  },
  {
    name: "Sharda University",
    grade: "A+",
    image: "/images/universities/sharda-university.webp",
  },
  {
    name: "Uttaranchal University",
    grade: "A+",
    image: "/images/universities/uttaranchal-university.webp",
  },
];

export default function UniversityCarousel() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F7FA] py-12 sm:py-14 md:py-16 lg:py-[72px]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-16 h-[320px] w-[320px] rounded-full bg-[#18B8B5]/[0.06] blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[340px] w-[340px] rounded-full bg-[#063B72]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-5 md:mb-10 lg:mb-12">
          <div className="max-w-[760px]">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#18A9A6] sm:text-[13px]">
              Universities
            </p>

            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.035em] text-[#063B72] sm:text-[35px] md:text-[41px] lg:text-[46px]">
              Where Could You Go <span className="text-[#18B8B5]">Next !!</span>
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            <button type="button" onClick={handlePrev} aria-label="Previous university" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_8px_24px_rgba(6,59,114,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white sm:h-12 sm:w-12">
              <ChevronLeft size={21} strokeWidth={2} />
            </button>

            <button type="button" onClick={handleNext} aria-label="Next university" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#063B72] shadow-[0_8px_24px_rgba(6,59,114,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#18B8B5] hover:bg-[#18B8B5] hover:text-white sm:h-12 sm:w-12">
              <ChevronRight size={21} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden px-0 py-3 sm:px-1">
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 top-0 z-30 w-[8px] bg-gradient-to-r from-[#F4F7FA] to-transparent sm:w-[14px]" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 top-0 z-30 w-[8px] bg-gradient-to-l from-[#F4F7FA] to-transparent sm:w-[14px]" />

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
            slidesPerView={1.18}
            spaceBetween={12}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 115,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.45,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2.15,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.55,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3.35,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.65,
                spaceBetween: 22,
              },
            }}
            className="!overflow-visible !pb-8 !pt-3"
          >
            {universities.map((university) => (
              <SwiperSlide key={university.name} className="h-auto">
                {({ isActive }) => (
                  <UniversityCard university={university} active={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function UniversityCard({ university, active }) {
  return (
    <article className={`group relative h-full overflow-hidden rounded-[26px] border bg-white transition-all duration-500 ${active ? "z-20 scale-100 border-[#18B8B5]/40 opacity-100 shadow-[0_24px_60px_rgba(6,59,114,0.16)]" : "z-10 scale-[0.93] border-[#DCE6ED] opacity-[0.82] shadow-[0_10px_30px_rgba(6,59,114,0.08)]"}`}>
      <div className="absolute left-0 right-0 top-0 z-20 h-[5px] bg-[#18B8B5]" />

      <div className="relative h-[285px] w-full overflow-hidden sm:h-[300px] md:h-[320px] lg:h-[335px]">
        <Image src={university.image} alt={university.name} fill sizes="(max-width: 639px) 88vw, (max-width: 1023px) 48vw, 31vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041C35]/70 via-[#041C35]/5 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3.5 py-2 shadow-[0_6px_18px_rgba(6,59,114,0.10)] backdrop-blur-md">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#18B8B5]/10 text-[#119D9A]">
            <BadgeCheck size={16} strokeWidth={2.3} />
          </span>

          <div className="leading-none">
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#7A8998]">
              NAAC
            </p>

            <p className="mt-1 text-[13px] font-bold text-[#063B72]">
              {university.grade}
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 left-5 right-5">
          <p className="line-clamp-2 text-[19px] font-bold leading-[1.25] text-white sm:text-[20px] md:text-[21px]">
            {university.name}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8A98A7]">
              Accreditation
            </p>

            <p className="mt-1.5 text-[14px] font-bold text-[#063B72] sm:text-[15px]">
              NAAC {university.grade} Accredited
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#18B8B5]/15 bg-[#18B8B5]/10 text-[#18A9A6]">
            <BadgeCheck size={21} strokeWidth={2} />
          </div>
        </div>
      </div>
    </article>
  );
}