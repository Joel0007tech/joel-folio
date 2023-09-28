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
        <div className='flex flex-col m-auto gap-5'>
          <div className='flex'>
            <div className='flex-col'>
            <GrReactjs/>
            <p>ReactJS</p>
            </div>
            <div className='flex-col'>
            <IoLogoJavascript/>
            <p>ReactJS</p>
            </div>
            <div className='flex-col'>
            <BiLogoTailwindCss/>
            <p>ReactJS</p>
            </div> 
          </div>
          <div className='flex'>
            <div className='flex-col'>
            <BiLogoCss3/>
            <p>ReactJS</p>
            </div>
            <div className='flex-col'>
            <BiLogoHtml5/>
            <p>ReactJS</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services