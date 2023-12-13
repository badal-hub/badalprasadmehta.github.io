import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { appTheme } from "./AppTheme";
import DrawerAppBar from "./Components/Navbar/Navbar";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
    
      <DrawerAppBar />
      <HomeComponent />
      <About/>
      <Skills/>
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
