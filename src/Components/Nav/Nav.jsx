import React from "react";

const Nav = () => {
  return (
    <>
      <div className="w-full xcenter fixed top-0 z-50">
        <div className="w-190 h-12 bg-[#09090B]/30 backdrop-blur-sm borderb text-xl ycenter px-2 xcenter gap-2 xbetween text-white">
          <h1 className="bg-gradient-to-bl from-[#ffffff] to-[#686868] font-bold bg-clip-text text-transparent">
            Gv.
          </h1>
          <div className="max-[750px]:hidden"></div>
        </div>
      </div>
    </>
  );
};

export default Nav;
