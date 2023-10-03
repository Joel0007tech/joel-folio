import React from 'react'

const Contact = ({
  background= "CONTACT",
  frontText ="Get In Touch",
}) => {
  return (
    <div>
      <div className='bg-white'>
      <h1 className='text-[150px] text-slate-200 text-center font-semibold'>{background}</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32'>{frontText}</h3>
        <div className='flex justify-center gap-6'>
           <div className='flex flex-col'>

           </div>
           <div className='flex flex-col'>

           </div>
        </div>
      </div>
    </div>
  )
}

export default Contact