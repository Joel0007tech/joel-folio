import React from "react";

import { BiSolidChevronsRight } from "react-icons/bi";
import { projectDetails } from ".";

const Projects = ({
  background = "PROJECTS",
  frontText = "Want to see my past works?",
  gitLink = "View More",
}) => {
  return (
    <div>
      <div className="flex flex-col bg-white pb-10 sm:p-3">
        <h1 className="text-[150px] text-slate-200 text-center font-semibold sm:text-6xl">
          {background}
        </h1>
        <h3 className="font-semibold text-4xl text-center relative bottom-32 sm:mt-20 sm:text-2xl">
          {frontText}
        </h3>
        <div className="grid grid-cols-3 gap-3 justify-center p-2 sm:flex sm:flex-col sm:gap-2">
          {projectDetails.map((items) => (
            <li key={items} className="flex flex-col">
              <div className="flex border rounded-xl bg-slate-500 flex-col w-fit p-5 m-auto" 
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="1000">
                <img
                  src={items.image}
                  alt="img"
                  width={500}
                  className="border rounded-xl m-auto"
                />
                <div className="flex justify-between pt-2">
                <span className="text-white text-lg font-semibold sm:font-normal sm:text-sm">{items.text}</span>
                <span><a href={items.link} className="text-white text-sm font-normal hover:text-green-500 hover:bg-gray-700
                 bg-green-500 border-[3px] rounded-full p-3 pr-7 pl-7 relative bottom-1 sm:p-2 sm:pl-3 sm:pr-3 sm:text-[13px] sm:font-normal ">
                  {items.linkText}</a></span>
                </div>
              </div>
            </li>
          ))}
        </div>

        <div
          className="bg-gray-500 text-white text-base font-semibold border
         w-fit m-auto p-3 mt-4 rounded-md pr-7 pl-7 flex gap-1"
        >
          <a href="https://github.com/Joel0007tech" target="_blank">
            {gitLink}
          </a>
          <BiSolidChevronsRight className="relative top-1" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
