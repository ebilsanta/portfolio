import React from "react";
import { FiGithub } from "react-icons/fi";
import { RiPresentationFill } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

export const projectsData = [
  {
    title: "Gobbler",
    description:
      "A mobile application that provides a platform to share and reserve surplus buffet food. Cloud-native microservices architecture. Winner of <strong>VMWare Tanzu Award 2023</strong> for <em>Best in Cohort</em> in IS213: Enterprise Solution Development.",
    tags: ["FastAPI (Python)", "Springboot", ".NET Core", "Firebase", "RabbitMQ", "Kong", "Redis", "Kubernetes"],
    mainImageUrl: "/gobbler-1.png",
    mainHeight: 2012,
    mainWidth: 1678,
    secondaryImageUrl: "/gobbler-2.png",
    secondaryHeight: 2012,
    secondaryWidth: 1672,
    links: [
      {
        label: "github link",
        icon: React.createElement(FiGithub, {size: 28}),
        url: "https://github.com/ebilsanta/gobbler"
      },
      {
        label: "project video link",
        icon: React.createElement(MdOndemandVideo, {size: 28}),
        url: "https://www.youtube.com/watch?v=rpT6hkMRsbQ&ab_channel=ThaddeusLee "
      },
      {
        label: "project presentation slides",
        icon: React.createElement(RiPresentationFill, {size: 28}),
        url: "https://drive.google.com/file/d/1mXiCT5_wq6A9mfzhMITPoGrIUk4FGrFZ/view?usp=sharing"
      }
      
    ],
  },
  {
    title: "Authentication App",
    description:
      "A custom authentication service utilizing OAuth 2.0 extensions <em> Proof Key for Code Exchange </em> (PKCE) and <em> Demonstrating Proof-of-Possession </em> (DPoP) to ensure authenticity and confidentiality when working with public clients (eg. SPAs). Architected to be highly scalable and available on AWS.",
    tags: ["Go", "FastAPI (Python)", "ExpressJS", "Next.js", "AWS", 'gRPC'],
    mainImageUrl: "/authentication-app-1.png",
    mainHeight: 2936,
    mainWidth: 1666,
    secondaryImageUrl: "/authentication-app-2.png",
    secondaryHeight: 2934,
    secondaryWidth: 1669,
    links: [
      {
        label: "github link",
        icon: React.createElement(FiGithub, {size: 28}),
        url: "https://github.com/ebilsanta/authentication-app"
      }
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
        icon: React.createElement(MdOndemandVideo, {size: 28}),
        url: "https://youtu.be/VXNUtip0stk?si=JVqQREXNTaJgpwQn"
      },
      {
        label: "project presentation slides",
        icon: React.createElement(RiPresentationFill, {size: 28}),
        url: "https://drive.google.com/file/d/1XnJhfa5DlS9kaQX1B1fkCTeOsXvL5izN/view?usp=sharing"
      }
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
        icon: React.createElement(FiGithub, {size: 28}),
        url: "https://github.com/ebilsanta/true-colours-game"
      },
      {
        label: "live application",
        icon: React.createElement(FaPlay, {size: 28}),
        url: "https://true-colours-tl.vercel.app/"
      }
    ],
  },
] as const;