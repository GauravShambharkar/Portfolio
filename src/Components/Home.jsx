import React, { useRef } from "react";
import { easeInOut, motion, stagger } from "motion/react";
import { delay } from "motion";

const Home = () => {
  const RightNavBarContainer_Animation = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        staggerChildren: 0.15,
        // ease: "easeInOut"
      },
    },
  };



  return (
    <>
      <div className="w-[95%] border mx-auto relative ">
        {/* <div className="w-[1425px] h-[1324px] absolute -z-10 ">
          <div className="fixed w-[1425px] h-[1324px] bg-blend-luminosity mx-auto left-0 right-0 -top-200 bg-[black] rounded-full" />
        </div> */}

        <div className="headerContainer mx-auto ">
          <h1 className="text-center text-9xl font-extrabold bg-blend-color-burn z-10 text-[#ca2f2f] tracking-tighter max-sm:text-5xl ">
            MYSELF GAURAV,
          </h1>
          <div className="paraContainer border flex  ">
            <p className="w-[50%] border leading-none ml-50 z-10 text-[#7a7a7a] max-[450px]:text-[12px] max-[400px]:ml-3 max-sm:w-80 max-[850px]:text-[12px] max-[850px]:ml-3">
              I am a{" "}
              <span className="text-[#ffffff] font-light">
                Full-Stack Developer
              </span>{" "}
              a passionate and creative with my craft gets curious about
              everything that gets my attention I thrive on implimenting the
              ideas. I embrace challenges as opportunities to learn and grow as
              a developer.
            </p>
          </div>

          <div className="buttonContainer flex justify-center border py-2 max-sm:justify-start max-sm:px-2 ">
            <div className="w-[71%] border ">
              <button className="tracking-tighter max-sm:text-[12px] animate-pulse cursor-pointer w-fit font-bold text-[#FF0000] shadow-white/50  shadow-lg bg-[white] rounded-lg  px-3 py-1">
                Hire For Work
              </button>
            </div>
          </div>
        </div>

        <div className="navContainer flex border justify-between items-center max-[430px]:h-142 ">
          <div className="leftSide w-fit fixed h-fit z-10  top-80 leading-none flex flex-col gap-0.5  text-white tracking-tighter font-bold max-sm:hidden  ">
            <a className="hover:text-[#FF0000] transition ease-in-out duration-300  cursor-pointer w-fit">
              HOME
            </a>
            <a className="cursor-pointer  w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              ABOUT ME
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              SKILLS
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              RECENT WORK
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              RESUME
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              EDUCATION
            </a>
          </div>
          <div className="center flex w-full justify-center">
            <div className="middle z-10 w-[300px] max-sm:w-[200px]  ">
              <img
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 200 }}
                transition={{ duration: 0.6 }}
                className=""
                src="./ps-bg-removed.png"
                alt=""
              />
            </div>
            <div className="blurDot size-120 -z-0 rounded-full blur-3xl text-[#FF0000] absolute bg-black/40 max-sm:size-60">
              O
            </div>
          </div>

          {/* right side nav bar container */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={RightNavBarContainer_Animation}
            className="rightSide flex flex-col items-end gap-0.5 w-fit fixed right-9 z-10 h-fit top-85 leading-none text-white tracking-tighter font-bold max-sm:hidden"
          >
            <motion.a 
              className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300"
            >
              GIT-HUB
            </motion.a>
            <motion.a
              className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300"
            >
              LINKEDIN
            </motion.a>
            <motion.a 
              className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300"
            >
              X
            </motion.a>
            <motion.a  
              className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300"
            >
              EMAIL
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;