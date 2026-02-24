import React from "react";
import ShinyText from "./AnimationComponents/ShinyText";
import { Github } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ProjectPreview = ({ setPreview, preview, project }) => {
  return (
    <>
      <motion.div
        onClick={() => setPreview(!preview)}
        className="w-full h-full fixed top-0 right-0 bg-[#0000009d] allcenter z-60 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
      >
        {/* card */}
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0, z: 16, scale: 0.98 }}
            animate={{ opacity: 1, z: 0, scale: 1 }}
            exit={{ opacity: 0, z: 8, scale: 0.985 }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 34,
              mass: 0.85,
            }}
            onClick={(e) => e.stopPropagation()}
            className="border border-[#414141]  w-150 p-5 rounded-2xl bg-black flex flex-col gap-5 max-[700px]:w-95"
          >
            <a target="_blank" href={project.link}>
              {project.img ? (
                <span className="w-full h-66 ">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className={
                      project.img
                        ? "w-full rounded-xl"
                        : "w-full h-full rounded-xl bg-[#414141] "
                    }
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                </span>
              ) : (
                <div className="w-full h-75 rounded-xl bg-[#414141] allcenter text-sm text-white max-[700px]:h-46">
                  <ShinyText
                    text={"Currently, no image available."}
                    className="text-[#393939]"
                  />
                </div>
              )}
            </a>
            {/* project title descripttions  */}
            <div className="flex justify-between">
              <div className="">
                <h3 className="text-white text-lg">{project.title}</h3>
                <h5 className="txtgray text-xs ">{project.description}</h5>
              </div>
              {project.live && (
                <a
                  target="_blank"
                  className="h-fit text-white text-sm flex gap-1"
                  href={project.liveLink}
                >
                  Live{project.live}
                </a>
              )}
            </div>
            {/* project stack */}
            <div className="flex gap-2 flex-wrap">
              {project.projectStack.map((items, index) => {
                return (
                  <h3
                    key={index}
                    className="text-white text-[10px] hover:bg-[#303030] transition-all ease-in-out duration-300 inset-shadow-gray-500 inset-shadow-sm px-2 py-1 rounded-lg bg-[#1a1a1a] "
                  >
                    {items}
                  </h3>
                );
              })}
            </div>
            <a target="_blank" href={project.link} className="w-fit">
              <button className="text-white text-[10px] cursor-pointer hover:bg-[#303030] transition-all ease-in-out duration-300 inset-shadow-gray-500 inset-shadow-sm px-2 py-1.5 rounded-lg bg-[#1a1a1a] w-fit flex gap-2 items-center ">
                Visit Repositotry
                <Github className="size-3.5" />
              </button>
            </a>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectPreview;
