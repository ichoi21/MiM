import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const ChartsPage = (props) => {
    
  const [state, setState] = React.useState({
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.0,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        },
      ]
    }
  });
  const isShown = props.isShown;
  if (isShown) {
    return (
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <Line data={state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    )
    }
    return (
        <div></div>
    )
    
  }

export default ChartsPage;