import React from 'react';


const TableBody = ({key, ticker, name, last, high, low }) => {
    return (
                    <tr key={key}>
                        <th scope="row">{key}</th>
                        <td>{ticker}</td>
                        <td>{name}</td>
                        <td>{last}</td>
                        <td>{high}</td>
                        <td>{low}</td>
                    </tr>
                )
}

export default TableBody;
