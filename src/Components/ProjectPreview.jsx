import React from "react";

const ProjectPreview = ({ setPreview, preview, project }) => {
  return (
    <>
      <div
        onClick={() => setPreview(!preview)}
        className="w-full h-screen fixed top-0 right-0 bg-[#0000009d] allcenter"
      >
        <div className="border border-[#6f6f6f] w-150 p-5 rounded-2xl bg-black flex flex-col gap-5 ">
          <img
            src="public\humanWare.jpg"
            alt=""
            className="w-full rounded-xl "
          />
          <div className="text-sm">
            <h3 className="text-white">{project.title}</h3>
            <h5 className="txtgray">{project.description}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPreview;
