import React from "react";

const Nav = () => {
  return (
    <>
      <div className="w-full borderlight xcenter fixed top-0 ">
        <div className="w-190 h-12 borderlight ycenter px-2 xcenter gap-2  xbetween text-white ">
          <a href="">logo</a>
          <div className="flex gap-2 font-light ">
            <a href="" className="">github</a>
            <a href="" className="">theme</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
