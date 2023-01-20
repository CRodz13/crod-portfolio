import React, { useState } from "react";

const ProjectItem = ({ img, title, lang }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 object-cover" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{lang}</p>
        <div className="flex items-center justify-center">
        <button
          className="p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
          onClick={() => setShowModal(true)}
        >
          More Info
        </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <div
              className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="relative z-10 bg-white p-4">
              <img src={img} alt="/" className="rounded-xl" />
              <h3 className="text-2xl font-bold text-black tracking-wider text-center">
                {title}
              </h3>
              <p className="pb-4 pt-2 text-black text-center">{lang}</p>
              <button
                className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
