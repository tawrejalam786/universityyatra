"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Building2,
  CalendarCheck,
  ArrowRight,
  Car,
  ShieldCheck,
  Train,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const perks = [
  { icon: Car, label: "Basement parking" },
  { icon: ShieldCheck, label: "24/7 security & reception" },
  { icon: Train, label: "Metro & public transport" },
];

export default function ContactMap() {
  const address = {
    building: "Supertech Astralis",
    street: "Unit 917, 9th Floor, SuperNova Astralis Sec 94, Noida – 201301",
    city: "Uttar Pradesh",
    country: "India",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d832.8062251416197!2d77.3246953!3d28.5508051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ce975fb079%3A0xe10ea4df9cc7fa68!2sSupertech%20Astralis!5e1!3m2!1sen!2sin!4v1792648333531!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Supertech+Astralis%2C+Sector+94%2C+Noida",
  };

  // NOTE: placeholder WhatsApp number - replace with the real one.
  const bookVisitUrl =
    "https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20counselling%20visit.";

  return (
    <section
      aria-labelledby="contact-map-title"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <div className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            <MapPin size={14} />
            Visit Our Office
          </div>

          <h2
            id="contact-map-title"
            className="text-[24px] font-extrabold leading-tight tracking-[-0.03em] text-[#0C337B] sm:text-[30px]"
          >
            Find Us On <span className="text-[#1765F5]">The Map</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[560px] text-[12px] leading-[1.6] text-[#66758B] sm:text-[13px]">
            Located in the heart of Noida. Book a visit before coming for
            personalized guidance.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
          {/* LEFT - MAP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative h-[280px] w-full overflow-hidden rounded-[24px] border border-[#E4ECF7] shadow-[0_8px_28px_rgba(12,51,123,0.06)] lg:h-full lg:min-h-[360px]">
              <iframe
                src={address.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University Yatra Office Location"
                className="absolute inset-0 h-full w-full"
              />

              {/* Directions button floating on the map */}
              <a
                href={address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl bg-[#1765F5] px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(23,101,245,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C337B]"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* RIGHT - DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 flex flex-col gap-4 lg:order-2"
          >
            {/* Address Card */}
            <div className="flex items-start gap-4 rounded-[20px] border border-[#E4ECF7] bg-white p-5 shadow-[0_6px_20px_rgba(12,51,123,0.04)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5FF] text-[#1765F5]">
                <Building2 size={22} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#0C337B]">
                  Office Address
                </h3>
                <div className="mt-1.5 text-[13px] leading-[1.7] text-[#526B8C]">
                  <p className="font-semibold text-[#0C337B]">
                    {address.building}
                  </p>
                  <p>
                    {address.street}, {address.city}
                  </p>
                  <p>{address.country}</p>
                </div>
              </div>
            </div>

            {/* Book a Visit CTA */}
            <div className="relative flex-1 overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-5 text-white">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              <div className="relative flex h-full flex-col justify-between gap-4">
                <div>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                    <CalendarCheck size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[17px] font-bold leading-snug">
                    Book a Free Counselling Visit
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-[1.6] text-white/75">
                    Meet our counsellors in person, get your profile evaluated
                    and plan your study abroad journey.
                  </p>
                </div>

                <a
                  href={bookVisitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] font-bold text-[#0C337B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EDF5FF]"
                >
                  Book Now
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PERKS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 grid gap-3 sm:grid-cols-3"
        >
          {perks.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 rounded-xl border border-[#E4ECF7] bg-[#F8FAFF] px-4 py-2.5"
            >
              <Icon size={16} className="shrink-0 text-[#1765F5]" />
              <span className="text-[12px] font-semibold text-[#0C337B]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}