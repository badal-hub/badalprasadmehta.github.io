import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import ContentHead from "../ContentHead/ContentHead";
import uiux from "../../assets/uiux.svg";
import web from "../../assets/web.svg";
import wp from "../../assets/wp.svg";
import gi from "../../assets/git.svg";
import "./Services.scss";
import Carousel from "react-multi-carousel";
const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
  
    <Box className="servicesBlock" id="services">
      <ContentHead text="Services" />
      <Box className="innerBox">
      <Carousel responsive={responsive} infinite={true}>
        {arrOfData.map((element) => {
          return (
            <Box className="singleBox" key={element.id}>
              <Box className="imgBox">
                <CardMedia component="img" src={element.url} />
              </Box>
              <Box className="headingLine">
                <Typography variant="h4">{element.heading}</Typography>
              </Box>
              <Box>
                <Typography variant="h6">{element.para}</Typography>
              </Box>
            </Box>
          );
        })}
    </Carousel>

      </Box>
    </Box>
  );
};

export default Services;
const arrOfData = [
  {
    id: 1,
    url: uiux,
    heading: "UI/UX Design",
    para: "Collaborating with designers to implement visually appealing user interfaces. Ensuring a seamless and intuitive user experience through effective design implementation.",
  },
  {
    id: 2,
    url: web,
    heading: "Web Development",
    para: "Building responsive and interactive websites.Implementing modern design principles and user experience (UX) techniques.",
  },
  {
    id: 3,
    url: wp,
    heading: "Responsive Design",
    para: "Designing and developing websites that adapt seamlessly to various devices and screen sizes.Implementing responsive design principles for a consistent user experience on desktops, tablets, and mobile devices.",
  },
  {
    id: 4,
    url: gi,
    heading: "Version Control",
    para: "Using version control systems (e.g., Git) to track changes and collaborate effectively with a development team.",
  },
];
