"use client";

import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

// NOTE: email / WhatsApp / timings are placeholders - replace with real details.
const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    info: "info@universityyatra.com",
    subInfo: "We reply within 24 hours",
    href: "mailto:info@universityyatra.com",
    iconBg: "bg-[#EDF5FF] text-[#1765F5]",
    accent: "from-[#1765F5] to-[#5B9BFF]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    info: "+91 98765 43210",
    subInfo: "Chat with us instantly",
    href: "https://wa.me/919876543210",
    external: true,
    iconBg: "bg-[#E6F9F0] text-[#25D366]",
    accent: "from-[#25D366] to-[#7CE8A8]",
  },
  {
    icon: Clock,
    title: "Office Hours",
    info: "Mon - Sat, 10 AM - 7 PM",
    subInfo: "Sunday closed",
    iconBg: "bg-[#F3EDFF] text-[#7C3AED]",
    accent: "from-[#7C3AED] to-[#B794F6]",
    wide: true,
  },
];

export default function ContactInfo() {
  return (
    <section
      aria-labelledby="contact-info-title"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAFCFF] to-[#F5F9FF] py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          {/* LEFT - FEATURE PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0C337B] to-[#1765F5] p-6 text-white sm:p-8"
          >
            {/* decorative shapes */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#5B9BFF]/30 blur-3xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />

            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] backdrop-blur">
                <Sparkles size={13} />
                Multiple Ways To Connect
              </div>

              <h2
                id="contact-info-title"
                className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[30px]"
              >
                Choose Your Preferred{" "}
                <span className="text-[#9CC5FF]">Contact Method</span>
              </h2>

              <p className="mt-3 max-w-[380px] text-[13px] leading-[1.7] text-white/75">
                We're here to help you every step of the way. Reach out through
                any of these channels.
              </p>
            </div>

            <div className="relative mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                <div className="text-[20px] font-extrabold">24h</div>
                <div className="text-[11px] text-white/70">Average reply time</div>
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                <div className="text-[20px] font-extrabold">Free</div>
                <div className="text-[11px] text-white/70">Profile evaluation</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - CONTACT CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const Wrapper = method.href ? motion.a : motion.div;
              const linkProps = method.href
                ? {
                    href: method.href,
                    ...(method.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {}),
                  }
                : {};

              return (
                <Wrapper
                  key={method.title}
                  {...linkProps}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative flex flex-col overflow-hidden rounded-[20px] border border-[#E4ECF7] bg-white p-5 shadow-[0_6px_20px_rgba(12,51,123,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_14px_30px_rgba(23,101,245,0.14)] ${
                    method.wide ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* top accent bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${method.accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${method.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={22} strokeWidth={1.9} />
                    </div>
                    {method.href && (
                      <ArrowUpRight
                        size={18}
                        className="text-[#A0B3C8] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1765F5]"
                      />
                    )}
                  </div>

                  <h3 className="text-[15px] font-bold text-[#0C337B]">
                    {method.title}
                  </h3>
                  <p className="mt-1 break-words text-[13px] font-semibold text-[#1765F5]">
                    {method.info}
                  </p>
                  <p className="mt-0.5 text-[12px] text-[#66758B]">
                    {method.subInfo}
                  </p>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}