import React from 'react'
import { TITULARES } from '../../assets/auxBD'
import TableParcelSimple from '../../components/Tables/TableParcelSimple'

import './ListParcel.css'

export default function ListParcel() {

  let MATTIOLI = TITULARES[0]
  let RIVERO = TITULARES[1]

  let COMPARTIDOS = []
  MATTIOLI.parcelas.map(parcelaM => {
    RIVERO.parcelas.map(parcelaR => {
      if (parcelaM.id === parcelaR.id) {
        COMPARTIDOS.push(parcelaM)
      }
    })
  })


  return (
   <div className='contenedor-stadar contenedor-listaTerrenos'>
    <h2>Lista de los terrenos</h2>
    <section className='contenedor-titulares'>
      <article>
        <h3>{`${MATTIOLI.titular} (${MATTIOLI.parcelas.length})`}</h3>
        <TableParcelSimple rows={MATTIOLI.parcelas} color='green'/>
      </article>
      <article>
        <h3>{`${RIVERO.titular} (${RIVERO.parcelas.length})`}</h3>
        <TableParcelSimple rows={RIVERO.parcelas} color='grey' />
      </article>
      <article>
        <h3>{`COMPARTIDOS (${COMPARTIDOS.length})`}</h3>
        <TableParcelSimple rows={COMPARTIDOS} color='orange' />
      </article>
    </section>
    </div>
  )
}
