import React from "react";
import CurvedLoop from "../Components/AnimationComponents/CurvedLoop";

const Header = () => {
  return (
    <>
      <div className="w-full h-62  xcenter mt-12 ">
        <div className="w-190 px-2 allcenter text-[14px] overflow-hidden">
          {/* <a href="" className="text-white">
            Some logo
          </a> */}
          <CurvedLoop
            marqueeText="✦ glad you're here"
            speed={1}
            curveAmount={500}
            direction="right"
            interactive={true}
            className="custom-text-style font-thin"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
