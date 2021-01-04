import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import { useHistory } from "react-router-dom";

import "./Footer.css";

function Copyright() {
  return (
    <Typography variant="body2" className="text-color" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        DMi$
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();
  const educate = () => history.push("/educate");
  const settings = () => history.push("/settings");
  const about = () => history.push("/about");
  const disclaimer = () => history.push("/disclaimer");
  return (
    <div className={classes.root}>
      <Grid container className="footerColor">
        <Grid className="footer-pos" item xs={12} sm={4}>
          <div className="text-color text-link">
            <p>
              <b>Let's Get that GREEN!</b>
            </p>
            <p>
            “Wide diversification is only required when investors do not understand what they are doing.” – By Warren Buffett
            </p>
          </div>
        </Grid>
        <Grid item xs={6} sm={4} className="footer-pos2">
          <div id="Footer">
            <div className="text-color text-link" id="FooterLinks">
              <p>
                <b>MORE</b>
              </p>
              <Link color="inherit" onClick={educate}>
                Education
              </Link>{" "}
              <Link color="inherit" onClick={settings}>
                Settings
              </Link>{" "}
              <Link color="inherit" onClick={about}>
                About Us
              </Link>{" "}
              <Link color="inherit" onClick={disclaimer}>
                Disclaimer
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div className="footer-pos2" id="Footer">
            <div className="text-color" id="FooterLinks">
              <p>
                <b>FOLLOW US</b>
              </p>
              <InstagramIcon color="inherit" href="/Contact" alt="#DMiM" />
              <FacebookIcon color="inherit" href="/Contact" alt="@DMiM" />
              <TwitterIcon color="inherit" href="/Contact" alt="@DMiM" />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className="footerFooter">
        <Grid item xs={12} className="copyright">
          <Copyright />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;