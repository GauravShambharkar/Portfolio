import React from "react";
import { SiGriddotai } from "react-icons/si";

const Profile = () => {
  return (
    <>
      <div className="w-full xcenter ">
        <div className="w-190 h-42 flex">
          <div className="w-52 h-full allcenter">
            <div className="w-full h-full allcenter max-[800px]:border-none border-2 border-dashed rounded-full border-[#8080804c]">
              <SiGriddotai className="text-white object-fill size-15 max-[550px]:size-6 max-[450px]:size-8 " />
            </div>
          </div>
          <div className="flex flex-col text-[14px] xend p-2 w-full h-full">
            <h1 className="text-white">Gaurav Shambharkar</h1>
            <h1 className="txtgray">Full Stack Developer | UI/UX</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
