import React , {Fragment, useState, useRef, useEffect}from 'react'
import Header from "../../Components/Header.jsx"
import "./styles.css"
import { HorarioDesktop } from './HorarioDesktop.jsx'
import { HorarioPhone } from './HorarioPhone.jsx'
const data = [
    [
    {clase:"Ingles", inicio:"8:00", larg:true},
    {clase:"TD", inicio:"9:40", larg:true},
    {clase:"Espacio Independiente", inicio:"11:20", larg:false},
    {clase:"Literatura", inicio:"12:05",larg:false},
    {clase:"Recreo", inicio:"12:50", larg:false},
    {clase:"Tutoria", inicio:"1:35", larg:false},
    {clase:"HDM", inicio:"2:30", larg:true},
  ],
  [
    {clase:"Matematicas", inicio:"8:00", larg:true},
    {clase:"TLR", inicio:"9:40", larg:true},
    {clase:"Educacion Fisica", inicio:"11:20", larg:false},
    {clase:"Recreo", inicio:"12:05",larg:false},
    {clase:"Física", inicio:"12:50", larg:true},
    {clase:"Taller", inicio:"2:30", larg:true},
  ],
  [
    {clase:"Educacion Fisica", inicio:"8:00", larg:false},
    {clase:"Matematicas", inicio:"8:45", larg:false},
    {clase:"Espacio Independiente", inicio:"9:40", larg:false},
    {clase:"Recreo", inicio:"10:25", larg:false},
    {clase:"Biologia", inicio:"11:20", larg:true},
    {clase:"FIH", inicio:"12:50", larg:false},
    {clase:"HDM", inicio:"1:35", larg:false},
    {clase:"Física", inicio:"2:30", larg:true},
  ],
    [
    {clase:"Ingles", inicio:"8:00", larg:true},
    {clase:"FIH", inicio:"9:40", larg:true},
    {clase:"Tutoria", inicio:"11:20", larg:false},
    {clase:"Recreo", inicio:"12:05", larg:false},
    {clase:"Biologia", inicio:"12:50", larg:true},
    {clase:"Taller", inicio:"2:30", larg:true}
  ],
  [
    {clase:"Matematicas", inicio:"8:00", larg:true},
    {clase:"Literatura", inicio:"9:40", larg:true},
    {clase:"Recreo", inicio:"11:20", larg:false},
    {clase:"Física", inicio:"12:05", larg:false},
    {clase:"TD", inicio:"12:50", larg:true}
  ],
]
export function Horario() {
  const [display, setDisplay] = useState(["true", "false", "false", "false", "false"]); 
  const [clickAble, setClick] = useState(false);
  const index_current = useRef(0); 
  const [width , setWidth] = useState(window.innerWidth); 
  useEffect(()=> {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [])
  return (
    <div>
      <Header/> 
      {
        width > 500 ? 
            <HorarioDesktop data={data}/> 
        : 
            <HorarioPhone data={data}/> 
      }
    </div>
  );
}