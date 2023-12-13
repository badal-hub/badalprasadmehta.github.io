import React from "react";
import { Box, CardMedia, Typography,Link } from "@mui/material";
import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import "./Footer.scss";
import Description from "../../assets/Description.svg";
const Footer = () => {
  return (
    <>
      <Box className="topFooterBlock">
        <Box className="footerBlock">
          <Box className="innerFooter">
            <Box className="socialMedia">
              <Link href="https://www.facebook.com/badal.mehta.589" className="iconSocialMedia">
              <CardMedia component="img" src={fb}  />

              </Link>
              <Link href="https://www.instagram.com/badalmehta99/"    className="iconSocialMedia">
              <CardMedia
                component="img"
                src={insta}
             
              />
 </Link>
 <Link href="https://twitter.com/22BadalMehta1"
                className="iconSocialMedia"
                >
              <CardMedia
                component="img"
                src={twitter}
              /></Link>
 <Link href="https://www.linkedin.com/in/badal-prasad-mehta-1b0a541b1/"  className="iconSocialMediaLast">

              <CardMedia
                component="img"
                src={linkedin}
                 
              />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="lastLine">
        <Box>
          <Typography>Made with</Typography>
        </Box>
        <Box>
          <CardMedia component="img" src={Description} />
        </Box>
        <Box>
          <Typography>by &nbsp;</Typography>
        </Box>
        <Box>
          <Typography variant="eighteenSemibold">Badal Mehta</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
