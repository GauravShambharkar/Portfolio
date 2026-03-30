import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full xcenter ">
        <div className="w-190 text-white flex-col borderb flex p-4 gap-3 ">
          <h1 className="text-md font-medium">About </h1>
          <h1 className="text-justify txtgray text-sm">
            Hello, I’m Gaurav. I’m interested in full-stack development and have
            been learning the MERN stack and Java, Spring Boot. I enjoy
            exploring new tools, improving my skills, and building projects that
            connect both logic and design in a simple way. I have hands-on
            experience with React, Node.js, Express, and MongoDB, along with
            modern tools like Redux, Tailwind CSS, Prisma, and Mongoose.
            <br />
            <br /> My focus is on writing clean, maintainable code, creating
            responsive layouts, and building applications that are both scalable
            and user-friendly.
            <br />
            <br />
            <span className="text-[#e0e0e0] ">
              Some of my projects include:
            </span>
            <br />
            Movie Streaming Platform – built with React, Tailwind CSS, Redux,
            and TMDB API, where I designed a responsive UI, implemented global
            state management, and optimized performance for mobile users.
            <br />
            <br />
            Node.js Backend Generator – a self-led project that allows users to
            dynamically generate backend folder structures and boilerplate code,
            demonstrating client-server integration and real-world backend
            utility. Beyond coding, I value problem-solving, attention to
            detail, and collaboration.
            <br />
            <br /> I believe in growing step by step, experimenting with ideas,
            and turning them into projects that make a difference. My journey is
            about becoming a well-rounded developer who can contribute across
            front-end, back-end, and databases while continuously learning and
            improving.
            <br />
            <br />
            Beyond work, I love exploring new technologies and turning ideas
            into reality through personal projects.
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
