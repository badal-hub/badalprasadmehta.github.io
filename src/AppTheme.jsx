import { capitalize } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#FD5956",
    },
    secondary: {
      main: "#25282B",
    },
  },
  typography: {
    regular: {
      fontSize: "1rem",
      lineHeight: "24px",
      color: "#14142B",
    },
    regularMedium: {
      fontSize: "16px",
      lineHeight: "18px",
      color: "##11142D",
      fontWeight:500,
    },
    navTabs: {
      fontSize: "1.3rem",
      lineHeight: "24px",
      color: "#FFFFFF",
    },
    eighteenSemibold: {
      fontSize: "18px",
      lineHeight: "28px",
      color: "#000",
      fontWeight: 600,
      textTransform:"none",
    },
    twentyNormal: {
      fontSize: "20px",
      color: "#000",
      lineHeight: "24px",
      fontWeight: 700,
      textTransform:'uppercase',
    },
    twentyFourNormal: {
      fontSize: "24px",
      color: "#000",
      lineHeight: "30px",
      fontWeight: 400,
    },
    fourtyEightNormal: {
      fontSize: "48px",
      color: "#000",
      lineHeight: "24px",
      fontWeight: 700,
    },
    sixtyFourNormal: {
      fontSize: "64px",
      color: "#000",
      lineHeight: "72px",
      fontWeight: 700,
      "@media (max-width: 1024px)": {
     fontSize:"40px"
      }
      
    },
  },
  // components: {
  //   // Name of the component
  //   MuiButton: {
  //     variants: [
  //       {
  //         props: { variant: "dark" },
  //         style: {
  //           textTransform: "none",
  //           borderRadius: "2.5rem",
  //           backgroundColor: "#0A9E88",
  //           fontFamily: "lato",
  //           fontWeight: "bold",
  //           fontSize: "1rem",
  //           color: "#ffffff",
  //           padding: "13px 32px",
  //           "&:hover": {
  //             textDecoration: "none",
  //             backgroundColor: "#35C37D",
  //           },
  //         },
  //       },
  //       {
  //         props: { variant: "outline" },
  //         style: {
  //           textTransform: "none",
  //           borderRadius: "2.5rem",
  //           backgroundColor: "transparent",
  //           fontFamily: "lato",
  //           fontWeight: "bold",
  //           fontSize: "1rem",
  //           color: "#ffffff",
  //           border: "1px solid #fff",
  //           padding: "13px 32px",
  //           "&:hover": {
  //             textDecoration: "none",
  //             backgroundColor: "#35C37D",
  //           },
  //         },
  //       },
  //       {
  //         props: { variant: "darkNmedium" },
  //         style: {
  //           textTransform: "none",
  //           borderRadius: "2.5rem",
  //           backgroundColor: "#0A9E88",
  //           fontFamily: "lato",
  //           fontWeight: "bold",
  //           fontSize: "0.875rem",
  //           color: "#ffffff",
  //           border: "1px solid #fff",
  //           padding: "0.469rem 1.5rem",
  //           "&:hover": {
  //             textDecoration: "none",
  //             backgroundColor: "#35C37D",
  //           },
  //         },
  //       },
  //       {
  //         props: { variant: "holidayDestinyBtn" },
  //         style: {
  //           textTransform: "none",
  //           borderRadius: "2.5rem",
  //           fontFamily: "lato",
  //           fontWeight: "bold",
  //           fontSize: "0.875rem",
  //           color: "#ffffff",
  //           border: "1px solid #fff",
  //           padding: "0.469rem 1.5rem",
  //           "&:hover": {
  //             textDecoration: "none",
  //           },
  //         },
  //       },
  //       {
  //         props: { variant: "formButton" },
  //         style: {
  //           textTransform: "none",
  //           borderRadius: "4px",
  //           backgroundColor: "#0A9E88",
  //           fontFamily: "lato",
  //           fontWeight: "bold",
  //           fontSize: "1rem",
  //           color: "#ffffff",
  //           padding: "0.8vw 2.4vw",
  //           "&:hover": {
  //             textDecoration: "none",
  //             backgroundColor: "#35C37D",
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   // MuiTextField: {
  //   //   variants: [
  //   //     {
  //   //       props: { variant: 'filled' },
  //   //       style: {
  //   //         textTransform: 'none',
  //   //         border: `2px solid  #BEC0BF`,
  //   //         marginBottom:'3vw',
  //   //         borderRadius:"8px",
  //   //         width:"25.208vw",
  //   //         "& .MuiInputBase-root": {
  //   //           wordWrap: "break-word",
  //   //           fontWeight: "semibold",
  //   //           color: "rgba(255,255,255)",
  //   //           fontSize: "1rem",
  //   //         },
  //   //         // "& .MuiInputLabel-root": {
  //   //         //   wordWrap: "break-word",
  //   //         //   fontWeight: "semibold",
  //   //         //   color: "rgba(255,255,255)",
  //   //         //   fontSize: "1rem",
  //   //         // },
  //   //       },
  //   //     },
  //   //   ],
  //   // },
  // },

});