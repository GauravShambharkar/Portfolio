import { MdOnlinePrediction } from "react-icons/md";
import { create } from "zustand";

const useStore = create((set) => ({
  projects: [
    {
      img: "backendDirectorygeneratorImg.jpg",
      title: "Backend directory generator",
      link: "https://github.com/GauravShambharkar/Nodejs-Backend-Directory-Generator",
      live: <MdOnlinePrediction className="text-[#68ff81] size-5" />,
      liveLink: "",
      projectStack: ["ReactJs", "TailwindCSS", "ShadCn", "Express", "Nodejs", "Fs-extra", "Archiver",],
      description:
        "Node js backend directory generator, creating custom backend directory where this project can ease the process of creating directories and files for the Node, Express And MongoDB, fill out the form with your custom file_Name click on generate and get the ready to code backend directory.",
    },
    {
      img: "learnLift.png",
      title: "Learn lift",
      link: "https://github.com/GauravShambharkar/LearnLift",
      live: <MdOnlinePrediction className="text-[#68ff81] size-5" />,
      liveLink: "",
      projectStack: ["ReactJs", "TailwindCSS", "ShadCn", "Express", "Nodejs", "MongoDb", "Mongoose" ,"JWT", "PostMan",],
      description: "Platform, that help explore new learning path",
    },
    {
      img: "MulitbackendDirectorygeneratorImg.jpg",
      title: "Multi tech-stack Backend directory generator",
      link: "https://github.com/GauravShambharkar/Multi-techStack-backend-directory-Generator",
      live: <MdOnlinePrediction className="text-[#68ff81] size-5" />,
      liveLink: "",
      projectStack: ["ReactJs", "TailwindCSS", "ShadCn", "Express", "Nodejs", "Fs-extra", "Archiver",],
      description:
        "just like waht NEM does it it create an directory and folder with customised fileName but here you can use any .exe for your file .java, .js, .ts, .py, .c any, creating custom backend directory where this project can ease the process of creating directories and files for the Node, fill out the form with your custom file_Name click on generate and get the ready to code backend directory.",
    },
    {
      img: "MulitbackendDirectorygeneratorImg.jpg",
      title: "My portfolio",
      link: "https://github.com/GauravShambharkar/Multi-techStack-backend-directory-Generator",
      live: <MdOnlinePrediction className="text-[#68ff81] size-5" />,
      liveLink: "",
      projectStack: ["ReactJs", "TailwindCSS", "ShadCn", "Express", "Nodejs", "Fs-extra", "Archiver",],
      description:
        "just like waht NEM does it it create an directory and folder with customised fileName but here you can use any .exe for your file .java, .js, .ts, .py, .c any, creating custom backend directory where this project can ease the process of creating directories and files for the Node, fill out the form with your custom file_Name click on generate and get the ready to code backend directory.",
    },
  ],
  
}));

export default useStore;
