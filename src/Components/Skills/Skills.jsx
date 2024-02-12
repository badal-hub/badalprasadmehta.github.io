import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import ContentHead from "../ContentHead/ContentHead";
import mui from "../../assets/mui.svg";
import reactnew from "../../assets/reactnew.svg";
import redux from "../../assets/redux.svg";
import scss from "../../assets/scss.svg";
import js from "../../assets/js.svg";
import css from "../../assets/css.svg";
import tailwind from "../../assets/tailwind.svg";
import saga from "../../assets/saga.svg";
import html from "../../assets/html.svg";
import jest from "../../assets/jest.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.scss";
const Skills = () => {
  return (
    <Box className="skillBlock" id="skills">
      <Box className="skillComponent">
      <ContentHead text="Skills" />
        <SkillComponent />
      </Box>
    </Box>
  );
};

export default Skills;
const data = [
  { id: 1, img: mui, text: "Mui" },
  { id: 2, img: reactnew, text: "React Js" },
  { id: 3, img: scss, text: "SCSS" },
  { id: 4, img: js, text: "Javascript" },
  { id: 5, img: redux, text: "Redux" },
  { id: 6, img: html, text: "Html" },
  { id: 7, img: css, text: "CSS" },
  { id: 8, img: saga, text: "Saga" },
  { id: 9, img: tailwind, text: "Tailwind CSS" },
  { id: 10, img: jest, text: "Jest" },
];

const SkillComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box>
      <Carousel responsive={responsive} infinite={true}>
        {data.map((Element) => {
          return (
            <Box key={Element.id} className="imgAndText">
              <CardMedia
                component="img"
                image={Element.img}
                className="imgWidth"
              ></CardMedia>

              <Typography variant="twentyNormal" sx={{ textTransform: "none" }}>
                {Element.text}
              </Typography>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};
