import React, { useEffect, useState } from "react";
import ProjectPreview from "./ProjectPreview";
import { MdOnlinePrediction } from "react-icons/md";
import useStore from "./Global/Store";
import { Github } from "lucide-react";

const Projects = () => {
  const [preview, setPreview] = useState(false);
  const [clickedProject, setClickedProject] = useState([]);
  const projects = useStore((state) => state.projects);

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
      <div className="w-full xcenter borderlight relative">
        <div className="w-190 text-white borderlight p-4 flex flex-col gap-5 ">
          <h1>Projects:</h1>
          <div className=" gap-4 border-white grid grid-cols-2 max-[700px]:grid-cols-1 ">
            {projects.map((items, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handlePreview(items)}
                  className="border cursor-pointer border-[#414141] p-4 text-sm flex flex-col justify-between gap-4 rounded-2xl "
                >
                  <img
                    src={items.img || null}
                    alt=""
                    className={
                      items.img
                        ? "w-full rounded-xl"
                        : "w-full h-full rounded-xl "
                    }
                  />

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
