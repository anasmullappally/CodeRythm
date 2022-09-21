import React from "react";
import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";

const Footer = () => <>
      
        <AppBar position="static" elevation={0} component="footer" color="default">
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption">©2020</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;