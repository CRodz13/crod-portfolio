import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import headshotImg from "../assets/headshot.jpg";

const Main = () => {
  return (
    <div className="min-h-screen">
      <img
        className="absolute object-cover w-full h-full animate__animated animate__bounceInDown animate__delay-1s"
        src={headshotImg}
        alt=""
      />
      <div className="absolute w-full h-full bg-white/25 flex justify-center items-center">
        <div className="mr-14 animate__animated animate__fadeInUp animate__delay-2s">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            I'm Chris Rodriguez
          </h1>
          <h2 className="flex text-3xl md:text-5xl pt-4 pr-12 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Coder",
                1000,
                "Developer",
                2000,
                "Programmer",
                2000,
                "Father",
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                color: "limegreen",
              }}
            />
          </h2>
          <div className="flex justify-between pt-10 max-w-[200px] w-full">
            <a
              href="https://twitter.com/crodz13"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter
                className="cursor-pointer text-[#00acee] md:hover:scale-[2] ease-in duration-200"
                size={30}
              />
            </a>
            <a
              href="https://linkedin.com/in/chris-rodriguez-ba02b6241"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedinIn
                className="cursor-pointer text-[#0072b1] md:hover:scale-[2] ease-in duration-200"
                size={30}
              />
            </a>
            <a
              href="https://github.com/crodz13"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub
                className="cursor-pointer text-[#171515 ] md:hover:scale-[2] ease-in duration-200"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
