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
  SiOracle,
  SiSpringboot,
  SiRedis,
  SiAdonisjs,
  SiGooglegemini,
  SiReactrouter,
} from "react-icons/si";

const Skills = () => {
  const techLogos = [
    {
      node: <SiReact className="text-[#3499ff]" />,
      title: "React",
      href: "https://react.dev",
    },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript className="text-[#3776ff]" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss className="text-sky-400" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiJavascript className="text-yellow-300" />,
      title: "JavaScript",
      href: null,
    },
    {
      node: <SiShadcnui className="size-5" />,
      title: "ShadCnUI",
      href: null,
    },
    {
      node: <SiOracle className="text-orange-600" />,
      title: "JAVA",
      href: null,
    },
    {
      node: <SiReactrouter className="text-red-400" />,
      title: "Reactrouter",
      href: null,
    },
  ];

  const frameWork = [
    {
      node: <SiPrisma className="text-[#0C344B]" />,
      title: "Prisma ORM",
      href: "https://prisma.io",
    },
    {
      node: <SiNodedotjs className="text-[#539E43]" />,
      title: "Nodejs",
      href: "https://nodejs.org",
    },
    {
      node: <SiExpress className="text-[#ffffff]" />,
      title: "Expressjs",
      href: "https://expressjs.com",
    },
    {
      node: <SiMysql className="text-[#00758F]" />,
      title: "MySQL",
      href: "https://mysql.com",
    },
    {
      node: <SiSpringboot className="text-[#6DB33F]" />,
      title: "SpringBoot",
      href: null,
    },
    {
      node: <SiMongodb className="text-[#47A248]" />,
      title: "MongoDB",
      href: "https://mongodb.com",
    },
    {
      node: <SiGithub className="text-[#d8d8d8]" />,
      title: "GitHub",
      href: null,
    },
    {
      node: <SiFigma className="text-[#A259FF]" />,
      title: "Figma",
      href: null,
    },
    {
      node: <SiRedis className="text-[#DC382D]" />,
      title: "Redis",
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
      <div className="w-full xcenter ">
        <div className="w-190 max-[750px]:w-full text-white borderb p-4 flex flex-col gap-8 ">
          <h1>Skills:</h1>
          <LogoLoop
            className="h-fit "
            logos={techLogos}
            speed={30}
            direction="right"
            logoHeight={25}
            gap={40}
            pauseOnHover
            // scaleOnHover
            fadeOut
            fadeOutColor="#09090B"
            ariaLabel="Technology partners"
          />
          <LogoLoop
            className="h-fit "
            logos={frameWork}
            speed={30}
            direction="left"
            logoHeight={25}
            gap={40}
            pauseOnHover
            // scaleOnHover
            fadeOut
            fadeOutColor="#09090B"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
