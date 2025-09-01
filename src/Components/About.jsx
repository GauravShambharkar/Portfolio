import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full xcenter borderlight">
        <div className="w-190 text-white flex-col borderlight flex p-4 gap-3 ">
          <h1 className="text-lg font-semibold">About: </h1>
          <h1 className="text-justify txtgray text-sm">
            Hello, World! I am Gaurav — a Design Engineer passionate about
            creating high-performance, user-centric software solutions with
            intuitive and engaging designs. With 5+ years of experience, I
            specialize in building high-quality web and mobile applications
            using Next.js, React, TypeScript, and modern front-end technologies.
            <br />
            <br />
            Beyond work, I love exploring new technologies and turning ideas
            into reality through personal projects. One of my key projects,
            ZaDark, enhances the Zalo experience on PC and Web, surpassing
            80,000 downloads on SourceForge and 15,000 active users on the
            Chrome Web Store since 2022. I'm also the creator of React Wheel
            Picker — iOS-like wheel picker for React with smooth inertia
            scrolling and infinite loop support.
            <br />
            <br />
            It has earned 300+ stars on GitHub and was selected for Vercel Open
            Source Program summer 2025 cohort. Let's connect and collaborate!
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
