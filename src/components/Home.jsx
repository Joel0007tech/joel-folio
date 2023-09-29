import React from 'react'
import { Link } from 'react-router-dom'
import Testimonial from './Testimonial.jsx'
import Contact from './Contact.jsx'
import About from './About'
import Projects from './Projects.jsx'
import Services from './Services.jsx'
import myImage from "../assets/FB_IMG_1632361671640 (2).jpg"
import {IoLogoGithub} from "react-icons/io"
import {LuFacebook , LuTwitter} from "react-icons/lu"


const Home = () => {
  return (
    <div className='bg-slate-500'>
        {/* sidenav */}
        <div className='flex'>
          <nav className='flex flex-col bg-black p-5'>
            
            <img src={myImage} alt="image" className=' border rounded-full w-[60%] h-[100px] m-auto'/>
            <p className='text-white text-center mt-6 font-bold text-2xl'>Joel .A.</p>
            
            <ul className='flex flex-col gap-6 p-10 mt-12'>
                <li className='text-white text-base text-center hover:text-green-900'><Link to="/">Home</Link></li>
                <li className='text-white text-base text-center hover:text-green-900'><Link to="about">About Me</Link></li>
                <li className='text-white text-base text-center hover:text-green-900'><Link to="services">What I Do</Link></li>
                <li className='text-white text-base text-center hover:text-green-900'><Link to="projects">Projects</Link></li>
                <li className='text-white text-base text-center hover:text-green-900'><Link to="testimonial">What Our Client Says</Link></li>
                <li className='text-white text-base text-center hover:text-green-900'><Link to="contact">Contact Me</Link></li>
            </ul>
            <div className='flex gap-8 justify-center'>
            <Link href='#'><LuFacebook className='fill-gray-200 text-lg'/></Link>
            <Link href='#'><LuTwitter className='fill-gray-200 text-lg'/></Link>
            <Link href='#'><IoLogoGithub className='fill-gray-200 text-lg'/></Link>
            </div>
          </nav>         
          <div className=' bg-slate-500 w-full p-5 flex flex-col gap-2'>
             <h3 className='text-center font-semibold  mt-48 text-xl text-white'>welcome</h3>
             <p className='text-white text-6xl font-semibold text-center'>I'm a <span className='text-green-600 text-6xl font-bold'>
              Frontend developer</span></p>
              <p className='text-center text-slate-200 text-lg mt-2'>based in Osun state, Nigeria</p>
              <a href="http://" className='text-white bg-transparent border-[3px] border-green-500 rounded-full
              pl-7 pr-7 m-auto p-2 text-base relative bottom-10 hover:text-black hover:bg-green-500'>
                Hire Me</a>
          </div>
        </div>
        <About/>
        <Services/>
        <Projects/>
        <Testimonial/>
        <Contact/>
    </div>
  )
}

export default Home