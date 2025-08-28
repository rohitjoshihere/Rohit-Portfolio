// src/constants/index.js

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  invisor,
  starbucks,
  ooumph,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  github,
  youtube,
  linkedin,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3 Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Ooumph Media",
    icon: ooumph,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Working as a Software Engineer on web applications.",
      "Tech stack: React, TypeScript, Node.js, SQL, MongoDB, PHP, GraphQL, REST APIs.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Invisor",
    icon: invisor,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Developed full-stack web applications.",
      "Implemented authentication, APIs, and optimized performance.",
    ],
  },
];

const projects = [
  {
    name: "Homekrafted",
    description:
      "A platform for handcrafted home decor products built with modern web technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://homekrafted.in",
  },
  {
    name: "Monad Tucas Orderbook",
    description:
      "A decentralized orderbook built on Monad with real-time trading functionalities.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    source_code_link: "https://monad-tucas-orderbook-dec.vercel.app",
  },
  {
    name: "College Lelo",
    description:
      "A college review platform where students can share experiences and explore institutions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link: "https://collegelelo.com",
  },
];

const SOCIALS = [
  {
    name: "GitHub",
    link: "https://github.com/rohitjoshihere",
    icon: github,
  },
  {
    name: "Twitter",
    link: "https://x.com/rohitjoshihere",
    icon: twitter,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rohitjoshihere/",
    icon: linkedin,
  },
  // {
  //   name: "Instagram",
  //   link: "https://instagram.com/your-handle",
  //   icon: instagram,
  // },
];
import { user1, user2, user3 } from "../assets"; // adjust path if needed

const TESTIMONIALS = [
  {
    testimonial:
      "Working with Rohit was an amazing experience. He understood our requirements quickly and delivered a stunning website ahead of schedule.",
    name: "Amit Verma",
    designation: "CEO",
    company: "TechVision Ltd",
    image: user1,
  },
  {
    testimonial:
      "The UI/UX improvements Rohit implemented boosted our customer engagement significantly. His creativity and attention to detail are unmatched.",
    name: "Priya Sharma",
    designation: "Product Manager",
    company: "InnovateX",
    image: user2,
  },
  {
    testimonial:
      "I highly recommend Rohit for any web development project. His problem-solving skills and professional attitude made our collaboration seamless.",
    name: "Rahul Mehta",
    designation: "CTO",
    company: "NextGen Apps",
    image: user3,
  },
];



export { services, technologies, experiences, projects , SOCIALS, TESTIMONIALS};
