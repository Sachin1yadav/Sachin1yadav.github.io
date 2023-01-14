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
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            className="skillimg"
          />

          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            TypeScript
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
            src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/04/cypress.png?fit=364%2C364&ssl=1"
            className="skillimg"
          />
          <Text className="text" mt={5} fontSize="18px" fontWeight={900}>
            Cypress
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
      </SimpleGrid>
      {/* <Image src={html5} /> */}
    </div>
  );
};

export default Skills;
