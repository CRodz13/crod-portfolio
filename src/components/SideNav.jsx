import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill, BsInfoSquareFill } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    { icon: AiOutlineHome, label: "Home", href: "#main" },
    { icon: BsInfoSquareFill, label: "About", href: "#about" },
    { icon: GrProjects, label: "Work", href: "#work" },
    { icon: AiOutlineProject, label: "Projects", href: "#projects" },
    { icon: BsFillPersonLinesFill, label: "Resume", href: "#main" },
    { icon: AiOutlineMail, label: "Contact", href: "#contact" },
  ];

  return (
    <div>
      {nav ? (
        <FaTimes
          onClick={handleNav}
          smooth
          duration={500}
          size={30}
          className="absolute top-4 right-4 z-[99] md:hidden hover:fill-green-400 hover:scale-110 ease-in duration-200"
        />
      ) : (
        <FaBars
          onClick={handleNav}
          smooth
          duration={500}
          size={30}
          className="absolute top-4 right-4 z-[99] md:hidden hover:fill-green-400 hover:scale-110 ease-in duration-200"
          data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1300"
        />
      )}
      {
        //This is a Ternary operator
        nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            {links.map((link, index) => (
              <a
                key={index}
                onClick={handleNav}
                href={link.href}
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        ) : (
          ""
        )
      }
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 transition-none"
            > 
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;