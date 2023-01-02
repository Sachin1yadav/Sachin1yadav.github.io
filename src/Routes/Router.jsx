

import React from 'react'
import{Route,Routes}from"react-router-dom"
import { About, Contect, Home, Projects } from '../pages'
const AllRouters = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/about' element={<About/>} /> 
    <Route path='/contect' element={<Contect/>} /> 
    <Route path='/project' element={<Projects/>} /> 
    
</Routes>
    </div>
  )
}

export default AllRouters