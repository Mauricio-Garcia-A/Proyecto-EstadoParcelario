import React from 'react'
import { TITULARES } from '../../assets/auxBD'
import useParcelaId from '../../hooks/useParcelaId'
import useParcelasHome from '../../hooks/usePaselasHome'

//import getParcelas from '../../sevicios/getParcelas'
import './Home.css'

export default function Home() {

  //const { datos, loding } = getParcelas('mattioli-miguel-antonio')
  //let MATTIOLI = datos[0]
  //let RIVERO = datos[1]

  TITULARES
  let MATTIOLI = TITULARES[0]
  let loding = false

  const {parcelaHome}=useParcelasHome()
  
  return (
    <section className='contenedor-stadar'>
      <article className='contenedor-lista-terrenos'>
        <h2>Informacion general de los terrenos</h2>
        <div>
          {loding
            ? <p>CARGANDO ... </p>
            : <>
              <h3>{`${MATTIOLI.titular} (${MATTIOLI.parcelas.length})`}</h3>
              {parcelaHome.map((parcela, i) => {
                return <p key={`parcela-${i}`} > 
                          <b className={`parcela-${parcela.titularidad}`}>{`${parcela.partida} - `}</b>{`MZ:${parcela.nom_cat.mz} PA:${parcela.nom_cat.pa}`}
                        </p>
              })}

            </>
          }
        </div>
      </article>
      
    </section>
  )
}
