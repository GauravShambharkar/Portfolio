import React from "react";
import LogoLoop from "../Components/AnimationComponents/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiMongoose,
  SiGithub,
  SiFigma,
  SiShadcnui,
} from "react-icons/si";

const Skills = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: null,
    },
    {
      node: <SiShadcnui />,
      title: "ShadCnUI",
      href: null,
    },
  ];

  const frameWork = [
    {
      node: <SiPrisma />,
      title: "Prisma ORM",
      href: "https://prisma.io",
    },
    {
      node: <SiNodedotjs />,
      title: "Nodejs",
      href: "https://nodejs.org",
    },
    {
      node: <SiExpress />,
      title: "Expressjs",
      href: "https://expressjs.com",
    },
    {
      node: <SiMysql />,
      title: "MySQL",
      href: "https://mysql.com",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
      href: "https://mongodb.com",
    },

    {
      node: <SiGithub />,
      title: "GitHub",
      href: null,
    },
    {
      node: <SiFigma />,
      title: "Figma",
      href: null,
    },
  ];

  // Alternative with image sources
  //   const imageLogos = [
  //     {
  //       src: "/logos/company1.png",
  //       alt: "Company 1",
  //       href: "https://company1.com",
  //     },
  //     {
  //       src: "/logos/company2.png",
  //       alt: "Company 2",
  //       href: "https://company2.com",
  //     },
  //     {
  //       src: "/logos/company3.png",
  //       alt: "Company 3",
  //       href: "https://company3.com",
  //     },
  //   ];

  return (
    <>
      <div className="w-full xcenter borderlight">
        <div className="w-190 flex-col text-white borderlight  p-4 gap-3 ">
          <h1>Skills: </h1>
          <LogoLoop
            className="mt-2 h-fit"
            logos={techLogos}
            speed={30}
            direction="right"
            logoHeight={35}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="black"
            ariaLabel="Technology partners"
          />
          <LogoLoop
            className="mt-2 h-fit"
            logos={frameWork}
            speed={30}
            direction="left"
            logoHeight={35}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="black"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
