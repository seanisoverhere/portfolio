import React from "react";

import ReactTooltip from "react-tooltip";

import {
  SiTailwindcss,
  SiNpm,
  SiNuxtDotJs,
  SiVueDotJs,
  SiReact,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiMysql,
  SiGraphql,
  SiYarn,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const Skills = () => {
  return (
    <div className="grid grid-cols-7 gap-8 mt-10 mb-4 text-white text-4xl">
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="300"
      >
        <SiHtml5 data-tip data-for="htmlTip" />
        <ReactTooltip id="htmlTip" place="top" type="light" effect="solid">
          HTML5
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="350"
      >
        <SiCss3 data-tip data-for="cssTip" />
        <ReactTooltip id="cssTip" place="top" type="light" effect="solid">
          CSS3
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="400"
      >
        <SiBootstrap data-tip data-for="bootstrapTip" />
        <ReactTooltip id="bootstrapTip" place="top" type="light" effect="solid">
          Bootstrap
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="450"
      >
        <SiTailwindcss data-tip data-for="tailwindTip" />
        <ReactTooltip id="tailwindTip" place="top" type="light" effect="solid">
          Tailwind CSS
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="500"
      >
        <DiNodejs data-tip data-for="nodejsTip" />
        <ReactTooltip id="nodejsTip" place="top" type="light" effect="solid">
          NodeJS
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="550"
      >
        <SiNpm data-tip data-for="npmTip" />
        <ReactTooltip id="npmTip" place="top" type="light" effect="solid">
          NPM
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      >
        <SiYarn data-tip data-for="yarnTip" />
        <ReactTooltip id="yarnTip" place="top" type="light" effect="solid">
          Yarn
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="300"
      >
        <SiJavascript data-tip data-for="jsTip" />
        <ReactTooltip id="jsTip" place="top" type="light" effect="solid">
          ES6 JS
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="350"
      >
        <SiVueDotJs data-tip data-for="vueTip" />
        <ReactTooltip id="vueTip" place="top" type="light" effect="solid">
          VueJS
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="400"
      >
        <SiNuxtDotJs data-tip data-for="nuxtTip" />
        <ReactTooltip id="nuxtTip" place="top" type="light" effect="solid">
          NuxtJS
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="450"
      >
        <SiReact data-tip data-for="reactTip" />
        <ReactTooltip id="reactTip" place="top" type="light" effect="solid">
          React
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="500"
      >
        <SiMysql data-tip data-for="sqlTip" />
        <ReactTooltip id="sqlTip" place="top" type="light" effect="solid">
          SQL
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="550"
      >
        <SiGraphql data-tip data-for="graphqlTip" />
        <ReactTooltip id="graphqlTip" place="top" type="light" effect="solid">
          GraphQL
        </ReactTooltip>
      </div>
      <div
        className="transition duration-400 ease-in-out transform hover:text-purple-300 hover:scale-110"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      >
        <SiGit data-tip data-for="gitTip" />
        <ReactTooltip id="gitTip" place="top" type="light" effect="solid">
          Git
        </ReactTooltip>
      </div>
    </div>
  );
};

export default Skills;
