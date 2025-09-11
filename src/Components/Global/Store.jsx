import { MdOnlinePrediction } from "react-icons/md";
import { create } from "zustand";

const useStore = create((set) => ({
  projects: [
    {
      img: "",
      title: "Backend directory generator",
      link: "https://github.com/GauravShambharkar/Nodejs-Backend-Directory-Generator",
      live: <MdOnlinePrediction className="text-[#68ff81] size-5" />,
      liveLink: "",
      description:
        "Node js backend directory generator, creating custom backend directory where this project can ease the process of creating directories and files for the Node, Express And MongoDB, fill out the form with your custom file_Name click on generate and get the ready to code backend directory.",
    },
    {
      img: "",
      title: "Learn lift",
      link: "https://github.com/GauravShambharkar/LearnLift",
      live: <MdOnlinePrediction className="text-[#68ff81] size-5" />,
      liveLink: "",
      description: "Platform, that help explore new learning path",
    },
  ],
}));

export default useStore;
