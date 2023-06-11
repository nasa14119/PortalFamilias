import { ShowHorario } from './ShowHorario';
import React, { useState } from 'react'
import { useColor } from './useColor';
export const HorarioPhone = () => {
  const [index, setIndex] = useState(0)
  const handleRightClick = () => {
    setIndex(prev => (prev+ 1) >= 5 ? 0 : prev + 1); 
  };
  const handleLeftClick = () => {
    setIndex(prev => (prev - 1) < 0 ? 4 : prev - 1); 
  };
  const Controls = () => {
    return(
      <div className="controls">
      <button
        onClick={() => {
          handleLeftClick()
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={() => {
          handleRightClick();
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    )
  }
  let dia = ["lunes", "martes", "miercoles", "jueves", "vienes"]; 
  const [done, data] = useColor(); 
  if(!done){
    return <h1 style={{display: "flex", justifyContent:"center"}}>Loading...</h1>
  }
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
