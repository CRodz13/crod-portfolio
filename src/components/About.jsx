import React from "react";
import headshot from "../assets/headshot.jpg";
import henry from "../assets/henry.jpg";

const About = () => {
  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
          <div
            className="md:5/12 lg:w-5/12 sm:w-1/2"
            data-aos="fade-down"
            data-aos-duration="1300"
          >
            <img src={henry} alt="image" loading="lazy" className="mx-auto w-1/2 h-64 rounded-full object-cover md:w-4/5 md:h-full" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2
              className="text-2xl font-bold text-gray-900 md:text-4xl underline"
              data-aos="fade-right"
              data-aos-duration="1300"
              data-aos-delay="400"
            >
              About
            </h2>
            <p
              className="mt-6 text-gray-600"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="400"
            >
              As a seasoned full-stack web developer with a diverse set of
              skills, I possess the ability to undertake projects utilizing
              various languages and frameworks. My current expertise centers on
              utilizing Python, Django, React, and Tailwind, yet I possess
              experience with a plethora of other tools and technologies. In
              addition to programming, I have a strong foundation in hardware,
              including computer assembly and bash scripting. Furthermore, I am
              well-versed in data analysis and database administration, enabling
              me to work on complex projects that involve large amounts of data.
              With my extensive experience and knowledge, I am confident in my
              ability to deliver high-quality, robust, and scalable web
              applications that meet the needs of my clients. Whether working on
              vanilla JavaScript projects or more complex projects that involve
              multiple languages and frameworks, I am able to provide efficient
              and effective solutions. I am always eager to take on new
              challenges and am dedicated to staying current with the latest
              technologies and trends in web development. With my strong
              problem-solving skills, attention to detail, and ability to work
              well under pressure, I am convinced that I would be a valuable
              addition to any team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
