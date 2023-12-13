import { Box, Typography, Button, CardMedia } from "@mui/material";
import React from "react";
import "./HomeComponent.scss";
import rightImg from "../../assets/rightImg.svg";
import { gsap } from "gsap";
import { Link, animateScroll as scroll } from "react-scroll";
const HomeComponent = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <Box className="homeComponent">
      <Box className="leftBlock">
        <Box>
          <Typography color="primary" variant="twentyNormal">
            Software Developer
          </Typography>
        </Box>
        <Box className="HelloText">
          <Typography variant="sixtyFourNormal">
            Hello, my name is &nbsp;
          </Typography>
          <Typography variant="sixtyFourNormal" color="primary">
            Badal Mehta
          </Typography>
        </Box>
        <Box>
          <Typography variant="twentyFourNormal">
            Software developer specializing in frontend development. Passionate
            about problem-solving through coding. Committed to creating elegant
            and effective user interfaces.
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
            variant="outlined"
            className="buttonProjects"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            href="https://www.linkedin.com/in/badal-prasad-mehta-1b0a541b1/"
          >
            LinkedIn
          </Button>
        </Box>
      </Box>
      <Box className="rightBlock">
        <CardMedia component="img" image={rightImg} className="homeImage" />
      </Box>
    </Box>
  );
};

export default HomeComponent;
