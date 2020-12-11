import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const TickerCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
  <CardText>{props.children}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default TickerCard;