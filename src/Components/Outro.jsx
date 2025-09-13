import React from "react";
import ShinyText from "./AnimationComponents/ShinyText";

const Outro = () => {
  return (
    <>
      <div className="w-full xcenter ">
        <div className="w-190 text-white p-4 xcenter gap-5 ">
          <h1 className="text-9xl relative bg-gradient-to-b  from-[#ffffff]  to-[#0e0e0e] inset-shadow-2xs font-bold max-[700px]:text-7xl bg-clip-text text-transparent">
            GAURAV.
          </h1>
          <ShinyText
            text="GAURAV."
            disabled={false}
            speed={5}
            className="custom-class text-9xl absolute bg-gradient-to-b  from-[#ffffff]  to-[#1b1b1b] inset-shadow-2xs font-bold max-[700px]:text-7xl bg-clip-text text-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default Outro;
