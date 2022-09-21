import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../components/Theme/Theme';
import Main from '../../components/Main/Main';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Question from '../../components/Question/Question';
import Footer from '../../components/Footer/Footer';


function Home() {
    return (

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Main />
            <HowItWorks />
            <Question />
            <Footer/>
        </ThemeProvider>

    )
}

export default Home