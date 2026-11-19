
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
  { id: "masters", label: "Master's" },
  { id: "bachelors", label: "Bachelor's" },
  { id: "phd", label: "PhD" },
];

/* =========================================
   USA DEGREE PROGRAMS
========================================= */

const courseCards = [
  // USA PROGRAMS
  {
    id: 1,
    course: "Law (JD) Juris Doctorate",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/masters-law-ms.webp",
    color: "#4351E0",
    universityName: "(INTO) Saint Louis University",
    duration: "3 years",
    tuitionCostYearly: "USD 51640.00",
    intake: "Fall (Aug)",
    cardTitle: "Law (JD) Juris Doctor",
  },
  {
    id: 2,
    course: "Master of Legal Studies (MLS)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/economics-masters.webp",
    color: "#7FE043",
    universityName: "Seattle University",
    duration: "1 year",
    tuitionCostYearly: "USD 43860.00",
    intake: "Fall(Aug)",
    cardTitle: "Legal Studies (MLS)",
  },
  {
    id: 3,
    course: "M.S. in Criminal Justice",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/criminology-arts-ms.webp",
    color: "#E043AC",
    universityName: "University of Louisville",
    duration: "2 years",
    tuitionCostYearly: "USD 15304.00",
    intake: "Fall (Aug)",
    cardTitle: "Criminal Justice",
  },
  {
    id: 4,
    course: "M.A. in Criminal Justice Sciences",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/human-right-social-justice-ms.webp",
    color: "#43DAE0",
    universityName: "Illinois State University",
    duration: "2 years",
    tuitionCostYearly: "USD 18470.00",
    intake: "Fall (Aug)",
    cardTitle: "Criminal Justice Sciences",
  },
  {
    id: 5,
    course: "Master of Administration of Justice",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/master-social-justice-ms.webp",
    color: "#E0B943",
    universityName: "Mississippi Christian University",
    duration: "2 years",
    tuitionCostYearly: "USD 13856.00",
    intake: "Fall (Aug)",
    cardTitle: "Administration of Justice",
  },
  {
    id: 6,
    course: "M.S. in Criminalistics",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/child-youth-care-bs.webp",
    color: "#8B43E0",
    universityName: "California State University, Los Angeles",
    duration: "2 years",
    tuitionCostYearly: "USD 20220.00",
    intake: "Fall (Aug)",
    cardTitle: "M.S. in Criminalistics",
  },
  {
    id: 7,
    course: "M.S. in Forensic Psychology",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/psychological-health-sciences.webp",
    color: "#43E05D",
    universityName: "Monroe University",
    duration: "2 years",
    tuitionCostYearly: "USD 13058.00",
    intake: "Fall (Sep),Spring (Apr)",
    cardTitle: "Forensic Psychology",
  },
  {
    id: 8,
    course: "M.S. in Clinical Psychology",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/clinical-psychology-phd.webp",
    color: "#E04357",
    universityName: "California Lutheran University",
    duration: "2 years",
    tuitionCostYearly: "USD 20072.00",
    intake: "Fall (Aug)",
    cardTitle: "Clinical Psychology",
  },
  {
    id: 9,
    course: "Master of Public Health (M.P.H.)",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/public-health-ms.webp",
    color: "#4385E0",
    universityName: "University of Illinois Springfield",
    duration: "1 year 6 months",
    tuitionCostYearly: "USD 22800.00",
    intake: "Fall (Aug)",
    cardTitle: "Public Health (M.P.H.)",
  },
  {
    id: 10,
    course: "M.S. in Exercise Physiology",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/experimental-psychology-thes-phd.webp",
    color: "#B3E043",
    universityName: "California Baptist University",
    duration: "2 years",
    tuitionCostYearly: "USD 16531.00",
    intake: "Fall (Sep),Summer (May)",
    cardTitle: "M.S. in Exercise Physiology",
  },
  {
    id: 11,
    course: "M.S. in Addiction Counseling",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/art-economics-bs.webp",
    color: "#E043E0",
    universityName: "Johnson & Wales University",
    duration: "1 year 6 months",
    tuitionCostYearly: "USD 32346.00",
    intake: "Fall(Aug)",
    cardTitle: "M.S. in Addiction Counseling",
  },
  {
    id: 12,
    course: "M.S. in Psychology",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/public-health.webp",
    color: "#43E0B2",
    universityName: "Pittsburg State University",
    duration: "2 years",
    tuitionCostYearly: "USD 20302.00",
    intake: "Fall (Aug)",
    cardTitle: "M.S. in Psychology",
  },
  {
    id: 13,
    course: "M.Ed. In Kinesiology",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/kinesiology-health.webp",
    color: "#E08443",
    universityName: "Auburn University at Montgomery",
    duration: "2 years",
    tuitionCostYearly: "USD 20601.00",
    intake: "Fall (Aug),Summer (Jun)",
    cardTitle: "M.Ed. In Kinesiology",
  },
  {
    id: 14,
    course: "MBA Pharmaceutical Management (Florham)",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/mba.webp",
    color: "#5643E0",
    universityName: "Fairleigh Dickinson University (USA)",
    duration: "2 years",
    tuitionCostYearly: "USD 25373.00",
    intake: "Fall (Aug)",
    cardTitle: "MBA Pharmaceutical Management (Florham)",
  },
  {
    id: 15,
    course: "M.S. in Medical Laboratory Science",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/pre-medicine-bs.webp",
    color: "#5EE043",
    universityName: "University of New Haven",
    duration: "2 years",
    tuitionCostYearly: "USD 21330.00",
    intake: "Fall (Aug)",
    cardTitle: "Medical Laboratory Science",
  },
  {
    id: 16,
    course: "M.S. in Medicine (M.S.M.) Physician Assistant",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/chemical-public-health-phd.webp",
    color: "#E0438C",
    universityName: "Mississippi Christian University",
    duration: "2 years 6 months",
    tuitionCostYearly: "USD 24000.00",
    intake: "Summer (May)",
    cardTitle: "Medicine (M.S.M.) Physician Assistant",
  },
  {
    id: 17,
    course: "Doctor of Occupational Therapy (OTD)",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/biological-sciences-bs.webp",
    color: "#43BAE0",
    universityName: "University of Michigan-Flint",
    duration: "3 years",
    tuitionCostYearly: "USD 57819.00",
    intake: "Fall (Aug)",
    cardTitle: "Doctor of Occupational Therapy (OTD)",
  },
  {
    id: 18,
    course: "M.S. in Engineering Science - Robotics",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/robotics-automation-ms.webp",
    color: "#E0D943",
    universityName: "University at Buffalo, SUNY",
    duration: "2 years",
    tuitionCostYearly: "USD 32300.00",
    intake: "Fall (Aug)",
    cardTitle: "Engineering Science - Robotics",
  },
  {
    id: 19,
    course: "M.S. in Aerospace Engineering",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/aerospace-engineerings-bs.webp",
    color: "#43E07E",
    universityName: "University of Central Florida",
    duration: "2 years",
    tuitionCostYearly: "USD 21603.00",
    intake: "Fall(Aug)",
    cardTitle: "Aerospace Engineering",
  },
  {
    id: 20,
    course: "M.S. in Civil Engineering",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/civil-engineering-phd.webp",
    color: "#E05043",
    universityName: "University of Dayton",
    duration: "2 years",
    tuitionCostYearly: "USD 18160.00",
    intake: "Fall (Aug),Summer (May)",
    cardTitle: "M.S. in Civil Engineering",
  },
  {
    id: 21,
    course: "M.S. in Engineering Management",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/automotive-engineering-ms.webp",
    color: "#4365E0",
    universityName: "University of Maryland Baltimore County",
    duration: "2 years",
    tuitionCostYearly: "USD 29010.00",
    intake: "Fall (Aug)",
    cardTitle: "Engineering Management",
  },
  {
    id: 22,
    course: "M.S. in Electrical and Computer Engineering - Circuits,Signals and Systems",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/electrical-engineering-phd.webp",
    color: "#93E043",
    universityName: "University of St. Thomas",
    duration: "2 years",
    tuitionCostYearly: "USD 16420.00",
    intake: "Fall (Sep),Summer (May)",
    cardTitle: "Electrical and Computer Engineering - Circuits,Signals and Systems",
  },
  {
    id: 23,
    course: "M.S. in Biomedical Engineering Thesis",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/biological-sciences-ms.webp",
    color: "#E043C0",
    universityName: "Duquesne University",
    duration: "2 years",
    tuitionCostYearly: "USD 29440.00",
    intake: "Fall (Aug)",
    cardTitle: "Biomedical Engineering Thesis",
  },
  {
    id: 24,
    course: "M.S. in Industrial and Systems Engineering",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/engineering-industrial-ms.webp",
    color: "#43E0D3",
    universityName: "University of Louisville",
    duration: "2 years",
    tuitionCostYearly: "USD 15304.00",
    intake: "Fall (Aug)",
    cardTitle: "Industrial and Systems Engineering",
  },
  {
    id: 25,
    course: "M.S.E. in Petroleum Engineering",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/mechanical-engineering-bs.webp",
    color: "#E0A543",
    universityName: "University of Tulsa",
    duration: "2 years",
    tuitionCostYearly: "USD 31680.00",
    intake: "Fall (Aug)",
    cardTitle: "E. in Petroleum Engineering",
  },
  {
    id: 26,
    course: "M.S.E. in Data Science",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/data-science-ms.webp",
    color: "#7743E0",
    universityName: "Johns Hopkins University",
    duration: "2 years",
    tuitionCostYearly: "USD 64720.00",
    intake: "Fall (Aug)",
    cardTitle: "E. in Data Science",
  },
  {
    id: 27,
    course: "M.S. in Artificial Intelligence and Machine Learning",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/computer-artificial-science-ms.webp",
    color: "#E0436B",
    universityName: "Drexel University",
    duration: "1 year 6 months",
    tuitionCostYearly: "USD 40827.00",
    intake: "Fall (Sep)",
    cardTitle: "Artificial Intelligence and Machine Learning",
  },
  {
    id: 28,
    course: "M.S. in Cyber Security and Privacy",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/cybersecurity-ms.webp",
    color: "#C7E043",
    universityName: "University of Central Florida",
    duration: "2 years",
    tuitionCostYearly: "USD 21603.00",
    intake: "Fall (Aug)",
    cardTitle: "Cyber Security and Privacy",
  },
  {
    id: 29,
    course: "M.S. in Analytics & Information Management",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/business-analytics-ms.webp",
    color: "#CC43E0",
    universityName: "Duquesne University",
    duration: "2 years",
    tuitionCostYearly: "USD 17790.00",
    intake: "Fall (Aug)",
    cardTitle: "Analytics & Information Management",
  },
  {
    id: 30,
    course: "M.S. in Data Science & Artificial Intelligence",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/data-analytics-ms.webp",
    color: "#43E09E",
    universityName: "University of North Carolina Wilmington",
    duration: "2 years",
    tuitionCostYearly: "USD 27269.00",
    intake: "Fall (Aug)",
    cardTitle: "Data Science & Artificial Intelligence",
  },
  {
    id: 31,
    course: "M.S. in Game Design",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/game-design-ms.webp",
    color: "#E07043",
    universityName: "Full Sail University",
    duration: "1 year",
    tuitionCostYearly: "USD 36000.00",
    intake: "Feb,Dec",
    cardTitle: "M.S. in Game Design",
  },
  {
    id: 32,
    course: "M.S. in Project Management (Boston, Massachusetts)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/project-management-ms.webp",
    color: "#4344E0",
    universityName: "Northeastern University",
    duration: "1 year 6 months",
    tuitionCostYearly: "USD 24192.00",
    intake: "Fall (Sep)",
    cardTitle: "M.S. in Project Management (Boston, Massachusetts)",
  },
  {
    id: 33,
    course: "M.S. in Finance",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/finance-ms.webp",
    color: "#72E043",
    universityName: "University at Buffalo, SUNY",
    duration: "1 year 6 months",
    tuitionCostYearly: "USD 32300.00",
    intake: "Fall (Aug)",
    cardTitle: "M.S. in Finance",
  },
  {
    id: 34,
    course: "M.S. in Digital Marketing and Media",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/elementary-education-bs.webp",
    color: "#9743E0",
    universityName: "Yeshiva University",
    duration: "1 year 6 months",
    tuitionCostYearly: "USD 26030.00",
    intake: "Fall (Aug)",
    cardTitle: "Digital Marketing and Media",
  },
  {
    id: 35,
    course: "M.S. in Hospitality and Tourism Management",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/hospitality-management-ms.webp",
    color: "#43E069",
    universityName: "University of Central Florida",
    duration: "2 years",
    tuitionCostYearly: "USD 21603.00",
    intake: "Fall (Aug)",
    cardTitle: "Hospitality and Tourism Management",
  },
  {
    id: 36,
    course: "M.S. in Accounting, Technology and Analytics (MSATA)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/master-accounting-ms.webp",
    color: "#E0434B",
    universityName: "University of Denver, Colorado",
    duration: "10 months",
    tuitionCostYearly: "USD 66720.00",
    intake: "Fall (Sep),Spring (Apr)",
    cardTitle: "Accounting, Technology and Analytics (MSATA)",
  },
  {
    id: 37,
    course: "M.A. in Education",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/education-change-ms.webp",
    color: "#4379E0",
    universityName: "University of Maryland Baltimore County",
    duration: "2 years",
    tuitionCostYearly: "USD 29010.00",
    intake: "Fall (Aug)",
    cardTitle: "M.A. in Education",
  },
  {
    id: 38,
    course: "M.A. in Music Education",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/film-media-studies.webp",
    color: "#A7E043",
    universityName: "University of St. Thomas",
    duration: "2 years",
    tuitionCostYearly: "USD 10956.00",
    intake: "Fall (Sep),Summer (May)",
    cardTitle: "M.A. in Music Education",
  },
  {
    id: 39,
    course: "M.A.T. in Early Childhood Education (Pre-K - 4)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/consecutive-education-bs.webp",
    color: "#E043D4",
    universityName: "Duquesne University",
    duration: "2 years",
    tuitionCostYearly: "USD 36317.00",
    intake: "Fall (Aug)",
    cardTitle: "T. in Early Childhood Education (Pre-K - 4)",
  },
  {
    id: 40,
    course: "M.A. in Career and Technical Education",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/career-technical-ms.webp",
    color: "#43E0BE",
    universityName: "California State University, San Bernardino",
    duration: "2 years",
    tuitionCostYearly: "USD 16417.00",
    intake: "Fall (Aug)",
    cardTitle: "Career and Technical Education",
  },
  {
    id: 41,
    course: "M.A. in Higher Education & Student Affairs",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/education-co-op-ms.webp",
    color: "#E09143",
    universityName: "University of Louisville",
    duration: "2 years",
    tuitionCostYearly: "USD 15304.00",
    intake: "Fall (Aug)",
    cardTitle: "Higher Education & Student Affairs",
  },
  {
    id: 42,
    course: "M.A. in Special Education",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/bachelor-education-bs.webp",
    color: "#6343E0",
    universityName: "California State University, Fresno",
    duration: "2 years",
    tuitionCostYearly: "USD 16405.00",
    intake: "Fall (Aug)",
    cardTitle: "Special Education",
  },
  {
    id: 43,
    course: "Ph.D. in Criminal Justice",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/human-right-social-justice-ms.webp",
    color: "#52E043",
    universityName: "University at Albany, SUNY",
    duration: "4 years",
    tuitionCostYearly: "USD 24200.00",
    intake: "Fall (Aug)",
    cardTitle: "Criminal Justice",
  },
  {
    id: 44,
    course: "Juris Doctor (J.D.)",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/phd-public-policy-ms.webp",
    color: "#E04380",
    universityName: "Duquesne University",
    duration: "3 years",
    tuitionCostYearly: "USD 58898.00",
    intake: "Fall (Aug)",
    cardTitle: "Juris Doctor (J.D.)",
  },
  {
    id: 45,
    course: "Ph.D. in Criminology and Criminal Justice",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/bachelor-criminology-bs.webp",
    color: "#43ADE0",
    universityName: "The University of Alabama, Tuscaloosa",
    duration: "4 years",
    tuitionCostYearly: "USD 33400.00",
    intake: "Fall (Aug)",
    cardTitle: "Criminology and Criminal Justice",
  },
  {
    id: 46,
    course: "Doctorate in Counseling Psychology (Psy.D.)",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/experimental-psychology-thes-phd.webp",
    color: "#DBE043",
    universityName: "University of St. Thomas",
    duration: "4 years",
    tuitionCostYearly: "USD 16420.00",
    intake: "Fall (Aug),Summer (May)",
    cardTitle: "Counseling Psychology (Psy.D.)",
  },
  {
    id: 47,
    course: "Ph.D. in Health Education and Promotion",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/wellness-health-ms.webp",
    color: "#B843E0",
    universityName: "The University of Alabama, Tuscaloosa",
    duration: "4 years",
    tuitionCostYearly: "USD 33400.00",
    intake: "Fall(Aug)",
    cardTitle: "Health Education and Promotion",
  },
  {
    id: 48,
    course: "Ph.D. in Kinesiology",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/kinesiology-studies-health-phd.webp",
    color: "#43E08A",
    universityName: "Mississippi State University",
    duration: "4 years",
    tuitionCostYearly: "USD 28586.00",
    intake: "Fall (Aug),Summer (Jun)",
    cardTitle: "Kinesiology",
  },
  {
    id: 49,
    course: "Ph.D. in Communication Sciences and Disorders - Clinical Track in Audiology",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/nurse-clinic-health.webp",
    color: "#E05C43",
    universityName: "Wichita State University",
    duration: "4 years",
    tuitionCostYearly: "USD 19400.00",
    intake: "Fall(Aug)",
    cardTitle: "Communication Sciences and Disorders - Clinical Track in Audiology",
  },
  {
    id: 50,
    course: "PhD in Physical Therapy",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/physical-tharapy-phd.webp",
    color: "#4358E0",
    universityName: "University of Central Arkansas",
    duration: "2 years",
    tuitionCostYearly: "USD 14500.00",
    intake: "Fall (Aug)",
    cardTitle: "PhD in Physical Therapy",
  },
  {
    id: 51,
    course: "Ph.D. in Toxicology",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/toxicology-health.webp",
    color: "#86E043",
    universityName: "Colorado State University",
    duration: "3 years",
    tuitionCostYearly: "USD 33020.00",
    intake: "Fall (Aug)",
    cardTitle: "Ph.D. in Toxicology",
  },
  {
    id: 52,
    course: "PhD in Pharmaceutical Sciences",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/pharmaceutical-health.webp",
    color: "#E043B4",
    universityName: "University of Cincinnati",
    duration: "5 years",
    tuitionCostYearly: "USD 28144.00",
    intake: "Fall (Aug)",
    cardTitle: "Pharmaceutical Sciences",
  },
  {
    id: 53,
    course: "Ph.D. in Engineering Science (Cooperative PhD)",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/engineering-coperative-phd.webp",
    color: "#43E0DF",
    universityName: "Southern Illinois University Edwardsville",
    duration: "4 years",
    tuitionCostYearly: "USD 18916.00",
    intake: "Fall (Aug)",
    cardTitle: "Engineering Science (Cooperative PhD)",
  },
  {
    id: 54,
    course: "PhD in Interdisciplinary Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/interdisciplinary-engineering-phd.webp",
    color: "#E0B143",
    universityName: "Kennesaw State University",
    duration: "4 years",
    tuitionCostYearly: "USD 21788.00",
    intake: "Fall(Aug)",
    cardTitle: "Interdisciplinary Engineering",
  },
  {
    id: 55,
    course: "Ph.D. in Engineering and Applied Science",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/applied-computing-ms.webp",
    color: "#8343E0",
    universityName: "University of New Haven",
    duration: "4 years",
    tuitionCostYearly: "USD 20448.00",
    intake: "Fall (Aug)",
    cardTitle: "Engineering and Applied Science",
  },
  {
    id: 56,
    course: "Ph.D. in Mechanical Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/mechanical-engineering-bs.webp",
    color: "#43E055",
    universityName: "Lawrence Technological University",
    duration: "4 years",
    tuitionCostYearly: "USD 20460.00",
    intake: "Fall (Aug),Summer (May)",
    cardTitle: "Mechanical Engineering",
  },
  {
    id: 57,
    course: "Ph.D. in Biomedical Engineering and Biotechnology",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/biomedical-engineering-bs.webp",
    color: "#E0435F",
    universityName: "University of Massachusetts Dartmouth",
    duration: "3 years",
    tuitionCostYearly: "USD 29874.00",
    intake: "Fall (Sep)",
    cardTitle: "Biomedical Engineering and Biotechnology",
  },
  {
    id: 58,
    course: "Ph.D. in Engineering - Civil Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/bachelor-civil-engineering.webp",
    color: "#438DE0",
    universityName: "Tennessee Tech University",
    duration: "4 years",
    tuitionCostYearly: "USD 27786.00",
    intake: "Fall (Aug),Summer (May)",
    cardTitle: "Engineering - Civil Engineering",
  },
  {
    id: 59,
    course: "Ph.D. in Aerospace Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/aerospace-engineerings-bs.webp",
    color: "#BBE043",
    universityName: "Wichita State University",
    duration: "4 years",
    tuitionCostYearly: "USD 19400.00",
    intake: "Fall (Aug)",
    cardTitle: "Aerospace Engineering",
  },
  {
    id: 60,
    course: "Ph.D. in Engineering - Biomedical Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/biomedical-engineering-phd.webp",
    color: "#D843E0",
    universityName: "University of Wisconsin-Milwaukee",
    duration: "4 years",
    tuitionCostYearly: "USD 26638.00",
    intake: "Fall (Aug)",
    cardTitle: "Engineering - Biomedical Engineering",
  },
  {
    id: 61,
    course: "Ph.D. in Computer Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/computer-engineering-phd.webp",
    color: "#43E0AA",
    universityName: "Colorado State University",
    duration: "3 years",
    tuitionCostYearly: "USD 33020.00",
    intake: "Fall (Aug)",
    cardTitle: "Ph.D. in Computer Engineering",
  },
  {
    id: 62,
    course: "Ph.D. in Information Science",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/information-computer-science-phd.webp",
    color: "#E07D43",
    universityName: "University at Albany, SUNY",
    duration: "4 years",
    tuitionCostYearly: "USD 24200.00",
    intake: "Fall (Aug)",
    cardTitle: "Ph.D. in Information Science",
  },
  {
    id: 63,
    course: "Ph.D. in Computer Science",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/computer-science-ms.webp",
    color: "#4F43E0",
    universityName: "Colorado State University",
    duration: "3 years",
    tuitionCostYearly: "USD 33020.00",
    intake: "Fall (Aug)",
    cardTitle: "Ph.D. in Computer Science",
  },
  {
    id: 64,
    course: "Ph.D. in Cyber Studies",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/cyber-studies-phd.webp",
    color: "#66E043",
    universityName: "University of Tulsa",
    duration: "4 years",
    tuitionCostYearly: "USD 31680.00",
    intake: "Fall (Aug)",
    cardTitle: "Cyber Studies",
  },
  {
    id: 65,
    course: "Ph.D. in Computer Science and Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/computer-science-engineering-phd.webp",
    color: "#E04394",
    universityName: "University of North Texas",
    duration: "4 years",
    tuitionCostYearly: "USD 19186.00",
    intake: "Fall(Aug)",
    cardTitle: "Computer Science and Engineering",
  },
  {
    id: 66,
    course: "Ph.D. in Data Science & Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/data-science-ai-phd.webp",
    color: "#43C1E0",
    universityName: "University of South Dakota",
    duration: "4 years",
    tuitionCostYearly: "USD 13127.00",
    intake: "Fall (Aug)",
    cardTitle: "Data Science & Engineering",
  },
  {
    id: 67,
    course: "Ph.D. in Electrical Engineering and Computer Science - Computer Science track",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/computer-electrical-engineering-phd.webp",
    color: "#E0D243",
    universityName: "Wichita State University",
    duration: "4 years",
    tuitionCostYearly: "USD 19400.00",
    intake: "Fall (Aug)",
    cardTitle: "Electrical Engineering and Computer Science - Computer Science track",
  },
  {
    id: 68,
    course: "PhD in Data Science and Analytics",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/computer-science-analytics-phd.webp",
    color: "#A443E0",
    universityName: "Kennesaw State University",
    duration: "4 years",
    tuitionCostYearly: "USD 21788.00",
    intake: "Fall(Aug)",
    cardTitle: "Data Science and Analytics",
  },
  {
    id: 69,
    course: "PhD in Business Administration",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/new-business-administration-phd.webp",
    color: "#43E076",
    universityName: "University of Cincinnati",
    duration: "5 years",
    tuitionCostYearly: "USD 28144.00",
    intake: "Fall (Aug)",
    cardTitle: "Business Administration",
  },
  {
    id: 70,
    course: "Juris Doctor (J.D.) / Master of Business Administration (M.B.A.) (Dual Degree)",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/dual-mba-phd.webp",
    color: "#E04843",
    universityName: "Duquesne University",
    duration: "4 years",
    tuitionCostYearly: "USD 58898.00",
    intake: "Fall (Aug)",
    cardTitle: "Juris Doctor (J.D.) / Master of Business Administration (M.B.A.) (Dual Degree)",
  },
  {
    id: 71,
    course: "Ph.D. in Accounting",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/master-accounting-phd.webp",
    color: "#436CE0",
    universityName: "The University of Alabama, Tuscaloosa",
    duration: "4 years",
    tuitionCostYearly: "USD 33400.00",
    intake: "Fall (Aug),Summer (May)",
    cardTitle: "Ph.D. in Accounting",
  },
  {
    id: 72,
    course: "Ph.D. in Business Administration - Marketing",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/marketing-business-administration-phd.webp",
    color: "#9AE043",
    universityName: "Mississippi State University",
    duration: "4 years",
    tuitionCostYearly: "USD 28586.00",
    intake: "Fall (Aug)",
    cardTitle: "Business Administration - Marketing",
  },
  {
    id: 73,
    course: "Ph.D. in Business Administration - Finance",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/business-administration-finance-phd.webp",
    color: "#43E0CB",
    universityName: "The University of Memphis",
    duration: "4 years",
    tuitionCostYearly: "USD 20052.00",
    intake: "Fall (Aug)",
    cardTitle: "Business Administration - Finance",
  },
  {
    id: 74,
    course: "Ph.D. in Economics",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/economics-bs.webp",
    color: "#E09D43",
    universityName: "Middle Tennessee State University",
    duration: "5 years",
    tuitionCostYearly: "USD 28500.00",
    intake: "Fall (Aug)",
    cardTitle: "Ph.D. in Economics",
  },
  {
    id: 75,
    course: "Doctor of Business Administration (DBA) - Business Intelligence & Data Analytics (BIDA)",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/dba-business-analytics-phd.webp",
    color: "#6F43E0",
    universityName: "Westcliff University",
    duration: "3 years",
    tuitionCostYearly: "USD 16560.00",
    intake: "Fall 1 (Aug),Fall 2 (Oct),Spring 2 (Mar),Summer 1 (May),Summer 2 (Jun)",
    cardTitle: "Doctor of Business Administration (DBA) - Business Intelligence & Data Analytics (BIDA)",
  },
  {
    id: 76,
    course: "EdD in Educational Leadership and Learning",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/educational-leadership-learning-phd.webp",
    color: "#45E043",
    universityName: "University of St. Thomas",
    duration: "4 years",
    tuitionCostYearly: "USD 16420.00",
    intake: "Summer (May)",
    cardTitle: "Educational Leadership and Learning",
  },
  {
    id: 77,
    course: "Ph.D. in Counselor Education and Supervision",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/counselor-education-supervision.webp",
    color: "#E04373",
    universityName: "Duquesne University",
    duration: "2 years 6 months",
    tuitionCostYearly: "USD 37896.00",
    intake: "Fall (Aug)",
    cardTitle: "Counselor Education and Supervision",
  },
  {
    id: 78,
    course: "Ed.D. in Higher and Adult Education",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/ed-higher-adult-education-phd.webp",
    color: "#43A1E0",
    universityName: "The University of Memphis",
    duration: "4 years",
    tuitionCostYearly: "USD 20052.00",
    intake: "Fall (Aug)",
    cardTitle: "Higher and Adult Education",
  },
  {
    id: 79,
    course: "Ed.D. in Teacher Leadership",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/ed-teacher-leadership-phd.webp",
    color: "#CFE043",
    universityName: "Maryville University",
    duration: "3 years",
    tuitionCostYearly: "USD 14625.00",
    intake: "Fall (Aug)",
    cardTitle: "Ed.D. in Teacher Leadership",
  },
  {
    id: 80,
    course: "Ed.D. in Curriculum & Instruction",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/economics-masters.webp",
    color: "#C443E0",
    universityName: "University of South Dakota",
    duration: "4 years",
    tuitionCostYearly: "USD 13127.00",
    intake: "Fall (Aug)",
    cardTitle: "Curriculum & Instruction",
  },
  {
    id: 81,
    course: "Ph.D. in Adult, Professional, and Community Education",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/adult-profesional-community-phd.webp",
    color: "#43E096",
    universityName: "Texas State University",
    duration: "4 years",
    tuitionCostYearly: "USD 16380.00",
    intake: "Fall (Aug)",
    cardTitle: "Ph.D. in Adult, Professional, and Community Education",
  },
  {
    id: 82,
    course: "B.A. in Criminology",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/ba-criminology-bs.webp",
    color: "#434CE0",
    universityName: "University of South Florida",
    duration: "4 years",
    tuitionCostYearly: "USD 20287.00",
    intake: "Fall (Aug),Summer (May)",
    cardTitle: "B.A. in Criminology",
  },
  {
    id: 83,
    course: "B.S. in Law & Society",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/bs-law-society-bs.webp",
    color: "#7AE043",
    universityName: "Thomas Jefferson University",
    duration: "4 years",
    tuitionCostYearly: "USD 47355.00",
    intake: "Fall (Aug)",
    cardTitle: "B.S. in Law & Society",
  },
  {
    id: 84,
    course: "B.A. in Justice and Peace Studies",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/justice-peace-studies-bs.webp",
    color: "#E043A8",
    universityName: "University of St. Thomas",
    duration: "4 years",
    tuitionCostYearly: "USD 54800.00",
    intake: "Fall (Sep),Spring (Feb)",
    cardTitle: "B.A. in Justice and Peace Studies",
  },
  {
    id: 85,
    course: "B.A.B.A. in Business and Law",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/art-in-law-society-bs.webp",
    color: "#43D5E0",
    universityName: "Seattle University",
    duration: "6 years",
    tuitionCostYearly: "USD 57825.00",
    intake: "Fall (Sep)",
    cardTitle: "B.A. Business and Law",
  },
  {
    id: 86,
    course: "B.S. in Criminal Justice",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/bs-criminal-justice-bs.webp",
    color: "#E0BE43",
    universityName: "University of Louisville",
    duration: "4 years",
    tuitionCostYearly: "USD 29736.00",
    intake: "Fall (Aug)",
    cardTitle: "B.S. in Criminal Justice",
  },
  {
    id: 87,
    course: "B.A. or B.S. in Legal Studies",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/ba-legal-studies-economics-bs.webp",
    color: "#9043E0",
    universityName: "Ball State University",
    duration: "4 years",
    tuitionCostYearly: "USD 30838.00",
    intake: "Fall (Aug)",
    cardTitle: "B.A. or B.S. or Legal Studies",
  },
  {
    id: 88,
    course: "B.S. in Nursing",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/nurse-clinic-health.webp",
    color: "#43E062",
    universityName: "McMurry University",
    duration: "4 years",
    tuitionCostYearly: "USD 33124.00",
    intake: "Fall (Aug)",
    cardTitle: "B.S. in Nursing",
  },
  {
    id: 89,
    course: "B.A. in Public Health",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/biological-sciences-bs.webp",
    color: "#E04353",
    universityName: "Charleston Southern University",
    duration: "4 years",
    tuitionCostYearly: "USD 34270.00",
    intake: "Fall (Aug)",
    cardTitle: "B.A. in Public Health",
  },
  {
    id: 90,
    course: "B.A. in Psychology",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/ba-psychology-bs.webp",
    color: "#4380E0",
    universityName: "Midway University",
    duration: "4 years",
    tuitionCostYearly: "USD 28500.00",
    intake: "Fall (Aug)",
    cardTitle: "B.A. Psychology",
  },
  {
    id: 91,
    course: "B.S. in Health Informatics and Information Management",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/health-information-manegement-bs.webp",
    color: "#AEE043",
    universityName: "Dakota State University",
    duration: "4 years",
    tuitionCostYearly: "USD 12500.00",
    intake: "Fall (Aug)",
    cardTitle: "B.S. Health Informatics and Information Management",
  },
  {
    id: 92,
    course: "B.S. in Medical Laboratory Science",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/pre-medicine-bs.webp",
    color: "#E043DC",
    universityName: "State University of New York at Fredonia",
    duration: "4 years",
    tuitionCostYearly: "USD 19770.00",
    intake: "Fall(Aug),Summer(May)",
    cardTitle: "Medical Laboratory Science",
  },
  {
    id: 93,
    course: "B.S. in Dietetics and Applied Nutrition",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/nutrition-dietetics-bs.webp",
    color: "#43E0B7",
    universityName: "Johnson & Wales University",
    duration: "4 years",
    tuitionCostYearly: "USD 43872.00",
    intake: "Fall(Aug)",
    cardTitle: "Dietetics and Applied Nutrition",
  },
  {
    id: 94,
    course: "B.S. in Mechanical Engineering & Mechanics (4 Year, 1 Co-op)",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/engineering-bs.webp",
    color: "#E08943",
    universityName: "Drexel University",
    duration: "4 years",
    tuitionCostYearly: "USD 62462.00",
    intake: "Fall (Sep),Spring (Mar)",
    cardTitle: "Mechanical Engineering & Mechanics (4 Year, 1 Co-op)",
  },
  {
    id: 95,
    course: "B.S. in Computer Engineering",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/computer-engineering-ms.webp",
    color: "#59E043",
    universityName: "University of South Florida",
    duration: "4 years",
    tuitionCostYearly: "USD 20287.00",
    intake: "Fall (Aug),Summer (May)",
    cardTitle: "Computer Engineering",
  },
  {
    id: 96,
    course: "B.S. in Robotics and Autonomous Systems Engineering",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/electronic-engineering-phd.webp",
    color: "#E04387",
    universityName: "Virginia Commonwealth University",
    duration: "4 years",
    tuitionCostYearly: "USD 40109.00",
    intake: "Fall (Aug)",
    cardTitle: "Robotics and Autonomous Systems Engineering",
  },
  {
    id: 97,
    course: "B.S. in Biomedical Engineering",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/medicine-science-health.webp",
    color: "#43B5E0",
    universityName: "Miami University, Oxford",
    duration: "4 years",
    tuitionCostYearly: "USD 41421.00",
    intake: "Fall (Aug)",
    cardTitle: "Biomedical Engineering",
  },
  {
    id: 98,
    course: "B.S. in Industrial Engineering Technology",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#E0DE43",
    universityName: "Missouri Southern State University",
    duration: "4 years",
    tuitionCostYearly: "USD 16240.00",
    intake: "Fall (Aug)",
    cardTitle: "Industrial Engineering Technology",
  },
  {
    id: 99,
    course: "B.S. in Aeronautics - Aerospace Management",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/philosophy-engineering-phd.webp",
    color: "#B043E0",
    universityName: "Charleston Southern University",
    duration: "4 years",
    tuitionCostYearly: "USD 34270.00",
    intake: "Fall (Aug)",
    cardTitle: "Aeronautics - Aerospace Management",
  },
  {
    id: 100,
    course: "B.S. in Computer Science",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/computer-science-bs.webp",
    color: "#43E082",
    universityName: "University at Buffalo, SUNY",
    duration: "4 years",
    tuitionCostYearly: "USD 35700.00",
    intake: "Fall (Aug)",
    cardTitle: "Computer Science",
  },
  {
    id: 101,
    course: "B.S. in Data Science (4 Year, 1 Co-op)",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/computer-science-mathematics-bs.webp",
    color: "#4360E0",
    universityName: "Drexel University",
    duration: "4 years",
    tuitionCostYearly: "USD 62462.00",
    intake: "Fall (Sep),Spring (Mar)",
    cardTitle: "Data Science (4 Year, 1 Co-op)",
  },
  {
    id: 102,
    course: "B.S. in Biological Data Science- International Direct",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/anatomy-lab.webp",
    color: "#E043BC",
    universityName: "Oregon State University",
    duration: "4 years",
    tuitionCostYearly: "USD 39150.00",
    intake: "Fall (Sep),Spring (Mar),Summer (Jun)",
    cardTitle: "Biological Data Science- International Direct",
  },
  {
    id: 103,
    course: "B.S. in Computer Science - Software Development",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/computer-science-phd.webp",
    color: "#43E0D7",
    universityName: "Tiffin University",
    duration: "4 years",
    tuitionCostYearly: "USD 35700.00",
    intake: "Fall (Aug)",
    cardTitle: "Computer Science - Software Development",
  },
  {
    id: 104,
    course: "B.S. in Information technology and Cybersecurity",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/disaster-national-security-ms.webp",
    color: "#E0A943",
    universityName: "Wright State University",
    duration: "4 years",
    tuitionCostYearly: "USD 22928.00",
    intake: "Fall (Aug),Summer (May)",
    cardTitle: "Information technology and Cybersecurity",
  },
  {
    id: 105,
    course: "B.S. in Robotics and Artificial Intelligence",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/Computer-Science.webp",
    color: "#7C43E0",
    universityName: "Saint Leo University",
    duration: "4 years",
    tuitionCostYearly: "USD 27880.00",
    intake: "Fall (Aug)",
    cardTitle: "Robotics and Artificial Intelligence",
  },
  {
    id: 106,
    course: "B.A. in Business Administration",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/business-administration-bs.webp",
    color: "#43E04E",
    universityName: "Arcadia University",
    duration: "4 years",
    tuitionCostYearly: "USD 49980.00",
    intake: "Fall (Aug)",
    cardTitle: "Business Administration",
  },
  {
    id: 107,
    course: "B.B.A. in Finance",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/finance-bs.webp",
    color: "#E04367",
    universityName: "University of North Alabama",
    duration: "4 years",
    tuitionCostYearly: "USD 25299.00",
    intake: "Fall (Aug)",
    cardTitle: "Finance",
  },
  {
    id: 108,
    course: "B.B.A. in Accounting",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/finance-business-administration-bs.webp",
    color: "#4395E0",
    universityName: "McMurry University",
    duration: "4 years",
    tuitionCostYearly: "USD 33124.00",
    intake: "Fall (Aug)",
    cardTitle: "Accounting",
  },
  {
    id: 109,
    course: "B.B.A. in Management",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/global-management-ms.webp",
    color: "#C2E043",
    universityName: "University of Redlands, Los Angeles",
    duration: "4 years",
    tuitionCostYearly: "USD 48336.00",
    intake: "Fall (Aug)",
    cardTitle: "Management",
  },
  {
    id: 110,
    course: "B.S.B.A. in Business Analytics (5 Year, 3 Co-op)",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/business-administration-supply-bs.webp",
    color: "#D143E0",
    universityName: "Drexel University",
    duration: "4 years",
    tuitionCostYearly: "USD 62462.00",
    intake: "Fall (Sep),Spring (Mar)",
    cardTitle: "Business Analytics (5 Year, 3 Co-op)",
  },
  {
    id: 111,
    course: "B.A. in Women's and Gender Studies",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/women-gender-studies-bs.webp",
    color: "#4743E0",
    universityName: "University of South Florida",
    duration: "4 years",
    tuitionCostYearly: "USD 20287.00",
    intake: "Fall (Aug),Summer (May)",
    cardTitle: "Women's and Gender Studies",
  },
  {
    id: 112,
    course: "B.A. in Organizational Leadership",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/leadership-civic-studies-bs.webp",
    color: "#6DE043",
    universityName: "Miami University, Oxford",
    duration: "4 years",
    tuitionCostYearly: "USD 41421.00",
    intake: "Fall (Aug)",
    cardTitle: "Organizational Leadership",
  },
  {
    id: 113,
    course: "B.S. in Child and Adolescent Studies",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/human-right-economics-bs.webp",
    color: "#E0439B",
    universityName: "California State University, Fullerton",
    duration: "4 years",
    tuitionCostYearly: "USD 18543.00",
    intake: "Fall (Aug)",
    cardTitle: "Child and Adolescent Studies",
  },
  {
    id: 114,
    course: "B.A. in Physics Education",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/electrical-engineering-bs-v2.webp",
    color: "#43C9E0",
    universityName: "University of Maryland Baltimore County",
    duration: "4 years",
    tuitionCostYearly: "USD 34604.00",
    intake: "Fall (Aug)",
    cardTitle: "Physics Education",
  },
  {
    id: 115,
    course: "B.A. in Secondary Education",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/leadership-perspectives-ms.webp",
    color: "#E0CA43",
    universityName: "University of St. Thomas",
    duration: "4 years",
    tuitionCostYearly: "USD 54800.00",
    intake: "Fall (Sep),Spring (Feb)",
    cardTitle: "Secondary Education",
  },
  {
    id: 116,
    course: "B.A. in Humanities for Teaching",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/film-media-production.webp",
    color: "#9C43E0",
    universityName: "Seattle University",
    duration: "4 years",
    tuitionCostYearly: "USD 57825.00",
    intake: "Fall (Sep)",
    cardTitle: "Humanities for Teaching",
  },
  {
    id: 117,
    course: "B.M. in Music Education",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/film-media-studies.webp",
    color: "#43E06E",
    universityName: "University of Louisville",
    duration: "4 years",
    tuitionCostYearly: "USD 29736.00",
    intake: "Fall (Aug)",
    cardTitle: "Music Education",
  },
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
      ? "Master's Degree Programs for Indian Students"
      : activeTab === "bachelors"
        ? "Bachelor's Degree Programs for Indian Students"
        : activeTab === "phd"
          ? "PhD Programs for Indian Students"
          : "Programs for Indian Students";

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
              in the United States
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
                className="!h-[420px]"
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
          *STEM designation and eligibility depend on the
          university, specific program, and applicable U.S.
          immigration requirements.
        </p>

      </div>
    </section>
  );
}

/* =========================================
   COURSE CARD COMPONENT
========================================= */

// Keep full course names in courseCards for detail pages; use concise titles on cards.
const cardCourseTitles = {
  3: "Nutrition and Dietetics (BSc)",
  4: "Pre-Medicine (BSc)",
  5: "Engineering and Applied Science (Co-op)",
  6: "Mechanical Engineering - Automotive (Co-op)",
  7: "Biomedical Engineering (BASc)",
  8: "Aerospace Engineering (BEng, Co-op)",
  9: "Electrical Engineering (BEng, Co-op)",
  11: "International Business (BCom, Co-op)",
  12: "Business Analytics and Supply Chain Management (BBA)",
  14: "Business Administration (Co-op)",
  15: "Business Administration - Finance (BBA)",
  16: "Computer Science (Honours, Co-op)",
  17: "Computer Science and Mathematics (BSc)",
  19: "Social Justice and Peace Studies",
  21: "BA and LLB - Laurier-Sussex Law Program",
  22: "Criminology (Honours, Co-op)",
  23: "Criminology, Gender and Women's Studies",
  24: "Women's Studies and Gender Studies (BA)",
  30: "Leadership and Civic Studies (BA)",
};

function CourseCard({ item }) {
  return (
    <article
      className="group relative flex h-full min-h-[355px] flex-col overflow-hidden rounded-[20px] border border-[#DCE5EC] bg-white shadow-[0_8px_24px_rgba(6,59,114,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--card-color)] hover:shadow-[0_15px_32px_rgba(6,59,114,0.13)]"
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
          {item.cardTitle ?? cardCourseTitles[item.id] ?? item.course}
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
          className="relative z-10 mt-auto flex min-h-[40px] w-full items-center justify-between gap-3 rounded-[10px] border border-[#E8EDF4] bg-[#F4F7FA] px-3.5 py-2.5 text-left text-[12px] font-bold text-[#0C337B] transition-all duration-300 hover:border-[var(--card-color)] hover:bg-[var(--card-color)] hover:text-white group-hover:border-[var(--card-color)] group-hover:bg-[var(--card-color)] group-hover:text-white"
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



