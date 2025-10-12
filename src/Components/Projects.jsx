import React, { useEffect, useState } from "react";
import ProjectPreview from "./ProjectPreview";
import { MdOnlinePrediction } from "react-icons/md";
import useStore from "./Global/Store";
import { Github } from "lucide-react";
import ShinyText from "./AnimationComponents/ShinyText";

const Projects = () => {
  const [preview, setPreview] = useState(false);
  const [clickedProject, setClickedProject] = useState([]);
  const projects = useStore((state) => state.projects);

  const [ShowAll, setShowAll] = useState(false);

  const ShowMore = ShowAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    console.log(projects);
  }, []);

  const handlePreview = (item) => {
    setPreview(!preview);
    setClickedProject(item);
    console.log("clicked");
  };

  return (
    <>
      <div className="w-full xcenter relative">
        <div className="w-190  text-white borderb p-4 flex flex-col gap-5 ">
          <h1>Projects:</h1>
          <div className=" gap-4 border-white grid grid-cols-2 max-[700px]:grid-cols-1 ">
            {ShowMore.map((items, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handlePreview(items)}
                  className="border-[#323232]  border cursor-pointer  p-4 text-sm flex flex-col justify-between gap-4 rounded-2xl "
                >
                  {items.img ? (
                    <span className="w-full h-46 max-[700px]:h-78 max-[550px]:h-63 max-[459px]:h-52 max-[410px]:h-46">
                      <img
                        src={items.img || null}
                        alt=""
                        className={
                          items.img
                            ? "w-full h-full rounded-xl"
                            : "w-full h-full rounded-xl bg-gray-900 "
                        }
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
              );
            })}
          </div>
          <div className="border-white text-sm xcenter ">
            <button
              onClick={() => setShowAll(!ShowAll)}
              className="border px-3 py-1.5 inset-shadow-gray-500 inset-shadow-sm cursor-pointer hover:bg-[#323232] transition-all duration-300 ease-in-out rounded-lg allcenter border-[#3c3c3c]"
            >
              {ShowAll ? "Show Less" : "Show More"}
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
