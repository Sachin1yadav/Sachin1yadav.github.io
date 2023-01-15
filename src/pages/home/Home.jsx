import { Button } from '@chakra-ui/react'
import React from 'react'
import "./Home.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";
const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed:70,
      strings: ["Full Stack Developer", "Designer","Problem Solver" ],
    });
  }, []);
  return (
     
    <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="./pic captuer.PNG" alt="" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Sachin Yadav</h1>
        <h3>
          I'm a <span ref={textRef}></span>
        </h3>
        <Button className='resume'>Resume</Button>
      </div>
    
    </div>
  </div>
  )
}

export default Home