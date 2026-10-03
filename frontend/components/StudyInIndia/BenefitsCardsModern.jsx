import { Briefcase, GitCompare, Award, Video } from 'lucide-react';

const BenefitsCardsModern = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Study While You Work',
      description: 'Complete your degree without leaving your job. Flexible formats for working professionals.',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: GitCompare,
      title: 'Compare Universities',
      description: 'Explore and compare programs from 16+ Indian universities side by side.',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: Award,
      title: 'WES-Recognized',
      description: 'WES-recognized universities and internationally accepted degrees for global careers.',
      gradient: 'from-[#2ebeb5] to-cyan-600',
    },
    {
      icon: Video,
      title: 'Flexible Learning',
      description: 'Online learning with optional campus visits. Study from anywhere in the world.',
      gradient: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Key Benefits
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover why thousands of students choose to study in India for quality education and career growth
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden group"
              >
                {/* Card */}
                <div
                  className={`rounded-2xl p-6 md:p-8 h-full flex flex-col bg-gradient-to-br ${benefit.gradient} transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                >
                  {/* Icon Container */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Shine Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCardsModern;
