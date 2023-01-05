import "./about.scss"
import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='aboutmaindiv'> 
      <p className="heading">All <span style={{color:"red"}}>About</span>  Me </p>
    <div className="aboutContent">
      <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200" className="aboutGif">
              {/* src="./homeImage.png" */}
        <img src="./homeImage.png"alt="about" />
      </div>
      <div  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200" className="aboutInfo">
        <ul className="aboutInfoUl">
        <li data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1100" className="aboutInfoli">Hello! My name is Sachin Yadav & I enjoy creating things that live on the internet. 
          I'm a passionate Developer,with strong addministrative & communication skills,good attention to details & the ability to write efficient code.
        </li>
        <hr />
        <li  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000" className="aboutInfoli"> Self-motivated and aspiring full stack web developer capable
of writing optimized code using HTML, CSS, Javascript and
React. A team player who is passionate about coding. Looking
for a challenging role in a growth oriented organisation.
        </li>
        <hr />
        <li  className="aboutInfoli">Always looking for ways to improve and expand my knowledge and skills.
        </li>
        <hr />
        
        </ul>
        
      </div>
    </div>
    </div>
  )
}

export default About