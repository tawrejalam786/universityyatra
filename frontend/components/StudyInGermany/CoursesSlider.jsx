
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
   GERMANY PROGRAMS FROM THE PROVIDED UNIVERSITY COURSE PDFS
========================================= */

const courseCards = [
  {
    "id": 1,
    "course": "BSc (Hons) in Accounting and Finance (APS & TestAS waiver)",
    "cardTitle": "Accounting & Finance",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/art-economics-bs.webp",
    "color": "#B42222",
    "universityName": "Lancaster University, Leipzig, Leipzig",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 18500.00",
    "intake": "Oct"
  },
  {
    "id": 2,
    "course": "BSc in International Marketing (APS & TestAS waiver)",
    "cardTitle": "International Marketing",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/international-business-administration-bs.webp",
    "color": "#2451BF",
    "universityName": "Schiller International University, Heidelberg Campus, Heidelberg",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 15400.00",
    "intake": "Sep"
  },
  {
    "id": 3,
    "course": "B.Sc. in International Business Management (APS required, TestAS waiver possible)",
    "cardTitle": "International Business Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/mba-international-business-ms.webp",
    "color": "#77B422",
    "universityName": "FOM Hochschule - University of Applied Sciences for Economics and Management",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12300.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 4,
    "course": "BA Business Administration | Data Science & Business (TestAS Not Required, APS Required)",
    "cardTitle": "Business Administration | Data Science & Business",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-analytics-phd.webp",
    "color": "#BF24AB",
    "universityName": "Whitecliffe University of Applied Sciences (Berlin International), Berlin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 8380.00",
    "intake": "Oct"
  },
  {
    "id": 5,
    "course": "B.A. Business Psychology - International Human Resources Management (TestAS waiver, APS required)",
    "cardTitle": "Business Psychology - International Human Resources",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ba-psychology-bs.webp",
    "color": "#22B49C",
    "universityName": "Karlshochschule International University, Karlsruhe",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9000.00",
    "intake": "Sep"
  },
  {
    "id": 6,
    "course": "Bachelor in Business Studies (BSc) (APS & TestAS required)",
    "cardTitle": "Business Studies (BSc)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bach-business-administration-bs.webp",
    "color": "#BF7824",
    "universityName": "EBS University, Oestrich-Winkel",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 18160.00",
    "intake": "Aug,Jan"
  },
  {
    "id": 7,
    "course": "BA in Business Management (TestAS waiver, APS required)",
    "cardTitle": "Business Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/business-administration-bs.webp",
    "color": "#4722B4",
    "universityName": "Macromedia University of Applied Sciences, Munich",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 8,
    "course": "Master of Business Administration (APS required)",
    "cardTitle": "Master of Business Administration",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-administration-finance-phd.webp",
    "color": "#2BBF24",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14825.00",
    "intake": "Mar,Sep,Jan,Jul"
  },
  {
    "id": 9,
    "course": "Global Business Administration (MBA) - 2 year (E-Learning) (APS waiver)",
    "cardTitle": "Global Business Administration (MBA)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/global-management-ms.webp",
    "color": "#B42253",
    "universityName": "SRH Fernhochschule – The Distance Learning University, Riedlingen",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 7548.00",
    "intake": "Jan,Dec"
  },
  {
    "id": 10,
    "course": "Master of Business Administration (MBA): General Technology Management - Automotive and Mobility Management (APS Required)",
    "cardTitle": "Technology Management: Automotive & Mobility",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/business-administration-phd.webp",
    "color": "#2485BF",
    "universityName": "Fachhochschule des Mittelstands (FHM) University",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 11015.00",
    "intake": "Feb,Jun,Oct"
  },
  {
    "id": 11,
    "course": "MSc in Supply Chain Management and Logistics (APS waiver)",
    "cardTitle": "Supply Chain Management & Logistics",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-administration-supply-bs.webp",
    "color": "#A8B422",
    "universityName": "Arden University Berlin Study Center, Berlin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 15000.00",
    "intake": "May,Sep,Nov,Feb"
  },
  {
    "id": 12,
    "course": "B.A. International Relations - Human Rights and International Law (TestAS waiver, APS required)",
    "cardTitle": "International Relations: Human Rights & Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/human-right-social-justice-ms.webp",
    "color": "#9E24BF",
    "universityName": "Karlshochschule International University, Karlsruhe",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9000.00",
    "intake": "Sep"
  },
  {
    "id": 13,
    "course": "Probestudium + B.A. International Relations - Human Rights and International Law (TestAS waiver, APS required)",
    "cardTitle": "International Relations: Human Rights & Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/art-in-law-society-bs.webp",
    "color": "#22B46B",
    "universityName": "Karlshochschule International University, Karlsruhe",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9000.00",
    "intake": "Sep"
  },
  {
    "id": 14,
    "course": "BA in Law, Economics and Governance - Berlin Campus (TestAs waiver, APS required)",
    "cardTitle": "Law, Economics & Governance - Berlin Campus",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ba-legal-studies-economics-bs.webp",
    "color": "#BF4424",
    "universityName": "SRH University – Berlin Campus, Berlin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 11000.00",
    "intake": "Oct"
  },
  {
    "id": 15,
    "course": "Bachelor in Law, Politics and Economics (BA) (APS & TestAS required)",
    "cardTitle": "Law, Politics & Economics",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bs-criminal-justice-bs.webp",
    "color": "#222FB4",
    "universityName": "EBS University, Oestrich-Winkel",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 18160.00",
    "intake": "Aug,Jan"
  },
  {
    "id": 16,
    "course": "LLM in Law & Technology | 120 ECTS - Berlin Campus (APS required)",
    "cardTitle": "Law & Technology | 120 ECTS - Berlin Campus",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/bs-law-society-bs.webp",
    "color": "#5EBF24",
    "universityName": "SRH University – Berlin Campus, Berlin",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13900.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 17,
    "course": "LLM in Law & Technology | 60 ECTS - Berlin Campus (APS required)",
    "cardTitle": "Law & Technology | 60 ECTS - Berlin Campus",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/justice-peace-studies-bs.webp",
    "color": "#B42284",
    "universityName": "SRH University – Berlin Campus, Berlin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 13900.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 18,
    "course": "LLM in Law & Technology | 90 ECTS - Berlin Campus (APS required)",
    "cardTitle": "Law & Technology | 90 ECTS - Berlin Campus",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/master-social-justice-ms.webp",
    "color": "#24B9BF",
    "universityName": "SRH University – Berlin Campus, Berlin",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 13900.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 19,
    "course": "B.Sc in Computer Science - Nursing informatics (TestAS waiver, APS required)",
    "cardTitle": "Computer Science - Nursing informatics",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/chemical-public-health-phd.webp",
    "color": "#B48F22",
    "universityName": "Karlshochschule International University, Karlsruhe",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9000.00",
    "intake": "Sep"
  },
  {
    "id": 20,
    "course": "B.Sc in Mechatronics - Medical Technology (TestAS waiver, APS required)",
    "cardTitle": "Mechatronics - Medical Technology",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/concentration-health-hospitality-ms.webp",
    "color": "#6B24BF",
    "universityName": "Karlshochschule International University, Karlsruhe",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9000.00",
    "intake": "Sep"
  },
  {
    "id": 21,
    "course": "B.Sc in Computer Science - Medical informatics (TestAS waiver, APS required)",
    "cardTitle": "Computer Science - Medical informatics",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/medicine-science-health.webp",
    "color": "#22B43A",
    "universityName": "Karlshochschule International University, Karlsruhe",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9000.00",
    "intake": "Sep"
  },
  {
    "id": 22,
    "course": "Probestudium + B.Sc in Computer Science - Medical informatics (TestAS waiver, APS required)",
    "cardTitle": "Computer Science: Medical Informatics",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/health-information-manegement-bs.webp",
    "color": "#BF2438",
    "universityName": "Karlshochschule International University, Karlsruhe",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9000.00",
    "intake": "Sep"
  },
  {
    "id": 23,
    "course": "Probestudium + B.Sc in Computer Science - Nursing informatics (TestAS waiver, APS required)",
    "cardTitle": "Computer Science: Nursing Informatics",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/kinesiology-health.webp",
    "color": "#225FB4",
    "universityName": "Karlshochschule International University, Karlsruhe",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9000.00",
    "intake": "Sep"
  },
  {
    "id": 24,
    "course": "Probestudium + B.Sc in Mechatronics - Medical Technology (TestAS waiver, APS required)",
    "cardTitle": "Mechatronics: Medical Technology",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/kinesiology-studies-health-phd.webp",
    "color": "#92BF24",
    "universityName": "Karlshochschule International University, Karlsruhe",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9000.00",
    "intake": "Sep"
  },
  {
    "id": 25,
    "course": "MA Psychological Counselling (120 ECTS) (Berlin) (APS required)",
    "cardTitle": "Psychological Counselling (120 ECTS) (Berlin)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/clinical-psychology-phd.webp",
    "color": "#B322B4",
    "universityName": "Macromedia University of Applied Sciences, Munich",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13680.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 26,
    "course": "MA Psychological Counselling (90 ECTS) (Berlin) (APS required)",
    "cardTitle": "Psychological Counselling (90 ECTS) (Berlin)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/counselor-education-supervision.webp",
    "color": "#24BF91",
    "universityName": "Macromedia University of Applied Sciences, Munich",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 13680.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 27,
    "course": "Master of Arts in Design Leadership (18 Months) (APS required)",
    "cardTitle": "Design Leadership (18 Months)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/criminology-arts-ms.webp",
    "color": "#B45E22",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 12828.00",
    "intake": "Sep"
  },
  {
    "id": 28,
    "course": "Master of Arts in Design Leadership (12 Months) (APS required)",
    "cardTitle": "Design Leadership (12 Months)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/film-media-production.webp",
    "color": "#3724BF",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14250.00",
    "intake": "Sep"
  },
  {
    "id": 29,
    "course": "Master of Arts in Design Leadership (24 Months) (APS required)",
    "cardTitle": "Design Leadership (24 Months)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/film-media-studies.webp",
    "color": "#3BB422",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 12552.00",
    "intake": "Sep"
  },
  {
    "id": 30,
    "course": "MA in International Business and Leadership - 2 Years (APS required)",
    "cardTitle": "International Business & Leadership - 2 Years",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-analytics-ms.webp",
    "color": "#BF246C",
    "universityName": "SRH University – Heidelberg Campus, Heidelberg",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13600.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 31,
    "course": "M.A. in International Business and Leadership - 90 ECTS (APS required)",
    "cardTitle": "International Business & Leadership - 90 ECTS",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/co-op-management-ms.webp",
    "color": "#2290B4",
    "universityName": "SRH University – Heidelberg Campus, Heidelberg",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 13600.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 32,
    "course": "M.Sc. in Information Technology and Business Transformation (Heidelberg Campus) (APS required)",
    "cardTitle": "Information Technology & Business Transformation",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/dba-business-analytics-phd.webp",
    "color": "#BFB824",
    "universityName": "SRH University – Heidelberg Campus, Heidelberg",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11500.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 33,
    "course": "B.Sc in Health Psychology (180 ECTS) (TestAS waiver, APS required)",
    "cardTitle": "Health Psychology (180 ECTS)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/psychological-health-sciences.webp",
    "color": "#8322B4",
    "universityName": "Macromedia University of Applied Sciences, Munich",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 34,
    "course": "BSc in Medicinal Chemistry and Chemical Biology (APS & TestAS required)",
    "cardTitle": "Medicinal Chemistry & Chemical Biology",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-bs.webp",
    "color": "#24BF5E",
    "universityName": "Constructor University, Bremen",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 20000.00",
    "intake": "Sep"
  },
  {
    "id": 35,
    "course": "Bachelor of Arts in Sports Science: Fitness & Health (TestAS waiver possible, APS required)",
    "cardTitle": "Sports Science: Fitness & Health",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/nurse-clinic-health.webp",
    "color": "#B42E22",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 13325.00",
    "intake": "Mar,Sep"
  },
  {
    "id": 36,
    "course": "BA in International Business Administration- Healthcare Management (International Track) (Berlin Campus) (TestAs waiver, APS required)",
    "cardTitle": "International Business: Healthcare Management",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/pharmaceutical-health.webp",
    "color": "#2445BF",
    "universityName": "SRH University – Berlin Campus, Berlin",
    "duration": "3 years 6 months",
    "tuitionCostYearly": "EUR 10200.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 37,
    "course": "BSc (Hons) Health and care Management (APS & TestAS waiver)",
    "cardTitle": "Health & care Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/pre-medicine-bs.webp",
    "color": "#6CB422",
    "universityName": "Arden University Berlin Study Center, Berlin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 10500.00",
    "intake": "Sep,May,Feb,Nov"
  },
  {
    "id": 38,
    "course": "MBBS (MD - Medical Doctor) (APS required)",
    "cardTitle": "Medicine (MBBS)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/public-health-ms.webp",
    "color": "#BF249F",
    "universityName": "University Targu Mures Medical Campus, Hamburg (UMCH), Hamburg",
    "duration": "6 years",
    "tuitionCostYearly": "EUR 34800.00",
    "intake": "Sep"
  },
  {
    "id": 39,
    "course": "B.S. in Clinical Psychology - Munich (180 ECTS) (TestAS waiver, APS required)",
    "cardTitle": "Clinical Psychology - Munich (180 ECTS)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/experimental-psychology-thes-phd.webp",
    "color": "#22B4A7",
    "universityName": "Macromedia University of Applied Sciences, Munich",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 40,
    "course": "B.A. in Healthcare Management - Munich (180 ECTS) (TestAS waiver, APS required)",
    "cardTitle": "Healthcare Management - Munich (180 ECTS)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/public-health.webp",
    "color": "#BF8424",
    "universityName": "Macromedia University of Applied Sciences, Munich",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 41,
    "course": "Master of Science in International Public Health Management (24 Months) (APS required)",
    "cardTitle": "International Public Health Management (24 Months)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/toxicology-health.webp",
    "color": "#5222B4",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 12552.00",
    "intake": "Sep,Mar,Jan"
  },
  {
    "id": 42,
    "course": "MSc in Medical & Pharmaceutical Biotechnology (APS required)",
    "cardTitle": "Medical & Pharmaceutical Biotechnology",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/wellness-health-ms.webp",
    "color": "#24BF2A",
    "universityName": "Fresenius University of Applied Sciences, Idstein",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11400.00",
    "intake": "Sep,Mar"
  },
  {
    "id": 43,
    "course": "MSc in Biomedicine (APS required)",
    "cardTitle": "Biomedicine",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/adult-profesional-community-phd.webp",
    "color": "#B42247",
    "universityName": "Fresenius University of Applied Sciences, Idstein",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11640.00",
    "intake": "Sep,Mar"
  },
  {
    "id": 44,
    "course": "MBA - Healthcare Management (APS required)",
    "cardTitle": "Healthcare Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/dual-mba-phd.webp",
    "color": "#2479BF",
    "universityName": "International University of Applied Sciences—IU, Bad Honnef",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 9833.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 45,
    "course": "MSc AI & Engineering for Medical Applications (APS required)",
    "cardTitle": "AI & Engineering for Medical Applications",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/aerospace-engineerings-bs.webp",
    "color": "#9CB422",
    "universityName": "Steinbeis University, Berlin",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 8330.00",
    "intake": "Oct"
  },
  {
    "id": 46,
    "course": "MA in Dance Movement Therapy (APS required)",
    "cardTitle": "Dance Movement Therapy",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/anatomy-lab.webp",
    "color": "#AA24BF",
    "universityName": "SRH University – Heidelberg Campus, Heidelberg",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 10900.00",
    "intake": "Oct"
  },
  {
    "id": 47,
    "course": "MA in International Business & Leadership - Healthcare Management (Dresden) - 1.5 Years (APS required)",
    "cardTitle": "International Business & Leadership - Healthcare",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/finance-business-administration-bs.webp",
    "color": "#22B476",
    "universityName": "SRH University – Dresden Campus, Dresden",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 13600.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 48,
    "course": "Master of Public Health (APS waiver)",
    "cardTitle": "Master of Public Health",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/master-accounting-ms.webp",
    "color": "#BF5024",
    "universityName": "Arden University Berlin Study Center, Berlin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 15000.00",
    "intake": "Sep,May,Nov,Feb"
  },
  {
    "id": 49,
    "course": "M.Sc. Health Informatics - Berlin Campus (APS Required)",
    "cardTitle": "Health Informatics - Berlin Campus",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/applied-computing-ms.webp",
    "color": "#2223B4",
    "universityName": "SRH University – Berlin Campus, Berlin",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13900.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 50,
    "course": "MBA with Specialisation Digital Health Transformation (APS required)",
    "cardTitle": "with Specialisation Digital Health Transformation",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/hospitality-management-ms.webp",
    "color": "#52BF24",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 12828.00",
    "intake": "Mar,Sep"
  },
  {
    "id": 51,
    "course": "Master of Science in Prevention & Therapy Management (24 Months) (APS required)",
    "cardTitle": "Prevention & Therapy Management (24 Months)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-phd.webp",
    "color": "#B42278",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 12552.00",
    "intake": "Mar,Sep"
  },
  {
    "id": 52,
    "course": "Master of Science in Digital Transformations (18 Months) (APS required)",
    "cardTitle": "Digital Transformations (18 Months)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-artificial-science-ms.webp",
    "color": "#24ACBF",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 12828.00",
    "intake": "Mar,Sep"
  },
  {
    "id": 53,
    "course": "BSc (Hons) in Software Engineering (TestAS waiver, APS required)",
    "cardTitle": "Software Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/automotive-engineering-ms.webp",
    "color": "#B49B22",
    "universityName": "Macromedia University of Applied Sciences, Munich",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 54,
    "course": "Bachelor of Science in Robotics and Intelligent Systems (APS & TestAS required)",
    "cardTitle": "Robotics & Intelligent Systems",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/data-science-ai-phd.webp",
    "color": "#7724BF",
    "universityName": "Constructor University, Bremen",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 20000.00",
    "intake": "Sep"
  },
  {
    "id": 55,
    "course": "Bachelor of Arts in Digital Product Management (TestAS waiver possible, APS required)",
    "cardTitle": "Digital Product Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/game-design-ms.webp",
    "color": "#22B446",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 13325.00",
    "intake": "Mar,Sep"
  },
  {
    "id": 56,
    "course": "B.Eng. in Industrial Engineering & Management (APS & TestAS required) (180 CPS)",
    "cardTitle": "Industrial Engineering & Management (180 CPS)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/bachelor-civil-engineering.webp",
    "color": "#BF242C",
    "universityName": "Fresenius University of Applied Sciences, Idstein",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 11400.00",
    "intake": "Sep"
  },
  {
    "id": 57,
    "course": "BSc in Industrial Engineering (E-Learning) (TestAS & APS waiver)",
    "cardTitle": "Industrial Engineering (E-Learning)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/civil-engineering-phd.webp",
    "color": "#2254B4",
    "universityName": "SRH Fernhochschule – The Distance Learning University, Riedlingen",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 5388.00",
    "intake": "Jan,Dec"
  },
  {
    "id": 58,
    "course": "B.Eng. Management & Technology (APS Required, TestAS Not Required)",
    "cardTitle": "Management & Technology",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/marketing-business-administration-phd.webp",
    "color": "#86BF24",
    "universityName": "Fachhochschule des Mittelstands (FHM) University of Applied Sciences",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 9256.00",
    "intake": "Feb,Jun,Oct"
  },
  {
    "id": 59,
    "course": "BEng in Applied Mechatronic Systems (TestAS waiver, APS required)",
    "cardTitle": "Applied Mechatronic Systems",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/architecture.webp",
    "color": "#B422A9",
    "universityName": "SRH University – Leipzig Campus, Leipzig",
    "duration": "3 years 6 months",
    "tuitionCostYearly": "EUR 10200.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 60,
    "course": "BA in Business Administration Specializing in Innovation, Technology & Digitalization (APS Required, TestAS not required)",
    "cardTitle": "Business Administration: Innovation & Digitalization",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/mba.webp",
    "color": "#24BF9D",
    "universityName": "Steinbeis University, Berlin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 6340.00",
    "intake": "Jan,Apr,Jul,Oct"
  },
  {
    "id": 61,
    "course": "B.A. in Event Engineering- (Berlin Campus) (TestAs waiver, APS required)",
    "cardTitle": "Event Engineering- (Berlin Campus)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-electrical-engineering-phd.webp",
    "color": "#B46A22",
    "universityName": "SRH University – Berlin Campus, Berlin",
    "duration": "3 years 6 months",
    "tuitionCostYearly": "EUR 9900.00",
    "intake": "Apr"
  },
  {
    "id": 62,
    "course": "B. Eng. Digital Industrial Engineering (APS required & TestAS not required)",
    "cardTitle": "Digital Industrial Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-ms.webp",
    "color": "#4324BF",
    "universityName": "Munich University of Digital Technology & Applied Sciences",
    "duration": "3 years 6 months",
    "tuitionCostYearly": "EUR 9600.00",
    "intake": "Mar,Oct"
  },
  {
    "id": 63,
    "course": "BSc in Electrical and Computer Engineering (APS & TestAS required)",
    "cardTitle": "Electrical & Computer Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-phd.webp",
    "color": "#30B422",
    "universityName": "Constructor University, Bremen",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 20000.00",
    "intake": "Sep"
  },
  {
    "id": 64,
    "course": "MSc in Computer science and Software Engineering (APS required)",
    "cardTitle": "Computer Science & Software Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-science-engineering-phd.webp",
    "color": "#BF245F",
    "universityName": "Constructor University, Bremen",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 20000.00",
    "intake": "Sep"
  },
  {
    "id": 65,
    "course": "Master of Science in Software Engineering - (18 Months) (APS required)",
    "cardTitle": "Software Engineering - (18 Months)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-science-bs.webp",
    "color": "#2285B4",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 12828.00",
    "intake": "Mar,Sep"
  },
  {
    "id": 66,
    "course": "MSc in Industrial Engineering and International Management (APS required)",
    "cardTitle": "Industrial Engineering & International Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-bs-v2.webp",
    "color": "#BABF24",
    "universityName": "Fresenius University of Applied Sciences, Idstein",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11400.00",
    "intake": "Mar,Sep"
  },
  {
    "id": 67,
    "course": "Master of Engineering (M.Eng.) in Semiconductor Engineering and Manufacturing Computer Scientists (SEMiCS) (APS required)",
    "cardTitle": "Semiconductor Engineering & Manufacturing Computer",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-science-mathematics-bs.webp",
    "color": "#8E22B4",
    "universityName": "Steinbeis University, Berlin",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 8400.00",
    "intake": "Oct"
  },
  {
    "id": 68,
    "course": "Master of Engineering & Sustainable Technology Management (M.Eng.) - Industry 4.0: Automation, Robotics & 3D Manufacturing (APS required)",
    "cardTitle": "Sustainable Technology Management - Industry 4.0:",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/sustainable-design-engineering-ms.webp",
    "color": "#24BF6A",
    "universityName": "SRH University – Heidelberg Campus, Heidelberg",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13900.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 69,
    "course": "MSc Engineering & Management (APS required)",
    "cardTitle": "Engineering & Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-phd.webp",
    "color": "#B43922",
    "universityName": "FOM Hochschule - University of Applied Sciences for Economics and Management",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13900.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 70,
    "course": "M.Sc. Robotics Engineering (24 Months) (APS required)",
    "cardTitle": "Robotics Engineering (24 Months)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/electronic-engineering-phd.webp",
    "color": "#2439BF",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 12552.00",
    "intake": "Mar,Sep,Jan"
  },
  {
    "id": 71,
    "course": "M.Eng. in Biochemical Engineering (APS required)",
    "cardTitle": "Biochemical Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/engineering-bs.webp",
    "color": "#60B422",
    "universityName": "Fresenius University of Applied Sciences, Idstein",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11640.00",
    "intake": "Sep"
  },
  {
    "id": 72,
    "course": "B.Sc. Data Science, AI & Digital Business (GISMA University of Applied Sciences) (TestAS waiver, APS required)",
    "cardTitle": "Data Science, AI & Digital Business",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/data-science-ms.webp",
    "color": "#BF2493",
    "universityName": "GISMA University of Applied Sciences, Berlin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 13825.00",
    "intake": "Jan,Apr,Jul,Oct"
  },
  {
    "id": 73,
    "course": "Bachelor of Science in Digital Business & Data Science (TestAS waiver possible, APS required)",
    "cardTitle": "Digital Business & Data Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-ms.webp",
    "color": "#22B4B3",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 13325.00",
    "intake": "Mar,Sep,Jan"
  },
  {
    "id": 74,
    "course": "Foundation + BA in Business Administration Specializing in Innovation, Technology & Digitalization (APS Required, TestAS not required)",
    "cardTitle": "Foundation: Business Administration & Digitalization",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/new-business-administration-phd.webp",
    "color": "#BF9024",
    "universityName": "Steinbeis University, Berlin",
    "duration": "3 years 3 months",
    "tuitionCostYearly": "EUR 7330.00",
    "intake": "Jan,Apr,Jul,Oct"
  },
  {
    "id": 75,
    "course": "B. Eng. Data Science and Artificial Intelligence (APS required & TestAS not required)",
    "cardTitle": "Data Science & Artificial Intelligence",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-phd.webp",
    "color": "#5E22B4",
    "universityName": "Munich University of Digital Technology & Applied Sciences",
    "duration": "3 years 6 months",
    "tuitionCostYearly": "EUR 9600.00",
    "intake": "Mar,Oct"
  },
  {
    "id": 76,
    "course": "BSc (Hons) in Cyber Security (APS & TestAS waiver)",
    "cardTitle": "Cyber Security",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/cyber-studies-phd.webp",
    "color": "#24BF36",
    "universityName": "Lancaster University, Leipzig, Leipzig",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 18500.00",
    "intake": "Oct"
  },
  {
    "id": 77,
    "course": "BSc in Business Analytics (APS & TestAS waiver)",
    "cardTitle": "Business Analytics",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/project-management-ms.webp",
    "color": "#B4223C",
    "universityName": "Schiller International University, Heidelberg Campus, Heidelberg",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 15400.00",
    "intake": "Sep,Feb"
  },
  {
    "id": 78,
    "course": "BSc in Information Technology - Network Engineering & Cyber Security (TestAS & APS required) - Berlin",
    "cardTitle": "IT: Network Engineering & Cyber Security",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/engineering-coperative-phd.webp",
    "color": "#246DBF",
    "universityName": "Media Design University of Applied Sciences, Berlin",
    "duration": "3 years 6 months",
    "tuitionCostYearly": "EUR 12600.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 79,
    "course": "Bachelor of Arts in Game Design (TestAS waiver possible, APS required)",
    "cardTitle": "Game Design",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/sustainable-design-engineering-phd.webp",
    "color": "#91B422",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 13325.00",
    "intake": "Sep,Mar"
  },
  {
    "id": 80,
    "course": "BSc in Computer Science (APS & TestAS required)",
    "cardTitle": "Computer Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/Computer-Science.webp",
    "color": "#B724BF",
    "universityName": "Fresenius University of Applied Sciences, Idstein",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12240.00",
    "intake": "Sep"
  },
  {
    "id": 81,
    "course": "BSc Computer Science & Digital Technologies (APS required, TestAS waiver possible)",
    "cardTitle": "Computer Science & Digital Technologies",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/information-computer-science-phd.webp",
    "color": "#22B482",
    "universityName": "FOM Hochschule - University of Applied Sciences for Economics and Management",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12300.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 82,
    "course": "MSc Data Science, AI, and Digital Business ( GISMA University of Applied Sciences) -2 Years (APS required)",
    "cardTitle": "Data Science, AI, & Digital Business -2 Years",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/data-analytics-ms.webp",
    "color": "#BF5D24",
    "universityName": "GISMA University of Applied Sciences, Berlin",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 12550.00",
    "intake": "Jan,Apr,Jul,Oct"
  },
  {
    "id": 83,
    "course": "Master of Science in Data Science- (24 Months) (APS required)",
    "cardTitle": "Data Science- (24 Months)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/master-accounting-phd.webp",
    "color": "#2D22B4",
    "universityName": "University of Europe for Applied Sciences, Berlin",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 12552.00",
    "intake": "Sep,Mar,Jan,Jul"
  },
  {
    "id": 84,
    "course": "Master in SAP Engineering & Analytics (APS required)",
    "cardTitle": "SAP Engineering & Analytics",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/engineering-industrial-ms.webp",
    "color": "#46BF24",
    "universityName": "Fresenius University of Applied Sciences, Idstein",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 11400.00",
    "intake": "Sep,Mar"
  },
  {
    "id": 85,
    "course": "M.Sc. Cyber Security (APS required)",
    "cardTitle": "Cyber Security",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/cybersecurity-ms.webp",
    "color": "#B4226D",
    "universityName": "International University of Applied Sciences—IU, Bad Honnef",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 8134.00",
    "intake": "Oct,Apr"
  },
  {
    "id": 86,
    "course": "M.Sc. in Digital Transformation Management (APS Required)",
    "cardTitle": "Digital Transformation Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/ba-criminology-bs.webp",
    "color": "#24A0BF",
    "universityName": "Fachhochschule des Mittelstands (FHM) University",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 9415.00",
    "intake": "Oct"
  },
  {
    "id": 87,
    "course": "M.Sc in Computer Science - Big Data and Artificial Intelligence (APS required)",
    "cardTitle": "Computer Science: Big Data & AI",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/robotics-automation-ms.webp",
    "color": "#B4A622",
    "universityName": "SRH University – Leipzig Campus, Leipzig",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 10900.00",
    "intake": "Apr,Oct"
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
      ? "Master's Degree Programs in Germany"
      : activeTab === "bachelors"
        ? "Bachelor's Degree Programs in Germany"
        : "All Degree Programs in Germany";

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
              in Germany
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
                className="!h-[430px]"
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
          *STEM designation is indicative based on the programme subject. Confirm the exact classification and admission or visa requirements with the German university.
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


