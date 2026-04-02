import React from "react";
import ShinyText from "../AnimationComponents/ShinyText";
import { Github } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "motion/react";

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
        <div
          onClick={(e) => e.stopPropagation()}
          className="border border-[#414141]  w-150 p-5 rounded-2xl bg-black flex flex-col gap-5 max-[700px]:w-95 "
        >
          <a target="_blank" href={project.link}>
            {project.img ? (
              <span className="w-full h-66">
                <LazyLoadImage
                  src={project.img}
                  alt={project.title}
                  effect="blur"
                  className="w-full rounded-xl object-cover"
                  wrapperClassName="w-full h-full"
                />
              </span>
            ) : (
              <div className="w-full h-48 rounded-xl bg-[#414141] allcenter text-sm text-white">
                <ShinyText
                  text={"Currently, no image available."}
                  className="text-[#393939]"
                />
              </div>
            )}
          </a>
          {/* project title descripttions  */}
          <div className="flex justify-between">
            <div className="text-sm">
              <h3 className="text-white">{project.title}</h3>
              <h5 className="txtgray  ">{project.description}</h5>
            </div>
            {project.live && (
              <a
                className="h-fit text-white text-sm flex gap-1"
                target="_blank"
                href={project.link}
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
                  className="text-white hover:bg-[#303030] transition-all ease-in-out duration-300 inset-shadow-gray-500 inset-shadow-sm px-2 py-1 rounded-lg text-[11px] bg-[#1a1a1a] "
                >
                  {items}
                </h3>
              );
            })}
          </div>
          <a target="_blank" href={project.link} className="w-fit">
            <button className="text-white cursor-pointer hover:bg-[#303030] transition-all ease-in-out duration-300 inset-shadow-gray-500 inset-shadow-sm px-2 py-1.5 rounded-lg text-[11px] bg-[#1a1a1a] w-fit flex gap-2 items-center ">
              Visit Repositotry
              <Github className="size-3.5" />
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectPreview;
