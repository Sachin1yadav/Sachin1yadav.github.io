

import React from 'react'
import{Route,Routes}from"react-router-dom"
 import Home from"../pages/home/Home"
 import About from"../pages/about/about"
 import Contect from"../pages/contect/Contect"
 import Projects from"../pages/project/Projects"
import Skills from '../pages/Skills/Skills'
const AllRouters = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/about' element={<About/>} /> 
    <Route path='/contect' element={<Contect/>} /> 
    <Route path='/projects' element={<Projects/>} /> 
    <Route path='/skills' element={<Skills/>} /> 
  
</Routes>
    </div>
  )
}

export default AllRouters