
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
    "course": "MSc in Artificial Intelligence",
    "cardTitle": "Artificial Intelligence",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/data-science-ai-phd.webp",
    "color": "#2A9D4B",
    "universityName": "Munster Technological University",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 15000.00",
    "intake": "Sep"
  },
  {
    "id": 2,
    "course": "MSc in Computing in Big Data Analytics and Artificial Intelligence",
    "cardTitle": "Computing in Big Data Analytics and Artificial…",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/applied-computing-ms.webp",
    "color": "#6D2A9D",
    "universityName": "Atlantic Technological University : Letterkenny",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Sep"
  },
  {
    "id": 3,
    "course": "MSc in Computer Science (Enterprise Software Systems)",
    "cardTitle": "Computer Science (Enterprise Software Systems)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-artificial-science-ms.webp",
    "color": "#9D8F2A",
    "universityName": "South East Technological University (SETU): Waterford",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 15000.00",
    "intake": "Sep"
  },
  {
    "id": 4,
    "course": "MSc Business Analytics & AI",
    "cardTitle": "Business Analytics & AI",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-analytics-ms.webp",
    "color": "#2A8A9D",
    "universityName": "University College Dublin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 25420.00",
    "intake": "Sep"
  },
  {
    "id": 5,
    "course": "MSc in Computing in Human Centered Artificial Intelligence",
    "cardTitle": "Computing in Human Centered Artificial Intelligence",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-ms.webp",
    "color": "#9D2A68",
    "universityName": "Technological University Dublin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14500.00",
    "intake": "Sep"
  },
  {
    "id": 6,
    "course": "MSc Artificial Intelligence & Machine Learning",
    "cardTitle": "Artificial Intelligence & Machine Learning",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/educational-leadership-learning-phd.webp",
    "color": "#479D2A",
    "universityName": "University of Limerick",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 20800.00",
    "intake": "Sep"
  },
  {
    "id": 7,
    "course": "MSc Technologies and Analytics in Precision Medicine",
    "cardTitle": "Technologies and Analytics in Precision Medicine",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/medicine-science-health.webp",
    "color": "#2F2A9D",
    "universityName": "RCSI University of Medicine and Health Sciences",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 25000.00",
    "intake": "Sep"
  },
  {
    "id": 8,
    "course": "BSc in Information Technology and Cybersecurity",
    "cardTitle": "Information Technology and Cybersecurity",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/health-information-manegement-bs.webp",
    "color": "#9D502A",
    "universityName": "Munster Technological University",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 9,
    "course": "BSc (Hons) in Computer Networks and Cyber Security",
    "cardTitle": "(Hons) in Computer Networks and Cyber Security",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-bs.webp",
    "color": "#2A9D72",
    "universityName": "Atlantic Technological University : Sligo",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 10,
    "course": "BSc (Hons) in Computing and Artificial Intelligence",
    "cardTitle": "(Hons) in Computing and Artificial Intelligence",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-mathematics-bs.webp",
    "color": "#942A9D",
    "universityName": "Atlantic Technological University : Letterkenny",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 11,
    "course": "BSc (Hons) in Computing in Software Development",
    "cardTitle": "(Hons) in Computing in Software Development",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/Computer-Science.webp",
    "color": "#859D2A",
    "universityName": "Atlantic Technological University : Galway-Mayo",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 12,
    "course": "BSc (Hons) in Computer Science (Cloud & Networks)",
    "cardTitle": "(Hons) in Computer Science (Cloud & Networks)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-analytics-phd.webp",
    "color": "#2A639D",
    "universityName": "South East Technological University (SETU): Waterford",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 14500.00",
    "intake": "Sep"
  },
  {
    "id": 13,
    "course": "BSc (Hons) in Cybercrime and IT Security",
    "cardTitle": "(Hons) in Cybercrime and IT Security",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/cyber-studies-phd.webp",
    "color": "#9D2A42",
    "universityName": "South East Technological University (SETU) : Carlow",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 14500.00",
    "intake": "Sep"
  },
  {
    "id": 14,
    "course": "BSc Computer Science with Data Science & Artificial Intelligence",
    "cardTitle": "Computer Science with Data Science & Artificial…",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-engineering-phd.webp",
    "color": "#2A9D34",
    "universityName": "University College Dublin",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 30095.00",
    "intake": "Sep"
  },
  {
    "id": 15,
    "course": "BSc Hons Computer Science (ILEP: 0051/0021)",
    "cardTitle": "Hons Computer Science",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-ms.webp",
    "color": "#552A9D",
    "universityName": "University College Cork",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 28314.00",
    "intake": "Sep"
  },
  {
    "id": 16,
    "course": "BSc (Hons) in Computing with Machine Learning & Artificial Intelligence",
    "cardTitle": "(Hons) in Computing with Machine Learning…",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-electrical-engineering-phd.webp",
    "color": "#9D772A",
    "universityName": "Technological University Dublin",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 17,
    "course": "BA (Hons) in Public Relations & Media",
    "cardTitle": "(Hons) in Public Relations & Media",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/film-media-production.webp",
    "color": "#2A9D99",
    "universityName": "South East Technological University (SETU) : Carlow",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 18,
    "course": "BA (Hons) in Hospitality Management",
    "cardTitle": "(Hons) in Hospitality Management",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/hospitality-management-ms.webp",
    "color": "#9D2A80",
    "universityName": "South East Technological University (SETU): Waterford",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 19,
    "course": "BA in Tourism & Hospitality Operations",
    "cardTitle": "Tourism & Hospitality Operations",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/concentration-health-hospitality-ms.webp",
    "color": "#5E9D2A",
    "universityName": "Atlantic Technological University : Letterkenny",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 20,
    "course": "BSc (Hons) Economics & Finance",
    "cardTitle": "(Hons) Economics & Finance",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bach-business-administration-bs.webp",
    "color": "#2A3D9D",
    "universityName": "University College Dublin",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 23.00",
    "intake": "Sep"
  },
  {
    "id": 21,
    "course": "Bachelor of Commerce",
    "cardTitle": "chelor of Commerce",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/business-administration-bs.webp",
    "color": "#9D392A",
    "universityName": "University of Galway, Ireland",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 19250.00",
    "intake": "Sep"
  },
  {
    "id": 22,
    "course": "BSc (Hons) International Business with Languages",
    "cardTitle": "(Hons) International Business with Languages",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/international-business-administration-bs.webp",
    "color": "#2A9D5A",
    "universityName": "University College Cork",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 21700.00",
    "intake": "Sep"
  },
  {
    "id": 23,
    "course": "MSc in International Business",
    "cardTitle": "International Business",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/mba-international-business-ms.webp",
    "color": "#7C2A9D",
    "universityName": "Munster Technological University",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 24,
    "course": "MSc in Human Resource Management and Employee Relations",
    "cardTitle": "Human Resource Management and Employee Relations",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/human-resource-ms.webp",
    "color": "#9D9D2A",
    "universityName": "Atlantic Technological University : Galway-Mayo",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Sep"
  },
  {
    "id": 25,
    "course": "Master of Business (Finance and Business Analytics)",
    "cardTitle": "(Finance and Business Analytics)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/dba-business-analytics-phd.webp",
    "color": "#2A7B9D",
    "universityName": "South East Technological University (SETU): Waterford",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Sep"
  },
  {
    "id": 26,
    "course": "MSc Digital Marketing and Analytics",
    "cardTitle": "Digital Marketing and Analytics",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/data-analytics-ms.webp",
    "color": "#9D2A59",
    "universityName": "South East Technological University (SETU) : Carlow",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Sep"
  },
  {
    "id": 27,
    "course": "MSc in Finance",
    "cardTitle": "Finance",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/finance-ms.webp",
    "color": "#389D2A",
    "universityName": "University College Dublin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 28140.00",
    "intake": "Sep"
  },
  {
    "id": 28,
    "course": "MSc in Logistics and Supply Chain Management",
    "cardTitle": "Logistics and Supply Chain Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/business-administration-supply-bs.webp",
    "color": "#3D2A9D",
    "universityName": "Technological University Dublin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14500.00",
    "intake": "Sep"
  },
  {
    "id": 29,
    "course": "Professional Master of Education (Mathematics)",
    "cardTitle": "(Mathematics)",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/education-change-ms.webp",
    "color": "#9D5F2A",
    "universityName": "University of Limerick",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 10500.00",
    "intake": "Sep"
  },
  {
    "id": 30,
    "course": "MA Gender, Sexuality & Culture",
    "cardTitle": "MA Gender, Sexuality & Culture",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/women-gender-studies-bs.webp",
    "color": "#2A9D81",
    "universityName": "University College Dublin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 22600.00",
    "intake": "Sep"
  },
  {
    "id": 31,
    "course": "PME Education (Professional Master of Education)",
    "cardTitle": "PME Education (Professional Master of Education)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/education-co-op-ms.webp",
    "color": "#9D2A98",
    "universityName": "University College Cork",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 18500.00",
    "intake": "Sep"
  },
  {
    "id": 32,
    "course": "MSc Childhood Speech, Language & Communication Needs",
    "cardTitle": "Childhood Speech, Language & Communication Needs",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/psychological-health-sciences.webp",
    "color": "#769D2A",
    "universityName": "University of Galway, Ireland",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 17800.00",
    "intake": "Sep"
  },
  {
    "id": 33,
    "course": "M.Ed. In Adult and Community Education",
    "cardTitle": "M.Ed. In Adult and Community Education",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/ed-higher-adult-education-phd.webp",
    "color": "#2A559D",
    "universityName": "Maynooth University",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 16000.00",
    "intake": "Sep"
  },
  {
    "id": 34,
    "course": "BSc (Hons) in Sport & Exercise with Physical Education",
    "cardTitle": "(Hons) in Sport & Exercise with Physical Education",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bachelor-education-bs.webp",
    "color": "#9D2A33",
    "universityName": "Atlantic Technological University : Letterkenny",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 35,
    "course": "BA (Hons) in Early Childhood Care and Education",
    "cardTitle": "(Hons) in Early Childhood Care and Education",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/consecutive-education-bs.webp",
    "color": "#2A9D42",
    "universityName": "South East Technological University (SETU): Waterford",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 14500.00",
    "intake": "Sep"
  },
  {
    "id": 36,
    "course": "BED (Hons) Physical Education, Sports Studies & Arts",
    "cardTitle": "D (Hons) Physical Education, Sports Studies & Arts",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/elementary-education-bs.webp",
    "color": "#642A9D",
    "universityName": "University College Cork",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 24000.00",
    "intake": "Sep"
  },
  {
    "id": 37,
    "course": "BA Education (Computer Science and Mathematical Studies)",
    "cardTitle": "Education (Computer Science and Mathematical Studies)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-science-phd.webp",
    "color": "#9D862A",
    "universityName": "University of Galway, Ireland",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 20750.00",
    "intake": "Sep"
  },
  {
    "id": 38,
    "course": "Bachelor of Early Childhood Education",
    "cardTitle": "chelor of Early Childhood Education",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/counselor-education-supervision.webp",
    "color": "#2A939D",
    "universityName": "Dublin City University",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 16900.00",
    "intake": "Sep"
  },
  {
    "id": 39,
    "course": "B.ED Bachelor of Education-Primary Teaching",
    "cardTitle": "B.ED Bachelor of Education-Primary Teaching",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ed-teacher-leadership-phd.webp",
    "color": "#9D2A71",
    "universityName": "Maynooth University",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 16500.00",
    "intake": "Sep"
  },
  {
    "id": 40,
    "course": "Bachelor of Education in Graphics, Engineering and Technology",
    "cardTitle": "Graphics, Engineering and Technology",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-bs.webp",
    "color": "#509D2A",
    "universityName": "University of Limerick",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 22596.00",
    "intake": "Sep"
  },
  {
    "id": 41,
    "course": "PhD Engineering Science",
    "cardTitle": "Engineering Science",
    "category": "phd",
    "stem": true,
    "image": "/images/courses/canada/information-computer-science-phd.webp",
    "color": "#2A2E9D",
    "universityName": "University College Cork",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 15000.00",
    "intake": "Sep"
  },
  {
    "id": 42,
    "course": "BEng (Hons) in Mechanical Engineering",
    "cardTitle": "(Hons) in Mechanical Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/mechanical-engineering-bs.webp",
    "color": "#9D472A",
    "universityName": "Munster Technological University",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 43,
    "course": "B.Eng (Hons) in Electronic Engineering",
    "cardTitle": "(Hons) in Electronic Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/electronic-engineering-phd.webp",
    "color": "#2A9D69",
    "universityName": "Atlantic Technological University : Letterkenny",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 44,
    "course": "B.Eng (Hons) in Civil Engineering",
    "cardTitle": "(Hons) in Civil Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/bachelor-civil-engineering.webp",
    "color": "#8B2A9D",
    "universityName": "Atlantic Technological University : Galway-Mayo",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 45,
    "course": "BEng (Hons) in Robotics and Automation",
    "cardTitle": "(Hons) in Robotics and Automation",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/robotics-automation-ms.webp",
    "color": "#8E9D2A",
    "universityName": "Atlantic Technological University : Sligo",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 46,
    "course": "BE (Hons) Aerospace Engineering",
    "cardTitle": "(Hons) Aerospace Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-bs-v2.webp",
    "color": "#2A6C9D",
    "universityName": "South East Technological University (SETU) : Carlow",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 14500.00",
    "intake": "Sep"
  },
  {
    "id": 47,
    "course": "BE (Hons) Civil, Structural and Environmental Engineering",
    "cardTitle": "(Hons) Civil, Structural and Environmental Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/civil-engineering-phd.webp",
    "color": "#9D2A4B",
    "universityName": "University College Cork",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 27000.00",
    "intake": "Sep"
  },
  {
    "id": 48,
    "course": "BE Biomedical Engineering",
    "cardTitle": "Biomedical Engineering",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/biomedical-engineering-phd.webp",
    "color": "#2A9D2B",
    "universityName": "University of Galway, Ireland",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 27500.00",
    "intake": "Sep"
  },
  {
    "id": 49,
    "course": "BSc Computer Science & Software Engineering (CSS)",
    "cardTitle": "Computer Science & Software Engineering (CSS)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/computer-engineering-phd.webp",
    "color": "#4C2A9D",
    "universityName": "Maynooth University",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 18000.00",
    "intake": "Sep"
  },
  {
    "id": 50,
    "course": "MEng in Structural Engineering",
    "cardTitle": "Structural Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/automotive-engineering-ms.webp",
    "color": "#9D6E2A",
    "universityName": "Munster Technological University",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 51,
    "course": "M.Eng in Geotechnical Engineering with Structural Engineering",
    "cardTitle": "Geotechnical Engineering with Structural Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/engineering-industrial-ms.webp",
    "color": "#2A9D8F",
    "universityName": "Atlantic Technological University : Sligo",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Sep"
  },
  {
    "id": 52,
    "course": "MSc in Applied Artificial Intelligence",
    "cardTitle": "Applied Artificial Intelligence",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/biological-sciences-ms.webp",
    "color": "#9D2A89",
    "universityName": "South East Technological University (SETU) : Carlow",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 15000.00",
    "intake": "Sep"
  },
  {
    "id": 53,
    "course": "MSc in Construction Project Management",
    "cardTitle": "Construction Project Management",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/project-management-ms.webp",
    "color": "#679D2A",
    "universityName": "South East Technological University (SETU): Waterford",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Sep"
  },
  {
    "id": 54,
    "course": "MEngSc Robotics and Intelligent Manufacturing",
    "cardTitle": "Robotics and Intelligent Manufacturing",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/career-technical-ms.webp",
    "color": "#2A469D",
    "universityName": "University College Dublin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 25350.00",
    "intake": "Sep"
  },
  {
    "id": 55,
    "course": "MSc Biomedical Engineering",
    "cardTitle": "Biomedical Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/engineering-ms.webp",
    "color": "#9D2F2A",
    "universityName": "University of Galway, Ireland",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 28500.00",
    "intake": "Sep"
  },
  {
    "id": 56,
    "course": "MEng in Mechanical & Manufacturing Engineering",
    "cardTitle": "Mechanical & Manufacturing Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/sustainable-design-engineering-ms.webp",
    "color": "#2A9D51",
    "universityName": "Dublin City University",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 25000.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 57,
    "course": "MSc Computer Science in Software Engineering",
    "cardTitle": "Computer Science in Software Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/data-science-ms.webp",
    "color": "#732A9D",
    "universityName": "Maynooth University",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 18000.00",
    "intake": "Sep"
  },
  {
    "id": 58,
    "course": "MSc in Civil Engineering",
    "cardTitle": "Civil Engineering",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/electrical-engineering-phd.webp",
    "color": "#9D942A",
    "universityName": "University of Limerick",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 20800.00",
    "intake": "Sep"
  },
  {
    "id": 59,
    "course": "MSc in Nursing",
    "cardTitle": "Nursing",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/public-health-ms.webp",
    "color": "#2A849D",
    "universityName": "Munster Technological University",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 60,
    "course": "MSc in Nutrition & Food Sensory Science",
    "cardTitle": "Nutrition & Food Sensory Science",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/nutrition-dietetics-bs.webp",
    "color": "#9D2A63",
    "universityName": "Atlantic Technological University : Galway-Mayo",
    "duration": "1 year 6 months",
    "tuitionCostYearly": "EUR 14000.00",
    "intake": "Sep"
  },
  {
    "id": 61,
    "course": "MSc in Biotherapeutics",
    "cardTitle": "Biotherapeutics",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/co-op-management-ms.webp",
    "color": "#419D2A",
    "universityName": "Dublin City University",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 23000.00",
    "intake": "Sep"
  },
  {
    "id": 62,
    "course": "MSc in Occupational Therapy (Professional Qualification)",
    "cardTitle": "Occupational Therapy (Professional Qualification)",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/criminology-arts-ms.webp",
    "color": "#342A9D",
    "universityName": "University of Limerick",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 26700.00",
    "intake": "Sep"
  },
  {
    "id": 63,
    "course": "BSc (Hons) in Pharmaceutical Biotechnology",
    "cardTitle": "(Hons) in Pharmaceutical Biotechnology",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/pre-medicine-bs.webp",
    "color": "#9D562A",
    "universityName": "Munster Technological University",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 64,
    "course": "BSc (Hons) in Athletic Therapy and Exercise Rehabilitation",
    "cardTitle": "(Hons) in Athletic Therapy and Exercise Rehabilitation",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/aerospace-engineerings-bs.webp",
    "color": "#2A9D78",
    "universityName": "Atlantic Technological University : Letterkenny",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 65,
    "course": "BSc (Hons) in Nursing/Midwifery International",
    "cardTitle": "(Hons) in Nursing/Midwifery International",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/chemical-public-health-phd.webp",
    "color": "#992A9D",
    "universityName": "Atlantic Technological University : Sligo",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 66,
    "course": "BSc (Hons) Radiography",
    "cardTitle": "(Hons) Radiography",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/kinesiology-health.webp",
    "color": "#7F9D2A",
    "universityName": "University College Dublin",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 36250.00",
    "intake": "Sep"
  },
  {
    "id": 67,
    "course": "BSc (Hons) Veterinary Nursing",
    "cardTitle": "(Hons) Veterinary Nursing",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/kinesiology-studies-health-phd.webp",
    "color": "#2A5E9D",
    "universityName": "University College Dublin",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 30095.00",
    "intake": "Sep"
  },
  {
    "id": 68,
    "course": "Bachelor of Medicine (MB) of Surgery (BCh) and of Obstetrics (BAO)",
    "cardTitle": "chelor of Medicine (MB) of Surgery (BCh) and of…",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/pharmaceutical-health.webp",
    "color": "#9D2A3C",
    "universityName": "University of Galway, Ireland",
    "duration": "5 years",
    "tuitionCostYearly": "EUR 54660.00",
    "intake": "Sep"
  },
  {
    "id": 69,
    "course": "BSc Hons (Optometry)",
    "cardTitle": "Hons (Optometry)",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/nurse-clinic-health.webp",
    "color": "#2A9D39",
    "universityName": "Technological University Dublin",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 70,
    "course": "Bachelor of Science in Occupational Therapy",
    "cardTitle": "Occupational Therapy",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/biological-sciences-bs.webp",
    "color": "#5B2A9D",
    "universityName": "University of Limerick",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 26196.00",
    "intake": "Sep"
  },
  {
    "id": 71,
    "course": "LLM in Intellectual Property & Information Technology",
    "cardTitle": "Intellectual Property & Information Technology",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/cybersecurity-ms.webp",
    "color": "#9D7D2A",
    "universityName": "University College Dublin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 23055.00",
    "intake": "Sep,Jan"
  },
  {
    "id": 72,
    "course": "Law - LLM (International Human Rights Law and Public Policy)",
    "cardTitle": "Law - LLM (International Human Rights Law and Public…",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/masters-law-ms.webp",
    "color": "#2A9C9D",
    "universityName": "University College Cork",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 19700.00",
    "intake": "Sep"
  },
  {
    "id": 73,
    "course": "LLM Criminology, Criminal Justice and Human Rights",
    "cardTitle": "Criminology, Criminal Justice and Human Rights",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/human-right-social-justice-ms.webp",
    "color": "#9D2A7A",
    "universityName": "University of Galway, Ireland",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 20400.00",
    "intake": "Sep"
  },
  {
    "id": 74,
    "course": "European Master in Law, Data and Artificial Intelligence",
    "cardTitle": "European Master in Law, Data and Artificial…",
    "category": "masters",
    "stem": true,
    "image": "/images/courses/canada/art-in-law-society-bs.webp",
    "color": "#599D2A",
    "universityName": "Dublin City University",
    "duration": "2 years",
    "tuitionCostYearly": "EUR 20919.00",
    "intake": "Sep"
  },
  {
    "id": 75,
    "course": "MA Comparative Criminology and Criminal Justice",
    "cardTitle": "MA Comparative Criminology and Criminal Justice",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/ba-criminology-bs.webp",
    "color": "#2A379D",
    "universityName": "Maynooth University",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 18000.00",
    "intake": "Sep"
  },
  {
    "id": 76,
    "course": "MA in Criminology",
    "cardTitle": "MA in Criminology",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bachelor-criminology-bs.webp",
    "color": "#9D3E2A",
    "universityName": "Technological University Dublin",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 77,
    "course": "Law, International Commercial Law LLM",
    "cardTitle": "Law, International Commercial Law LLM",
    "category": "masters",
    "stem": false,
    "image": "/images/courses/canada/bs-law-society-bs.webp",
    "color": "#2A9D60",
    "universityName": "University of Limerick",
    "duration": "1 year",
    "tuitionCostYearly": "EUR 18600.00",
    "intake": "Sep"
  },
  {
    "id": 78,
    "course": "BA (Hons) Corporate Law",
    "cardTitle": "(Hons) Corporate Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/bachelor-hornours-criminology-bs.webp",
    "color": "#812A9D",
    "universityName": "Atlantic Technological University : Letterkenny",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 79,
    "course": "BSc (Hons) in Forensic Investigation & Analysis",
    "cardTitle": "(Hons) in Forensic Investigation & Analysis",
    "category": "bachelors",
    "stem": true,
    "image": "/images/courses/canada/bs-criminal-justice-bs.webp",
    "color": "#979D2A",
    "universityName": "Atlantic Technological University : Sligo",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 12000.00",
    "intake": "Sep"
  },
  {
    "id": 80,
    "course": "Bachelor of Business (Hons) Business with Law",
    "cardTitle": "Business with Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/finance-business-administration-bs.webp",
    "color": "#2A759D",
    "universityName": "South East Technological University (SETU) : Carlow",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 81,
    "course": "BA (Hons) in Criminal Justice Studies",
    "cardTitle": "(Hons) in Criminal Justice Studies",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ba-legal-studies-economics-bs.webp",
    "color": "#9D2A54",
    "universityName": "South East Technological University (SETU): Waterford",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 13500.00",
    "intake": "Sep"
  },
  {
    "id": 82,
    "course": "BSc (Hons) Social Justice",
    "cardTitle": "(Hons) Social Justice",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/master-social-justice-ms.webp",
    "color": "#329D2A",
    "universityName": "University College Dublin",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 23050.00",
    "intake": "Sep"
  },
  {
    "id": 83,
    "course": "BCL Hons Law Clinical",
    "cardTitle": "BCL Hons Law Clinical",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/justice-peace-studies-bs.webp",
    "color": "#432A9D",
    "universityName": "University College Cork",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 21700.00",
    "intake": "Sep"
  },
  {
    "id": 84,
    "course": "BA Government(Politics , Economics and Law)",
    "cardTitle": "Government(Politics , Economics and Law)",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/art-economics-bs.webp",
    "color": "#9D652A",
    "universityName": "University of Galway, Ireland",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 20750.00",
    "intake": "Sep"
  },
  {
    "id": 85,
    "course": "Bachelor of Arts Criminology",
    "cardTitle": "Criminology",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/ba-psychology-bs.webp",
    "color": "#2A9D86",
    "universityName": "Maynooth University",
    "duration": "3 years",
    "tuitionCostYearly": "EUR 17000.00",
    "intake": "Sep"
  },
  {
    "id": 86,
    "course": "Bachelor of Law in Common and Civil Law",
    "cardTitle": "Common and Civil Law",
    "category": "bachelors",
    "stem": false,
    "image": "/images/courses/canada/engineering-bs.webp",
    "color": "#9D2A92",
    "universityName": "University of Limerick",
    "duration": "4 years",
    "tuitionCostYearly": "EUR 17396.00",
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
      ? "Master's Degree Programs in Ireland"
      : activeTab === "bachelors"
        ? "Bachelor's Degree Programs in Ireland"
        : activeTab === "phd"
          ? "PhD Programs in Ireland"
          : "All Degree Programs in Ireland";

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
              in Ireland
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
          *STEM designation is indicative based on the programme subject. Confirm the exact classification and course or visa requirements with the Irish university.
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


