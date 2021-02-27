import React from 'react';
import { Button, Card, CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Hero2 from "../Components/Hero2";
import Sector from "../Components/Sector";
import {TickerContext} from '../Context/TickerContext';

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    minHeight: 100,
    textAlign: 'center',
    color: "#ffffff",
  },
  root2: {
    minWidth: 345,
    minHeight: 500,
  },
  title: {
    fontSize: 12,
    color: "#ffffff",
  },
  pos: {
    marginBottom: 5,
  },
  media: {
    height: 140,
  },
});

export const TickerCard = (props) => {
  const classes = useStyles();
  const isShown = props.isShown;
  if (isShown) {
    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h7">{props.children}</Typography>
          </CardContent>
        </Card>

    );
  }
  return (
    <Card className={classes.root2}>
      <Sector />
      <Hero2 />
    </Card>
  );
};

export const NewsCard = () => {

  const classes = useStyles();
  const [state, setState] = React.useContext(TickerContext);

  return (
    <>
    {state.news.map((item) => {
      return (
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item[0].image}
          title={item[0].headline}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item[0].headline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item[0].summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
    })}
    
    </>
  );
}

export const SearchPageKeyCard = () => {
  return (
    <>
    </>
  )
}