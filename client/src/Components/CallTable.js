import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'date', headerName: 'Date', width: 100 },
  { field: 'mod', headerName: 'MOD', width: 100 },
  { field: 'symbol', headerName: 'Symbol', width:80 },
  { field: 'alerted', headerName: 'Alerted', width: 80 },
  { field: 'target', headerName: '(100%) Target', type: 'number', width: 100 },
  { field: 'current', headerName: 'Current', type: 'number', width: 100 },
  { field: 'week', headerName: '1WK-TD', type: 'number', width: 100 },
  { field: 'month', headerName: 'MTD', type: 'number', width: 100 },
  { field: 'ninety', headerName: '90D-TD', type: 'number', width: 100 },
  { field: 'fiftyTwo', headerName: '52WK-High', type: 'number', width: 100 },
  { field: 'sold', headerName: 'Sold $', type: 'number', width: 100 },
  { field: 'soldDate', headerName: 'Sold Date', width: 100 },
  { field: 'soldGain', headerName: 'Sold Gain %', type: 'number', width: 100 },
  { field: 'todayGain', headerName: '(TODAY) Gain %', type: 'number', width: 100 },
  { field: 'win', headerName: 'WIN', width: 100 },
];

const rows = [
];

export default function CallTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
