import React,{useState} from 'react'
import "./Navbar.scss";
import { Button } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
  
 import { RiSunLine } from "react-icons/ri";
 import { BsMoon } from "react-icons/bs";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
 
import { Link } from "react-scroll";
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
        <Link  smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true} to="/">
        <h2  style={{ fontFamily: "'Brush Script MT', cursive"}}  >S<span  
        style={{ fontFamily: "Copperplate, Papyrus, fantasy"}}
        >achin</span></h2>
        </Link>

    </div>
    <div   className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
       <ul>
        <Link  smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true} to="/" >
        <li>
            home
        </li>
        </Link>
        <Link  smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true} to="about" >
        <li>
            About
        </li>
        </Link >
        <Link smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true} to="skills">
        <li>
            Skills
        </li>
        </Link>
        <Link smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true} to="projects">
        <li>
        Projects
        </li>
        </Link>
        <Link  smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true} to="contect" >
        <li>
            Contect
        </li>
        </Link>
        <li>
        <Link
            href="https://drive.google.com/uc?export=download&id=180DeCPDUcA8iz30nam0waEoJQE64FWQY"
            download={"Sachin-Yadav-Resume.pdf"}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/180DeCPDUcA8iz30nam0waEoJQE64FWQY/view"
              )
            }
            _hover={{ textDecoration: "none" }}
            >
               <Button  className='resumeBTN'
                bg={"rgb(1, 75, 97);"}
                _hover={{ bg: "rgb(14, 129, 165)",textDecoration: "none" }}
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