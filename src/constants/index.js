import {
    mobile,
    backend,
    creator,
    web,
    javascript,
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
    meta,
    starbucks,
    tesla,
    carrent,
    jobit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "technologies",
      title: "Technologies",
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
      title: "React Native Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "CyberSecurity",
      icon: backend,
    },
    {
      title: "Data Science",
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
      name: "React JS",
      icon: reactjs,
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
    {
      name: "mongodb",
      icon: mongodb,
    },
    {
      name: "redux",
      icon: redux,
    },
    
  ];
  
  const experiences = [
    {
      title: "Django Intern",
      company_name: "MySoftNet Technologies Private Limited",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Developed web applications using Django and other related technologies.",
      ],
    },
    {
      title: "Front End Intern,Java Intern",
      company_name: "LGM VIP",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Developed web applications using HTML,CSS, JavaScript and React.js.",
        "Developed text editors , games using Java and related technologies.",
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "IBM",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "February 2024 - March 2024",
      points: [
        "Performed Data analysis using R programming language",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Cusat Connects",
      description:
        "CusatConnect is a transformative social media platform that unites the Cochin University of Science and Technology community in a digital space. With its secure login process, dynamic news feed, and interactive profiles, CusatConnect offers a unique and engaging experience for students and faculty alike.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ashly02/project-intermed.git",
    },
    {
      name: "3D Portfolio website",
      description:
        "Web application that is meticulously crafted to showcase my diverse talents and creative prowers in an immersive digital experience",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ashly02/3D-PORTFOLIO.git",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };