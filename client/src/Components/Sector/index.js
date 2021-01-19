import React, {useEffect, useState} from 'react';
import { Grid, List, ListItem, Card, makeStyles, Typography } from "@material-ui/core";
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 50,
    minHeight: 100,
    textAlign: 'center',
  },
  title: {
    fontSize: 12,
    color: "#fffff0",
  },
  pos: {
    marginBottom: 5,
  },
});

const Sector = () => {
const classes = useStyles();
const [sector, setSector] = useState([]);

const getSector = () => {
  Axios.get(`/users/sectors`)
  .then((res) => setSector(res.data))
}
useEffect(() => {
  getSector();
}, [])

return (
  <Grid container justify="center" spacing={1}>
  {sector.map((item) => {
    return (
    <Grid item xs={2}>
    <List>
      <Card className={classes.root} elevation={3}>
      <ListItem button key={item.url}>
        <Typography className={classes.title}>{item.name}</Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.pos} variant="caption">{(item.performance*100).toFixed(2)}%</Typography>
      </ListItem>
      </Card>
    </List>
    </Grid>
    )
  })}

</Grid>

);
};

export default Sector;