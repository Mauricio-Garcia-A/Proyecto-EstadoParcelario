import { useEffect, useState } from "react"

export default function getParcelas(fileName) {
  const [datos, setDatos] = useState([])
  const [loding, setLoding] = useState(true)

  useEffect(() => {
    setLoding(true)
    fetch(`titularesBD.json`)
      .then(response => response.json())
      .then(data => {
        setDatos(data)
        setLoding(false)
      })
  }, [])

  return {datos,loding}
}


/*
export const getParcelas = async(fileName) => {
  try {
      const response = await fetch(`/${fileName}.json`)
      const datos = await response.json()
      return datos
  } catch (e) {
      // Enviar el error a un servicio de reporte de errores
      return []
  }
}




import { useEffect, useState } from "react"

export function getParcelas(fileName) {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    fetch(`/${fileName}.json`)
      .then(response => response.json())
      .then(data => {
        setDatos(data)
      })
  }, [])

  return datos
}
*/
