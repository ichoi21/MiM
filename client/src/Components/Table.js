import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
    Card,
    CardActions,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: 0
    },
    content: {
        padding: 0
    },
    inner: {
        minWidth: 1050
    },
    nameContainer: {
        display: "flex",
        alignItems: "baseline"
    },
    status: {
        marginRight: 15
    },
    actions: {
        justifyContent: "flex-end"
    }
}));

const TableComponent = props => {

    const classes = useStyles();

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);

    const tableHeaders = [
        { text: "TICKER", value: "" },
        { text: "NAME", value: "" },
        { text: "LAST", value: "" },
        { text: "HIGH", value: "" },
        { text: "LOW", value: "" }
    ];

    return (
        <div></div>
    )
}

export default TableComponent;