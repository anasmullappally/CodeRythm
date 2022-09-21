import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../components/Theme/Theme';
import Footer from '../../components/Footer/Footer';
import AboutPage from '../../components/About/AboutPage';
import Services from '../../components/About/Services';
import Spinner from '../../components/Spinner/Spinner';

function About() {
  const [spinner, setSpinner] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setSpinner(true)
    }, [1000])

  })
  return (
    <>
      {spinner ? (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <AboutPage />
          <Services />
          <Footer />
        </ThemeProvider>
      ) : <Spinner />
      }
    </>
  )
}

export default About