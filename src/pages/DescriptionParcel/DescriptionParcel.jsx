import React from 'react'
import { TITULARES } from '../../assets/auxBD'
import TableDescription from '../../components/Tables/TableDescription'

import './DescriptionParcel.css'


export default function DescriptionParcel() {

  TITULARES
  let MATTIOLI = TITULARES[0]


  return (
    <section className=' contenedor-stadar'>
      <article className='contenedor-descripcion-parcela'>
        <h2>Descripcion con informacion de cada Terreno</h2>
        <TableDescription rows={MATTIOLI.parcelas}/>
      </article>
    </section>
  )
}
