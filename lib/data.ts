import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Wuhan, China",
    description:
      "I graduated after 6 months of studying in a codeCamp. I immediately found a job as a back-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Back-End Developer",
    location: "zhoushan, zhejiang, China",
    description:
      "I worked as a back-end developer for one years and half. I am working onto the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "International Student",
    location: "Sydney, NSW, Australia",
    description:
      "I'm now an internation student working onto a full-stack developer. My stack includes React, Java, TypeScript, Tailwind, PostgreSQL and Redis. I'm open to internship/part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Intertion",
    description:
      "I worked as a back-stack developer on this company for 1.5 years. Users can give public feedback to companies.",
    tags: ["VUE", "Java", "PostgreSQL", "Spring boot", "Redis"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redis",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Java",
  "Spring Boot",
] as const;
