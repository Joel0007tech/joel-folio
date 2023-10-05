import React from 'react'

const About = () => {
  return (
    <div>
      <div className='p-3 flex flex-col bg-white'>
          <h1 className='text-[150px] text-slate-200 text-center font-semibold sm:text-2xl'>ABOUT ME</h1>
        <h3 className='font-semibold text-4xl text-center relative bottom-32'>Know Me More</h3>
      <div className='flex relative bottom-12 m-auto gap-32 sm:flex sm:flex-col'>
         <div className='flex flex-col gap-2'>
          <h3 className='text-2xl font-semibold text-green-700'>I'm Joel,
          <span className='text-3xl font-semibold white'> a Frontend Developer</span></h3>
          <p className='text-gray-400 text-md'>
            A Frontend developer with 2yrs plus experience in building webApps
            and websites for<br/> individuals, and companies
            Delivering work within time and budget is my priority, and it has <br/>
            been what I do for so long
          </p>
         </div>
         <div className='flex flex-col gap-4'>
          <p className='text-slate-500 text-base font-bold border border-t-0 border-r-0 border-l-0 border-b-gray-300 p-2'>
            Name : <span  className='font-normal'>Joel .A.</span></p>
          <p className='text-slate-500 text-base font-bold border border-t-0 border-r-0 border-l-0 border-b-gray-300 p-2'>
            Email : <span  className='font-normal text-green-500'>ajiolajoel@gmail.com</span> </p>
          <p className='text-slate-500 text-base font-bold border border-t-0 border-r-0 border-l-0 border-b-gray-300 p-2'>
            Address : <span  className='font-normal'>Osun, Nigeria</span></p>
          <a href="http://" className='text-white bg border-[3px] bg-green-500 rounded-full
              pl-7 pr-7 p-2 text-center text-base hover:text-black hover:bg-green-500 mt-3'>
                Download CV</a>
         </div>
      </div>
      <div className='flex gap-28 justify-center sm:flex sm:flex-col'>
        <div className='flex flex-col'>
          <p className='text-[70px] font-bold text-slate-500'>2+</p>
          <p className='text-md relative right-4 font-semibold text-slate-400'>Years Experience</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-[70px] font-bold text-slate-500'>3+</p>
          <p className='text-md relative right-4 font-semibold text-slate-400'>Happy Clients</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-[70px] font-bold text-slate-500'>10+</p>
          <p className='text-md text-center font-semibold text-slate-400'>Projects Done</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-[70px] font-bold text-slate-500'>2</p>
          <p className='text-md text-center font-semibold text-slate-400'>Awards</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About