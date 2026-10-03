import { BookOpen, GraduationCap, Award, CheckCircle2, IndianRupee } from 'lucide-react';

const PricingCardsModern = () => {
  const pricingTiers = [
    {
      id: 1,
      name: 'Diploma / Certificate Programs',
      priceRange: '₹50,000 - 2,00,000',
      period: 'per annum',
      icon: BookOpen,
      gradient: 'from-blue-500 to-blue-700',
      colorTheme: 'blue'
    },
    {
      id: 2,
      name: "Bachelor's Degree",
      priceRange: '₹1,00,000 - 4,00,000',
      period: 'per annum',
      icon: GraduationCap,
      gradient: 'from-violet-500 to-purple-700',
      colorTheme: 'purple'
    },
    {
      id: 3,
      name: "Master's Degree",
      priceRange: '₹1,50,000 - 6,00,000',
      period: 'per annum',
      icon: Award,
      gradient: 'from-[#2ebeb5] to-emerald-600',
      colorTheme: 'teal'
    }
  ];

  const features = [
    'Flexible payment options',
    'NAAC A+ accredited university',
    'Industry-recognized degree'
  ];

  const whyIndiaPoints = [
    {
      id: 1,
      title: 'Low Living Costs',
      description: 'Affordable accommodation and daily expenses',
      icon: IndianRupee
    },
    {
      id: 2,
      title: 'Quality Education',
      description: 'World-class universities and expert faculty',
      icon: Award
    },
    {
      id: 3,
      title: 'Campus Facilities',
      description: 'Modern infrastructure and resources',
      icon: GraduationCap
    },
    {
      id: 4,
      title: 'Strong Outcomes',
      description: 'Excellent career opportunities and placements',
      icon: BookOpen
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Affordable Tuition Fees
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Study in India offers world-class education at a fraction of the cost compared to other countries
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => {
            const IconComponent = tier.icon;
            return (
              <div
                key={tier.id}
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                {/* Top Band */}
                <div className={`h-32 bg-gradient-to-br ${tier.gradient} relative flex items-center justify-center`}>
                  {/* Decorative circles */}
                  <div className="absolute top-2 right-2 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-16 h-16 bg-white/10 rounded-full"></div>
                  
                  {/* Program Badge */}
                  <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full absolute top-4 left-4 text-white">
                    {tier.name}
                  </span>
                  
                  {/* Icon */}
                  <IconComponent className="w-12 h-12 text-white z-10" />
                </div>

                {/* Card Body */}
                <div className="bg-white p-6">
                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-slate-900">
                      {tier.priceRange}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{tier.period}</p>

                  {/* Divider */}
                  <div className="border-t border-slate-100 my-4"></div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full bg-gradient-to-r ${tier.gradient} text-white rounded-xl py-3 font-semibold hover:opacity-90 transition-opacity mt-4`}
                  >
                    Explore Programs
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why India is Cost-Effective */}
        <div className="bg-brand-navy text-white rounded-2xl p-6 md:p-8 max-w-5xl mx-auto mt-10">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why India is Cost-Effective
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyIndiaPoints.map((point) => {
              const IconComponent = point.icon;
              return (
                <div key={point.id} className="flex gap-3">
                  <div className="bg-brand-teal/20 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{point.title}</h4>
                    <p className="text-sm text-slate-300">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCardsModern;
