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
      strings: ["Full Stack Developer", "Designer","Problem Solver" ],
    });
  }, []);
  return (
     
    <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="./pic captuer.PNG" alt="profilePIc" />
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
              _hover={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/180DeCPDUcA8iz30nam0waEoJQE64FWQY/view"
            >
              <Button
                bg={"rgb(1, 75, 97);"}
                _hover={{ bg: "rgb(14, 129, 165)" }}
                color="white"
                variant={"solid"}
                // width="120px"
                h="35px"
                borderRadius="3px"
                marginBottom={"10px"}
                fontSize="16px"
              >
                Download CV
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/180DeCPDUcA8iz30nam0waEoJQE64FWQY/view"
              target={"_blank"}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                bg={"rgb(1, 75, 97);"}
                _hover={{ bg: "rgb(14, 129, 165)" }}
                color="white"
                variant={"solid"}
                // width="120px"
                h="35px"
                borderRadius="3px"
                marginBottom={"10px"}
                fontSize="16px"
              >
                View CV
              </Button>
            </Link>
          </Flex>
      </div>
    
    </div>
  </div>
  )
}

export default Home