import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full xcenter ">
        <div className="w-190 text-white flex-col borderb flex p-4 gap-3 ">
          <h1 className="text-md font-medium">About </h1>
          <h1 className="text-justify txtgray text-sm">
            A full-stack developer focused on building scalable, user-friendly
            web applications.
            <br />
            <br />
            I work with the MERN stack developer combining strong backend logic
            with clean, responsive UI using React, Nextjs, Tailwind, and modern
            tools like Redux and Prisma.
            <br />
            <br />
            I enjoy turning ideas into real products — from a backend generator
            that simplifies developer workflows to a simple youtube video
            context summarizer.
            <br />
            <br />
            My goal is simple: to build efficient systems, write clean and
            production level code, and create digital experiences that actually
            deliver value through ideas.
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
