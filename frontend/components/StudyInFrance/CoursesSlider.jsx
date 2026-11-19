
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

/* =========================================
   CATEGORY FILTERS
========================================= */

const tabs = [
  { id: "all", label: "All Programs" },
  { id: "bachelors", label: "Bachelor's" },
  { id: "masters", label: "Master's" },
];

/* =========================================
   FRANCE PROGRAMS FROM THE PROVIDED UNIVERSITY COURSE PDFS
========================================= */

const courseCards = [
  {
    "id": 1,
    "course": "International Bachelor in Management",
    "cardTitle": "Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/international-business-administration-bs.webp",
    "color": "#2A9D4B",
    "universityName": "Paris School of Business",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 10700.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 2,
    "course": "Global BBA Bachelor in Business Administration",
    "cardTitle": "Business Administration",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bach-business-administration-bs.webp",
    "color": "#6D2A9D",
    "universityName": "NEOMA Business School",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Sep"
  },
  {
    "id": 3,
    "course": "Bachelor in Digital Marketing & E-Commerce Management (Direct entry in 3rd year)",
    "cardTitle": "Digital Marketing & E-Commerce Management (Direct…",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/marketing-business-administration-phd.webp",
    "color": "#9D8F2A",
    "universityName": "Clermont School of Business",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 8500.00",
    "intake": "Sep"
  },
  {
    "id": 4,
    "course": "Bachelor in International Business - Responsible commercial activities",
    "cardTitle": "International Business - Responsible commercial…",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/mba-international-business-ms.webp",
    "color": "#2A8A9D",
    "universityName": "INSEEC Business School",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 10050.00",
    "intake": "Sep,Mar"
  },
  {
    "id": 5,
    "course": "BA (Hons) in Fashion Business",
    "cardTitle": "Fashion Business",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/business-administration-bs.webp",
    "color": "#9D2A68",
    "universityName": "Istituto Marangoni, Paris",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 25800.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 6,
    "course": "Bachelor in Art Management",
    "cardTitle": "Art Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/art-economics-bs.webp",
    "color": "#479D2A",
    "universityName": "IESA Arts & Culture",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9650.00",
    "intake": "Sep"
  },
  {
    "id": 7,
    "course": "Bachelor in Luxury Communication Management (Paris School of Luxury)",
    "cardTitle": "Luxury Communication Management (Paris School of…",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/business-administration-finance-phd.webp",
    "color": "#2F2A9D",
    "universityName": "MediaSchool International",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9500.00",
    "intake": "Oct"
  },
  {
    "id": 8,
    "course": "Bachelor in Digital & Marketing Communication",
    "cardTitle": "Digital & Marketing Communication",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/film-media-production.webp",
    "color": "#9D502A",
    "universityName": "Institut supérieur du commerce de Paris - ISC, Paris",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 10700.00",
    "intake": "Sep,Mar"
  },
  {
    "id": 9,
    "course": "Bachelor in Management",
    "cardTitle": "Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/business-administration-phd.webp",
    "color": "#2A9D72",
    "universityName": "Toulouse Business School",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 13390.00",
    "intake": "Sep"
  },
  {
    "id": 10,
    "course": "Bachelor of Science in Management",
    "cardTitle": "Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/Computer-Science.webp",
    "color": "#942A9D",
    "universityName": "EDC Paris Business School, Paris",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9900.00",
    "intake": "Sep,Feb"
  },
  {
    "id": 11,
    "course": "Bachelor's in Fashion Communication (French Track)",
    "cardTitle": "'s in Fashion Communication (French Track)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/game-design-ms.webp",
    "color": "#859D2A",
    "universityName": "Atelier Chardon Savard",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 13190.00",
    "intake": "Sep"
  },
  {
    "id": 12,
    "course": "Master in Management (Double degree) (RNCP Certified)",
    "cardTitle": "Management (Double degree)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-administration-supply-bs.webp",
    "color": "#2A639D",
    "universityName": "Toulouse Business School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 16000.00",
    "intake": "Sep"
  },
  {
    "id": 13,
    "course": "Master in Management (PGE) - Business Analytics (RNCP Certified)",
    "cardTitle": "Management (PGE) - Business Analytics",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-analytics-ms.webp",
    "color": "#9D2A42",
    "universityName": "South Champagne Business School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11500.00",
    "intake": "Feb,May,Sep"
  },
  {
    "id": 14,
    "course": "Masters in Hospitality Management (RNCP Certified)",
    "cardTitle": "Hospitality Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/hospitality-management-ms.webp",
    "color": "#2A9D34",
    "universityName": "Grand Sud Tourism School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Feb,Oct"
  },
  {
    "id": 15,
    "course": "MBA in Global Luxury Management (Paris School of Luxury) (RNCP Certified)",
    "cardTitle": "Global Luxury Management (Paris School of Luxury)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/global-management-ms.webp",
    "color": "#552A9D",
    "universityName": "MediaSchool International",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 8000.00",
    "intake": "Oct"
  },
  {
    "id": 16,
    "course": "MBA in Performing Arts Management & Entertainment (RNCP Certified)",
    "cardTitle": "Performing Arts Management & Entertainment",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/co-op-management-ms.webp",
    "color": "#9D772A",
    "universityName": "IESA Arts & Culture",
    "duration": "1 year 3 months",
    "tuitionCostYearly": "EUR 13520.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 17,
    "course": "MSc Environmental Transition and Energy Management (CGE Accredited)",
    "cardTitle": "Environmental Transition and Energy Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/dba-business-analytics-phd.webp",
    "color": "#2A9D99",
    "universityName": "ESAIP Graduate School of Engineering",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 9290.00",
    "intake": "Oct,Feb"
  },
  {
    "id": 18,
    "course": "MSc Global Supply Chain Management (Long Track) (RNCP Certified)",
    "cardTitle": "Global Supply Chain Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/finance-business-administration-bs.webp",
    "color": "#9D2A80",
    "universityName": "KEDGE Business School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 10200.00",
    "intake": "Sep"
  },
  {
    "id": 19,
    "course": "MSc International Business (EMLV Business School ) (12 months) (RNCP Certified)",
    "cardTitle": "ternational Business",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/new-business-administration-phd.webp",
    "color": "#5E9D2A",
    "universityName": "De Vinci Higher Education",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 13400.00",
    "intake": "Oct,Jan"
  },
  {
    "id": 20,
    "course": "MSc in AI for Business Transformation (CGE)",
    "cardTitle": "AI for Business Transformation",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/data-science-ai-phd.webp",
    "color": "#2A3D9D",
    "universityName": "ECE Engineering School",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 12990.00",
    "intake": "Oct"
  },
  {
    "id": 21,
    "course": "Master in Management (RNCP Certified)",
    "cardTitle": "Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/project-management-ms.webp",
    "color": "#9D392A",
    "universityName": "Burgundy School of Business",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 14600.00",
    "intake": "Sep"
  },
  {
    "id": 22,
    "course": "MSc in Corporate Finance & Tech (Two Years) (RNCP Certified)",
    "cardTitle": "Corporate Finance & Tech",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/finance-bs.webp",
    "color": "#2A9D5A",
    "universityName": "ICN Business School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13000.00",
    "intake": "May"
  },
  {
    "id": 23,
    "course": "MSc in Digital Marketing & Business Intelligence - 24 Months (RNCP Certified)",
    "cardTitle": "Digital Marketing & Business Intelligence - 24 Months",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-artificial-science-ms.webp",
    "color": "#7C2A9D",
    "universityName": "Excelia Group, La Rochelle",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 16250.00",
    "intake": "Sep"
  },
  {
    "id": 24,
    "course": "MSc Cybersecurity and Data Science (CGE Accredited)",
    "cardTitle": "Cybersecurity and Data Science",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/cybersecurity-ms.webp",
    "color": "#9D9D2A",
    "universityName": "ESAIP Graduate School of Engineering",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 9790.00",
    "intake": "Oct,Mar"
  },
  {
    "id": 25,
    "course": "MSc in Artificial Intelligence - 2 Years (CGE)",
    "cardTitle": "Artificial Intelligence",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-electrical-engineering-phd.webp",
    "color": "#2A7B9D",
    "universityName": "ECE Engineering School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 12990.00",
    "intake": "Oct,Mar"
  },
  {
    "id": 26,
    "course": "MSc in Data, AI & Business Innovation (Two Years) (RNCP Certified)",
    "cardTitle": "Data, AI & Business Innovation",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/computer-science-analytics-phd.webp",
    "color": "#9D2A59",
    "universityName": "ICN Business School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13000.00",
    "intake": "May"
  },
  {
    "id": 27,
    "course": "Master in IT (RNCP Certified)",
    "cardTitle": "IT",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/economics-masters.webp",
    "color": "#389D2A",
    "universityName": "EPITECH, Paris",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 28,
    "course": "MSc Data Sciences for Business Analytics (Two Years) (RNCP Certified)",
    "cardTitle": "Data Sciences for Business Analytics",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/data-science-ms.webp",
    "color": "#3D2A9D",
    "universityName": "EM Normandie",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13000.00",
    "intake": "Sep"
  },
  {
    "id": 29,
    "course": "Master of Science in Connected Embedded Intelligence Systems (MGCER, India & Esigelec) - PSW eligible",
    "cardTitle": "Connected Embedded Intelligence Systems (MGCER…",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/computer-science-engineering-phd.webp",
    "color": "#9D5F2A",
    "universityName": "Esigelec Graduate School of Engineering",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 8578.00",
    "intake": "Aug"
  },
  {
    "id": 30,
    "course": "MSc in Data Science & Artificial Intelligence (RNCP Certified)",
    "cardTitle": "Data Science & Artificial Intelligence",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-science-bs.webp",
    "color": "#2A9D81",
    "universityName": "DSTI School of Engineering",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Mar,Oct"
  },
  {
    "id": 31,
    "course": "ISEP Engineering Master Degree Program - Business Intelligence (RNCP Certified)",
    "cardTitle": "ISEP Engineering Master Degree Program - Business…",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-ms.webp",
    "color": "#9D2A98",
    "universityName": "Institut supérieur d`électronique de Paris (ISEP)",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11840.00",
    "intake": "Sep"
  },
  {
    "id": 32,
    "course": "Master in Management (PGE) - Artificial Intelligence (RNCP Certified)",
    "cardTitle": "Management (PGE) - Artificial Intelligence",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-phd.webp",
    "color": "#769D2A",
    "universityName": "South Champagne Business School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11500.00",
    "intake": "May,Sep"
  },
  {
    "id": 33,
    "course": "MBA in Development, Data Science and Artificial Intelligence (IRIS Paris) (RNCP Certified)",
    "cardTitle": "Development, Data Science and Artificial…",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-science-mathematics-bs.webp",
    "color": "#2A559D",
    "universityName": "MediaSchool International",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 8000.00",
    "intake": "Oct,Mar"
  },
  {
    "id": 34,
    "course": "Master in Data Science & Artificial Intelligence Strategy - 2 Years (CGE)",
    "cardTitle": "Data Science & Artificial Intelligence Strategy",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-science-ms.webp",
    "color": "#9D2A33",
    "universityName": "Emlyon Business School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13750.00",
    "intake": "Sep"
  },
  {
    "id": 35,
    "course": "Master in Engineering (Grande Ecole) - Cybersecurity & Cloud Computing (ESILV- Engineering School) (RNCP Certified)",
    "cardTitle": "Engineering (Grande Ecole) - Cybersecurity…",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/automotive-engineering-ms.webp",
    "color": "#2A9D42",
    "universityName": "De Vinci Higher Education",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11400.00",
    "intake": "Sep"
  },
  {
    "id": 36,
    "course": "Bachelor Tech for Management",
    "cardTitle": "Tech for Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/adult-profesional-community-phd.webp",
    "color": "#642A9D",
    "universityName": "Paris School of Business",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 11400.00",
    "intake": "Sep"
  },
  {
    "id": 37,
    "course": "BBA Global Management",
    "cardTitle": "BBA Global Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/aerospace-engineerings-bs.webp",
    "color": "#9D862A",
    "universityName": "Skema Business School",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 38,
    "course": "BSc in Data Science for responsible business",
    "cardTitle": "Data Science for responsible business",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/data-analytics-ms.webp",
    "color": "#2A939D",
    "universityName": "Emlyon Business School",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 15100.00",
    "intake": "Sep"
  },
  {
    "id": 39,
    "course": "Bachelor in Artificial Intelligence",
    "cardTitle": "Artificial Intelligence",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-phd.webp",
    "color": "#9D2A71",
    "universityName": "ECE Engineering School",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 8850.00",
    "intake": "Oct,Mar"
  },
  {
    "id": 40,
    "course": "BSc in Computer Science & Engineering",
    "cardTitle": "Computer Science & Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/information-computer-science-phd.webp",
    "color": "#509D2A",
    "universityName": "DSTI School of Engineering",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Mar,Oct"
  },
  {
    "id": 41,
    "course": "Bachelor in Communication (ECS Communication School)",
    "cardTitle": "Communication (ECS Communication School)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/film-media-studies.webp",
    "color": "#2A2E9D",
    "universityName": "MediaSchool International",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 7900.00",
    "intake": "Oct"
  },
  {
    "id": 42,
    "course": "Bachelor's in Engineering (ESILV- Engineering School)",
    "cardTitle": "'s in Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/bachelor-civil-engineering.webp",
    "color": "#9D472A",
    "universityName": "De Vinci Higher Education",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 11400.00",
    "intake": "Sep"
  },
  {
    "id": 43,
    "course": "Master in Engineering (Grande Ecole) - Data Engineering & AI (ESILV- Engineering School) (RNCP Certified)",
    "cardTitle": "Engineering (Grande Ecole) - Data Engineering & AI",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-bs.webp",
    "color": "#2A9D69",
    "universityName": "De Vinci Higher Education",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11400.00",
    "intake": "Sep"
  },
  {
    "id": 44,
    "course": "Master of Engineering - Embedded Systems Major (RNCP Certified)",
    "cardTitle": "Embedded Systems Major",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-bs-v2.webp",
    "color": "#8B2A9D",
    "universityName": "ECE Engineering School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 12690.00",
    "intake": "Sep"
  },
  {
    "id": 45,
    "course": "Masters in Science and Technology - Software Engineering and Digital Transformation (Feb. Intake) (Short Track) - PSW eligible",
    "cardTitle": "Science and Technology - Software Engineering and…",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-phd.webp",
    "color": "#8E9D2A",
    "universityName": "Esigelec Graduate School of Engineering",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 9333.00",
    "intake": "Feb"
  },
  {
    "id": 46,
    "course": "ISEP Engineering Master Degree Program Embedded Systems (RNCP Certified)",
    "cardTitle": "ISEP Engineering Master Degree Program Embedded…",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-phd.webp",
    "color": "#2A6C9D",
    "universityName": "Institut supérieur d`électronique de Paris (ISEP)",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11840.00",
    "intake": "Sep"
  },
  {
    "id": 47,
    "course": "MSc Aerospace Propulsion - 2 Year (CGE Accredited)",
    "cardTitle": "Aerospace Propulsion",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/civil-engineering-phd.webp",
    "color": "#9D2A4B",
    "universityName": "IPSA - Graduate School of Aeronautics & Space Engineering",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 12990.00",
    "intake": "Sep"
  },
  {
    "id": 48,
    "course": "Master in Transportation Design (RNCP Certified)",
    "cardTitle": "Transportation Design",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/sustainable-design-engineering-ms.webp",
    "color": "#2A9D2B",
    "universityName": "Strate School of Design",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13560.00",
    "intake": "Sep"
  },
  {
    "id": 49,
    "course": "MSc in Advanced Design and Management of Durable Constructions (RNCP Certified)",
    "cardTitle": "Advanced Design and Management of Durable…",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/sustainable-design-engineering-phd.webp",
    "color": "#4C2A9D",
    "universityName": "IMT Nord Europe",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 6500.00",
    "intake": "Sep"
  },
  {
    "id": 50,
    "course": "MSc in Design and Management of the Industry 4.0 (RNCP Certified)",
    "cardTitle": "Design and Management of the Industry 4.0",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/art-in-law-society-bs.webp",
    "color": "#9D6E2A",
    "universityName": "IMT Nord Europe",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 6500.00",
    "intake": "Sep"
  },
  {
    "id": 51,
    "course": "MSc in Aerospace Management- 2 Year (RNCP Certified)",
    "cardTitle": "Aerospace Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/electronic-engineering-phd.webp",
    "color": "#2A9D8F",
    "universityName": "Toulouse Business School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13450.00",
    "intake": "Sep"
  },
  {
    "id": 52,
    "course": "Bachelor in French Pastry Arts",
    "cardTitle": "French Pastry Arts",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/concentration-health-hospitality-ms.webp",
    "color": "#9D2A89",
    "universityName": "Ecole Ducasse, Paris",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 18500.00",
    "intake": "Feb,Aug"
  },
  {
    "id": 53,
    "course": "Bachelor in International Pastry Management",
    "cardTitle": "International Pastry Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/anatomy-lab.webp",
    "color": "#679D2A",
    "universityName": "Lyfe Institute",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 15579.00",
    "intake": "Sep"
  },
  {
    "id": 54,
    "course": "BA (Hons) in Fashion Design",
    "cardTitle": "Fashion Design",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/ba-criminology-bs.webp",
    "color": "#2A469D",
    "universityName": "Istituto Marangoni, Paris",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 25800.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 55,
    "course": "Bachelor in Global Fashion",
    "cardTitle": "Global Fashion",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/applied-computing-ms.webp",
    "color": "#9D2F2A",
    "universityName": "Istituto Marangoni, Paris",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 56,
    "course": "Bachelor in Fashion Business & Digital Marketing Intensive",
    "cardTitle": "Fashion Business & Digital Marketing Intensive",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/finance-ms.webp",
    "color": "#2A9D51",
    "universityName": "Istituto Marangoni, Paris",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 25850.00",
    "intake": "Sep"
  },
  {
    "id": 57,
    "course": "Bachelor in Fashion Design Intensive",
    "cardTitle": "Fashion Design Intensive",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/architecture.webp",
    "color": "#732A9D",
    "universityName": "Istituto Marangoni, Paris",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 25850.00",
    "intake": "Sep"
  },
  {
    "id": 58,
    "course": "Bachelor in Fashion Styling & Digital Art Direction Intensive",
    "cardTitle": "Fashion Styling & Digital Art Direction Intensive",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ba-legal-studies-economics-bs.webp",
    "color": "#9D942A",
    "universityName": "Istituto Marangoni, Paris",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 25850.00",
    "intake": "Sep"
  },
  {
    "id": 59,
    "course": "Bachelor in Fashion Design",
    "cardTitle": "Fashion Design",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/ba-psychology-bs.webp",
    "color": "#2A849D",
    "universityName": "LISAA – Higher Institute of Applied Arts",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 11300.00",
    "intake": "Sep"
  },
  {
    "id": 60,
    "course": "Bachelor in Fashion Business",
    "cardTitle": "Fashion Business",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/master-accounting-ms.webp",
    "color": "#9D2A63",
    "universityName": "LISAA – Higher Institute of Applied Arts",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 11300.00",
    "intake": "Sep"
  },
  {
    "id": 61,
    "course": "Bachelor in Graphic Design",
    "cardTitle": "Graphic Design",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bachelor-criminology-bs.webp",
    "color": "#419D2A",
    "universityName": "LISAA – Higher Institute of Applied Arts",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 11599.00",
    "intake": "Sep"
  },
  {
    "id": 62,
    "course": "MSc in Luxury & Fashion Management - 2 Years (RNCP Certified)",
    "cardTitle": "Luxury & Fashion Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/masters-law-ms.webp",
    "color": "#342A9D",
    "universityName": "Paris School of Business",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11800.00",
    "intake": "Sep,Feb"
  },
  {
    "id": 63,
    "course": "Master in Fashion & Luxury Brand Management (RNCP Certified)",
    "cardTitle": "Fashion & Luxury Brand Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bachelor-education-bs.webp",
    "color": "#9D562A",
    "universityName": "Istituto Marangoni, Paris",
    "duration": "1 year 3 months",
    "tuitionCostYearly": "EUR 26800.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 64,
    "course": "MSc in Luxury & Design Management (Two Year) (RNCP Certified)",
    "cardTitle": "Luxury & Design Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bachelor-hornours-criminology-bs.webp",
    "color": "#2A9D78",
    "universityName": "ICN Business School",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13000.00",
    "intake": "Sep"
  },
  {
    "id": 65,
    "course": "Master in Fashion Design & Brand Creation (RNCP Certified)",
    "cardTitle": "Fashion Design & Brand Creation",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/bachelor-social-juticebs.webp",
    "color": "#992A9D",
    "universityName": "LISAA – Higher Institute of Applied Arts",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13000.00",
    "intake": "Sep"
  },
  {
    "id": 66,
    "course": "Master in Fashion Design & Innovation (RNCP Certified)",
    "cardTitle": "Fashion Design & Innovation",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biological-sciences-bs.webp",
    "color": "#7F9D2A",
    "universityName": "LISAA – Higher Institute of Applied Arts",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13000.00",
    "intake": "Sep"
  },
  {
    "id": 67,
    "course": "Master Design Transition (RNCP Certified)",
    "cardTitle": "Master Design Transition",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/biological-sciences-ms.webp",
    "color": "#2A5E9D",
    "universityName": "Strate School of Design",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11850.00",
    "intake": "Sep"
  },
  {
    "id": 68,
    "course": "Master's in Fashion Design (RNCP Certified)",
    "cardTitle": "Fashion Design",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/bs-criminal-justice-bs.webp",
    "color": "#9D2A3C",
    "universityName": "Atelier Chardon Savard",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11290.00",
    "intake": "Sep"
  }
];

/* =========================================
   COMPACT CATEGORY PILL
========================================= */

function CategoryPill({ tab, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`inline-flex h-[34px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-3 text-[10px] font-semibold transition-all duration-300 sm:h-[40px] sm:px-5 sm:text-[12px] ${selected
          ? "border-[#1765F5] bg-[#1765F5] text-white shadow-[0_4px_12px_rgba(23,101,245,0.15)]"
          : "border-[#DCE6F3] bg-white text-[#0C337B] hover:border-[#1765F5] hover:text-[#1765F5]"
        }`}
    >
      {tab.label}
    </button>
  );
}

/* =========================================
   MAIN COURSES SLIDER
========================================= */

export default function CoursesSlider() {
  const swiperRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [activeTab, setActiveTab] = useState("all");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  /* FILTER COURSES */
  const filteredCourses = courseCards.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  /* CATEGORY CHANGE */
  const changeTab = (tabId) => {
    setActiveTab(tabId);
    setIsBeginning(true);
    setIsEnd(false);
    swiperRef.current = null;
  };

  /* PREVIOUS SLIDE */
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  /* NEXT SLIDE */
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  /* UPDATE NAVIGATION STATE */
  const updateNavigation = (swiper) => {
    if (!swiper || swiper.destroyed) return;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  /* CATEGORY TITLE */
  const categoryTitle =
    activeTab === "masters"
      ? "Master's Degree Programs in France"
      : activeTab === "bachelors"
        ? "Bachelor's Degree Programs in France"
        : "All Degree Programs in France";

  return (
    <section className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-9">

      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-[280px] w-[280px] rounded-full bg-[#1765F5]/[0.06] blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#0C337B]/[0.05] blur-[100px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-3.5 sm:px-5 lg:px-6">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-5"
        >

          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.035em] text-[#0C337B] sm:text-[32px] md:text-[36px]">
            Explore Programs{" "}
            <span className="text-[#1765F5]">
              in France
            </span>
          </h2>

          {/* ACCENT DECORATION */}
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-[4px] w-[4px] rounded-full bg-[#1765F5]" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#1765F5]/65" />
            <span className="h-[4px] w-[4px] rounded-full bg-[#1765F5]/35" />
            <span className="h-[4px] w-12 rounded-full bg-[#1765F5]" />
          </div>
        </motion.div>

        {/* =====================================
            CATEGORY FILTERS + SLIDER ARROWS

            MOBILE:
            - ALL 3 TABS IN ONE LINE
            - ARROWS BELOW, RIGHT ALIGNED

            DESKTOP:
            - TABS LEFT
            - ARROWS RIGHT
        ===================================== */}

        <div className="mb-4 flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">

          {/* CATEGORY BUTTONS - NO SCROLL */}
          <div className="flex w-full min-w-0 flex-nowrap items-center justify-start gap-1.5 sm:w-auto sm:flex-1 sm:gap-2.5">

            {tabs.map((tab) => (
              <CategoryPill
                key={tab.id}
                tab={tab}
                selected={activeTab === tab.id}
                onClick={() => changeTab(tab.id)}
              />
            ))}

          </div>

          {/* SLIDER NAVIGATION */}
          <div className="flex w-full shrink-0 items-center justify-end gap-2 sm:w-auto sm:gap-2">

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={isBeginning}
              aria-label="Previous course"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#0C337B] shadow-[0_4px_12px_rgba(12,51,123,0.06)] transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#D9E4ED] disabled:hover:bg-white disabled:hover:text-[#0C337B] sm:h-10 sm:w-10"
            >
              <ChevronLeft size={17} strokeWidth={2.1} />
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={handleNext}
              disabled={isEnd}
              aria-label="Next course"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9E4ED] bg-white text-[#0C337B] shadow-[0_4px_12px_rgba(12,51,123,0.06)] transition-all duration-300 hover:border-[#1765F5] hover:bg-[#1765F5] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#D9E4ED] disabled:hover:bg-white disabled:hover:text-[#0C337B] sm:h-10 sm:w-10"
            >
              <ChevronRight size={17} strokeWidth={2.1} />
            </button>

          </div>
        </div>

        {/* =====================================
            SELECTED CATEGORY TITLE
        ===================================== */}

        <div className="mb-2">
          <h3 className="text-[16px] font-bold text-[#0C337B] sm:text-[19px]">
            {categoryTitle}
          </h3>
        </div>

        {/* =====================================
            COURSE SLIDER

            DESKTOP: 3.5 CARDS VISIBLE
        ===================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative w-full min-w-0"
        >

          <Swiper
            key={activeTab}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigation(swiper);
            }}
            onSlideChange={updateNavigation}
            onReachBeginning={updateNavigation}
            onReachEnd={updateNavigation}
            slidesPerView={1.15}
            spaceBetween={12}
            speed={550}
            grabCursor={true}
            watchOverflow={true}
            breakpoints={{
              480: {
                slidesPerView: 1.4,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 18,
              },
            }}
            className="!overflow-hidden !bg-transparent !pb-4 !pt-4"
          >

            {filteredCourses.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!h-auto"
              >
                <CourseCard item={item} />
              </SwiperSlide>
            ))}

          </Swiper>
        </motion.div>

        {/* =====================================
            STEM DISCLAIMER
        ===================================== */}

        <p className="mt-2 text-[11px] leading-[1.6] text-[#64748B] sm:text-[12px]">
          *STEM designation is indicative based on the programme subject. Confirm the exact classification and course or visa requirements with the French institution.
        </p>

      </div>
    </section>
  );
}

/* =========================================
   COURSE CARD COMPONENT
========================================= */

function CourseCard({ item }) {
  return (
    <article
      className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[20px] border border-[#DCE5EC] bg-white shadow-[0_8px_24px_rgba(6,59,114,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--card-color)] hover:shadow-[0_15px_32px_rgba(6,59,114,0.13)]"
      style={{
        "--card-color": item.color,
      }}
    >

      {/* COLORED TOP BORDER */}
      <div className="absolute inset-x-0 top-0 z-20 h-[5px] bg-[var(--card-color)]" />

      {/* COURSE IMAGE */}
      <div className="relative mx-3.5 mt-3.5 h-[140px] shrink-0 overflow-hidden rounded-[14px] sm:h-[150px]">

        <Image
          src={item.image}
          alt={item.course}
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 28vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.055]"
        />

        {/* IMAGE GRADIENT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031A30]/15 via-transparent to-transparent"
        />

        {/* STEM BADGE */}
        {item.stem && (
          <div className="absolute right-3 top-3 z-30">

            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#A2C1FB] bg-[#E8F0FE] px-2.5 py-1.5 text-[10px] font-extrabold tracking-[0.05em] text-[#1047AC] shadow-[0_4px_12px_rgba(12,51,123,0.12)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1765F5]" />
              STEM
            </span>

          </div>
        )}

      </div>

      {/* CARD BODY */}
      <div className="relative flex flex-1 flex-col px-4 pb-2 pt-4">

        {/* COURSE HEADING */}
        <h3 className="line-clamp-2 min-h-[44px] text-[18px] font-bold leading-[1.25] tracking-[-0.025em] text-[#0C337B] sm:text-[19px]">
          {item.cardTitle}
        </h3>

        {/* DYNAMIC ACCENT LINE */}
        <div className="mt-3 h-[3px] w-10 rounded-full bg-[var(--card-color)]" />

        {/* KEY PROGRAM DETAILS: COMPACT 2 × 2 LAYOUT */}
        <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-x-2 gap-y-3 border-t border-[#E8EDF2] pt-3">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.09em] text-[#718096]">
              University
            </p>
            <p className="mt-0.5 text-[11px] font-semibold leading-snug text-[#31465B] sm:text-[12px]">
              {item.universityName}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[9px] font-semibold uppercase tracking-[0.09em] text-[#718096]">
              Duration
            </p>
            <p className="mt-0.5 text-[12px] font-bold text-[#0C337B]">
              {item.duration}
            </p>
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.09em] text-[#718096]">
              Tuition / year
            </p>
            <p className="mt-0.5 text-[12px] font-extrabold tracking-[-0.01em] text-[#0C337B]">
              {item.tuitionCostYearly}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[9px] font-semibold uppercase tracking-[0.09em] text-[#718096]">
              Intake
            </p>
            <p className="mt-0.5 text-[12px] font-bold text-[#0C337B]">
              {item.intake}
            </p>
          </div>
        </div>

        {/* EXPLORE COURSE → CONTACT US */}
        <Link
          href="/contact"
          aria-label={`Enquire about ${item.course}`}
          className="relative z-10 mt-3 flex min-h-[40px] w-full items-center justify-between gap-3 rounded-[10px] border border-[#E8EDF4] bg-[#F4F7FA] px-3.5 py-2.5 text-left text-[12px] font-bold text-[#0C337B] transition-all duration-300 hover:border-[var(--card-color)] hover:bg-[var(--card-color)] hover:text-white group-hover:border-[var(--card-color)] group-hover:bg-[var(--card-color)] group-hover:text-white"
        >
          <span>Explore Course</span>

          <ArrowRight
            size={17}
            strokeWidth={2}
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>
    </article>
  );
}


