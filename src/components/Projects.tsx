import React from "react";

import { BiSolidChevronsRight } from "react-icons/bi";
import { projectDetails } from "./index";
import Works from "./Works";


const Projects = ({
  background = "PROJECTS",
  frontText = "Want to see my past works?",
  gitLink = "View More",
}) => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col bg-gradient-to-r from-green-600 to-gray-900 pb-10 sm:p-3">
        <h1 className="text-[150px] text-white text-center font-semibold sm:text-3xl sm:italic sm:mt-6">
          {background}
        </h1>
        <h3 className="font-semibold text-4xl text-center relative bottom-32 sm:mt-20 sm:text-2xl sm:hidden">
          {frontText}
        </h3>
        <Works />

        <div
          className="bg-gray-500 text-white text-base font-semibold border
         w-fit m-auto p-3 mt-4 rounded-md pr-7 pl-7 flex gap-1"
        >
          <a href="https://github.com/Joel0007tech" target="_blank">
            {gitLink.toLowerCase()}
          </a>
          <BiSolidChevronsRight className="relative top-1" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
