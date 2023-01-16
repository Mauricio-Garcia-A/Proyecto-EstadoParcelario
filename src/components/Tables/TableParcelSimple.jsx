import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function TableParcelSimple({rows, color='blue'}) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: color,
      color: theme.palette.common.white,
      //border: '1px solid black',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      //border: '1px solid black',
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      borderRadius:'5px'
  
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      //border: '1px solid black',
    },
  }));



  return (
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Num</StyledTableCell>
            <StyledTableCell align="left">Manzana</StyledTableCell>
            <StyledTableCell align="left">Parcela</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <StyledTableRow key={`${row.i}-${i}`}>
              <StyledTableCell sx={{ background:'rgba(129, 129, 129, 0.1)'}}><b>{i}</b></StyledTableCell>
              <StyledTableCell align="left">{row.mz}</StyledTableCell>
              <StyledTableCell align="left">{row.pa}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}