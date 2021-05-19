import React from "react";

import Headers from "../components/Headers";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Landing = () => {
  return (
    <React.Fragment>
      <Headers />

      <div className="flex items-center justify-center h-screen">
        <div className="pb-12 md:pb-16">
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-400">Hello World</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-3xl text-white mb-5" data-aos="zoom-in" data-aos-delay="150">
              I am a front-end enthusiast from Singapore.
            </p>
            <div
              className="h-1 w-36 md:w-52 bg-purple-500 rounded mb-5"
              data-aos="zoom-in-right"
              data-aos-delay="250"
            ></div>
          </div>
          <div className="flex justify-between w-1/5 text-white text-5xl" data-aos="fade-right" data-aos-delay="400">
            <div className="flex-initial transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110">
              <a href="https://github.com/seanisoverhere" target="_blank" rel="noreferrer">
                <FaGithubSquare />
              </a>
            </div>
            <div className="flex-initial transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110">
              <a href="https://www.linkedin.com/in/sean-choon-3868a6137/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
