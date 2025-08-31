import { Github, Linkedin, MoveUpRight, X } from "lucide-react";
import React from "react";

const Socials = () => {
  const [socials, setSocials] = React.useState([
    {
      logo: "https://assets.chanhdai.com/images/link-icons/liquid-glass/github.webp",
      username: "gaurav shambharkar",
      platform: "Github",
      profileurl: "https://github.com/GauravShambharkar",
    },
    {
      logo: "https://assets.chanhdai.com/images/link-icons/liquid-glass/linkedin.webp",
      username: "Gaurav Shambharkar",
      platform: "Linkedin",
      profileurl: "https://www.linkedin.com/in/gauravsjobprofile/",
    },
    {
      logo: "https://assets.chanhdai.com/images/link-icons/liquid-glass/x.webp",
      username: "Gv",
      platform: "X",
      profileurl: "https://x.com/Gv4Real",
    },
  ]);

  return (
    <>
      <div className="w-full borderlight xcenter  ">
        <div className="w-190 p-4 grid grid-cols-2 grid-rows-2 gap-5 text-[14px] borderlight text-white max-[750px]:grid-cols-1">
          {socials.map((item, index) => {
            return (
              <div
                onClick={() => window.open(item.profileurl, "_blank")}
                key={index}
                className=" flex justify-between ycenter cursor-pointer border p-2 border-[#bdbdbd7e] rounded-2xl "
              >
                <div className="flex gap-2 yend p-1">
                  <img
                    src={item.logo}
                    alt=""
                    className="size-11 cursor-pointer  allcenter"
                  />
                  <div className="flex flex-col ">
                    <h1 className="cursor-pointer hover:underline">
                      {item.platform}
                    </h1>
                    <h1 className="text-[#8c8c8c]">{item.username}</h1>
                  </div>
                </div>
                <MoveUpRight className="size-4" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Socials;
