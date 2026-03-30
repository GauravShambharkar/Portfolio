import React, { useEffect, useState } from "react";
import { SiGriddotai } from "react-icons/si";

const Profile = () => {
  const profilePics = ["berserk.jpg", "metaversChar1.gif", "metaversChar2.gif"];

  const [randomProfile, setrandomProfile] = useState();

  function changePic() {
    const randomPics =
      profilePics[Math.floor(Math.random() * profilePics.length)];
    setrandomProfile(randomPics);
  }

  useEffect(() => {
    changePic();
  }, []);

  return (
    <>
      <div className="w-full xcenter ">
        <div className="w-190 h-42 flex">
          <div className="w-52 h-full allcenter">
            {/* <a href="" className="w-full">
              <img
                src={randomProfile}
                alt=""
                className="w-full rounded-full object-fill "
              />
            </a> */}
            <div className="w-full h-full allcenter max-[800px]:border-none border-2 border-dashed rounded-full border-[#8080804c]">
              <SiGriddotai className="text-white object-fill size-15 max-[550px]:size-6 max-[450px]:size-8 " />
            </div>
          </div>
          <div className="flex flex-col text-[14px] xend p-2 w-full h-full">
            <h1 className="text-white">Gaurav Shambharkar</h1>
            <h1 className="txtgray">Full Stack developer | UI/UX</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
