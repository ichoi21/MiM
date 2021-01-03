import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import UserContext from "./Context/UserContext";
import Callresults from "./Pages/Callresults";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import News from "./Pages/News";
import Scanner from "./Pages/Scanner";
import Settings from "./Pages/Settings";
import Signup from "./Pages/Signup";
import Educate from "./Pages/Educate";
import About from "./Pages/About";
import Disclaimer from "./Pages/Disclaimer";

// import SignIn from "./Components/SignIn";

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
        <UserContext.Provider value={{ userData, setUserData }}>
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
            <Route path="/scanner" component={Scanner} />
            <Route path="/news" component={News} />
            <Route path="/Settings" component={Settings} />
            <Route path="/callresults" component={Callresults} />
            <Route path="/educate" component={Educate} />
            <Route path="/about" component={About} />
            <Route path="/disclaimer" component={Disclaimer} />
         
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;