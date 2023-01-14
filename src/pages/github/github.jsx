import {
    Container,
    Grid,
    GridItem,
    Heading,
    Image,
    Box,
  } from "@chakra-ui/react";
  import React,{useEffect} from "react";
  import GitHubCalendar from "react-github-calendar";
  import AOS from "aos";
import "aos/dist/aos.css";
  const GithubStatus = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    const ImgSrc = [
      {
        src: "https://github-readme-stats.vercel.app/api/top-langs?username=Sachin1yadav&show_icons=true&locale=en&layout=compact",
      },
      {
        src: "https://github-readme-stats.vercel.app/api?username=Sachin1yadav&show_icons=true&locale=en",
      },
      {
        src: "https://github-readme-streak-stats.herokuapp.com/?user=Sachin1yadav&",
      },
    ];
    console.log("git",ImgSrc)
  
    return (
      <Container maxW={"90%"} paddingTop={"50px"}>
        <Heading textAlign={"center"} size={"xl"}  >
          Github Calendar
        </Heading>
        <br />
        <br />
        <Box
           data-aos="fade-up"
           data-aos-anchor-placement="center-bottom"
           data-aos-duration="600"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          p={5}
          boxShadow="rgba(50, 50, 105, 0.25) 0px 2px 10px 0px,rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
          borderRadius={"30px 0px 30px 0px"}
        >
          <GitHubCalendar username="Sachin1yadav" />
        </Box>
        <br />
        <br />
        <Heading textAlign={"center"}   size={"xl"}  >
          Github Stats
        </Heading>
        <br />
        <br />
        <Grid
           data-aos="fade-up"
           data-aos-anchor-placement="center-bottom"
           data-aos-duration="600"
          templateColumns={{
            lg: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            sm: "repeat(1,1fr)",
          }}
          gap="30px"
        >
          {ImgSrc.map((ele, i) => (
            <GridItem  
              key={i}
            >
              <Image width={"100%"}  align={"center"} src={ele.src} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default GithubStatus;
  