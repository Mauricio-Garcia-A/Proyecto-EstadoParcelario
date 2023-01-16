import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';

function createData(id,mz, pa) {
  return {
    id,
    mz,
    pa,
  };
}

function Row(props) {
  const { row, i} = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ background: 'rgba(34, 34, 34, 0.2)'}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="th" scope="row" sx={{ background: 'rgba(34, 34, 34, 0.1)'}}>
          {i}
        </TableCell>
        <TableCell align="left"><b>MZ: </b>{row.mz}</TableCell>
        <TableCell align="left"><b>PA: </b>{row.pa}</TableCell>
        <TableCell align="left">## estado ## </TableCell>
        <TableCell align="left">## titulares ##</TableCell>
        <TableCell align="right">
        <Link key={'item'+row.id}  to={`/parcela/${row.id}`}>BOTON</Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Informacion Descriptiva
              </Typography>
              <section>
                <p>{"{ ... }"}</p>
                <p>{"{ ... }"}</p>
                <p>{"{ ... }"}</p>
               
              </section>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}





export default function TableDescription({rows}) {

  const rowsFormatiadas = [];
  rows.map(row =>{
    rowsFormatiadas.push(createData(row.id,row.mz,row.pa),
    )
  })

  return (
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table">
        <TableHead sx={{  background: 'orange'}}>
          <TableRow>
            <TableCell sx={{ width:'30px'}} />
            <TableCell align="center" sx={{ width:'100px'}}>N° de Terrenos</TableCell>
            <TableCell align="left"  sx={{ width:'100px'}}>MANZANA</TableCell>
            <TableCell align="left"  sx={{ width:'100px'}}>PARCELA</TableCell>
            <TableCell align="left"  sx={{ width:'150px'}}>ESTADO</TableCell>
            <TableCell align="left">TITULAR</TableCell>
            <TableCell sx={{ width:'200px'}} />

          </TableRow>
        </TableHead>
        <TableBody>
          {rowsFormatiadas.map((row, i) => (
            <Row key={row.name} row={row} i={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}