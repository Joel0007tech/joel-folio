import React from 'react';
import {CgWebsite} from "react-icons/cg";
import {AiOutlineAppstore} from "react-icons/ai";
import {GrReactjs} from "react-icons/gr";
import {IoLogoJavascript} from "react-icons/io";
import {BiLogoTailwindCss, BiLogoCss3, BiLogoHtml5} from "react-icons/bi";

const Services = () => {
  return (
    <div>
      <div className='flex flex-col mt-10'>
      <h1 className='text-[150px] text-slate-200 text-center font-semibold'>SERVICES</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32'>What I Do?</h3>
        <div className='flex justify-center gap-10 relative bottom-12'>
        <div className='flex flex-col gap-4 border-[3px] rounded-xl border-gray-500 p-7'>
          <CgWebsite className='text-3xl fill-green-600 text-gray-600'/>
         <h3 className='font-bold text-xl '>Website Development</h3>
         <p className='text-md font-normal text-slate-600 leading-relaxed'>I develop websites, for personal, business, or <br/>
         organization useage. With the required functionalities, <br/>
         and animations to make your website outstanding.<br/>
         I develop webstes for all niches, be it Banking,<br/>
         Architecture, Finance, and so on</p>
        </div>
        <div className='flex flex-col gap-4 border-[3px] rounded-xl border-green-500 p-7'>
          <AiOutlineAppstore className='text-3xl fill-green-600'/>
          <h3 className='font-bold text-xl '>WebApp Development</h3>
          <p className='text-md font-normal text-slate-600 leading-relaxed'>I develop webApplications, with the best<br/> functionalities,
          animations, plus amazing user experience.</p>
        </div>
        </div>
        <div className='flex flex-col m-auto gap-5 mt-6'>
          <h3 className='text-center font-semibold text-3xl pb-5'>My Skills</h3>
          <div className='flex gap-3'>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 '>
            <GrReactjs className='text-[100px]'/>
            <p className='text-center text-base font-semibold'>ReactJS</p>
            </div>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 '>
            <IoLogoJavascript className='text-[100px]'/>
            <p className='text-center text-base font-semibold'>Javascript</p>
            </div>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 '>
            <BiLogoTailwindCss className='text-[100px]'/>
            <p className='text-center text-base font-semibold'>Tailwindcss</p>
            </div> 
          </div>
          <div className='flex justify-center gap-3'>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 '>
            <BiLogoCss3 className='text-[100px]'/>
            <p className='text-center text-base font-semibold'>CSS</p>
            </div>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 '>
            <BiLogoHtml5 className='text-[100px]'/>
            <p className='text-center text-base font-semibold'>Html</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services