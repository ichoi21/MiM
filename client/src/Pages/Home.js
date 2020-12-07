import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import TableList from "../Components/TableList";
import TableBody from "../Components/TableBody";
import Axios from "axios";
import {Col, Row} from 'reactstrap';

const Home = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const indices = ["S&P 500", "NASDAQ", "Dow-Jones", "FTSE 100", "Russell"];

  const sampleWatch = ["TSLA", "AAPL", "FCEL"];



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
  <Card/>
  <TableList>
  {(sampleWatch.map((item, index) => {
      return (
<TableBody key={index} ticker={item} name={item} />
      
      )
    }))}
  </TableList>
  </>
    );
};

export default Home;
