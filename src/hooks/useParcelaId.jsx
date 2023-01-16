import { PARCELAS } from "../assets/auxBD"


export default function useParcelaId(id) {
    const parcelaFiltro= PARCELAS.filter(parcela => (parcela.id === id))
    const parcelaSeleccionada=parcelaFiltro[0]
    return {parcelaSeleccionada}
}
