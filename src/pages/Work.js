import React from "react";
import Headers from "../components/Headers";

const Work = () => {
  return (
    <>
      <Headers />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-3xl font-medium title-font text-white" data-aos="zoom-in">
              &#123; Work &#125;
            </h1>
            <div
              className="h-1 sm:w-40 w-20 mx-auto bg-indigo-500 rounded my-5"
              data-aos="zoom-in-right"
              data-aos-delay="150"
            ></div>
            <h2
              className="text-s text-indigo-500 tracking-widest font-medium title-font mb-1"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Past work and projects I've done
            </h2>
          </div>
          <div className="flex flex-wrap -m-4" data-aos="zoom-in-right" data-aos-delay="250">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-2xl title-font font-mono">THIS.SITE</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor
                  </p>
                  <div class="mt-3 text-indigo-500 inline-flex items-center">Learn More</div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-2xl title-font font-mono">A-FAIR-SHARE</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor
                  </p>
                  <div className="mt-3 text-indigo-500 inline-flex items-center">Learn More</div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-2xl title-font font-mono">SOMETHING</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor
                  </p>
                  <div className="mt-3 text-indigo-500 inline-flex items-center">Learn More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Work;
