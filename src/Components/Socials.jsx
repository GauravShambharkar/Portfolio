import { Github, Linkedin, MoveUpRight, X } from "lucide-react";
import React, { useEffect, useState, Suspense } from "react";
import useStore from "./Global/Store";
import { h1 } from "motion/react-client";

const Socials = () => {
  const [socials, setSocials] = React.useState([
    {
      logo: "/github.webp",
      username: "gaurav shambharkar",
      platform: "Github",
      profileurl: "https://github.com/GauravShambharkar",
    },
    {
      logo: "/linkedin.webp",
      username: "Gaurav Shambharkar",
      platform: "Linkedin",
      profileurl: "https://www.linkedin.com/in/gauravsjobprofile/",
    },
    {
      logo: "/x.webp",
      username: "Gv",
      platform: "X",
      profileurl: "https://x.com/Gv4Real",
    },
    {
      logo: null,
      username: null,
      platform: null,
      profileurl: null,
      bg: "8bitRamen.gif",
    },
  ]);
  const [randomGifs, setRandomGifs] = useState();

  // const {socials} = useStore(store=>store.socials)
  const gifs = ["inouske.gif", "samurai.gif"];

  useEffect(() => {
    const RandomGifs = gifs[Math.floor(Math.random() * gifs.length)];
    setRandomGifs(RandomGifs);
    console.log(RandomGifs);
  }, []);

  return (
    <>
      <div className="w-full  xcenter  ">
        <div className="w-190 p-4 flex flex-col borderb">
          <h1 className="text-md font-medium text-white">Socials </h1>
          <div className="grid py-4 grid-cols-2 grid-rows-2 gap-5 text-[14px] text-white max-[750px]:grid-cols-1">
            {socials.map((item, index) => {
              return (
                <div
                  onClick={() => window.open(item.profileurl, "_blank")}
                  key={index}
                  className={
                    !item.logo
                      ? "flex justify-between ycenter cursor-pointer p-2 rounded-2xl hide-on-mobile"
                      : "flex justify-between ycenter cursor-pointer border p-2 border-[#464646] rounded-2xl"
                  }
                  style={
                    !item.logo && item.bg
                      ? {
                          backgroundImage: `url(${randomGifs})`,
                          backgroundSize: "auto",
                          backgroundPosition: "center -163px", //for inouske
                          // backgroundPosition: "center -146px", // for 8bit ramen
                          width: "100%",
                          height: "100%",
                        }
                      : {}
                  }
                >
                  <div className="flex gap-2 yend p-1">
                    <div className="border-2 rounded-xl border-[#202020] overflow-hidden">
                      <img
                        src={item.logo}
                        alt={item.platform}
                        className={!item.logo ? null : "size-11  allcenter"}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <h1 className="cursor-pointer hover:underline">
                        {item.platform}
                      </h1>
                      <h1 className="txtgray">{item.username}</h1>
                    </div>
                  </div>
                  {!item.logo ? null : <MoveUpRight className="size-4" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
