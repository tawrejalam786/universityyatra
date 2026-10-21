"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Building2, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactMap() {
  const address = {
    building: "Supernova, 9th Floor",
    street: "94, Noida",
    city: "Uttar Pradesh",
    country: "India",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5936753524895!2d77.3718!3d28.5706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzE0LjIiTiA3N8KwMjInMTguNSJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionsUrl: "https://www.google.com/maps/dir//Supernova+Noida",
  };

  return (
    <section
      aria-labelledby="contact-map-title"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1765F5]">
            <MapPin size={16} />
            Visit Our Office
          </div>

          <h2
            id="contact-map-title"
            className="text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-[#0C337B] sm:text-[36px] lg:text-[42px]"
          >
            Find Us On{" "}
            <span className="text-[#1765F5]">The Map</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-[1.8] text-[#66758B] sm:text-[15px]">
            Located in the heart of Noida. Schedule an appointment before visiting for personalized guidance.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* LEFT - MAP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-[24px] border-2 border-[#E4ECF7] bg-white shadow-[0_8px_28px_rgba(12,51,123,0.06)]">
              <div className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]">
                <iframe
                  src={address.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="University Yatra Office Location"
                  className="h-full w-full"
                />
              </div>

              {/* Get Directions Button Overlay */}
              <div className="border-t border-[#E4ECF7] bg-gradient-to-br from-[#F8FAFF] to-white p-5">
                <a
                  href={address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#1765F5] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_6px_20px_rgba(23,101,245,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C337B] hover:shadow-[0_10px_24px_rgba(12,51,123,0.25)] sm:text-[15px]"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - ADDRESS DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 space-y-5 lg:order-2"
          >
            {/* Address Card */}
            <div className="rounded-[24px] border-2 border-[#E4ECF7] bg-white p-6 shadow-[0_6px_20px_rgba(12,51,123,0.04)] sm:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDF5FF] text-[#1765F5]">
                <Building2 size={26} strokeWidth={1.8} />
              </div>

              <h3 className="mb-4 text-[18px] font-bold text-[#0C337B] sm:text-[20px]">
                Office Address
              </h3>

              <div className="space-y-2 text-[14px] leading-[1.8] text-[#526B8C] sm:text-[15px]">
                <p className="font-semibold text-[#0C337B]">{address.building}</p>
                <p>{address.street}</p>
                <p>{address.city}</p>
                <p>{address.country}</p>
              </div>

            </div>

            {/* Office Hours Card */}
            <div className="rounded-[24px] border-2 border-[#E4ECF7] bg-gradient-to-br from-[#F0F6FF] to-white p-6 sm:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDF5FF] text-[#1765F5]">
                <Clock size={26} strokeWidth={1.8} />
              </div>

              <h3 className="mb-4 text-[18px] font-bold text-[#0C337B]">
                Office Hours
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-[13px] sm:text-[14px]">
                  <span className="font-semibold text-[#0C337B]">Monday - Friday</span>
                  <span className="text-[#526B8C]">9:00 AM - 7:00 PM</span>
                </div>

                <div className="flex items-center justify-between text-[13px] sm:text-[14px]">
                  <span className="font-semibold text-[#0C337B]">Saturday</span>
                  <span className="text-[#526B8C]">10:00 AM - 5:00 PM</span>
                </div>

                <div className="flex items-center justify-between text-[13px] sm:text-[14px]">
                  <span className="font-semibold text-[#0C337B]">Sunday</span>
                  <span className="text-red-500">Closed</span>
                </div>

                <div className="mt-4 border-t border-[#E4ECF7] pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-3 w-3 items-center justify-center">
                      <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative h-2 w-2 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[13px] font-semibold text-green-600">
                      Open Now
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Parking & Accessibility Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex items-start gap-4 rounded-[20px] border border-[#E4ECF7] bg-white p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5FF] text-[#1765F5]">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#0C337B]">Parking Available</h4>
              <p className="mt-1 text-[12px] text-[#526B8C]">
                Ample parking space in the building basement
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-[20px] border border-[#E4ECF7] bg-white p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5FF] text-[#1765F5]">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#0C337B]">Safe & Secure</h4>
              <p className="mt-1 text-[12px] text-[#526B8C]">
                24/7 security and reception desk
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-[20px] border border-[#E4ECF7] bg-white p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5FF] text-[#1765F5]">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-[#0C337B]">Easy Access</h4>
              <p className="mt-1 text-[12px] text-[#526B8C]">
                Well-connected via metro and public transport
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
