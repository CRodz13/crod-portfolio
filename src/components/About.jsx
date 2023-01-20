import React from "react";

const About = () => {
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
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p
          className="text-xl mt-20 text-center"
          data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-delay="400"
        >
          As a full-stack web developer with a broad range of skills, I am
          capable of handling projects that span many different languages and
          frameworks. My current focus is on using Python, Django, React, and
          Tailwind, but I have experience with a variety of other tools and
          technologies as well. In addition to writing code, I also have a
          strong background in hardware, including computer building and bash
          scripting. I am also well-versed in data analysis and database
          administration, which allows me to work on complex projects that
          involve large amounts of data. With my extensive experience and
          knowledge, I am confident in my ability to deliver high-quality,
          robust, and scalable web applications. Whether working on vanilla
          JavaScript projects or more complex projects that involve multiple
          languages and frameworks, I am able to provide efficient and effective
          solutions that meet the needs of my clients. I am always eager to take
          on new challenges and am committed to staying up-to-date with the
          latest technologies and trends in web development. With my strong
          problem-solving skills, attention to detail, and ability to work well
          under pressure, I am confident that I would be a valuable asset to any
          team.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
