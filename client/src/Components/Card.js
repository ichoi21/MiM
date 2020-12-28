import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const TickerCard = (props) => {
  const isShown = props.isShown;
  if (isShown) {
    return (
      <div>
        <Card>
          <CardBody>
    <CardText>{props.children}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  return (
    <div>
    </div>
  );
};

export default TickerCard;