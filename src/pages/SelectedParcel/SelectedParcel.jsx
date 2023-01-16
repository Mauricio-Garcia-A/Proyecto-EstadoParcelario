import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import IconoSVG from '../../components/IconoSvg/IconoSvg';

export default function SelectedParcel() {
  const {id} = useParams()
  const navigate = useNavigate()

  return (
    <section className=' contenedor-stadar'>
      <IconButton aria-label="delete" size="large" onClick={()=>navigate(-1)}>
        <IconoSVG tipo='flecha-izquierda' width='30px'/>
      </IconButton>
       <h1>Terreno {id}</h1>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>
   
  )
}
