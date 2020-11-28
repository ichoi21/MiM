//MN's original login code 
import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import Axios from "axios";


const Login = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [form, setForm] = useState({});
  const history = useHistory();

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

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" onChange={onChange} />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" onChange={onChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;



//what danielle added with material ui commented out. 


// import React, { useState, useContext, useEffect } from "react";
// import UserContext from "../Context/UserContext";
// import { useHistory } from "react-router-dom";
// import Axios from "axios";

// //imports for side signin from materialui 
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// // copyright under login forms 

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// //left column image url and styling from material ui 

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/random)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// //original login code except for login forms 

// const Login = () => {
//   const { userData, setUserData } = useContext(UserContext);
//   const [form, setForm] = useState({});
//   const history = useHistory();

//   const onChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     console.log(form);

//     try {
//       const loginRes = await Axios.post("/users/login", {
//         email: form.email,
//         password: form.password,
//       });

//       setUserData({
//         token: loginRes.data.token,
//         user: loginRes.data.user,
//       });

//       localStorage.setItem("auth-token", loginRes.data.token);
//       history.push("/");
//     } catch (err) {
//       console.log("problem", err);
//     }
//   };

//   useEffect(() => {
//     if (userData.user) history.push("/");
//   }, [userData.user, history]);



// // login forms and right column styling from material ui 

// return (
//   <Grid container component="main" className={classes.root}>
//     <CssBaseline />
//     <Grid item xs={false} sm={4} md={7} className={classes.image} />
//     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           {/* <LockOutlinedIcon /> */}
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//           <Box mt={5}>
//             <Copyright />
//           </Box>
//         </form>
//       </div>
//     </Grid>
//   </Grid>

// )}; 

// export default Login;
