import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../components/Theme/Theme';
import Footer from '../../components/Footer/Footer';
import AboutPage from '../../components/About/AboutPage';
import Services from '../../components/About/Services';


function About() {
  return (
    <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <AboutPage/>
            <Services/>
            <Footer/>
        </ThemeProvider>
  )
}

export default About