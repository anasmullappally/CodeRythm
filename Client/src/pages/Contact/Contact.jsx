import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../components/Theme/Theme';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';

function Contact() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <Form/>
            <Footer/>
        </ThemeProvider>
    )
}

export default Contact