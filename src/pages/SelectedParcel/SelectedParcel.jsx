import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import IconoSVG from '../../components/IconoSvg/IconoSvg';
import useParcelaId from '../../hooks/useParcelaId';


import './SelectedParcel.css'

export default function SelectedParcel() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { parcelaSeleccionada } = useParcelaId(id)

  return (
    <section className='contenedor-parcela-seleccionada contenedor-stadar'>
      <header>
        <IconButton className='boton-atras' aria-label="delete" size="large" onClick={() => navigate(-1)}>
          <IconoSVG tipo='flecha-izquierda' width='30px' />
        </IconButton>

        <h1>Terreno Partida: {parcelaSeleccionada.partida}</h1>
        <h2><b>MZ:</b> {parcelaSeleccionada.nom_cat.mz} &nbsp; &nbsp; &nbsp; <b>PA:</b> {parcelaSeleccionada.nom_cat.pa}</h2>
      </header>

      <article className='contenedor-imagen-parcela-2'>
        <img src={`/Proyecto-EstadoParcelario/imagenes-parcelas/${parcelaSeleccionada.partida}.png`} alt={`parcelas-${parcelaSeleccionada.partida}.png`} />
      </article>
      <article className='contenedor-informe-estado'>
        <h3>
          ESTADO DEL TERRENO:
          <b className={`parcela-descripcion-titulo-${parcelaSeleccionada.estado.tipo}`}> {
            (parcelaSeleccionada.estado.tipo === 'dominio')
              ? 'EN DOMINIO DEL TITULAR'
              : (parcelaSeleccionada.estado.tipo === 'usurpado')
                ? 'USURPADO'
                : (parcelaSeleccionada.estado.tipo === 'vendido')
                  ? 'VENDIDO por BOLETO (sin escriturar)'
                  : "LIBRE"
          }
          </b>
        </h3>
        <h4>Supuesta Persona a acargo: {parcelaSeleccionada.estado.persona}</h4>
        <div  className='contenedor-info-google'>
          <article className='contenedor-imagen-parcela-google'>
            <img src={`/Proyecto-EstadoParcelario/imagenes-google/${parcelaSeleccionada.infoEstado.imagenGoogle}.png`} alt={`parcelas-${parcelaSeleccionada.partida}.png`} />
          </article>
          <div>
            <b>Foto de 'Google Street View' sacada en el 2015</b>
            <p>{parcelaSeleccionada.infoEstado.descripcionGoogle}</p>
          </div>
        </div>
        {parcelaSeleccionada.infoEstado.infomacion.map(parrafo =>{
          return <p>{parrafo}</p>
        })}
        <div>
          {parcelaSeleccionada.infoEstado.imagenesPrubas.map(imagen =>{
            return <article className='contenedor-imagen-parcela-google'>
                      <img src={`/Proyecto-EstadoParcelario/imagenes-pruebas/${imagen}.jpg`} alt={`parcelas-${imagen}`} />
                    </article>
          })}
          
        </div>

      </article>

     
    </section>

  )
}
