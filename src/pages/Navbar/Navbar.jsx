import React,{useState} from 'react'
import "./Navbar.css";
import { Button, Text, Image } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
 
// import{Home,About,Projects,ErrorPage,Contect}from"index.js"
// import { Route,Routes } from 'react-router-dom';
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
 
const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState(true);
    const changeMode = () => {
        setMode(!mode);
        toggleColorMode();
      };
  return (
    <>
  <nav className='main-nav'>
    <div className='logo'>
        <h2>Sachin <span>Yadav</span></h2>

    </div>
    <div   className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
       <ul>
        <li>
            home
        </li>
        <li>
            About
        </li>
        <li>
            Skills
        </li>

        <li>
            Contect
        </li>
        <li>
            Project
        </li>
       </ul>
    </div>
     <div className="social-media">
        <ul>
            <li>
            <Button
        className="colorModeSwap"
        size="sm"
        mr="5"
        onClick={() => {
          changeMode();
        }}
      >
        {!mode && "sun"}
        {mode && "moon"}
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