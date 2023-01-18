import React from 'react'
import { TITULARES } from '../../assets/auxBD'
import TableDescription from '../../components/Tables/TableDescription'

import './DescriptionParcel.css'
import useParcelasHome from '../../hooks/usePaselasHome'

export default function DescriptionParcel() {

  let MATTIOLI = TITULARES[0]
  const {parcelaHome}=useParcelasHome()

  return (
    <section className=' contenedor-stadar'>
      <article className='contenedor-descripcion-parcela'>
        <h2>Descripcion con informacion de cada Terreno</h2>
        <TableDescription rows={parcelaHome}/>
      </article>
    </section>
  )
}
