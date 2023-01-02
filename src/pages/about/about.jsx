import "./about.scss"
import React from 'react'

const About = () => {
  return (
    <div className='aboutmaindiv'> 
      <p className="heading">All <span style={{color:"red"}}>About</span>  Me And My <span style={{color:"red"}}>Experience</span> </p>
    <div className="aboutContent">
      <div className="aboutGif">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iLFVaIgmntAtKLAXBPQTu5hUEyv8qMiyqw&usqp=CAU" alt="" />
      </div>
      <div className="aboutInfo"></div>
    </div>
    </div>
  )
}

export default About