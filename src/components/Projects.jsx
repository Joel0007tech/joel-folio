import React from 'react'
import gpt from "../assets/gpt-3.png";
import dashboard from "../assets/admin-dashboard.png";
import ace from "../assets/ace project.png";
import movie from "../assets/movie-task.png"

const Projects = () => {
  return (
    <div>
      <div className='flex flex-col bg-white pb-10'>
      <h1 className='text-[150px] text-slate-200 text-center font-semibold'>PROJECTS</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32'>want to see my past works?</h3>
        <div className='flex flex-col m-auto gap-7'>
          <div className='flex gap-7'>
          <div className='border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3'><img src={gpt} alt="gpt" width={500}
           className='border rounded-xl'/>
           <div className='flex justify-between'>
            <p>Hello</p>
               <a href="http://" className='text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500'>
                CLICK HERE</a>   
                </div>        
         </div>
          <div className='border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3'><img src={dashboard} alt="admin-dashboard" width={500}
           className='border rounded-xl'/>
           <div className='flex justify-between'>
            <p>Hello</p>
               <a href="http://" className='text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500'>
                CLICK HERE</a>   
                </div>        
         </div>
          </div>
          
          <div className='flex gap-7'>
          <div className='border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3'><img src={ace} alt="ace" width={500}
           className='border rounded-xl'/>
           <div className='flex justify-between'>
            <p>Hello</p>
               <a href="http://" className='text-white bg border-[3px] bg-green-500 rounded-full relative bottom-4
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500'>
                CLICK HERE</a>   
                </div>        
         </div>
          <div className='border-[5px] bg-gray-500 border-gray-500 rounded-lg p-3 flex-col gap-3'><img src={movie} alt="movie-task" width={500}
           className='border rounded-xl'/>
           <div className='flex justify-between'>
            <p>Hello</p>
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