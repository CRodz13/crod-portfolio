import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactImage from "../assets/skills/react.png";
import nextjs from "../assets/skills/nextjs.png";
import graphql from "../assets/skills/graphql.png";
import github from "../assets/skills/github.png";
import tailwind from "../assets/skills/tailwind.png";
import aws from "../assets/skills/aws.png";
import bootstrap from "../assets/skills/bootstrap.png";
import django from "../assets/skills/django.png";
import docker from "../assets/skills/docker.png";
import python from "../assets/skills/python.png";
import sql from "../assets/skills/sql.png";
import flask from "../assets/skills/flask.png";

const About = () => {
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
      src: reactImage,
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
      style: "shadow-blue-400",
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
  ];
  return (
    <div
      id="tools"
      className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center">
        <div
          className="pb-4"
          data-aos="fade-down"
          data-aos-duration="1300"
          data-aos-delay="400"
        >
          <p className="text-4xl font-bold text-center underline">Skills</p>
        </div>


        <br />
        <div>
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1300"
              data-aos-delay="400"
            >
              <p className="md:text-2xl md:py-6 text-center underline">
                These are some of the technologies I work with
              </p>
            </div>

            <div
              className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
              data-aos="zoom-in-up"
              data-aos-duration="1300"
              data-aos-delay="400"
            >
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
