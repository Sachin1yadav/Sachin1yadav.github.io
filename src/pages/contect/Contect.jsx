import React,{useEffect} from "react";
import "./Contect.scss";
import { BsTelephone ,BsGithub,BsLinkedin} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "aos/dist/aos.css";
import AOS from "aos";
import { Button, InputGroup ,Textarea, InputLeftElement, Input } from "@chakra-ui/react";
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
        <Button
            leftIcon={<BsLinkedin />}
            colorScheme="linkedin"
            variant="solid"
            style={{ width:"100%"}}
          >
            Linkedin
          </Button>
          <Button
            leftIcon={<BsGithub />}
            colorScheme="gray"
            variant="solid"
            style={{ width:"100%"}}
          >
            Github
          </Button>
          <Button
            leftIcon={<MdEmail />}
            colorScheme="orange"
            variant="solid"
            style={{ width:"100%"}}
          >
            Email
          </Button>
        </div>
        <div className="form">
        
        <Input variant='Name'height="36px" fontSize="18px" color="black" backgroundColor="gray.200" placeholder='Filled' />
        <Input variant='Email'height="36px" fontSize="18px"  backgroundColor="gray.200" placeholder='Filled' />
          <InputGroup>
            <InputLeftElement
             
              children={<BsTelephone color="gray.300" />}
            />
              
            <Input type="tel" fontSize="18px"  height="36px" backgroundColor="gray.200" variant='filled' placeholder="Mobile Number" />
          </InputGroup>
          <Textarea variant='filled' fontSize="18px" height="80px" backgroundColor="gray.200"  placeholder='Your Massage' />
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
