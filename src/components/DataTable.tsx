import {
    Alert,
    AlertTitle, Box,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow, TableSortLabel
} from "@mui/material";
import { visuallyHidden } from '@mui/utils';
import { useEffect, useState } from "react";

export const DataTable = ({
                              data = null,
                              size = null,
                              columns = [],
                              hover = false,
                              handlePageChange = () => {},
                              handleRowsPerPageChange = () => {},
                              rowsPerPageOptions = [],
                              count = data.length,
                              rowsPerPage = 10,
                              page = 0,
                              pagination = false,
                              selectRow = false,
                              handleSelectRow = () => {}
                          }) => {
    const [currentData, setCurrentData] = useState([]);

    const [order, setOrder] = useState('asc');

    const [orderBy, setOrderBy] = useState('');

    useEffect(() => (data ? setCurrentData(data) : setCurrentData([])), [data]);

    const clickRow = (row, index) => {
        if (selectRow) {
            const newData = currentData.map((row, i) => ({ ...row, selected: i === index ? !row.selected : false }));

            const currentRow = newData.filter((row, i) => i === index)[0];

            setCurrentData(newData);
            handleSelectRow(currentRow);
        }
    }
    const onRequestSort = (event, property) => {
        console.log(orderBy)
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const createSortHandler = (property) => (event) => {
        console.log(property)
        onRequestSort(event, property);
    };

    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    return (
        <>
            {
                columns.length > 0 ?
                    <Table size={size} className={'data-grid'}>
                    <TableHead >
                        <TableRow className={'table-row head-row'}>
                        {
                            columns.map((column, index) => {
                                return (
                                    <TableCell
                                        className={'table-cell'}
                                key={index}
                                align={column.numeric ? 'right' : 'left'}
                                padding={column.disablePadding ? 'none' : 'normal'}
                                sortDirection={orderBy === column.name ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === column.name}
                                direction={orderBy === column.name ? order : 'asc'}
                                onClick={createSortHandler(column.name)}
                            >
                                {column.name}
                                {orderBy === column.name ? (
                                    <Box component="span" sx={visuallyHidden}>
                                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                                </TableSortLabel>
                                </TableCell>
                            )
                            })
                        }
                        </TableRow>
                        </TableHead>

                        <TableBody>
                        {
                            stableSort(currentData, getComparator(order, orderBy)).map((row, i) => {
        return (
            <TableRow
                key={i}
        className={'table-row'}
        onClick={e => clickRow(row, i)}
        hover={hover} sx={{ cursor: selectRow ? 'pointer' : null }}  >
        {
            columns.map((cell, j) => {
                return (
                    <TableCell
                        key={j}
                sx={ typeof cell.sx === 'function' ? cell.sx(row) : cell.sx } >
                    { cell.selector(row, i) }
                    </TableCell>
            )
            })
        }
        </TableRow>
    )
    })
}
    </TableBody>
    {
        pagination &&
        <TableFooter>
            <TableRow>
                <TablePagination
                    rowsPerPageOptions={rowsPerPageOptions}
        colSpan={columns.length}
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{ native: true }}
        // ActionsComponent={TablePaginationActions}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange} />
    </TableRow>
    </TableFooter>
    }
    </Table>
:
    <Alert severity='info'>
        <AlertTitle>Table Info</AlertTitle>
    No data to show
    </Alert>
}
    </>
);
}

