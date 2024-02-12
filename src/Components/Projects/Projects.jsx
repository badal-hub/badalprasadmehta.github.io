import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import ContentHead from "../ContentHead/ContentHead";
import "./Projects.scss";
import pro1 from "../../assets/gallery.jpg";
import pro2 from "../../assets/pro2.png";
import pro3 from "../../assets/pro3.jpg";
import Modal from "@mui/material/Modal";
import bj from "../../assets/bj.png";
import Carousel from "react-multi-carousel";
import digi from "../../assets/digi.png";
import swiggy from "../../assets/swiggy.png";
import { gsap } from "gsap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (element) => {
    window.open(element.link, "_blank");
  };
  const handleClose = () => setOpen(false);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const projectArray = [
    {
      id: 1,
      name: "Buddha Journey Web app",
      para: "Embark on a transformative journey with our app, seamlessly blending travel and self-discovery. Explore new places, meet like-minded individuals, and document your personal growth. Embrace the adventure, connect with others, and unlock the full potential of your journey.",
      im: bj,
      link: "http://www.buddhajourney.co.in",
    },
    {
      id: 2,
      name: "Digipank Website",
      para: "Digipank developing innovative solutions for businesses. Specializing in custom software development, web and mobile applications, and cloud-based solutions. Committed to delivering high-quality products, optimizing efficiency, and driving digital transformation for clients worldwide.",
      im: digi,
      link: "http://www.digipank.com",
    },
    {
      id: 3,
      name: "Swiggy Clone (Must install extension for Allow CORS)",
      para: "Swiggy is India's largest online food item ordering & delivery chain, it also tops the chart of India's Unicorn startup lists. It's a Bangalore-based startup started in 2014, and as of now, it's expanded to more than 100 Indian cities.",
      im: swiggy,
      link: "https://foodlover-six.vercel.app/",
    },
  ];
  return (
    <Box className="projectsBlock" id="projects">
      <ContentHead text="Projects" />
      <Carousel responsive={responsive} infinite={true}>
        {projectArray.map((element) => {
          return (
            <Box className="centerCard" key={element.id}>
              <Box className="projectCard">
                <Box className="textBlock">
                  <Box mb={2}>
                    <Typography className="proName">{element.name}</Typography>
                  </Box>
                  <Box mb={3}>
                    <Typography>{element.para}</Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      className="btn"
                      onMouseEnter={onEnter}
                      onMouseLeave={onLeave}
                      onClick={() => handleOpen(element)}
                    >
                      View Project
                    </Button>
                  </Box>
                </Box>
                <Box className="imageBlock">
                  <CardMedia
                    component="img"
                    image={element.im}
                    className="imgOfPro"
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Carousel>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sorry
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          In progress, expected completion soon
          </Typography>
        </Box>
      </Modal> */}
    </Box>
  );
};

export default Projects;
