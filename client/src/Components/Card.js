import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import Hero2 from "../Components/Hero2";

const TickerCard = (props) => {
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

export default TickerCard;