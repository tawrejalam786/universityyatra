
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
  { id: "phd", label: "PhD" },
];

/* =========================================
   UAE PROGRAMS FROM THE PROVIDED UNIVERSITY COURSE PDFS
========================================= */

const courseCards = [
  {
    "id": 1,
    "course": "PhD in Law",
    "cardTitle": "Law",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/art-in-law-society-bs.webp",
    "color": "#2A9D4B",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "3 years",
    "tuitionCostYearly": "AED 75000.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 2,
    "course": "Bachelor of Commercial Law",
    "cardTitle": "Bachelor of Commercial Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bs-law-society-bs.webp",
    "color": "#6D2A9D",
    "universityName": "University of Birmingham - Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 134922.00",
    "intake": "Sep"
  },
  {
    "id": 3,
    "course": "BSc (Hons) in Psychology with Criminology",
    "cardTitle": "(Hons) in Psychology with Criminology",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ba-psychology-bs.webp",
    "color": "#9D8F2A",
    "universityName": "De Montfort University, Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 75191.00",
    "intake": "Sep"
  },
  {
    "id": 4,
    "course": "Bachelor of Science in Forensic Sciences",
    "cardTitle": "Forensic Sciences",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/Computer-Science.webp",
    "color": "#2A8A9D",
    "universityName": "Amity University, Dubai",
    "duration": "4 years",
    "tuitionCostYearly": "AED 66000.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 5,
    "course": "LLB (Hons) Law",
    "cardTitle": "(Hons) Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/masters-law-ms.webp",
    "color": "#9D2A68",
    "universityName": "University of Greater Manchester, Ras Al Khaimah",
    "duration": "3 years",
    "tuitionCostYearly": "AED 38760.00",
    "intake": "Jan,Jun,Sep"
  },
  {
    "id": 6,
    "course": "Bachelor of Science (Honours) Psychology with Criminology",
    "cardTitle": "Psychology with Criminology",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/clinical-psychology-phd.webp",
    "color": "#479D2A",
    "universityName": "Middlesex University - Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 64557.00",
    "intake": "Sep"
  },
  {
    "id": 7,
    "course": "LLM International Dispute Resolution",
    "cardTitle": "International Dispute Resolution",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/international-business-administration-bs.webp",
    "color": "#2F2A9D",
    "universityName": "University of Birmingham - Dubai",
    "duration": "1 year",
    "tuitionCostYearly": "AED 133738.00",
    "intake": "Sep"
  },
  {
    "id": 8,
    "course": "International Commercial Law and Practice ( LLM )",
    "cardTitle": "International Commercial Law and Practice ( LLM )",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/ba-criminology-bs.webp",
    "color": "#9D502A",
    "universityName": "De Montfort University, Dubai",
    "duration": "1 year",
    "tuitionCostYearly": "AED 93713.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 9,
    "course": "Master of Law in Cyberlaw and Artificial Intelligence",
    "cardTitle": "Cyberlaw and Artificial Intelligence",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/data-science-ai-phd.webp",
    "color": "#2A9D72",
    "universityName": "Abu Dhabi University",
    "duration": "2 years",
    "tuitionCostYearly": "AED 44100.00",
    "intake": "Feb,Jun,Sep,May"
  },
  {
    "id": 10,
    "course": "Master of Science in Forensic Sciences",
    "cardTitle": "Forensic Sciences",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biological-sciences-bs.webp",
    "color": "#942A9D",
    "universityName": "Amity University, Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 56250.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 11,
    "course": "Master in Sports Law",
    "cardTitle": "ster in Sports Law",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bachelor-criminology-bs.webp",
    "color": "#859D2A",
    "universityName": "American University in the Emirates",
    "duration": "2 years",
    "tuitionCostYearly": "AED 68707.00",
    "intake": "Jan,Sep,May"
  },
  {
    "id": 12,
    "course": "Master of Science in Construction Law and Dispute Resolution",
    "cardTitle": "Construction Law and Dispute Resolution",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/bachelor-hornours-criminology-bs.webp",
    "color": "#2A639D",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "1 year",
    "tuitionCostYearly": "AED 85000.00",
    "intake": "Apr,Jan,Sep"
  },
  {
    "id": 13,
    "course": "BSc Psychology",
    "cardTitle": "Psychology",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/experimental-psychology-thes-phd.webp",
    "color": "#9D2A42",
    "universityName": "University of Birmingham - Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 149106.00",
    "intake": "Sep"
  },
  {
    "id": 14,
    "course": "Bachelor of Psychological Science",
    "cardTitle": "Bachelor of Psychological Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/psychological-health-sciences.webp",
    "color": "#2A9D34",
    "universityName": "University of Wollongong - Dubai",
    "duration": "4 years",
    "tuitionCostYearly": "AED 63449.00",
    "intake": "Jan,Apr,Sep"
  },
  {
    "id": 15,
    "course": "BSc (Hons) in Psychology with Health and Wellbeing in Society",
    "cardTitle": "(Hons) in Psychology with Health and Wellbeing in…",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/chemical-public-health-phd.webp",
    "color": "#552A9D",
    "universityName": "De Montfort University, Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 75191.00",
    "intake": "Sep"
  },
  {
    "id": 16,
    "course": "BSc in Molecular and Medical Genetics",
    "cardTitle": "Molecular and Medical Genetics",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/concentration-health-hospitality-ms.webp",
    "color": "#9D772A",
    "universityName": "Abu Dhabi University",
    "duration": "4 years",
    "tuitionCostYearly": "AED 61115.00",
    "intake": "Sep,Feb"
  },
  {
    "id": 17,
    "course": "Bachelor of Science in Nursing",
    "cardTitle": "Nursing",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/medicine-science-health.webp",
    "color": "#2A9D99",
    "universityName": "American University in the Emirates",
    "duration": "4 years",
    "tuitionCostYearly": "AED 63000.00",
    "intake": "Jan,Sep,May"
  },
  {
    "id": 18,
    "course": "Bachelor of Pharmacy (BPharm)",
    "cardTitle": "Bachelor of Pharmacy (BPharm)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/pharmaceutical-health.webp",
    "color": "#9D2A80",
    "universityName": "Ajman University",
    "duration": "4 years 6 months",
    "tuitionCostYearly": "AED 56000.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 19,
    "course": "Clinical Psychology MSc",
    "cardTitle": "Clinical Psychology MSc",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/economics-masters.webp",
    "color": "#5E9D2A",
    "universityName": "University of Birmingham - Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 155483.00",
    "intake": "Sep"
  },
  {
    "id": 20,
    "course": "Master of Nursing Leadership",
    "cardTitle": "ster of Nursing Leadership",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/health-information-manegement-bs.webp",
    "color": "#2A3D9D",
    "universityName": "University of Wollongong - Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 47075.00",
    "intake": "Sep,Jan,Apr"
  },
  {
    "id": 21,
    "course": "MSc in Mental Health and Wellbeing",
    "cardTitle": "Mental Health and Wellbeing",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/kinesiology-health.webp",
    "color": "#9D392A",
    "universityName": "De Montfort University, Dubai",
    "duration": "1 year",
    "tuitionCostYearly": "AED 93713.00",
    "intake": "Sep"
  },
  {
    "id": 22,
    "course": "Master of Public Health",
    "cardTitle": "ster of Public Health",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/public-health-ms.webp",
    "color": "#2A9D5A",
    "universityName": "Abu Dhabi University",
    "duration": "2 years",
    "tuitionCostYearly": "AED 44100.00",
    "intake": "Feb,Sep"
  },
  {
    "id": 23,
    "course": "Master of Science in Clinical Pharmacy (MSc in Clinical Pharmacy)",
    "cardTitle": "Clinical Pharmacy (MSc in Clinical Pharmacy)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biological-sciences-ms.webp",
    "color": "#7C2A9D",
    "universityName": "Ajman University",
    "duration": "2 years",
    "tuitionCostYearly": "AED 60938.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 24,
    "course": "Master of Education - Educational Psychology and Counselling",
    "cardTitle": "Educational Psychology and Counselling",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bachelor-education-bs.webp",
    "color": "#9D9D2A",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "1 year",
    "tuitionCostYearly": "AED 85000.00",
    "intake": "Apr,Jan,Sep"
  },
  {
    "id": 25,
    "course": "Musculoskeletal Physiotherapy MSc",
    "cardTitle": "Musculoskeletal Physiotherapy MSc",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/adult-profesional-community-phd.webp",
    "color": "#2A7B9D",
    "universityName": "University of Birmingham - Dubai",
    "duration": "1 year",
    "tuitionCostYearly": "AED 155483.00",
    "intake": "Sep"
  },
  {
    "id": 26,
    "course": "Doctor of Philosophy (PhD) in Engineering Management",
    "cardTitle": "Engineering Management",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/philosophy-engineering-phd.webp",
    "color": "#9D2A59",
    "universityName": "Abu Dhabi University",
    "duration": "4 years",
    "tuitionCostYearly": "AED 76720.00",
    "intake": "Feb,Sep"
  },
  {
    "id": 27,
    "course": "Doctor of Philosophy (PhD) in Intelligence Systems Engineering",
    "cardTitle": "Intelligence Systems Engineering",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/computer-electrical-engineering-phd.webp",
    "color": "#389D2A",
    "universityName": "Abu Dhabi University",
    "duration": "4 years",
    "tuitionCostYearly": "AED 76720.00",
    "intake": "Feb,Sep"
  },
  {
    "id": 28,
    "course": "Doctor of Philosophy (PhD) in Engineering Management",
    "cardTitle": "Engineering Management",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-phd.webp",
    "color": "#3D2A9D",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "3 years",
    "tuitionCostYearly": "AED 66668.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 29,
    "course": "Railway Systems Engineering and Integration MSc",
    "cardTitle": "Railway Systems Engineering and Integration MSc",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-ms.webp",
    "color": "#9D5F2A",
    "universityName": "University of Birmingham - Dubai",
    "duration": "1 year",
    "tuitionCostYearly": "AED 155483.00",
    "intake": "Sep"
  },
  {
    "id": 30,
    "course": "Master of Engineering Management",
    "cardTitle": "Master of Engineering Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/automotive-engineering-ms.webp",
    "color": "#2A9D81",
    "universityName": "University of Wollongong - Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 47990.00",
    "intake": "Sep,Jan,Apr"
  },
  {
    "id": 31,
    "course": "MSc Civil Engineering and Construction Management - Full time",
    "cardTitle": "Civil Engineering and Construction Management…",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/bachelor-civil-engineering.webp",
    "color": "#9D2A98",
    "universityName": "Heriot Watt University - Dubai",
    "duration": "1 year 4 months",
    "tuitionCostYearly": "AED 107484.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 32,
    "course": "MSc Petroleum Engineering - Full time",
    "cardTitle": "Petroleum Engineering - Full time",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-bs.webp",
    "color": "#769D2A",
    "universityName": "Heriot Watt University - Dubai",
    "duration": "1 year 4 months",
    "tuitionCostYearly": "AED 172484.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 33,
    "course": "Executive MBA in Aviation Management",
    "cardTitle": "Executive MBA in Aviation Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/aerospace-engineerings-bs.webp",
    "color": "#2A559D",
    "universityName": "Emirates Aviation University",
    "duration": "1 year",
    "tuitionCostYearly": "AED 138000.00",
    "intake": "Feb"
  },
  {
    "id": 34,
    "course": "MSc Software Engineering",
    "cardTitle": "Software Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/civil-engineering-phd.webp",
    "color": "#9D2A33",
    "universityName": "University of Greater Manchester, Ras Al Khaimah",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "AED 43333.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 35,
    "course": "MSc Robotics",
    "cardTitle": "Robotics",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/robotics-automation-ms.webp",
    "color": "#2A9D42",
    "universityName": "Middlesex University - Dubai",
    "duration": "1 year",
    "tuitionCostYearly": "AED 76491.00",
    "intake": "Sep"
  },
  {
    "id": 36,
    "course": "Bachelor of Technology (B.Tech) in Computer Engineering",
    "cardTitle": "Computer Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-phd.webp",
    "color": "#642A9D",
    "universityName": "Symbiosis International University, Dubai",
    "duration": "4 years",
    "tuitionCostYearly": "AED 53550.00",
    "intake": "Sep"
  },
  {
    "id": 37,
    "course": "BEng (Hons) Software Engineering",
    "cardTitle": "(Hons) Software Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-engineering-phd.webp",
    "color": "#9D862A",
    "universityName": "University of Greater Manchester, Ras Al Khaimah",
    "duration": "3 years",
    "tuitionCostYearly": "AED 38760.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 38,
    "course": "Bachelor of Engineering (Honours) Electronic Engineering",
    "cardTitle": "Electronic Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/electronic-engineering-phd.webp",
    "color": "#2A939D",
    "universityName": "Middlesex University - Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 64557.00",
    "intake": "Sep"
  },
  {
    "id": 39,
    "course": "Bachelor of Science Mechatronics Engineering",
    "cardTitle": "Mechatronics Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-bs-v2.webp",
    "color": "#9D2A71",
    "universityName": "American University in the Emirates",
    "duration": "5 years",
    "tuitionCostYearly": "AED 82400.00",
    "intake": "Jan,Sep,May"
  },
  {
    "id": 40,
    "course": "BCA in Artificial Intelligence and Machine Learning",
    "cardTitle": "Artificial Intelligence and Machine Learning",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-artificial-science-ms.webp",
    "color": "#509D2A",
    "universityName": "Jaipur National University, Ras Al Khaimah",
    "duration": "3 years",
    "tuitionCostYearly": "AED 25000.00",
    "intake": "Feb,Sep"
  },
  {
    "id": 41,
    "course": "BEng (Hons) in Aerospace Technology (Top Up)",
    "cardTitle": "(Hons) in Aerospace Technology (Top Up)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/anatomy-lab.webp",
    "color": "#2A2E9D",
    "universityName": "Emirates Aviation University",
    "duration": "1 year",
    "tuitionCostYearly": "AED 90000.00",
    "intake": "Jan,Aug"
  },
  {
    "id": 42,
    "course": "Bachelor of Science in Chemical Engineering",
    "cardTitle": "Chemical Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-phd.webp",
    "color": "#9D472A",
    "universityName": "American University of Ras Al Khaimah",
    "duration": "4 years",
    "tuitionCostYearly": "AED 65200.00",
    "intake": "Sep,Jan,Jun,Aug"
  },
  {
    "id": 43,
    "course": "Bachelor of Computer & Networking Engineering Technology",
    "cardTitle": "Bachelor of Computer & Networking Engineering…",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-analytics-phd.webp",
    "color": "#2A9D69",
    "universityName": "Canadian University Dubai",
    "duration": "4 years",
    "tuitionCostYearly": "AED 83688.00",
    "intake": "Sep,May,Jan"
  },
  {
    "id": 44,
    "course": "Doctor of Philosophy (Ph.D.) in Education",
    "cardTitle": "Education",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/ed-higher-adult-education-phd.webp",
    "color": "#8B2A9D",
    "universityName": "Abu Dhabi University",
    "duration": "4 years",
    "tuitionCostYearly": "AED 69300.00",
    "intake": "Feb,Sep"
  },
  {
    "id": 45,
    "course": "Doctor of Education",
    "cardTitle": "Doctor of Education",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/consecutive-education-bs.webp",
    "color": "#8E9D2A",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "3 years",
    "tuitionCostYearly": "AED 66668.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 46,
    "course": "Master of Educational Studies",
    "cardTitle": "al Studies",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/ba-legal-studies-economics-bs.webp",
    "color": "#2A6C9D",
    "universityName": "University of Wollongong - Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 39231.00",
    "intake": "Sep,Jan,Apr"
  },
  {
    "id": 47,
    "course": "Master of Education in Educational Technologies and AI",
    "cardTitle": "Educational Technologies and AI",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/counselor-education-supervision.webp",
    "color": "#9D2A4B",
    "universityName": "Abu Dhabi University",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "AED 64680.00",
    "intake": "Sep,Feb,Jun,May"
  },
  {
    "id": 48,
    "course": "Master of Education (MEd) - (Education)",
    "cardTitle": "(MEd) - (Education)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/education-change-ms.webp",
    "color": "#2A9D2B",
    "universityName": "Murdoch University - Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 37500.00",
    "intake": "Sep"
  },
  {
    "id": 49,
    "course": "Master of Arts in Leadership and Innovation in Contemporary Media",
    "cardTitle": "Leadership and Innovation in Contemporary Media",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/ed-teacher-leadership-phd.webp",
    "color": "#4C2A9D",
    "universityName": "American University in Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 70200.00",
    "intake": "Jan,May,Sep"
  },
  {
    "id": 50,
    "course": "MA Education Send (Special Education Needs and Disability)- Part Time",
    "cardTitle": "Education Send (Special Education Needs and…",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/education-co-op-ms.webp",
    "color": "#9D6E2A",
    "universityName": "Middlesex University - Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 38245.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 51,
    "course": "Master of Education - Educational Management, Leadership and Policy",
    "cardTitle": "Educational Management, Leadership and Policy",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/educational-leadership-learning-phd.webp",
    "color": "#2A9D8F",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "1 year",
    "tuitionCostYearly": "AED 85000.00",
    "intake": "Apr,Jan,Sep"
  },
  {
    "id": 52,
    "course": "BSc Honours Psychology with Counselling Skills",
    "cardTitle": "Honours Psychology with Counselling Skills",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/applied-computing-ms.webp",
    "color": "#9D2A89",
    "universityName": "Middlesex University - Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 64557.00",
    "intake": "Sep"
  },
  {
    "id": 53,
    "course": "BA Honours Education Studies",
    "cardTitle": "BA Honours Education Studies",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/elementary-education-bs.webp",
    "color": "#679D2A",
    "universityName": "Middlesex University - Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 64557.00",
    "intake": "Sep"
  },
  {
    "id": 54,
    "course": "BSc Honours Psychology with Education",
    "cardTitle": "Honours Psychology with Education",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/architecture.webp",
    "color": "#2A469D",
    "universityName": "Middlesex University - Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 64557.00",
    "intake": "Sep"
  },
  {
    "id": 55,
    "course": "Bachelor of Education – Special Education",
    "cardTitle": "– Special Education",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/art-economics-bs.webp",
    "color": "#9D2F2A",
    "universityName": "American University in the Emirates",
    "duration": "4 years",
    "tuitionCostYearly": "AED 66114.00",
    "intake": "Jan,Sep,May"
  },
  {
    "id": 56,
    "course": "Doctor of Business Administration (DBA)",
    "cardTitle": "Doctor of Business Administration (DBA)",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/business-administration-finance-phd.webp",
    "color": "#2A9D51",
    "universityName": "Ajman University",
    "duration": "4 years",
    "tuitionCostYearly": "AED 67500.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 57,
    "course": "Doctor of Philosophy (PhD) in Business Management",
    "cardTitle": "Business Management",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/business-administration-phd.webp",
    "color": "#732A9D",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "3 years",
    "tuitionCostYearly": "AED 83334.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 58,
    "course": "Doctor of Philosophy (PhD) in Project Management",
    "cardTitle": "Project Management",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/project-management-ms.webp",
    "color": "#9D942A",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "3 years",
    "tuitionCostYearly": "AED 83334.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 59,
    "course": "Doctorate in Business Administration",
    "cardTitle": "Doctorate in Business Administration",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/marketing-business-administration-phd.webp",
    "color": "#2A849D",
    "universityName": "American University in the Emirates",
    "duration": "4 years",
    "tuitionCostYearly": "AED 63000.00",
    "intake": "Jan,Sep,May"
  },
  {
    "id": 60,
    "course": "MSc Construction Project Management",
    "cardTitle": "Construction Project Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/co-op-management-ms.webp",
    "color": "#9D2A63",
    "universityName": "University of Greater Manchester, Ras Al Khaimah",
    "duration": "2 years",
    "tuitionCostYearly": "AED 32500.00",
    "intake": "Jan,Jun,Sep"
  },
  {
    "id": 61,
    "course": "Master of Business Administration",
    "cardTitle": "Master of Business Administration",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bach-business-administration-bs.webp",
    "color": "#419D2A",
    "universityName": "American University in the Emirates",
    "duration": "2 years",
    "tuitionCostYearly": "AED 58275.00",
    "intake": "Jan,Sep,May"
  },
  {
    "id": 62,
    "course": "Master of Business Administration (Business Analytics)",
    "cardTitle": "(Business Analytics)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-analytics-ms.webp",
    "color": "#342A9D",
    "universityName": "Symbiosis International University, Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 45000.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 63,
    "course": "Master of Business Administration in Digital Transformation & AI",
    "cardTitle": "Digital Transformation & AI",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-administration-bs.webp",
    "color": "#9D562A",
    "universityName": "Royal Roads University (RRU), Ras Al Khaimah",
    "duration": "2 years",
    "tuitionCostYearly": "USD 6000.00",
    "intake": "Mar,Oct,Jul"
  },
  {
    "id": 64,
    "course": "Master of Business Administration - Marketing",
    "cardTitle": "Marketing",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-administration-supply-bs.webp",
    "color": "#2A9D78",
    "universityName": "American University in Dubai",
    "duration": "2 years",
    "tuitionCostYearly": "AED 84240.00",
    "intake": "Jan,Sep,May"
  },
  {
    "id": 65,
    "course": "Master of Business Administration- Shipping & Logistics",
    "cardTitle": "Shipping & Logistics",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/finance-business-administration-bs.webp",
    "color": "#992A9D",
    "universityName": "University of Europe for Applied Sciences, Dubai",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "AED 57376.00",
    "intake": "Jan,Mar,Sep"
  },
  {
    "id": 66,
    "course": "B.Sc. in Hospitality & Hotel Administration",
    "cardTitle": "Hospitality & Hotel Administration",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/hospitality-management-ms.webp",
    "color": "#7F9D2A",
    "universityName": "Jaipur National University, Ras Al Khaimah",
    "duration": "3 years",
    "tuitionCostYearly": "AED 20000.00",
    "intake": "Feb,Sep"
  },
  {
    "id": 67,
    "course": "Bachelor of Business Administration in Data Analytics & AI",
    "cardTitle": "Data Analytics & AI",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/dba-business-analytics-phd.webp",
    "color": "#2A5E9D",
    "universityName": "Royal Roads University (RRU), Ras Al Khaimah",
    "duration": "3 years",
    "tuitionCostYearly": "USD 6000.00",
    "intake": "Mar,Oct,Jul"
  },
  {
    "id": 68,
    "course": "Bachelor of Science (BSc) in Logistics and Supply Chain Management",
    "cardTitle": "Logistics and Supply Chain Management",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-bs.webp",
    "color": "#9D2A3C",
    "universityName": "Emirates Aviation University",
    "duration": "4 years",
    "tuitionCostYearly": "AED 86000.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 69,
    "course": "BSc Sport & Event Management",
    "cardTitle": "Sport & Event Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/kinesiology-studies-health-phd.webp",
    "color": "#2A9D39",
    "universityName": "University of Europe for Applied Sciences, Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 60882.00",
    "intake": "Sep,Mar"
  },
  {
    "id": 70,
    "course": "Bachelor of Business Administration in Family Business and Entrepreneurship",
    "cardTitle": "Family Business and Entrepreneurship",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/new-business-administration-phd.webp",
    "color": "#5B2A9D",
    "universityName": "Amity University, Dubai",
    "duration": "4 years",
    "tuitionCostYearly": "AED 64575.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 71,
    "course": "Bachelor of Business Administration - Innovation and Entrepreneurship",
    "cardTitle": "Innovation and Entrepreneurship",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/mba-international-business-ms.webp",
    "color": "#9D7D2A",
    "universityName": "Curtin University, Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 60900.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 72,
    "course": "Bachelor of Science in Artificial Intelligence",
    "cardTitle": "Artificial Intelligence",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-mathematics-bs.webp",
    "color": "#2A9C9D",
    "universityName": "Emirates Aviation University",
    "duration": "4 years",
    "tuitionCostYearly": "AED 90000.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 73,
    "course": "Bachelor of Science in Computer Science (Cybersecurity)",
    "cardTitle": "Computer Science (Cybersecurity)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-ms.webp",
    "color": "#9D2A7A",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "4 years",
    "tuitionCostYearly": "AED 56250.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 74,
    "course": "Bachelor of Science in Computer Science - (Network Security)",
    "cardTitle": "Computer Science - (Network Security)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-phd.webp",
    "color": "#599D2A",
    "universityName": "American University in the Emirates",
    "duration": "4 years",
    "tuitionCostYearly": "AED 61820.25",
    "intake": "Jan,Sep,May"
  },
  {
    "id": 75,
    "course": "BSc Digital Businsess & Data Science",
    "cardTitle": "Digital Businsess & Data Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/data-science-ms.webp",
    "color": "#2A379D",
    "universityName": "University of Europe for Applied Sciences, Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 60882.00",
    "intake": "Sep,Mar"
  },
  {
    "id": 76,
    "course": "Bachelor of Games Development (Games Design/Games Programming)",
    "cardTitle": "Bachelor of Games Development (Games Design/Games…",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/game-design-ms.webp",
    "color": "#9D3E2A",
    "universityName": "SAE University College Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 62730.00",
    "intake": "Sep,Feb,May"
  },
  {
    "id": 77,
    "course": "Bachelor of Information Technology in Artificial Intelligence and Autonomous Systems",
    "cardTitle": "Bachelor of Information Technology in Artificial…",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/information-computer-science-phd.webp",
    "color": "#2A9D60",
    "universityName": "Murdoch University - Dubai",
    "duration": "3 years",
    "tuitionCostYearly": "AED 59960.00",
    "intake": "Jan,May,Sep"
  },
  {
    "id": 78,
    "course": "MSc Data Science and Artificial Intelligence - Full time",
    "cardTitle": "Data Science and Artificial Intelligence - Full time",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/data-analytics-ms.webp",
    "color": "#812A9D",
    "universityName": "Middlesex University - Dubai",
    "duration": "1 year",
    "tuitionCostYearly": "AED 76491.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 79,
    "course": "MA in Visual & Experience Design",
    "cardTitle": "Visual & Experience Design",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/sustainable-design-engineering-ms.webp",
    "color": "#979D2A",
    "universityName": "University of Europe for Applied Sciences, Dubai",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "AED 55463.00",
    "intake": "Mar,Sep"
  },
  {
    "id": 80,
    "course": "Master in Security Studies and Information Analysis",
    "cardTitle": "ster in Security Studies and Information Analysis",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/cyber-studies-phd.webp",
    "color": "#2A759D",
    "universityName": "American University in the Emirates",
    "duration": "2 years",
    "tuitionCostYearly": "AED 68679.00",
    "intake": "Jan,Sep,May"
  },
  {
    "id": 81,
    "course": "Master of Science in Artificial Intelligence",
    "cardTitle": "Artificial Intelligence",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/bachelor-social-juticebs.webp",
    "color": "#9D2A54",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "1 year",
    "tuitionCostYearly": "AED 85000.00",
    "intake": "Apr,Jan,Sep"
  },
  {
    "id": 82,
    "course": "MSc Cloud and Network Security",
    "cardTitle": "Cloud and Network Security",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/cybersecurity-ms.webp",
    "color": "#329D2A",
    "universityName": "University of Greater Manchester, Ras Al Khaimah",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "AED 43333.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 83,
    "course": "Doctor of Philosophy (PhD) in Computer Science",
    "cardTitle": "Computer Science",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/doctor-philosophy-phd.webp",
    "color": "#432A9D",
    "universityName": "The British University in Dubai (BUiD)",
    "duration": "3 years",
    "tuitionCostYearly": "AED 75000.00",
    "intake": "Jan,Sep"
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
      ? "Master's Degree Programs in UAE"
      : activeTab === "bachelors"
        ? "Bachelor's Degree Programs in UAE"
        : activeTab === "phd"
          ? "PhD Programs in UAE"
          : "All Degree Programs in UAE";

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
              in UAE
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
          *STEM designation is indicative based on the programme subject. Confirm the exact classification and course or visa requirements with the UAE university.
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


