import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2022",
    title: "PDQ Signature Systems",
    duration: "1 year",
    details:
      "Experienced POS implementation specialist with a strong background in training, SQL database management, and menu design. Skilled in providing assistance to install teams on full installations, as well as utilizing coding skills to improve operational efficiencies during slow times. Developed a JSON to CSV converter for one of the SQL developers, demonstrating technical aptitude and ability to proactively improve processes.",
  },
  {
    year: "2019",
    title: "CRod Solutions",
    duration: "4 years",
    details:
      "As a web developer, I have expertise in using Python and the Django framework to create robust, scalable, and dynamic web applications. Additionally, I am proficient in building from scratch using HTML, CSS and vanilla JS and familiar with frontend frameworks like React and Vue. I am also familiar with CSS frameworks like Bootstrap and Tailwind to create responsive and user-friendly web pages. I have a good understanding of the web development process, from gathering requirements and creating wireframes to writing clean, maintainable code and deploying applications to a production environment. Furthermore, I am proficient in version control tools, Agile development methodologies, and best practices for web security.",
  },
  {
    year: "2007",
    title: "Origlio Beverage",
    duration: "12 years",
    details:
      "Experienced leader with a proven track record of managing large teams, driving projects, and utilizing self-taught technical skills to improve operational efficiencies. Successfully managed a team of 70+ employees and played a key role in company acquisitions and upgrades to warehouse management systems and software tools through proficient use of Excel and SQL for data processing and inventory/cost management.",
  },
  {
    year: "2002",
    title: "United States Air Force",
    duration: "2 years",
    details:
      'Primary duty of missile base defense. Skilled in threat assessment, security protocols, and emergency response procedures."',
  },
];
const Work = () => {
  return (
    <div
      id="work"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16"
      data-aos="zoom-in-down"
      data-aos-duration="1300"
      data-aos-delay="400"
    >
      <h1
        className="text-4xl font-bold text-center text-[#001b5e] pb-20"
        data-aos="zoom-in-right"
        data-aos-duration="1300"
        data-aos-delay="400"
      >
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
