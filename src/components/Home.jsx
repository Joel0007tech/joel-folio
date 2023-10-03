import React from 'react'
import { Link } from 'react-router-dom'
import Testimonial from './Testimonial.jsx'
import Contact from './Contact.jsx'
import About from './About'
import Projects from './Projects.jsx'
import Services from './Services.jsx'
import myImage from "../assets/FB_IMG_1632361671640 (2).jpg"
import {IoLogoGithub} from "react-icons/io"
import {LuFacebook , LuTwitter} from "react-icons/lu";
import { Link as ScrollLink} from 'react-scroll';
import { Element } from 'react-scroll';



const Home = ({
    home= "Home",
    about= "About Me",
    contact= "Contact Me",
    projects= "Projects",
    services= "My Services",
    testimonial= "What Our Client Says"
}) => {
  return (
    <div className='bg-slate-500'>

        {/* sidenav */}
        <div className='flex'>
          <nav className='flex flex-col bg-black p-5'>
            
            <img src={myImage} alt="image" className=' border rounded-full w-[60%] h-[100px] m-auto'/>
            <p className='text-white text-center mt-6 font-bold text-2xl'>Joel .A.</p>
            
            <ul className='flex flex-col gap-6 p-10 mt-12'>
                <li className='text-white text-base text-center hover:text-green-900'><ScrollLink to="/">{home}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'><ScrollLink to="about">{about}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'><ScrollLink to="services">{services}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'><ScrollLink to="projects">{projects}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'><ScrollLink to="testimonial">{testimonial}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'><ScrollLink to="contact">{contact}</ScrollLink></li>
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
        <Element name="about">
          <About/>
        </Element>
       <Element name="services">
       <Services/>
       </Element>
        <Element name="projects">
        <Projects/>
        </Element>
       <Element name="testimonial">
       <Testimonial/>
       </Element>
      <Element name="contact">
      <Contact/>
      </Element>
    </div>
  )
}

export default Home