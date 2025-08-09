import React,{useState} from 'react'

import Testimonial from './Testimonial'
import Contact from './Contact'
import About from './About'
import Projects from './Projects.js'
import Services from './Services.js'

import {IoLogoGithub} from "react-icons/io"
import {LuLinkedin , LuTwitter} from "react-icons/lu";
import { BiCodeAlt } from 'react-icons/bi'
import { Element, Link as ScrollLink } from 'react-scroll';

import { FlipWords } from './Flipwords'
import ShimmerButton from './Shimmer'

import { NavLinks } from './index'



// import {myImage} from "../assets/FB_IMG_1632361671640 (2).jpg"


interface NavLink {
  text: string;
  destination: string;
}

interface HomeProps {
  mobileLogo?: string;
}

const Home: React.FC<HomeProps> = ({ 
    mobileLogo = "{.J.}"
}) => {

  
const [open, setOpen] = useState(false);

  return (
    <div className='bg-gradient-to-b from-slate-900 to-green-600'>

        {/* sidenav */}
        <div className='flex sm:hidden'>
          <nav className='flex flex-col bg-black p-5'>
            
            {/* <img src={myImage} alt="image" className=' border-[3px] rounded-md border-gray-500' data-aos="fade" 
            data-aos-delay="200" data-aos-duration="1000"/> */}
            <p className='text-white text-center mt-6 font-bold text-2xl'>Joel .A.</p>
            
            <ul className='flex flex-col gap-6 p-10' data-aos="fade-up" data-aos-duration="1000">
              {(NavLinks as NavLink[]).map((lists: NavLink) => (
                <li key={lists.text} className='text-white text-center hover:text-green-500'>
                  <ScrollLink to={lists.destination} className=' cursor-pointer' smooth={true} duration={500}>{lists.text}</ScrollLink>
                </li> )
              )}
            </ul>
            <div className='flex gap-8 justify-center'>
            <a href='https://www.linkedin.com/in/joelajiola/'><LuLinkedin className='fill-gray-200 text-lg'/></a>
            <a href='https://twitter.com/Jotechy'><LuTwitter className='fill-gray-200 text-lg'/></a>
            <a href='https://github.com/Joel0007tech'><IoLogoGithub className='fill-gray-200 text-lg'/></a>
            </div>
          </nav>         
          <div className='w-full p-5 flex flex-col gap-10' data-aos="fade" data-aos-duration="1000" id='home-bg'>
             <h3 className='text-center font-semibold  mt-10 text-2xl text-white'>Welcome <span>👋</span></h3>
      
            <div className="text-4xl font-bold flex justify-center mt-10 relative bottom-6">
      I love{" "}
      <FlipWords
        words={["developing", "building","crafting", "designing"]}
        duration={3000}
        className="uppercase"
      />
      {" "}amazing experiences
    </div>
              
              <a href="http://">
                <ShimmerButton/>
                </a>
               
          </div>
        </div>
        <div className='sm:block hidden'>
            <div className='flex p-3 justify-between'>
              <a href='https://github.com/Joel0007tech' target='_blank' className='text-2xl text-white'>{mobileLogo}</a>
              <BiCodeAlt className='text-2xl text-white relative float-right' onClick={()=> setOpen(!open)}/>
              </div>
              {open && (
                  <ul className='flex flex-col gap-6 p-10 mt-12 sm:mt-0' data-aos="fade-up" data-aos-duration="1000">
                  {NavLinks.map((lists) => (
                 <li key={lists.text} className='text-white hover:text-green-500 text-center'>
                  <ScrollLink to={lists.destination} className=' cursor-pointer' smooth={true} duration={500}>{lists.text}</ScrollLink>
                 </li> )
                  )}
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