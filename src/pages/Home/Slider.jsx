import React, { Fragment, useState } from 'react';
import ImgBackground from "../../assets/Prepa.jpg"
import { Link } from 'react-router-dom';
import useTheme from '../../Components/useTheme';
export function useSlider(){
  const [state, setState] = useState("false"); 
  const Toggle = useTheme()
  const handleAnimation = () => {
    setState(prev => {
      if(prev === "getting-out"){
        return "false"
      }
      if(prev === "getting-in"){
        return "true"
      }
      return prev; 
    })
  }
  const handleClick = () => {
    setState(prev => prev === "true" ? "getting-out": "getting-in")
  }
  const Element = () => (
    <Fragment>
      <main className="slider-container" data-state={state} onAnimationEnd={handleAnimation}>
        <div className="slider-background">
          <img src={ImgBackground} alt="" />
        </div>
        <span className='slider-cross' onClick={handleClick}>
          <Toggle style='slider-theme-toggle'/>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <span className="info">
          000000-0 <br />
          nombre.apellido@prepaibero.mx
        </span>
        <Link to="/login" className="salir">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
        <ul className='slider-main'>
          <li>            
            Cambiar la contraseña
          </li>
          <li>
            Actulizar los datos personales
          </li>
        </ul>
      </main>
      <div className="slider-click" onClick={handleClick} data-state={state}></div>
    </Fragment>
  );
  return [Element, handleClick]
}