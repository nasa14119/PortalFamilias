import React , {Fragment, useState, useRef, useEffect}from 'react'
import Header from "../../Components/Header.jsx"
import "./styles.css"
import { HorarioDesktop } from './HorarioDesktop.jsx'
import { useColor } from "./useColor";
import { HorarioPhone } from './HorarioPhone.jsx'
export function Horario() {
  const [width , setWidth] = useState(window.innerWidth); 
  useEffect(()=> {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [])
  return (
    <div>
      <Header/> 
      {
        width > 500 ? 
        <HorarioDesktop/> 
        : 
        <HorarioPhone/> 
      }
    </div>
  );
}