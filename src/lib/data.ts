import React from "react";
import { FiGithub } from "react-icons/fi";
import { RiPresentationFill } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import {
  SiDart,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiFastapi,
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";
import { TbBrandVue } from "react-icons/tb";
import { FaPlay, FaPython, FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import JustDabao from "../../public/just-dabao.svg";
import KoruPartners from "../../public/koru-partners.svg";
import Ryde from "../../public/ryde.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    title: "Software Engineer Intern",
    company: "Ryde Technologies",
    description: [
      "Enhanced driver onboarding by developing Go microservice for Document AI and Image Question Answering tasks",
      "Minimized future development and maintenance costs by migrating native mobile applications to Flutter"
    ],
    icon: React.createElement(Ryde, {
      style: { width: 30, height: 30, margin: "-15px" },
    }),
    date: "Jan 2024 - Present",
  },
  {
    title: "Software Engineer Intern",
    company: "Koru Partners",
    description: [
      "Streamlined fund operations' processes by highlighting discrepancies (Django/Pandas) during reconciliation process",
      "Improved human resources' workflow by automating the generation of Asana tasks (Python)",
      "Improved compliance efforts by implementing authentication for in-house Excel Add-in (C#)",
    ],
    icon: React.createElement(KoruPartners, {
      style: { width: 34, height: 34, margin: "-17px" },
    }),
    date: "May 2023 - Aug 2023",
  },
  {
    title: "Software Engineer Intern",
    company: "Just Dabao",
    description: [
      "Refined existing product filter and map features, fixed bugs on Flutter mobile application",
      "Enhanced accessibility by collaborating with UI team to design and implement dark mode",
      "Boosted marketing efforts by setting up data analysis tools such as Google Analytics and Amplitude",
    ],
    icon: React.createElement(JustDabao, {
      style: { width: 34, height: 34, margin: "-17px" },
    }),
    date: "Jul 2022 - Nov 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Gobbler",
    description:
      "A mobile application that provides a platform to share and reserve surplus buffet food. Cloud-native microservices architecture. Winner of <strong>VMWare Tanzu Award 2023</strong> for <em>Best in Cohort</em> in IS213: Enterprise Solution Development.",
    tags: [
      "FastAPI (Python)",
      "Springboot",
      ".NET Core",
      "Firebase",
      "RabbitMQ",
      "Kong",
      "Redis",
      "Kubernetes",
    ],
    mainImageUrl: "/gobbler-1.png",
    mainHeight: 2012,
    mainWidth: 1678,
    secondaryImageUrl: "/gobbler-2.png",
    secondaryHeight: 2012,
    secondaryWidth: 1672,
    links: [
      {
        label: "github link",
        icon: React.createElement(FiGithub, { size: 28 }),
        url: "https://github.com/ebilsanta/gobbler",
      },
      {
        label: "project video link",
        icon: React.createElement(MdOndemandVideo, { size: 28 }),
        url: "https://www.youtube.com/watch?v=rpT6hkMRsbQ&ab_channel=ThaddeusLee",
      },
      {
        label: "project presentation slides",
        icon: React.createElement(RiPresentationFill, { size: 28 }),
        url: "https://drive.google.com/file/d/1mXiCT5_wq6A9mfzhMITPoGrIUk4FGrFZ/view?usp=sharing",
      },
    ],
  },
  {
    title: "Authentication App",
    description:
      "A custom authentication service utilizing OAuth 2.0 extensions <em> Proof Key for Code Exchange </em> (PKCE) and <em> Demonstrating Proof-of-Possession </em> (DPoP) to ensure authenticity and confidentiality when working with public clients (eg. SPAs). Architected to be highly scalable and available on AWS.",
    tags: ["Go", "FastAPI (Python)", "Express", "Next.js", "AWS", "gRPC"],
    mainImageUrl: "/authentication-app-1.png",
    mainHeight: 2936,
    mainWidth: 1666,
    secondaryImageUrl: "/authentication-app-2.png",
    secondaryHeight: 2934,
    secondaryWidth: 1669,
    links: [
      {
        label: "github link",
        icon: React.createElement(FiGithub, { size: 28 }),
        url: "https://github.com/ebilsanta/authentication-app",
      },
    ],
  },
  {
    title: "Makan Pals",
    description:
      "A mobile application empowering Persons with Intellectual Disabilities (PWID) through education, making F&B spaces more accessible and familiar. Awarded <em>First Runners-Up</em> in the <strong>Dell InnovateFest 2023</strong>.",
    tags: ["React Native", "FastAPI (Python)", "Kong", "VMWare Tanzu"],
    mainImageUrl: "/makan-pals-1.png",
    mainHeight: 1419,
    mainWidth: 808,
    secondaryImageUrl: "/makan-pals-2.png",
    secondaryHeight: 1378,
    secondaryWidth: 786,
    links: [
      {
        label: "project video link",
        icon: React.createElement(MdOndemandVideo, { size: 28 }),
        url: "https://youtu.be/VXNUtip0stk?si=JVqQREXNTaJgpwQn",
      },
      {
        label: "project presentation slides",
        icon: React.createElement(RiPresentationFill, { size: 28 }),
        url: "https://drive.google.com/file/d/1XnJhfa5DlS9kaQX1B1fkCTeOsXvL5izN/view?usp=sharing",
      },
    ],
  },
  {
    title: "True Colours Clone",
    description:
      "An online clone of the party game True Colours. Real-time gameplay and updates using WebSockets.",
    tags: ["Springboot", "WebSockets", "React", "Next.js", "Chakra UI"],
    mainImageUrl: "/true-colours-1.png",
    mainHeight: 3264,
    mainWidth: 1855,
    secondaryImageUrl: "/true-colours-2.png",
    secondaryHeight: 3264,
    secondaryWidth: 1855,
    links: [
      {
        label: "github link",
        icon: React.createElement(FiGithub, { size: 28 }),
        url: "https://github.com/ebilsanta/true-colours-game",
      },
      {
        label: "live application",
        icon: React.createElement(FaPlay, { size: 28 }),
        url: "https://true-colours-tl.vercel.app/",
      },
    ],
  },
  {
    title: "Gift Redemption App",
    description:
      "A simple application to search for employees and redeem gifts. Optimized search function using <em>API pagination</em> and <em>lazy loading</em> on the frontend with <em>debouncing</em> and <em>caching</em>.",
    tags: ["React", "Express", "Prisma", "TypeScript"],
    mainImageUrl: "/gift-redemption-1.png",
    mainHeight: 2398,
    mainWidth: 1501,
    secondaryImageUrl: "/gift-redemption-2.png",
    secondaryHeight: 2398,
    secondaryWidth: 1498,
    links: [
      {
        label: "github link",
        icon: React.createElement(FiGithub, { size: 28 }),
        url: "https://github.com/ebilsanta/gt-takehome",
      },
      {
        label: "live application",
        icon: React.createElement(FaPlay, { size: 28 }),
        url: "https://gift-redemption-frontend.vercel.app/",
      },
    ],
  },
] as const;

export const skillsData = {
  languages: [
    { name: "Python", icon: React.createElement(FaPython, { size: 28 }) },
    { name: "Java", icon: React.createElement(FaJava, { size: 28 }) },
    { name: "Go", icon: React.createElement(FaGolang, { size: 28 }) },
    { name: "Dart", icon: React.createElement(SiDart, { size: 28 }) },
    {
      name: "JavaScript",
      icon: React.createElement(SiJavascript, { size: 28 }),
    },
    {
      name: "TypeScript",
      icon: React.createElement(SiTypescript, { size: 28 }),
    },
  ],
  frameworks: [
    { name: "Express", icon: React.createElement(SiExpress, { size: 28 }) },
    { name: "FastAPI", icon: React.createElement(SiFastapi, { size: 28 }) },
    {
      name: "Springboot",
      icon: React.createElement(SiSpringboot, { size: 28 }),
    },
    { name: "React", icon: React.createElement(SiReact, { size: 28 }) },
    { name: "Next.js", icon: React.createElement(SiNextdotjs, { size: 28 }) },
    { name: "Vue.js", icon: React.createElement(TbBrandVue, { size: 28 }) },
    { name: "Flutter", icon: React.createElement(SiFlutter, { size: 28 }) },
    { name: "Docker", icon: React.createElement(SiDocker, { size: 28 }) },
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect Associate",
      icon: React.createElement(SiAmazonaws, { size: 28 }),
    },
  ],
};

export const socialsData = [
  {
    link: "https://linkedin.com/in/thaddeusleezx",
    icon: React.createElement(BsLinkedin),
  },
  { link: "https://github.com/ebilsanta", icon: React.createElement(FiGithub) },
];
