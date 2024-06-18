import "./about.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./Timeline";
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
              I am a skilled Frontend Developer with 1.5 years of experience. I
              have expertise in HTML5, CSS3, JavaScript, React, Redux,
              TypeScript, and Next.js.
            </li>
            <hr />
            <li
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
              className="aboutInfoli"
            >
              {" "}
              My professional background includes: Junior Software Engineer at
              SPS (Feb '24 — Present) Frontend Developer at Furation Tech
              Solutions Pvt (Jan '23 — Jan '24)
            </li>
            <hr />
            <li className="aboutInfoli">
              I excel in creating dynamic web interfaces and have experience
              with Tailwind CSS, Git/GitHub, and Postman for API testing. I hold
              a B.Sc in Math from VBSP University and completed Full Stack Web
              Development training at Masai School.
            </li>
            <hr />
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
          className="aboutGif"
        >
          {/* src="./homeImage.png" */}
          {/* <img src="./homeImage.png"alt="about" /> */}
          {/* <img src="https://img.favpng.com/12/22/25/web-development-programmer-software-development-software-developer-computer-software-png-favpng-Z3dPn4z7P67KZehEDkJph8Hqi.jpg" alt="" /> */}
          {/* <img
            src="https://camo.githubusercontent.com/01c83210f7feb975ea3b9a852808beb6689425add471f76f942c15875626af5d/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
            alt="About"
          /> */}
         
           <ul className="aboutInfoUl">
            <li
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1100"
              className="aboutInfoli"
            >
               <Timeline/>
            </li>
            </ul>

        </div>
      
      </div>
      
    </div>
  );
};

export default About;
