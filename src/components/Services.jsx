import React from 'react';
import {CgWebsite} from "react-icons/cg";
import {AiOutlineAppstore} from "react-icons/ai";

const Services = () => {
  return (
    <div>
      <div className='flex flex-col mt-10'>
      <h1 className='text-[150px] text-slate-200 text-center font-semibold'>SERVICES</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32'>What I Do?</h3>
        <div className='flex justify-center gap-10 relative bottom-12'>
        <div className='flex flex-col gap-2'>
          <CgWebsite className='text-xl fill-green-600 text-gray-600'/>
         <h3 className='font-bold text-xl '>Website Development</h3>
         <p></p>
        </div>
        <div className='flex flex-col gap-2'>
          <AiOutlineAppstore className='text-xl fill-green-600'/>
          <h3 className='font-bold text-xl '>WebApp Development</h3>
          <p></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services