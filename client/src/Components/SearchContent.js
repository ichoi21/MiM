import React from 'react';
import {
    Col, Row
  } from 'reactstrap';

const SearchContent = ({ticker, open, vol, marketCap,fwh, fwl, pefwd,eps, turnover, pturnover,sharesOut,ffmc , threeMonth, name, last, high, low,range, pettm, dividend, divYield, pb, freeFloat, beta, edd, lotSize}) => {
    return (
        <Row>
        <Col>
        <thead>
            <tr>
                <th>Symbol: {ticker}</th>
            </tr>
            </thead>
        <tbody>                
            <tr>
                <td>{"Open: "}</td>
                <td>{open}</td>
            </tr>
            <tr>
                <td>{"High: "}</td>
                <td>{high}</td>
            </tr>
            <tr>
                <td>{"Vol: "}</td>
                <td>{vol}</td>
            </tr>
            <tr>
                <td>{"Avg Vol(3M): "}</td>
                <td>{threeMonth}</td>
            </tr>
            <tr>
                <td>{"52 Wk High: "}</td>
                <td>{fwh}</td>
            </tr>
            <tr>
                <td>{"Market Cap: "}</td>
                <td>{marketCap}</td>
            </tr>
            <tr>
                <td>{"P/E(FWD): "}</td>
                <td>{pefwd}</td>
            </tr>
            <tr>
                <td>{"EPS: "}</td>
                <td>{eps}</td>
            </tr>
            <tr>
                <td>{"% Turnover: "}</td>
                <td>{pturnover}</td>
            </tr>
            <tr>
                <td>{"Shares Out: "}</td>
                <td>{sharesOut}</td>
            </tr>
            <tr>
                <td>{"Free Float Mkt Cap: "}</td>
                <td>{ffmc}</td>
            </tr>
            <tr>
                <td>{"Lost Size: "}</td>
                <td>{lotSize}</td>
            </tr>
        </tbody>
        </Col>
        <Col>
        <thead>
            <tr>
            <th>Name: {name}</th>
            </tr>
            </thead>
        <tbody>                
        <tr>
                <td>{"Prev Close: "}</td>
                <td>{last}</td>
            </tr>
            <tr>
                <td>{"Low: "}</td>
                <td>{low}</td>
            </tr>
            <tr>
                <td>{"Turnover: "}</td>
                <td>{turnover}</td>
            </tr>
            <tr>
                <td>{"% Range: "}</td>
                <td>{range}</td>
            </tr>
            <tr>
                <td>{"52 Wk Low: "}</td>
                <td>{fwl}</td>
            </tr>
            <tr>
                <td>{"P/E(TTM): "}</td>
                <td>{pettm}</td>
            </tr>
            <tr>
                <td>{"Dividend: "}</td>
                <td>{dividend}</td>
            </tr>
            <tr>
                <td>{"Div Yield: "}</td>
                <td>{divYield}</td>
            </tr>
            <tr>
                <td>{"P/B: "}</td>
                <td>{pb}</td>
            </tr>
            <tr>
                <td>{"Free Float: "}</td>
                <td>{freeFloat}</td>
            </tr>
            <tr>
                <td>{"Beta: "}</td>
                <td>{beta}</td>
            </tr>
            <tr>
                <td>{"Ex-Div Date: "}</td>
                <td>{edd}</td>
            </tr>
        </tbody>
        </Col>
        </Row>
                )
}

export default SearchContent;
