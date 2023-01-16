import { writeFile, readFile} from 'node:fs/promises'                 
import path from 'node:path'  
                      
const DB_PATH = path.join(process.cwd(),'DB')
export function leerJSON (fileName) {
    return readFile(`${DB_PATH}/${fileName}.json`, 'utf-8').then(JSON.parse)
}

export function escribirJSON(fileName, data) {
    return writeFile(`${DB_PATH}/${fileName}.json`, JSON.stringify(data, null, 2), 'utf-8')       // Creo/modifico/actualizo el arcrivo leaderboard.json con la info de los equipos
}







let TEXT =  `23/03/2021 PROVINCIA DE BUENOS AIRES L44A0
D.P.R.P. DIRECCION PROVINCIAL DEL REGISTRO DE LA PROPIEDAD
Nro. Entrada: 98 0293033/8 23/03/2021
La presente informacion esta limitada a los inmuebles contenidos en la
base de datos.
Si el informe es afirmativo, el interesado debera verificar el dato con la
inscripcion respectiva, mediante la solicitud de Informe Art. 25 del Dto.
Ley 11.643/63 y Art. 21/24 al 27 de Dto., Reglamentario 5479/65.
HAY TITULARIDAD A NOMBRE DE:
MATTIOLI MIGUEL ANTONIO
1 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 1190
**NOM.CAT.: C: 1 S: A MZ: 52 PA: 9 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 7582 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/1
2 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 4512
**NOM.CAT.: C: 1 S: B Q 23 MZ: 23 D PA: 4 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 171 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/4
3 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 5518
**NOM.CAT.: C: 1 S: A Q 23 MZ: 52 PA: 8 A SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 1405 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/1
4 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 7007
**NOM.CAT.: C: 1 S: B Q 19 MZ: 19 A PA: 8 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 976 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/4
HOJA: 1 de 6
23/03/2021 PROVINCIA DE BUENOS AIRES L44A0
D.P.R.P. DIRECCION PROVINCIAL DEL REGISTRO DE LA PROPIEDAD
Nro. Entrada: 98 0293033/8 23/03/2021
La presente informacion esta limitada a los inmuebles contenidos en la
base de datos.
Si el informe es afirmativo, el interesado debera verificar el dato con la
inscripcion respectiva, mediante la solicitud de Informe Art. 25 del Dto.
Ley 11.643/63 y Art. 21/24 al 27 de Dto., Reglamentario 5479/65.
HAY TITULARIDAD A NOMBRE DE:
MATTIOLI MIGUEL ANTONIO
5 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 7614
**NOM.CAT.: C: 1 S: A Q 19 MZ: 4 PA: 5 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 716 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/4
6 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 7626
**NOM.CAT.: C: 1 S: A Q 19 MZ: 4 PA: 17 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 695 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/4
7 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 7630
**NOM.CAT.: C: 1 S: A Q 19 MZ: 4 PA: 21 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 699 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/4
8 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 7631
**NOM.CAT.: C: 1 S: A Q 19 MZ: 4 PA: 22 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 700 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/4
HOJA: 2 de 6
23/03/2021 PROVINCIA DE BUENOS AIRES L44A0
D.P.R.P. DIRECCION PROVINCIAL DEL REGISTRO DE LA PROPIEDAD
Nro. Entrada: 98 0293033/8 23/03/2021
La presente informacion esta limitada a los inmuebles contenidos en la
base de datos.
Si el informe es afirmativo, el interesado debera verificar el dato con la
inscripcion respectiva, mediante la solicitud de Informe Art. 25 del Dto.
Ley 11.643/63 y Art. 21/24 al 27 de Dto., Reglamentario 5479/65.
HAY TITULARIDAD A NOMBRE DE:
MATTIOLI MIGUEL ANTONIO
9 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 7633
**NOM.CAT.: C: 1 S: A Q 19 MZ: 4 PA: 24 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 702 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/4
10 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8497
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 A PA: 7 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
11 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8498
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 A PA: 8 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
12 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8500
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 A PA: 10 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
HOJA: 3 de 6
23/03/2021 PROVINCIA DE BUENOS AIRES L44A0
D.P.R.P. DIRECCION PROVINCIAL DEL REGISTRO DE LA PROPIEDAD
Nro. Entrada: 98 0293033/8 23/03/2021
La presente informacion esta limitada a los inmuebles contenidos en la
base de datos.
Si el informe es afirmativo, el interesado debera verificar el dato con la
inscripcion respectiva, mediante la solicitud de Informe Art. 25 del Dto.
Ley 11.643/63 y Art. 21/24 al 27 de Dto., Reglamentario 5479/65.
HAY TITULARIDAD A NOMBRE DE:
MATTIOLI MIGUEL ANTONIO
13 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8501
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 A PA: 11 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
14 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8503
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 A PA: 13 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
15 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8504
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 A PA: 14 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
16 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8505
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 A PA: 15 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
HOJA: 4 de 6
23/03/2021 PROVINCIA DE BUENOS AIRES L44A0
D.P.R.P. DIRECCION PROVINCIAL DEL REGISTRO DE LA PROPIEDAD
Nro. Entrada: 98 0293033/8 23/03/2021
La presente informacion esta limitada a los inmuebles contenidos en la
base de datos.
Si el informe es afirmativo, el interesado debera verificar el dato con la
inscripcion respectiva, mediante la solicitud de Informe Art. 25 del Dto.
Ley 11.643/63 y Art. 21/24 al 27 de Dto., Reglamentario 5479/65.
HAY TITULARIDAD A NOMBRE DE:
MATTIOLI MIGUEL ANTONIO
17 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8506
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 A PA: 16 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
18 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8515
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 B PA: 11 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
19 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8516
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 B PA: 12 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
20 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8521
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 B PA: 17 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
HOJA: 5 de 6
23/03/2021 PROVINCIA DE BUENOS AIRES L44A0
D.P.R.P. DIRECCION PROVINCIAL DEL REGISTRO DE LA PROPIEDAD
Nro. Entrada: 98 0293033/8 23/03/2021
La presente informacion esta limitada a los inmuebles contenidos en la
base de datos.
Si el informe es afirmativo, el interesado debera verificar el dato con la
inscripcion respectiva, mediante la solicitud de Informe Art. 25 del Dto.
Ley 11.643/63 y Art. 21/24 al 27 de Dto., Reglamentario 5479/65.
HAY TITULARIDAD A NOMBRE DE:
MATTIOLI MIGUEL ANTONIO
21 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8522
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 B PA: 18 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
22 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 8523
**NOM.CAT.: C: 1 S: A Q 19 MZ: 27 B PA: 19 SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 888 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/3
23 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 9322
**NOM.CAT.: C: 1 S: B Q 23 MZ: 23 W PA: 3 A SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 1 NRO: 5429 UF: AÑO: S/Z:
F.NAC: NAC: DOC: LE 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.: 1/2
24 )PARTIDO-PARTIDA PDO: 19 PARTIDA: 7560
**NOM.CAT.: C: 1 S: A Q 23 MZ: 106 PA: 3 D SP:
INSCRIPC.DOMINIO: PDO: 19 TI: 3 NRO: 11 UF: AÑO: 1965 S/Z:
F.NAC: NAC: DOC: 1239215 CUIT:
ORGANISMO:
DOMICILIO: LOCALIDAD:
PROVINCIA: P.I.:
LA BUSQUEDA SE REALIZO EN TODAS LAS AREAS
LA PLATA, 23 DE MARZO 2021 HOJA: 6 de `


    //console.log( TEXT.substr(TEXT.indexOf("NOMBRE DE:")+10, (TEXT.indexOf("1 )")) - TEXT.indexOf("NOMBRE DE:")-10))

    let name = TEXT.substr(TEXT.indexOf("NOMBRE DE:")+10, (TEXT.indexOf("1 )")) - TEXT.indexOf("NOMBRE DE:")-10).trim()

    let items = []

    let next=true
    let i = 1
    while (next) {
        
        let inicio=TEXT.indexOf(`${i} )`)
        if (inicio === -1) {
            next=false
        } else {
            let final=TEXT.indexOf("P.I.")
            let cadena = (TEXT.toString())

            TEXT = TEXT.replace(`${i} )`, 'AAA')
            TEXT = TEXT.replace(`P.I.`, 'BBBB')

            let datItem = cadena.substr(inicio,((final-inicio)+9))

            //console.log( datItem.substr(datItem.indexOf("PA:")+3, (datItem.indexOf("SP:")) - datItem.indexOf("PA:")-3))
            let MZ=datItem.substr(datItem.indexOf("MZ:")+3, (datItem.indexOf("PA:")) - datItem.indexOf("MZ:")-3).trim()
            let PA=datItem.substr(datItem.indexOf("PA:")+3, (datItem.indexOf("SP:")) - datItem.indexOf("PA:")-3).trim()
            
            let id = `${MZ.toLowerCase().replace(/ /g,'')}-${PA.toLowerCase().replace(/ /g,'')}`
            items.push({id:id, mz:MZ, pa:PA })

            i++
        }
        
    }


       
let DATA = {titular:name, parcelas: items}
let fileName = name.toLowerCase().replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-')

escribirJSON(fileName, DATA)