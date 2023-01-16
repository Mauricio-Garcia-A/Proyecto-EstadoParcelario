import React from 'react'
import { TITULARES } from '../../assets/auxBD'

//import getParcelas from '../../sevicios/getParcelas'
import './Home.css'

export default function Home() {

  //const { datos, loding } = getParcelas('mattioli-miguel-antonio')
  //let MATTIOLI = datos[0]
  //let RIVERO = datos[1]

  TITULARES
  let MATTIOLI = TITULARES[0]
  let loding = false

  
  return (
    <section className='contenedor-stadar'>
      <article className='contenedor-lista-terrenos'>
        <h2>Informacion general de los terrenos</h2>
        <div>
          {loding
            ? <p>CARGANDO ... </p>
            : <>
              <p>{`${MATTIOLI.titular} (${MATTIOLI.parcelas.length})`}</p>
              {MATTIOLI.parcelas.map((parcela, i) => {
                return <p key={`parcela-${i}`}>{parcela.id}</p>
              })}

            </>
          }
        </div>
      </article>
      
    </section>
  )
}
