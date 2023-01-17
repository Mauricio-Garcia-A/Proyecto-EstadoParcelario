import { PARCELAS, TITULARES } from "../assets/auxBD"


export default function useParcelasHome(id) {

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

    console.log()
    const parcelaHome= PARCELAS.map(parcela => {
      let {...ofRestParcela}=parcela
      let titularidad='unica'
       if (COMPARTIDOS.includes(parcela.id)) {
        titularidad='compartida'
       }
        return {...ofRestParcela, titularidad}
    })
    
    return {parcelaHome}
}