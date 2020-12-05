import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import SearchBar from "../Components/SearchBar";
import Axios from "axios";

const Home = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

const [search, setSearch] = useState("");
// const [quote, setQuote] = useState([]);
const [error, setError] = useState();

const getQuote = (e) =>{
  e.preventDefault();
  try{
     Axios.get(
      `/users/quote/${search}`
    ).then((res) => {
 //  setQuote(res.data);
     console.log(res.data);
    });
  }
  catch (err) {
    err.response.data.msg && setError(err.response.data.msg);
  }
  }

    
  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  return (
    <>
  <h1>dMiM $tock search</h1>
  <SearchBar onChange={ (e)=>setSearch(e.target.value)} onClick={getQuote}/>
  </>
    );
};

export default Home;
