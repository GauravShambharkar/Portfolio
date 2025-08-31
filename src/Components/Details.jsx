import { Code2, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const Details = () => {
  const [data, setData] = useState([
    { icon: <Code2 className="detail_icon_child" />, text: "Full Stack Developer & UI/UX Designer" },
    { icon: <MapPin className="detail_icon_child" />, text: "hinganghat, Maharashtra, India" },
    { icon: <Mail className="detail_icon_child" />, text: "gauravs100kar@gmail.com" },
    { icon: <Phone className="detail_icon_child"/>, text: "+91-8432826130" },
  ]);

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
