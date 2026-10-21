"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Globe } from "lucide-react";
import Image from "next/image";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    info: "info@universityyatra.com",
    subInfo: "We reply within 24 hours",
    href: "mailto:info@universityyatra.com",
    color: "bg-[#EDF5FF] text-[#1765F5]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    info: "+91 98765 43210",
    subInfo: "Chat with us instantly",
    href: "https://wa.me/919876543210",
    color: "bg-[#E6F9F0] text-[#25D366]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactInfo() {
  return (
    <section
      aria-labelledby="contact-info-title"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAFCFF] to-[#F5F9FF] py-12 sm:py-14 lg:py-16"
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
            <span className="h-[7px] w-[7px] rounded-full bg-[#1765F5]" />
            Multiple Ways To Connect
          </div>

          <h2
            id="contact-info-title"
            className="text-[29px] font-extrabold leading-tight tracking-[-0.035em] text-[#0C337B] sm:text-[36px] lg:text-[42px]"
          >
            Choose Your Preferred{" "}
            <span className="text-[#1765F5]">Contact Method</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-[1.8] text-[#66758B] sm:text-[15px]">
            We're here to help you every step of the way. Reach out through any of these channels.
          </p>
        </motion.div>

        {/* CONTACT CARDS GRID */}
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center rounded-[24px] border-2 border-[#E4ECF7] bg-white p-6 text-center shadow-[0_6px_20px_rgba(12,51,123,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1765F5] hover:shadow-[0_12px_28px_rgba(23,101,245,0.12)] sm:p-8"
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${method.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3 className="text-[16px] font-bold text-[#0C337B] sm:text-[17px]">
                  {method.title}
                </h3>

                <p className="mt-2 text-[14px] font-semibold text-[#1765F5] sm:text-[15px]">
                  {method.info}
                </p>

                <p className="mt-1 text-[12px] text-[#66758B]">{method.subInfo}</p>
              </motion.a>
            );
          })}
        </div>

        {/* OFFICE HOURS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[24px] border border-[#DFEAFB] bg-white p-6 sm:flex-row sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EDF5FF] text-[#1765F5]">
              <Clock size={26} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-[#0C337B] sm:text-[18px]">
                Office Hours
              </h3>
              <p className="mt-1 text-[13px] leading-[1.7] text-[#526B8C] sm:text-[14px]">
                Monday - Saturday: 9:00 AM - 7:00 PM IST
                <br />
                Sunday: Closed (Email support available)
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <div className="flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-green-500" />
            </div>
            <span className="text-[13px] font-semibold text-green-600">
              We're Online Now
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
