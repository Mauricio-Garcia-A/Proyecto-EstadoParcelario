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

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import './Tables.css'




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
        <TableCell align="center" component="th" scope="row" className={`parcela-descripcion-${row.titularidad}`}>
          {i+1}
        </TableCell>
        <TableCell align="left"><b>MZ: </b>{row.nom_cat.mz}</TableCell>
        <TableCell align="left"><b>PA: </b>{row.nom_cat.pa}</TableCell>
        <TableCell align="left"><b>PARTIDA: </b>{row.partida}</TableCell>
        <TableCell align="left" className={`parcela-descripcion-${row.estado.tipo}`}>
          <b>{
            (row.estado.tipo==='dominio')
              ? 'EN DOMINIO DEL TITULAR'
              : (row.estado.tipo==='usurpado')
                  ? 'USURPADO'
                  :(row.estado.tipo==='vendido')
                    ? 'VENDIDO por BOLETO (sin escriturar)'
                    : "LIBRE"
          }</b> 
          <p>{row.estado.persona}</p>
        </TableCell>
        <TableCell align="left">
          { (row.titularidad=='unica')
              ?<p>Mattioli Miguel Antonio</p>
              :<>
                <p>Mattioli Miguel Antonio</p>
                <p>Rivero Miguel Alberto</p>
              </>
          }

        </TableCell>
        <TableCell align="right">
        <Button variant="contained" endIcon={<SendIcon />}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} key={'item'+row.id}  to={`/Proyecto-EstadoParcelario/parcela/${row.id}`}>VER MAS INFORMACION</Link>
        </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Informacion Descriptiva
              </Typography>
              <section className='contenedor-tabla-descripcion-parcela'>
                <article>
                  <p><b>N° PARTIDA:</b> {row.partida}</p>
                  <p><b>PARTIDO:</b>{row.partido} - Daireaux</p>
                  <p><b>MANZANA:</b>{row.nom_cat.mz}</p>
                  <p><b>PARCELA:</b>{row.nom_cat.pa}</p>
                  <p><b>C:</b> {row.nom_cat.c}</p>
                  <p><b>S:</b> {row.nom_cat.s}</p>
                </article>
                <article className='contenedor-imagen-parcela'>
                  <img src={`/Proyecto-EstadoParcelario/imagenes-parcelas/${row.partida}.png`} alt={`parcelas-${row.nom_cat.pa}.png`} />
                </article>
              </section>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}





export default function TableDescription({rows}) {

  return (
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table">
        <TableHead sx={{  background: 'orange'}}>
          <TableRow>
            <TableCell sx={{ width:'30px'}} />
            <TableCell align="center" sx={{ width:'100px'}}>N° de Terrenos</TableCell>
            <TableCell align="left"  sx={{ width:'100px'}}>MANZANA</TableCell>
            <TableCell align="left"  sx={{ width:'100px'}}>PARCELA</TableCell>
            <TableCell align="left"  sx={{ width:'100px'}}>PARTIDA</TableCell>
            <TableCell align="left"  sx={{ width:'150px'}}>ESTADO</TableCell>
            <TableCell align="left">TITULAR</TableCell>
            <TableCell sx={{ width:'200px'}} />

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            return <Row key={`row-${row.id}`} row={row} i={i} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}