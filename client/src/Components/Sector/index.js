import React, {useEffect, useState} from 'react';
import { Grid, Link, makeStyles, spacing, Typography } from "@material-ui/core";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import Axios from 'axios';

const Sector = () => {
const [sector, setSector] = useState([]);

const getSector = () => {
  Axios.get(`/users/sectors`)
  .then((res) => setSector(res.data))
}
useEffect(() => {
  getSector();
}, [])

return (
  <Grid container >
  {sector.map((item) => {
    return (
    <Grid item xs={3}>
    <MDBListGroup style={{ width: "16rem" }}>
      <MDBListGroupItem href={item.url} hover>
          <h9>{item.name}</h9>
          <p>{(item.performance*100).toFixed(2)}%</p>
      </MDBListGroupItem>
    </MDBListGroup>
    </Grid>
    )
  })}

</Grid>

);
};

export default Sector;