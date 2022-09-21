import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import axios from 'axios'
import { toast } from 'react-toastify';
import { validation } from '../../validation/validation';


const theme = createTheme();

export default function Form() {

    const [error, setError] = useState({})
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [submit, setSubmit] = useState(false)

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setError(validation(data))

        setSubmit(true)

    };
    const submitData = async () => {
        try {
            const response = await axios.post('http://localhost:7000/form', data)
            console.log(response)
            if (response.status === 200) {
                toast.success("Form submitted Successfully Great job !")
                setData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                setSubmit(false)
            } else {
                toast.error("Form  not submitted Try again !")
            }

        } catch (error) {
            toast.error("Form  not submitted Try again !")
            console.log(error.message)
        }
    }
    useEffect(() => {
        if (Object.keys(error).length === 0 && submit) {
            submitData()

        }
    }, [error, submit]);



    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <ContactEmergencyOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Contact Us
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                value={data.name}
                                autoFocus
                                onChange={handleChange}
                                error={error.name ? true : false}
                                helperText={error.name && `${error.name}`}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={data.email}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                error={error.email ? true : false}
                                helperText={error.email && `${error.email}`}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type='number'
                                value={data.phone}
                                id="phone"
                                label="Phone Number"
                                name="phone"
                                autoComplete="phone"
                                error={error.phone ? true : false}
                                helperText={error.phone && `${error.phone}`}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={data.message}
                                id="message"
                                label="Message"
                                name="message"
                                autoComplete="message"
                                error={error.message ? true : false}
                                helperText={error.message && `${error.message}`}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>


                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}