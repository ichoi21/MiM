import { Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, makeStyles, Paper, spacing, TextField, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import UserContext from "../Context/UserContext";

import "./Styles.css";

//left column image url and styling from material ui 

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="success" align="center">
      <div className="text">
      {'Copyright © '}
      <Link color="inherit" href="/">
        DMi$
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      </div>
    </Typography>
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div style={{ padding: 20 }}>
            <Typography component="h3" variant="h5">
            Welcome Back!
            </Typography>
            <form onSubmit={submit}>
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
              <FormControlLabel control={<Checkbox value="remember" color="green" />}
              label="Remember Me"/>
              <Grid>
              <Button type="submit" fullWidth variant="contained" color="green">
                Sign In
              </Button>
          <Grid container>
            <Grid item xs>
              <div className="text">
              <Link variant="subtitle2" onClick={login}>
                Forgot password?
              </Link>
              </div>
            </Grid>
            <Grid item xs className="text">
              <Link variant="subtitle2" onClick={signup}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
           </Grid>
           </Grid>
           <Box mt={5}>
           <Copyright />
          </Box>
        </form>
      </div>
      </Grid>
    </Grid>
  );
};

export default Login;