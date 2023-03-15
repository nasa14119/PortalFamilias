import React,{Fragment, useEffect, useRef} from 'react'
import "../pages/css/TablaNotas.css"
const data = {
  400: [
    {
      Materia_1: 1.1,
      Materia_2: 9.8,
      Materia_3: 1.1,
      Materia_4: 1.1,
      Materia_5: 1.1,
      Materia_6: 1.1,
      Materia_7: 1.1,
      Materia_8: 1.1,
      Materia_9: 1.1,
      Materia_10: 1.1,
      Materia_11: 1.1,
      Materia_12: 1.1,
    },
    {
      Materia_1: 1.1,
      Materia_2: 9.8,
      Materia_3: 1.1,
      Materia_4: 1.1,
      Materia_5: 1.1,
      Materia_6: 1.1,
      Materia_7: 1.1,
      Materia_8: 1.1,
      Materia_9: 1.1,
      Materia_10: 1.1,
      Materia_11: 1.1,
      Materia_12: 1.1,
    },
  ],
  500: [
    {
      Materia_1: 1.1,
      Materia_2: 9.8,
      Materia_3: 1.1,
      Materia_4: 1.1,
      Materia_5: 1.1,
      Materia_6: 1.1,
      Materia_7: 1.1,
      Materia_8: 1.1,
      Materia_9: 1.1,
      Materia_10: 1.1,
      Materia_11: 1.1,
      Materia_12: 1.1,
    },
    {},
  ],
};
const DisplayError = ({mess}) =>{
  return (
    <div className="calificacion_err">
      <i className="fa-regular fa-clock"></i>
      <span>{mess}</span>
    </div>
  );
}
const MakeTable = (year, semestre) => {
  const format = (object) => {
    let prom = 0; 
    let arr = []; 
    for (const [key, value]of Object.entries(object)) {
      arr.push(
        <tr key={`Mareria ${key} de ${year}`}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      )
      if (value !== null && typeof value === "number"){
        prom += value
      }
    }
    prom = prom /arr.length
    prom = Math.round(prom*100)/100; 
    arr.push(
      <tr key="Promedio Final">
        <td>Promedio Final</td>
        <td>{prom}</td>
      </tr>
    )
     return arr
  }
  return (
    <table className="Tabla_calis" >
      <thead>
        <tr>
          <th>
            Materia
          </th>
          <th>
            Calificacion
          </th>
        </tr>
      </thead>
      <tbody>
          {format(data[year][semestre])}
      </tbody>
    </table>
  )
}
function TablaNotas({what}) {
  const Tabla_Calis= useRef()
  useEffect(() => {
    Tabla_Calis.current.style.animation = "none"
    Tabla_Calis.current.offsetHeight
    Tabla_Calis.current.style.animation = null
  }, [what])
  return (
    <div className="calificaciones" ref={Tabla_Calis}>
      {data[what] ? (
        <Fragment>
          <div className="semestre_1">
            <h2>Semestre 1</h2>
            {Object.keys(data[what]?.[0]).length !== 0 ? (
              MakeTable(what, 0)
            ) : (
              <DisplayError mess="Primer semestre no disponible"/>
            )}
          </div>
          <div className="semestre_2">
            <h2>Semestre 2</h2>
            {Object.keys(data[what]?.[1]).length !== 0 ? (
              MakeTable(what, 1)
            ) : (
              <DisplayError mess="Segundo semestre no disponible"/>
            )}
          </div>
        </Fragment>
      ) : (
        <div className="calificacion_err">
          <i className="fa-regular fa-clock"></i>
          <span>Calificacion no disponible</span>
        </div>
      )}
    </div>
  );
}

export default TablaNotas