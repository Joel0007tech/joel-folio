import React from 'react';
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai"
import { animateScroll as scroll } from 'react-scroll';
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 500, // Duration of the scrolling animation in milliseconds
    smooth: 'easeInOutQuart', // Type of easing for the scrolling animation
  });
};

const Contact = ({
  background= "CONTACT",
  frontText ="Get In Touch",
  address="ADDRESS",
  note="SEND US A NOTE"
}) => {
  return (
    <div>
      <div className='bg-white'>
      <h1 className='text-[150px] text-slate-200 text-center font-semibold'>{background}</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32'>{frontText}</h3>
        <div className='flex justify-center gap-6'>
           <div className='flex flex-col gap-4'>
           <h3>{address}</h3>
           <p>Osun State, Nigeria</p>
           <p></p>
           </div>
           <div className='flex flex-col'>
            <h3>{note}</h3>
           </div>
        </div>
        <BsFillArrowUpCircleFill onClick={scrollToTop} />
      </div>
      </div>
  )
}

export default Contact