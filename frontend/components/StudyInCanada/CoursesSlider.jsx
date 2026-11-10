
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
  // UNDERGRADUATE DEGREE PROGRAMS
  {
    id: 1,
    course: "Bachelor of Arts in Psychology",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/economics-bs.webp",
    color: "#E04343",
    universityName: "Booth University College",
    duration: "4 years",
    tuitionCostYearly: "CAD 13,650.00",
    intake: "Sep, Jan",
  },
  {
    id: 2,
    course: "Bachelor of Science in Health Science",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/biological-sciences-bs.webp",
    color: "#9FE043",
    universityName: "Kwantlen Polytechnic University - KPU",
    duration: "4 years",
    tuitionCostYearly: "CAD 22,673.10",
    intake: "May, Sep",
  },
  {
    id: 3,
    course: "Bachelor of Science (BSC) - Nutrition and Dietetics (Optional Co-op)",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/nutrition-dietetics-bs.webp",
    color: "#E043CD",
    universityName: "Acadia University",
    duration: "4 years",
    tuitionCostYearly: "CAD 25,712.62",
    intake: "Sep, Jan",
  },
  {
    id: 4,
    course: "Bachelor of Science in Pre-Medicine (pre-professional)",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/pre-medicine-bs.webp",
    color: "#43E0C6",
    universityName: "University of Regina",
    duration: "4 years",
    tuitionCostYearly: "CAD 32,500.00",
    intake: "May, Sep, Jan",
  },
  {
    id: 5,
    course: "Bachelor of Engineering and Applied Science (Optional Co-op)",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/engineering-bs.webp",
    color: "#E04378",
    universityName: "Acadia University",
    duration: "3 years",
    tuitionCostYearly: "CAD 25,712.62",
    intake: "Sep",
  },
  {
    id: 6,
    course: "Bachelor of Mechanical Engineering (Automotive Option) (Co-op Option Available)",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/mechanical-engineering-bs.webp",
    color: "#43A6E0",
    universityName: "University of Windsor",
    duration: "4 years",
    tuitionCostYearly: "CAD 44,100.00",
    intake: "Jan, Sep",
  },
  {
    id: 7,
    course: "Bachelor of Applied Science (BASc) - Biomedical Engineering",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/biomedical-engineering-bs.webp",
    color: "#D4E043",
    universityName: "Simon Fraser University - SFU",
    duration: "4 years",
    tuitionCostYearly: "CAD 38,944.00",
    intake: "Sep",
  },
  {
    id: 8,
    course: "Bachelor of Engineering - Aerospace Engineering (Co-Op)",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/aerospace-engineerings-bs.webp",
    color: "#BF43E0",
    universityName: "Carleton University",
    duration: "4 years",
    tuitionCostYearly: "CAD 55,000.00",
    intake: "Sep",
  },
  {
    id: 9,
    course: "Bachelor of Engineering - Electrical Engineering (Co-op)",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/electrical-engineering-bs-v2.webp",
    color: "#43E092",
    universityName: "Dalhousie University",
    duration: "4 years",
    tuitionCostYearly: "CAD 48,592.00",
    intake: "Sep",
  },
  {
    id: 10,
    course: "Bachelor of Commerce (Business) (Co-Op)",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/business-administration-bs.webp",
    color: "#E06443",
    universityName: "Carleton University",
    duration: "4 years",
    tuitionCostYearly: "CAD 45,000.00",
    intake: "Jan, Sep",
  },
  {
    id: 11,
    course: "Bachelor of Commerce - International Business (Co-op)",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/international-business-administration-bs.webp",
    color: "#4351E0",
    universityName: "Dalhousie University",
    duration: "4 years",
    tuitionCostYearly: "CAD 42,042.00",
    intake: "Sep, Jan",
  },
  {
    id: 12,
    course: "Bachelor of Business Administration - Business Analytics & Supply Chain Management",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/business-administration-supply-bs.webp",
    color: "#7FE043",
    universityName: "University of Windsor",
    duration: "4 years",
    tuitionCostYearly: "CAD 38,620.00",
    intake: "Jan, May, Sep",
  },
  {
    id: 13,
    course: "Bachelor of Arts - Economics",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/art-economics-bs.webp",
    color: "#E043AC",
    universityName: "University of Regina",
    duration: "4 years",
    tuitionCostYearly: "CAD 32,500.00",
    intake: "Jan, May, Sep",
  },
  {
    id: 14,
    course: "Bachelor of Business Administration (Co-op available)",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/bach-business-administration-bs.webp",
    color: "#43DAE0",
    universityName: "Brock University",
    duration: "4 years",
    tuitionCostYearly: "CAD 41,645.60",
    intake: "Sep, Jan, May",
  },
  {
    id: 15,
    course: "Bachelor of Business Administration - Finance",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/finance-business-administration-bs.webp",
    color: "#E0B943",
    universityName: "University of Lethbridge",
    duration: "4 years",
    tuitionCostYearly: "CAD 24,662.20",
    intake: "Sep",
  },
  {
    id: 16,
    course: "Honours Bachelor of Science - Computer Science (Co-op option available)",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/computer-science-bs.webp",
    color: "#B3E043",
    universityName: "Lakehead University - Thunder Bay Campus",
    duration: "4 years",
    tuitionCostYearly: "CAD 31,750.00",
    intake: "Sep, Jan",
  },
  {
    id: 17,
    course: "Bachelor of Science (BSc) in Computer Science and Mathematics",
    category: "bachelors",
    stem: true,
    image: "/images/courses/canada/computer-science-mathematics-bs.webp",
    color: "#E043E0",
    universityName: "University of Victoria",
    duration: "4 years",
    tuitionCostYearly: "CAD 37,576.00",
    intake: "Sep, May",
  },
  {
    id: 18,
    course: "Bachelor of Arts in Human Rights",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/human-right-economics-bs.webp",
    color: "#E08443",
    universityName: "St. Thomas University",
    duration: "4 years",
    tuitionCostYearly: "CAD 21,135.00",
    intake: "Sep",
  },
  {
    id: 19,
    course: "Bachelor in Social Justice and Peace Studies",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/bachelor-social-juticebs.webp",
    color: "#5643E0",
    universityName: "King's University College (University of Western Ontario)",
    duration: "4 years",
    tuitionCostYearly: "CAD 47,493.00",
    intake: "Sep",
  },
  {
    id: 20,
    course: "Bachelor of Arts in Law & Society",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/art-in-law-society-bs.webp",
    color: "#5EE043",
    universityName: "Acadia University",
    duration: "4 years",
    tuitionCostYearly: "CAD 25,712.62",
    intake: "Jan, Sep",
  },
  // done till here
  {
    id: 21,
    course: "Bachelor of Arts (BA) and Bachelor of Laws (LLB) - Laurier-Sussex Law Program",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/economics-bs.webp",
    color: "#E0D943",
    universityName: "Wilfrid Laurier University - WLU",
    duration: "5 years",
    tuitionCostYearly: "CAD 36,620.00",
    intake: "Sep, Jan",
  },
  {
    id: 22,
    course: "Bachelor of Arts in Criminology - Honours (Co-op)",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/economics-bs.webp",
    color: "#AB43E0",
    universityName: "Trent University",
    duration: "4 years",
    tuitionCostYearly: "CAD 35,631.91",
    intake: "Sep, Jan, May",
  },
  {
    id: 23,
    course: "Bachelor of Arts (BA) - Criminology and Gender, Sexuality, and Women's Studies (Joint Major)",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/economics-bs.webp",
    color: "#43E07E",
    universityName: "Simon Fraser University - SFU",
    duration: "4 years",
    tuitionCostYearly: "CAD 38,944.00",
    intake: "Sep",
  },
  {
    id: 24,
    course: "Bachelor of Arts in Women's Studies and Gender Studies",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/economics-bs.webp",
    color: "#4365E0",
    universityName: "St. Thomas University",
    duration: "4 years",
    tuitionCostYearly: "CAD 21,135.00",
    intake: "Sep",
  },
  {
    id: 25,
    course: "Bachelor of Art in Child and Youth Care",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/biological-sciences-bs.webp",
    color: "#93E043",
    universityName: "Vancouver Island University - VIU",
    duration: "4 years",
    tuitionCostYearly: "CAD 24,962.70",
    intake: "Sep",
  },
  {
    id: 26,
    course: "Bachelor of Education - Consecutive",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/biological-sciences-bs.webp",
    color: "#E043C0",
    universityName: "Nipissing University",
    duration: "2 years",
    tuitionCostYearly: "CAD 28,560.00",
    intake: "Sep",
  },
  {
    id: 27,
    course: "Bachelor of Education",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/biological-sciences-bs.webp",
    color: "#E0A543",
    universityName: "Wilfrid Laurier University - WLU",
    duration: "2 years",
    tuitionCostYearly: "CAD 36,620.00",
    intake: "Sep",
  },
  {
    id: 28,
    course: "Bachelor of Education - Anthropology",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/biological-sciences-bs.webp",
    color: "#7743E0",
    universityName: "Lakehead University - Orillia Campus",
    duration: "6 years",
    tuitionCostYearly: "CAD 31,750.00",
    intake: "Sep",
  },
  {
    id: 29,
    course: "Bachelors of Elementary Education",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/biological-sciences-bs.webp",
    color: "#43E049",
    universityName: "Thompson Rivers University - TRU",
    duration: "2 years",
    tuitionCostYearly: "CAD 26,250.00",
    intake: "Sep",
  },
  {
    id: 30,
    course: "Bachelor of Arts in Leadership and Civic Studies",
    category: "bachelors",
    stem: false,
    image: "/images/courses/canada/economics-bs.webp",
    color: "#E0436B",
    universityName: "McMaster University",
    duration: "4 years",
    tuitionCostYearly: "CAD 45,158.40",
    intake: "Sep",
  },
  {
    id: 31,
    course: "Master of Business Administration (MBA)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/mba.webp",
    color: "#4380E0",
    universityName: "Booth University College",
    duration: "1 year 6 months",
    tuitionCostYearly: "CAD 23050.00",
    intake: "Jan, Sep",
    cardTitle: "MBA",
  },
  {
    id: 32,
    course: "Master of Environmental Economics and Management",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/economics-masters.webp",
    color: "#AEE043",
    universityName: "Thompson Rivers University - TRU",
    duration: "1 year",
    tuitionCostYearly: "CAD 19574.50",
    intake: "Sep",
    cardTitle: "Environmental Economics and Management",
  },
  {
    id: 33,
    course: "Master of Global Management (18 month option)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/mba.webp",
    color: "#E043DC",
    universityName: "Royal Roads University - RRU",
    duration: "1 year 6 months",
    tuitionCostYearly: "CAD 25605.33",
    intake: "May, Sep",
    cardTitle: "Global Management",
  },
  {
    id: 34,
    course: "Master of Business Administration (MBA) in International Business",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/mba.webp",
    color: "#43E0B7",
    universityName: "Trinity Western University - TWU",
    duration: "1 year 6 months",
    tuitionCostYearly: "CAD 18113.00",
    intake: "Jan, Sep, May, Mar",
    cardTitle: "MBA - International Business",
  },
  {
    id: 35,
    course: "Master of Adult Education and Human Resource Development",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/biological-sciences-ms.webp",
    color: "#E08943",
    universityName: "University of Regina",
    duration: "2 years",
    tuitionCostYearly: "CAD 9273.00",
    intake: "Sep",
    cardTitle: "Adult Education and Human Resource Development",
  },
  {
    id: 36,
    course: "Master of Professional Accounting (ISP) - MPAcc",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/mba.webp",
    color: "#5B43E0",
    universityName: "Brock University",
    duration: "1 year",
    tuitionCostYearly: "CAD 51051.30",
    intake: "Aug",
    cardTitle: "Professional Accounting (MPAcc)",
  },
  {
    id: 37,
    course: "Master of Management (Co-op)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/mba.webp",
    color: "#59E043",
    universityName: "University of Windsor",
    duration: "1 year 4 months",
    tuitionCostYearly: "CAD 36000.00",
    intake: "Sep, May",
    cardTitle: "Management (Co-op)",
  },
  {
    id: 38,
    course: "Master of Artificial Intelligence and Business Analytics",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/computer-science-ms.webp",
    color: "#E04387",
    universityName: "Cape Breton University - CBU",
    duration: "1 year 4 months",
    tuitionCostYearly: "CAD 23417.10",
    intake: "Sep",
    cardTitle: "Artificial Intelligence and Business Analytics",
  },
  {
    id: 39,
    course: "Master of Science in Computer Science",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/computer-science-ms.webp",
    color: "#43B5E0",
    universityName: "University of Regina",
    duration: "2 years",
    tuitionCostYearly: "CAD 13332.00",
    intake: "Sep",
    cardTitle: "Computer Science (MSc)",
  },
  {
    id: 40,
    course: "Master of Applied Computing (MAC) - with Co-op option",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/computer-science-ms.webp",
    color: "#E0DE43",
    universityName: "Wilfrid Laurier University - WLU",
    duration: "1 year 8 months",
    tuitionCostYearly: "CAD 29076.00",
    intake: "Sep",
    cardTitle: "Applied Computing (Co-op)",
  },
  {
    id: 41,
    course: "Master of Science in Big Data Analytics: Applied Modelling and Quantitative Methods",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/computer-science-ms.webp",
    color: "#B043E0",
    universityName: "Trent University",
    duration: "1 year 4 months",
    tuitionCostYearly: "CAD 33501.00",
    intake: "Sep",
    cardTitle: "Big Data Analytics",
  },
  {
    id: 42,
    course: "Master of Digital Innovation (MDI)",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/computer-science-ms.webp",
    color: "#43E082",
    universityName: "Dalhousie University",
    duration: "1 year 4 months",
    tuitionCostYearly: "CAD 26680.00",
    intake: "Sep",
    cardTitle: "Digital Innovation (MDI)",
  },
  {
    id: 43,
    course: "Master of Arts in Education - Health Professions Education (Thesis-based)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/biological-sciences-ms.webp",
    color: "#E05443",
    universityName: "University of Ottawa",
    duration: "2 years",
    tuitionCostYearly: "CAD 34259.04",
    intake: "Sep",
    cardTitle: "Health Professions Education (MA)",
  },
  {
    id: 44,
    course: "Master of Arts (MA) - Gender Studies (Thesis based)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/biological-sciences-ms.webp",
    color: "#4360E0",
    universityName: "University of Northern British Columbia - UNBC",
    duration: "2 years",
    tuitionCostYearly: "CAD 8112.45",
    intake: "Sep",
    cardTitle: "Gender Studies (Thesis)",
  },
  {
    id: 45,
    course: "Master of Education: Education for Change",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/biological-sciences-ms.webp",
    color: "#8EE043",
    universityName: "Lakehead University - Thunder Bay Campus",
    duration: "2 years",
    tuitionCostYearly: "CAD 26177.55",
    intake: "Sep, May",
    cardTitle: "Education for Change (MEd)",
  },
  {
    id: 46,
    course: "Master of Education in Leadership in Learning - Focus in Global Perspectives",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/biological-sciences-ms.webp",
    color: "#E043BC",
    universityName: "University of Prince Edward Island - UPEI",
    duration: "2 years",
    tuitionCostYearly: "CAD 22130.00",
    intake: "Sep",
    cardTitle: "Leadership in Learning (MEd)",
  },
  {
    id: 47,
    course: "Master of Education co-op",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/biological-sciences-ms.webp",
    color: "#43E0D7",
    universityName: "Mount Saint Vincent University - MSVU",
    duration: "2 years",
    tuitionCostYearly: "CAD 15789.00",
    intake: "Sep",
    cardTitle: "Education (Co-op)",
  },
  {
    id: 48,
    course: "Master of Engineering (MEng) - Courses and Internship",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#E0A943",
    universityName: "The University of British Columbia (UBC) - Okanagan",
    duration: "1 year",
    tuitionCostYearly: "CAD 27419.34",
    intake: "Sep",
    cardTitle: "Engineering (Coursework and Internship)",
  },
  {
    id: 49,
    course: "Master of Engineering (MEng) - Industrial Engineering (Co-op Option)",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#7C43E0",
    universityName: "Dalhousie University",
    duration: "1 year 4 months",
    tuitionCostYearly: "CAD 33522.01",
    intake: "Sep, May",
    cardTitle: "Industrial Engineering (Co-op)",
  },
  {
    id: 50,
    course: "Master of Applied Science in Computer Engineering",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#43E04E",
    universityName: "Memorial University of Newfoundland - MUN (St. John Campus)",
    duration: "2 years",
    tuitionCostYearly: "CAD 20282.00",
    intake: "Sep",
    cardTitle: "Computer Engineering (MASc)",
  },
  {
    id: 51,
    course: "Master of Science in Sustainable Design Engineering",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#E04367",
    universityName: "University of Prince Edward Island - UPEI",
    duration: "2 years",
    tuitionCostYearly: "CAD 20698.00",
    intake: "Sep, May",
    cardTitle: "Sustainable Design Engineering",
  },
  {
    id: 52,
    course: "Master of Psychology - Health and Wellness",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/public-health.webp",
    color: "#4395E0",
    universityName: "Adler University",
    duration: "2 years",
    tuitionCostYearly: "CAD 20895.00",
    intake: "Sep",
    cardTitle: "Psychology - Health and Wellness",
  },
  {
    id: 53,
    course: "Masters in Hospitality Management Studies - Concentration in Healthcare Hospitality",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/mba.webp",
    color: "#C2E043",
    universityName: "Fairleigh Dickinson University - FDU (Vancouver, Canada)",
    duration: "1 year 4 months",
    tuitionCostYearly: "USD 20016.00",
    intake: "Sep",
    cardTitle: "Healthcare Hospitality Management",
  },
  {
    id: 54,
    course: "Master of Science in Kinesiology (MSc) with Specialization in Gerontology",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/public-health.webp",
    color: "#D143E0",
    universityName: "Lakehead University - Thunder Bay Campus",
    duration: "1 year 4 months",
    tuitionCostYearly: "CAD 23124.99",
    intake: "Sep",
    cardTitle: "Kinesiology - Gerontology (MSc)",
  },
  {
    id: 55,
    course: "Master of Science in Clinical Science and Translational Medicine - Pharmaceutical Sciences (Research project-based)",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/public-health.webp",
    color: "#43E0A3",
    universityName: "University of Ottawa",
    duration: "1 year",
    tuitionCostYearly: "CAD 29162.67",
    intake: "Sep",
    cardTitle: "Clinical Science and Pharmaceutical Sciences",
  },
  {
    id: 56,
    course: "Master of Science in Nursing with clinical option",
    category: "masters",
    stem: true,
    image: "/images/courses/canada/public-health.webp",
    color: "#E07543",
    universityName: "University of Ottawa",
    duration: "1 year 8 months",
    tuitionCostYearly: "CAD 35972.01",
    intake: "Sep",
    cardTitle: "Nursing (Clinical Option)",
  },
  {
    id: 57,
    course: "Master of Laws (LLM) - Course based",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/economics-masters.webp",
    color: "#4743E0",
    universityName: "University of Ottawa",
    duration: "1 year 4 months",
    tuitionCostYearly: "CAD 30001.32",
    intake: "Sep",
    cardTitle: "Law (LLM)",
  },
  {
    id: 58,
    course: "Master of Arts(MA) in Criminology",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/economics-masters.webp",
    color: "#6DE043",
    universityName: "Wilfrid Laurier University - WLU",
    duration: "1 year",
    tuitionCostYearly: "CAD 23583.00",
    intake: "Sep",
    cardTitle: "Criminology (MA)",
  },
  {
    id: 59,
    course: "Master of Arts in Social Justice (MA)",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/economics-masters.webp",
    color: "#E0439B",
    universityName: "Lakehead University - Thunder Bay Campus",
    duration: "2 years",
    tuitionCostYearly: "CAD 23124.99",
    intake: "Sep",
    cardTitle: "Social Justice (MA)",
  },
  {
    id: 60,
    course: "Master of Arts in Human Rights and Social Justice",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/economics-masters.webp",
    color: "#43C9E0",
    universityName: "Thompson Rivers University - TRU",
    duration: "1 year 4 months",
    tuitionCostYearly: "CAD 31805.10",
    intake: "Sep",
    cardTitle: "Human Rights and Social Justice",
  },
  {
    id: 61,
    course: "Master of Arts(MA) in Disaster/Emergency Management and National Security",
    category: "masters",
    stem: false,
    image: "/images/courses/canada/economics-masters.webp",
    color: "#E0CA43",
    universityName: "Niagara University, Ontario",
    duration: "2 years",
    tuitionCostYearly: "CAD 15750.00",
    intake: "Sep, Jan",
    cardTitle: "Emergency Management and National Security",
  },
  {
    id: 62,
    course: "Doctor of Philosophy (PhD) in Public Policy",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/mba.webp",
    color: "#9C43E0",
    universityName: "University of Regina",
    duration: "2 years",
    tuitionCostYearly: "CAD 6896.25",
    intake: "Sep",
    cardTitle: "Public Policy (PhD)",
  },
  {
    id: 63,
    course: "Doctor of Philosophy (PhD) in Computer Science",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/computer-science-ms.webp",
    color: "#43E06E",
    universityName: "University of Regina",
    duration: "3 years",
    tuitionCostYearly: "CAD 6896.25",
    intake: "Sep",
    cardTitle: "Computer Science (PhD)",
  },
  {
    id: 64,
    course: "Doctor of Philosophy (PhD) in Education",
    category: "phd",
    stem: false,
    image: "/images/courses/canada/biological-sciences-ms.webp",
    color: "#E04346",
    universityName: "University of Regina",
    duration: "5 years",
    tuitionCostYearly: "CAD 6896.25",
    intake: "Sep",
    cardTitle: "Education (PhD)",
  },
  {
    id: 65,
    course: "Doctor of Philosophy (PhD) in Electronic Systems Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#4374E0",
    universityName: "University of Regina",
    duration: "4 years",
    tuitionCostYearly: "CAD 6896.25",
    intake: "Sep",
    cardTitle: "Electronic Systems Engineering (PhD)",
  },
  {
    id: 66,
    course: "Doctor of Philosophy (PhD) in Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#A2E043",
    universityName: "University of Regina",
    duration: "2 years",
    tuitionCostYearly: "CAD 6896.25",
    intake: "Sep",
    cardTitle: "Engineering (PhD)",
  },
  {
    id: 67,
    course: "PhD in Engineering - Chemical Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#E043D0",
    universityName: "Lakehead University - Thunder Bay Campus",
    duration: "3 years",
    tuitionCostYearly: "CAD 18999.99",
    intake: "Sep, May",
    cardTitle: "Chemical Engineering (PhD)",
  },
  {
    id: 68,
    course: "PhD in Engineering - Civil Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#43E0C3",
    universityName: "Lakehead University - Thunder Bay Campus",
    duration: "4 years",
    tuitionCostYearly: "CAD 18999.99",
    intake: "Sep, May",
    cardTitle: "Civil Engineering (PhD)",
  },
  {
    id: 69,
    course: "PhD in Engineering - Electrical and Computer Engineering (Thesis based)",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#E09543",
    universityName: "Lakehead University - Barrie STEM Hub",
    duration: "3 years",
    tuitionCostYearly: "CAD 18999.99",
    intake: "Sep, May",
    cardTitle: "Electrical and Computer Engineering (PhD)",
  },
  {
    id: 70,
    course: "PhD in Sustainable Design Engineering",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/engineering-ms.webp",
    color: "#6843E0",
    universityName: "University of Prince Edward Island - UPEI",
    duration: "3 years",
    tuitionCostYearly: "CAD 15449.00",
    intake: "Sep",
    cardTitle: "Sustainable Design Engineering (PhD)",
  },
  {
    id: 71,
    course: "PhD in Clinical Psychology - Thesis based",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/public-health.webp",
    color: "#4DE043",
    universityName: "University of Regina",
    duration: "4 years",
    tuitionCostYearly: "CAD 6896.25",
    intake: "Sep",
    cardTitle: "Clinical Psychology (PhD)",
  },
  {
    id: 72,
    course: "Doctor of Philosophy (PhD) in Kinesiology and Health Studies",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/public-health.webp",
    color: "#E0437B",
    universityName: "University of Regina",
    duration: "2 years",
    tuitionCostYearly: "CAD 6896.25",
    intake: "Sep",
    cardTitle: "Kinesiology and Health Studies (PhD)",
  },
  {
    id: 73,
    course: "PhD in Experimental and Applied Psychology - Thesis based",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/public-health.webp",
    color: "#43A9E0",
    universityName: "University of Regina",
    duration: "4 years",
    tuitionCostYearly: "CAD 6896.25",
    intake: "Sep",
    cardTitle: "Experimental and Applied Psychology (PhD)",
  },
  {
    id: 74,
    course: "PhD in Psychological Science (Thesis based)",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/public-health.webp",
    color: "#D6E043",
    universityName: "Lakehead University - Thunder Bay Campus",
    duration: "3 years",
    tuitionCostYearly: "CAD 18999.99",
    intake: "Sep",
    cardTitle: "Psychological Science (PhD)",
  },
  {
    id: 75,
    course: "PhD in Health Sciences",
    category: "phd",
    stem: true,
    image: "/images/courses/canada/public-health.webp",
    color: "#BD43E0",
    universityName: "Lakehead University - Thunder Bay Campus",
    duration: "4 years",
    tuitionCostYearly: "CAD 18999.99",
    intake: "Sep",
    cardTitle: "Health Sciences (PhD)",
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
              in the Canada
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
            modules={[Pagination]}
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
            pagination={{
              clickable: true,
            }}
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
            className="!overflow-hidden !bg-transparent !pb-12 !pt-4 [&_.swiper-pagination-bullet]:!bg-[#1765F5] [&_.swiper-pagination-bullet-active]:!opacity-100"
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
          *STEM designation and eligibility depend on the
          university, specific program, and applicable Canada
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


