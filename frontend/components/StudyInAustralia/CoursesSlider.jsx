
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
   AUSTRALIA PROGRAMS FROM THE PROVIDED UNIVERSITY COURSE PDFS
========================================= */

const courseCards = [
  {
    "id": 1,
    "course": "Bachelor of Education (Early Childhood and Primary)",
    "cardTitle": "Education: Early Childhood & Primary",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bachelor-education-bs.webp",
    "color": "#B42222",
    "universityName": "The University of Newcastle, Newcastle",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 41130.00",
    "intake": "Feb"
  },
  {
    "id": 2,
    "course": "Bachelor of Human Movement majoring in Secondary Health and Physical Education",
    "cardTitle": "Human Movement: Secondary Health & PE",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/chemical-public-health-phd.webp",
    "color": "#2451BF",
    "universityName": "Adelaide University, Adelaide",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 52500.00",
    "intake": "Feb"
  },
  {
    "id": 3,
    "course": "Bachelor of Counselling",
    "cardTitle": "Counselling",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ba-psychology-bs.webp",
    "color": "#77B422",
    "universityName": "Griffith University, Brisbane",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 35500.00",
    "intake": "Mar,Jul,Nov"
  },
  {
    "id": 4,
    "course": "Bachelor of Education (Biology and Human Biology Major Teaching Area)",
    "cardTitle": "Education: Biology & Human Biology",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/consecutive-education-bs.webp",
    "color": "#BF24AB",
    "universityName": "Murdoch University, Perth, Perth",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 34320.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 5,
    "course": "Bachelor of Exercise and Sport Sciences (Secondary Teaching)",
    "cardTitle": "Exercise & Sport Sciences (Secondary Teaching)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/counselor-education-supervision.webp",
    "color": "#22B49C",
    "universityName": "CQUniversity, Rockhampton, Rockhampton",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 38400.00",
    "intake": "Feb"
  },
  {
    "id": 6,
    "course": "Bachelor of Early Childhood Education( Birth to 5 )",
    "cardTitle": "Early Childhood Education",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ed-higher-adult-education-phd.webp",
    "color": "#BF7824",
    "universityName": "Excelsia University College, Sydney",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 20800.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 7,
    "course": "Master of Education",
    "cardTitle": "Education",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/education-change-ms.webp",
    "color": "#4722B4",
    "universityName": "University of New South Wales, Sydney, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 47000.00",
    "intake": "May,Sep"
  },
  {
    "id": 8,
    "course": "Master of Leadership and Management in Education",
    "cardTitle": "Leadership & Management in Education",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bach-business-administration-bs.webp",
    "color": "#2BBF24",
    "universityName": "The University of Newcastle, Newcastle",
    "duration": "1 year",
    "tuitionCostYearly": "AUD 41440.00",
    "intake": "Feb,Aug"
  },
  {
    "id": 9,
    "course": "Master of Teaching (Secondary)| (Quota Program - Limited Seats)",
    "cardTitle": "Teaching (Secondary)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/education-co-op-ms.webp",
    "color": "#B42253",
    "universityName": "Swinburne University of Technology, Melbourne",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 36240.00",
    "intake": "Sep,Jan,Aug"
  },
  {
    "id": 10,
    "course": "Master of Health Administration, Policy and Leadership",
    "cardTitle": "Health Administration & Policy",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/concentration-health-hospitality-ms.webp",
    "color": "#2485BF",
    "universityName": "Murdoch University, Perth, Perth",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 34320.00",
    "intake": "Jan,May,Aug"
  },
  {
    "id": 11,
    "course": "Master of Counselling",
    "cardTitle": "Counselling",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/clinical-psychology-phd.webp",
    "color": "#A8B422",
    "universityName": "Excelsia University College, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 22000.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 12,
    "course": "Master of Criminology/ Master of Project Management",
    "cardTitle": "Criminology & Project Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/project-management-ms.webp",
    "color": "#9E24BF",
    "universityName": "Bond University, Gold Coast, Gold Coast",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 49075.00",
    "intake": "Jan,May,Sep"
  },
  {
    "id": 13,
    "course": "Master of International Commercial and Business Law Master of Business Administration",
    "cardTitle": "Commercial & Business Law / MBA",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/international-business-administration-bs.webp",
    "color": "#22B46B",
    "universityName": "University of Technology Sydney, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 47915.00",
    "intake": "Jul,Feb"
  },
  {
    "id": 14,
    "course": "Master of Laws",
    "cardTitle": "Laws",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/adult-profesional-community-phd.webp",
    "color": "#BF4424",
    "universityName": "University of New South Wales, Sydney, Sydney",
    "duration": "1 year",
    "tuitionCostYearly": "AUD 59000.00",
    "intake": "Sep,May"
  },
  {
    "id": 15,
    "course": "Juris Doctor / Graduate Diploma in Legal Practice",
    "cardTitle": "Juris Doctor & Legal Practice",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/art-in-law-society-bs.webp",
    "color": "#222FB4",
    "universityName": "The University of Newcastle, Newcastle",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 40390.00",
    "intake": "Aug"
  },
  {
    "id": 16,
    "course": "Master of International and Security Law",
    "cardTitle": "International & Security Law",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/ba-criminology-bs.webp",
    "color": "#5EBF24",
    "universityName": "Adelaide University, Adelaide",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 57100.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 17,
    "course": "Master of International Law Studies",
    "cardTitle": "International Law Studies",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/ba-legal-studies-economics-bs.webp",
    "color": "#B42284",
    "universityName": "Griffith University, Brisbane",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 41000.00",
    "intake": "Mar,Jul"
  },
  {
    "id": 18,
    "course": "Master of Business Administration and Master of Laws",
    "cardTitle": "Business Administration & Law",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bachelor-criminology-bs.webp",
    "color": "#24B9BF",
    "universityName": "University of Western Australia, Perth",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 66700.00",
    "intake": "Jan"
  },
  {
    "id": 19,
    "course": "Master of Justice and Criminology",
    "cardTitle": "Justice & Criminology",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bachelor-hornours-criminology-bs.webp",
    "color": "#B48F22",
    "universityName": "RMIT University, Melbourne",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 41280.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 20,
    "course": "Master of International Business and Master of Laws",
    "cardTitle": "International Business & Law",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/mba-international-business-ms.webp",
    "color": "#6B24BF",
    "universityName": "Macquarie University, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 46900.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 21,
    "course": "Master of Forensic Science",
    "cardTitle": "Forensic Science",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-bs.webp",
    "color": "#22B43A",
    "universityName": "Flinders University, Adelaide",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 46000.00",
    "intake": "Mar,Jul"
  },
  {
    "id": 22,
    "course": "Bachelor of Commerce/Bachelor of Law",
    "cardTitle": "Commerce & Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bs-criminal-justice-bs.webp",
    "color": "#BF2438",
    "universityName": "University of New South Wales, Sydney, Sydney",
    "duration": "5 years",
    "tuitionCostYearly": "AUD 56500.00",
    "intake": "Sep"
  },
  {
    "id": 23,
    "course": "Bachelor of Forensic Science",
    "cardTitle": "Forensic Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-phd.webp",
    "color": "#225FB4",
    "universityName": "University of Technology Sydney, Sydney",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 50465.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 24,
    "course": "Bachelor of Biomedicine / Bachelor of Laws (Honours)",
    "cardTitle": "Biomedicine & Law",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/bs-law-society-bs.webp",
    "color": "#92BF24",
    "universityName": "The University of Newcastle, Newcastle",
    "duration": "5 years",
    "tuitionCostYearly": "AUD 40700.00",
    "intake": "Feb"
  },
  {
    "id": 25,
    "course": "Bachelor of Arts (Criminology)",
    "cardTitle": "Arts (Criminology)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/criminology-arts-ms.webp",
    "color": "#B322B4",
    "universityName": "Swinburne University of Technology, Melbourne",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 36280.00",
    "intake": "Mar,Aug"
  },
  {
    "id": 26,
    "course": "Bachelor of Criminology/ Bachelor of Psychology Science",
    "cardTitle": "Criminology & Psychology",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-artificial-science-ms.webp",
    "color": "#24BF91",
    "universityName": "Deakin University, Melbourne",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 43000.00",
    "intake": "Mar,Jul"
  },
  {
    "id": 27,
    "course": "Bachelor of Justice/ Bachelor of Laws (Honours)",
    "cardTitle": "Justice & Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/human-right-social-justice-ms.webp",
    "color": "#B45E22",
    "universityName": "Queensland University of Technology, Brisbane",
    "duration": "5 years 6 months",
    "tuitionCostYearly": "AUD 44000.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 28,
    "course": "Bachelor of Criminology and Criminal Justice majoring in Aboriginal Studies",
    "cardTitle": "Criminology & Criminal Justice",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/justice-peace-studies-bs.webp",
    "color": "#3724BF",
    "universityName": "Adelaide University, Adelaide",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 45100.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 29,
    "course": "Bachelor of Criminology and Criminal Justice",
    "cardTitle": "Criminology & Criminal Justice",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/master-social-justice-ms.webp",
    "color": "#3BB422",
    "universityName": "University of Western Australia, Perth",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 42500.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 30,
    "course": "PhD in Clinical Psychology",
    "cardTitle": "Clinical Psychology (PhD)",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/experimental-psychology-thes-phd.webp",
    "color": "#BF246C",
    "universityName": "Griffith University, Brisbane",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 37500.00",
    "intake": "Mar"
  },
  {
    "id": 31,
    "course": "Doctor of Pharmacy",
    "cardTitle": "Pharmacy",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/health-information-manegement-bs.webp",
    "color": "#2290B4",
    "universityName": "University of Western Australia, Perth",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 51300.00",
    "intake": "Feb"
  },
  {
    "id": 32,
    "course": "MASTER OF LABORATORY MEDICINE",
    "cardTitle": "LABORATORY MEDICINE",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/kinesiology-health.webp",
    "color": "#BFB824",
    "universityName": "CQUniversity, Melbourne, Melbourne",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 44880.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 33,
    "course": "Master of Occupational Therapy",
    "cardTitle": "Occupational Therapy",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/aerospace-engineerings-bs.webp",
    "color": "#8322B4",
    "universityName": "Bond University, Gold Coast, Gold Coast",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 81600.00",
    "intake": "May,Sep"
  },
  {
    "id": 34,
    "course": "Doctor of Pharmacy",
    "cardTitle": "Pharmacy",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/kinesiology-studies-health-phd.webp",
    "color": "#24BF5E",
    "universityName": "Charles Darwin University, Darwin",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 52112.00",
    "intake": "Feb"
  },
  {
    "id": 35,
    "course": "Master of Naturopathic Medicine",
    "cardTitle": "Naturopathic Medicine",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/medicine-science-health.webp",
    "color": "#B42E22",
    "universityName": "Southern Cross University, Gold Coast, Gold Coast",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 26000.00",
    "intake": "Mar,Jun"
  },
  {
    "id": 36,
    "course": "Master of Dietetics (Sports Nutrition)",
    "cardTitle": "Dietetics (Sports Nutrition)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/nutrition-dietetics-bs.webp",
    "color": "#2445BF",
    "universityName": "University of the Sunshine Coast Australia, Sunshine Coast, Sunshine Coast",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 38500.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 37,
    "course": "Master of Clinical Psychology",
    "cardTitle": "Clinical Psychology",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/psychological-health-sciences.webp",
    "color": "#6CB422",
    "universityName": "Macquarie University, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 51000.00",
    "intake": "Feb"
  },
  {
    "id": 38,
    "course": "Master of Pharmaceutical Science",
    "cardTitle": "Pharmaceutical Science",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/nurse-clinic-health.webp",
    "color": "#BF249F",
    "universityName": "University of Tasmania, Hobart",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 42950.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 39,
    "course": "Master of Nursing",
    "cardTitle": "Nursing",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/pharmaceutical-health.webp",
    "color": "#22B4A7",
    "universityName": "Adelaide University, Adelaide",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 54900.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 40,
    "course": "Bachelor of Dental Surgery",
    "cardTitle": "Dental Surgery",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/anatomy-lab.webp",
    "color": "#BF8424",
    "universityName": "James Cook University, Cairns, Cairns",
    "duration": "5 years",
    "tuitionCostYearly": "AUD 78989.00",
    "intake": "Feb"
  },
  {
    "id": 41,
    "course": "Bachelor of Physiotherapy",
    "cardTitle": "Physiotherapy",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/applied-computing-ms.webp",
    "color": "#5222B4",
    "universityName": "James Cook University, Townsville, Townsville",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 46111.00",
    "intake": "Feb"
  },
  {
    "id": 42,
    "course": "Bachelor of Occupational Therapy",
    "cardTitle": "Occupational Therapy",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/architecture.webp",
    "color": "#24BF2A",
    "universityName": "Southern Cross University, Coffs Harbour, Coffs Harbour",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 26000.00",
    "intake": "Mar"
  },
  {
    "id": 43,
    "course": "Bachelor of Psychology",
    "cardTitle": "Psychology",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/art-economics-bs.webp",
    "color": "#B42247",
    "universityName": "RMIT University, Melbourne",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 45120.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 44,
    "course": "Bachelor of Medical Sciences with a Major in Anatomy and Physiology",
    "cardTitle": "Medical Sciences: Anatomy & Physiology",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/pre-medicine-bs.webp",
    "color": "#2479BF",
    "universityName": "Macquarie University, Sydney",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 43800.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 45,
    "course": "Bachelor of Pharmacy with Honours",
    "cardTitle": "Pharmacy with Honours",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/public-health-ms.webp",
    "color": "#9CB422",
    "universityName": "University of Tasmania, Hobart",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 56600.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 46,
    "course": "Bachelor of Biomedical Science",
    "cardTitle": "Biomedical Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-analytics-phd.webp",
    "color": "#AA24BF",
    "universityName": "Murdoch University, Perth, Perth",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 34320.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 47,
    "course": "Bachelor of Nursing",
    "cardTitle": "Nursing",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/public-health.webp",
    "color": "#22B476",
    "universityName": "University of Technology Sydney, Sydney",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 48815.00",
    "intake": "Feb"
  },
  {
    "id": 48,
    "course": "Bachelor of Food Science and Human Nutrition",
    "cardTitle": "Food Science & Human Nutrition",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-bs.webp",
    "color": "#BF5024",
    "universityName": "The University of Newcastle, Newcastle",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 45060.00",
    "intake": "Feb,Aug"
  },
  {
    "id": 49,
    "course": "Bachelor of Medical Imaging (Honours)",
    "cardTitle": "Medical Imaging (Honours)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/toxicology-health.webp",
    "color": "#2223B4",
    "universityName": "Queensland University of Technology, Brisbane",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 44500.00",
    "intake": "Feb"
  },
  {
    "id": 50,
    "course": "Bachelor of Engineering (Electrical and Electronic) (Honours)",
    "cardTitle": "Electrical & Electronic Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-electrical-engineering-phd.webp",
    "color": "#52BF24",
    "universityName": "University of the Sunshine Coast Australia, Sunshine Coast, Sunshine Coast",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 32420.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 51,
    "course": "Bachelor of Engineering (Honours) (Mechanical Engineering)",
    "cardTitle": "Mechanical Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/mechanical-engineering-bs.webp",
    "color": "#B42278",
    "universityName": "Southern Cross University, Gold Coast, Gold Coast",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 26000.00",
    "intake": "Mar,Jun"
  },
  {
    "id": 52,
    "course": "Bachelor of Engineering Science",
    "cardTitle": "Engineering Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-engineering-phd.webp",
    "color": "#24ACBF",
    "universityName": "Charles Darwin University, Darwin",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 39392.00",
    "intake": "Feb,Jul,Nov"
  },
  {
    "id": 53,
    "course": "Bachelor of Engineering (Aerospace Engineering) (Honours)",
    "cardTitle": "Engineering (Aerospace Engineering) (Honours)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/automotive-engineering-ms.webp",
    "color": "#B49B22",
    "universityName": "RMIT University, Melbourne",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 48960.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 54,
    "course": "Bachelor of Maritime Engineering (Specialisation) (Honours)",
    "cardTitle": "Maritime Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/bachelor-civil-engineering.webp",
    "color": "#7724BF",
    "universityName": "University of Tasmania, Hobart",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 45450.00",
    "intake": "Feb"
  },
  {
    "id": 55,
    "course": "Bachelor of Engineering (Honours) in Automation and Robotics Engineering",
    "cardTitle": "Automation & Robotics Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/civil-engineering-phd.webp",
    "color": "#22B446",
    "universityName": "University of Western Australia, Perth",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 51000.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 56,
    "course": "Master of Management for Engineers",
    "cardTitle": "nagement for Engineers",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/business-administration-bs.webp",
    "color": "#BF242C",
    "universityName": "CQUniversity, Brisbane, Brisbane",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 38640.00",
    "intake": "Feb,Jul,Nov"
  },
  {
    "id": 57,
    "course": "Master of Engineering Project Management",
    "cardTitle": "Engineering Project Management",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/business-administration-finance-phd.webp",
    "color": "#2254B4",
    "universityName": "University of the Sunshine Coast Australia, Sunshine Coast, Sunshine Coast",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 38500.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 58,
    "course": "Master of Engineering (Mechanical Engineering)",
    "cardTitle": "Mechanical Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-ms.webp",
    "color": "#86BF24",
    "universityName": "RMIT University, Melbourne",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 49920.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 59,
    "course": "Master of Engineering (Professional) in Civil and Construction Engineering",
    "cardTitle": "Civil & Construction Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-phd.webp",
    "color": "#B422A9",
    "universityName": "Macquarie University, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 46900.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 60,
    "course": "Master of Engineering Management / Master of Engineering Technology",
    "cardTitle": "Engineering Management & Technology",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/business-administration-phd.webp",
    "color": "#24BF9D",
    "universityName": "Queensland University of Technology, Brisbane",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 49000.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 61,
    "course": "Bachelor of Games Development",
    "cardTitle": "Games Development",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/film-media-production.webp",
    "color": "#B46A22",
    "universityName": "SAE University College, Adelaide, Brisbane, Melbourne, Perth, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 29702.00",
    "intake": "Sep,Feb,May"
  },
  {
    "id": 62,
    "course": "Bachelor of Information Technology (Cybersecurity) and Bachelor of Business",
    "cardTitle": "IT (Cybersecurity) & Business",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/business-administration-supply-bs.webp",
    "color": "#4324BF",
    "universityName": "Southern Cross University, Gold Coast, Gold Coast",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 26000.00",
    "intake": "Mar"
  },
  {
    "id": 63,
    "course": "Bachelor of Cyber security",
    "cardTitle": "Cyber security",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/cyber-studies-phd.webp",
    "color": "#30B422",
    "universityName": "Victoria University Sydney- ECA, Sydney",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 36800.00",
    "intake": "Apr,Jul,Feb,Sep,Nov"
  },
  {
    "id": 64,
    "course": "Bachelor of Information Technology (Application Development)",
    "cardTitle": "Information Technology (Application Development)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/information-computer-science-phd.webp",
    "color": "#BF245F",
    "universityName": "CQUniversity, Sydney, Sydney",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 38940.00",
    "intake": "Feb,Jul,Nov"
  },
  {
    "id": 65,
    "course": "Bachelor of Science in Computer Science",
    "cardTitle": "Science in Computer Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-mathematics-bs.webp",
    "color": "#2285B4",
    "universityName": "University of Western Australia, Perth",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 52000.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 66,
    "course": "Bachelor of Computer Science (Artificial Intelligence and Big Data)",
    "cardTitle": "Computer Science: AI & Big Data",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/data-science-ai-phd.webp",
    "color": "#BABF24",
    "universityName": "University of Wollongong, Wollongong",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 35568.00",
    "intake": "Mar,Jul"
  },
  {
    "id": 67,
    "course": "Bachelor of Computer Science (Honours) majoring in Artificial Intelligence and Machine Learning",
    "cardTitle": "Computer Science: AI & Machine Learning",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-ms.webp",
    "color": "#8E22B4",
    "universityName": "Adelaide University, Adelaide",
    "duration": "4 years",
    "tuitionCostYearly": "AUD 54300.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 68,
    "course": "Master of Cyber Security and Forensics",
    "cardTitle": "Cyber Security & Forensics",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/cybersecurity-ms.webp",
    "color": "#24BF6A",
    "universityName": "University of the Sunshine Coast, Adelaide, Adelaide",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 31500.00",
    "intake": "Feb,Jul,Nov"
  },
  {
    "id": 69,
    "course": "Master of Business Data Analytics",
    "cardTitle": "Business Data Analytics",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/business-analytics-ms.webp",
    "color": "#B43922",
    "universityName": "Charles Sturt University Melbourne (Navitas), Melbourne",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 32640.00",
    "intake": "Jul,Nov,Mar"
  },
  {
    "id": 70,
    "course": "Master of Data Science (Professional)",
    "cardTitle": "Data Science (Professional)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/data-science-ms.webp",
    "color": "#2439BF",
    "universityName": "James Cook University, Brisbane, Brisbane",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 38365.00",
    "intake": "Feb,Sep"
  },
  {
    "id": 71,
    "course": "Master of Enterprise Artificial Intelligence (Professional)",
    "cardTitle": "Enterprise Artificial Intelligence (Professional)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/robotics-automation-ms.webp",
    "color": "#60B422",
    "universityName": "Bond University, Gold Coast, Gold Coast",
    "duration": "1 year 9 months",
    "tuitionCostYearly": "AUD 85851.00",
    "intake": "Jan,Sep"
  },
  {
    "id": 72,
    "course": "Master of Data Science and Innovation",
    "cardTitle": "Data Science & Innovation",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-science-phd.webp",
    "color": "#BF2493",
    "universityName": "University of Technology Sydney, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 51600.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 73,
    "course": "Master of Information Technology",
    "cardTitle": "Information Technology",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/bachelor-social-juticebs.webp",
    "color": "#22B4B3",
    "universityName": "Swinburne University of Technology, Melbourne",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 37600.00",
    "intake": "Mar,Aug"
  },
  {
    "id": 74,
    "course": "Master of Artificial Intelligence and Machine Learning",
    "cardTitle": "Artificial Intelligence & Machine Learning",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/educational-leadership-learning-phd.webp",
    "color": "#BF9024",
    "universityName": "Adelaide University, Adelaide",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 57100.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 75,
    "course": "Doctor of Philosophy",
    "cardTitle": "PhD",
    "category": "phd",
    "stem": false,
    "image": "/images/courses/canada/doctor-philosophy-phd.webp",
    "color": "#5E22B4",
    "universityName": "Queensland University of Technology, Brisbane",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 45600.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 76,
    "course": "Master of Professional Accounting",
    "cardTitle": "Professional Accounting",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/economics-bs.webp",
    "color": "#24BF36",
    "universityName": "Excelsia University College, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 18500.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 77,
    "course": "Master of Business Analytics and AI Strategy",
    "cardTitle": "Business Analytics & AI Strategy",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/dba-business-analytics-phd.webp",
    "color": "#B4223C",
    "universityName": "RMIT University, Melbourne",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 50880.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 78,
    "course": "Master of Banking and Finance",
    "cardTitle": "Banking & Finance",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/economics-masters.webp",
    "color": "#246DBF",
    "universityName": "Macquarie University, Sydney",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 46900.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 79,
    "course": "Master of Global Logistics and Supply Chain Management (P7E)",
    "cardTitle": "Global Logistics & Supply Chain Management (P7E)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/global-management-ms.webp",
    "color": "#91B422",
    "universityName": "University of Tasmania, Hobart",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 37950.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 80,
    "course": "Master of International Economics and Finance",
    "cardTitle": "International Economics & Finance",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/finance-bs.webp",
    "color": "#B724BF",
    "universityName": "The University of Queensland, Brisbane",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 54096.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 81,
    "course": "Bachelor of Management and Entrepreneurship",
    "cardTitle": "nagement & Entrepreneurship",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/co-op-management-ms.webp",
    "color": "#22B482",
    "universityName": "Excelsia University College, Sydney",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 16400.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 82,
    "course": "Bachelor of Global Business in Hotel and Tourism Management",
    "cardTitle": "Global Business in Hotel & Tourism Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/dual-mba-phd.webp",
    "color": "#BF5D24",
    "universityName": "Southern Cross University, Sydney, Sydney",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 26000.00",
    "intake": "Mar,Jun,Oct"
  },
  {
    "id": 83,
    "course": "Bachelor of Accounting",
    "cardTitle": "Accounting",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/finance-business-administration-bs.webp",
    "color": "#2D22B4",
    "universityName": "Flinders University, Adelaide",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 39000.00",
    "intake": "Mar,Jul"
  },
  {
    "id": 84,
    "course": "Bachelor of Commerce",
    "cardTitle": "Commerce",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/biological-sciences-bs.webp",
    "color": "#46BF24",
    "universityName": "James Cook University, Brisbane, Brisbane",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 35824.00",
    "intake": "Feb,May,Sep"
  },
  {
    "id": 85,
    "course": "Bachelor of Digital Transformation",
    "cardTitle": "Digital Transformation",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/biological-sciences-ms.webp",
    "color": "#B4226D",
    "universityName": "Bond University, Gold Coast, Gold Coast",
    "duration": "2 years",
    "tuitionCostYearly": "AUD 75120.00",
    "intake": "Jan,May,Sep"
  },
  {
    "id": 86,
    "course": "Bachelor of Applied Finance",
    "cardTitle": "Applied Finance",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/finance-ms.webp",
    "color": "#24A0BF",
    "universityName": "Macquarie University, Sydney",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 46900.00",
    "intake": "Feb,Jul"
  },
  {
    "id": 87,
    "course": "Bachelor of Economics",
    "cardTitle": "Economics",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/human-right-economics-bs.webp",
    "color": "#B4A622",
    "universityName": "University of New South Wales, Sydney, Sydney",
    "duration": "3 years",
    "tuitionCostYearly": "AUD 56500.00",
    "intake": "Sep,May"
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
      ? "Master's Degree Programs in Australia"
      : activeTab === "bachelors"
        ? "Bachelor's Degree Programs in Australia"
        : activeTab === "phd"
          ? "PhD Programs in Australia"
          : "All Degree Programs in Australia";

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
              in Australia
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
          *STEM designation is indicative based on the programme subject. Confirm the exact classification and course or visa requirements with the Australian university.
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


