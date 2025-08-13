import React from 'react';
import {CgWebsite} from "react-icons/cg";
import {AiOutlineAppstore} from "react-icons/ai";
import {GrReactjs} from "react-icons/gr";
import {IoLogoJavascript} from "react-icons/io";
import {BiLogoTailwindCss, BiLogoCss3, BiLogoHtml5} from "react-icons/bi";
import CustomAccordion from './Accordion';

const Services = ({
  background="SERVICES",
  frontText="What I do"
}) => {
  return (
    <div>
      <div className='flex flex-col mt-10 pb-20 sm:p-3'>
      <h1 className='text-[150px] text-white text-center font-semibold sm:text-3xl sm:italic'>{background}</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32 sm:mt-20 sm:text-2xl sm:hidden'>{frontText}</h3>
        <div className='flex justify-center gap-10 relative bottom-12 sm:flex sm:flex-col sm:top-10'>
        <div className='flex flex-col gap-4 border-[3px] border-gray-500 rounded-xl bg-gray-600 p-7'>
          <CgWebsite className='text-3xl fill-green-600 text-gray-600 bg-white border rounded-md'/>
         <h3 className='font-bold text-xl sm:text-md'>Website Development</h3>
         <p className='text-md font-normal text-slate-200 leading-relaxed sm:text-sm'>I develop websites, for personal, business, or <br/>
         organization useage. With the required functionalities, <br/>
         and animations to make your website outstanding.<br/>
         I develop webstes for all niches, be it Banking,<br/>
         Architecture, Finance, and so on</p>
        </div>
        <div className='flex flex-col gap-4 border-[3px] rounded-xl border-green-500 bg-green-600 p-7'>
          <AiOutlineAppstore className='text-3xl fill-green-600 border bg-white rounded-md'/>
          <h3 className='font-bold text-xl'>WebApp Development</h3>
          <p className='text-md font-normal text-slate-100 leading-relaxed sm:text-sm'>I develop webApplications, with the best<br/> functionalities,
          animations, plus amazing user experience.</p>
        </div>
        </div>
        <div className='flex flex-col m-auto gap-5 mt-6'>
          <h3 className='text-center font-semibold text-3xl pb-5 sm:mt-12 sm:text-white sm:italic sm:text-2xl'>My Skills</h3>
          <div className='flex gap-3'>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 sm:p-2' 
            data-aos="flip-up" data-aos-delay="200" data-aos-duration="1000">
            <GrReactjs className='text-[100px] fill-blue-500 sm:text-[70px]'/>
            <p className='text-center text-base font-semibold sm:text-sm'>ReactJS</p>
            </div>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 sm:p-2' 
            data-aos="flip-down" data-aos-delay="200" data-aos-duration="1000">
            <IoLogoJavascript className='text-[100px] sm:text-[70px]'/>
            <p className='text-center text-base font-semibold sm:text-sm'>Javascript</p>
            </div>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 sm:p-2' 
            data-aos="flip-up" data-aos-delay="200" data-aos-duration="1000">
            <BiLogoTailwindCss className='text-[100px] fill-blue-600 sm:text-[70px]'/>
            <p className='text-center text-base font-semibold sm:text-sm'>Tailwindcss</p>
            </div> 
          </div>
          <div className='flex justify-center gap-3'>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 sm:p-2' 
            data-aos="flip-down" data-aos-delay="200" data-aos-duration="1000">
            <BiLogoCss3 className='text-[100px] sm:text-[70px]'/>
            <p className='text-center text-base font-semibold sm:text-sm'>CSS</p>
            </div>
            <div className='flex-col border bg-slate-200 rounded-xl p-4 sm:p-2' 
            data-aos="flip-up" data-aos-delay="200" data-aos-duration="1000">
            <BiLogoHtml5 className='text-[100px] fill-orange-500 sm:text-[70px]'/>
            <p className='text-center text-base font-semibold sm:text-sm'>Html</p>
            </div> 
          </div>
        </div>
<CustomAccordion />
      </div>
    </div>
  )
}

export default Services