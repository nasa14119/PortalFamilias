import React , {Fragment, useState, useRef, useEffect}from 'react'
import Header from "../../Components/Header.jsx"
import "./styles.css"
import { HorarioDesktop } from './HorarioDesktop.jsx'
import { HorarioPhone } from './HorarioPhone.jsx'
import { Info } from './setColor.js'

export function Horario() {
  const [width , setWidth] = useState(window.innerWidth); 
  const [info , setInfo] = useState(null); 
  useEffect(()=> {
      setInfo(Info)
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [])
  return (
    <div>
      <Header/> 
      {
        width > 500 ? 
            <HorarioDesktop data={info}/> 
        : 
            <HorarioPhone data={info}/> 
      }
    </div>
  );
}