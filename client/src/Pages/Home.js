import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import Axios from "axios";
import {Col, Row} from 'reactstrap';

const Home = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const indices = ["S&P 500", "NASDAQ", "Dow-Jones", "FTSE 100", "Russell"];

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
  <Row>
    {indices.map((item,index) => {
      return (
        <Col sm="2">
        <Card text={item}/>
        </Col>
      )
    })}
  </Row>
  <SearchBar onChange={ (e)=>setSearch(e.target.value)} onClick={getQuote}/>
  <Card text={"Hello"}/>
  </>
    );
};

export default Home;
