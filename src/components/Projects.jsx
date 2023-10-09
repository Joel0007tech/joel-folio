import React from "react";

import {BiSolidChevronsRight} from "react-icons/bi"
import { projectDetails } from ".";

const Projects = ({
  background = "PROJECTS",
  frontText = "Want to see my past works?",
  gitLink="View More"
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
        {/* <div className="flex flex-col m-auto gap-7">
        <div className="flex gap-7 sm:flex sm:flex-col">
            <div
              className="border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <img
                src={youtube}
                alt="yc"
                width={500}
                className="border rounded-xl"
              />
              <div className="flex justify-between">
                <p className="text-white font-normal p-3 text-lg sm:text-base">
                  {youTube}
                </p>
                <a
                  href="https://you-tube-clone-beta-nine.vercel.app/"
                  className="text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500"
                >
                  CLICK HERE
                </a>
              </div>
            </div>
            <div
              className="border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <img
                src={dashboard}
                alt="admin"
                width={500}
                className="border rounded-xl"
              />
              <div className="flex justify-between">
                <p className="text-white font-normal p-3 text-lg sm:text-base">
                  {dashbord}
                </p>
                <a
                  href="https://admin-dashboard-yrub.vercel.app/"
                  className="text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500"
                >
                  CLICK HERE
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-7 sm:flex sm:flex-col">
            <div
              className="border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <img
                src={gpt}
                alt="gpt"
                width={500}
                className="border rounded-xl"
              />
              <div className="flex justify-between">
                <p className="text-white font-normal p-3 text-lg sm:text-base">
                  {GPT}
                </p>
                <a
                  href="https://gpt-3-pied.vercel.app/"
                  className="text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500"
                >
                  CLICK HERE
                </a>
              </div>
            </div>
            <div
              className="border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <img
                src={ctMaid}
                alt="ctM"
                width={500}
                className="border rounded-xl"
              />
              <div className="flex justify-between">
                <p className="text-white font-normal p-3 text-lg sm:text-base">
                  {ctmaid}
                </p>
                <a
                  href="https://ct-maid-synergy.vercel.app/"
                  className="text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500"
                >
                  CLICK HERE
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-7 sm:flex sm:flex-col">
            <div
              className="border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <img
                src={Ace}
                alt="ace"
                width={500}
                className="border rounded-xl"
              />
              <div className="flex justify-between">
                <p className="text-white font-normal p-3 text-lg sm:text-base">
                  {ace}
                </p>
                <a
                  href="https://practice-project-chi.vercel.app/"
                  className="text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500"
                >
                  CLICK HERE
                </a>
              </div>
            </div>
            <div
              className="border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              >
              <img
                src={movie}
                alt="movie-task"
                width={500}
                className="border rounded-xl"
              />
              <div className="flex justify-between">
                <p className="text-white font-normal p-3 text-lg sm:text-base">
                  {hoobank}
                </p>
                <a
                  href="https://bank-app-ten-mu.vercel.app/"
                  className="text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
                 pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500"
                >
                  CLICK HERE
                </a>
              </div>
            </div>
          </div>
        </div> */}
<div className="grid grid-cols-3 gap-3 justify-center p-5 sm:flex sm:flex-col sm:gap-2">
{
          projectDetails.map((items) =>
  
             <li key={items} className="flex flex-col">
              <div className="flex border rounded-xl bg-slate-500 flex-col w-fit p-7 m-auto">
              <img src={items.image} alt="img" width={500} className="border rounded-xl m-auto"/>
                  <span>{items.text}</span>
              </div>
                  
             </li>)        
        }
</div>
        
        <div className="bg-gray-500 text-white text-base font-semibold border
         w-fit m-auto p-3 mt-4 rounded-md pr-7 pl-7 flex gap-1">
          <a href="https://github.com/Joel0007tech" target="_blank">{gitLink}</a>
          <BiSolidChevronsRight className="relative top-1"/>
         </div>
        
      </div>
    </div>
  );
};

export default Projects;
