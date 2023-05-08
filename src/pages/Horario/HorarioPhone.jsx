import { ShowHorario } from './ShowHorario';
import React, { useState } from 'react'
  const ShowHorarioPhone = ({index, info}) =>{
    const comitChange = (side, prev) => {
      let arry = Array(display.length).fill("false");
      arry[index_current.current] = `await-${side}`;
      arry[prev] = `leve-${side}`;
      setDisplay(arry);
      setTimeout(()=>{
        arry[index_current.current] = `true`;
        arry[prev] = `false`;
        setDisplay(prev => arry)
        setClick(false);
      } , 1000)
    };
    return (
      <React.Fragment>
          <div className='header-phone'><span>{dia[index]}</span></div>
          <Controls/>
          <ul className='main-phone'>
            <ShowHorario dia={info}/>
          </ul>
      </React.Fragment>
    );
  }
export const HorarioPhone = ({data}) => {
  const [index, setIndex] = useState(0)
  const handleRightClick = () => {
    // let prev = index_current.current;
    setIndex(prev => (prev+ 1) >= 5 ? 0 : prev + 1); 
    // index_current.current += 1;
    // index_current.current >= display.length && (index_current.current = 0);
    // comitChange("right", prev);
  };
  const handleLeftClick = () => {
    setIndex(prev => (prev - 1) < 0 ? 4 : prev - 1); 
    // index_current.current -= 1;
    // index_current.current < 0 && (index_current.current = display.length - 1);
    // comitChange("left", prev);
  };
  const Controls = () => {
    return(
      <div className="controls">
      <button
        // data-notmove={index_current.current === 0 || clickAble}
        onClick={() => {
          handleLeftClick()
          // setClick(true);
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        // data-notmove={
        //   index_current.current === display.length - 1 || clickAble
        // }
        onClick={() => {
          handleRightClick();
          // setClick(true);
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    )
  }
  let dia = ["lunes", "martes", "miercoles", "jueves", "vienes"]; 
  return (
    <div className='container-phone'>
      <div className='row-phone'>
        <span>
          <Controls/>
        </span>
        <span className='header-phone'>
          {dia[index]}
        </span>
      </div>
      <div className='row-phone'>
        <ul className="horas-phone">
              <li>8:00</li>
              <li>9:00</li>
              <li>10:00</li>
              <li>11:00</li>
              <li>12:00</li>
              <li>1:00</li>
              <li>2:00</li>
              <li>3:00</li>
        </ul>
        <ul className='main-phone'>
          <ShowHorario dia={data[index]}/> 
        </ul>
      </div>
    </div>
  );
}

/*
<div className="phone-table-horario">
{data[0] ? (
  <div className="dia-phone" data-in-display={display[0]}>
              <div className="dia-phone" data-in-display={0}>
                  {/* <ShowHorarioPhone index={0} info={data[0]}/>
              </div>
            {/* {data ? (
              <div>
                  <div className='dia-phone'>
                    <ShowHorario dia={data[0]}/>
                  </div>
              </div>
            ) : (
              <div className="calificacion_err error_data_horario">
                <i className="fa-regular fa-clock"></i>
                <span>Horario aun no disponible</span>
              </div>
            )} 
              <ShowHorarioPhone index={0} />
            </div>
          ) : (
            <div className="calificacion_err error_dia">
              <i className="fa-regular fa-clock"></i>
              <span>Error al cargar el dia</span>
            </div>
          )}
            {data[1] ? (
              <div className="dia-phone" data-in-display={display[1]}>
                <ShowHorarioPhone index={1} />
              </div>
            ) : (
              <div className="calificacion_err error_dia">
                <i className="fa-regular fa-clock"></i>
                <span>Error al cargar el dia</span>
              </div>
            )}
            {data[2] ? (
              <div className="dia-phone" data-in-display={display[2]}>
                <ShowHorarioPhone index={2} />
              </div>
            ) : (
              <div className="calificacion_err error_dia">
                <i className="fa-regular fa-clock"></i>
                <span>Error al cargar el dia</span>
              </div>
            )}
            {data[3] ? (
              <div className="dia-phone" data-in-display={display[3]}>
                <ShowHorarioPhone index={3} />
              </div>
            ) : (
              <div className="calificacion_err error_dia">
                <i className="fa-regular fa-clock"></i>
                <span>Error al cargar el dia</span>
              </div>
            )}
            {data[4] ? (
              <div className="dia-phone" data-in-display={display[4]}>
                <ShowHorarioPhone index={4} />
              </div>
            ) : (
              <div className="calificacion_err error_dia">
                <i className="fa-regular fa-clock"></i>
                <span>Error al cargar el dia</span>
              </div>
            )}
        </div>
*/