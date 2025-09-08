import React from "react";
import CurvedLoop from "../Components/AnimationComponents/CurvedLoop";

const Header = () => {
  return (
    <>
      <div className="w-full h-62 borderlight xcenter mt-12 ">
        <div className="w-190 px-2  allcenter text-[14px] borderlight overflow-hidden">
          {/* <a href="" className="text-white">
            Some logo
          </a> */}
          <CurvedLoop
            marqueeText="✦ Hire ME😭✦"
            speed={1}
            curveAmount={500}
            direction="right"
            interactive={true}
            className="custom-text-style"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
