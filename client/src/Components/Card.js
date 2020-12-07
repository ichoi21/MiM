import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const TickerCard = ({text, open, high, volume, aveVol, fhigh}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default TickerCard;