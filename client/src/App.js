import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import {User} from "./Context/UserContext";
import Dsp from "./Pages/Dsp";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Scanner from "./Pages/Scanner";
import Portfolio from "./Pages/Portfolio";
import Settings from "./Pages/Settings";
import Signup from "./Pages/Signup";
import Educate from "./Pages/Educate";
import Disclaimer from "./Pages/Disclaimer";
import SearchPage from "./Pages/SearchPage";
import "./App.css";

// import SignIn from "./Components/SignIn";
// import News from "./Pages/News";

function App() {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");

    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }

    const tokenRes = await Axios.post("/users/tokenIsValid", null, {
      headers: { "x-auth-token": token },
    });

    if (tokenRes.data) {
      const userRes = await Axios.get("/users/", {
        headers: { "x-auth-token": token },
      });

      setUserData({
        token,
        user: userRes.data,
      });
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <User.Provider value={{ userData, setUserData }}>
          {userData.user ? (
            <>
            <Header/>
            </>
          ) : (
              <></>
          )}

          <Switch>
           <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/scanner" component={Scanner} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Dsp" component={Dsp} />
            <Route path="/educate" component={Educate} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/search" component ={SearchPage} />
         
          </Switch>
        </User.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;