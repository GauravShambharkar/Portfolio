import React, { useEffect, useRef, useState } from "react";
import ProjectPreview from "../ProjectPreview/ProjectPreview";
import useStore from "../Global/Store";
import { Github } from "lucide-react";
import ShinyText from "../AnimationComponents/ShinyText";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import BorderGlow from "../Projects/BorderGlow";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = () => {
  const [preview, setPreview] = useState(false);
  const [clickedProject, setClickedProject] = useState([]);
  const scrollDown = useRef(null);

  // store
  const projects = useStore((state) => state.projects);

  const [ShowAll, setShowAll] = useState(false);

  const ShowMore = ShowAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    if (ShowAll && scrollDown.current) {
      scrollDown.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [ShowAll]);

  const handlePreview = (item, id) => {
    setPreview(!preview);
    setClickedProject(item);
    console.log(item.title, id);
  };

  const [Layout, setLayout] = useState("grid");
  function ChangeLayout(layout) {
    return setLayout(layout);
  }

  return (
    <>
      <div className="w-full xcenter relative">
        <div className="w-190  text-white borderb p-4 flex flex-col gap-5 ">
          <h1>Projects:</h1>
          <div className=" gap-4 border-white grid grid-cols-2 max-[700px]:grid-cols-1 ">
            {ShowMore.map((items, index) => {
              return (
                <BorderGlow
                  key={index}
                  glowRadius={40}
                  edgeSensitivity={50}
                  onClick={() => handlePreview(items)}
                  // className="border-[#323232]  border cursor-pointer  p-4 text-sm flex flex-col justify-between gap-4 rounded-2xl "
                >
                  <div
                    ref={scrollDown}
                    key={index}
                    onClick={() => handlePreview(items)}
                    className="border-[#323232]   cursor-pointer  p-4 text-sm flex flex-col justify-between gap-4 rounded-2xl "
                  >
                    {items.img ? (
                      <span className="w-full h-46 max-[700px]:h-78 max-[550px]:h-63 max-[459px]:h-52 max-[410px]:h-46">
                        <LazyLoadImage
                          alt={items.title}
                          src={items.img}
                          effect="blur"
                          className="w-full h-full rounded-xl object-cover"
                          wrapperClassName="w-full h-full"
                        />
                      </span>
                    ) : (
                      // card 4th
                      <div className="w-full h-46 rounded-xl bg-[#414141] allcenter text-sm text-white max-[700px]:h-78 max-[550px]:h-63 max-[459px]:h-52 max-[410px]:h-46 ">
                        <ShinyText
                          text={"Currently, no image available."}
                          className="text-[#aaaaaa]"
                        />
                      </div>
                    )}

                    <div className="flex justify-between ycenter">
                      <div className="">
                        <h3>{items.title}</h3>
                        <h5 className="txtgray">
                          {items.description.length > 40
                            ? items.description.slice(0, 40)
                            : items.description}
                          ...
                        </h5>
                      </div>
                      <Github className="size-4" />
                    </div>
                  </div>
                </BorderGlow>
              );
            })}
          </div>
          <div className="border-white text-sm xcenter ">
            <button
              onClick={() => setShowAll(!ShowAll)}
              className="border p-2 px-4 inset-shadow-gray-500 inset-shadow-sm cursor-pointer hover:bg-[#323232] transition-all duration-300 ease-in-out rounded-full allcenter border-[#444954]"
            >
              {ShowAll ? (
                <p className="ycenter text-xs gap-2">
                  Show Less
                  <IoIosArrowUp className="size-3" />
                </p>
              ) : (
                <p className="gap-2 ycenter text-xs">
                  Show More
                  <IoIosArrowDown className="size-3" />
                </p>
              )}
            </button>
          </div>
        </div>
        {preview && (
          <ProjectPreview
            project={clickedProject}
            setPreview={setPreview}
            preview={preview}
          />
        )}
      </div>
    </>
  );
};

export default Projects;
