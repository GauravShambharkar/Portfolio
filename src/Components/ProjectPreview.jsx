import React from "react";

const ProjectPreview = ({ setPreview, preview, project }) => {
  return (
    <>
      <div
        onClick={() => setPreview(!preview)}
        className="w-full h-screen fixed top-0 right-0 bg-[#0000009d] allcenter z-60 "
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="border border-[#414141] cursor-pointer w-150 p-5 rounded-2xl bg-black flex flex-col gap-5 "
        >
          <a target="_blank" href={project.link}>
            <img
              src={project.img}
              alt=""
              className={
                project.img
                  ? "w-full rounded-xl"
                  : "w-full h-full rounded-xl bg-[#414141]"
              }
            />
          </a>
          <div className="flex justify-between">
            <div className="text-sm">
              <h3 className="text-white">{project.title}</h3>
              <h5 className="txtgray  ">{project.description}</h5>
            </div>
            <a className=" text-white text-sm flex gap-1" href="">
              Live{project.live}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPreview;
