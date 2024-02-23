import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import corpcomment from "@/public/corpcomment.png";

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
    title: "Fullstack Freelancer",
    location: "Pune, India",
    description:
      "I started freelancing from my last year with my friends. We majorly worked on frontend, backend of websites, wordpress websites",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Engineer",
    location: "Pune, India",
    description:
      "I worked as a Engineer for 2 years. I also upskilled to the full stack. Learned SQL, Java",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Pune, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blog",
    description:
      "I worked as a full-stack developer on this  project. Users can add blog, delete blog, update bolg.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcomment,
  },
  {
    title: "gpt3-jsm",
    description:
      "This ia a clone website, built while learning React and other Freameworks. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "CoderKul",
    description:
      "A public web app for educational purpose. It includes dashboard, CRUD functionality, etc .",
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
  "Next.js",
  "Node.js",
  "Express.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "pHp",
  "Express",
  "PostgreSQL",
  "Java",
  "SQL",
  "WordPress",
  "Material UI",
  "Framer Motion",
] as const;
