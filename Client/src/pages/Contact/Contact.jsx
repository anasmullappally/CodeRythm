import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../components/Theme/Theme';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import { useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';

function Contact() {
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
                    <Form />
                    <Footer />
                </ThemeProvider>

            ) : <Spinner />
            }
        </>


    )
}

export default Contact