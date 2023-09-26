import React from 'react'
import { Link } from 'react-router-dom'
import Testimonial from './Testimonial.jsx'
import Contact from './Contact.jsx'
import About from './About'
import Projects from './Projects.jsx'
import Services from './Services.jsx'
import myImage from "../assets/FB_IMG_1632361671640 (2).jpg"


const Home = () => {
  return (
    <div>
        {/* sidenav */}
        <div className='flex'>
          <nav className='flex flex-col bg-black p-5'>
            
            <img src={myImage} alt="image" className=' border rounded-full w-[60%] h-[100px] m-auto'/>
            
            <ul className='flex flex-col gap-6 p-10'>
                <li className='text-white text-base text-center'><Link to="/">Home</Link></li>
                <li className='text-white text-base text-center'><Link to="about">About Me</Link></li>
                <li className='text-white text-base text-center'><Link to="services">What I Do</Link></li>
                <li className='text-white text-base text-center'><Link to="projects">Projects</Link></li>
                <li className='text-white text-base text-center'><Link to="testimonial">What Our Client Says</Link></li>
                <li className='text-white text-base text-center'><Link to="contact">Contact Me</Link></li>
            </ul>
          </nav>
          <div className=' bg-slate-500 w-full'>
             <h3>hello</h3>
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