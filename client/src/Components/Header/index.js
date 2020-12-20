import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import App from "../../App"

const Header = () => {
  // const classes = useStyles();
  return (
    <BrowserRouter>
<div>
      {/* <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link> */}
      <Link to="/login">Dashboard</Link>
      <Link to="/login">Scanner</Link>
      <Link to="/login">Daily Calls/Results</Link>
      <Link to="../../Pages/login" onClick={App.logout}>Logout</Link>

  </div>
</BrowserRouter>
  );
};

export default Header;