import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Testimonial from './Testimonial.jsx'
import Contact from './Contact.jsx'
import About from './About'
import Projects from './Projects.jsx'
import Services from './Services.jsx'
import myImage from "../assets/FB_IMG_1632361671640 (2).jpg"
import {IoLogoGithub} from "react-icons/io"
import {LuFacebook , LuTwitter} from "react-icons/lu";
import { BiCodeAlt } from 'react-icons/bi'
import { Link as ScrollLink} from 'react-scroll';
import { Element } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();

const Home = ({
    home= "Home",
    about= "About Me",
    contact= "Contact Me",
    projects= "Projects",
    services= "My Services",
    testimonial= "What Our Client Says",
    mobileLogo="{.J.}"
}) => {

  
const [open, setOpen] = useState(null);

  return (
    <div className='bg-slate-500'>

        {/* sidenav */}
        <div className='flex sm:hidden'>
          <nav className='flex flex-col bg-black p-5'>
            
            <img src={myImage} alt="image" className=' border-[3px] rounded-md border-gray-500' data-aos="fade" 
            data-aos-delay="200" data-aos-duration="1000"/>
            <p className='text-white text-center mt-6 font-bold text-2xl'>Joel .A.</p>
            
            <ul className='flex flex-col gap-6 p-10 mt-12' data-aos="fade-up" data-aos-duration="1000">
                <li className='text-white text-base text-center hover:text-green-900'>
                  <ScrollLink to="/" className=' cursor-pointer' smooth={true} duration={500}>{home}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'>
                  <ScrollLink to="about" className='cursor-pointer' smooth={true} duration={500}>{about}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'>
                  <ScrollLink to="services" className='cursor-pointer' smooth={true} duration={500}>{services}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'>
                  <ScrollLink to="projects" className='cursor-pointer' smooth={true} duration={500}>{projects}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'>
                  <ScrollLink to="testimonial" className='cursor-pointer' smooth={true} duration={500}>{testimonial}</ScrollLink></li>
                <li className='text-white text-base text-center hover:text-green-900'>
                  <ScrollLink to="contact" className='cursor-pointer' smooth={true} duration={500}>{contact}</ScrollLink></li>
            </ul>
            <div className='flex gap-8 justify-center'>
            <Link href='#'><LuFacebook className='fill-gray-200 text-lg'/></Link>
            <Link href='#'><LuTwitter className='fill-gray-200 text-lg'/></Link>
            <Link href='#'><IoLogoGithub className='fill-gray-200 text-lg'/></Link>
            </div>
          </nav>         
          <div className='w-full p-5 flex flex-col gap-2' data-aos="fade" data-aos-duration="1000" id='home-bg'>
             <h3 className='text-center font-semibold  mt-48 text-xl text-white'>welcome</h3>
             <p className='text-white text-6xl font-semibold text-center'>I'm a <span className='text-green-600 text-6xl font-bold'>
              Frontend developer</span></p>
              <p className='text-center text-slate-200 text-lg mt-2'>based in Osun state, Nigeria</p>
              <a href="http://" className='text-white bg-transparent border-[3px] border-green-500 rounded-full
              pl-7 pr-7 m-auto p-2 text-base relative bottom-10 hover:text-black hover:bg-green-500'>
                Hire Me</a>
               
          </div>
        </div>
        <div className='sm:block hidden'>
            <div className='flex p-3 justify-between'>
              <a href='https://github.com/Joel0007tech' target='_blank' className='text-2xl text-white'>{mobileLogo}</a>
              <BiCodeAlt className='text-2xl text-white relative float-right' onClick={()=> setOpen(!open)}/>
              </div>
              {open && (
                  <ul className='flex flex-col gap-6 p-10 mt-12 sm:mt-0' data-aos="fade-up" data-aos-duration="1000">
                  <li className='text-white text-base text-center hover:text-green-900'>
                    <ScrollLink to="/" className=' cursor-pointer' smooth={true} duration={500}>{home}</ScrollLink></li>
                  <li className='text-white text-base text-center hover:text-green-900'>
                    <ScrollLink to="about" className='cursor-pointer' smooth={true} duration={500}>{about}</ScrollLink></li>
                  <li className='text-white text-base text-center hover:text-green-900'>
                    <ScrollLink to="services" className='cursor-pointer' smooth={true} duration={500}>{services}</ScrollLink></li>
                  <li className='text-white text-base text-center hover:text-green-900'>
                    <ScrollLink to="projects" className='cursor-pointer' smooth={true} duration={500}>{projects}</ScrollLink></li>
                  <li className='text-white text-base text-center hover:text-green-900'>
                    <ScrollLink to="testimonial" className='cursor-pointer' smooth={true} duration={500}>{testimonial}</ScrollLink></li>
                  <li className='text-white text-base text-center hover:text-green-900'>
                    <ScrollLink to="contact" className='cursor-pointer' smooth={true} duration={500}>{contact}</ScrollLink></li>
              </ul>
                )
              }
        </div>
        <Element name="about" data-aos="fade-up" data-aos-duration="1000">
          <About/>
        </Element>
       <Element name="services" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
       <Services/>
       </Element>
        <Element name="projects" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
        <Projects/>
        </Element>
       <Element name="testimonial" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
       <Testimonial/>
       </Element>
      <Element name="contact" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
      <Contact/>
      </Element>
    </div>
  )
}

export default Home