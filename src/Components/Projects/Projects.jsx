import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import ContentHead from "../ContentHead/ContentHead";
import "./Projects.scss";
import pro1 from "../../assets/gallery.jpg";
import pro2 from "../../assets/pro2.png";
import pro3 from "../../assets/pro3.jpg";
import Modal from '@mui/material/Modal';
import Carousel from "react-multi-carousel";
import { gsap } from "gsap";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
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
      name: "Photo Gallery Application",
      para: "A photo gallery application is a digital platform that organizes and displays images or videos. It enables users to easily browse, manage, and share their media files, offering features like categorization, search, and often supports customization for a personalized viewing experience.",
      im: pro1,
    },
    {
      id: 2,
      name: "React Chat Application",
      para: "A React chat application is a real-time messaging platform developed using the React JavaScript library. It allows users to engage in instant communication, featuring features such as message sending, real-time updates, user authentication, and often supports multimedia sharing for a dynamic chatting experience.",
      im: pro2,
    },
    {
      id: 3,
      name: "React Movie and series Application",
      para: "Users can also select series and movies based on their preferred genre and they can also get the details about the specific series or movie. Create a section where the user can search for movies and series as well, users can search by the movie name or series name and they will get to see all the results related to that particular name.",
      im: pro3,
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
                      onClick={handleOpen}
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
      <Modal
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
      </Modal>
    </Box>
  );
};

export default Projects;
