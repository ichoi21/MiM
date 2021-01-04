import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import Hero2 from "../Components/Hero2";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


export const TickerCard = (props) => {
  const isShown = props.isShown;
  if (isShown) {
    return (
        <Card>
          <CardContent>
            <Typography>{props.children}</Typography>
          </CardContent>
        </Card>

    );
  }
  return (
    <Card>
      <Hero2 />
    </Card>
  );
};

export const NewsCard = ({image,headline,summary}) => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={headline}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {headline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
