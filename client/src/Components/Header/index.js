import { AppBar, Button, Drawer, Hidden, List, ListItem, ListItemText, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from "@material-ui/icons/Close";
import ExitToApp from "@material-ui/icons/ExitToApp";
import React,{ useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import UserContext from "../../Context/UserContext";
import logo from "../../Img/Icon.png"
import { Date, Time } from "../Time/"

//styles
import "./Header.css";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    top: 0,
    maxHeight: "8vh",
    minHeight: "5vh",
    boxShadow: "none",
    backgroundColor: "#343a38",
    width: "auto",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
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
  // const signup = () => history.push("/signup");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    history.push("/");
    localStorage.setItem("auth-token", "");
  };

  const sectionLinks = [
    // {userData.user ? (
    //   <>
      <Button color="inherit" onClick={scanner}>Scanner</Button>,
      <Button color="inherit" onClick={news}>Market</Button>,
      <Button color="inherit" onClick={callresults}>1DSP</Button>,
      <Button color="inherit" onClick={logout}>Logout<ExitToApp /></Button>
    //   </>
    // ):(
    //   <>
    //   <Button color="inherit" onClick={logout}>Login</Button> 
    //   <Button color="inherit" onClick={signup}>Sign Up</Button> 
    //   </>
    // )}
  ];

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List className="childList">
        <ListItem>
        <Typography variant="h7" className={classes.title}>
              <Button color="inherit" onClick={home}>
                <img src={logo} className="logo"/>
              </Button>
            </Typography>
        </ListItem>
        <ListItem>NYSE&nbsp;<Date timeZone="America/New_York"/>&nbsp;
        <Time timeZone="America/New_York"/></ListItem>
        {sectionLinks.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const Mdrawer = (
    <div>
      <List>
        {sectionLinks.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem>NYSE&nbsp;<Date timeZone="America/New_York"/></ListItem>
        <ListItem><Time timeZone="America/New_York"/></ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className="parentList">
          <IconButton 
            color="inherit" 
            aria-label="Dropdown Menu" 
            edge="start" 
            onClick={handleDrawerToggle} 
            className={classes.menuButton}>
            <img className="logo" src={logo} alt="Menu" />
          </IconButton>
          <Hidden xsDown implementation="css">
            {drawer}
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper, }}
            ModalProps={{ keepMounted: true, }}>
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon />
            </IconButton>
            {Mdrawer}
          </Drawer>
        </Hidden>
        <Hidden xlDown implementation="css">
          <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper,}}>
            <div className={classes.toolbar} />
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
      </div>
    </div>
  );
}
export default Header;