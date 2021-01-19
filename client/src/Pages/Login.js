import { Box, Button, Checkbox, CssBaseline, createMuiTheme, FormControlLabel, Grid, Link, makeStyles, Paper, TextField, Typography, ThemeProvider } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { green } from '@material-ui/core/colors' ;

import UserContext from "../Context/UserContext";

import logo from "../Img/Icon.png"
import "./Styles.css";

//left column image url and styling from material ui 

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    color: theme.palette.text.green,
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?investment)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function Copyright() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link color="primary" href="/"> 1DSP | Mi$ </Link>{' '}
      {new Date().getFullYear()} {'.'}
      </Typography>
    </ThemeProvider>
  );
}

const Login = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [form, setForm] = useState({});
  const history = useHistory();

  const signup = () => history.push("/signup");
  const login = () => history.push("/login");

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(form);

    try {
      const loginRes = await Axios.post("/users/login", {
        email: form.email,
        password: form.password,
      });

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      console.log("problem", err);
    }
  };

  useEffect(() => {
    if (userData.user) history.push("/");
  }, [userData.user, history]);

  const classes = useStyles(); 
  return (
    <Grid container component="main" className={classes.root} spacing={2}>
      <CssBaseline />
      <Grid item xs={12} sm={4} md={7} className={classes.image}/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ padding: 20 }}>
          <img src={logo} className="logo"/>
          <Typography component="h3" variant="h5"> Welcome Back! </Typography>
          <form onSubmit={submit}>
          <ThemeProvider theme={theme}>
            <TextField input variant="outlined" margin="normal" required fullWidth
              id="email"
              label="Email Address/Username"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChange}
            />
            <TextField input variant="outlined" margin="normal" required fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={onChange}
            />

            <FormControlLabel 
              variant="body2" 
              control={<Checkbox value="remember" color="primary"/>}
              label="Remember Me"/>
            </ThemeProvider>
            <Box mx={8}>
            <Grid item xs>
              <ThemeProvider theme={theme}>
              <Button type="submit" fullWidth variant="outlined" color="primary" className={classes.margin}>
                Sign In
              </Button>
              </ThemeProvider>

              <Grid container>
                <Grid item xs={6} className="text">
                  <Link  variant="subtitle2" onClick={login}>
                  Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={6} className="text">
                  <Link variant="subtitle2" onClick={signup}>
                  Don't have an account?
                  </Link>
                </Grid>
              </Grid>
             </Grid>
             </Box>
           </form>
           <Box m={5}>
            <Copyright />
          </Box>
      </Grid>
    </Grid>
  );
};

export default Login;