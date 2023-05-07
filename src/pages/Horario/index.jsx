import React , {Fragment, useState, useRef, useEffect}from 'react'
import moment from "moment"
import Header from "../../Components/Header.jsx"
import "./styles.css"
const format = {
  "8":1,
  "9":13,
  "10":25,
  "11":37,
  "12":49,
  "1":61,
  "2":73,
  "3":85,
  "4":98,
}
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
    {clase:"Recreo", inicio:"11:10", larg:false},
    {clase:"Física", inicio:"12:05", larg:false},
    {clase:"TD", inicio:"12:50", larg:true}
  ],
]
const Color = [
  {color:"#7cb518", materia:""},
  {color:"#2A9D8F", materia:""}, 
  {color:"#E9C46A", materia:""},
  {color:"#F4A261", materia:""},
  {color:"#ff4800", materia:""},
  {color:"#277da1", materia:""}, 
  {color:"#f58549", materia:""},
  {color:"#FCBF49", materia:""},
  {color:"#fbb02d", materia:""},
  {color:"#8ECAE6", materia:""},
  {color:"#219EBC", materia:""},
  {color:"#babd8d", materia:""},
  {color:"#FB8500", materia:""}, 
  {color:"#606c38", materia:""},
]
function Horario() {
  const ShowHorario = ({dia}) =>{
    let arry = Array(0); 
    for (let i = 0;dia.length > i ; i++)  {
      let element = dia[i]
      let subend = element.inicio.split(":");
      let inicio = format[subend[0]] + subend[1] / 5 
      let extra = element.larg? 18 : 9 
      let fin = inicio + extra
      let colorForEle = ""
      if (Color.some(e => e.materia === element.clase)){
        colorForEle = Color[Color.findIndex(e => e.materia === element.clase)].color
      }else{
        let colorIndex = Color.findIndex(e => e.materia === "")
        Color[colorIndex] = {...Color[colorIndex] , materia: element.clase}
      }
      arry.push(
        <li key={`${element.clase}-${i}`}style={{gridRow:`${inicio} / ${fin}`, backgroundColor:colorForEle}}>
          <span>{element.clase}</span>
          <span className='inicio-horario'>{element.inicio} - {moment(element.inicio, "hh:mm").add(element.larg ? 90 : 45, "m").format('h:mm')}</span>
        </li>
      )
    }
    return arry
  }
  const ShowHorarioPhone = ({index}) =>{
    const Controls = () => {
      return (
        <div className="controls">
          <button
            data-notmove={index_current.current === 0 || clickAble}
            onClick={() => {
              handleLeftClick(), setClick(true);
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            data-notmove={
              index_current.current === display.length - 1 || clickAble
            }
            onClick={() => {
              handleRightClick();
              setClick(true);
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      );
    }
    const day = ["lunes", "martes", "miercoles", "jueves", "viernes"]
    const element = day[index]
    const handleRightClick = () => {
      let prev = index_current.current;
      index_current.current += 1;
      index_current.current >= display.length && (index_current.current = 0);
      comitChange("right", prev);
    };
    const handleLeftClick = () => {
      let prev = index_current.current;
      index_current.current -= 1;
      index_current.current < 0 && (index_current.current = display.length - 1);
      comitChange("left", prev);
    };
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
      <Fragment>
          <div className='header-phone'><span>{element}</span></div>
          <Controls/>
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
            <ShowHorario dia={data[element]}/>
          </ul>
      </Fragment>
    );
  }
  const [display, setDisplay] = useState(["true", "false", "false", "false", "false"]); 
  const [clickAble, setClick] = useState(false);
  const index_current = useRef(0); 
  return (
    <div>
      <Header/> 
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
              <ul className="dia">
                {data[0] ? (
                  <ShowHorario dia={data[0]} />
                ) : (
                  <div className="calificacion_err error_dia">
                    <i className="fa-regular fa-clock"></i>
                    <span>Error al cargar el dia</span>
                  </div>
                )}
              </ul>
              <ul className="dia">
                {data[1] ? (
                  <ShowHorario dia={data[1]} />
                ) : (
                  <div className="calificacion_err error_dia">
                    <i className="fa-regular fa-clock"></i>
                    <span>Error al cargar el dia</span>
                  </div>
                )}
              </ul>
              <ul className="dia">
                {data[2] ? (
                  <ShowHorario dia={data[2]} />
                ) : (
                  <div className="calificacion_err error_dia">
                    <i className="fa-regular fa-clock"></i>
                    <span>Error al cargar el dia</span>
                  </div>
                )}
              </ul>
              <ul className="dia">
                {data[3] ? (
                  <ShowHorario dia={data[3]} />
                ) : (
                  <div className="calificacion_err error_dia">
                    <i className="fa-regular fa-clock"></i>
                    <span>Error al cargar el dia</span>
                  </div>
                )}
              </ul>
              <ul className="dia">
                {data[4] ? (
                  <ShowHorario dia={data[4]} />
                ) : (
                  <div className="calificacion_err error_dia">
                    <i className="fa-regular fa-clock"></i>
                    <span>Error al cargar el dia</span>
                  </div>
                )}
              </ul>
            </div>
          ) : (
            <div className="calificacion_err error_data_horario">
              <i className="fa-regular fa-clock"></i>
              <span>Horario aun no disponible</span>
            </div>
          )}
        </div>
      </div>
      {!(Object.keys(data).length === 0) ? (
        <div className="phone-table-horario">
          {data.lunes ? (
            <div className="dia-phone" data-in-display={display[0]}>
              <ShowHorarioPhone index={0} />
            </div>
          ) : (
            <div className="calificacion_err error_dia">
              <i className="fa-regular fa-clock"></i>
              <span>Error al cargar el dia</span>
            </div>
          )}
            {data.martes ? (
              <div className="dia-phone" data-in-display={display[1]}>
                <ShowHorarioPhone index={1} />
              </div>
            ) : (
              <div className="calificacion_err error_dia">
                <i className="fa-regular fa-clock"></i>
                <span>Error al cargar el dia</span>
              </div>
            )}
            {data.miercoles ? (
              <div className="dia-phone" data-in-display={display[2]}>
                <ShowHorarioPhone index={2} />
              </div>
            ) : (
              <div className="calificacion_err error_dia">
                <i className="fa-regular fa-clock"></i>
                <span>Error al cargar el dia</span>
              </div>
            )}
            {data.jueves ? (
              <div className="dia-phone" data-in-display={display[3]}>
                <ShowHorarioPhone index={3} />
              </div>
            ) : (
              <div className="calificacion_err error_dia">
                <i className="fa-regular fa-clock"></i>
                <span>Error al cargar el dia</span>
              </div>
            )}
            {data.viernes ? (
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
      ) : (
        <div className="calificacion_err error_data_horario">
          <i className="fa-regular fa-clock"></i>
          <span>Horario aun no disponible</span>
        </div>
      )}
    </div>
  );
}

export default Horario