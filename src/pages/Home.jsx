import React, { Fragment, useState, useRef} from "react";
import useTheme from "../Components/useTheme";
import {Worker} from "@react-pdf-viewer/core"
import PdfViewer from "../Components/PdfViewer"
import Calendario from "/Calendario Prepa 2022.pdf"
import {Link} from "react-router-dom"
import "./main.css";
function Home() {
  const [data_open, setData] = useState(false);
  const more_info = useRef(Array(2)); 
  const calendar_ref = useRef(); 
  const [calendar, open_calendar] = useState(false)
  const Toggle = useTheme()
  const handleClick = (e) => {
    if(e.target === more_info.current[0]){
      return
    }
    if (data_open) {
      more_info.current[0].addEventListener("animationend",()=> more_info.current[1].style.display = "none", {once: true})
    } 
    setData((prev) => !prev);
  };
  const handleClickCalendar = () => {
    open_calendar(prev => !prev); 
  };
  const Calendar = () =>{
      return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <PdfViewer fileUrl={Calendario} />
        </Worker>
      )
  }
  return (
    <Fragment>
      <header className="header_home">
        <img src="/Prepa_Ibero.svg" alt="Brnad_logo" />
        <h2>Portal Familias</h2>
        <h2 className="profile" id="clicable_icon" onClick={handleClick}>
          <i className="fa-solid fa-user"></i>
        </h2>
        <div
          className="more_info_conteiner"
          onClick={handleClick}
          ref={(ele) => (more_info.current[1] = ele)}
          style={{display : `${data_open && "block"}`}}
          >
          <div
            className="more_info"
            style={data_open ? {animation:"fade-in-more-info 500ms forwards"}:{animation:"fade-out-more-info 500ms forwards"}}
            ref={(ele) => (more_info.current[0] = ele)}
          >
            <span className="info">
              000000-0 <br />
              nombre.apellido@prepaibero.mx
            </span>
            <a href="#">Cambiar la contraseña</a>
            <a href="#">Actulizar los datos personales</a>
            <Toggle style="HomeToggle"/>
            <Link to="/login" className="salir">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </Link>
          </div>
        </div>
      </header>
      <main className="main_home">
        <div className="main_content">
          <div className="other_options">
              <ul>
                <li>
                  <Link to="/calificaciones">
                    <i className="fas fa-clipboard"></i>
                    <span>Calificaciones</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reglamento">
                    <i className="fa-solid fa-book"></i>
                    <span>Reglamento</span>
                  </Link>
                </li>
                <li>
                  <Link to="/horario">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>Horario</span>
                  </Link>
                </li>
                <li id="cuenta_big" onClick={handleClick}>
                  <i className="fa-solid fa-user"></i>
                  <span>Cuenta</span>
                </li>
              </ul>
          </div>
          <div className="notification_conteiner">
            <span className="noti_asig">
              <i className="fa-solid fa-bell"></i>
              NOTIFICACIONES
            </span>
            <div>
              <a href="#">
                Evaluacion de tutores&nbsp;
                <i className="fa-solid fa-angles-right"></i>
              </a>
            </div>
            <div>
              <a href="#">
                La evaluacion de profesores ya esta aquí&nbsp;
                <i className="fa-solid fa-angles-right"></i>
              </a>
            </div>
            <div>
              <a href="#">
                Inscripcion de talleres&nbsp;
                <i className="fa-solid fa-angles-right"></i>
              </a>
            </div>
            <div>
              <Link to="/pago">
                Pago de colegiaturas&nbsp;
                <i className="fa-solid fa-angles-right"></i>
              </Link>
            </div>
            <a href="#" id="Hist_incidentes">
              Historial de incidentes
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </div>
        <div className="OnlyCompHome" style={{ boxShadow: window.localStorage.getItem("theme")&& "none" }}>
          <span>Noticias</span>
          <div className="OnlyCompHome_news_conteiner">
            <div className="news_conteiner">
              <div>
                <img src="https://picsum.photos/250/150?random=3" alt="img_noticia" />
              </div>
              <div>
                <h4>Noticia 1</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
            <div className="news_conteiner">
              <div>
                <img
                  src="https://picsum.photos/250/150?random=2"
                  alt="img_noticia"
                />
              </div>
              <div>
                <h4>Noticia 2</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
            <div className="news_conteiner">
              <div>
                <img
                  src="https://picsum.photos/250/150"
                  alt="img_noticia"
                />
              </div>
              <div>
                <h4>Noticia 3</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
            <div className="news_conteiner">
              <div>
                <img
                  src="https://picsum.photos/250/150?random=1"
                  alt="img_noticia"
                />
              </div>
              <div>
                <h4>Noticia 4</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="pdf_caldendario_sec">
        <div className="open_calendar" onClick={()=> open_calendar(prev => !prev)}>
          <h3>
            {calendar ? <i className="fa-solid fa-chevron-down"></i>: <i className="fa-solid fa-chevron-right"></i>}
            &nbsp;Eventos importantes
          </h3>
        </div>
        <div className="pdf_conteiner" style={calendar ? {animation:"fade-in-calendar 500ms forwards"}:{animation:"fade-out-calendar 500ms forwards"} } ref={calendar_ref}>
          <div className="pdf_caldanrio_pdfViewer" >
            <Calendar/>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
