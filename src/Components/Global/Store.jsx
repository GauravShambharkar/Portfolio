import { MdOnlinePrediction } from "react-icons/md";
import { create } from "zustand";

const useStore = create(() => ({
  projects: [
    {
      img: "backendDirectorygeneratorImg.jpg",
      title: "Backend directory generator",
      link: "https://github.com/GauravShambharkar/Nodejs-Backend-Directory-Generator",
      live: false,
      liveLink: "",
      projectStack: [
        "ReactJs",
        "TailwindCSS",
        "ShadCn",
        "Express",
        "Nodejs",
        "Fs-extra",
        "Archiver",
      ],
      description:
        "Node js backend directory generator, creating custom backend directory where this project can ease the process of creating directories and files for the Node, Express And MongoDB, fill out the form with your custom file_Name click on generate and get the ready to code backend directory.",
    },
    {
      img: false,
      title: "Movie Streaming App",
      link: "https://github.com/GauravShambharkar/Movies-Streaming-App",
      live: <MdOnlinePrediction className="text-[#68ff81] size-5" />,
      liveLink: "https://movies-streaming-app-mauve.vercel.app/",
      projectStack: [
        "ReactJs",
        "TailwindCSS",
        "Redux-js",
        "REST-API",
        "Nodejs",
      ],
      description:
        "Discover the hottest and most trending Movies, TV Shows, and Documentaries using the TMDB API. This responsive React app displays a dynamic banner and allows filtering trending content by category — all with a modern, clean UI.",
    },
    {
      img: false,
      title: "E-Com Shop",
      link: "https://github.com/GauravShambharkar/E-Com_Shop",
      live: false,
      liveLink: "",
      projectStack: [
        "ReactJs",
        "TailwindCSS",
        "Context-API",
        "REST-API",
        "Nodejs",
      ],
      description:
        "A fully responsive E-Commerce web application built with React.js that showcases modern front-end development techniques. This project demonstrates state management using Context API, data fetching with Axios, and routing with React Router DOM. 🔧 Features ⚛️ Built with React.js 🔄 Context API for global state management 📦 Cart functionality",
    },
    {
      img: "learnLift.png",
      title: "Learn lift",
      link: "https://github.com/GauravShambharkar/LearnLift",
      live: false,
      liveLink: "",
      projectStack: [
        "ReactJs",
        "TailwindCSS",
        "ShadCn",
        "Express",
        "Nodejs",
        "MongoDb",
        "Mongoose",
        "JWT",
        "PostMan",
      ],
      description: "Platform, that help explore new learning path",
    },
    {
      img: "MulitbackendDirectorygeneratorImg.jpg",
      title: "Multi tech-stack Backend directory generator",
      link: "https://github.com/GauravShambharkar/Multi-techStack-backend-directory-Generator",
      live: false,
      liveLink: "",
      projectStack: [
        "ReactJs",
        "TailwindCSS",
        "ShadCn",
        "Express",
        "Nodejs",
        "Fs-extra",
        "Archiver",
      ],
      description:
        "just like waht NEM does it it create an directory and folder with customised fileName but here you can use any .exe for your file .java, .js, .ts, .py, .c any, creating custom backend directory where this project can ease the process of creating directories and files for the Node, fill out the form with your custom file_Name click on generate and get the ready to code backend directory.",
    },
    {
      img: "portfolio2.0.jpg",
      title: "My portfolio",
      link: "https://github.com/GauravShambharkar/Portfolio",
      live: <MdOnlinePrediction className="text-[#68ff81] size-5" />,
      liveLink: "",
      projectStack: [
        "ReactJs",
        "TailwindCSS",
        "ReactBits",
        "GSAP",
        "ReactMotion",
      ],
      description:
        "My personal portfolio website to showcase my work and skills.",
    },
  ],
}));

export default useStore;
