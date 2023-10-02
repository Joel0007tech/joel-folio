import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
// import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'


const App = () => {
  return (
    <div>
      {/* <Home first="welcome" second="mine" third="you" fourth="gracias"/> */}
      <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path ='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      {/* <Route path='/projects' element={<Projects/>} /> */}
      <Route path='/testimonial' element={<Testimonial/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App