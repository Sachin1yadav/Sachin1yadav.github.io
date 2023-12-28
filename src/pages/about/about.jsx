import "./about.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="aboutmaindiv" id="about">
      <p className="heading">
        <span style={{ color: "red" }}>About</span> Me{" "}
      </p>
      <div className="aboutContent">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
          className="aboutGif"
        >
          {/* src="./homeImage.png" */}
          {/* <img src="./homeImage.png"alt="about" /> */}
          {/* <img src="https://img.favpng.com/12/22/25/web-development-programmer-software-development-software-developer-computer-software-png-favpng-Z3dPn4z7P67KZehEDkJph8Hqi.jpg" alt="" /> */}
          <img
            src="https://ouch-cdn2.icons8.com/tst7KpcaApDfCPKnEZ10JyduDgzTwcX9uymyQGZCUys/rs:fit:256:237/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTU0/L2Y1NzBjZTYxLWY3/NjEtNGNjYi1hNDhk/LTdhMWIyNjczMmQ3/Ni5wbmc.png"
            alt="About"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
          className="aboutInfo"
        >
          <ul className="aboutInfoUl">
            <li
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1100"
              className="aboutInfoli"
            >
              {" "}
              Greetings! I'm Sachin Yadav, a dedicated software developer, with
              a keen emphasis on front-end development, specifically honing my
              skills in React.js. With 6 months of industry experience, I have
              been an active contributor to various corporate projects,
              specializing in the creation of dynamic and responsive user
              interfaces.
            </li>
            <hr />
            <li
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
              className="aboutInfoli"
            >
              {" "}
              As a self-motivated professional, my goal is to continually evolve as a well-rounded full-stack web developer. Presently, I am actively seeking a role that allows me to leverage and expand upon my front-end expertise within a growth-oriented organization. Eager to contribute to impactful projects, I am enthusiastic about the opportunity to bring my refined front-end skills to your esteemed team.
            </li>
            <hr />
            <li className="aboutInfoli">
              Always looking for ways to improve and expand my knowledge and
              skills.
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
