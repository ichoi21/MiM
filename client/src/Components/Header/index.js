import { AppBar, Button, Drawer, Hidden, List, ListItem, ListItemText, Toolbar, Typography, IconButton, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExitToApp from '@material-ui/icons/ExitToApp';
import CancelIcon from '@material-ui/icons/Cancel';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PageviewIcon from '@material-ui/icons/Pageview';
import React,{ useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import UserContext from "../../Context/UserContext";
import logo from "../../Img/Icon.png"
import { Date, Time } from "../Time/"

//styles
import "./Header.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    top: 0,
    maxHeight: "8vh",
    minHeight: "5vh",
    boxShadow: "none",
    backgroundColor: "#343a38",
  },
  mroot: {
    width: 500,
    backgroundColor: "#343a38",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      flexShrink: 0,
      backgroundColor: "#343a38",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
  const dsp = () => history.push("/dsp");
  const home = () => history.push("/");
  const portfolio = () => history.push("/portfolio");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    history.push("/");
    localStorage.setItem("auth-token", "");
  };

  const sectionLinks = [
      <Button color="inherit" onClick={portfolio}>Portfolio</Button>,
      <Button color="inherit" onClick={scanner}>Scanner</Button>,
      <Button color="inherit" onClick={dsp}>1DSP</Button>,
      <Button color="inherit" onClick={logout}>Logout<ExitToApp /></Button>
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
        <Typography variant="caption">
              <Link color="inherit" onClick={home} edge="start" className={classes.menuButton}>
                <img src={logo} className="logo"/>
              </Link>
            </Typography>
        </ListItem>
        <ListItem variant="caption">
          NYSE&nbsp;<Date timeZone="America/New_York"/>&nbsp;
        <Time timeZone="America/New_York"/>
        </ListItem>
        {sectionLinks.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const mappBar = (
 <BottomNavigation className={classes.mroot}>
   <BottomNavigationAction label="Home" onClick={home} icon={<HomeIcon />}/>
   <BottomNavigationAction label="Portfolio" onClick={portfolio} icon={<AssignmentIcon />}/>
   <BottomNavigationAction label="Scanner" onClick={scanner} icon={<PageviewIcon />}/>
   <BottomNavigationAction label="1DSP" onClick={dsp} icon={<TrendingUpIcon />}/>
 </BottomNavigation>
  );

  return (
    <div className={classes.root}>
      <Hidden xsDown implementation="css">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className="parentList">
            {drawer}
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="permanent"
            anchor="bottom"
            classes={{ paper: classes.drawerPaper, }}>
            {mappBar}
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