import { MDBDataTableV5 } from 'mdbreact';
import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Table = (props) => {


   const columns = [
      {
        label: 'Symbol',
        field: 'symbol',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Name',
        field: 'name',
        width: 270,
      },
      {
        label: 'Last',
        field: 'last',
        width: 200,
      },
      {
        label: 'High',
        field: 'high',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Low',
        field: 'low',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Vol',
        field: 'vol',
        sort: 'asc',
        width: 100,
      },
    ];
let rows = props.rows;
  const data = {
    columns: columns,
    rows: rows,
  };
  const [checkbox1, setCheckbox1] = React.useState([]);

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };


  return <MDBDataTableV5 
  striped 
  sortable 
  hover 
  paging={false} 
//   checkbox
//   headCheckboxID='id6'
//   bodyCheckboxID='checkboxes6'
//   getValueCheckBox={(e) => {
//     showLogs2(e);
//   }}
//   getValueAllCheckBoxes={(e) => {
//     showLogs2(e);
//   }}
//   multipleCheckboxes 
  data={data} />;
}

export default Table;

