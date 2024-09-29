"use client";

import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <h1 className="text-5xl flex justify-center font-bold mb-10">
        My<span className="text-accent">&nbsp; Projects</span>
      </h1>
      <div className="flex flex-wrap justify-center w-full">
        {/* Palak Furniture */}

        <a
          href="http://palakkfurniture.000webhostapp.com/"
          className="max-w-sm mx-4 my-4 bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer no-underline"
          target="_blank"
        >
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold flex justify-center mb-5 text-black">
              Palak Furniture
            </h1>
            <div className="text-xl text-center text-black">
              I made Palak furniture website using HTML, CSS, JS, and PHP as a
              backend to showcase the latest furniture ideas and designs
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Projects;
