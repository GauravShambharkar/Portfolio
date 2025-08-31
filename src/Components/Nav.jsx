import { Github, Linkedin } from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <>
      <div className="w-full borderlight xcenter fixed top-0 ">
        <div className="w-190 h-12 borderlight text-[14px] ycenter px-2 xcenter gap-2  xbetween text-white ">
          <a href="">logo</a>
          <div className="flex gap-2 font-light ">
            <a
              href=""
              className="border p-1 hover:bg-[#4b4b4b] transition-all duration-300 ease-in-out rounded-full"
            >
              <Github className="lucide_icon" />
            </a>
            <a
              href=""
              className="border p-1 hover:bg-[#4b4b4b] transition-all duration-300 ease-in-out rounded-full"
            >
              <Linkedin className="lucide_icon" />
            </a>
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
