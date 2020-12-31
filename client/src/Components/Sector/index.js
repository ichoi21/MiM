import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const Sector = ({name, performance}) => {

return (
<MDBContainer>
  <MDBListGroup style={{ width: "22rem" }}>
    <MDBListGroupItem href="#" hover>
        <h3>{name}</h3>
        <h4>{(performance*100).toFixed(2)}%</h4>
    </MDBListGroupItem>
  </MDBListGroup>
</MDBContainer>

);
};

export default Sector;