import { Button, Link ,Flex} from '@chakra-ui/react'
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
      strings: ["Full Stack Developer","Problem Solver" ],
    });
  }, []);
  return (
     
    <div className="intro" id="/">
    <div className="left">
      <div className="imgContainer">
        <img src="./homePic.png" alt="profilePIc" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Sachin Yadav</h1>
        <h3>
          I'm a <span ref={textRef}></span>
        </h3>
        <Flex gap={"10px"} marginTop={10} wrap={"wrap"}>
            
            <Link
               href="https://drive.google.com/uc?export=download&id=180DeCPDUcA8iz30nam0waEoJQE64FWQY"
              download={"fw20_0965-Sachin-Yadav-Resume.pdf"}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/180DeCPDUcA8iz30nam0waEoJQE64FWQY/view"
                )
              }
              _hover={{ textDecoration: "none" }}
            >
               
              <Button
                bg={"rgb(1, 75, 97);"}
                _hover={{ bg: "rgb(14, 129, 165)" }}
                color="white"
                variant={"solid"}
                width="180px"
                h="35px"
                borderRadius="3px"
                marginBottom={"10px"}
                fontSize="19px"
               
              >
              Download Resume 
              </Button>
            </Link>
          </Flex>
      </div>
    
    </div>
  </div>
  )
}

export default Home