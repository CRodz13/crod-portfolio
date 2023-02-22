import React from "react";
import WorkItem from "../components/WorkItem";

const data = [
  {
    year: "2022",
    title: "PDQ Signature Systems",
    duration: "1 year",
    details:
      "A tenacious POS implementation specialist with extensive experience in training, SQL database management, and menu design. Adept at providing support to installation teams during full installations and utilizing technical skills to optimize operational efficiencies. Demonstrated technical aptitude by developing a JSON to CSV converter for an SQL developer, highlighting the ability to proactively improve processes.",
  },
  {
    year: "2019",
    title: "CRod Solutions",
    duration: "4 years",
    details:
      "A highly skilled web developer with a strong background in utilizing Python and the Django framework to create robust, scalable, and dynamic web applications. Adept at building from scratch using HTML, CSS, and vanilla JS and familiar with frontend frameworks such as React and Vue. Proficient in utilizing CSS frameworks such as Bootstrap and Tailwind to create responsive and user-friendly web pages. Possesses a comprehensive understanding of the web development process, including gathering requirements, creating wireframes, writing clean, maintainable code, and deploying applications to a production environment. Adept at utilizing version control tools, Agile development methodologies, and best practices for web security.",
  },
  {
    year: "2007",
    title: "Origlio Beverage",
    duration: "12 years",
    details:
      "An accomplished leader with a solid track record of effectively managing large teams, driving projects, and utilizing self-acquired technical skills to optimize operational efficiencies. Proven success in managing a team of over 70 employees and played a pivotal role in company acquisitions and upgrades to warehouse management systems and software tools. Demonstrated proficiency in using Excel and SQL for data processing, inventory and cost management.",
  },
  {
    year: "2002",
    title: "United States Air Force",
    duration: "2 years",
    details:
      "As a missile security forces member in the Air Force, I served in the defense of ICBM launch facilities and missile alert facilities across multiple states in the Midwest. My duties included safeguarding these critical assets, protecting against potential threats and ensuring the readiness of the missile security forces team. Through my service, I developed strong leadership, teamwork, and technical skills that I am able to apply in my current and future professional endeavors.",
  },
];
const Work = () => {
  return (
    <div className="h-full bg-gradient-to-b from-gray-800 to-black md:pl-20 md:p-16 overflow-auto">
      <h1 className="text-4xl font-bold text-center underline text-sky-300 p-4 md:p-6 animate__animated animate__backInDown">
        Experience
      </h1>
      <div className="p-8 shadow-lg shadow-sky-300">
        {data.map((item, idx) => (
          <div className="md:p-2 animate__animated animate__backInUp animate__delay-1s">
            <WorkItem
              key={idx}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
