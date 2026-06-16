import { MdOnlinePrediction } from "react-icons/md";
import { create } from "zustand";

const useStore = create((set, get) => ({
  projects: [
    {
      img: "twenty4seven1.png",
      title: "24Seven",
      link: "",
      live: false,
      liveLink: "",
      projectStack: [
        "ReactJs",
        "Nextjs",
        "TailwindCSS",
        "Express",
        "supabase",
        "Oauth 2.0",
        "Nodejs",
        "monorepo",
        "groq",
        "gcp",
        "mcp",
      ],
      description:
        "Automate your emailing work via ai chat or on autopilot mode, whether you are a brand automating email for help or support or startup hiring employees work on what you ask for.",
    },
    {
      img: "backendDirectorygeneratorImg.jpg",
      title: "Expressify",
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
        "Expressify is a backend express based backend directory generator, creating custom backend directory where this project can ease the process of creating directories and files for the Node, Express And MongoDB, fill out the form with your custom file_Name click on generate and get the ready to code backend directory.",
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
      img: "learnLiftt.png",
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
      title: "Expressify 2.0",
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
        "Just like what Expressify does it it create an directory and folder with customised fileName but with Expressify 2.0 you can use any file extention based on the use case for example, .java, .js, .ts, .py, .c and more for creating custom backend directory where this project can ease the process of creating directories and files for the Node, fill out the form with your custom file_Name click on generate and get the ready to code backend directory.",
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

  // Spotify Player
  spotifyTracks: [
    {
      id: 1,
      title: "Get It Done",
      artist: "Dashawn Jordan, Blxst",
      spotifyUrl: "https://open.spotify.com/track/0Fx3I1X3w5RgyX77K1RgXC",
      audioUrl: "https://p.scdn.co/mp3-preview/a7e40d846bedb3489c4f26eb9d582d87b2a8dfe2",
    },
    {
      id: 2,
      title: "EYES CLOSED",
      artist: "MIKE DEAN",
      spotifyUrl: "https://open.spotify.com/track/1oErbrHCzqVrMwvQy2VmON",
      audioUrl: "https://p.scdn.co/mp3-preview/fe5d90b846665ab4c345e6727e58a75cb235dac3",
    },
    {
      id: 3,
      title: "Smile",
      artist: "G-Unit",
      spotifyUrl: "https://open.spotify.com/track/4vp9cBkT5bsawqEXaVmkf6",
      audioUrl: "https://p.scdn.co/mp3-preview/d4084d3b13e378733bda5097af76c0449e21ce50",
    },
  ],
  currentTrackIndex: 0,
  isPlaying: false,

  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentTrackIndex: (index) => set({ currentTrackIndex: index }),

  nextTrack: () => {
    const { spotifyTracks, currentTrackIndex } = get();
    set({ currentTrackIndex: (currentTrackIndex + 1) % spotifyTracks.length });
  },

  prevTrack: () => {
    const { spotifyTracks, currentTrackIndex } = get();
    set({ currentTrackIndex: (currentTrackIndex - 1 + spotifyTracks.length) % spotifyTracks.length });
  },
}));

export default useStore;
