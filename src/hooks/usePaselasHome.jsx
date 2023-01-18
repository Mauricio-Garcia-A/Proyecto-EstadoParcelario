import { PARCELAS, TITULARES } from "../assets/auxBD"
import { DOMINIO, LIBRES, USURPADOS, VENDIDOS } from "../assets/vendidosBD"


export default function useParcelasHome(id) {
  
    let ESTADOS = [VENDIDOS, LIBRES, DOMINIO, USURPADOS].flat()
    let MATTIOLI = TITULARES[0]
    let RIVERO = TITULARES[1]
  
    let COMPARTIDOS = []
    MATTIOLI.parcelas.map(parcelaM => {
      RIVERO.parcelas.map(parcelaR => {
        if (parcelaM.id === parcelaR.id) {
          COMPARTIDOS.push(parcelaM.id)
        }
      })
    })

  function buscarParcela(partidaSelec) {
      const parcelaFiltro= ESTADOS.filter(parcela => (parcela.partida === partidaSelec))
      const parcelaSeleccionada=parcelaFiltro[0]

      const {partida, ...restEstado} = parcelaSeleccionada
      
      return {...restEstado}
  }
  



    const parcelaHome= PARCELAS.map(parcela => {
      let {...ofRestParcela}=parcela
      let titularidad='unica'
       if (COMPARTIDOS.includes(parcela.id)) {
        titularidad='compartida'
       }
       let estado =  buscarParcela(parcela.partida)
       

        return {...ofRestParcela, titularidad, estado}
    }).sort(function (a, b) {
      if (a.nom_cat.mz > b.nom_cat.mz) {
        return -1;
      }
      if (a.nom_cat.mz < b.nom_cat.mz) {
        return 1;
      }
      return 0;
    }).sort(function (a, b) {
      if (a.titularidad > b.titularidad) {
        return -1;
      }
      if (a.titularidad < b.titularidad) {
        return 1;
      }
      return 0;
    })
    
    return {parcelaHome}
}