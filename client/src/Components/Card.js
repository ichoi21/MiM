import React from 'react';
import {
  Card, CardText, CardBody
} from 'reactstrap';


const TickerCard = (props) => {
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

export default TickerCard;