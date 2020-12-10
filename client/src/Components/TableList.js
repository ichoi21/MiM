import React from 'react';
import { 
    Table,
} from 'reactstrap';


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
            {props.children}
        </Table>
    )
}

export default TableList;
