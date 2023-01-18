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

  console.log(parcelaSeleccionada)

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
      <article>
        <h3>
          ESTADO DEL TERRENO:
        
      <b> {
            (parcelaSeleccionada.estado.tipo==='dominio')
              ? 'EN DOMINIO DEL TITULAR'
              : (parcelaSeleccionada.estado.tipo==='usurpado')
                  ? 'USURPADO'
                  :(parcelaSeleccionada.estado.tipo==='vendido')
                    ? 'VENDIDO por BOLETO (sin escriturar)'
                    : "LIBRE"
          }
          </b>
          </h3>
          <h4>Supuesta Persona a acargo: {parcelaSeleccionada.estado.persona}</h4>
      </article>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>

  )
}
