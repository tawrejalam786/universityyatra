
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative isolate w-full overflow-hidden bg-[#E8F0FE]"
    >
      {/* =====================================
          SAME BANNER FOR ALL DEVICES
      ===================================== */}

      <div className="relative w-full lg:h-[550px]">

        {/* Background Banner Image */}
        <div className="relative aspect-[1440/550] w-full overflow-hidden lg:h-full lg:aspect-auto">
          <Image
            src="/images/about/about-university-yatra-banner-no-cta.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-center lg:object-cover"
          />
        </div>

        {/* Accessible Content */}
        <div className="sr-only">
          <p>About University Yatra™</p>

          <h1 id="about-hero-heading">
            Global Education, Thoughtfully Navigated.
          </h1>

          <p>
            Beyond applications and destinations,
            it begins with understanding you.
          </p>

          <p>
            From finding the right university to navigating
            applications, finances, and visa requirements,
            University Yatra helps you make sense of your
            options and move forward with a plan built
            around your profile, priorities, and ambitions.
          </p>
        </div>

        {/* =====================================
            CLICKABLE CTA BUTTON
        ===================================== */}

        <div className="relative z-20 flex w-full hidden lg:block justify-center px-4 pb-5 pt-3 lg:absolute lg:left-1/2 lg:top-[48%] lg:w-auto lg:-translate-x-1/2 lg:p-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <Link
              href="/career-counselling"
              className="group inline-flex  min-h-[44px] items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#063B72] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(6,59,114,0.18)] transition-all duration-300 hover:bg-[#1765F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1765F5] sm:text-[14px] lg:px-7"
            >
              Book A Free Session

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
