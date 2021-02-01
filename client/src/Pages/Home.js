import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Card, Paper, makeStyles } from "@material-ui/core";
import {User} from "../Context/UserContext";
import Hero from "../Components/Hero"
// import SearchBar from "../Components/SearchBar/index";
// import SearchContent from "../Components/SearchContent/index"
import Sector from "../Components/Sector/index"
import Table from "../Components/Table/index";
import Footer from "../Components/Footer";
import "./Styles.css"
import { useHistory } from "react-router-dom";
import { TickerCard, NewsCard } from "../Components/Card";
import {Ticker} from '../Context/TickerContext';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  const { userData, setUserData } = useContext(User);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  return (
    <Ticker>
    <Box mx="auto" p={2} className="home">
    <Grid container spacing={2} justify="center" direction="row" alignItems="flex-start">
      {/* Major Indices Cards */}
      <Grid item sm={12}>
        <Paper className={classes.paper} elevation={2}>
          <Hero/>
        </Paper>
      </Grid>
      {/* Stocks Search */}
      {/* <SearchBar/> */}
      <Grid item sm={12}>
          {/* <SearchBar onChange={(e)=> setSearch(e.target.value)} onClick={getQuote}/> */}
      </Grid>
      {/* Sector display
      <Grid container item sm={12} lg={12}>
        <Sector/>
      </Grid> */}
      {/* Search Result */}
      <Grid item sm={12} md={8} justify="center">
        <Paper className={classes.paper}>
          {/* <SymbolWatch/> */}
          {/* still working on SearchContent */}
        </Paper>
      </Grid>
      {/* User's Watchlist */}
      <Grid item sm={12} md={4} justify="center">
        <Paper className={classes.paper}>
          <Table/>
        </Paper>
      </Grid>
      <Grid item sm={12} md={4} justify="center">
            <Card >
              <Paper className={classes.paper}>
                <NewsCard />
              </Paper>
            </Card>
        </Grid>
    </Grid>
    </Box>
    <Footer/>
  </Ticker>
    );
};

export default Home;