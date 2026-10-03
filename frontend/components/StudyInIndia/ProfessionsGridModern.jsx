'use client';

import { Code, BarChart3, Cpu, DollarSign, Megaphone, TrendingUp } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

const professions = [
  {
    icon: Code,
    title: "Software Developer",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Data Analyst",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    icon: Cpu,
    title: "Data Scientist",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: DollarSign,
    title: "Financial Accountant",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Specialist",
    gradient: "from-rose-500 to-pink-600"
  }
];

export default function ProfessionsGridModern() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Top In-Demand Professions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Build your career in high-growth fields with strong job prospects
          </p>
        </div>

        {/* Mobile: Swiper Carousel */}
        <div className="md:hidden -mx-4 px-4">
          <Swiper
            slidesPerView={1.6}
            spaceBetween={16}
            freeMode={true}
            modules={[FreeMode]}
          >
            {professions.map((profession, index) => (
              <SwiperSlide key={index}>
                <ProfessionCard profession={profession} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-5 gap-6 max-w-6xl mx-auto">
          {professions.map((profession, index) => (
            <ProfessionCard key={index} profession={profession} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfessionCard({ profession }) {
  const Icon = profession.icon;
  
  return (
    <div className="rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Top section with gradient */}
      <div className={`h-28 bg-gradient-to-br ${profession.gradient} flex items-center justify-center relative`}>
        {/* Subtle white circle behind icon */}
        <div className="absolute w-20 h-20 bg-white/10 rounded-full"></div>
        {/* Icon */}
        <Icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
      </div>

      {/* Bottom section */}
      <div className="bg-white p-4 border border-slate-100 rounded-b-2xl">
        <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
          {profession.title}
        </h3>
        <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          <TrendingUp className="w-3 h-3" />
          High Demand
        </span>
      </div>
    </div>
  );
}
