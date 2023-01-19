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

  const { parcelaHome } = useParcelasHome()

  let data = parcelaHome.map(parcela => parcela.nom_cat.mz.toLowerCase().replace(' ', ''));
  const dataMz = new Set(data);
  let manzanas = [...dataMz];

  return (
    <section className='contenedor-stadar'>
      
      <h2>Informacion general de los terrenos</h2>
      <h3>{`${MATTIOLI.titular} (${MATTIOLI.parcelas.length})`}</h3>
      <div className='contenedor-home'>
          <article className='contenedor-lista-terrenos'>
            <div className='contenedor'>
              {loding
                ? <p>CARGANDO ... </p>
                : <>
                  <h3><u>PARCELAS</u></h3>
                  {parcelaHome.map((parcela, i) => {
                    return <p key={`parcela-${i}`} >
                      <b className={`parcela-${parcela.titularidad}`}>{`${parcela.partida}`}</b>
                     
                      <b> - MZ: </b>{`${parcela.nom_cat.mz}`}
                      &nbsp; &nbsp;
                      <b>PA: </b>{`${parcela.nom_cat.pa}`}
                    </p>
                  })}

                </>
              }
            </div>
          </article>

          <div className='contenedor-mapas'>
          <article className='contenedor-imagen-mz-dx'>
            <img src={`/Proyecto-EstadoParcelario/imagenes-manzanas/dx-mz.png`} alt={`parcelas-dx-mz.png`} />
          </article>
          <div className='contenedor-imagen-mzs'>
            {manzanas.map((manzana, i) => {
              return <article key={`manzana-${i}`} className='contenedor-imagen-mz'>
                <img src={`/Proyecto-EstadoParcelario/imagenes-manzanas/mz${manzana}.png`} alt={`mz-${manzana}.png`} />
              </article>
            })}
          </div>
        </div>
      </div>

        
      
    </section>
  )
}
