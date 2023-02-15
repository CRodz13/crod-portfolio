import React from "react";
import html from "../assets/tools/html.png";
import css from "../assets/tools/css.png";
import javascript from "../assets/tools/javascript.png";
import react from "../assets/tools/react.png";
import nextjs from "../assets/tools/nextjs.png";
import graphql from "../assets/tools/graphql.png";
import github from "../assets/tools/github.png";
import tailwind from "../assets/tools/tailwind.png";
import aws from "../assets/tools/aws.png";
import bootstrap from "../assets/tools/bootstrap.png";
import django from "../assets/tools/django.png";
import docker from "../assets/tools/docker.png";
import python from "../assets/tools/python.png";
import sql from "../assets/tools/sql.png";
import flask from "../assets/tools/flask.png";
import linux from "../assets/tools/linux.png";
import linode from "../assets/tools/linode.png";
import dotnet from "../assets/tools/dotnet.png";

const Tools = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 16,
      src: flask,
      title: "Flask",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: bootstrap,
      title: "bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 11,
      src: aws,
      title: "AWS",
      style: "shadow-orange-400",
    },
    {
      id: 12,
      src: django,
      title: "Django",
      style: "shadow-green-400",
    },
    {
      id: 13,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 15,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
    {
      id: 16,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-400",
    },
    {
      id: 17,
      src: linode,
      title: "Linode",
      style: "shadow-blue-400",
    },
    {
      id: 18,
      src: dotnet,
      title: "Dotnet",
      style: "shadow-purple-400",
    },
  ];
  return (
    <div className="absolute md:w-full h-full bg-gradient-to-b from-gray-800 to-black text-sky-400 overflow-auto">
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center animate__animated animate__bounceInDown animate__delay-1s">
        <div
          className="pb-4"
        >
          <p className="text-4xl font-bold text-center underline">Tools</p>
        </div>

        <br />
        <div className="p-4 flex flex-col justify-center text-white ">
          <div
          >
            <p className="pb-6 text-xl md:text-2xl md:py-6 text-center underline">
              These are some of the technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-2 pr-5 pl-5 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto hover:scale-[1.5] duration-300" />
                <p className="my-4 text-center">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
