'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Award } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const universities = [
  { name: 'Amity University Online', accreditation: 'NAAC A+' },
  { name: 'Lovely Professional University Online', accreditation: 'NAAC A+' },
  { name: 'Manipal University Jaipur Online', accreditation: 'NAAC A+' },
  { name: 'Aligarh Muslim University Online', accreditation: 'NAAC A+' },
  { name: 'Chandigarh University Online', accreditation: 'NAAC A+' },
  { name: 'Andhra University', accreditation: 'NAAC A++' },
  { name: 'Galgotias University Online', accreditation: 'NAAC A+' },
  { name: 'Jain University Online', accreditation: 'NAAC A+' },
  { name: 'Sharda University Online', accreditation: 'NAAC A+' },
  { name: 'D Y Patil University Mumbai Online', accreditation: 'NAAC A+' },
  { name: 'GLA University Mathura Online', accreditation: 'NAAC A+' },
  { name: 'Noida International University Online', accreditation: 'NAAC A+' },
  { name: 'Vivekananda Global University Jaipur', accreditation: 'NAAC A+' },
  { name: 'Kurukshetra University', accreditation: 'NAAC A+' },
  { name: 'Maharishi Markandeshwar University', accreditation: 'NAAC A+' },
  { name: 'Uttaranchal University Online', accreditation: 'NAAC A+' },
];

const UniversityCard = ({ university }) => {
  const isAPlusPlus = university.accreditation === 'NAAC A++';
  
  const cardClasses = isAPlusPlus
    ? 'rounded-2xl p-5 border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-100 cursor-pointer transition-all duration-300'
    : 'rounded-2xl p-5 border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:border-brand-teal hover:shadow-lg hover:shadow-teal-50 cursor-pointer transition-all duration-300';
  
  const iconColor = isAPlusPlus ? 'text-yellow-500' : 'text-brand-teal';
  
  const badgeClasses = isAPlusPlus
    ? 'text-xs font-bold px-2 py-1 rounded-full bg-yellow-100 text-yellow-700'
    : 'text-xs font-bold px-2 py-1 rounded-full bg-teal-50 text-brand-teal';

  return (
    <div className={cardClasses}>
      <div className="flex items-start justify-between mb-3">
        <Award className={`w-5 h-5 ${iconColor}`} />
        <span className={badgeClasses}>
          {university.accreditation}
        </span>
      </div>
      <h3 className="font-bold text-slate-900 text-sm leading-tight mt-2">
        {university.name}
      </h3>
    </div>
  );
};

export default function UniversitiesCarouselModern() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Top Universities in India
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore NAAC accredited universities offering flexible online and blended learning programs
          </p>
        </div>

        {/* Mobile Swiper Carousel */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={16}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
              el: '.uni-pagination',
            }}
          >
            {universities.map((university, index) => (
              <SwiperSlide key={index}>
                <UniversityCard university={university} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="uni-pagination mt-6 flex justify-center"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {universities.map((university, index) => (
            <UniversityCard key={index} university={university} />
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-brand-teal text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-teal-dark transition-colors mt-10 block mx-auto">
          View All Universities
        </button>
      </div>
    </section>
  );
}
