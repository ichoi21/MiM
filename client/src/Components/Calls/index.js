import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tabletop from 'tabletop';

import "./Calls.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  
    
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="OTCs"><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT0GQG1iBHHjgDewLi2dWygWwz8K4xZARMT8mD3lx5hk_bo1VGAS7oakKjzJI8c10ex2MKJlRt06lAt/pubhtml?gid=824718674&amp;single=true&amp;widget=true&amp;headers=false"></iframe></Tab>
        <Tab label="Doc's Prediction" />
        <Tab label="Day Trades" />
        <Tab label="EODs" />
        <Tab label="Options" />
        <Tab label="Swings" />
        <Tab label="Dividends" />
        <Tab label="Shorts" />
      </Tabs>
    </Paper>
  );
}
