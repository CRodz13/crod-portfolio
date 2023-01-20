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
      id: 9,
      src: aws,
      title: "AWS",
      style: "shadow-orange-400",
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
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div
          className="pb-8"
          data-aos="fade-down"
          data-aos-duration="1300"
          data-aos-delay="400"
        >
          <p className="text-4xl font-bold text-center underline">About</p>
        </div>

        <p
          className="md:text-xl mt-2 text-center sm:leading-tight"
          data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-delay="400"
        >
          As a seasoned full-stack web developer with a diverse set of skills, I
          possess the ability to undertake projects utilizing various languages
          and frameworks. My current expertise centers on utilizing Python,
          Django, React, and Tailwind, yet I possess experience with a plethora
          of other tools and technologies. In addition to programming, I have a
          strong foundation in hardware, including computer assembly and bash
          scripting. Furthermore, I am well-versed in data analysis and database
          administration, enabling me to work on complex projects that involve
          large amounts of data. With my extensive experience and knowledge, I
          am confident in my ability to deliver high-quality, robust, and
          scalable web applications that meet the needs of my clients. Whether
          working on vanilla JavaScript projects or more complex projects that
          involve multiple languages and frameworks, I am able to provide
          efficient and effective solutions. I am always eager to take on new
          challenges and am dedicated to staying current with the latest
          technologies and trends in web development. With my strong
          problem-solving skills, attention to detail, and ability to work well
          under pressure, I am convinced that I would be a valuable addition to
          any team.
        </p>

        <br />
        <div>
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1300"
              data-aos-delay="400"
            >
              <p className="text-2xl py-6 text-center underline">
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
