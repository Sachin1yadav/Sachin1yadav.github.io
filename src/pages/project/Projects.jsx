import React from 'react'
import { useEffect } from "react";
import {   FaLink} from "react-icons/fa";
import {  BsGithub } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.scss"
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='prodiv'>
       <p   className="heading">My <span style={{color:"red"}}>Creative</span> Projects</p>
     
        <div className='proItemdiv' data-aos="flip-up"
          data-aos-duration="1000">
          <img className='proImg' src="./btmatPOSTER.PNG" alt="BTMART" />
       <p className='title'>BT Mart</p>
       <div className="LinkDiv">
       <button>  <FaLink/> <span>Deploy</span> </button>
        <button ><BsGithub/><span>Code</span></button>
        <button><BsFillCameraVideoFill/><span>Video</span></button>
        </div>
       <p className='details'>       Skin Store is e-commerce website which offer Cosmetic Products.
       Skin Store is e-commerce website which offer Cosmetic Products.
       Skin Store is e-commerce website which offer Cosmetic Products.Skin Store is e-commerce website which offer Cosmetic Products.</p>
       <div className='techStack'>
        <p>Chakra UI,</p>
       <p>HTML</p>
       <p>CSS,</p>
       <p>JS,</p>
       <p>REACT,</p>
       
       <p className='tech'>Tech Stack :</p>
       </div>
        </div>

        {/* .................. */}
         
        <div className='proItemdiv' data-aos="flip-up"
          data-aos-duration="1000">
          <img className='proImg' src="./hindustanPOSTER.PNG" alt="hindustanTimss" />
       <p className='title'>Hindustan Times</p>
       <div className="LinkDiv">
       <button>  <FaLink/> <span>Deploy</span> </button>
        <button ><BsGithub/><span>Code</span></button>
        <button    ><BsFillCameraVideoFill/><span>Video</span></button>
        </div>
       <p className='details'>       Skin Store is e-commerce website which offer Cosmetic Products.
       Skin Store is e-commerce website which offer Cosmetic Products.
       Skin Store is e-commerce website which offer Cosmetic Products.Skin Store is e-commerce website which offer Cosmetic Products.</p>
       <div className='techStack'>
       <p>HTML</p>
       <p>CSS,</p>
       <p>JS,</p>
       
       
       <p className='tech'>Tech Stack :</p>
       </div>
        </div>
        
        <div className='proItemdiv' data-aos="flip-up"
          data-aos-duration="1000">
          <img className='proImg' src="./urbanPost.PNG" alt="urbancompany" />
       <p className='title'>Urban Company</p>
       <div className="LinkDiv">
       <button>  <FaLink/> <span>Deploy</span> </button>
        <button ><BsGithub/><span>Code</span></button>
        <button><BsFillCameraVideoFill/><span>Video</span></button>
        </div>
       <p className='details'>       Skin Store is e-commerce website which offer Cosmetic Products.
       Skin Store is e-commerce website which offer Cosmetic Products.
       Skin Store is e-commerce website which offer Cosmetic Products.Skin Store is e-commerce website which offer Cosmetic Products.</p>
       <div className='techStack'>
       <p>HTML</p>
       <p>CSS,</p>
       <p>JS,</p>
       <p>REACT,</p>
       
       <p className='tech'>Tech Stack :</p>
       </div>
        </div>
        
        <div className='proItemdiv' data-aos="flip-up"
          data-aos-duration="1000">
          <img className='proImg' src="https://images.unsplash.com/photo-1671726805766-07bd41c8ebcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
       <p className='title'>Hindustan Times</p>
       <div className="LinkDiv">
       <button>  <FaLink/> <span>Deploy</span> </button>
        <button ><BsGithub/><span>Code</span></button>
        <button><BsFillCameraVideoFill/><span>Video</span></button>
        </div>
       <p className='details'>       Skin Store is e-commerce website which offer Cosmetic Products.
       Skin Store is e-commerce website which offer Cosmetic Products.
       Skin Store is e-commerce website which offer Cosmetic Products.Skin Store is e-commerce website which offer Cosmetic Products.</p>
       <div className='techStack'>
       <p>HTML</p>
       <p>CSS,</p>
       <p>JS,</p>
       <p>REACT,</p>
       
       <p className='tech'>Tech Stack :</p>
       </div>
        </div>
       
        
      
       {/* ............... */}
    </div>
  )
}

export default Projects