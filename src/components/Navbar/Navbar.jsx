import React,{useState} from 'react'
import "./Navbar.scss";
import { Button, Text, Image } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
 import{Link,NavLink}from"react-router-dom"
 import { RiSunLine } from "react-icons/ri";
 import { BsMoon } from "react-icons/bs";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
 
const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState(true);
    const changeMode = () => {
        setMode(!mode);
        toggleColorMode();
      };
      console.log("mode",mode)
  return (
    <>
  <nav className={mode?'main-nav':"dark-mode"}>
    <div className='logo'>
        <Link to="/">
        <h2  style={{ fontFamily: "'Brush Script MT', cursive"}}  >S<span  
        style={{ fontFamily: "Copperplate, Papyrus, fantasy"}}
        >achin</span></h2>
        </Link>

    </div>
    <div   className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
       <ul>
        <NavLink to="/" >
        <li>
            home
        </li>
        </NavLink>
        <NavLink to="/about" >
        <li>
            About
        </li>
        </NavLink>
        <li>
            Skills
        </li>

        <NavLink to="/contect" >
        <li>
            Contect
        </li>
        </NavLink>
        <NavLink to="/projects" >
        <li>
            Projects
        </li>
        </NavLink>
        <li>
        <Link
              href="https://drive.google.com/file/d/180DeCPDUcA8iz30nam0waEoJQE64FWQY/view"
              target={"_blank"}
              _hover={{ textDecoration: "none" }}
            >
               <Button  className='resumeBTN'
                bg={"rgb(1, 75, 97);"}
                _hover={{ bg: "rgb(14, 129, 165)" }}
                color="white"
                variant={"solid"}
                // width="120px"
                h="35px"
                marginTop="8px"
                borderRadius="3px"
                marginBottom={"10px"}
                fontSize="18px"
              >  
                Resume
              </Button>
            </Link>
        </li>
       </ul>
    </div>
     <div className="social-media">
        <ul>
            <li>
            <Button 
        className="colorModeSwap"
        size="lg"
        // mr="2"
        borderRadius={7}
        marginTop={2}
        padding={2}
        paddingLeft={3}
        paddingRight={3}
        onClick={() => {
          changeMode();
        }}
      >
        {!mode && <RiSunLine  style={{fontSize:"20px"}} />}
        {mode && <BsMoon style={{fontSize:"20px"}}/>}
      </Button>
            </li>
        </ul>
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                 {showMediaIcons?<RxCross1/>:<GiHamburgerMenu />}  
            </a>
          </div>
     </div>

  </nav>
      
    </>
  )
}

export default Navbar