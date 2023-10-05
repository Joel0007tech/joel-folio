import React from 'react'
import gpt from "../assets/gpt-3.png";
import dashboard from "../assets/admin-dashboard.png";
import Ace from "../assets/ace project.png";
import movie from "../assets/hoobank project.png"

const Projects = ({
  background= "PROJECTS",
  frontText ="Want to see my past works?",
  GPT ="chatGPT-3 Project",
  dashbord="Dashboard Project",
  ace ="Ace Project",
  hoobank="Hoobank Project"
}) => {
  return (
    <div>
      <div className='flex flex-col bg-white pb-10'>
      <h1 className='text-[150px] text-slate-200 text-center font-semibold sm:text-2xl'>{background}</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32'>{frontText}</h3>
        <div className='flex flex-col m-auto gap-7'>
          <div className='flex gap-7'>
          <div className='border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3' 
          data-aos="flip-left" data-aos-delay="200" data-aos-duration="1000">
            <img src={gpt} alt="gpt" width={500}
           className='border rounded-xl'/>
           <div className='flex justify-between'>
            <p className="text-white font-normal p-3 text-lg" >{GPT}</p>
               <a href="http://" className='text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500'>
                CLICK HERE</a>   
                </div>        
         </div>
          <div className='border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3'
          data-aos="flip-right" data-aos-delay="200" data-aos-duration="1000">
            <img src={dashboard} alt="admin-dashboard" width={500}
           className='border rounded-xl'/>
           <div className='flex justify-between'>
            <p className="text-white font-normal p-3 text-lg">
              {dashbord}
            </p>
               <a href="http://" className='text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500'>
                CLICK HERE</a>   
                </div>        
         </div>
          </div>
          
          <div className='flex gap-7'>
          <div className='border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3'
          data-aos="flip-left" data-aos-delay="200" data-aos-duration="1000">
            <img src={Ace} alt="ace" width={500}
           className='border rounded-xl'/>
           <div className='flex justify-between'>
            <p className="text-white font-normal p-3 text-lg">{ace}</p>
               <a href="http://" className='text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500'>
                CLICK HERE</a>   
                </div>        
         </div>
          <div className='border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3'
          data-aos="flip-right" data-aos-delay="200" data-aos-duration="1000">
            <img src={movie} alt="movie-task" width={500}
           className='border rounded-xl'/>
           <div className='flex justify-between'>
            <p className="text-white font-normal p-3 text-lg">{hoobank}</p>
               <a href="http://" className='text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500'>
                CLICK HERE</a>   
                </div>        
         </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Projects