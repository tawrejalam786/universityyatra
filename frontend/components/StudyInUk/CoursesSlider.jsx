
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
   UK PROGRAMS FROM THE PROVIDED UNIVERSITY COURSE PDFS
========================================= */

const courseCards = [
  {
    "id": 1,
    "course": "BSc (Hons) Business and Management",
    "cardTitle": "Business & Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/ireland/supply-chain-management-ms.webp",
    "color": "#B42222",
    "universityName": "Arizona State University London",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 23600.00",
    "intake": "Sep"
  },
  {
    "id": 2,
    "course": "BA (Hons) Music Business and Event Management",
    "cardTitle": "Music Business & Event Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/usa/film-media-production.webp",
    "color": "#2451BF",
    "universityName": "BIMM University (Brighton)",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 15950.00",
    "intake": "Sep"
  },
  {
    "id": 3,
    "course": "BA (Hons) Event Management",
    "cardTitle": "Event Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/australia/bachelor-environmental-science.webp",
    "color": "#77B422",
    "universityName": "BIMM University (Birmingham)",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 15950.00",
    "intake": "Sep"
  },
  {
    "id": 4,
    "course": "BSc (Hons) Accountancy and Finance",
    "cardTitle": "Accountancy & Finance",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/australia/master-applied-finance.webp",
    "color": "#BF24AB",
    "universityName": "Southampton Solent University, Southampton",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 19081.00",
    "intake": "Sep"
  },
  {
    "id": 5,
    "course": "BSc (Hons) Maritime Management Top-Up",
    "cardTitle": "Maritime Management Top-Up",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/australia/bachelor-mechanical-engineering.webp",
    "color": "#22B49C",
    "universityName": "Southampton Solent University, Southampton",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 19081.00",
    "intake": "Sep"
  },
  {
    "id": 6,
    "course": "MSc International Management",
    "cardTitle": "International Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/international-business-administration-bs.webp",
    "color": "#BF7824",
    "universityName": "University of Cumbria, Lancaster",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 16000.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 7,
    "course": "MSc Entrepreneurship",
    "cardTitle": "Entrepreneurship",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/australia/master-cyber-security.webp",
    "color": "#4722B4",
    "universityName": "Regent's University London, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 28750.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 8,
    "course": "MSc Strategic Business Management",
    "cardTitle": "Strategic Business Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/australia/master-renewable-energy.webp",
    "color": "#2BBF24",
    "universityName": "University of Law (London, Moorgate)",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 19050.00",
    "intake": "Feb,Jun,Oct,Apr"
  },
  {
    "id": 9,
    "course": "MSc Engineering Project Management",
    "cardTitle": "Engineering Project Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/project-management-ms.webp",
    "color": "#B42253",
    "universityName": "University of Wales Trinity Saint David, Swansea",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17500.00",
    "intake": "Oct,Feb"
  },
  {
    "id": 10,
    "course": "MSc Fintech Management",
    "cardTitle": "Fintech Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/bach-business-administration-bs.webp",
    "color": "#2485BF",
    "universityName": "Northeastern University, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 25522.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 11,
    "course": "PhD Business",
    "cardTitle": "Business",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/business-administration-bs.webp",
    "color": "#A8B422",
    "universityName": "University of Worcester",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 18400.00",
    "intake": "Sep"
  },
  {
    "id": 12,
    "course": "PhD Marketing",
    "cardTitle": "Marketing",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/marketing-business-administration-phd.webp",
    "color": "#9E24BF",
    "universityName": "University of Birmingham, UK, Birmingham",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 25190.00",
    "intake": "Sep"
  },
  {
    "id": 13,
    "course": "PhD Accounting and Finance",
    "cardTitle": "Accounting & Finance",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/art-economics-bs.webp",
    "color": "#22B46B",
    "universityName": "University of Glasgow, Glasgow",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 27720.00",
    "intake": "Sep"
  },
  {
    "id": 14,
    "course": "PhD Management",
    "cardTitle": "Management",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/business-administration-finance-phd.webp",
    "color": "#BF4424",
    "universityName": "University of Bath, Bath",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 24450.00",
    "intake": "Sep"
  },
  {
    "id": 15,
    "course": "PhD Innovation and Entrepreneurship",
    "cardTitle": "Innovation & Entrepreneurship",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/adult-profesional-community-phd.webp",
    "color": "#222FB4",
    "universityName": "University of Bristol, Bristol",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 21900.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 16,
    "course": "PhD Business Analytics",
    "cardTitle": "Business Analytics",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/business-analytics-ms.webp",
    "color": "#5EBF24",
    "universityName": "University of Kent",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 19300.00",
    "intake": "Sep"
  },
  {
    "id": 17,
    "course": "PhD Accounting, Banking, Economics, Finance, Management Studies and Marketing",
    "cardTitle": "Accounting, Banking, Economics & Marketing",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/finance-business-administration-bs.webp",
    "color": "#B42284",
    "universityName": "Bangor University, Bangor",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 19500.00",
    "intake": "Sep"
  },
  {
    "id": 18,
    "course": "BEng (Hons) Engineering with Artificial Intelligence",
    "cardTitle": "Engineering with Artificial Intelligence",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-artificial-science-ms.webp",
    "color": "#24B9BF",
    "universityName": "Arizona State University London",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 23600.00",
    "intake": "Sep"
  },
  {
    "id": 19,
    "course": "BSc (Hons) Computing for Business (International Route) Level 6 (Top-Up)",
    "cardTitle": "Computing for Business Level 6",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/mba-international-business-ms.webp",
    "color": "#B48F22",
    "universityName": "University of Chichester",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17220.00",
    "intake": "Sep"
  },
  {
    "id": 20,
    "course": "BSc (Hons) Computer Science with Artificial Intelligence",
    "cardTitle": "Computer Science with Artificial Intelligence",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/data-science-ai-phd.webp",
    "color": "#6B24BF",
    "universityName": "University of Chester, Chester",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 14950.00",
    "intake": "Oct"
  },
  {
    "id": 21,
    "course": "BSc (Hons) Cyber Security",
    "cardTitle": "Cyber Security",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/cyber-studies-phd.webp",
    "color": "#22B43A",
    "universityName": "University of Roehampton, London",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17628.00",
    "intake": "Sep"
  },
  {
    "id": 22,
    "course": "BA (Hons) Games Design",
    "cardTitle": "Games Design",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/art-in-law-society-bs.webp",
    "color": "#BF2438",
    "universityName": "Canterbury Christ Church University, Canterbury",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 15500.00",
    "intake": "Sep"
  },
  {
    "id": 23,
    "course": "BSc Honours FinTech with Data Analytics",
    "cardTitle": "FinTech with Data Analytics",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-analytics-phd.webp",
    "color": "#225FB4",
    "universityName": "University of Westminster, London",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17600.00",
    "intake": "Sep"
  },
  {
    "id": 24,
    "course": "PhD Computer Science",
    "cardTitle": "Computer Science",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/computer-science-bs.webp",
    "color": "#92BF24",
    "universityName": "University of Birmingham, UK, Birmingham",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 29310.00",
    "intake": "Sep"
  },
  {
    "id": 25,
    "course": "PhD Information and Communication Systems",
    "cardTitle": "Information & Communication Systems",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/health-information-manegement-bs.webp",
    "color": "#B322B4",
    "universityName": "University of Surrey, Surrey",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 28300.00",
    "intake": "Oct,Apr,Jul"
  },
  {
    "id": 26,
    "course": "PhD Electronics and Computer Science",
    "cardTitle": "Electronics & Computer Science",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/computer-science-engineering-phd.webp",
    "color": "#24BF91",
    "universityName": "University of Southampton, Southampton",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 27300.00",
    "intake": "Sep"
  },
  {
    "id": 27,
    "course": "PhD Cybernetics",
    "cardTitle": "Cybernetics",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/aerospace-engineerings-bs.webp",
    "color": "#B45E22",
    "universityName": "University of Reading",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 24450.00",
    "intake": "Sep"
  },
  {
    "id": 28,
    "course": "PhD Computability and Constrained Equations in Free Semigroups",
    "cardTitle": "Computability in Free Semigroups",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/anatomy-lab.webp",
    "color": "#3724BF",
    "universityName": "Loughborough University, Leicester",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 28600.00",
    "intake": "Oct,Jan,Apr,Jul"
  },
  {
    "id": 29,
    "course": "PhD in Digital Technologies",
    "cardTitle": "Digital Technologies",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/applied-computing-ms.webp",
    "color": "#3BB422",
    "universityName": "Loughborough University, London, London",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 29500.00",
    "intake": "Apr,Jul,Oct,Feb"
  },
  {
    "id": 30,
    "course": "MSc Computer Science",
    "cardTitle": "Computer Science",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-science-mathematics-bs.webp",
    "color": "#BF246C",
    "universityName": "University of Worcester",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 18400.00",
    "intake": "Sep"
  },
  {
    "id": 31,
    "course": "MSc Artificial Intelligence (AI)",
    "cardTitle": "Artificial Intelligence (AI)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/robotics-automation-ms.webp",
    "color": "#2290B4",
    "universityName": "University of Birmingham, UK, Birmingham",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 34740.00",
    "intake": "Sep"
  },
  {
    "id": 32,
    "course": "MSc Robotics & AI",
    "cardTitle": "Robotics & AI",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/architecture.webp",
    "color": "#BFB824",
    "universityName": "University of Glasgow, Glasgow",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 34470.00",
    "intake": "Sep"
  },
  {
    "id": 33,
    "course": "MSc Data Science",
    "cardTitle": "Data Science",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/data-science-ms.webp",
    "color": "#8322B4",
    "universityName": "University of Surrey, Surrey",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 25900.00",
    "intake": "Sep,Feb"
  },
  {
    "id": 34,
    "course": "MSc Business Analytics",
    "cardTitle": "Business Analytics",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/dba-business-analytics-phd.webp",
    "color": "#24BF5E",
    "universityName": "University of Sheffield, Sheffield",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 34340.00",
    "intake": "Sep"
  },
  {
    "id": 35,
    "course": "MSc Cyber Security",
    "cardTitle": "Cyber Security",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/cybersecurity-ms.webp",
    "color": "#B42E22",
    "universityName": "Newcastle University, Newcastle upon Tyne",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 31700.00",
    "intake": "Sep"
  },
  {
    "id": 36,
    "course": "BA (Hons) Education, Mental Health and SEND",
    "cardTitle": "Education, Mental Health & SEND",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/chemical-public-health-phd.webp",
    "color": "#2445BF",
    "universityName": "Leeds Trinity University",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 12000.00",
    "intake": "Sep"
  },
  {
    "id": 37,
    "course": "BA (Hons) Childhood",
    "cardTitle": "Childhood",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/automotive-engineering-ms.webp",
    "color": "#6CB422",
    "universityName": "University of Suffolk, Suffolk",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 15900.00",
    "intake": "Sep"
  },
  {
    "id": 38,
    "course": "BA (Hons) Education",
    "cardTitle": "Education",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bachelor-education-bs.webp",
    "color": "#BF249F",
    "universityName": "Bath Spa University",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17310.00",
    "intake": "Sep"
  },
  {
    "id": 39,
    "course": "BA (Hons) Counselling Skills and Psychology",
    "cardTitle": "Counselling Skills & Psychology",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ba-psychology-bs.webp",
    "color": "#22B4A7",
    "universityName": "University of Chester, Chester",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 14950.00",
    "intake": "Oct"
  },
  {
    "id": 40,
    "course": "BA (Hons) Education, Special Needs and Disability",
    "cardTitle": "Education, Special Needs & Disability",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/consecutive-education-bs.webp",
    "color": "#BF8424",
    "universityName": "University of Chichester",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 16800.00",
    "intake": "Sep"
  },
  {
    "id": 41,
    "course": "BA (Hons) Counselling and Therapeutic Practice",
    "cardTitle": "Counselling & Therapeutic Practice",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/clinical-psychology-phd.webp",
    "color": "#5222B4",
    "universityName": "University of South Wales, Cardiff",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17200.00",
    "intake": "Sep"
  },
  {
    "id": 42,
    "course": "BA (Hons) Early Years Education and Professional Practice with Early Years Practitioner Status (EYPS)",
    "cardTitle": "Early Years Education & Practice",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/counselor-education-supervision.webp",
    "color": "#24BF2A",
    "universityName": "Cardiff Metropolitan University, Cardiff",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 16000.00",
    "intake": "Sep"
  },
  {
    "id": 43,
    "course": "BA (Hons) British Sign Language and Deaf Studies",
    "cardTitle": "British Sign Language & Deaf Studies",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ba-criminology-bs.webp",
    "color": "#B42247",
    "universityName": "University of Lancashire (Previously known as University of Central Lancashire), Preston",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 18750.00",
    "intake": "Sep"
  },
  {
    "id": 44,
    "course": "MA Education (Leadership and Management)",
    "cardTitle": "Education (Leadership & Management)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-administration-phd.webp",
    "color": "#2479BF",
    "universityName": "Bath Spa University",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17485.00",
    "intake": "Sep"
  },
  {
    "id": 45,
    "course": "MA Education",
    "cardTitle": "Education",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/ed-higher-adult-education-phd.webp",
    "color": "#9CB422",
    "universityName": "York St John University (York), York",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 11800.00",
    "intake": "Sep"
  },
  {
    "id": 46,
    "course": "MA Education: Coaching and Mentoring",
    "cardTitle": "Education: Coaching & Mentoring",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/education-change-ms.webp",
    "color": "#AA24BF",
    "universityName": "St. Mary's University Twickenham, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 18180.00",
    "intake": "Sep"
  },
  {
    "id": 47,
    "course": "MA Physical Education and School Sport",
    "cardTitle": "Physical Education & School Sport",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/education-co-op-ms.webp",
    "color": "#22B476",
    "universityName": "Southampton Solent University, Southampton",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17780.00",
    "intake": "Sep"
  },
  {
    "id": 48,
    "course": "MA Special Educational Needs and Disability (SEND)",
    "cardTitle": "Special Educational Needs & Disability (SEND)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/educational-leadership-learning-phd.webp",
    "color": "#BF5024",
    "universityName": "Lincoln Bishop University",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 16000.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 49,
    "course": "MA Designing Education",
    "cardTitle": "Designing Education",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/elementary-education-bs.webp",
    "color": "#2223B4",
    "universityName": "Goldsmiths, University of London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 22500.00",
    "intake": "Sep"
  },
  {
    "id": 50,
    "course": "MSc Strategic Leadership in Occupational Safety and Health",
    "cardTitle": "Strategic Leadership in Safety & Health",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/concentration-health-hospitality-ms.webp",
    "color": "#52BF24",
    "universityName": "Middlesex University, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17700.00",
    "intake": "Sep"
  },
  {
    "id": 51,
    "course": "MSc Counselling",
    "cardTitle": "Counselling",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/experimental-psychology-thes-phd.webp",
    "color": "#B42278",
    "universityName": "Bangor University, Bangor",
    "duration": "2 years",
    "tuitionCostYearly": "GBP 22500.00",
    "intake": "Sep"
  },
  {
    "id": 52,
    "course": "PhD Childhood Studies",
    "cardTitle": "Childhood Studies",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/ba-legal-studies-economics-bs.webp",
    "color": "#24ACBF",
    "universityName": "University of Essex, Essex",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 20625.00",
    "intake": "Oct"
  },
  {
    "id": 53,
    "course": "PhD Education",
    "cardTitle": "Education",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/bachelor-civil-engineering.webp",
    "color": "#B49B22",
    "universityName": "University of Stirling, Stirling",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 21500.00",
    "intake": "Sep"
  },
  {
    "id": 54,
    "course": "MPhil Education",
    "cardTitle": "Education",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/bachelor-criminology-bs.webp",
    "color": "#7724BF",
    "universityName": "Goldsmiths, University of London",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 21000.00",
    "intake": "Sep"
  },
  {
    "id": 55,
    "course": "PhD Education (School of Social and Environmental Sustainability)",
    "cardTitle": "Education",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/bachelor-social-juticebs.webp",
    "color": "#22B446",
    "universityName": "University of Glasgow, Glasgow",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 26580.00",
    "intake": "Sep"
  },
  {
    "id": 56,
    "course": "Medical Education PhD",
    "cardTitle": "",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/kinesiology-health.webp",
    "color": "#BF242C",
    "universityName": "University of Nottingham, Nottingham",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 25750.00",
    "intake": "Oct,Feb,Jul"
  },
  {
    "id": 57,
    "course": "PhD Higher Education",
    "cardTitle": "Higher Education",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/bachelor-hornours-criminology-bs.webp",
    "color": "#2254B4",
    "universityName": "University of Kent",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 19300.00",
    "intake": "Sep,Apr"
  },
  {
    "id": 58,
    "course": "MSc Software Engineering",
    "cardTitle": "Software Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-bs.webp",
    "color": "#86BF24",
    "universityName": "Ravensbourne University London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 18500.00",
    "intake": "Sep"
  },
  {
    "id": 59,
    "course": "MSc Engineering Management with AI",
    "cardTitle": "Engineering Management with AI",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/business-administration-supply-bs.webp",
    "color": "#B422A9",
    "universityName": "University of Sunderland, London, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 18000.00",
    "intake": "Apr,Oct"
  },
  {
    "id": 60,
    "course": "MSc Motorsport Engineering",
    "cardTitle": "Motorsport Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-phd.webp",
    "color": "#24BF9D",
    "universityName": "University of Wales Trinity Saint David, Swansea",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17500.00",
    "intake": "Sep"
  },
  {
    "id": 61,
    "course": "MSc Robotics",
    "cardTitle": "Robotics",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biological-sciences-bs.webp",
    "color": "#B46A22",
    "universityName": "University of Birmingham, UK, Birmingham",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 33660.00",
    "intake": "Sep"
  },
  {
    "id": 62,
    "course": "MSc Aerospace Engineering",
    "cardTitle": "Aerospace Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/civil-engineering-phd.webp",
    "color": "#4324BF",
    "universityName": "University of Glasgow, Glasgow",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 34470.00",
    "intake": "Sep"
  },
  {
    "id": 63,
    "course": "MSc Mechanical Engineering with Placement Year",
    "cardTitle": "Mechanical Engineering with Placement Year",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/mechanical-engineering-bs.webp",
    "color": "#30B422",
    "universityName": "University of East London, London",
    "duration": "2 years",
    "tuitionCostYearly": "GBP 17220.00",
    "intake": "Sep,Jan,May"
  },
  {
    "id": 64,
    "course": "MSc Biomedical Engineering",
    "cardTitle": "Biomedical Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-electrical-engineering-phd.webp",
    "color": "#BF245F",
    "universityName": "Durham University, Durham",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 33500.00",
    "intake": "Sep"
  },
  {
    "id": 65,
    "course": "MPhil Engineering and the Built Environment",
    "cardTitle": "Engineering & the Built Environment",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-ms.webp",
    "color": "#2285B4",
    "universityName": "Anglia Ruskin University, Chelmsford",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17500.00",
    "intake": "Jan,Apr,Sep"
  },
  {
    "id": 66,
    "course": "PhD in Architecture, Building and Civil Engineering",
    "cardTitle": "Architecture, Building & Civil Engineering",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-phd.webp",
    "color": "#BABF24",
    "universityName": "Loughborough University, Leicester",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 29500.00",
    "intake": "Apr,Jul,Oct,Feb"
  },
  {
    "id": 67,
    "course": "PhD Biomedical Engineering",
    "cardTitle": "Biomedical Engineering",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-bs-v2.webp",
    "color": "#8E22B4",
    "universityName": "University of Strathclyde, Glasgow",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 32800.00",
    "intake": "Sep"
  },
  {
    "id": 68,
    "course": "PhD Engineering",
    "cardTitle": "Engineering",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-phd.webp",
    "color": "#24BF6A",
    "universityName": "University of Leicester, Leicester",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 24250.00",
    "intake": "Sep,Jan,May"
  },
  {
    "id": 69,
    "course": "PhD Micro-Nano Manufacturing",
    "cardTitle": "Micro-Nano Manufacturing",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/biological-sciences-ms.webp",
    "color": "#B43922",
    "universityName": "Brunel University of London, London",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 24795.00",
    "intake": "Jan,Apr,Oct"
  },
  {
    "id": 70,
    "course": "PhD Robotics and Systems Engineering",
    "cardTitle": "Robotics & Systems Engineering",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/electronic-engineering-phd.webp",
    "color": "#2439BF",
    "universityName": "University of Salford, Manchester",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 19240.00",
    "intake": "May,Sep"
  },
  {
    "id": 71,
    "course": "PhD Electronic, Electrical and Systems Engineering",
    "cardTitle": "Electronic, Electrical & Systems Engineering",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/engineering-bs.webp",
    "color": "#60B422",
    "universityName": "University of Birmingham, UK, Birmingham",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 29310.00",
    "intake": "Sep"
  },
  {
    "id": 72,
    "course": "PhD Civil Engineering",
    "cardTitle": "Civil Engineering",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/engineering-coperative-phd.webp",
    "color": "#BF2493",
    "universityName": "University of Bath, Bath",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 30450.00",
    "intake": "Sep"
  },
  {
    "id": 73,
    "course": "PhD Aerospace Engineering",
    "cardTitle": "Aerospace Engineering",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/engineering-industrial-ms.webp",
    "color": "#22B4B3",
    "universityName": "University of Bristol, Bristol",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 27500.00",
    "intake": "Sep"
  },
  {
    "id": 74,
    "course": "BSc (Hons) Software Engineering (Placement)",
    "cardTitle": "Software Engineering (Placement)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/engineering-ms.webp",
    "color": "#BF9024",
    "universityName": "University of Winchester, Winchester",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 16700.00",
    "intake": "Sep"
  },
  {
    "id": 75,
    "course": "BEng (Hons) Computer Engineering (with a Placement Year)",
    "cardTitle": "Computer Engineering (with a Placement Year)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-ms.webp",
    "color": "#5E22B4",
    "universityName": "St. Mary's University Twickenham, London",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 17445.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 76,
    "course": "BEng (Hons) Maritime Engineering",
    "cardTitle": "Maritime Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/interdisciplinary-engineering-phd.webp",
    "color": "#24BF36",
    "universityName": "Southampton Solent University, Southampton",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 19081.00",
    "intake": "Sep"
  },
  {
    "id": 77,
    "course": "BSc (Hons) Broadcast Engineering",
    "cardTitle": "Broadcast Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/philosophy-engineering-phd.webp",
    "color": "#B4223C",
    "universityName": "Ravensbourne University London",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17500.00",
    "intake": "Sep"
  },
  {
    "id": 78,
    "course": "BSc (Hons) Aircraft Engineering and Maintenance Systems (Top Up)",
    "cardTitle": "Aircraft Engineering & Maintenance",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/sustainable-design-engineering-ms.webp",
    "color": "#246DBF",
    "universityName": "University of South Wales, Cardiff",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17200.00",
    "intake": "Sep,Feb"
  },
  {
    "id": 79,
    "course": "BEng (Hons) Mechanical Engineering (Top-Up)",
    "cardTitle": "Mechanical Engineering (Top-Up)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/sustainable-design-engineering-phd.webp",
    "color": "#91B422",
    "universityName": "University of Sunderland, Sunderland, Sunderland",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17500.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 80,
    "course": "BEng (Hons) Civil Engineering",
    "cardTitle": "Civil Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/bs-criminal-justice-bs.webp",
    "color": "#B724BF",
    "universityName": "University of Glasgow, Glasgow",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 33210.00",
    "intake": "Sep"
  },
  {
    "id": 81,
    "course": "BSc (Hons) Diagnostic Radiography",
    "cardTitle": "Diagnostic Radiography",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/bs-law-society-bs.webp",
    "color": "#22B482",
    "universityName": "University of Suffolk, Suffolk",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 18870.00",
    "intake": "Sep"
  },
  {
    "id": 82,
    "course": "BSc (Hons) Biomedical Science",
    "cardTitle": "Biomedical Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-phd.webp",
    "color": "#BF5D24",
    "universityName": "Bath Spa University",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 18585.00",
    "intake": "Sep"
  },
  {
    "id": 83,
    "course": "BSc (Hons) Physiotherapy",
    "cardTitle": "Physiotherapy",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/career-technical-ms.webp",
    "color": "#2D22B4",
    "universityName": "University of Cumbria",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17800.00",
    "intake": "Sep"
  },
  {
    "id": 84,
    "course": "BSc (Hons) Medical Sciences",
    "cardTitle": "Medical Sciences",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/psychological-health-sciences.webp",
    "color": "#46BF24",
    "universityName": "University of South Wales, Cardiff",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17200.00",
    "intake": "Sep"
  },
  {
    "id": 85,
    "course": "BSc (Hons) Pharmacology and Health Science",
    "cardTitle": "Pharmacology & Health Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/medicine-science-health.webp",
    "color": "#B4226D",
    "universityName": "University of Bedfordshire, Bedfordshire",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 16800.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 86,
    "course": "BSc (Hons) Nursing (Adult)",
    "cardTitle": "Nursing (Adult)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/kinesiology-studies-health-phd.webp",
    "color": "#24A0BF",
    "universityName": "University of Worcester",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17200.00",
    "intake": "Sep,Mar"
  },
  {
    "id": 87,
    "course": "BDS Dentistry",
    "cardTitle": "Dentistry",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/child-youth-care-bs.webp",
    "color": "#B4A622",
    "universityName": "University of Glasgow, Glasgow",
    "duration": "5 years",
    "tuitionCostYearly": "GBP 58500.00",
    "intake": "Sep"
  },
  {
    "id": 88,
    "course": "BMedSci Orthoptics",
    "cardTitle": "Orthoptics",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/co-op-management-ms.webp",
    "color": "#8324BF",
    "universityName": "University of Sheffield, Sheffield",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 32100.00",
    "intake": "Sep"
  },
  {
    "id": 89,
    "course": "MSc Healthcare Management",
    "cardTitle": "Healthcare Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/nurse-clinic-health.webp",
    "color": "#22B451",
    "universityName": "University of Law (Manchester)",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17500.00",
    "intake": "Feb"
  },
  {
    "id": 90,
    "course": "MSc Healthcare Leadership and Management (Global Health)",
    "cardTitle": "Healthcare Leadership & Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/pharmaceutical-health.webp",
    "color": "#BF2924",
    "universityName": "BPP University, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 23600.00",
    "intake": "Sep"
  },
  {
    "id": 91,
    "course": "MSc Nursing Practice",
    "cardTitle": "Nursing Practice",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/pre-medicine-bs.webp",
    "color": "#2248B4",
    "universityName": "University of Sunderland, London, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 18000.00",
    "intake": "Oct,Apr,Aug"
  },
  {
    "id": 92,
    "course": "MSc Pharmacology",
    "cardTitle": "Pharmacology",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/Computer-Science.webp",
    "color": "#7ABF24",
    "universityName": "University of Bedfordshire, Bedfordshire",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17900.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 93,
    "course": "MSc Counselling and Psychotherapy Studies",
    "cardTitle": "Counselling & Psychotherapy Studies",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/criminology-arts-ms.webp",
    "color": "#B4229D",
    "universityName": "Abertay University, Dundee",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 19950.00",
    "intake": "Sep"
  },
  {
    "id": 94,
    "course": "MSc Digital Health",
    "cardTitle": "Digital Health",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/public-health-ms.webp",
    "color": "#24BFA9",
    "universityName": "St. Mary's University Twickenham, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 18180.00",
    "intake": "Jan"
  },
  {
    "id": 95,
    "course": "MSc Pharmaceutical Science and Drug Delivery Systems",
    "cardTitle": "Pharmaceutical Science & Drug Delivery Systems",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/information-computer-science-phd.webp",
    "color": "#B47522",
    "universityName": "London Metropolitan University, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 20000.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 96,
    "course": "MSc Clinical Nursing",
    "cardTitle": "Clinical Nursing",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/public-health.webp",
    "color": "#4F24BF",
    "universityName": "Anglia Ruskin University, Chelmsford",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 18400.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 97,
    "course": "Mphil/PhD Pharmacy and Pharmaceutical Sciences",
    "cardTitle": "Pharmacy & Pharmaceutical Sciences",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/data-analytics-ms.webp",
    "color": "#24B422",
    "universityName": "University of Lincoln",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 18900.00",
    "intake": "Oct,Feb"
  },
  {
    "id": 98,
    "course": "Clinical MD Professional Doctorate in General Internal Medicine",
    "cardTitle": "General Internal Medicine",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/toxicology-health.webp",
    "color": "#BF2453",
    "universityName": "University of Hertfordshire, Hertfordshire",
    "duration": "2 years 3 months",
    "tuitionCostYearly": "GBP 25000.00",
    "intake": "Sep"
  },
  {
    "id": 99,
    "course": "DPT Doctorate of Physiotherapy",
    "cardTitle": "Physiotherapy",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/disaster-national-security-ms.webp",
    "color": "#2279B4",
    "universityName": "Robert Gordon University",
    "duration": "3 years 5 months",
    "tuitionCostYearly": "GBP 21730.00",
    "intake": "Jan"
  },
  {
    "id": 100,
    "course": "PhD Health",
    "cardTitle": "Health",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/wellness-health-ms.webp",
    "color": "#ADBF24",
    "universityName": "University of West London, London",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 16000.00",
    "intake": "Feb,Sep"
  },
  {
    "id": 101,
    "course": "PhD Nursing and Midwifery",
    "cardTitle": "Nursing & Midwifery",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/doctor-philosophy-phd.webp",
    "color": "#9A22B4",
    "universityName": "Queen`s University Belfast, Belfast",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 22500.00",
    "intake": "Sep"
  },
  {
    "id": 102,
    "course": "PhD Nutrition",
    "cardTitle": "Nutrition",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/nutrition-dietetics-bs.webp",
    "color": "#24BF76",
    "universityName": "Oxford Brookes University, Oxford",
    "duration": "2 years",
    "tuitionCostYearly": "GBP 19300.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 103,
    "course": "PhD Applied Psychology",
    "cardTitle": "Applied Psychology",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/dual-mba-phd.webp",
    "color": "#B44522",
    "universityName": "University of Kent",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 19300.00",
    "intake": "Sep"
  },
  {
    "id": 104,
    "course": "PhD Cancer and Genomic Sciences",
    "cardTitle": "Cancer & Genomic Sciences",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/economics-bs.webp",
    "color": "#242DBF",
    "universityName": "University of Birmingham, UK, Birmingham",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 29310.00",
    "intake": "Sep"
  },
  {
    "id": 105,
    "course": "PhD Ageing, Health and Welfare",
    "cardTitle": "Ageing, Health & Welfare",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/economics-masters.webp",
    "color": "#55B422",
    "universityName": "University of Glasgow, Glasgow",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 33210.00",
    "intake": "Sep"
  },
  {
    "id": 106,
    "course": "MPhil Law",
    "cardTitle": "Law",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/human-right-social-justice-ms.webp",
    "color": "#BF2487",
    "universityName": "Goldsmiths, University of London",
    "duration": "2 years",
    "tuitionCostYearly": "GBP 21000.00",
    "intake": "Sep"
  },
  {
    "id": 107,
    "course": "Criminology PhD",
    "cardTitle": "",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/justice-peace-studies-bs.webp",
    "color": "#22AAB4",
    "universityName": "Abertay University, Dundee",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 13750.00",
    "intake": "Oct,Jun"
  },
  {
    "id": 108,
    "course": "PhD Research Degrees in Law",
    "cardTitle": "Research Degrees in Law",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/master-social-justice-ms.webp",
    "color": "#BF9C24",
    "universityName": "Nottingham Trent University, Nottingham",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 17900.00",
    "intake": "Oct"
  },
  {
    "id": 109,
    "course": "PhD Business, Management and Law",
    "cardTitle": "Business, Management & Law",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/global-management-ms.webp",
    "color": "#6922B4",
    "universityName": "University of Salford, Manchester",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17920.00",
    "intake": "May"
  },
  {
    "id": 110,
    "course": "PhD Social Policy, Sociology and Criminology",
    "cardTitle": "Social Policy, Sociology & Criminology",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/masters-law-ms.webp",
    "color": "#24BF42",
    "universityName": "University of Birmingham, UK, Birmingham",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 22110.00",
    "intake": "Sep"
  },
  {
    "id": 111,
    "course": "PhD Law",
    "cardTitle": "Law",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/ed-teacher-leadership-phd.webp",
    "color": "#B42230",
    "universityName": "University of Glasgow, Glasgow",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 27720.00",
    "intake": "Sep"
  },
  {
    "id": 112,
    "course": "PhD Linguistics",
    "cardTitle": "Linguistics",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/film-media-production.webp",
    "color": "#2460BF",
    "universityName": "University of Surrey, Surrey",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 21000.00",
    "intake": "Oct,Apr,Jul"
  },
  {
    "id": 113,
    "course": "PhD study in School of Law",
    "cardTitle": "Law Research",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/film-media-studies.webp",
    "color": "#85B422",
    "universityName": "University of Sheffield, Sheffield",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 34340.00",
    "intake": "Sep"
  },
  {
    "id": 114,
    "course": "Human Factors PhD",
    "cardTitle": "Human Factors",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/human-resource-ms.webp",
    "color": "#BF24BA",
    "universityName": "University of Nottingham, Nottingham",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 25750.00",
    "intake": "Sep"
  },
  {
    "id": 115,
    "course": "LLM Bar Training Course",
    "cardTitle": "r Training Course",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/finance-bs.webp",
    "color": "#22B48D",
    "universityName": "BPP University, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 19500.00",
    "intake": "Sep"
  },
  {
    "id": 116,
    "course": "LLM International Commercial Law",
    "cardTitle": "International Commercial Law",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/finance-ms.webp",
    "color": "#BF6924",
    "universityName": "Bath Spa University",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17485.00",
    "intake": "Sep"
  },
  {
    "id": 117,
    "course": "MA Criminology & Criminal Justice",
    "cardTitle": "Criminology & Criminal Justice",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/game-design-ms.webp",
    "color": "#3822B4",
    "universityName": "Wrexham University",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 12500.00",
    "intake": "Sep"
  },
  {
    "id": 118,
    "course": "LLM Data Protection and Intellectual Property",
    "cardTitle": "Data Protection & Intellectual Property",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/hospitality-management-ms.webp",
    "color": "#3ABF24",
    "universityName": "University of Law (Bristol)",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 18250.00",
    "intake": "Feb,Oct"
  },
  {
    "id": 119,
    "course": "LLM Commercial Law and Professional Legal Practice",
    "cardTitle": "Commercial Law & Professional Legal Practice",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/human-right-economics-bs.webp",
    "color": "#B42261",
    "universityName": "Southampton Solent University, Southampton",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17780.00",
    "intake": "Sep"
  },
  {
    "id": 120,
    "course": "LLM Human Rights and Social Justice",
    "cardTitle": "Human Rights & Social Justice",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/leadership-civic-studies-bs.webp",
    "color": "#2494BF",
    "universityName": "Goldsmiths, University of London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 23000.00",
    "intake": "Sep"
  },
  {
    "id": 121,
    "course": "MSc Artificial Intelligence in Cybercrime and Criminal Justice",
    "cardTitle": "AI & Criminal Justice",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/leadership-perspectives-ms.webp",
    "color": "#B4B222",
    "universityName": "University of West London, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 17250.00",
    "intake": "Sep,Feb"
  },
  {
    "id": 122,
    "course": "LLM Financial Services Law, Regulation and Compliance",
    "cardTitle": "Financial Services Law, Regulation & Compliance",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/master-accounting-ms.webp",
    "color": "#8F24BF",
    "universityName": "London Metropolitan University, London",
    "duration": "1 year",
    "tuitionCostYearly": "GBP 16000.00",
    "intake": "Sep"
  },
  {
    "id": 123,
    "course": "BSc(Hons) Business with Law",
    "cardTitle": "Business with Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/mba.webp",
    "color": "#22B45D",
    "universityName": "Queen Mary University of London, UK, London",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 29450.00",
    "intake": "Sep"
  },
  {
    "id": 124,
    "course": "BA Criminal Justice and Criminology",
    "cardTitle": "Criminal Justice & Criminology",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/master-accounting-phd.webp",
    "color": "#BF3524",
    "universityName": "University of Leeds, Leeds",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 26750.00",
    "intake": "Sep"
  },
  {
    "id": 125,
    "course": "BA (Hons) Criminology and Social Psychology",
    "cardTitle": "Criminology & Social Psychology",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/new-business-administration-phd.webp",
    "color": "#223DB4",
    "universityName": "University of York, York",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 26900.00",
    "intake": "Sep"
  },
  {
    "id": 126,
    "course": "LLB (Hons) Law with American Law",
    "cardTitle": "Law with American Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/phd-public-policy-ms.webp",
    "color": "#6EBF24",
    "universityName": "University of East Anglia, Norwich",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 23100.00",
    "intake": "Sep"
  },
  {
    "id": 127,
    "course": "BSc Business, Management, Economics & Law with Foundation Year",
    "cardTitle": "Business & Law (Foundation Year)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/physical-tharapy-phd.webp",
    "color": "#B42292",
    "universityName": "SOAS University of London",
    "duration": "4 years",
    "tuitionCostYearly": "GBP 23780.00",
    "intake": "Sep"
  },
  {
    "id": 128,
    "course": "LLB (Hons) Law and Practice",
    "cardTitle": "Law & Practice",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/women-gender-studies-bs.webp",
    "color": "#24BFB6",
    "universityName": "University of Huddersfield, Huddersfield",
    "duration": "3 years",
    "tuitionCostYearly": "GBP 17600.00",
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
      ? "Master's Degree Programs in the UK"
      : activeTab === "bachelors"
        ? "Bachelor's Degree Programs in the UK"
        : activeTab === "phd"
          ? "PhD Programs in the UK"
          : "All Degree Programs in the UK";

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
              in the UK
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
          *STEM classification is indicative based on the course title. Confirm official programme classification and any UK visa or employment requirements with the university and relevant authorities.
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


