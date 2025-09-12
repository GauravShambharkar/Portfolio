import React from "react";

const Profile = () => {
  return (
    <>
      <div className="w-full xcenter ">
        <div className="w-190 h-42 flex">
          <div className="w-52 h-full allcenter">
            <a href="" className="w-full  ">
              <img
                src="berserk.jpg"
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
