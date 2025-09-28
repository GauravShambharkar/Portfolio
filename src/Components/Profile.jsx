import React, { useEffect, useState } from "react";

const Profile = () => {
  const profilePics = ["berserk.jpg", "multiProfile.gif"];

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
            <a href="" className="w-full  ">
              <img
                src={randomProfile}
                alt=""
                className="w-full rounded-full object-fill "
              />
            </a>
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
