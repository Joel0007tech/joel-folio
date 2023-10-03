import React from 'react';
import {AiFillStar} from "react-icons/ai"

const Testimonial = ({
  background= "TESTIMONIAL",
  frontText ="What Our Client Says",
}) => {
  return (
    <div>
      <div className='pb-16'>
      <h1 className='text-[150px] text-slate-400 text-center font-semibold'>{background}</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32'>{frontText}</h3>
        <div className='flex justify-center gap-10'>
           <div className=' flex flex-col gap-4 bg-green-500 border rounded-lg border-green-500 p-10'>
              <h3 className='text-white text-xl leading-normal font-bold'>Emmet Robbinson</h3>
              <p className='text-white text-md leading-normal'>Joel did a wonderful job, as a frontend developer, <br/>
              deliered his job within the time frame, and also <br/>
              did exceedingly well, developing our company's website,<br/>
              with the best and top-notch functionalities</p>
              <div className='flex'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
           </div>
           <div className=' flex flex-col gap-4 bg-green-500 border rounded-lg border-green-500 p-10'>
              <h3 className='text-white text-xl leading-normal font-bold'>Anita Gbadamosi</h3>
              <p className='text-white text-md leading-normal'>He has a good team spirit, top-notch one without,
              lagging<br/> at everything he does, he worked with us <br/>
              in building a dashboard, and he did a great job from <br/>
              start to finish</p>
              <div className='flex'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Testimonial