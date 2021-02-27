import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {CallContext} from '../Context/CallContext';
import Circular from './Loading/index'

const columns = [
  { field: 'date', headerName: 'Date', width: 100 },
  { field: 'mod', headerName: 'MOD', width: 100 },
  { field: 'symbol', headerName: 'Symbol', width:80 },
  { field: 'alerted', headerName: 'Alerted', width: 80 },
  { field: 'target', headerName: '(100%) Target', width: 100 },
  { field: 'current', headerName: 'Current', width: 100 },
  { field: 'weekTd', headerName: '1WK-TD', width: 100 },
  { field: 'mtd', headerName: 'MTD', width: 100 },
  { field: 'ninetyTd', headerName: '90D-TD', width: 100 },
  { field: 'fiftyTwoHigh', headerName: '52WK-High', width: 100 },
  { field: 'sold', headerName: 'Sold $', width: 100 },
  { field: 'soldDate', headerName: 'Sold Date', width: 100 },
  { field: 'soldGain', headerName: 'Sold Gain %', width: 100 },
  { field: 'todayGain', headerName: '(TODAY) Gain %', width: 100 },
  { field: 'win', headerName: 'WIN', width: 100 },
];


export default function CallTable() {
    const [state,setState] = React.useContext(CallContext);
    
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={state} columns={columns} pageSize={5} checkboxSelection/>
    </div>
  );
}
