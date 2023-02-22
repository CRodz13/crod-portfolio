import React, { useState } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import {
  BsFillPersonLinesFill,
  BsInfoSquareFill,
  BsBoxArrowInRight,
  BsBoxArrowInLeft,
} from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaBars, FaTools } from "react-icons/fa";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    { icon: <AiOutlineHome className="text-3xl"/>, name: "Home", path: "/" },
    { icon: <BsInfoSquareFill className="text-3xl"/>, name: "About", path: "/about" },
    { icon: <FaTools className="text-3xl"/>, name: "Tools", path: "/tools" },
    { icon: <MdWork className="text-3xl"/>, name: "Work", path: "/work" },
    { icon: <AiOutlineProject className="text-3xl"/>, name: "Projects", path: "/projects" },
    { icon: <BsFillPersonLinesFill className="text-3xl"/>, name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex absolute h-full w-screen overflow-hidden">
      <div
        style={{ width: isOpen ? "300px" : "72px" }}
        className="bg-black text-sky-400 transition-all duration-700"
      >
        <div className="flex items-center px-4 py-4">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="text-2xl"
          >
            CRod
          </h1>
          <div
            style={
              ({ marginLeft: isOpen ? "5px" : "0px" },
              { display: isOpen ? "none" : "block" })
            }
            className="mx-auto text-2xl animate__animated animate__bounceInLeft"
          >
            <BsBoxArrowInRight onClick={toggle} className="hover:scale-[2]" />
          </div>
          <div
            style={
              ({ marginRight: isOpen ? "0px" : "5px" },
              { display: isOpen ? "block" : "none" })
            }
            className="ml-auto text-2xl animate__animated animate__bounceInRight"
          >
            <BsBoxArrowInLeft onClick={toggle} className="hover:scale-[2]"/>
          </div>
        </div>
            <div className="left-0 transform translate-y-1/4">
            {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="flex place-items-end pt-4 py-4 px-5 hover:bg-sky-400 rounded-md hover:text-black animate__animated animate__flipInX"
            activeclassname="bg-blue-500 text-white"
          >
            <div className="mt-4 ">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text pl-4 pt-2"
            >
              {item.name}

            </div>
          </NavLink>
        ))}
            </div>
        
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
