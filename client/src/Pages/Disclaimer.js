import React from 'react'
import Footer from '../Components/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, Paper } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  title: {
    fontSize: 36,
  },
  pos: {
    marginTop: 40,
    marginBottom: 80,
  },
});

export default function Disclaimer() {
const classes = useStyles();

  return (
    <>
    <Grid container className={classes.pos} justify="center">
    <Card className={classes.root} component={Paper}>
    <CardContent>
      <Typography className={classes.title}>DISCLAIMER</Typography>
      <Typography variant="h7" component="p">
        PLEASE NOTE: 1DollarStockPicks.com and its employees are not a Registered Investment Advisor, Broker Dealer or a member of any association for other research providers in any jurisdiction whatsoever and we are not qualified to give financial advice. Our website and social media profiles are for Entertainment purposes only. Never invest in any stock featured on our site or emails unless you can afford to lose your entire investment. The disclaimer is to be read and fully understood before using our site, or subscribing. Release of Liability: Through use of this website, viewing or using, you agree to hold 1DollarStockPicks.com, its operators, owners and employees harmless and to completely release them from any and all liability due to any and all loss (monetary or otherwise), damage (monetary or otherwise), or injury (monetary or otherwise) that you may incur. If you invest in any stock that you see in our daily stock picks, you are doing so at your own will and not because 1DollarStockPicks.com or its employees advised so.
        </Typography>
    </CardContent>
    </Card>
    <Footer />
    </Grid>
    </>
  );
}

