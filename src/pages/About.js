import React from "react";
import Headers from "../components/Headers";

import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <Headers />
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 py-4 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="flex flex-col md:flex-row mt-10">
              <div className="md:w-1/3 text-center md:pr-8 md:py-8 py-2">
                <div className="flex flex-wrap w-full md:mb-20 mb:10">
                  <div className="mb-6 lg:mb-0">
                    <h1 className="md:text-5xl text-3xl font-medium title-font mb-3 text-white" data-aos="zoom-in">this.self</h1>
                    <div className="h-1 w-20 md:w-40 bg-indigo-500 rounded" data-aos="zoom-in-right" data-aos-delay="150"></div>
                  </div>
                  <p className="leading-relaxed font-medium text-white text-left md:mt-10 mt-3" data-aos="zoom-in" data-aos-delay="200">
                    I am a 3rd Year Undergraduate from Singapore Management University. I have a strong passion in
                    front-end web development
                  </p>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8 md:py-8 md:border-l border-indigo-500 md:border-t-0 border-t mt-4 pt-4 md:mt-0 text-left">
                <h1 className="md:text-5xl text-3xl font-medium title-font mb-3 text-white" data-aos="zoom-in-right" data-aos-delay="250">[ skills ]</h1>
                <div className="h-1 w-20 md:w-40 bg-indigo-500 rounded" data-aos="zoom-in-right" data-aos-delay="250"></div>
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
