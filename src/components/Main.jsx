import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import headshotImg from "../assets/headshot.jpg";

const Main = () => {
  return (
    <div id="main" >
      <img
        className="w-full h-screen object-cover"
        src={headshotImg}
        alt=""
        data-aos="fade-down"
        data-aos-duration="1300"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/25">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1
            className="sm:text-5xl text-4xl font-bold shadow-xl text-gray-800 transform"
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-delay="400"
          >
            I'm Chris Rodriguez
          </h1>
          <h2
            className="flex sm:text-3xl text-2xl shadow-xl pt-4 text-gray-800"
            data-aos="fade-down"
            data-aos-duration="1300"
            data-aos-delay="400"
          >
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
              style={{ fontSize: "1em", paddingLeft: "5px", color: "#4ade80" }}
            />
          </h2>
          <div
            className="flex justify-between pt-10 max-w-[200px] w-full"
            data-aos="fade-right"
            data-aos-duration="1300"
            data-aos-delay="400"
          >
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
              href="https://facebook.com/crodz13"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF
                className="cursor-pointer text-[#3b5998] md:hover:scale-[2] ease-in duration-200"
                size={30}
              />
            </a>
            <a
              href="https://instagram.com/crodz13"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram
                className="cursor-pointer text-[#d62976] md:hover:scale-[2] ease-in duration-200"
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
