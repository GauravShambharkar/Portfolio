import { Code2, Mail, MapPin, Phone } from "lucide-react";
import { h1 } from "motion/react-client";
import React, { useState } from "react";

const Details = () => {
  const data = [
    {
      icon: <Code2 className="detail_icon_child" />,
      text: "Full Stack Developer & UI/UX Designer",
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
        <a
          target="_blank"
          href="tele:https://mail.google.com/mail/u/0/#inbox?compose=new"
        >
          +91-8432826130
        </a>
      ),
    },
  ];

  return (
    <>
      <div className="w-full border border-white xcenter">
        <div className="w-190 p-4 flex flex-col gap-2 border border-white text-white">
          {data.map((items, index) => {
            return (
              <div key={index} className="flex gap-2 ycenter ">
                <div className="detail_icon_parent">
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
