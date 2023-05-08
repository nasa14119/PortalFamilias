import React from "react";
import { ShowHorario } from "./ShowHorario";

const ErrorInDay = () => {
    return (
        <div className="calificacion_err error_dia">
        <i className="fa-regular fa-clock"></i>
        <span>Error al cargar el dia</span>
      </div>
    );
}
export const HorarioDesktop = ({ data }) => {
  return(
  <div className="table-horario">
    <div className="thead">
      <div>Lunes</div>
      <div>Martes</div>
      <div>Miercoles</div>
      <div>Jueves</div>
      <div>Viernes</div>
    </div>
    <div className="tbody">
      <ul className="horas">
        <li>8:00</li>
        <li>9:00</li>
        <li>10:00</li>
        <li>11:00</li>
        <li>12:00</li>
        <li>1:00</li>
        <li>2:00</li>
        <li>3:00</li>
      </ul>
      {data ? (
        <div className="main">
            {data.map((element, index)=> {
                return(
                  <ul className="dia" key={`dia-${index}`}>
                      <ShowHorario dia={element} />
                  </ul>
                )
            })}
        </div>
      ) : (
        <div className="calificacion_err error_data_horario">
          <i className="fa-regular fa-clock"></i>
          <span>Horario aun no disponible</span>
        </div>
      )}
    </div>
  </div>
)};
