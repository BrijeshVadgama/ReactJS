"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Brijesh_Resume.pdf";
    link.download = "Brijesh_Vadgama_Resume.pdf";
    link.click();
  };

  return (
    <>
      <section className="h-full flex items-center justify-center xl:mt-48">
        <div className="container mx-auto h-full p-4">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8">
            <div className="text-center xl:text-left xl:mt-[-150px] flex-1 order-2 xl:order-none">
              <h1 className="h2 mb-4">
                Hello I&apos;m <br /> Brijesh Vadgama
              </h1>
              <span className="text-4xl font-semibold text-accent mb-4 block">
                <Typewriter
                  words={["Web Developer", "Student"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={120}
                  delaySpeed={2000}
                />
              </span>
              <p className="mb-6 text-lg text-white max-w-md mx-auto xl:mx-0">
                I am interested in web development to create an interactive
                website using React JS, Node JS, Next JS, MongoDB, HTML, CSS,
                etc.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 bg-transparent border-accent hover:bg-accent hover:text-black hover:border-accent text-accent"
                  onClick={handleDownload}
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social />
                </div>
              </div>
            </div>
            <div className="order-1 xl:mt-[-150px] xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
