import React from 'react'
import Testimonial from './Testimonial.jsx'
import Contact from './Contact.jsx'
import About from './About'
import Projects from './Projects.jsx'
import Services from './Services.jsx'
import myImage from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png"


const Home = () => {
  return (
    <div>
        {/* sidenav */}
        <div className='flex'>
          <nav className='flex flex-col bg-black p-3'>
            <img src={myImage} alt="image" className='w-98 h-96 rounded-full'/>
            <ul className='flex flex-col'>
                <li></li>
            </ul>
          </nav>
          <div className=' bg-slate-500'>
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