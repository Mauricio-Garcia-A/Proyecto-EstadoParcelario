import useParcelasHome from './usePaselasHome'


const {parcelaHome}= useParcelasHome()

export default function useParcelaId(id) {
    const parcelaFiltro= parcelaHome.filter(parcela => (parcela.id === id))
    const parcelaSeleccionada=parcelaFiltro[0]
    return {parcelaSeleccionada}
}
