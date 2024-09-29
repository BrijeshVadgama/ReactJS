"use client";

import React from "react";
import { FaCode, FaTerminal, FaRocket } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <h1 className="text-5xl flex justify-center font-bold mb-10">
        My<span className="text-accent">&nbsp; Services</span>
      </h1>
      <div className="flex flex-wrap justify-center">
        {/* frontend */}

        <div className="max-w-sm mx-4 my-4 bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer">
          <div className="px-6 py-4 bg-red-700">
            <div className="flex justify-center">
              <FaCode size={60} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold flex justify-center mb-5">
              Frontend
            </h1>
            <div className="text-xl text-center text-white">
              As a frontend tool, I use React JS, Next JS, HTML, CSS, JS, and
              many more languages and frameworks to make a responsive and
              interactive website I can also convert the design to the website
              if you can provide me
            </div>
          </div>
        </div>

        {/* backend */}

        <div className="max-w-sm mx-4 my-4 bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer">
          <div className="px-6 py-4 bg-orange-700">
            <div className="flex justify-center">
              <FaTerminal size={60} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold flex justify-center mb-5">
              Backend
            </h1>
            <div className="text-xl text-center text-white">
              In backend technology I use Node js API with MongoDB database to
              store the data, I can also make REST full APIs using node js for
              storing data into database I can also make admin panels and many
              more.
            </div>
          </div>
        </div>

        {/* full stack   */}

        <div className="max-w-sm mx-4 my-4 bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer">
          <div className="px-6 py-4 bg-blue-600">
            <div className="flex justify-center">
              <FaRocket size={60} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold flex justify-center mb-5">
              Full Stack
            </h1>
            <div className="text-xl text-center text-white">
              i can create a full stack web application using react js + node js
              MongoDB and many more. I can build full-stack web applications
              like admin panel e-commerce websites and many more.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
