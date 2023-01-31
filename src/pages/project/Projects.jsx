import React from "react";
import { useEffect } from "react";
import { FaLink } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.scss";
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="prodiv" id="projects">
      <p className="heading">
        My <span style={{ color: "red" }}>Creative</span> Projects
      </p>

      <div className="proItemdiv" data-aos="flip-up" data-aos-duration="1000">
        <img className="proImg" src="./btmatPOSTER.PNG" alt="BTMART" />
        <p className="title">BT Mart</p>
        <div className="LinkDiv">
          <Link href="https://sachin-bt-mart.netlify.app/" target={" "}>
            <button>
              {" "}
              <FaLink /> <span>Deploy</span>{" "}
            </button>
          </Link>
          <Link
            target={" "}
            href="https://github.com/Sachin1yadav/gorgeous-vest-5296/tree/main/my-app"
          >
            <button>
              <BsGithub />
              <span>Code</span>
            </button>
          </Link>
           
        </div>
        <p className="details">
          {" "}
          BT Mart is a Mini shop you can buy any product from here. Actually is
          a clone of a JIO Mart but all the UI part is cusmised by me. In this
          project, you will find some animations. you can Add any product to
          your cart, Order and you can also cancel your Order. and one more
          thing it an only front-end project .
        </p>
        <div className="techStack">
          <p>BootStrap</p>
          <p>Chakra UI,</p>
          <p>HTML</p>
          <p>CSS,</p>
          <p>JS,</p>
          <p>REACT,</p>

          <p className="tech">Tech Stack :</p>
        </div>
      </div>

      {/* .................. */}

      <div className="proItemdiv" data-aos="flip-up" data-aos-duration="1000">
        <img
          className="proImg"
          src="./hindustanPOSTER.PNG"
          alt="hindustanTimss"
        />
        <p className="title">Hindustan Times</p>
        <div className="LinkDiv">
          <Link href="https://majestic-muffin-49fd81.netlify.app/" target={" "}>
            <button>
              {" "}
              <FaLink /> <span>Deploy</span>{" "}
            </button>
          </Link>
          <Link
            target={" "}
            href="https://github.com/Sahil9214/Utkarshfw20_1149-intersting-fork-8458"
          >
            <button>
              <BsGithub />
              <span>Code</span>
            </button>
          </Link>
           
        </div>
        <p className="details">
          {" "}
          It's a group project of 5 members of the team within 6 days, with the
          help of HTML, CSS, and JS. It's a clone of the Hindustan Times. Which
          is an online news website. you can find news in real-time. In this
          project, I was responsible for Footer, Navbar, and category session.
          please have a look at this project.
        </p>
        <div className="techStack">
          <p>HTML</p>
          <p>CSS,</p>
          <p>JS,</p>

          <p className="tech">Tech Stack :</p>
        </div>
      </div>

      <div className="proItemdiv" data-aos="flip-up" data-aos-duration="1000">
        <img className="proImg" src="./urbanPost.PNG" alt="urbancompany" />
        <p className="title">Urban Company</p>
        <div className="LinkDiv">
          <Link href="https://urbanbysachin.netlify.app" target={" "}>
            <button>
              {" "}
              <FaLink /> <span>Deploy</span>{" "}
            </button>
          </Link>
          <Link
            target={" "}
            href="https://github.com/Sachin1yadav/thin-thumb-2475"
          >
            <button>
              <BsGithub />
              <span>Code</span>
            </button>
          </Link>
           
        </div>
        <p className="details">
          It's a clone of Urban Company. Urban company is a service provider
          company at your doorstep. It's an individual project within 5 days
          with the help of React JSX. It's only a front-end project. Please have
          a look at it. i hope you will like it .
        </p>
        <div className="techStack">
          <p>HTML</p>
          <p>CSS,</p>
          <p>JS,</p>
          <p>REACT,</p>

          <p className="tech">Tech Stack :</p>
        </div>
      </div>

      <div className="proItemdiv" data-aos="flip-up" data-aos-duration="1000">
        <img className="proImg" src="./trans2.PNG" alt="translater" />
        <p className="title">Audio Language Translator </p>
        <div className="LinkDiv">
          <Link href="https://sachin-translater.netlify.app/" target={" "}>
            <button>
              {" "}
              <FaLink /> <span>Deploy</span>{" "}
            </button>
          </Link>
          <Link target={" "} href="https://github.com/Sachin1yadav/Translator">
            <button>
              <BsGithub />
              <span>Code</span>
            </button>
          </Link>
           
        </div>
        <p className="details">
          {" "}
          It's a Languages Translator according to Country & Language.
It's a mini-project completed in 1 day. with the help of React JSX and Rest API.
One more thing you can also audio play your Text in Both languages.
        </p>
        <div className="techStack">
        <p>Rest API</p>
          <p>HTML,</p>
          <p>CSS,</p>
          <p>JS,</p>
          <p>REACT,</p>


          <p className="tech">Tech Stack :</p>
        </div>
      </div>

      {/* ............... */}
    </div>
  );
};

export default Projects;
