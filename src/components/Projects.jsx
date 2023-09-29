import React from 'react'
import gpt from "../assets/gpt-3.png";
import dashboard from "../assets/admin-dashboard.png";
import ace from "../assets/ace project.png";
import movie from "../assets/movie-task.png"

const Projects = () => {
  return (
    <div>
      <div className='flex flex-col bg-white'>
      <h1 className='text-[150px] text-slate-200 text-center font-semibold'>PROJECTS</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32'>want to see my past works?</h3>
        <div className='flex flex-col'>
          <div className='flex'>
          <img src={gpt} alt="gpt" />
          <img src={dashboard} alt="admin-dashboard" />
          </div>
          
          <div className='flex'>
          <img src={ace} alt="ace" />
          <img src={movie} alt="movie-task" />
          </div>
          </div>
        </div>
    </div>
  )
}

export default Projects