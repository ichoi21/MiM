import React from 'react';
import { 
    Table,
} from 'reactstrap';

import React from 'react';
// import finnhub from '../Services/api/finnhub';

const TableList = (props) => {
    return (
        <Table dark>
            <thead>
            <tr>
                <th>#</th>
                <th>TICKER</th>
                <th>NAME</th>
                <th>LAST</th>
                <th>HIGH</th>
                <th>LOW</th>
            </tr>
            </thead>
            <tbody>
            {props.map((data, key) => {
                return (
                    <tr key={key}>
                        <th scope="row">1</th>
                        <td>{data.ticker}</td>
                        <td>{data.name}</td>
                        <td>{data.last}</td>
                        <td>{data.high}</td>
                        <td>{data.low}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}

export default TableList;
