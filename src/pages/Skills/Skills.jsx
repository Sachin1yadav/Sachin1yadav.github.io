import React from "react";
import { useEffect } from "react";
import "./Skills.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
       <div id="skills">
      <p className="heading">
        My <span style={{ color: "red" }}>Technical</span> Skills
      </p>

      <SimpleGrid
        minChildWidth="140px"
        w="90%"
        m="auto"
        gap={10}
        mb="50"
        className="skillsDiv"
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://cdn.cdnlogo.com/logos/h/84/html.svg"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            HTML
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/c/18/css.svg"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            CSS
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/j/44/javascript.svg"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            JavaScript
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/r/63/react.svg"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            React
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/r/37/redux.svg"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Redux
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/m/25/mongodb.svg"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            MongoDB
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/express.svg"
            className="skillimg"
          />

          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Express
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static.cdnlogo.com/logos/n/79/node-js.svg"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Node JS
          </Text>
        </Box>
        {/* <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Next JS
          </Text>
        </Box> */}
        {/* <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            className="skillimg"
          />

          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            TypeScript
          </Text>
        </Box> */}
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Sass
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Chakra UI
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?202105010000024"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            BootStrap
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
 src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
 className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Tailwind 
          </Text>
        </Box>
      </SimpleGrid>
      {/* <Image src={html5} /> */}
    </div>
    <div id="skills">
      <p className="heading">
        Tools <span style={{ color: "red" }}>, That I </span> use
      </p>

      <SimpleGrid
        minChildWidth="140px"
        w="90%"
        m="auto"
        gap={10}
        mb="50"
        className="skillsDiv"
      >
         <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://static-00.iconduck.com/assets.00/npm-icon-512x512-qtfdrf37.png"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            npm
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            POST MAN
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://w7.pngwing.com/pngs/905/947/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            VS Code
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Vercel
          </Text>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://cdn.worldvectorlogo.com/logos/netlify.svg"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
           Netlify
          </Text>
        </Box>
         
        
         
      
         
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Git
          </Text>
        </Box>
        
         
        <Box
          data-aos="zoom-in"
          data-aos-duration="1000"
          colSpan={1}
          w="100%"
          m="auto"
          rounded="md"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          className="skillsLogo"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1200px-JSON_vector_logo.svg.png"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            JSON
          </Text>
        </Box>
         
         
      </SimpleGrid>
      {/* <Image src={html5} /> */}
    </div>
    </div>
   
  );
};

export default Skills;
