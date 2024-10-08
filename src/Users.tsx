import {
  IconBrandGithub,
  IconBrandHackerrank,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "../src/assets/SS.png";
import Image2 from "../src/assets/SSM.png";
const Info = {
  stack: ["Frontend Developer", "UX/UI Designer", ""],
  bio: " Student of Information Technology with a strong passion for frontend development and UI/UX design. With hands-on experience in creating responsive websites and applications using HTML, CSS, JavaScript, React, and Flutter, I am proficient in delivering user-friendly and visually appealing digital solutions.",
};

const SocialLinks = [
  { link: "https://github.com/aavdisd07", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/avantikadeshmukh/",
    icon: IconBrandLinkedin,
  },
  { link: "https://leetcode.com/u/2021bit153/", icon: IconBrandLeetcode },

  {
    link: "https://www.hackerrank.com/profile/2021bit153",
    icon: IconBrandHackerrank,
  }

];

const ProjectInfo = [
  {
    "title": "Movies Mania",
    "desc": "Developed a responsive website using JavaScript and API integration for real-time movie information retrieval, implementing search functionality to quickly access detailed movie data, and designed a dynamic user interface to ensure better user engagement and experience.",
    "image": Image2,
    "live": true,
    "technologies": ["JavaScript", "API"],
    "link": "https://aavdisd07.github.io/Movies-Mania-/",
    "github": "https://github.com/aavdisd07/Movies-Mania-"
},
{
    "title": "FreshCart",
    "desc": "Developed and deployed an intuitive online grocery store website using React JS and Tailwind CSS. The site features a user-friendly interface with dynamic product listings, interactive shopping cart functionality, and efficient state management. Implemented responsive design principles to ensure a seamless experience across various devices and integrated essential features such as product search, filters, and checkout processes.",
    "image": Image,
    "live": true,
    "technologies": ["ReactJS", "Tailwind CSS","Framer Motion","React Icons","Vite","ESLint PostCSS","GitHub Pages"],
    "link": "https://aavdisd07.github.io/FreshCart/",
    "github": "https://github.com/aavdisd07/FreshCart"
},
// {
//     "title": "Shopping Store",
//     "desc": "Designed and implemented a comprehensive shopping website, utilizing HTML, CSS, and JavaScript to create dynamic and interactive user experiences, and developed essential features such as product listings, a shopping cart, and a streamlined checkout process to enhance the online shopping experience.",
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdfWQ9o76_DVlHPlGdcI2QxCI8VDuZK6qCA&s",
//     "live": true,
//     "technologies": ["HTML", "CSS", "JavaScript"],
//     "link": "https://google.com",
//     "github": "https://github/aavdisd07.com"
// }

];

const SkillInfo = [
  {
    "title": "Frontend Development",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "NextJs",
      "TailwindCSS",
      "Bootstrap",
      "TypeScript"
    ]
},
{
    "title": "Backend Development",
    "skills": [
      "Java",
      "C",
      "SQL",
      "Django",
      "SpringBoot",
      "Firebase"
    ]
},
{
    "title": "Full Stack Development",
    "skills": [
      "ReactJs",
      "Django",
      "Java",
      "SpringBoot",
      "MySQL",
      "Firebase",
      "TypeScript"
    ]
},
{
    "title": "Other Technologies",
    "skills": [
      "Python",
      "CPP",
      "Flutter",
      "WordPress",
      "Linux"
    ]
}

];

const ExperienceInfo = [
  {
    role: "Web developer",
    company: "airtel",
    date: "oct-34",
    desc: "lorem3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus at nobis deleniti quis pariatur blanditiis magnam repudiandae assumenda atque?",
    skills: [
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
    ],
  },

  {
    role: "Web developer",
    company: "airtel",
    date: "oct-34",
    desc: "lorem3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus at nobis deleniti quis pariatur blanditiis magnam repudiandae assumenda atque?",
    skills: ["Html", "css", "Html", "css", "Html", "css", "Html", "css"],
  },
  {
    role: "Web developer",
    company: "airtel",
    date: "oct-34",
    desc: "lorem3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus at nobis deleniti quis pariatur blanditiis magnam repudiandae assumenda atque?",
    skills: [
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
    ],
  },
];

const Slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export { Info, ProjectInfo, SkillInfo, SocialLinks, ExperienceInfo, Slugs };
