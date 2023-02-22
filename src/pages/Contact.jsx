import React from "react";

const Contact = () => {
  return (
    <div className="h-full w-screen justify-center p-4 bg-gradient-to-b from-gray-800 to-black">
      <h1 className="text-2xl p-4 md:text-4xl md:text-center font-bold text-sky-300 underline animate__animated animate__bounceInDown animate__delay-1s">
        Contact Me
      </h1>
      <form
        action="https://getform.io/f/cc4cbcbe-8a44-4bb1-a90e-f18011cabe77"
        method="POST"
        encType="multipart/form-data"
        className="animate__animated animate__bounceInUp animate__delay-1s"
      >
          <div className="flex flex-col w-[312px] p-4 md:w-[1200px] md:mx-auto md:mt-8">
            <label className="uppercase text-sm py-2 text-sky-300">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              placeholder="John Doe"
            />
            <label className="uppercase text-sm py-2 text-sky-300">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
              placeholder="(000)-000-0000"

            />
            <label className="uppercase text-sm py-2 text-sky-300">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
              placeholder="example@example.com"
            />
            <label className="uppercase text-sm py-2 text-sky-300">
              Subject
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"

            />
            <label className="uppercase text-sm py-2 text-sky-300">
              Message
            </label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
              name="message"
            ></textarea>
          </div>
        <button className="bg-sky-500 ml-20 text-gray-100 uppercase mt-4 p-4 rounded-lg md:ml-[800px] hover:bg-sky-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
