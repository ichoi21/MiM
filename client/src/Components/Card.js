import React from 'react';
import {
  Card, CardText, CardBody
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Cards from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const TickerCard = (props) => {
  const isShown = props.isShown;
  if (isShown) {
    return (
      
        <Card>
          <CardBody>
    <CardText>{props.children}</CardText>
          </CardBody>
        </Card>

    );
  }
  return (
    <div>
    </div>
  );
};

export const NewsCard = ({image,headline,summary}) => {

  const classes = useStyles();

  return (
    <Cards className={classes.root}>
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
    </Cards>
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
