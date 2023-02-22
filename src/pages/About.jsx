import React from "react";
import henry from "../assets/henry.jpg";

const About = () => {
  return (
    <div className="h-full md:p-24 bg-gradient-to-b from-gray-800 to-black overflow-auto">
      <div className="md:flex flex-col items-center p-4 animate__animated animate__bounceInDown animate__delay-1s">
        <img
          src={henry}
          alt="image"
          loading="lazy"
          className="w-3/4 mb-6 ml-9 md:mr-9 rounded-xl md:rounded-full md:w-1/6 md:shadow-lg md:shadow-sky-300"
        />
        <h2 className="text-2xl md:text-4xl text-sky-300 text-center underline p-4">
          About
        </h2>

        <p className="text-sky-300 sm:text-lg md:text-2xl md:p-8 leading-7 p-4 mb-4 shadow-lg shadow-sky-300 rounded-xl animate__animated animate__bounceInUp animate__delay-1s">
          As a full-stack web developer with a wide range of skills and
          expertise in Python, Django, React, and Tailwind, I am able to tackle
          projects using a variety of languages and frameworks. In addition to
          programming, I have a solid foundation in hardware, including computer
          assembly and bash scripting, as well as a deep understanding of data
          analysis and database administration. I have the experience and
          knowledge to deliver high-quality, scalable web applications that meet
          the needs of my clients. Whether it's a vanilla JavaScript project or
          a complex multi-lingual and multi-framework project, I can provide
          efficient and effective solutions. I am dedicated to staying
          up-to-date with the latest trends and technologies in web development
          and I am always eager to take on new challenges. With strong
          problem-solving skills, attention to detail, and the ability to work
          well under pressure, I would be a valuable asset to any team.
        </p>
      </div>
    </div>
  );
};

export default About;
