import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Time,Date} from "../Time/index"
import Axios from "axios";
import React,{ useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 const Header=()=> {
  const {userData, setUserData} = useContext(UserContext);
  const history = useHistory();
  const scanner = () => history.push("/scanner");
  const callresults = () => history.push("/callresults");
  const home = () => history.push("/");
  const news = () => history.push("/news");
  const signup = () => history.push("/signup");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    history.push("/");
    localStorage.setItem("auth-token", "");
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="headerColor">
          <Typography variant="h6" className={classes.title} onClick={home}>
            dMiM $tock Watch
          </Typography>
          <Date timeZone="America/Los_Angeles"/>
          <Time timeZone="America/New_York"/>
          <Time timeZone="America/Los_Angeles"/>
          {userData.user ? (
            <>
            <Button color="inherit" onClick={scanner}>Scanner</Button>
            <Button color="inherit" onClick={news}>News</Button>
            <Button color="inherit" onClick={callresults}>Daily Calls/Results</Button>
            <Button color="inherit" onClick={logout}>Logout</Button>

            </>
          ):(
            <>
            <Button color="inherit" onClick={logout}>Login</Button> 
            <Button color="inherit" onClick={signup}>Sign Up</Button> 
    /        </>
          )}
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;