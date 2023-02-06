import React from "react";
import apiNetflixImg from "../assets/projects/apiNetflix.png";
import djacketsImg from "../assets/projects/djackets.png";
import netflixCloneImg from "../assets/projects/netflixClone.png";
import socialBookImg from "../assets/projects/socialBook.png";
import jsonImg from "../assets/projects/json.png";
import spaceInvaderImg from "../assets/projects/spaceInvader.png";
import taskManagerImg from "../assets/projects/taskManager.png";
import chrisBlogImg from "../assets/projects/chrisBlog.png";
import doomImg from "../assets/projects/doom.png";
import eyeControlImg from "../assets/projects/eyeControl.png";

const projects = [
  {
    id: 1,
    name: "Netflix API",
    image: apiNetflixImg,
    description: "Web App made using free API with a netflix clone.",
  },
  {
    id: 2,
    name: "djackets",
    image: djacketsImg,
    description: "Web App made with Django and Bootstrap.",
  },
  {
    id: 3,
    name: "Netflixclone",
    image: netflixCloneImg,
    description: "Regular Netflix react clone.",
  },
  {
    id: 4,
    name: "SocialBook",
    image: socialBookImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
  },
  {
    id: 5,
    name: "Json",
    image: jsonImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
  },
  {
    id: 6,
    name: "SpaceInvader",
    image: spaceInvaderImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
  },
  {
    id: 7,
    name: "TaskManager",
    image: taskManagerImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
  },
  {
    id: 8,
    name: "ChrisBlog",
    image: chrisBlogImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
  },
  {
    id: 9,
    name: "Doom",
    image: doomImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
  },
  {
    id: 10,
    name: "EyeControl",
    image: eyeControlImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen items-center pt-10 pb-10 justify-center bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="grid grid-cols-2 pr-5 pl-5 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-lg hover:shadow-xl hover:shadow-white"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1300"
          >
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={project.image}
                alt={project.name}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                {project.name}
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
