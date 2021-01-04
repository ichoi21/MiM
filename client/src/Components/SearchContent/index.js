import React from 'react';
import { Grid, Link, makeStyles, spacing, Typography, Paper } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
  import TradeView from 'react-tradingview-widget'

const index = ({ticker, open, vol, marketCap, fwh, fwl, pefwd, eps, turnover, pturnover, sharesOut, ffmc , threeMonth, name, last, high, low,range, pettm, dividend, divYield, pb, freeFloat, beta, edd, lotSize}) => {
  return (
    <>
    <Grid container sm={12}>
      <TableContainer hoverable striped>
        <Table aria-label="simple table">
          <TableHead><TableRow>{name} ({ticker} - primaryExchange)</TableRow></TableHead>
            <TableBody>
              <TableRow>
                <TableCell>$latestPrice</TableCell>
                <TableCell>latestPercent%</TableCell>
                <TableCell>latestTime</TableCell>
              </TableRow>
            <TableRow>
              <TableCell>Open:</TableCell>
              <TableCell>${open}</TableCell>
              <TableCell>Prev Close:</TableCell>
              <TableCell>${last}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Day Range:</TableCell>
              <TableCell>${low} - ${high} </TableCell>
              <TableCell>52-WK Range:</TableCell>
              <TableCell>$week52low - $week52high (100*week52change %)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Volume:</TableCell>
              <TableCell>{vol}</TableCell>
              <TableCell>Avg Vol(10D + 30D):</TableCell>
              <TableCell>avg10Volume + avg30Volume</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Market Cap:</TableCell>
              <TableCell>{marketCap}</TableCell>
              <TableCell>Shares Outstanding:</TableCell>
              <TableCell>sharesOutstanding</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>EPS:</TableCell>
              <TableCell>revenuePerShare</TableCell>
              <TableCell>P/E Ratio:</TableCell>
              <TableCell>peRatio %</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    <Grid container>
      <TradeView autosize symbol={ticker} />
    </Grid>
    </>
  )
}

export default index;
