import { Box, Typography, CardMedia, Button } from "@mui/material";
import React from "react";
import "./About.scss";
import myImageNew from "../../assets/myImageNew.svg";
import ContentHead from "../ContentHead/ContentHead";
import { gsap } from "gsap";
import { Link, animateScroll as scroll } from "react-scroll";

const About = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <Box className="aboutBlock" id="about">
      <Box className="imageSection">
        <CardMedia component="img" image={myImageNew} />
      </Box>
      <Box>
        <Box className="aboutBlock">
          <ContentHead text="About me" />
          <Box className="introSec">
            <Typography variant="twentyFourNormal">
              I am a dedicated software developer, specializing in frontend
              technologies. With a passion for solving complex problems through
              code, I strive to create intuitive and visually appealing user
              interfaces. Committed to continuous learning and delivering
              high-quality software solutions for a seamless user experience.
            </Typography>
          </Box>
          <Box className="buttonGrp">
            <Button
              variant="contained"
              className="buttonProjects"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <Link
                to={"projects"}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                Projects
              </Link>
            </Button>
            <Button
              href="https://www.linkedin.com/in/badal-prasad-mehta-1b0a541b1/"
              variant="outlined"
              className="buttonProjects"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
