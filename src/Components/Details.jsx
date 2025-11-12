import { Code2, Mail, MapPin, Phone } from "lucide-react";
import { h1 } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { TbFileCv } from "react-icons/tb";

const Details = () => {

  const Resume = "FSDev-4-11-25.pdf"


  const data = [
    {
      icon: <Code2 className="detail_icon_child" />,
      text: "Full Stack Developer & UI/UX Designer",
    },
    {
      icon: <LiaGraduationCapSolid className="detail_icon_child" />,
      text: "Bachelor of Engineering in ENTC, Sant Gadge Baba Amravati University",
    },
    {
      icon: <MapPin className="detail_icon_child" />,
      text: (
        <a
          className="hover:underline"
          target="_blank"
          href="https://maps.app.goo.gl/nYbwxineb73hpCpo7"
        >
          Hinganghat, Maharashtra, India
        </a>
      ),
    },
    {
      icon: <Mail className="detail_icon_child" />,
      text: (
        <a
          className="hover:underline"
          target="_blank"
          href="mailto:https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrkqZkFSpzhqbxKHDXffTfJstzLKBsCLrQlfLNQPgGDWsDCswJrHmSPWTxlJHRGNzQfDTQ"
        >
          gauravs100kar@gmail.com
        </a>
      ),
    },
    {
      icon: <Phone className="detail_icon_child" />,
      text: (
        <a href="tel:+8432826130" className="hover:underline">
          +91-8432826130
        </a>
      ),
    },
    {
      icon: <TbFileCv className="detail_icon_child" />,
      text: (
        <a target="_blank" href={Resume} className="flex hover:underline">
          <h1>My Resume</h1>
          <h1 className=" absolute text-[#efffe3] blur-sm animate-pulse">
            My Resume
          </h1>
        </a>
      ),
    },
  ];



  return (
    <>
      <div className="w-full  xcenter">
        <div className="w-190 p-4 flex flex-col gap-2 borderb text-white">
          {data.map((items, index) => {
            return (
              <div key={index} className="gap-2  ycenter ">
                <div className="detail_icon_parent flex-shrink-0">
                  <span>{items.icon}</span>
                </div>
                <h1 className="text-sm">{items.text}</h1>
              </div>
            );
          })}

          {/* <div className="flex gap-2 ycenter">
            <div className="detail_icon_parent">
              <Code2 className="detail_icon_child" />
            </div>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              className="text-sm"
            >
              gauravs100kar@gmail.com
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Details;
