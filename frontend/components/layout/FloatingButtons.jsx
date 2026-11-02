"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function FloatingButtons({ whatsappNumber = "919217368750" }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello University Yatra, I would like guidance for studying abroad."
  )}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] sm:h-16 sm:w-16"
        aria-label="Chat on WhatsApp"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-[28px] text-white sm:text-[32px]"
        />
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-75"></span>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-[#063B72] shadow-[0_4px_16px_rgba(6,59,114,0.3)] transition-all duration-300 hover:bg-[#1765F5] hover:shadow-[0_6px_24px_rgba(23,101,245,0.4)] sm:h-14 sm:w-14"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="text-white sm:size-[24px]" strokeWidth={2.5} />
        </button>
      )}
    </>
  );
}
