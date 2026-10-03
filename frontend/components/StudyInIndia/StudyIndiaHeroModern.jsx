'use client';

import { GraduationCap, Globe2, Award, BookOpen, Sparkles, Star } from 'lucide-react';

export default function StudyIndiaHeroModern() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-dark to-[#001a33] flex items-center justify-center py-12 px-4">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-brand-teal rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <div 
          className="absolute bottom-32 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '6s' }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-56 h-56 bg-teal-400 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}
        />
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <GraduationCap className="absolute top-24 left-12 w-16 h-16 text-white opacity-10" />
        <Globe2 className="absolute bottom-32 right-16 w-20 h-20 text-white opacity-10" />
        <BookOpen className="absolute top-1/3 right-24 w-14 h-14 text-white opacity-10" />
        <Sparkles className="absolute bottom-1/4 left-20 w-12 h-12 text-white opacity-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Floating Stats Badges - Absolute positioning for desktop */}
        <div className="hidden lg:block">
          {/* Top Left - WES Recognized */}
          <div className="absolute -top-8 left-8 bg-white/15 backdrop-blur-md rounded-full px-5 py-3 flex items-center gap-2 shadow-lg border border-white/20 animate-pulse">
            <Award className="w-5 h-5 text-brand-teal" />
            <span className="text-white font-semibold text-sm">WES Recognized</span>
          </div>

          {/* Top Right - 16+ Universities */}
          <div className="absolute -top-12 right-12 bg-white/15 backdrop-blur-md rounded-full px-5 py-3 flex items-center gap-2 shadow-lg border border-white/20 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <GraduationCap className="w-5 h-5 text-brand-teal" />
            <span className="text-white font-semibold text-sm">16+ Universities</span>
          </div>

          {/* Bottom Left - 100% Online */}
          <div className="absolute -bottom-8 left-16 bg-white/15 backdrop-blur-md rounded-full px-5 py-3 flex items-center gap-2 shadow-lg border border-white/20 animate-pulse" style={{ animationDelay: '1s' }}>
            <Globe2 className="w-5 h-5 text-brand-teal" />
            <span className="text-white font-semibold text-sm">100% Online</span>
          </div>
        </div>

        {/* Glassmorphism Center Card */}
        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-teal/20 backdrop-blur-md border border-brand-teal/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-brand-teal fill-brand-teal" />
            <span className="text-brand-teal font-semibold text-xs md:text-sm">NAAC A+ Accredited Universities</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Flexible Learning with{' '}
            <span className="block text-brand-teal mt-2">Recognized Degrees</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Study While You Work or Study Anywhere in the World
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button className="group relative bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
              <span>Explore Universities</span>
              <GraduationCap className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/20 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-teal" />
              <span>Free Counselling</span>
            </button>
          </div>

          {/* Mobile Stats Badges - Below content on mobile */}
          <div className="lg:hidden mt-10 flex flex-wrap gap-3 justify-center">
            <div className="bg-white/15 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-white/20">
              <GraduationCap className="w-4 h-4 text-brand-teal" />
              <span className="text-white font-semibold text-xs">16+ Universities</span>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-white/20">
              <Globe2 className="w-4 h-4 text-brand-teal" />
              <span className="text-white font-semibold text-xs">100% Online</span>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-white/20">
              <Award className="w-4 h-4 text-brand-teal" />
              <span className="text-white font-semibold text-xs">WES Recognized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
