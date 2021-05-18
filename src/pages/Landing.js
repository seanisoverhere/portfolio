import React from "react";

import Headers from "../components/Headers";

const Landing = () => {
  return (
    <React.Fragment>
      <Headers />
      <div className="text-center pb-12 md:pb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-400">Hello World</span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl text-white mb-8" data-aos="zoom-in" data-aos-delay="150">
            I am a front-end enthusiast from Singapore.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
