import React,{useEffect} from "react";
import "./Contect.scss";
import { BsTelephone ,BsGithub,BsLinkedin} from "react-icons/bs";
import { MdEmail  } from "react-icons/md";
import {  FaUserAlt} from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { Button, InputGroup ,Textarea, InputLeftElement, Input,Link } from "@chakra-ui/react";
const Contect = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="maindiv">
      <div className="imgdiv" data-aos="fade-up"
           data-aos-anchor-placement="center-bottom"
           data-aos-duration="600">
        <img
          src="https://web.bynaric.in/wp-content/uploads/2021/04/bulk-sms-06-600x546.png"
          alt="contectGIF"
        />
      </div>
      <div className="contectdiv" data-aos="fade-up"
           data-aos-anchor-placement="center-bottom"
           data-aos-duration="600">
        <div className="socialMedia">
          <div><Link
          href="https://www.linkedin.com/in/sachin-yadav-a5512523a/"
          target={"_blank"}
        >
        <Button className="btn"
            leftIcon={<BsLinkedin />}
            colorScheme="linkedin"
            variant="solid"
            style={{ width:"100%"}}
          >
            Linkedin
          </Button>
          </Link></div>
          <div> <Link href="https://github.com/Sachin1yadav" target={"_blank"}>
          <Button className="btn"
            leftIcon={<BsGithub />}
            colorScheme="gray"
            variant="solid"
            style={{ width:"100%"}}
          >
            Github
          </Button>
          </Link></div>
          <div><Link
          href="https://mail.google.com/mail/u/0/?fs=1&to=sy9084087@gmail.com&tf=cm"
          target={"_blank"}
        > 
          <Button className="btn"
            leftIcon={<MdEmail />}
            colorScheme="orange"
            variant="solid"
            style={{ width:"100%"}}
          >
            Email
          </Button>
          </Link></div>
        
         
          
        </div>
        <div className="form">
        {/* <Input type="tel" fontSize="18px"  height="36px"   variant='filled' placeholder="Name" /> */}
        {/* <Input type="tel" fontSize="18px"  height="36px"   variant='filled' placeholder="Email" /> */}
        <InputGroup>
            <InputLeftElement
             
              children={<FaUserAlt fontSize={18}  color="gray.18" />}
            />
              
            <Input type="tel" fontSize="18px"  height="36px"   variant='filled' placeholder="Name" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
             
              children={<MdEmail fontSize={18} color="gray.300" />}
            />
              
            <Input type="tel" fontSize="18px"  height="36px"   variant='filled' placeholder="Email" />
          </InputGroup>
           <InputGroup>
            <InputLeftElement
             
              children={<BsTelephone fontSize={18} color="gray.300" />}
            />
              
            <Input type="tel" fontSize="18px"  height="36px"   variant='filled' placeholder="Mobile Number" />
          </InputGroup>
          <Textarea variant='filled' fontSize="18px" height="80px"    placeholder='Your Massage' />
          <Button  fontSize="20px"
            leftIcon={<MdEmail />}
            height="40px"
            padding="10px"
            colorScheme="red"
            variant="solid"
            style={{ width:"100%"}}
          >
            Email
          </Button>
 
          
        </div>
      </div>
    </div>
  );
};

export default Contect;
