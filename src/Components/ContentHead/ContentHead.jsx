import { Box, Typography } from '@mui/material';
import React from 'react'
import "./ContentHead.scss";
const ContentHead = (props) => {
    const {text}=props;
  return (
    <Box className="contentHeadBlock">
        <Box>
            <Typography variant="fourtyEightNormal">{text}</Typography>
        </Box>
        <Box className="borderBottom"></Box>
    </Box>
  )
}

export default ContentHead