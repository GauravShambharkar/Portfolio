import React from "react";

const Profile = () => {
  return (
    <>
      <div className="w-full xcenter borderlight">
        <div className="w-190 h-42 borderlight flex">
          <div className="w-42 h-full borderlight">
            <a href="">img</a>
          </div>
          <div className="flex flex-col text-[14px] xend p-2 borderlight w-full h-full">
            <h1 className="text-white">Profile user</h1>
            <h1 className="text-white">Profile Role</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
