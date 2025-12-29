import React, { useEffect, useState } from "react";
import ProjectPreview from "./ProjectPreview";
import { MdOnlinePrediction } from "react-icons/md";
import useStore from "./Global/Store";
import { Github } from "lucide-react";
import ShinyText from "./AnimationComponents/ShinyText";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ReactGA from "react-ga4";
import { AnimatePresence } from "motion/react";
import { CiGrid41 } from "react-icons/ci";
import { LuRows4 } from "react-icons/lu";
import { motion } from "motion/react";

const Projects = () => {
  const [preview, setPreview] = useState(false);
  const [clickedProject, setClickedProject] = useState([]);

  // store
  const projects = useStore((state) => state.projects);

  const [ShowAll, setShowAll] = useState(false);

  const ShowMore = ShowAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    console.log(projects);
  }, []);

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
          <div className="flex items-center justify-between">
            <h1>Projects:</h1>
            <div className="flex gap-2">
              <div
                onClick={() => ChangeLayout("grid")}
                className={`border p-1.5 cursor-pointer inset-shadow-gray-500 ${
                  Layout === "grid" ? "text-white" : "text-[#989898]"
                } inset-shadow-sm  hover:bg-[#323232] transition-all duration-300 ease-in-out rounded-lg allcenter border-[#3c3c3c]`}
              >
                <CiGrid41 />
              </div>
              <div
                onClick={() => ChangeLayout("rows")}
                className={`border cursor-pointer p-1.5 inset-shadow-gray-500 ${
                  Layout === "rows" ? "text-white" : "text-[#989898]"
                } inset-shadow-sm  hover:bg-[#323232] transition-all duration-300 ease-in-out rounded-lg allcenter border-[#3c3c3c]`}
              >
                <LuRows4 className="stroke-1" />
              </div>
            </div>
          </div>

          {/* cards rendering from this code */}
          {Layout === "grid" ? (
            <motion.div
              initial={{ opacity: 0, y: 9 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="gap-4 border-white grid grid-cols-2 max-[700px]:grid-cols-1 "
            >
              {ShowMore.map((items, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handlePreview(items, index)}
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
            </motion.div>
          ) : (
            <div className="gap-4 border-white flex flex-col max-[700px]:grid-cols-1 ">
              {ShowMore.map((items, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handlePreview(items, index)}
                    className="cursor-pointer text-sm flex flex-col justify-between gap-4 rounded-xl "
                  >
                    {/* {items.img ? (
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
                    )} */}

                    <div className="flex gap-2 justify-between ycenter hover:bg-gray transition-all ease-in-out ">
                      <div className="flex gap-1 border border-dashed border-[#80808076] inset-shadow-sm inset-shadow-gray-600 px-2 rounded-md ">
                        {index + 1}.{" "}
                        <h3 className="text-[#969696]">{items.title}</h3>
                        {/* <h5 className="txtgray">
                          {items.description.length > 80
                            ? items.description.slice(0, 90)
                            : items.description}
                          ...
                        </h5> */}
                      </div>
                      <Github className="size-4 shrink-0" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* show all cards code */}
          <div className="border-white text-sm xcenter ">
            <button
              onClick={() => setShowAll(!ShowAll)}
              className="border p-2 px-3 inset-shadow-gray-500 inset-shadow-sm cursor-pointer hover:bg-[#323232] transition-all duration-300 ease-in-out rounded-lg allcenter border-[#3c3c3c]"
            >
              {ShowAll ? (
                <div className="ycenter  gap-2">
                  Show Less
                  <IoIosArrowUp />
                </div>
              ) : (
                <div className="gap-2 ycenter ">
                  Show More
                  <IoIosArrowDown />
                </div>
              )}
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {preview && (
            <ProjectPreview
              key="project-preview"
              project={clickedProject}
              setPreview={setPreview}
              preview={preview}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Projects;
