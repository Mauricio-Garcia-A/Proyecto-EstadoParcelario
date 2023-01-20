import React from 'react'
import './ExtraInformation.css'
import { useNavigate, useParams } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import IconoSVG from '../../components/IconoSvg/IconoSvg';
import useParcelasHome from '../../hooks/usePaselasHome';


export default function ExtraInformation() {
    const navigate = useNavigate()
    const { parcelaHome } = useParcelasHome()

    let data = parcelaHome.map(parcela => parcela.nom_cat.mz.toLowerCase().replace(' ', ''));
    const dataMz = new Set(data);
    let manzanas = [...dataMz];


    return (
        <section className='contenedor-stadar'>
            <IconButton className='boton-atras' aria-label="delete" size="large" onClick={() => navigate(-1)}>
                <IconoSVG tipo='flecha-izquierda' width='30px' />
            </IconButton>
            <div>ExtraInformation</div>

            <article className='contenedor-imagen-mz-dx'>
                <img src={`/Proyecto-EstadoParcelario/imagenes-info-extra/dx.jpg`} alt={`parcelas-dx-mz.png`} />
            </article>
            <div className='contenedor-imagen-mzs'>
                {manzanas.map((manzana, i) => {
                    return <article key={`manzana-${i}`} className='contenedor-imagen-mz'>
                        <img src={`/Proyecto-EstadoParcelario/imagenes-info-extra/${manzana}.jpg`} alt={`mz-${manzana}.png`} />
                    </article>
                })}
            </div>

        </section>

    )
}
