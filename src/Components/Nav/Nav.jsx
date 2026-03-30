import { Github, Linkedin, MessageCircleMoreIcon } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";

const Nav = () => {
  return (
    <>
      <div className="w-full  xcenter fixed top-0 z-50">
        <div className="w-190 h-12 bg-[#09090B] borderb text-xl ycenter px-2 xcenter gap-2  xbetween text-white ">
          <h1 className="bg-gradient-to-bl  from-[#ffffff]  to-[#686868] font-bold bg-clip-text text-transparent">
            Gv.
          </h1>
          <div className="flex gap-2 font-light ">
            {/* <a
              target="_blank"
              href="https://github.com/GauravShambharkar"
              className="border p-1.5 hover:bg-[#323232] transition-all duration-300 ease-in-out rounded-lg allcenter border-[#3c3c3c]"
            >
              <Github className="lucide_icon" />
            </a> */}
            <a
              target="_blank"
              href="https://wa.me/918261050623"
              className="border p-1.5 inset-shadow-gray-500 inset-shadow-sm  hover:bg-[#323232] transition-all duration-300 ease-in-out rounded-lg allcenter border-[#3c3c3c]"
            >
              {/* <MessageCircleMoreIcon className="lucide_icon" /> */}
              <FaWhatsapp className="lucide_icon" />
            </a>
            {/* <div className="bg-white allcenter p-1">
              <UseAnimations animation={github} />
            </div> */}
            {/* <a
              target="_blank"
              href="https://www.linkedin.com/in/gauravsjobprofile/"
              className="border p-1.5 hover:bg-[#323232] transition-all duration-300 ease-in-out rounded-lg allcenter border-[#3c3c3c] "
            >
              <Linkedin className="lucide_icon" />
            </a> */}
            {/* <a href="" className="">
              theme
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
